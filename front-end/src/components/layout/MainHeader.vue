<template>
  <el-header height="80px">
    <div class="container">
      <div class="left">
        <img src="@/assets/images/logo.png"
          alt="logo"
          class="logo">
        <router-link to="/"
          class="title">
          <h1>基于Express的商城系统——Leo的商城</h1>
        </router-link>
      </div>
      <div class="right">
        <el-dropdown v-if="isLoggedIn"
          size="mini">
          <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div v-if="!isLoggedIn"
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
        <router-link v-else-if="isAdmin"
          to="/admin">
          <el-button round
            size="small"
            type="primary">管理后台</el-button>
        </router-link>
        <shopping-cart v-else></shopping-cart>
      </div>
    </div>
    <el-dialog title="注册"
      append-to-body
      @keyup.enter.native="submitRegister"
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
      @keyup.enter.native="submitLogin"
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
import { mapGetters, mapMutations } from 'vuex'
import { userLogin, userRegister, getCartList } from '@/api/user'

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
      'isAdmin',
      'isLoggedIn',
      'username'
    ])
  },
  created () {
    if (this.isLoggedIn) {
      getCartList().then(res => {
        console.log(res.data)
        this.restoreCart(res.data)
      })
    }
  },
  methods: {
    submitLogin () {
      userLogin(this.user).then(res => {
        if (!res.errCode) {
          this.logIn(res.data)
          this.$message.success('登录成功！')
          getCartList().then(data => {
            console.log(data)
            this.restoreCart(data.data)
          })
          this.dialogLoginVisible = false
        } else {
          this.$message.error(res.msg)
        }
      }).catch(err => {
        let data = err.data
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
        let data = err.data
        this.$message.error(data.msg)
      })
    },
    ...mapMutations({
      logIn: 'LOG_IN',
      logOut: 'LOG_OUT',
      restoreCart: 'RESTORE_CART'
    })
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
.el-dropdown {
  margin-right: 15px;
}
</style>
