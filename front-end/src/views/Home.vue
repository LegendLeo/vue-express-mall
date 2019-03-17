<template>
  <el-main>
    <breadcrumb></breadcrumb>
    <div class="container">
      <product-list></product-list>
    </div>
  </el-main>
</template>

<script>
import Breadcrumb from '@/components/layout/Breadcrumb'
import ProductList from '@/components/product/ProductList'

export default {
  name: 'home',
  components: {
    Breadcrumb,
    ProductList
  }
}
</script>

<style lang="less" scoped>
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span.title {
    display: inline-block;
    font-size: 2em;
    margin: 15px;
    font-weight: normal;
  }
  .categories {
    display: flex;
    list-style: none;
    li {
      font-size: 16px;
      padding-bottom: 5px;
      margin: 0 15px;
      color: #424242;
      border-bottom: 2px solid transparent;
      transition: border-color 0.5s;
      cursor: pointer;
      &:hover,
      .active {
        color: @main-orange;
        border-bottom: 2px solid @main-orange;
      }
    }
  }
}
</style>
