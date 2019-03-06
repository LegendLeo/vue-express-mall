<template>
  <div class="breadcrumb">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class="container"
    >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <slot></slot>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
.breadcrumb {
  color: #666 !important;
  background: #f0f0f0;
  margin-bottom: 15px;
  box-shadow: 0 0 12px 0 rgba(0,0,0,.1) inset;
  .container {
    padding: 10px 0;
    line-height: 25px;
    font-size: 16px;
  }
}
</style>
