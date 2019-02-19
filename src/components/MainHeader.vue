<template>
  <el-header>
    <div class="container">
      <img src="@/assets/logo.png" alt="logo" class="logo">
      <a href="/" class="title">
        <h1>基于Express的商城系统——Leo的商城</h1>
      </a>
    </div>
  </el-header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.el-header .container {
  display: flex;
  align-items: center;
  .logo {
    height: 55px;
    margin-right: 20px;
  }
  .title {
    color: #409eff;
    text-decoration: none;
    h1 {
      display: inline;
      font-size: 3em;
    }
  }
}
</style>
