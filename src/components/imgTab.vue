<template>
  <div class="imgTab">
    <div class="top">
      <img :src="img" alt="" />
      <div :class="activer ? 'topTit1' : 'topTit2'">
        {{ activer ? "出发地参团" : "目的地参团" }}
      </div>
      <div class="bottomTit">{{address}}出发</div>
    </div>
    <div class="bottom">
      <p>
        {{title}}
      </p>
      <div class="boTit"><span>￥</span>{{price}} <i>起</i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imgTab",
  props: {
      img: {
      type: String,
      default() {
        return "";
      },
    },
    activer: {
      type: Boolean,
      default() {
        return true;
      },
    },
    address: {
      type: String,
      default() {
        return "";
      },
    },
    title: {
      type: String,
      default() {
        return "";
      },
    },
    price: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style scoped lang='scss'>
.imgTab {
  width: 232px;
  height: 300px;
  border: 1px solid #ddd;
  margin: 2px 4px 5px 4px;
  cursor: pointer;
  .top {
    width: 232px;
    height: 180px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .bottomTit {
      width: 72px;
      height: 24px;
      line-height: 24px;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      font-size: 14px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .topTit1 {
      position: absolute;
      left: 0;
      top: 0;
      line-height: 32px;
      font-size: 14px;
      color: #fff;
      width: 90px;
      height: 32px;
      background-image: url("../../public/img/tubiao.png");
      background-position: 0px 68px;
    }
    .topTit2 {
      position: absolute;
      left: 0;
      top: 0;
      line-height: 32px;
      font-size: 14px;
      color: #fff;
      width: 90px;
      height: 32px;
      background-image: url("../../public/img/tubiao.png");
      background-position: 0px 33px;
    }
  }
  .bottom {
    position: relative;
    height: 125px;
    p {
      height: 36px;
      font-size: 14px;
      line-height: 18px;
      padding: 10px 10px 0 10px;
      overflow: hidden;
    }
    .boTit {
      position: absolute;
      bottom: 10px;
      left: 10px;
      font-size: 28px;
      font-weight: 700;
      color: #f60;
      span {
        font-size: 20px;
        font-weight: 400;
        color: #f60;
      }
      i {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
.imgTab:hover {
  box-shadow: 0px 0px 5px #909090;
}
.imgTab:hover .bottom p {
  text-decoration: underline;
}
</style>
