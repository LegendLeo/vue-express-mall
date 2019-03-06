<template>
  <div class="container handle-bar">
    <div class="bar-left">
      <span>分类：</span>
      <el-select v-model="type" size="small" @change="$emit('change', type)">
        <el-option
          v-for="item in categories"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 'all',
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
