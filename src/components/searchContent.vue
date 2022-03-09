<template>
  <div class="searchContent">
    <div class="leftImg">
      <img src="../../public/img/feiji.jpeg" alt="" />
    </div>
    <div class="search">
      <el-input
        v-model="input"
        placeholder="搜索酒店/门票/机票/火车票"
        style="float: left; width: 500px"
      ></el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        style="
          float: left;
          font-size: 14px;
          margin-left: -4px;
        "
      ></el-button>
    </div>
    <div class="rightContent">
      <div class="iconfont icon-kefu icon"></div>
      <div class="content">
        <div class="top">
          <span style="margin-right: 20px">国内客服</span>
          <span class="ipone">95117</span>
        </div>
        <div class="bottom">
          <span style="margin-right: 20px">国外客服</span>
          <span class="ipone">(+8610)40081088</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchContent",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped lang='scss'>
.searchContent {
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  .leftImg {
    float: left;
    img {
      width: 200px;
      height: 100px;
      border-radius: 50%;
    }
  }
  .search {
    margin: 30px 70px;
    float: left;
    width: 600px;
  }
  .rightContent {
    float: left;
    display: flex;
    height: 100px;
    .icon {
      font-size: 30px;
      line-height: 100px;
      margin-right: 20px;
    }
    .content {
      height: 100px;
      .top {
        margin: 20px 0;
      }
      .bottom {
        margin: 20px 0;
      }
      .ipone {
        color: #3983e5;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
