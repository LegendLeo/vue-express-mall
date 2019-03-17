<template>
  <main>
    <el-form label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="product.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="product.description"></el-input>
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="product.type">
          <el-option v-for="item in categories"
            :key="item.value"
            :value="item.value"
            :label="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="product.price"></el-input>
      </el-form-item>
      <el-form-item label="原价">
        <el-input v-model="product.oldPrice"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-upload action="/api/upload"
          :headers="{ authorization }"
          :show-file-list="false"
          :on-success="handleImageSuccess"
          :before-upload="beforeImageUpload"
          class="image-uploader">
          <img v-if="imageUrl"
            :src="imageUrl"
            class="image">
          <i v-else
            class="el-icon-plus image-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitProduct">提交</el-button>
      </el-form-item>
    </el-form>
  </main>
</template>

<script>
import { addProduct } from '@/api/product'

export default {
  data () {
    return {
      authorization: localStorage.getItem('token'),
      product: {
        name: '',
        type: '',
        description: '',
        price: '',
        oldPrice: '',
        poster: ''
      },
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
      ],
      imageUrl: ''
    }
  },
  methods: {
    handleImageSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.product.poster = res.data.url
    },
    beforeImageUpload (file) {
      const isImg = file.type.includes('image')
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isImg) {
        this.$message.error('只能上传图片!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isImg && isLt2M
    },
    submitProduct () {
      addProduct(this.product).then(res => {
        if (!res.errCode) {
          this.$message.success('添加成功！')
          this.imageUrl = ''
          this.product = {
            name: '',
            type: '',
            description: '',
            price: '',
            oldPrice: '',
            poster: ''
          }
        }
      }).catch(err => {
        this.$message.error(err.data.msg)
      })
    }
  }
}
</script>

<style lang="less">
.image-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: #409eff;
    }
  }
  .image-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .image {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
