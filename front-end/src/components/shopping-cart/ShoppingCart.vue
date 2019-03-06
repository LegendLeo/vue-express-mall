<template>
  <div :class="showCart ? 'wrapper-open wrapper' : 'wrapper'">
    <div
      class="nav-item"
      @click="showCart = true"
    >
      <i class="iconfont icon-caigou"></i>
      <el-badge :value="cartListCount">
        <span>购物车</span>
      </el-badge>
    </div>
    <div
      class="modal-overlay"
      @click="showCart = false"
    ></div>
    <div class="cart pushy">
      <el-table
        :data="cartList"
        height="90%"
      >
        <el-table-column
          type="selection"
          width="50"
        ></el-table-column>
        <el-table-column
          label="主图"
          width="120"
        >
          <template slot-scope="scope">
            <img
              class="cart-item-img"
              :src="GLOBAL.serverHost + '/images/' + scope.row.img"
              :alt="scope.row.name"
            >
          </template>
        </el-table-column>
        <el-table-column
          label="名称"
          prop="name"
          width="120"
        ></el-table-column>
        <el-table-column
          label="价格"
          width="80"
        >
          <template slot-scope="scope">
            ￥{{ scope.row.price }}
          </template>
        </el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.count"
              size="mini"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="60"
        >
          <template>
            <el-button>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      showCart: false,
      cartListNow: []
    }
  },
  computed: {
    ...mapGetters([
      'cartList',
      'cartListCount'
    ])
  },
  created () {
    this.cartListNow = Object.assign([], this.cartList)
  }
}
</script>

<style lang="less" scoped>
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
.wrapper {
  height: 100%;
  .modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fade 500ms;
  }
  .pushy {
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 9999;
    background: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.2s cubic-bezier(0.16, 0.68, 0.43, 0.99);
  }
  .nav-item {
    height: 100%;
    font-size: 24px;
    color: @main-blue;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 30px;
      color: @main-blue;
      transform: translateY(2px);
    }
  }
  &-open {
    .modal-overlay {
      display: block;
    }
    .pushy {
      width: 600px;
      transform: translate3d(0, 0, 0);
    }
  }
}
.cart-item-img {
  width: 100%;
}
</style>

<style lang="less">
.el-table .cell {
  text-align: center !important;
}
</style>
