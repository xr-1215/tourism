<template>
  <div class="home">

    <NavBar></NavBar>
    <div class="slideshow">
      <el-carousel>
        <el-carousel-item>
          <img src="../../public/img/chunguang.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../public/img/huanqiu.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../public/img/mijing.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../public/img/nanjing.jpg" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tabs">
      <el-tabs v-model="active">
        <el-tab-pane label="踏青必住" name="first">
          <div class="tabItem">
            <ImgShow
              :img="imgList.img1"
              :name="nameList.name1"
              :detail="detailList.detail1"
              :price="priceList.price1"
            ></ImgShow>
            <ImgShow
              :img="imgList.img2"
              :name="nameList.name1"
              :detail="detailList.detail2"
              :price="priceList.price2"
            ></ImgShow>
            <ImgShow
              :img="imgList.img3"
              :name="nameList.name1"
              :detail="detailList.detail3"
              :price="priceList.price3"
            ></ImgShow>
          </div>
        </el-tab-pane>
        <el-tab-pane label="自驾" name="second">
          <div class="tabItem">
            <ImgShow
              :img="imgList.img4"
              :name="nameList.name2"
              :detail="detailList.detail4"
              :price="priceList.price4"
            ></ImgShow>
            <ImgShow
              :img="imgList.img5"
              :name="nameList.name2"
              :detail="detailList.detail5"
              :price="priceList.price5"
            ></ImgShow>
            <ImgShow
              :img="imgList.img6"
              :name="nameList.name1"
              :detail="detailList.detail6"
              :price="priceList.price6"
            ></ImgShow>
            <ImgShow
              :img="imgList.img7"
              :name="nameList.name3"
              :detail="detailList.detail7"
              :price="priceList.price7"
            ></ImgShow>
            <ImgShow
              :img="imgList.img8"
              :name="nameList.name1"
              :detail="detailList.detail8"
              :price="priceList.price8"
            ></ImgShow>
          </div>
        </el-tab-pane>
        <el-tab-pane label="亲子酒店" name="third">
          <div class="tabItem">
            <ImgShow
              :img="imgList.img9"
              :name="nameList.name2"
              :detail="detailList.detail9"
              :price="priceList.price4"
            ></ImgShow>
            <ImgShow
              :img="imgList.img10"
              :name="nameList.name1"
              :detail="detailList.detail10"
              :price="priceList.price5"
            ></ImgShow>
            <ImgShow
              :img="imgList.img11"
              :name="nameList.name3"
              :detail="detailList.detail11"
              :price="priceList.price8"
            ></ImgShow>
            <ImgShow
              :img="imgList.img12"
              :name="nameList.name2"
              :detail="detailList.detail12"
              :price="priceList.price7"
            ></ImgShow>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="details">
      <div class="leftImg">
        <div class="topTit">境内跟团游</div>
        <div class="bottomImg">
          <img src="../../public/img/jingnei.png" alt="" />
        </div>
      </div>
      <div class="rightTab">
        <el-tabs v-model="activeName" style="margin-left: 10px">
          <el-tab-pane label="精选" name="first">
            <div class="tabItem">
              <ImgTab
                :activer="true"
                :img="pngList.img9"
                :title="titleList.title10"
                :price="priceList.price1"
                :address="addressList.address1"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.img16"
                :title="titleList.title16"
                :price="priceList.price4"
                :address="addressList.address1"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.img3"
                :title="titleList.title3"
                :price="priceList.price8"
                :address="addressList.address2"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.img8"
                :title="titleList.title8"
                :price="priceList.price5"
                :address="addressList.address4"
              ></ImgTab>
            </div>
          </el-tab-pane>
          <el-tab-pane label="三亚" name="second">
            <div class="tabItem">
              <ImgTab
                :activer="true"
                :img="pngList.img1"
                :title="titleList.title1"
                :price="priceList.price7"
                :address="addressList.address2"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.img2"
                :title="titleList.title2"
                :price="priceList.price6"
                :address="addressList.address2"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.img3"
                :title="titleList.title3"
                :price="priceList.price2"
                :address="addressList.address2"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.img4"
                :title="titleList.title4"
                :price="priceList.price1"
                :address="addressList.address2"
              ></ImgTab>
            </div>
          </el-tab-pane>
          <el-tab-pane label="北京" name="third">
            <div class="tabItem">
              <ImgTab
                :activer="true"
                :img="pngList.img5"
                :title="titleList.title5"
                :price="priceList.price4"
                :address="addressList.address1"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.img6"
                :title="titleList.title6"
                :price="priceList.price6"
                :address="addressList.address1"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.img7"
                :title="titleList.title7"
                :price="priceList.price1"
                :address="addressList.address1"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.img8"
                :title="titleList.title8"
                :price="priceList.price3"
                :address="addressList.address1"
              ></ImgTab>
            </div>
          </el-tab-pane>
          <el-tab-pane label="云南" name="fourth">
            <div class="tabItem">
              <ImgTab
                :activer="false"
                :img="pngList.img9"
                :title="titleList.title9"
                :price="priceList.price7"
                :address="addressList.address4"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.img10"
                :title="titleList.title10"
                :price="priceList.price4"
                :address="addressList.address4"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.img11"
                :title="titleList.title11"
                :price="priceList.price1"
                :address="addressList.address4"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.img12"
                :title="titleList.title12"
                :price="priceList.price2"
                :address="addressList.address4"
              ></ImgTab>
            </div>
          </el-tab-pane>
          <el-tab-pane label="古北水镇" name="five">
            <div class="tabItem">
              <ImgTab
                :activer="true"
                :img="pngList.img13"
                :title="titleList.title13"
                :price="priceList.price2"
                :address="addressList.address1"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.img14"
                :title="titleList.title14"
                :price="priceList.price4"
                :address="addressList.address1"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.img15"
                :title="titleList.title15"
                :price="priceList.price1"
                :address="addressList.address1"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.img16"
                :title="titleList.title16"
                :price="priceList.price5"
                :address="addressList.address1"
              ></ImgTab>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="details">
      <div class="leftImg">
        <div class="topTit1">周边跟团游</div>
        <div class="bottomImg">
          <img src="../../public/img/zhoubian.png" alt="" />
        </div>
      </div>
      <div class="rightTab">
        <el-tabs v-model="actives" style="margin-left: 10px">
          <el-tab-pane label="精选" name="first">
            <div class="tabItem">
              <ImgTab
                :activer="false"
                :img="pngList.jpg15"
                :title="titleList.tit15"
                :price="priceList.price9"
                :address="addressList.address8"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.jpg7"
                :title="titleList.tit7"
                :price="priceList.price10"
                :address="addressList.address6"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.jpg12"
                :title="titleList.tit12"
                :price="priceList.price11"
                :address="addressList.address7"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.jpg1"
                :title="titleList.tit1"
                :price="priceList.price12"
                :address="addressList.address5"
              ></ImgTab>
            </div>
          </el-tab-pane>
          <el-tab-pane label="大同" name="second">
            <div class="tabItem">
              <ImgTab
                :activer="true"
                :img="pngList.jpg1"
                :title="titleList.tit1"
                :price="priceList.price7"
                :address="addressList.address5"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.jpg2"
                :title="titleList.tit2"
                :price="priceList.price6"
                :address="addressList.address5"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.jpg3"
                :title="titleList.tit3"
                :price="priceList.price2"
                :address="addressList.address5"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.jpg4"
                :title="titleList.tit4"
                :price="priceList.price1"
                :address="addressList.address5"
              ></ImgTab>
            </div>
          </el-tab-pane>
          <el-tab-pane label="太原" name="third">
            <div class="tabItem">
              <ImgTab
                :activer="true"
                :img="pngList.jpg5"
                :title="titleList.tit5"
                :price="priceList.price4"
                :address="addressList.address6"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.jpg6"
                :title="titleList.tit6"
                :price="priceList.price6"
                :address="addressList.address6"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.jpg7"
                :title="titleList.tit7"
                :price="priceList.price1"
                :address="addressList.address6"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.jpg8"
                :title="titleList.tit8"
                :price="priceList.price3"
                :address="addressList.address6"
              ></ImgTab>
            </div>
          </el-tab-pane>
          <el-tab-pane label="张家口" name="fourth">
            <div class="tabItem">
              <ImgTab
                :activer="false"
                :img="pngList.jpg9"
                :title="titleList.tit9"
                :price="priceList.price7"
                :address="addressList.address7"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.jpg10"
                :title="titleList.tit10"
                :price="priceList.price4"
                :address="addressList.address7"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.jpg11"
                :title="titleList.tit11"
                :price="priceList.price1"
                :address="addressList.address7"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.jpg12"
                :title="titleList.tit12"
                :price="priceList.price2"
                :address="addressList.address7"
              ></ImgTab>
            </div>
          </el-tab-pane>
          <el-tab-pane label="天津" name="five">
            <div class="tabItem">
              <ImgTab
                :activer="true"
                :img="pngList.jpg13"
                :title="titleList.tit13"
                :price="priceList.price2"
                :address="addressList.address8"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.jpg14"
                :title="titleList.tit14"
                :price="priceList.price4"
                :address="addressList.address8"
              ></ImgTab>
              <ImgTab
                :activer="false"
                :img="pngList.jpg15"
                :title="titleList.tit15"
                :price="priceList.price1"
                :address="addressList.address8"
              ></ImgTab>
              <ImgTab
                :activer="true"
                :img="pngList.jpg16"
                :title="titleList.tit16"
                :price="priceList.price5"
                :address="addressList.address8"
              ></ImgTab>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="advert">
      <img src="../../public/img/gao1.jpg" alt="" class="cup" />
      <img src="../../public/img/gao2.jpg" alt="" class="cup" />
      <img src="../../public/img/gao3.jpg" alt="" class="cup" />
      <img src="../../public/img/gao4.jpg" alt="" class="cup" />
    </div>
  </div>
</template>

<script>
import ImgShow from "../components/imgShow.vue";
import ImgTab from "../components/imgTab.vue";
import NavBar from "../components/navBar.vue";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    NavBar,
    ImgShow,
    ImgTab,
  },
  data() {
    return {
      active: "second",
      activeName: "first",
      actives: "first",
      pngList: {
        img1: `${require("../../public/img/jing1.jpg")}`,
        img2: `${require("../../public/img/jing2.jpg")}`,
        img3: `${require("../../public/img/jing3.jpg")}`,
        img4: `${require("../../public/img/jing4.jpg")}`,
        img5: `${require("../../public/img/jing5.jpg")}`,
        img6: `${require("../../public/img/jing6.jpg")}`,
        img7: `${require("../../public/img/jing7.jpg")}`,
        img8: `${require("../../public/img/jing8.png")}`,
        img9: `${require("../../public/img/jing9.jpg")}`,
        img10: `${require("../../public/img/jing10.jpg")}`,
        img11: `${require("../../public/img/jing11.jpg")}`,
        img12: `${require("../../public/img/jing12.png")}`,
        img13: `${require("../../public/img/jing13.jpg")}`,
        img14: `${require("../../public/img/jing14.jpg")}`,
        img15: `${require("../../public/img/jing15.png")}`,
        img16: `${require("../../public/img/jing16.jpg")}`,
        jpg1: `${require("../../public/img/zhou1.jpg")}`,
        jpg2: `${require("../../public/img/zhou2.jpg")}`,
        jpg3: `${require("../../public/img/zhou3.jpg")}`,
        jpg4: `${require("../../public/img/zhou4.jpg")}`,
        jpg5: `${require("../../public/img/zhou5.jpg")}`,
        jpg6: `${require("../../public/img/zhou6.jpg")}`,
        jpg7: `${require("../../public/img/zhou7.jpg")}`,
        jpg8: `${require("../../public/img/zhou8.jpg")}`,
        jpg9: `${require("../../public/img/zhou9.jpg")}`,
        jpg10: `${require("../../public/img/zhou10.jpg")}`,
        jpg11: `${require("../../public/img/zhou11.jpg")}`,
        jpg12: `${require("../../public/img/zhou12.jpg")}`,
        jpg13: `${require("../../public/img/zhou13.jpg")}`,
        jpg14: `${require("../../public/img/zhou14.jpg")}`,
        jpg15: `${require("../../public/img/zhou15.jpg")}`,
        jpg16: `${require("../../public/img/zhou16.jpg")}`,
      },
      imgList: {
        img1: `${require("../../public/img/jiudian1.jpg")}`,
        img2: `${require("../../public/img/jiudian2.jpg")}`,
        img3: `${require("../../public/img/jiudian3.jpg")}`,
        img4: `${require("../../public/img/jingdian1.jpg")}`,
        img5: `${require("../../public/img/jingdian2.jpg")}`,
        img6: `${require("../../public/img/jingdian3.jpg")}`,
        img7: `${require("../../public/img/jingdian4.jpg")}`,
        img8: `${require("../../public/img/jingdian5.jpg")}`,
        img9: `${require("../../public/img/qinzi1.jpg")}`,
        img10: `${require("../../public/img/qinzi2.jpg")}`,
        img11: `${require("../../public/img/qinzi3.jpg")}`,
        img12: `${require("../../public/img/qinzi4.jpg")}`,
      },
      nameList: {
        name1: "酒店套餐",
        name2: "当地游",
        name3: "酒+景",
      },
      detailList: {
        detail1:
          "上海嘉定禧玥酒店1晚【都市中的“空谷幽兰”打卡13000平米日式花园酒店】豪华房型任选+双人自助早餐+嘉定公馆下午茶（可前台加价升级极乐汤）或双人套餐+小",
        detail2:
          "上海嘉定喜来登酒店1晚【嘉定休闲度假 亲子趣玩 多款超值娱乐】多款客房1晚住宿+2大1小早餐+上海小灶村/汽车博物馆2张/上赛卡丁车1张/探秘游1张自选 嘉定乐嗨游",
        detail3:
          "上海南郊宾馆1晚【魔都近郊足不出沪   游海湾公园大自然生态  美食自助】亲子主题（ 冰雪/美队/动物/汽车）标间1晚+自助早餐+美食自助晚餐 ",
        detail4:
          "[浪漫樱花自驾季]无锡 鼋头渚2天1晚  赏樱季2日1晚自由行樱花山庄至尊房1晚 + 双早+ 双人鼋头渚门票（不含客渡船和夜公园）",
        detail5:
          "【林芝桃花】金川梨花-川藏线-林芝桃花-拉萨-可可西里-青藏线17日自驾游",
        detail6:
          "2022【大美新疆-人间四月天】伊犁杏花 -那拉提-赛里木湖 -天山7日自驾游",
        detail7:
          "[轻奢自驾 莫干山 野派露营体验惊喜套餐]【原舍怀谷】春季露营套餐2日1晚自由行莫干山南路村中--35间网红民宿，网红露营地;  孩子喜爱的绿乐园；与山为邻 和溪泉作伴",
        detail8: " 腾格里沙漠-五日四夜徒步穿越-沙漠奇幻之旅",
        detail9:
          "[小熊猫户外森林探索活动-亲子家庭森林探索活动]【含门票】小熊猫户外森林探索活动票+顾村公园门票1日0晚自由行",
        detail10:
          "绿意盎然之 森林奇趣独立营（春季篇）  让孩子与大自然的璀璨春天联结",
        detail11:
          "【天鹅湖亲子植树营】上海天鹅湖单日亲子营  一起植树、自制风筝 低碳环保",
        detail12:
          "[国庆][轻奢自驾]海南三亚  亚特兰蒂斯酒店 【2天1晚】含双早；含无限次畅玩水世界及水族馆",
      },
      titleList: {
        title1:
          "三亚5日4晚跟团游·20人镇店小团【海陆空】帆船出海+直升机（摩托艇/香蕉船2选1）+蜈支洲岛+亚特（水世界/水族馆2选1）『180一线海景/温德姆海景/亲子红树林/升1晚亚龙湾别墅酒店』24H接送机&CDF免税城&100%纯玩",
        title2:
          "海南三亚5日4晚跟团游·【12-20人精致小团】【出游之冠 希尔顿/铂尔曼/喜来登/温德姆/豪生】「B线前3晚三亚湾随选+后1晚海棠湾喜来登」 南山观音&天涯&沙滩旅拍&森林公园&5A蜈支洲岛（享VIP）",
        title3:
          "海南三亚+三沙+西沙群岛+凤凰岛4日3晚私家团·专业西沙旅行家 指定长乐公主新游轮 赠接机或送机+全程管家 全富岛+银屿岛 皮艇上无人岛 乘玻璃船看净撤海底+网红灯塔 南海海岛 梦想探索别样祖国 格局打开",
        title4:
          "海南三亚+三沙+西沙群岛+凤凰岛6日5晚私家团· 圆梦中国南海 探索西沙群岛 长乐公主 宿2晚5钻+邮轮3晚 船舱可升 全富岛+银屿岛+观礼升旗 少而美小众国内游 深度体验南海 梦回小学课本 赠接送机+全程旅游管家",
        title5:
          "北京2日1晚私家团·【宿怀柔卡斯谷·2万平方米欧洲古堡庄园·超大草坪·慕田峪长城脚下·270度全景落地窗餐厅|园内超多休闲娱乐项目·树顶探险乐园·手作工坊】『游红螺寺&慕田峪长城|五环内免费专车接送|京郊亲子游』",
        title6:
          "古北水镇2日1晚半自助游·【携程自营旗舰·纸鸢探春|指定水镇内自营客栈/古北之光/水镇大酒店】往返大巴+无限次景区门票+电瓶车 | 赠送特色午餐丨赏3D水舞秀·孔明灯无人机·皮影戏 | 可选司马台&温泉",
        title7:
          "古北水镇2日1晚跟团游·『携程自营旗舰·春季踏青|指定5钻古北之光·赠天然温泉票』往返商务大巴·多乘车点丨赠特色午餐丨无限次进出门票&电瓶车丨3D水舞秀+孔明灯无人机丨可选司马台&摇橹船 | E-H线水镇大",
        title8:
          "古北水镇2日1晚跟团游·『铂金臻选·5钻古北之光·安心分餐·赠温泉|水镇大酒店/私汤温泉酒店可选』中西自助早餐丨dIY手工体验+无限次景区门票+电瓶车 | 可升级日游/夜游长城",
        title9:
          "丽江+大理+香格里拉6日5晚跟团游·自营纯玩 18怪好导游 藏服旅拍 网红S湾骑行 双成人立减800元 赠双表演 非遗扎染 普达措4小时深度游 升级2晚高端品牌酒店 儿童赠全程早餐",
        title10:
          "云南昆明+普者黑风景区+西双版纳+野象谷7日6晚私家团·【四飞纯玩 一单一团 专车服务 湖景酒店 连住告庄】极限挑战·普者黑+追寻爸爸去哪儿足迹+ 孔雀放飞+泼水狂欢+邂逅野象+原始森林深入氧吧+大佛寺纳福·圣菩提",
        title11:
          "昆明+滇池+东川红土地+建水+元阳哈尼梯田+普者黑景区+弥勒8日7晚私家团·与春城不期而遇【热播影视拍摄地+游梯田观日出日落&法式小火车&网红东风韵】专车出行//一单一团【含】景点首道门票「携程高评酒店」",
        title12: "云南昆明+普者黑景区+蒙自+建水+抚仙湖+元阳...",
        title13: "古北水镇2日1晚半自助游·【携程自营旗舰·纸鸢探...",
        title14: "古北水镇2日1晚跟团游·『携程自营旗舰·春季踏青|...",
        title15: "古北水镇2日1晚跟团游·『铂金臻选·5钻古北之光·...",
        title16: "古北水镇2日1晚半自助游·周边游.亲子游·冬季泡温...",
        tit1: "山西太原+五台山+大同4日3晚跟团游·【晋北经典】...",
        tit2: "【晋北经典】国际酒店 洲际凯宾&万豪 佛国五台+世遗云冈+雄关雁门+悬空寺登临 5正餐 餐餐特色 赠儿童早餐 一车一导 零购物零自费 24H接送机接送站",
        tit3: "大同+云冈石窟+恒山+悬空寺+华严寺3日跟团游·...",
        tit4: "【精华大同】古窟古寺名山 云冈石窟看尽北魏王朝风韵 华严寺缕缕烟火千年萦绕 登临悬空寺出世高人清修之地 登恒山领略北岳气势  24H接送 精选4钻酒店",
        tit5: "平遥+壶口瀑布+灵石3日2晚跟团游·【壶口桃花汛...",
        tit6: "【壶口桃花汛】含往返高铁票·一车一导悠闲观光不赶路·赠酒店温泉+享晋南特色餐+四合院客栈【3000人出行山西+真实点评】观壶口瀑布·平遥古城·品王家大院·看洪洞大槐树·亲子出游",
        tit7: "壶口瀑布+平遥古城+灵石3日2晚跟团游·『含北京...",
        tit8: "精选山西AAAAA景区+严选当地品质酒店+地道晋味美食+资深金牌导游带队『20人VIP小团』观壶口瀑布·平遥古城·品王家大院·看洪洞大槐树·亲子出游",
        tit9: "北京2日1晚私家团·入住徽派民宿『一棵树』· 北京...",
        tit10: "北京3日2晚私家团·【延庆玉渡山+龙庆峡/延庆世...",
        tit11: "北京2日1晚私家团·『延庆 · 小隐轻奢』探秘藏在...",
        tit12: "龙庆峡+玉渡山景区2日1晚私家团·「精心挑选景...",
        tit13: "天津2日1晚跟团游·飞机高铁【轻奢纯玩】中心渔...",
        tit14: "天津古文化街+瓷房子+五大道+泰达航母主题公园...",
        tit15: "天津2日1晚半自助游·【私家团+自由行·任选酒店·...",
        tit16: "天津2日1晚半自助游·私家团+自由行、亿利精灵乐...",
      },
      priceList: {
        price1: "788",
        price2: "688",
        price3: "699",
        price4: "499",
        price5: "9900",
        price6: "4580",
        price7: "3880",
        price8: "1215",
        price9: "399",
        price10: "422",
        price11: "655",
        price12: "777",
      },
      addressList: {
        address1: "北京",
        address2: "三亚",
        address3: "古北水镇",
        address4: "云南",
        address5: "大同",
        address6: "太原",
        address7: "张家口",
        address8: "天津",
      },
    };
  },
};
</script>

<style scoped lang='scss'>
.el-tabs__active-bar {
  background-color: rgb(73, 178, 82) !important;
}
.home {
  .slideshow {
    width: 100%;
    height: 300px;
  }
  .tabs {
    width: 1200px;
    margin: 20px auto;
    .tabItem {
      display: flex;
    }
  }
  .details {
    width: 1200px;
    height: 360px;
    margin: 0 auto 20px;
    .tabItem {
      display: flex;
    }
    .leftImg {
      cursor: pointer;
      float: left;
      .topTit {
        width: 210px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        background: #3983e5;
      }
      .topTit1 {
        width: 210px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        background: #f7b300;
      }
      .bottomImg {
        width: 210px;
        height: 320px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .rightTab {
      float: left;
      width: 980px;
      height: 360px;
    }
  }
  .advert {
    width: 1200px;
    margin: 0 auto 20px;
    display: flex;
    img {
      margin-right: 22px;
    }
  }
}
.cup {
  cursor: pointer;
}
</style>
