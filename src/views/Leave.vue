<template>
  <el-form id="leaveForm" status-icon :rules="rules"
    ref="leave" :model="leave" label-width="60px">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="leave.name" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item label="学号" prop="student_num">
      <el-input v-model="leave.student_num" placeholder="学号"></el-input>
    </el-form-item>
    <el-form-item label="时段" prop="period">
      <el-select v-model="leave.period" placeholder="时段">
        <el-option label="早读" value='0'></el-option>
        <el-option label="晚自习" value='1'></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="种类" prop="type">
      <el-select v-model="leave.type" placeholder="类型">
        <el-option label="事假" value='0'></el-option>
        <el-option label="病假" value='1'></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="日期" prop="date">
      <el-date-picker
        v-model="leave.date"
        type="date"
        align="center"
        placeholder="请假日期"
        :pickerOptions="pickerOptions"
        :default-value="defaultTime">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="原因" prop="reason">
      <el-input
        type="textarea"
        :autosize="{minRows: 5}"
        placeholder="请输入具体的请假原因"
        v-model="leave.reason">
      </el-input>
    </el-form-item>
    <el-form-item label="记住">
      <el-switch v-model="leave.remember"></el-switch>
      <el-button id="submit" type="primary" :loading="loading" @click="submit()">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Leave',
  data () {
    return {
      loading: false,
      defaultTime: Date.now(),
      leave: {
        name: localStorage.name,
        student_num: localStorage.student_num,
        period: '0',
        type: '0',
        date: '',
        reason: '',
        remember: Boolean(localStorage.remember)
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() + 86400000 < Date.now()
        }
      },
      rules: {
        name: [
          { required: true, trigger: 'blur' }
        ],
        student_num: [
          { required: true, trigger: 'blur' }
        ],
        reason: [
          { required: true, trigger: 'blur' }
        ],
        period: [
          { required: true, trigger: 'blur' }
        ],
        type: [
          { required: true, trigger: 'blur' }
        ],
        date: [
          { required: true, trigger: 'blur' }
        ]
      }
    }
  },
  // computed: {
  //   defaultTime: function () {
  //     return Date.now()
  //   }
  // },
  methods: {
    submit () {
      this.loading = true
      this.$refs['leave'].validate().then(valid => {
        // TODO: timeout
        this.$http.post('http://httpbin.org/post', this.leave)
          .then(response => {
            // this.loading = false
            if (this.leave.remember) {
              localStorage.name = this.leave.name
              localStorage.student_num = this.leave.student_num
              localStorage.remember = this.leave.remember
            } else {
              delete localStorage.name
              delete localStorage.student_num
              delete localStorage.remember
            }
            this.$notify({
              title: '成功',
              message: 'msg',
              type: 'success'
            })
          })
          .catch(response => {
            this.loading = false
            this.$notify({
              title: '失败',
              message: 'msg',
              type: 'error'
            })
          })
      }).catch(valid => { this.loading = false })
    }
  }
}
</script>

<style scoped>
#leaveForm {
  text-align: left;
}

#submit {
  margin-left: 40%;
}
</style>
