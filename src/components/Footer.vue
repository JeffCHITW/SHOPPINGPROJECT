<template>
  <div class=".container-fluid mb-15 footer_container navbar-fixed-bottom">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 content_container">
        <div class="col-lg-4 col-xs-12 mb-3 branding_story">
          <h5>品牌故事</h5>
          <p>關於品牌</p>
          <p>聯絡我們</p>
        </div>
        <div class="col-lg-4 col-xs-12 mb-3 product_list">
          <h5>商品專區</h5>
          <p>上衣</p>
          <p>外套</p>
          <p>下身</p>
          <p>配件</p>
        </div>
        <div class="col-lg-4 col-xs-12 mb-3 contact_information">
          <h5>聯絡資訊</h5>
          <p>電話:02-2222-1234</p>
          <p>Email:Wearworld@gmail.com</p>
          <p>Time:Mon-Fri / 09:30-18:00</p>
        </div>
    </div>
  </div>
</template>
s
<script>
export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
}

  .footer_container {
    display: flex;
    justify-content: center;
    background-color: #0047FF;
  }

  .content_container {
    width: 75%;
    display: flex;
    color: #EEEEEE;
    padding-top: 40px;
  }

   .content_container p{
    margin-bottom: 10px;
    font-size: 15px;
  }

  .branding_story {
    padding-right: 60px;
  }

  .product_list {
    padding-right: 60px;
  }
</style>
