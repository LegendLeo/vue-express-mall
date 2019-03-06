<template>
  <el-row :gutter="20">
    <product-list-item
      v-for="item in data"
      :key="item.id"
      :item="item"
    ></product-list-item>
  </el-row>
</template>

<script>
import ProductListItem from '@/components/product/ProductListItem'

export default {
  name: 'List',
  props: {
    data: Array
  },
  components: {
    ProductListItem
  }
}
</script>

<style>
</style>
