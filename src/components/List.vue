<template>
  <el-row>
    <list-item v-for="i in 2" :key="i"></list-item>
  </el-row>
</template>

<script>
import ListItem from '@/components/ListItem'

export default {
  name: 'List',
  components: {
    ListItem
  }
}
</script>

<style>

</style>
