<template>
  <el-col
    :span="6"
  >
    <el-card :body-style="{ padding: '0px' }" class="item">
      <img
        v-lazy="'/static/images/' + item.img"
        class="item-img"
        :alt="item.productName"
      >
      <div class="item-info">
        <span>{{ item.name }}</span>
        <div class="bottom clearfix">
          <time class="time">￥{{ item.price }}</time>
          <el-button
            type="text"
            class="button"
          >加入购物车</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data () {
    return {
      currentDate: new Date().toLocaleString()
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.3);
  }
}
.item-img {
  width: 100%;
  max-height: 273px;
}
.item-info {
  padding: 14px;
  line-height: 1.2em;
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .el-button {
    float: right;
  }
}
</style>
