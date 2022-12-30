<template>
  <div class="home-container">
    <p class="p-title">推荐歌单</p>
    <div class="main">
      <div class="main-model">
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="item in list" :key="item.id">
            <van-image :src="item.picUrl" />
            <p>{{ item.name }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <p class="p-title">最新音乐</p>
    <div class="music">
      <div class="list" v-for="item in newList" :key="item.id">
        <div class="content">
          <div class="no" v-show="false">{{item.id}}</div>
          <h5>{{ item.name }}</h5>
          <p>{{ item.song.artists[0].name }}</p>
        </div>
        <van-icon name="play-circle-o" @click="go"/>
      </div>
    </div>
  </div>
</template>

<script>
import { recommendMusicAPI, recommendNewMusicAPI } from '@/api'
import "@/styles/globel.less";
export default {
  data() {
    return {
      list:[],
      newList:[],
      id:{
        type:Number
      }
    };
  },
  async created() {
    const res = await recommendMusicAPI({
      limit:6
    })
    this.list = res.data.result;
    const res1 = await recommendNewMusicAPI({
      limit:15
    })
    this.newList = res1.data.result;
  },
  methods: {
    go(e) {
      this.id = Number(e.target.previousElementSibling.firstChild.innerText)
      this.$router.push({
        path:'/play',
        query:{
          id: this.id
        }
      })
      // console.log(e.target.previousElementSibling.firstChild.innerText);
    }
  },
};
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
  .p-title {
    width: 100%;
    height: (46 / 3.75vmin);
    font-size: (16 / 3.75vmin);
    display: flex;
    align-items: center;
    padding: 0 2vmin;
    box-sizing: border-box;
  }
  .main {
    padding: 2vmin 0;
    background-color: #fff;
    .main-model {
      .van-image {
        width: (95 / 3.75vmin);
        height: (75 / 3.75vmin);
      }
      p {
        margin-top: 2vmin;
        width: (95 / 3.75vmin);
        height: (32 / 3.75vmin);
        font-size: (12 / 3.75vmin);
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .music {
    padding: 0 4vmin;
    background-color: #fff;
    .list {
      display: flex;
      border-bottom: 1px solid #eee;
      .content {
        padding: 2vmin 3vmin;
        flex: 1;
        h5 {
          font-size: (16 / 3.75vmin);
          font-weight: normal;
          margin-bottom: 1.5vmin;
        }
        p {
          font-size: (12 / 3.75vmin);
          color: #999;
        }
      }
      i {
        text-align: center;
        align-self: center;
        width: (47.5 / 3.75vmin);
      }
    }
  }
  
}
</style>