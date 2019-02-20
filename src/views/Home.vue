<template>
  <el-main>
    <breadcrumb></breadcrumb>
    <div class="container">
      <section>
        <div class="section-head">
          <span class="title">热门促销</span>
          <ul class="categories"></ul>
        </div>
        <product-list :data="goodsList"></product-list>
      </section>
      <section>
        <div class="section-head">
          <span class="title">精品推荐</span>
          <ul class="categories">
            <li
              v-for="item in categories"
              :key="item.value"
            >{{ item.label }}</li>
          </ul>
        </div>
        <product-list :data="goodsList"></product-list>
      </section>
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
      goodsList: [],
      categories: [
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
