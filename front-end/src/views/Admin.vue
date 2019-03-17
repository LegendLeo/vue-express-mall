<template>
  <div class="wrapper">
    <breadcrumb>管理后台</breadcrumb>
    <div class="inner-wrapper">
      <el-aside>
        <h3>目录</h3>
        <ul>
          <router-link tag="li"
            v-for="route in routes"
            :key="route.name"
            :to="route.link"
            class="link-item">
            <i :class="'iconfont ' + route.icon"></i>
            <span>{{ route.name }}</span>
          </router-link>
        </ul>
      </el-aside>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/layout/Breadcrumb'

export default {
  data () {
    return {
      routes: [
        { name: '待办订单', link: '/admin/orders', icon: 'icon-danju' },
        { name: '新增商品', link: '/admin/add', icon: 'icon-chuangjiandanju' },
        { name: '修改商品', link: '/admin/modify', icon: 'icon-chuangjiandanju' }
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
  .inner-wrapper {
    display: flex;
  }
}
.link-item {
  width: 94%;
  background: @main-blue;
  height: 50px;
  line-height: 50px;
  margin: 10px auto;
  text-align: center;
  font-size: 18px;
  box-sizing: border-box;
  color: #ffffff !important;
  transition: 0.2s;
  cursor: pointer;
  .iconfont {
    font-size: 1.1em;
    margin-right: 10px;
  }
  &.router-link-active,
  &:hover {
    background: #ffffff;
    border: 1px solid @main-blue;
    color: @main-blue !important;
  }
}
</style>
