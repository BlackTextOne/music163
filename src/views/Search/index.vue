<template>
  <div class="search-container">
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <div class="hot" v-if="show">
      <p class="sec-title">热门搜索</p>
      <div
        class="hot-search"
        v-for="item in hotSearch"
        :key="item.id"
        @click="sec"
      >
        {{ item.first }}
      </div>
    </div>

    <div class="music" v-if="!show">
      <p class="sec-title">最佳匹配</p>
      <div class="list" v-for="item in cloudList" :key="item.id">
        <div class="content">
          <div class="no" v-show="false">{{ item.id }}</div>
          <h5>{{ item.name }}</h5>
          <p>{{ item.ar[0].name }}</p>
        </div>
        <van-icon name="play-circle-o" @click="go"/>
      </div>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, cloudSearchAPI } from "@/api";
export default {
  data() {
    return {
      id:null,
      value: "",
      hotSearch: [],
      show: true,
      cloudList: [],
    };
  },
  async created() {
    const res = await hotSearchAPI({});
    this.hotSearch = res.data.result.hots;
  },
  methods: {
    sec(e) {
      this.value = e.target.innerText;
    },
    go(e) {
      this.id = Number(e.target.previousElementSibling.firstChild.innerText);
      this.$router.push({
        path:'/play',
        query:{
          id: this.id
        }
      })
    }
  },
  watch: {
    async value(newVal) {
      if (this.value !== "") {
        this.show = false;
        const res2 = await cloudSearchAPI({
          keywords: newVal,
        });
        this.cloudList = res2.data.result.songs;
        console.log(res2.data.result.songs);
      } else {
        this.show = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.search-container {
  padding: 2vmin;
  .sec-title {
    margin: 2vmin 0;
    font-size: (14 / 3.75vmin);
    color: #999;
  }
  .van-search {
    padding-left: 1vmin;
    padding-right: 1vmin;
    .van-search__content {
      border-radius: 5vmin;
    }
  }
  .hot {
    .hot-search {
      margin-bottom: 3vmin;
      margin-right: 3vmin;
      display: inline-block;
      height: (38 / 3.75vmin);
      line-height: (38 / 3.75vmin);
      font-size: (14 / 3.75vmin);
      text-align: center;
      padding: 0 3vmin;
      border: 1px solid #999;
      border-radius: 5vmin;
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