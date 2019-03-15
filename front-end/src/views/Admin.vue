<template>
  <div class="wrapper">
    <breadcrumb>管理后台</breadcrumb>
    <el-aside>
      <h3>目录</h3>
      <ul>
        <li v-for="route in routes"
          :key="route.name">
          <router-link :to="route.link">
            <i :class="'iconfont ' + route.icon"></i>
            <span>{{ route.name }}</span>
          </router-link>
        </li>
      </ul>
    </el-aside>
    <router-view></router-view>
  </div>
</template>

<script>
import Breadcrumb from '@/components/layout/Breadcrumb'

export default {
  data () {
    return {
      routes: [
        { name: '订单', link: 'orders', icon: 'icon-danju' },
        { name: '新增', link: 'add', icon: 'icon-chuangjiandanju' }
      ]
    }
  },
  components: {
    Breadcrumb
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  margin-top: 80px;
}
</style>
