<template>
  <div class="imgShow">
    <a>
      <div class="top">
        <img :src="img" alt="" />
      </div>
      <div class="bottom">
        <p class="p-top">
          <span>{{name}}</span>
          <i>|</i>
          {{detail}}
        </p>
        <div class="p-bottom">
          <div class="p-left"><span>￥</span> {{price}} <i>起</i></div>
          <div class="p-right">立即抢购</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "imgShow",
  props: {
    img: {
      type: String,
      default() {
        return "";
      },
    },
    name: {
      type: String,
      default() {
        return "";
      },
    },
    detail: {
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
  data() {
    return {};
  },
};
</script>

<style scoped lang='scss'>
.imgShow {
  width: 222px;
  height: 267px;
  border: 1px solid #ddd;
  margin: 10px;
  border-radius: 3px;
  a {
    display: block;
    width: 100%;
    height: 90%;
    cursor: pointer;
    .top {
      width: 100%;
      height: 170px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bottom {
      width: 100%;
      height: 60px;
      margin-top: 10px;
      .p-top {
        height: 36px;
        font-size: 14px;
        line-height: 20px;
        padding: 0 10px;
        overflow: hidden;
        span {
          color: #390;
        }
        i {
          color: #bbb;
          margin-left: 10px;
        }
      }
      .p-bottom {
        height: 24px;
        position: relative;
        .p-left {
          position: absolute;
          left: 10px;
          top: 5px;
          font-size: 18px;
          font-weight: 700;
          color: #f60;
          span {
            font-size: 18px;
            font-weight: 400;
            color: #f60;
          }
          i {
            font-size: 12px;
            color: #999;
          }
        }
        .p-right {
          position: absolute;
          right: 10px;
          top: 10px;
          font-size: 14px;
          width: 75px;
          height: 30px;
          background: #f80;
          line-height: 30px;
          color: #fff;
        }
      }
    }
  }
}
.imgShow:hover {
  box-shadow: 0px 0px 2px #909090;
}
.imgShow:hover .p-top {
  color: #f60;
}
.imgShow:hover a .bottom .p-bottom .p-right {
  background: #f60;
}
</style>
