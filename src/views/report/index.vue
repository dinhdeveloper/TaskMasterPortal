<template>
  <el-row>
    <el-col :span="4">
    </el-col>
    <el-col :span="4">
      <el-input v-if="role === 'CUSTOMER'"
          v-model="search.cusName"
          class="w-50 m-2"
          size="large"
          placeholder="Nhập tên"
                disabled
      />
      <el-input v-else
          v-model="search.cusName"
          class="w-50 m-2"
          size="large"
          placeholder="Nhập tên"
      />
    </el-col>
    <el-col :span="7">
      <el-date-picker
          v-model="search.dateRange"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          size="large"
          format="DD/MM/YYYY"
      />
    </el-col>
    <el-col :span="1">
      <el-button type="primary" round @click="handleSearch" style="margin-left: 10px; margin-top: 4px">
        Tìm
      </el-button>
    </el-col>
    <el-col :span="8">
            <el-button type="primary" round @click="handleExport" style="margin-left: 10px; margin-top: 4px">
              Tải báo cáo
            </el-button>
    </el-col>
  </el-row>

  <br><br>

  <div class="class" style="width: 80%; height: 340px; margin-left: 10%">
    <el-table
        v-loading="loading"
        :data="list"
        stripe
        style="width: 100%; height: 100%"
    >
      <el-table-column v-for="(name, index) in columnName" :key="index" :prop="name" :label="name" width="150"/>
    </el-table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as config from '../../config'
import {ref} from 'vue';
import {genFileId} from 'element-plus';
import {
  formatDate
} from '@/utils/helper'
import {ElMessage} from 'element-plus'
import { getRoles, getUserName } from '@/utils/auth'

const {
  DEFAULT_TOTAL_ITEM_PER_PAGE,
  DEFAULT_PAGE_SIZES,
  FULL_PAGE_SIZE
} = config.default

export default {
  data() {
    return {
      // list: [
      //   [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,41,42,43],
      //   [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,41,42,43]
      // ],
      list: [],
      columnName: ['custom_name', 'weight_time', 'vl1', 'vl2', 'vl3', 'vl4', 'vl5', 'vl6', 'vl7', 'vl8', 'vl9', 'vl10', 'vl11', 'vl12', 'vl13', 'vl14', 'vl15', 'vl16', 'vl17', 'vl18', 'vl19', 'vl20', 'vl21', 'vl22', 'vl23', 'vl24', 'vl25', 'vl26', 'vl27', 'vl28', 'vl29', 'vl30', 'vl31', 'vl32', 'vl33', 'vl34', 'vl35', 'vl36', 'vl37', 'vl38', 'vl39', 'vl40', 'total'],
      search: {
        dateRange: [],
        cusName: '',
      },
      perPage: DEFAULT_TOTAL_ITEM_PER_PAGE,
      defaultPageSize: DEFAULT_PAGE_SIZES,
      currentPage: 1,
      loading: false,
      role: getRoles(),
      userName: getUserName()
    };
  },
  computed: {
    ...mapGetters({
      reportList: 'reportModule/reportListGetter',
    }),
    language() {
      return this.$store.getters.language
    },
    // transformedData() {
    //   return this.list.map(row => {
    //     const obj = {};
    //     this.columnName.forEach((name, index) => {
    //       obj[name] = row[index];
    //     });
    //     return obj;
    //   });
    // }
  },
  watch: {
    reportList(value) {
      this.list = value.map(row => {
        const obj = {};
        this.columnName.forEach((name, index) => {
          obj[name] = row[index];
        });
        return obj;
      });
    }
  },
  methods: {
    handleSearch() {
      this.loading = true
      const params = {
        // page: this.currentPage,
        // size: 30,
        cusName: this.search.cusName,
        role: this.role,
        userName: this.userName
      }

      if(this.search.cusName == null) {
        ElMessage({
          showClose: true,
          message: 'Bạn chưa nhập tên!',
          type: 'warning',
        })
        this.loading = false
        return
      }

      if (this.search.dateRange) {
        const date1 = new Date(this.search.dateRange[0]);
        const date2 = new Date(this.search.dateRange[1]);
        const timeDifference = date2.getTime() - date1.getTime();
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
        const absoluteDaysDifference = Math.abs(daysDifference);
        console.log('absoluteDaysDifference: ', absoluteDaysDifference)
        if (absoluteDaysDifference > 89) {
          this.loading = false
          ElMessage({
            showClose: true,
            message: 'Khoảng cách không vượt quá 90 ngày!',
            type: 'warning',
          })
          return
        }

        params.fromDate = formatDate(this.search.dateRange[0])
        params.toDate = formatDate(this.search.dateRange[1])
        console.log('fromDate: ', params.fromDate)
        console.log('fromDate: ', params.toDate)

        this.$store.dispatch('reportModule/fetchReportList', params).then(res => {
          console.log('this.reportList: ', this.reportList)
          if(res && res.success) {
            ElMessage({
              showClose: true,
              message: 'success!',
              type: 'success',
            })
          }else {
            ElMessage.error('Có lỗi xảy ra.')
            this.loading = false
            return
          }
        })
        this.loading = false
      } else {
        ElMessage({
          showClose: true,
          message: 'Bạn chưa chọn ngày!',
          type: 'warning',
        })
        this.loading = false
      }
    },
    handleExport() {
      const params = {
        // page: this.currentPage,
        // size: 30,
        cusName: this.search.cusName,
        role: this.role,
        userName: this.userName
      }

      if(this.search.cusName == null) {
        ElMessage({
          showClose: true,
          message: 'Bạn chưa chọn ngày!',
          type: 'warning',
        })
        return
      }

      if (this.search.dateRange) {
        const date1 = new Date(this.search.dateRange[0]);
        const date2 = new Date(this.search.dateRange[1]);
        const timeDifference = date2.getTime() - date1.getTime();
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
        const absoluteDaysDifference = Math.abs(daysDifference);
        console.log('absoluteDaysDifference: ', absoluteDaysDifference)
        if (absoluteDaysDifference > 89) {
          this.loading = false
          ElMessage({
            showClose: true,
            message: 'Khoảng cách không vượt quá 90 ngày!',
            type: 'warning',
          })
          return
        }

        params.fromDate = formatDate(this.search.dateRange[0])
        params.toDate = formatDate(this.search.dateRange[1])
        console.log('fromDate: ', params.fromDate)
        console.log('fromDate: ', params.toDate)

        this.$store.dispatch('reportModule/getReportExport', params).then(res => {
          console.log('resFile: ', res)
          // if(res && res.success) {
          //   ElMessage({
          //     showClose: true,
          //     message: 'success!',
          //     type: 'success',
          //   })
          // }else {
          //   ElMessage.error('Có lỗi xảy ra.')
          //   // return
          // }
          this.downloadFile(res.data);
        })
      } else {
        ElMessage({
          showClose: true,
          message: 'Bạn chưa chọn ngày!',
          type: 'warning',
        })
      }
    },
    downloadFile(data) {
      const blob = new Blob([data], {type: 'application/octet-stream'});
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report-export.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  }
};
</script>

<style lang="scss">

.el-table .cell {
  word-break: break-word;
}
</style>
