<template>
  <div class="streetstyle">
    <Header></Header>
      <img src="../assets/images/shopping-banner.png" class="bannerimg">
  </div>
  <div class="bigcontainer">
    <div class="product_title">
      <h3>STREET STYLE</h3>
      <img class="product_title_img" src="../assets/images/titleimg.png">
    </div>
    <div class="style-wrapper">
      <div class="Harajuku">
        <img class="locationimg" src="../assets/images/Harajuku.png">
        <div class="Harajuku_font_container">
          <div class="Harajuku_title_container"><h3>原宿</h3></div>
          <div class="Harajuku_introduction_container">
            <p>2022/08</p>
            <p>以世界上獨特的時尚而著稱，有眾多時尚眼光超強的年輕人聚居於此，創造出融合了時尚、休閒、傳統、古著等風格的無視理論的自由風格。</p>
          </div>
        </div>
        <div class="Harajuku_style_container">
          <div class="Harajuku_style_single_container" v-for="item in HarajukuData" :key="item.id">
            <img :src="item.img">
            <hr>
            <p class="Harajuku_title">{{ item.location }}</p>
            <p class="name">{{ item.name }}</p>
            <p class="date">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="style-wrapper">
      <div class="Omotesando">
        <img class="locationimg" src="../assets/images/Omotesando.png">
        <div class="Harajuku_font_container">
          <div class="Harajuku_title_container"><h3>表參道</h3></div>
          <div class="Harajuku_introduction_container">
            <p>2022/08</p>
            <p>以世界上獨特的時尚而著稱，有眾多時尚眼光超強的年輕人聚居於此，創造出融合了時尚、休閒、傳統、古著等風格的無視理論的自由風格。</p>
          </div>
        </div>
        <div class="Harajuku_style_container">
          <div class="Harajuku_style_single_container" v-for="item in Omotesando" :key="item.id">
            <img :src="item.img">
            <hr>
            <p class="Harajuku_title">{{ item.location }}</p>
            <p class="name">{{ item.name }}</p>
            <p class="date">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="style-wrapper">
      <div class="Omotesando">
        <img class="locationimg" src="../assets/images/Shibuya.png">
        <div class="Harajuku_font_container">
          <div class="Harajuku_title_container"><h3>涉谷</h3></div>
          <div class="Harajuku_introduction_container">
            <p>2022/08</p>
            <p>以世界上獨特的時尚而著稱，有眾多時尚眼光超強的年輕人聚居於此，創造出融合了時尚、休閒、傳統、古著等風格的無視理論的自由風格。</p>
          </div>
        </div>
        <div class="Harajuku_style_container">
          <div class="Harajuku_style_single_container" v-for="item in Shibuya" :key="item.id">
            <img :src="item.img">
            <hr>
            <p class="Harajuku_title">{{ item.location }}</p>
            <p class="name">{{ item.name }}</p>
            <p class="date">{{ item.date }}</p>
          </div>
        </div>
      </div>
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

  data() {
    return {
      HarajukuData: [
        { img: require('../assets/images/Harajuku_streetstyle01.png'), location:"原宿", name:"Rina", date:"2022/08/22"},
        { img: require('../assets/images/Harajuku_streetstyle02.png'), location:"原宿", name:"Yuuka", date:"2022/08/22"},
        { img: require('../assets/images/Harajuku_streetstyle03.png'), location:"原宿", name:"Mariko", date:"2022/08/22"}
      ],
      Omotesando: [        
        { img: require('../assets/images/Omotesando_streetstyle01.png'), location:"表參道", name:"Yuria", date:"2022/08/22"},
        { img: require('../assets/images/Omotesando_streetstyle02.png'), location:"表參道", name:"Haru", date:"2022/08/22"},
        { img: require('../assets/images/Omotesando_streetstyle03.png'), location:"表參道", name:"Aoi", date:"2022/08/22"}
      ],
      Shibuya: [        
        { img: require('../assets/images/Shibuya_streetstyle01.png'), location:"涉谷", name:"Masaki", date:"2022/08/22"},
        { img: require('../assets/images/Shibuya_streetstyle02.png'), location:"涉谷", name:"Nao", date:"2022/08/22"},
        { img: require('../assets/images/Shibuya_streetstyle03.png'), location:"涉谷", name:"Shige Mikumo", date:"2022/08/22"}
      ],
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
}

* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
  .style-wrapper{
    display: flex;
    padding: 0 10%;
    justify-content: center;
    margin-bottom: 100px;
  }

  .bannerimg {
  width: 100%;
  }

  .product_title {
    width: auto;
    height: auto;
    padding-top: 102px;
    margin: 0 auto;
    margin-bottom: 85px;
  }

  .product_title_img {
    margin: 0 auto;
    display: block;
  }

  .product_title h3 {
    text-align: center;
  }

  .Harajuku_font_container {
    display: flex;
    align-items: center;
    padding: 3%;
  }

  .Harajuku_title_container {
    width: 50%;
  }

  .Harajuku_introduction_container {
    width: 50%;
  }

  .Harajuku_style_container {
    display: flex;
    justify-content: space-around;
  }

  .Harajuku_style_single_container {
    width: 30%;
  }

  .locationimg{
    width: 100%;
  }

</style>