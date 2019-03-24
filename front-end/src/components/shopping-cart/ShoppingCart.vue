<template>
  <div :class="showCart ? 'wrapper-open wrapper' : 'wrapper'">
    <div class="nav-item"
      @click="showCart = true">
      <i class="iconfont icon-caigou"></i>
      <el-badge :value="cartListCount">
        <span>购物车</span>
      </el-badge>
    </div>
    <div class="modal-overlay"
      @click="showCart = false"></div>
    <div class="cart pushy">
      <el-table :data="cartList"
        ref="cartTable"
        @selection-change="handleCartSelect"
        height="calc(100% - 50px)">
        <el-table-column type="selection"
          width="50"></el-table-column>
        <el-table-column label="主图"
          width="120">
          <template slot-scope="scope">
            <img class="cart-item-img"
              :src="scope.row.poster"
              :alt="scope.row.name">
          </template>
        </el-table-column>
        <el-table-column label="名称"
          prop="name"
          width="120"></el-table-column>
        <el-table-column label="价格"
          width="80">
          <template slot-scope="scope">
            ￥{{ scope.row.price }}
          </template>
        </el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            <el-input-number v-model="cartCounterArr[scope.$index]"
              size="mini"
              :min="1"
              @change="changeItemCount(scope.$index)"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="总价"
          width="80">
          <template slot-scope="scope">
            ￥{{ scope.row.price*scope.row.count }}
          </template>
        </el-table-column>
        <el-table-column label="操作"
          width="50">
          <template slot-scope="scope">
            <i class="iconfont icon-shanchu delete-icon"
              @click="deleteItem(scope.row._id)"></i>
          </template>
        </el-table-column>
      </el-table>
      <div class="handle-box">
        <div class="handle-box-left">
          <el-checkbox :value="selectedAll"
            @change="toggleSelection">全选</el-checkbox>
        </div>
        <div class="handle-box-right">
          <p>￥{{ totalPrice }}</p>
          <div class="check-btn">去支付</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      showCart: false,
      cartCounterArr: [],
      totalPrice: 0,
      selected: []
    }
  },
  computed: {
    selectedAll () {
      return this.selected.length === this.cartList.length
    },
    ...mapGetters([
      'cartList',
      'cartListCount'
    ])
  },
  watch: {
    cartList (val) {
      this.cartCounterArr = val.map(item => item.count)
    }
  },
  methods: {
    changeItemCount (index) {
      this.changeCartItemCount({
        _id: this.cartList[index]._id,
        count: this.cartCounterArr[index]
      })
    },
    deleteItem (id) {
      this.$confirm('确定删除该项么?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.deleteCartItem(id)
        })
    },
    handleCartSelect (selection) {
      this.selected = selection
      let total = selection.reduce((total, cur) => {
        total += cur.count * cur.price
        return total
      }, 0)
      this.totalPrice = total
    },
    toggleSelection () {
      if (!this.selectedAll) {
        this.cartList.forEach(row => {
          if (!this.selected.includes(row)) {
            this.$refs.cartTable.toggleRowSelection(row)
          }
        })
      } else {
        this.cartList.forEach(row => {
          this.$refs.cartTable.toggleRowSelection(row)
        })
      }
    },
    ...mapMutations({
      changeCartItemCount: 'CHANGE_CART_ITEM_COUNT',
      deleteCartItem: 'DELETE_CART_ITEM'
    })
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
    cursor: pointer;
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
      width: 640px;
      transform: translate3d(0, 0, 0);
    }
  }
}
.cart {
  .cart-item-img {
    width: 100%;
  }
  .delete-icon {
    color: @main-danger;
    font-size: 24px;
  }
}
.handle-box {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 640px;
  background: #fff;
  border: 1px solid #e9e9e9;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  &-left {
    padding-left: 20px;
  }
  &-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
      margin: 0;
    }
    .check-btn {
      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      background: @main-orange;
      color: #ffffff;
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>

<style lang="less">
.el-table .cell {
  text-align: center !important;
}
</style>
