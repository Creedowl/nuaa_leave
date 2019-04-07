<template>
  <el-header>
    <b id="header">请假系统<span>Alpha</span></b>
  </el-header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#header {
  font-size: 30px;
  color: white;
}

header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-top: 50%;
  align-items: center;
  justify-content: center;
  background-color: #3cb7f5;
  z-index: 100;
}
</style>
