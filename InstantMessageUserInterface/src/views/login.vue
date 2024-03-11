<template>
  <div class="login">
    <div class="container">
      <el-row class="layout">
        <el-col :span="15">
          1
        </el-col>
        <el-col :span="9">
          2
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  .layout {
    width: 100%;
  }
}
.login {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #CECFFF;
}
</style>