<template>
  <el-main>
    <breadcrumb></breadcrumb>
    <div class="container">
      <product-list :data="goodsList"></product-list>
    </div>
  </el-main>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import ProductList from '@/components/ProductList'
import { getGoodsList } from '@/api/goods'

export default {
  name: 'home',
  data () {
    return {
      goodsList: []
    }
  },
  created () {
    getGoodsList().then(res => {
      const data = res.data
      this.goodsList = data
    })
  },
  components: {
    Breadcrumb,
    ProductList
  }
}
</script>
