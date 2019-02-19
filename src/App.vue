<template>
  <el-container id="app">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </el-container>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

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
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}
</style>
