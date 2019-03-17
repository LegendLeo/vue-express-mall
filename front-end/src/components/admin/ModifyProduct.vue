<template>
  <main>
    <product-list :isModify="true"></product-list>
  </main>
</template>

<script>
import ProductList from '@/components/product/ProductList'

export default {
  components: {
    ProductList
  }
}
</script>

<style lang="less" scoped>
main {
  flex: 1;
  overflow: hidden;
  padding: 10px;
}
</style>
