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
  background: #f0f0f0;
  margin-bottom: 15px;
  .container {
    padding: 10px 0;
    line-height: 25px;
    font-size: 14px;
  }
}
</style>
