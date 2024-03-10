<template>
  <div class="login">
    <div class="container">
      <el-row>
        <el-col :span="15">
          <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="9">
          <div class="grid-content ep-bg-purple-light" />
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
.login {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #cecfff;
}
</style>