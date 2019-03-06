<template>
  <el-header height="80px">
    <div class="container">
      <div class="left">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="logo"
        >
        <a
          href="/"
          class="title"
        >
          <h1>基于Express的商城系统——Leo的商城</h1>
        </a>
      </div>
      <div class="right">
        <shopping-cart></shopping-cart>
      </div>
    </div>
  </el-header>
</template>

<script>
import ShoppingCart from '@/components/shopping-cart/ShoppingCart'
export default {
  components: {
    ShoppingCart
  }
}
</script>

<style lang="less" scoped>
.el-header .container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  .left {
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
        font-size: 2.4em;
      }
    }
  }
  .right {
    height: 100%;
  }
}
</style>
