<template>
  <el-main>
    <breadcrumb></breadcrumb>
    <div class="container">
      <handle-bar @change="changeListType"></handle-bar>
      <product-list :data="productList"></product-list>
    </div>
  </el-main>
</template>

<script>
import Breadcrumb from '@/components/layout/Breadcrumb'
import ProductList from '@/components/product/ProductList'
import HandleBar from '@/components/product/HandleBar'
import { getProductList } from '@/api/product'

export default {
  name: 'home',
  data () {
    return {
      productList: []
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct (params) {
      getProductList(params).then(res => {
        const data = res.data
        this.productList = data
      })
    },
    changeListType (type) {
      this.getProduct({ type })
    }
  },
  components: {
    Breadcrumb,
    ProductList,
    HandleBar
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
