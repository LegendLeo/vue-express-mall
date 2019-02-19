<template>
  <el-col :span="6">
    <el-card :body-style="{ padding: '0px' }">
      <!-- <img :src="item.post" class="image"> -->
      <img
        src="http://element-cn.eleme.io/static/hamburger.50e4091.png"
        alt=""
        class="item-img"
      >
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button
            type="text"
            class="button"
          >操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date().toLocaleString()
    }
  }
}
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.item-img {
  width: 100%;
}
</style>
