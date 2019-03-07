<template>
  <el-container id="app">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </el-container>
</template>

<script>
import MainHeader from '@/components/layout/MainHeader'
import MainFooter from '@/components/layout/MainFooter'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="less">
// 阿里图标库（使用了菜鸟裹裹的一套）
@import '//at.alicdn.com/t/font_1072177_dciwjqkctsa.css';
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
  .el-header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 999;
  }
  .el-main {
    margin-top: 80px;
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
