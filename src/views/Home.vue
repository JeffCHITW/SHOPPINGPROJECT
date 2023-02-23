<template>
  <div class="home">
    <Header></Header>
    <Carousel-banner></Carousel-banner>
  </div>
  <div class="big_container">
    <div class="pt-5 mb-5 streetstyle_title">
      <h3>STREET STYLE</h3>
      <img class="streetstyle_title_img" src="../assets/images/titleimg.png">
    </div>
    <div class="container shibuya_homepage">
      <div class="row shibuya_homepage_content_row" >
        <div class="col-lg-6 col-xs-12 shibuya_homepage_content">
          <p class="shibuya_title">涉谷</p>
          <p class="shubuya_eng_title">SHIBUYA</p>
          <p class="shibuya_introduction">澀谷亦是東京街頭文化的代表，是流行時尚變化最快速的地方，想知道現在最流行的元素是什麼？逛一圈澀谷街頭和商店就知道。</p>
          <router-link to="/StreetStyle" custom v-slot="{navigate, isActive, isExactActive}"><button class="shibuya_go" @click="navigate" type="button" :class="{active: isActive, exactActive: isExactActive}">前往</button></router-link>
        </div>
        <div class="col-lg-6 col-xs-12 shibuyahomepage_img">
          <img src="../assets/images/shibuyahomepage.png" class="img-fluid">
        </div>
      </div>
    </div>
      <div class="container omotesnado_homepage">
        <div class="row">
          <div class="col-lg-6 col-xs-push-12 omotesnado_img">
            <img src="../assets/images/omotesnadohomepage.png" class="img-fluid omotesnado_img">
          </div>
          <div class="col-lg-6 col-xs-12 omotesnado_homepage_content">
            <p class="omotesnado_title">表參道</p>
            <p class="omotesnado_eng_title">OMOTESNADO</p>
            <p class="omotesnado_introduction">表參道所在的位置，充滿國際精品與當代藝術建築，因此穿搭風格成熟、洗鍊許多。所以有點強迫症個性的你，也許就是屬於表參道女孩的一員喔。</p>
            <router-link to="/StreetStyle" custom v-slot="{navigate, isActive, isExactActive}"><button class="omotesnado_go" @click="navigate" type="button" :class="{active: isActive, exactActive: isExactActive}">前往</button></router-link>
          </div>
        </div>
      </div>
      <div class="container ginza_homepage">
        <div class="row ginza_homepage_row">
          <div class="col-lg-6 col-xs-push-12 ginza_homepage_content">
            <p class="ginza_title">銀座</p>
            <p class="ginza_eng_title">SHIBUYA</p>
            <p class="ginza_introduction">銀座擁有各種高端時尚單品，不僅是日本最繁華的基地，也是眾多外國公司的所在地，柔韌的皮草和優雅的長袖衣服，上裝結實精緻的鞋子，通透舒適的成熟女性。穿塔，是銀座少女的風采。</p>
            <router-link to="/StreetStyle" custom v-slot="{navigate, isActive, isExactActive}"><button class="ginza_go" @click="navigate" type="button" :class="{active: isActive, exactActive: isExactActive}">前往</button></router-link>
          </div>
          <div class="col-lg-6 col-xs-push-12 ginza_img">
            <img src="../assets/images/ginzahomepage.png" class="img-fluid ginzahomepage_img">
          </div>
        </div>
    </div>
    <!--熱門推薦-->
    <div class="topsale_title">
      <h3>TOP SALE</h3>
      <img  class="topsale_title_img" src="../assets/images/titleimg.png">
    </div>
    <carousel-top-sale></carousel-top-sale>
    <div class="newitem_title">
      <h3>New Item</h3>
      <img  class="newitem_title_img" src="../assets/images/titleimg.png">
    </div>
    <!--穿搭跑馬燈-->
    <div class="container newitem_flexcontainer">
      <div class="row newitem_imgcontainer1 d-flex justify-content-evenly">
        <img src="../assets/images/image4.png" class="col-lg-2 col-xs-4 img-fluid newitemimg">
        <img src="../assets/images/image5.png" class="col-lg-2 col-xs-4 img-fluid newitemimg">
        <img src="../assets/images/image6.png" class="col-lg-2 col-xs-4 img-fluid newitemimg">
        <img src="../assets/images/image7.png" class="col-lg-2 col-xs-4 img-fluid newitemimg">
      </div>
      <div class="row newitem_imgcontainer2 d-flex justify-content-evenly">
        <img src="../assets/images/image8.png" class="col-lg-2 col-xs-4 img-fluid newitemimg">
        <img src="../assets/images/image10.png" class="col-lg-2 col-xs-4 img-fluid newitemimg">
        <img src="../assets/images/image11.png" class="col-lg-2 col-xs-4 img-fluid newitemimg">
        <img src="../assets/images/image12.png" class="col-lg-2 col-xs-4 img-fluid newitemimg">
      </div>
    </div>
    <!--關於品牌-->
    <div class="wearjapan_title">
      <h3>關於WEARJAPAN.</h3>
      <img  class="newitem_title_img" src="../assets/images/titleimg.png">
    </div>
    <div class="container wearjapan_container">
      <div class="row wearjapan_introduction">
        <div class="col-lg-6 col-xs-12 mb-5">
          <img src="../assets/images/logo.png" class="wearjapan_logo">
          <p>我們的目標是提供每日的穿搭時尚穿著，讓追求流行、好看的道路變得簡單，WEARWORLD讓你每天出門都能很有自信的出門。</p>
        </div>
        <div class="col-lg-6 col-xs-12">
          <img src="../assets/images/Aboutus.png" class="wearjapan_pic">
        </div>
      </div>
    </div>
    <!--關於品牌的備註事項-->
    <div class="container service_container">
      <div class="row service1">
        <div class="col-lg-3 col-xs-12 mb-4">
          <img src="../assets/images/truck.png" class="service_icon">
          <h3>交貨快速</h3>
          <p class="service_introduction">在商品庫存充足下，我們允諾下單三天內會出貨，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。</p>
        </div>
        <div class="col-lg-3 col-xs-12 mb-4">
          <img src="../assets/images/customer-service.png" class="service_icon">
          <h3>售後服務</h3>
          <p class="service_introduction">為保障買家權益， 所有商品皆享有30日的售後服務。</p>
        </div>
        <div class="col-lg-3 col-xs-12 mb-4">
          <img src="../assets/images/truck.png" class="service_icon">
          <h3>客服服務</h3>
          <p class="service_introduction">如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。</p>
        </div>
        <div class="col-lg-3 col-xs-12 mb-4">
          <img src="../assets/images/giftbox.png" class="service_icon">
          <h3>包裝服務</h3>
          <p class="service_introduction">如需額外包裝，可再下訂後通知我們，會有專人協助處理相關事宜。</p>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import CarouselBanner from '../components/Carouselbanner.vue'
import CarouselTopSale from '../components/CarouselTopSale.vue'
import Footer from '../components/Footer.vue'
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Header,
    CarouselBanner,
    CarouselTopSale,
    Footer
  },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
    console.log(this.gettershopInformationData)
  },
  methods:{
    ...mapActions(['saveProductData']),
    goBuyProduct (product) {
      this.$router.push({ name: 'BuyingItemPage' });
      // console.log(product);
      this.$store.dispatch("saveProductData", product);
      // console.log(this.$store);
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-image: "../assets/images/background.png";
}

body {
  background-color: #EEEEEE;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  padding-top: 70px;
}

* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration:none
}

.streetstyle_title {
  width: auto;
  height: auto;
  padding-top: 102px;
  margin: 0 auto;
  margin-bottom: 85px;
}

.streetstyle_title_img {
  margin: 0 auto;
  display: block;
}

.streetstyle_title h3 {
  text-align: center;
}

.shibuya_homepage {
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 94px;
  justify-content: center;
}

.shibuya_homepage_content_row {
  align-items: center;
}

.shibuya_homepage_content {
  height: 274px;
}

.shibuyahomepage_img img {
  max-width: 100%;
}

.shibuya_title {
  font-size: 34px;
}

.shubuya_eng_title {
  font-size: 20px;
  padding-bottom: 19px;
}

.shibuya_introduction {
  font-size: 18px;
  max-width: 346px;
  padding-bottom: 19px;
}

.shibuya_go {
  width: 62px;
  height: 62px;
  border-radius: 99rem;
  display: block;
  text-align: center;
  cursor: pointer;
  color: #0047FF;
  background-color: transparent;
  border: 1px dashed #0047FF;
  transition: all .3s linear;
}

.shibuya_go:hover {
  background-color: #0047FF;
  color: #EEEEEE;
}

.omotesnado_homepage {
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 94px;
  justify-content: center;
}

.omotesnado_img {
max-width: 100%;
}

.omotesnado_homepage_content {
  display: inline-block;
}

.omotesnado_title {
  font-size: 34px;
}

.omotesnado_eng_title {
  font-size: 20px;
  padding-bottom: 19px;
}

.omotesnado_introduction {
  font-size: 18px;
  max-width: 346px;
  padding-bottom: 19px;
}

.omotesnado_go {
  width: 62px;
  height: 62px;
  border-radius: 99rem;
  display: block;
  text-align: center;
  cursor: pointer;
  color: #0047FF;
  background-color: transparent;
  border: 1px dashed #0047FF;
  transition: all .3s linear;
}

.omotesnado_go:hover {
  background-color: #0047FF;
  color: #EEEEEE;
}

.ginza_homepage {
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
}

.ginza_homepage_content {
  display: inline-block;
}

.ginza_homepage_row {
  align-items: center;
}

.ginza_title {
  font-size: 34px;
}

.ginza_eng_title {
  font-size: 20px;
  padding-bottom: 19px;
}

.ginza_introduction {
  font-size: 18px;
  max-width: 346px;
  padding-bottom: 19px;
}

.ginza_go {
  width: 62px;
  height: 62px;
  border-radius: 99rem;
  display: block;
  text-align: center;
  cursor: pointer;
  color: #0047FF;
  background-color: transparent;
  border: 1px dashed #0047FF;
  transition: all .3s linear;
}

.ginza_go:hover {
  background-color: #0047FF;
  color: #EEEEEE;
}

.ginzahomepage_img {
  max-width: 100%;
}

.topsale_title {
  width: auto;
  height: auto;
  padding-top: 102px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.topsale_title_img {
  margin: 0 auto;
  display: block;
}

.topsale_title h3 {
  text-align: center;
}

.newitemimg {
  max-width: 70%;
}

.newitem_title {
  width: auto;
  height: auto;
  padding-top: 66px;
  margin: 0 auto;
  margin-bottom: 50px;
}

.newitem_title_img {
    margin: 0 auto;
    display: block;
}

.newitem_title h3 {
  text-align: center;
}

.newitem_flexcontainer {
  justify-content: center;
}

.newitem_imgcontainer1 {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  margin-bottom: 40px;
}

.newitem_imgcontainer2 {
  display: flex;
  justify-content: space-evenly;
}

.big_container {
  padding: 0 10%;
}

.wearjapan_title {
  width: auto;
  height: auto;
  padding-top: 102px;
  margin: 0 auto;
  margin-bottom: 50px;
}

.wearjapan_title h3 {
  text-align: center;
}

.wearjapan_container1 {
  justify-content: center;
  margin-bottom: 75px;
}

.wearjapan_container {
  display: flex;
  justify-content: center;
  margin-bottom: 75px;
}

.wearjapan_introduction {
  align-items: center;
}

.wearjapan_introduction p {
  display: block;
  font-size: 18px;
  max-width: 346px;
  align-items: center;
}

.wearjapan_logo{
  max-width: 50%;
  margin-bottom: 10px;
}

.wearjapan_pic{
  width: 80%;
}

.service_container {
  border-top: 1px solid #0047FF;
  border-bottom: 1px solid #0047FF;
  margin-bottom: 70px;
}

.service_container h3 {
  margin-bottom: 20px;
}

.service_introduction {
  max-width: 300px;
}

.service_icon {
  width: 30px;
  height: 30px;
  margin-bottom: 15px;
}

.service1 {
  padding: 30px 0;
}

</style>
