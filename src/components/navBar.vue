<template>
  <div class="navBar">
    <div class="main">
      <div class="title" v-for="(item, index) in lists" :key="index">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      lists: [
        { label: "首页" },
        { label: "酒店" },
        { label: "旅游" },
        { label: "跟团游" },
        { label: "自由行" },
        { label: "机票" },
        { label: "火车" },
        { label: "汽车" },
        { label: "船" },
        { label: "用车" },
        { label: "门票" },
        { label: "攻略" },
        { label: "全球购" },
        { label: "礼品卡" },
        { label: "商旅" },
        { label: "金融" },
      ],
    };
  },
};
</script>

<style scoped lang='scss'>
.navBar {
  height: 40px;
  width: 100%;
  background: #409eff;
  display: flex;
  .main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    .title {
      width: 100px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      &:first-child {
        background: #0a56bb;
      }
      &:hover {
        background: #0a56bb;
        cursor: pointer;
      }
    }
  }
}
</style>
