<template>
  <div class="shopcart">
    <Header></Header>
  </div>
  <!--進度條-->
  <div class="container pt-5 pb-5 progressbar">
    <ul class="d-flex justify-content-around w-md-75 w-100 w-lg-50 mx-auto">
      <li class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center circle rounded-circle border mb-4">1</div>
        <p>購物車</p>
      </li>
      <li class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center circle rounded-circle border mb-4 progress-active">2</div>
        <p>填寫資訊</p>
      </li>
      <li class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center circle rounded-circle border mb-4">3</div>
        <p>完成購物</p>
      </li>
    </ul>
  </div>
  <!--資訊填寫欄位-->
  <div class="cart_container">
    <div class="cart_title">
      顧客資訊
    </div>
    <form>
      <div class="form-group">
        <input name="Name" type="text" class="form-control" placeholder="姓名" required="required" minlength="2"/>
      </div>
      <div class="form-group">
        <input name="Email" class="form-control" type="email" placeholder="電子郵件地址" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
      </div>
      <div class="form-group">
        <input name="Tel" class="form-control" type="text" placeholder="手機號碼(格式:09xx-xxxxxx)" required="required" maxlength="11" pattern="09\d{2}-\d{6}" oninput="setCustomValidity('');" oninvalid="setCustomValidity('請輸入正確的手機號瑪格式:09xx-xxxxxx');"/>
      </div>
      <div class="form-group">
        <input name="address" class="form-control" type="text" placeholder="填寫寄送地址" required="required" />
      </div>
      <div class="d-flex flex-row-reverse"><router-link to="/ShopCartFinalPage"><button type="submit" class="btn btn-primary">送出訂單</button></router-link></div>
    </form>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
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

  .form-group {
    margin: 20px 0;
  }

  .form-group input {
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #0047FF;
    color: #242424;
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