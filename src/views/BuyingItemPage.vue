<template>
  <Header></Header>
  <div class="container buyingitempage">
    <div class="row row-col-2 product_item_container">
      <div class="col-lg-6 col-xs-12 product_carousel">
        <CarouselCommodity></CarouselCommodity>
      </div>
      <div class="col-lg-6 col-xs-12 mt-lg-0 mt-5 product_control_bigcontainer">
        <div class="product_control_container">
          <h3>{{ data.categoryTitle }}</h3>
          <h2>{{ data.productName }}</h2>  
          <h5>NT$ {{ data.money }}</h5>
        </div>
        <div class="buying_selection" >
          <ul class="productitem_select" v-for="itemcolorsize in data.productcolorsize" :key="itemcolorsize.id">
            <li>
              <img :src="require(`../assets/images/productlist/${data.category}/${data.id}/${itemcolorsize.img}`)">
              <p><span>{{ itemcolorsize.color }}</span>/{{ itemcolorsize.size }}</p>
              <input v-model="itemcolorsize.num" min="0">
              <button class="add_to_cart" type="button" @click="addProductToCart(itemcolorsize);alert('已加入購物車', success)">加入購物車</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--商品介紹切換的tabs-->
    <ul class="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">商品介紹</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">商品尺寸</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">購物須知</button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="productitem_introduction_container" v-if="productItemIntroduction == 'one'">
            <p class="productitem_introduction_designtitle">{{ data.producttitle }}</p>
            <div class="productitem_introduction_design_container">
              <p class="designtitle">設計</p>
              <span> {{ data.designtitle }} </span>
            </div>
            <div class="productitem_introduction_material">
              <p class="materialtitle">材質</p>
              <span>{{ data.materialtitle }}</span>
            </div>
          </div>
        <div class="">
          <img src="../assets/images/Group_3341.png" class="test_img">
        </div>
      </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <p>尺碼介紹</p>
          <table class="productitem_format">
            <tbody>
              <tr>
                <th></th>
                <th>袖子長度</th>
                <th>衣服長度</th>
                <th>胸飾</th>
              </tr>
              <tr v-for="itemProductSize in data.productcolorsize" :key="itemProductSize.id">
                <td>{{ itemProductSize.size }}</td>
                <td>{{ itemProductSize.shoulderlength }}</td>
                <td>{{ itemProductSize.clotheslength }}</td>
                <td>{{ itemProductSize.chestlength }}</td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
        <div class="productitem_notification_01">
          <p>商品購買須知</p>
          <span>產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。 商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。
                Wearworld盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。</span>
        </div>
        <div class="productitem_notification_02">
          <p>退換貨須知</p>
          <span>依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。</span>
        </div>
      </div>
    </div>
  </div>
    <Footer></Footer>
    <div class="corner" id="liveAlertPlaceholder"></div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import CarouselCommodity from "../components/CarouselCommodity.vue"
import { mapState, mapActions } from "vuex";
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

export default {
  components: {
    Header,
    Footer,
    CarouselCommodity
  },
  data () {
    return {
      data: {},
      imgData: {
      },
      productItemIntroduction: 'one',
      alertPlaceholder: null,
      triggerTabList: null,
    }
  },
  computed: {
    ...mapState(['nowProductData'])
  },
  watch: {
    nowProductData: {
      immediate: true,
      handler(newValue, oldValue) {
        this.data = newValue
        this.imgData = require(`../assets/images/productlist/${newValue.category}/${newValue.id}/carousel01.png`)
        console.log(newValue, "nowProductData")
      }
    }
  },
  methods: {
    ...mapActions(['saveShopCartData']),
    addProductToCart(itemcolorsize) {
      const params = {
        productName: this.data.productName,
        money: this.data.money,
        size:itemcolorsize.size,
        color:itemcolorsize.color,
        number:itemcolorsize.num,
        id:itemcolorsize.id,
        img: require(`../assets/images/productlist/${this.data.category}/${this.data.id}/${itemcolorsize.img}`),
      }
      console.log(params)
      this.$store.dispatch("saveShopCartData", params);
    },
    changeTab() {
      this.triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
      triggerTabList.forEach(function (triggerEl) {
        var tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', function (event) {
          event.preventDefault()
          tabTrigger.show()
        })
      })
    },
    alert(message, type) {
      this.alertPlaceholder = document.getElementById('liveAlertPlaceholder')
      let wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      this.alertPlaceholder.append(wrapper)
    },
    // toast(toastTrigger) {
    //   this.toastTrigger = document.getElementById('liveToastBtn')
    //   this.toastLiveExample = document.getElementById('liveToast')
    //   if (toastTrigger) {
    //     toastTrigger.addEventListener('click', function () {
    //       var toast = new bootstrap.Toast(toastLiveExample)
    //       toast.show()
    //   })
    //   }
    // }
  }
}
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
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
}

.buyingitempage {
  padding: 75px 10%;
}

.product_item_container {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 70px;
}

.product_carousel {
  display: inline-block;
}

.product_control_container {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 30px;
  flex-direction: column;
}

.productitem_select {
  margin: 0;
  padding: 0;
}

.productitem_select img {
  width: 15%;
}

.productitem_select li{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 25px 0;
  border-top: 1px solid #C6D6FF;
}

.productitem_select p{
  margin: 0;
  padding: 0;
  width: 20%;
}

.productitem_select_quantity {
  margin: 0;
  padding: 0;
  width: 20%;
  display: flex;
}

.productitem_select_quantity li{
  margin: 0;
  padding: 0;
  float:left; 
  list-style-type:none; 
  width:30px; height:30px; 
  text-align:center; 
  line-height:30px; 
  border:#999 thin solid; 
  border-radius: 2px;
  background-color:#fff;
}

.productitem_select_quantity input{
  font-size:20px; 
  width:100%; height:100%; 
  outline:none; 
  /* -webkit-appearance:none;  */
  background:none; 
  margin:0; 
  padding:0; 
  border: 1px solid transparent; 
  border-radius: 0;
}

.add_to_cart {
  width: 25%;
  padding: 10px;
  border-radius: 4px;
  border-color: #0047FF;
  color: #0047FF;
}

.product_control_bigcontainer {
  vertical-align: top;
}

.productitem_title {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  border-bottom: 1px solid #0047FF;
}

.productitem_title li{
  display: flex;
  margin: 0;
  padding: 15px;
  font-size: 24px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.productitem_introduction_container {
  padding: 40px 30px;
}

.productitem_introduction_designtitle {
  font-size: 24px;
  color: #333;
  padding: 0;
  margin-bottom: 15px;
}

.productitem_introduction_design_container{
  margin-bottom: 20px;
  max-width: 80%;
}

.productitem_introduction_design_container span{
  font-size: 14px;
}

.designtitle {
  font-size: 16px;
  color: #0047FF;
  padding: 0;
  margin: 0;
}

.materialtitle {
  color: #0047FF;
  padding: 0;
  margin: 0;
}

.productitem_introduction_material span {
  font-size: 14px;
}

.productitem_format_container {
  padding: 40px 30px;
  margin: 0 auto;
  display: table;
}

.productitem_format {
  width: 400pxs;
  font-size: 16px;
  border: 1px solid #333;
  text-align: center;
}

.productitem_format_container p{
  font-size: 16px;
  color: #0047FF;
}

.productitem_format th{
  padding: 8px;
  border: 1px solid #333;
}

.productitem_format td{
  padding: 8px 50px;
  border: 1px solid #333;
  vertical-align: middle;
}

.productitem_notification_container {
  padding: 40px 30px;
  width: 100%;
}

.productitem_notification_01 {
  margin-bottom: 30px;
}

.productitem_notification_01 p {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #0047FF;
}

.productitem_notification_02 p {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #0047FF;
}

input{
    width: 10%;
    text-align: center;
}

.corner {
  position:absolute;
  top: 10%;
  right: 45%;
  width: 200px;
  height: 100px;
  border-color: #0047FF;
  color: #0047FF;
}

.test_img {
  width: 300px;
}
</style>