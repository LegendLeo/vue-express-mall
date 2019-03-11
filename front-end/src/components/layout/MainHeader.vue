<template>
  <el-header height="80px">
    <div class="container">
      <div class="left">
        <img src="@/assets/images/logo.png"
          alt="logo"
          class="logo">
        <a href="/"
          class="title">
          <h1>基于Express的商城系统——Leo的商城</h1>
        </a>
      </div>
      <div class="right">
        <div v-if="!loginStatus"
          class="btn-group">
          <el-button round
            type="primary"
            size="mini"
            @click="dialogLoginVisible = true">登录</el-button>
          <el-button round
            type="primary"
            size="mini"
            @click="dialogRegisterVisible = true">注册</el-button>
        </div>
        <shopping-cart v-else></shopping-cart>
      </div>
    </div>
    <el-dialog title="注册"
      append-to-body
      :visible.sync="dialogRegisterVisible">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password"
            type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
            @click="submitRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="登录"
      append-to-body
      :visible.sync="dialogLoginVisible">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password"
            type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
            @click="submitLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-header>
</template>

<script>
import ShoppingCart from '@/components/shopping-cart/ShoppingCart'
import { mapGetters } from 'vuex'
import { userLogin, userRegister } from '@/api/user'

export default {
  data () {
    return {
      dialogRegisterVisible: false,
      dialogLoginVisible: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'loginStatus'
    ])
  },
  methods: {
    submitLogin () {
      userLogin(this.user).then(res => {
        if (!res.errCode) {
          localStorage.setItem('token', res.data.token)
          this.$message.success('登录成功！')
        } else {
          this.$message.error(res.msg)
        }
      }).catch(err => {
        let data = err.response.data
        this.$message.error(data.msg)
      })
    },
    submitRegister () {
      userRegister(this.user).then(res => {
        if (!res.errCode) {
          this.$message.success('注册成功！')
          this.dialogRegisterVisible = false
        } else {
          this.user.username = ''
          this.user.password = ''
          this.$message.error(res.msg)
        }
      }).catch(err => {
        let data = err.response.data
        this.$message.error(data.msg)
      })
    }
  },
  components: {
    ShoppingCart
  }
}
</script>

<style lang="less" scoped>
.el-header .container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .logo {
      height: 55px;
      margin-right: 20px;
    }
    .title {
      color: #409eff;
      text-decoration: none;
      h1 {
        display: inline;
        font-size: 2.4em;
      }
    }
  }
  .right {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
