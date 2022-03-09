<template>
  <div class="header">
    <div class="headContent">
      <div class="leftContent">
        <div class="firstTitle">让旅游更幸福</div>
        <div class="drop">
          <div class="topTitle">
            {{ city }}<i class="iconfont icon-ditu-dibiao"></i>
          </div>
          <div class="bottom">
            <el-tag
              type="info"
              v-for="(item, index) in cities"
              :key="index"
              @click="changeCity(item.label)"
              >{{ item.label }}</el-tag
            >
          </div>
        </div>
        <div class="lastTitle">
          <a href="http://www.baidu.com"
            >网站无障碍<i
              class="iconfont icon-keaide"
              style="margin-left: 5px"
            ></i
          ></a>
        </div>
      </div>
      <div class="rightContent">
        <div class="login">你好 , 请登录</div>
        <div class="enroll">免费注册</div>
        <div class="vert"></div>
        <div class="news">
          <i class="iconfont icon-youjian"></i>
          <span>消息</span>
        </div>
        <div class="vert"></div>
        <div class="me">
          <el-dropdown>
            <span class="el-dropdown-link" style="color: #333; font-size: 12px">
              我的功能<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu
              slot="dropdown"
              class="header-new-drop"
              style="width: 120px; height: 120px"
            >
              <el-dropdown-item
                icon="el-icon-first-aid-kit"
                style="font-size: 12px; line-height: 30px"
                >我的收藏</el-dropdown-item
              >
              <el-dropdown-item
                icon="el-icon-s-ticket"
                style="font-size: 12px; line-height: 30px"
                >我的优惠券</el-dropdown-item
              >
              <el-dropdown-item
                icon="el-icon-reading"
                style="font-size: 12px; line-height: 30px"
                >常用信息</el-dropdown-item
              >
              <el-dropdown-item
                icon="el-icon-shopping-bag-1"
                style="font-size: 12px; line-height: 30px"
                >我的钱包</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="vert"></div>
        <div class="me">
          <el-dropdown>
            <span class="el-dropdown-link" style="color: #333; font-size: 12px">
              我的订单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu
              slot="dropdown"
              class="header-new-drop"
              style="width: 100px; height: 120px"
            >
              <el-dropdown-item style="font-size: 12px; line-height: 30px"
                >酒店订单</el-dropdown-item
              >
              <el-dropdown-item style="font-size: 12px; line-height: 30px"
                >旅游订单</el-dropdown-item
              >
              <el-dropdown-item style="font-size: 12px; line-height: 30px"
                >车票订单</el-dropdown-item
              >
              <el-dropdown-item style="font-size: 12px; line-height: 30px"
                >全部订单</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="vert"></div>
        <div class="service">客服中心</div>
        <div class="vert"></div>
        <div class="service iconfont icon-shouji"></div>
        <div class="service iconfont icon-weixin" style="margin-left:20px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      city: "山西省",
      cities: [
        { label: "北京市", value: "北京市" },
        { label: "天津市", value: "天津市" },
        { label: "河北省", value: "河北省" },
        { label: "山西省", value: "山西省" },
        { label: "内蒙古", value: "内蒙古" },
        { label: "辽宁省", value: "辽宁省" },
        { label: "吉林省", value: "吉林省" },
        { label: "黑龙江省", value: "黑龙江省" },
        { label: "上海市", value: "上海市" },
        { label: "江苏省", value: "江苏省" },
        { label: "浙江省", value: "浙江省" },
        { label: "安徽省", value: "安徽省" },
        { label: "福建省", value: "福建省" },
        { label: "江西省", value: "江西省" },
        { label: "山东省", value: "山东省" },
        { label: "河南省", value: "河南省" },
        { label: "湖北省", value: "湖北省" },
        { label: "湖南省", value: "湖南省" },
        { label: "广东省", value: "广东省" },
        { label: "广西", value: "广西" },
        { label: "海南省", value: "海南省" },
        { label: "重庆市", value: "重庆市" },
        { label: "四川省", value: "四川省" },
        { label: "贵州省", value: "贵州省" },
        { label: "云南省", value: "云南省" },
        { label: "西藏", value: "西藏" },
        { label: "陕西省", value: "陕西省" },
        { label: "甘肃省", value: "甘肃省" },
        { label: "青海省", value: "青海省" },
        { label: "宁夏", value: "宁夏" },
        { label: "新疆", value: "新疆" },
        { label: "台湾省", value: "台湾省" },
        { label: "香港", value: "香港" },
        { label: "澳门", value: "澳门" },
      ],
    };
  },
  methods: {
    changeCity(val) {
      this.city = val;
    },
  },
};
</script>

<style scoped lang='scss'>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.header {
  width: 100%;
  background: #fafafa;
  .headContent {
    width: 1200px;
    margin: 0 auto;
    height: 30px;
    .leftContent {
      width: 45%;
      float: left;
      display: flex;
      .firstTitle {
        height: 30px;
        line-height: 30px;
        margin-right: 20px;
      }
      .lastTitle {
        height: 30px;
        line-height: 30px;
        margin-right: 20px;
        margin-left: 20px;
        a:hover {
          color: #3983e5;
        }
      }
      .drop {
        width: 80px;
        text-align: center;
        height: 30px;
        position: relative;
        .topTitle {
          height: 30px;
          line-height: 28px;
          &:hover {
            background: #fff;
            cursor: pointer;
            color: #3983e5;
          }
          i {
            padding-left: 5px;
          }
        }
        &:hover .bottom {
          left: -50px;
        }
        .bottom {
          background: #fff;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          position: absolute;
          top: 30px;
          left: -9999px;
          width: 230px;
          height: 250px;
          z-index: 12;
          overflow: auto;
          border: 1px solid #333;
          border-radius: 5px;
          &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
          }
        }
      }
    }
    .rightContent {
      float: right;
      width: 55%;
      height: 30px;
      display: flex;
      .login {
        height: 30px;
        line-height: 30px;
        color: #3983e5;
        cursor: pointer;
      }
      .vert {
        height: 20px;
        margin: 4px 20px 0 20px;
        width: 1px;
        background: #dddddd;
      }
      .enroll {
        height: 30px;
        line-height: 30px;
        margin-left: 20px;
        &:hover {
          color: #3983e5;
          cursor: pointer;
        }
      }
      .news {
        height: 30px;
        line-height: 30px;
        i {
          display: inline-block;
          height: 32px;
          vertical-align: middle;
        }
        span {
          font-size: 12px;
          margin-left: 5px;
        }
        &:hover {
          cursor: pointer;
        }
      }
      .me {
        height: 30px;
        line-height: 30px;
      }
      .service {
        height: 30px;
        line-height: 30px;
        &:hover {
          color: #3983e5;
          cursor: pointer;
        }
      }
    }
  }
}
.el-tag {
  margin-bottom: 3px;
  // margin-right: 4px;
  &:hover {
    cursor: pointer;
  }
}
</style>
