<template>
  <el-container id="app">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </el-container>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  font-size: 14px;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul, ol {
  padding: 0;
  margin: 0;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-container {
  flex-direction: column !important;
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .el-main {
    padding: 0;
    background: #f5f7fc;
    overflow: visible;
  }
}
.el-breadcrumb__inner.is-link {
  color: #666 !important;
  &:hover {
    color: #409EFF !important;
  }
}
</style>
