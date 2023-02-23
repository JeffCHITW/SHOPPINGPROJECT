<template>
  <Header></Header>
  <div class="container pt-5">
    <div class="row">
      <div class="col px-2 py-5 mb-5 title">
        <h3 class="text-3xl text-lg-4xl text-center" >穿搭，你自己做主</h3>
      </div>
      <div class="row d-flex align-items-center">
        <h3 class="mb-5">聯絡我們</h3>
        <div class="col-lg-6 col-xs-12 mb-5">
          <img src="../assets/images/Aboutus.png" alt="logo圖片" class="">
        </div>
        <div class="col-lg-6 col-xs-12 mb-5">
          <ul>
            <li class="lh-lg letter-spacing-1"> 客服電話:02-123-5678</li>
            <li class="lh-lg letter-spacing-1"> 客服信箱:Wearworld@gmail.com</li>
            <li class="lh-lg letter-spacing-1"> 營業時間:Mon-Fri / 09:30-18:00</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--關於品牌的備註事項-->
  <div class="container service_container">
    <div class="row mt-4">
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
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, Footer },

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
  list-style-type: none;
}

.title {
  border-top: 1px solid #0047FF;
  border-bottom: 1px solid #0047FF;
}

img {
  max-width: 80%;
}

.service1 {
  padding: 30px 0;
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
</style>