<template>
  <el-footer>
    <el-tabs tab-position="bottom" :stretch="true" @tab-click="test">
      <el-tab-pane>
        <span slot="label">主页</span>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">历史</span>
      </el-tab-pane>
    </el-tabs>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    test (tab) {
      switch (tab.index) {
        case '0':
          this.$router.push('/')
          break
        case '1':
          this.$router.push('about')
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #E6A23C;
  z-index: 100;
}

span {
  font-size: 20px;
  color: #ffffff;
}
</style>
