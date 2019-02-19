<template>
  <el-main class="container">
    <breadcrumb></breadcrumb>
    <list></list>
  </el-main>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import List from '@/components/List'

export default {
  name: 'home',
  components: {
    Breadcrumb,
    List
  }
}
</script>
