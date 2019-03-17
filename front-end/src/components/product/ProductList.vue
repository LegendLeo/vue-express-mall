<template>
  <div class="wrapper">
    <div class="handle-bar">
      <div class="bar-left">
        <span>分类：</span>
        <el-select v-model="type"
          size="small"
          @change="changeListType">
          <el-option v-for="item in categories"
            :key="item.value"
            :label="item.label"
            :value="item.value"></el-option>
        </el-select>
      </div>
    </div>
    <el-row :gutter="15">
      <product-list-item v-for="item in productList"
        :key="item._id"
        :item="item"></product-list-item>
    </el-row>
  </div>
</template>

<script>
import ProductListItem from '@/components/product/ProductListItem'
import { getProductList } from '@/api/product'

export default {
  name: 'ProductList',
  data () {
    return {
      type: 'all',
      productList: [],
      categories: [
        {
          label: '全部',
          value: 'all'
        },
        {
          label: '家用',
          value: 'home'
        },
        {
          label: '配件',
          value: 'fitting'
        },
        {
          label: '出行',
          value: 'travel'
        }
      ]
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
    changeListType () {
      this.getProduct({ type: this.type })
    }
  },
  components: {
    ProductListItem
  }
}
</script>

<style lang="less" scoped>
.handle-bar {
  height: 50px;
  line-height: 50px;
  margin-bottom: 15px;
}
</style>
