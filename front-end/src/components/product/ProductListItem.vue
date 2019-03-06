<template>
  <el-col :span="6">
    <el-card
      :body-style="{ padding: '0px' }"
      class="item"
    >
      <img
        v-lazy="GLOBAL.serverHost + '/images/' + item.img"
        class="item-img"
        :alt="item.productName"
      >
      <div class="item-info">
        <span class="item-name">{{ item.name }}</span>
        <div class="bottom">
          <div class="price">
            <span>￥{{ item.price }}</span>
            <del>￥{{ item.price }}</del>
          </div>
          <div class="check-btn" @click="addCartItem(item)">加入购物车</div>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    item: Object
  },
  data () {
    return {
      currentDate: new Date().toLocaleString()
    }
  },
  methods: {
    ...mapMutations({
      addCartItem: 'ADD_CART_ITEM'
    })
  }
}
</script>

<style lang="less" scoped>
.item {
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
    border: 1px solid @main-orange;
  }
}
.item-img {
  width: 100%;
  max-height: 273px;
}
.item-info {
  padding: 14px;
  line-height: 1.2em;
  .item-name {
    font-size: 18px;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      span {
        font-size: 18px;
        color: @main-orange;
      }
      del {
        margin-left: 8px;
        color: #999999;
      }
    }
    .check-btn {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      padding: 0 8px;
      color: @main-orange;
      border: 1px solid @main-orange;
      cursor: pointer;
      &:hover {
        color: #ffffff;
        background: @main-orange;
        transition: 0.3s;
      }
    }
  }
}
</style>
