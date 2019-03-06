<template>
  <div :class="showCart ? 'wrapper-open wrapper' : 'wrapper'">
    <div
      class="nav-item"
      @click="showCart = true"
    >
      <i class="iconfont icon-caigou"></i>
      <el-badge :value="12">
        <span>购物车</span>
      </el-badge>
    </div>
    <div
      class="modal-overlay"
      @click="showCart = false"
    ></div>
    <div
      id="cart"
      class="pushy"
    ></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showCart: false
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
.modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fade 500ms;
}
.pushy {
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  transform: translate3d(100%, 0, 0);
  transition: transform 0.2s cubic-bezier(0.16, 0.68, 0.43, 0.99);
}
.wrapper {
  height: 100%;
  .nav-item {
    height: 100%;
    font-size: 24px;
    color: @main-blue;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 30px;
      color: @main-blue;
      transform: translateY(2px);
    }
  }
}
.wrapper-open {
  .modal-overlay {
    display: block;
  }
}
@media only screen and (min-width: 768px) {
  .pushy {
    width: 500px;
  }
  .wrapper-open {
    .pushy {
    transform: translate3d(0, 0, 0);
    }
  }
}
@media only screen and (max-width: 767px) {
  .pushy {
    width: 100vw;
  }
  .wrapper-open {
    .pushy {
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>
