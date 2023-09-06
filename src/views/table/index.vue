<template>
  <el-row>
    <el-col :span="8" style="text-align: right">
      <el-button type="primary" round @click="handleExport" style="margin-left: 10px; margin-top: 4px">
        1. Tải file
      </el-button>
    </el-col>
    <el-col :span="8">
      <el-select v-model="table" class="m-2" placeholder="Select" size="large">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-col>
    <el-col :span="8" style="text-align: left">
      <el-upload
          ref="upload"
          class="upload-demo"
          :limit="1"
          :on-exceed="handleExceed"
          :auto-upload="false"
          :on-change="handleChange"
      >
        <template #trigger>
          <el-button type="primary">2. Chọn file</el-button>
        </template>
<!--        |-->
<!--        <el-button class="" type="success" @click="submitUpload">-->
<!--          upload to server-->
<!--        </el-button>-->
<!--        <template #tip>-->
<!--          <div class="el-upload__tip text-red">-->
<!--            Chỉ gửi 1 file-->
<!--          </div>-->
<!--        </template>-->
      </el-upload>
    </el-col>
  </el-row>

</template>
<script>
import {mapGetters} from 'vuex'
import {ElMessage} from 'element-plus'
import {genFileId} from 'element-plus';

export default {
  data() {
    return {
      options: [
        {
          value: 'customers',
          label: 'Customers',
        },
        {
          value: 'collect_point',
          label: 'Collect point',
        },
        {
          value: 'users',
          label: 'Users',
        }
      ],
      table: 'customers'
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
    handleExceed(files) {
      this.$refs.upload.clearFiles();
      const file = files[0];
      file.uid = genFileId();
      this.$refs.upload.handleStart(file);
    },
    handleChange(file, fileList) {
      console.log('this.fileList: ', this.fileList)
      console.log('this.file: ', file)
      this.fileList = [file];
      console.log('this.fileList 2: ', this.fileList)
      if (this.fileList.length > 0) {
        console.log('file: ', this.fileList[0])
        if (!this.isExcel(this.fileList[0])) {
          this.$message.error('Chỉ upload file có đuôi .xlsx')
          return false
        }
        // this.$confirm('Are you sure?')
        //     .then(_ => {
              this.$store.dispatch('tableModule/uploadTable', {file: this.fileList[0].raw, tableName: this.table})
                  .then(res => {
                    console.log('resFile: ', res)
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
                    this.$refs.upload.clearFiles()
                  })
            // })
            // .catch(_ => {
            // })
      }
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
              this.$store.dispatch('tableModule/uploadTable', {file: this.fileList[0].raw, tableName: this.table})
                  .then(res => {
                    console.log('resFile: ', res)
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
                    this.$refs.upload.clearFiles()
                  })
            })
            .catch(_ => {
            })
      }
    },
    handleExport() {
      this.loading = true
      const params = {
        tableName: this.table
      }
      this.$store.dispatch('tableModule/getTableExport', params).then(res => {
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
        this.$refs.upload.clearFiles()
      })
      this.loading = false
    },
    isExcel(file) {
      return /\.(xlsx)$/.test(file.name)
    },
    downloadFile(data) {
      const blob = new Blob([data], {type: 'application/octet-stream'});
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', this.table + '.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  }
}
</script>
