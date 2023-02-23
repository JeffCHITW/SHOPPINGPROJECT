<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid py-3 px-5">
        <router-link to="/Home"><img src="../assets/images/logo.png" class="navbar-brand"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/StreetStyle"><p class="nav-link active">每日穿搭精選</p></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Shopping"><p class="nav-link">商品購買</p></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ContactUs"><p class="nav-link">聯絡我們</p></router-link>
          </li>
          <li class="nav-item">
            <div class="shopcarticon">
              <router-link to="/ShopCart">
                <span class="icontotalcount"> {{ getSumitem() }}</span>
                <img src="../assets/images/shopping-cart.png">
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(['shopCartData']),
  },
  methods: {
    getSumitem(){
      let count = 0;
      this.shopCartData.forEach(item => {
        count += Number(item.number);
      });
      return count;
    },
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
}

* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration:none
}

#navbarNav{
  width: 70%;
  justify-content: end;
}
.shopcarticon {
  box-sizing: border-box;
  width: 30px;
  height: 30px;
}

.icontotalcount {
  position: absolute;
  top: -10px;
  left: 16px;
  width: 18px;
  height: 18px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30%;
  background-color: #0047FF;
  color: #fff;
  box-shadow: -1px 1px 5px rgb(0 0 0 / 50%);
}

.shopcarticon img {
  width: 25px;
  height: 25px;
}

.shopcarticon a{
  position: relative;
}

</style>