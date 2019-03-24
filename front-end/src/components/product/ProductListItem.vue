<template>
  <el-col :xs="6"
    :sm="6"
    :md="6"
    :xl="6">
    <el-card :body-style="{ padding: '0px' }"
      class="item">
      <img v-lazy="item.poster"
        class="item-img"
        :alt="item.name">
      <div class="item-info">
        <span class="item-name">{{ item.name }}</span>
        <div class="bottom">
          <div class="price">
            <span>￥{{ item.price }}</span>
            <del>￥{{ item.oldPrice }}</del>
          </div>
          <template v-if="isModify">
            <router-link :to="'/admin/modify/' + item._id">
              <el-button size="small">修改</el-button>
            </router-link>
            <el-button type="danger"
              size="small"
              @click="deleteItem">删除</el-button>
          </template>
          <div v-else-if="isInCart"
            class="check-btn check-btn-added">已加入购物车</div>
          <div v-else-if="!isInCart"
            class="check-btn"
            @click.once="addToCart(item)">加入购物车</div>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { deleteProduct } from '@/api/product'

export default {
  props: {
    item: Object
  },
  data () {
    return {
      isModify: this.$route.name === 'modifyProduct',
      currentDate: new Date().toLocaleString()
    }
  },
  computed: {
    isInCart () {
      return this.cartList.some(val => val._id === this.item._id)
    },
    ...mapGetters([
      'cartList'
    ])
  },
  methods: {
    deleteItem () {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteProduct(this.item._id).then(res => {
          this.$message.success('删除成功！')
          this.$emit('delete')
        }).catch(err => {
          this.$message.error(err.data.msg)
        })
      }).catch(() => { })
    },
    addToCart (item) {
      this.addCartItem(item)
      this.$message.success('添加成功！')
    },
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
      &-added,
      &:hover {
        color: #ffffff;
        background: @main-orange;
        transition: 0.3s;
      }
    }
  }
}
</style>

<style lang="less">
.el-card__body {
  position: relative;
  width: 100%;
  height: 90px;
  padding-bottom: 100% !important;
  .item-img {
    width: 100%;
    height: calc(100% - 90px);
    position: absolute;
  }
  .item-info {
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
  }
}
</style>
