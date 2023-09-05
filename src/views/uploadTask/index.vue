<template>
  <!--  <el-button type="primary" @click="handleLogin">login</el-button>-->

  <el-row>
    <el-col :span="8">
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
          @change="handleChangeDate"
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
        :data="jobList"
        stripe
        @selection-change="handleSelectionChange"
        style="width: 100%; height: 100%"
    >
      <el-table-column prop="id" label="Mã cv" width="70"/>
      <el-table-column prop="collectPoint" label="Địa điểm" width="200" style="white-space: pre-line;"/>
      <el-table-column prop="createDate" label="Ngày tạo" width="100"/>
      <el-table-column prop="jobType" label="Loại cv" width="200"/>
      <el-table-column prop="employee_1" label="nv 1" width="200"/>
      <el-table-column prop="employee_2" label="nv 2" width="200"/>
      <el-table-column prop="employee_3" label="Tài xế" width="200"/>
      <el-table-column prop="priority" label="Ưa tiên" width="100"/>
      <el-table-column prop="note" label="Ghi chú" width="200"/>
      <el-table-column v-if="jobList !== null" type="selection" width="55" />
    </el-table>
  </div>
  <!--  <div class="class" style="width: 80%; height: 350px; margin-left: 10%">-->
  <!--    <el-table :data="jobList" stripe style="width: 100%; height: 100%">-->
  <!--      <el-table-column label="abc" align="center">-->
  <!--        <template v-slot="scope">-->
  <!--          <span>{{ scope.row.id }}</span>-->
  <!--        </template>-->
  <!--      </el-table-column>-->
  <!--    </el-table>-->

  <!--  </div>-->

  <br>

  <el-row>
    <el-col :span="12">
      <el-upload
          ref="upload"
          class="upload-demo"
          :limit="1"
          :on-exceed="handleExceed"
          :auto-upload="false"
          :on-change="handleChange"
      >
        <template #trigger>
          <el-button type="primary">select file</el-button>
        </template>
        |
        <el-button class="" type="success" @click="submitUpload">
          upload to server
        </el-button>
        <template #tip>
          <div class="el-upload__tip text-red">
            Chỉ gửi 1 file
          </div>
        </template>
      </el-upload>
    </el-col>
    <el-col :span="12">
      <el-button type="primary" round @click="handlePushNoti" style="margin-left: 10px">
        Gửi
      </el-button>
    </el-col>
  </el-row>

  <div style="display: flex;">
    <el-pagination
        :page-size="30"
        :pager-count="11"
        layout="prev, pager, next"
        :total="totalItems"
        @current-change="changePage"
        style="margin-left: auto;"
    />
  </div>

</template>

<script>
import router from "@/router";
import {mapGetters} from 'vuex'
import * as config from '../../config'
import {ref} from 'vue';
import {genFileId} from 'element-plus';
import {
  formatDate
} from '@/utils/helper'
import {ElMessage} from 'element-plus'

const {
  DEFAULT_TOTAL_ITEM_PER_PAGE,
  DEFAULT_PAGE_SIZES,
  FULL_PAGE_SIZE
} = config.default
export default {
  data() {
    return {
      loading: false,
      selectedIds: [],
      search: {
        dateRange: [],
        fileList: [],
      },
      perPage: DEFAULT_TOTAL_ITEM_PER_PAGE,
      defaultPageSize: DEFAULT_PAGE_SIZES,
      currentPage: 1,
      loginForm: {
        username: 'adminduy',
        password: '123456'
      },
      data: [
      ]
    }
  },
  computed: {
    ...mapGetters({
      jobList: 'uploadTaskModule/jobsGetter',
      totalItems: 'uploadTaskModule/totalGetter',
    }),
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSearch() {
      this.loading = true
      const params = {
        page: this.currentPage,
        size: 30
      }

      if (this.search.dateRange) {
        const date1 = new Date(this.search.dateRange[0]);
        const date2 = new Date(this.search.dateRange[1]);
        const timeDifference = date2.getTime() - date1.getTime();
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
        const absoluteDaysDifference = Math.abs(daysDifference);
        console.log('absoluteDaysDifference: ', absoluteDaysDifference)
        if (absoluteDaysDifference > 4) {
          this.loading = false
          ElMessage({
            showClose: true,
            message: 'Khoảng cách không vượt quá 5 ngày!',
            type: 'warning',
          })
          return
        }

        params.fromDate = formatDate(this.search.dateRange[0])
        params.toDate = formatDate(this.search.dateRange[1])
        console.log('fromDate: ', params.fromDate)
        console.log('fromDate: ', params.toDate)

        this.$store.dispatch('uploadTaskModule/fetchJobs', params).then(res => {
          console.log('res: ', res)
          if(res && res.success) {
            ElMessage({
              showClose: true,
              message: 'success!',
              type: 'success',
            })
          }else {
            ElMessage.error('Có lỗi xảy ra.')
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
      this.loading = true
      const params = {
        page: this.currentPage,
        size: 30
      }

      if (this.search.dateRange) {
        const date1 = new Date(this.search.dateRange[0]);
        const date2 = new Date(this.search.dateRange[1]);
        const timeDifference = date2.getTime() - date1.getTime();
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
        const absoluteDaysDifference = Math.abs(daysDifference);
        console.log('absoluteDaysDifference: ', absoluteDaysDifference)
        if (absoluteDaysDifference > 4) {
          this.loading = false
          ElMessage({
            showClose: true,
            message: 'Khoảng cách không vượt quá 5 ngày!',
            type: 'warning',
          })
          return
        }

        params.fromDate = formatDate(this.search.dateRange[0])
        params.toDate = formatDate(this.search.dateRange[1])
        console.log('fromDate: ', params.fromDate)
        console.log('fromDate: ', params.toDate)

        this.$store.dispatch('uploadTaskModule/getJobsExport', params).then(res => {
          console.log('resFile: ', res)
          // if(res && res.success) {
          //   ElMessage({
          //     showClose: true,
          //     message: 'success!',
          //     type: 'success',
          //   })
          // }else {
          //   ElMessage.error('Có lỗi xảy ra.')
          //   return
          // }
          this.downloadFile(res.data);
          this.$refs.upload.clearFiles()
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
    handleChangeDate() {
      console.log('dateRang: ', this.search.dateRange)
    },
    changePage(e) {
      this.currentPage = e
      this.handleSearch()
    },
    handleLogin() {
      this.loading = true
      this.$store
          .dispatch('auth/LoginByUsername', this.loginForm)
          .then(res => {
            this.loading = false
            console.log('abc')
            router.push('/')
          })
          .catch(() => {
            this.loading = false
          })
    },
    handleChange(file, fileList) {
      console.log('this.fileList: ', this.fileList)
      console.log('this.file: ', file)
      this.fileList = [file];
    },
    submitUpload() {
      console.log('this.fileList 2: ', this.fileList)
      if (this.fileList.length > 0) {
        console.log('file: ', this.fileList[0])
        if (!this.isExcel(this.fileList[0])) {
          this.$message.error('Chỉ upload file có đuôi .xlsx')
          return false
        }
        this.$confirm('Are you sure?')
            .then(_ => {
              this.$store.dispatch('uploadTaskModule/uploadTaskFile', {file: this.fileList[0].raw})
                  .then(res => {
                    console.log('resFile: ', res)
                    // if(res && res.success) {
                    //   ElMessage({
                    //     showClose: true,
                    //     message: 'success!',
                    //     type: 'success',
                    //   })
                    // }else {
                    //   ElMessage.error('Có lỗi xảy ra.')
                    //   return
                    // }
                    this.downloadFile(res.data);
                    this.$refs.upload.clearFiles()
                  })
            })
            .catch(_ => {
            })
      }
    },
    handleExceed(files) {
      this.$refs.upload.clearFiles();
      const file = files[0];
      file.uid = genFileId();
      this.$refs.upload.handleStart(file);
    },
    isExcel(file) {
      return /\.(xlsx)$/.test(file.name)
    },
    downloadFile(data) {
      const blob = new Blob([data], {type: 'application/octet-stream'});
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CongViec-Upload-Report.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    handleSelectionChange(selection) {
      // Cập nhật danh sách selectedIds khi có sự kiện selection-change
      this.selectedIds = selection.map(item => item.id);
    },
    handlePushNoti() {
      this.$store.dispatch('uploadTaskModule/pushNoti', this.selectedIds).then(res => {
        if(res && res.success) {
          ElMessage({
            showClose: true,
            message: 'success!',
            type: 'success',
          })
        }else {
          ElMessage.error('Có lỗi xảy ra.')
        }
      })
    }
  },
}
</script>
<style lang="scss">

.el-table .cell {
  word-break: break-word;
}
</style>

