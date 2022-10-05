<template>
  <div class="shopcart">
    <Header></Header>
  </div>
  <!--進度條-->
  <div class="container pt-8 pb-5 progressbar">
    <ul class="d-flex justify-content-around w-md-75 w-100 w-lg-50 mx-auto">
      <li class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center circle rounded-circle border mb-4">1</div>
        <p>購物車</p>
      </li>
      <li class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center circle rounded-circle border mb-4">2</div>
        <p>填寫資訊</p>
      </li>
      <li class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center circle rounded-circle border mb-4 progress-active">3</div>
        <p>完成購物</p>
      </li>
    </ul>
  </div>
  <div class="container all_container mb-10">
    <div class="title mb-5 justify-content-center">感謝您的購買</div>
    <div class="row align-items-center button d-flex justify-content-evenly">
      <router-link to="/Shopping" custom v-slot="{navigate, isActive, isExactActive}"><button type="button" class="col-lg-4 w-30 p-3 go_store" @click="navigate" :class="{active: isActive, exactActive: isExactActive}">前往商店</button></router-link>
      <router-link to="/Home" custom v-slot="{navigate, isActive, isExactActive}"><button type="button" class="col-lg-4 w-30 p-3 go_homepage" @click="navigate" :class="{active: isActive, exactActive: isExactActive}">前往首頁</button></router-link>
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
    // copyShopCartData(){
    //   return JSON.parse(JSON.stringify())
    // }
  },
  // watch: {
    
  // },
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

  .progressbar{
    display: flex;
    padding: 5%;
    justify-content: space-evenly;
  }

  .progressbar_container{
    text-align: center;
  }

  .progressbar_container p{
    margin-top: 20px;
  }

  .progressbar_one{
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

  .all_container {
    padding: 3% 8% 8% 8%;
  }

  .title {
    margin: 0 auto;
    font-size: 30px;
    color: #0047FF;
    display: grid;
  }

  .go_store {
    border-radius: 10px;
    border: 1px solid #0047FF;
    color:#0047FF;
    padding: 20px;
    font-size: 20px;
  }

  .go_homepage{
    border-radius: 10px;
    background-color: #0047FF;
    border: 1px solid #0047FF;
    color:#fff;
    padding: 20px;
    font-size: 20px;
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
