<template>
  <div class="shopcart">
    <Header></Header>
  </div>
  <!--進度條-->
  <div class="container pt-5 pb-5 progressbar">
    <ul class="d-flex justify-content-around w-md-75 w-100 w-lg-50 mx-auto">
      <li class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center circle rounded-circle border mb-4 progress-active">1</div>
        <p>購物車</p>
      </li>
      <li class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center circle rounded-circle border mb-4">2</div>
        <p>填寫資訊</p>
      </li>
      <li class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center circle rounded-circle border mb-4">3</div>
        <p>完成購物</p>
      </li>
    </ul>
  </div>
  <!--購物車資訊-->
  <div class="cart_container">
    <div class="cart_title">
      購物車
    </div>
    <table class="productlist_container">
      <tr class="productlisttitle">
        <td class="productlisttitle_data">商品資料</td>
        <td class="productlisttitle_price">單件價格</td>
        <td class="productlisttitle_quantity">數量</td>
        <td class="productlisttitle_total">小計</td>
      </tr>
      <tr class="productlistitem_container" v-for="item in shopCartData" :key="item.id">
        <td class="productlistitem">
            <img :src="item.img">
            <h3>{{ item.productName }}<span>/{{ item.color }}</span><span>{{ item.size }}</span></h3>
        </td>
        <td class="productlistitem_price">{{ item.money }}</td>
        <td class="productlistitem_quantity"><input v-model="item.number" min="0"></td>
        <td class="productlistitem_total">{{ item.money * item.number }}</td>
        <td>
          <span class="material-icons" @click="deleteProduct(item.id)">delete</span>
        </td>
      </tr>
    </table>
    <div class="producttotal">
      <p>商品數量共{{ getSumitem() }}件</p>
      <p>總價NT${{ getSumMoney() }}</p>
      <router-link to="/ShopCartConfirmPage"><button type="button">確認資訊</button></router-link>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import { mapState, mapActions } from "vuex"
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState(['shopCartData']),
    ...mapActions(['deleteShopCartData', 'saveShopCartData']),
  },
  methods: {
    getSumMoney(){
      let sum = 0;
      for(let i in this.shopCartData) {
        sum += this.shopCartData[i].number*this.shopCartData[i].money;
      }
      return sum;
    },
    getSumitem(){
      let count = 0;
      this.shopCartData.forEach(item => {
        count += Number(item.number);
      });
      return count;
    },
    deleteProduct(id) {
      this.$store.dispatch('deleteShopCartData', id);
    }
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

p {
  margin: 0;
  padding: 0;
}

  .progressbar_container{
    text-align: center;
  }

  .progressbar_container p{
    margin-top: 20px;
  }

  .progressbar_one{
    display: table-cell;
    border-radius: 100%;
    background-color: #0047FF;
    text-align: center;
    vertical-align: middle;
    width: 76px;
    height: 76px;
    color: #fff;
    font-size: 32px;
    margin-bottom: 32px;
  }

  .progressbar_two{
    display: table-cell;
    border: 1px solid #0047FF;
    border-radius: 100%;
    text-align: center;
    vertical-align: middle;
    width: 76px;
    height: 76px;
    color: #0047FF;
    font-size: 32px;
    margin-bottom: 32px;
  }

  .progressbar_three{
    display: table-cell;
    border: 1px solid #0047FF;
    border-radius: 100%;
    text-align: center;
    vertical-align: middle;
    width: 76px;
    height: 76px;
    color: #0047FF;
    font-size: 32px;
    margin-bottom: 32px;
  }

  .cart_title {
    font-size: 32px;
    color: #fff;
    background-color: #0047FF;
    padding: 5px 20px;
  }

  .cart_container{
    padding: 3% 20% 6% 20%;
  }

  .productlist_container{
    width: 100%;
    border: 1px solid #0047FF;
  }

  .productlisttitle{
    display: flex;
    justify-content: space-between;
    border: 1px solid #0047FF;
    padding: 5px 20px;
    width: 100%;
  }

  .productlisttitle_data {
    width: 40%;
  }

  .productlisttitle_price {
    width: 20%;
  }

  .productlisttitle_quantity {
    width: 20%;
  }

  .productlisttitle_total {
    width: 20%;
  }

  input {
    width: 30%;
    text-align: center;
  }

  .productlistitem_container{
    display: flex;
    border: 1px solid #0047FF;
    padding: 25px 20px;
    align-items: center;
  }

  .productlistitem {
    display: flex;
    width: 40%;
    align-items: center;
  }

  .productlistitem img{
    width: 28%;
    margin-right: 15px;
  }

  .productlistitem h3{
    font-size: 15px;
    width: 20%;
  }

  .productlistitem_price{
    width: 20%;
  }

  .productlistitem_quantity{
    width: 20%;
  }

  .productlistitem_total{
    width: 20%;
  }

  .producttotal {
    display: flex;
    justify-content: end;
    text-align: center;
    padding: 15px 0 15px 20px;
    align-items: center;
  }

  .producttotal p {
    margin-right: 5%;
    padding: 0;
  }

  .producttotal button {
    width: 100px;
    padding: 2px 2px;
    color: #fff;
    background-color: #0047FF;
    font-size: 18px;
    border-color: #0047FF;
    border-radius: 100px;
  }

  .progress-active {
    background-color: #0047FF;
    color: #fff;
    position: relative;
    width: 50px;
    height: 50px;
  }

  .progress-active::before {
    content: "";
    position: absolute;
    width: 54px;
    height: 54px;
    border: 1px dashed #0047FF;
    border-radius: 50%;
    -webkit-animation: rotate 10s linear infinite;
    animation: rotate 10s linear infinite;
  }

  .circle {
    width: 40px;
    height: 40px;
    position: relative;
  }

  .rounded-circle {
    border-radius: 50%!important;
  }
</style>
