<template>
  <div class="layout-container">
    <van-nav-bar
      :title="title"
    />

    <router-view></router-view>

    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:this.$route.meta.title
    }
  },
  watch:{
    $route() {
      this.title = this.$route.meta.title
    }
  }
};
</script>

<style lang="less" scoped>
.layout-container {
  .van-tabbar {
    width: 100%;
    height: (50 / 3.75vmin);
    font-size: (12 / 3.75vmin);
    i {
      font-size: (12 / 3.75vmin);
    }
    .van-tabbar-item__text {
      font-size: (12 / 3.75vmin);
    }
  }
}
</style>