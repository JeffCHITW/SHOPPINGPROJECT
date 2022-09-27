<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="logo_contianer">
        <router-link to="/Home"><img src="../assets/images/logo.png" class="navbar-brand"></router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/StreetStyle"><p class="nav-link active">每日穿搭精選</p></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Shopping"><p class="nav-link">商品購買</p></router-link>
          </li>
          <li class="nav-item">
            <p class="nav-link">聯絡我們</p>
          </li>
        </ul>
      </div>
      <div class="shopcarticon">
        <router-link to="/ShopCart">
          <span class="icontotalcount"> {{ getSumitem() }}</span>
          <img src="../assets/images/shopping-cart.png">
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex"

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

.container-fluid {
  height: 100px;
  padding: 30px;
}

#navbarNav{
  width: 70%;
  justify-content: center;
}
.shopcarticon {
  box-sizing: border-box;
  width: 15%;
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
  border-radius: 50%;
  background-color: #bf7f5a;
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