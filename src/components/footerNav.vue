<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footerList">
        <div class="footerItem">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>智慧旅行</h4>
          <ul class="footerItemCon">
            <li>分销联盟</li>
            <li>代理合作</li>
            <li>隐私协议</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>支付方式</h4>
          <ul class="footerItemCon">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>网站导航</h4>
          <ul class="footerItemCon">
            <li>机票索引</li>
            <li>旅游索引</li>
            <li>商旅索引</li>
            <li>企业公民</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>特色服务</h4>
          <ul class="footerItemCon">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>旅游E卡</li>
            <li>旅游通信</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
          <img src="../../public/img/erweima.png" />
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            联系我们
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            商家入驻
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>关于我们</li>
        </ul>
        <p>地址：山西省太原市小店区</p>
        <p>京ICP备19006430号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerNav",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;
      .footerItem {
        width: 16.6666667%;
        float: left;
        h4 {
          font-size: 14px;
        }
        img{
          margin-top: 10px;
          width: 100px !important;
          height: 100px;
        }
        .footerItemCon {
          li {
            line-height: 18px;
          }
        }
        &:last-child img {
          width: 121px;
        }
      }
    }
    .copyright {
      padding: 20px;
      .helpLink {
        text-align: center;
        li {
          display: inline;
          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }
      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>