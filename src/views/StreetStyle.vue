<template>
  <div class="streetstyle">
    <Header></Header>
      <img src="../assets/images/stylestreet_background.png" class="vh-40 vh-lg-60 bg-all bannerimg">
  </div>
  <div class="bigcontainer">
    <!--標題-->
    <div class="product_title my-5 my-xs-5">
      <h3>STREET STYLE</h3>
      <img class="product_title_img" src="../assets/images/titleimg.png">
    </div>
    <!--文章內容-->
    <div class="style-wrapper" v-for="item in streetstyledata" :key="item.id">
      <div class="Harajuku container">
        <img class="locationimg" :src="item.imgbanner">
        <div class="Harajuku_font_container row">
          <div class="Harajuku_title_container col-lg-6 col-xs-12"><h3>{{ item.title }}</h3></div>
          <div class="Harajuku_introduction_container col-lg-6 col-xs-12">
            <p>{{ item.date }}</p>
            <p>{{ item.introduction }}</p>
          </div>
        </div>
        <div class="Harajuku_style_container row">
          <div class="Harajuku_style_single_container col-lg-4 col-xs-12" v-for="detail in item.menu" :key="detail.id">
            <img :src="detail.img" @click="gostreetpage(detail)">
            <hr>
            <p class="Harajuku_title">{{ detail.categoryTitle }}</p>
            <p class="name">{{ detail.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Header,
    Footer
  },

  data() {
    return {
      streetstyledata: [
      {
        title:"原宿",
        imgbanner: require('../assets/images/streetstyle/Harajuku01/locationbanner.png'),
        date:"2022/08",
        introduction:"以世界上獨特的時尚而著稱，有眾多時尚眼光超強的年輕人聚居於此，創造出融合了時尚、休閒、傳統、古著等風格的無視理論的自由風格。",
        menu:[
          {
            id:'Harajuku01',
            img: require('../assets/images/streetstyle/Harajuku01/carousel01.png'),
            categoryTitle:'Harajuku',
            name:'Rina',
            job:'美髮設計師',
            height:'168cm',
            itembrand: [
              { brand:'Beams' },
              { brand:'NauticaJP' },
              { brand:'Urban Research' },
            ],
            favritebrand: [
              { brand:'Beams' },
              { brand:'Urban Research' },
            ]
          },
          {
            id:'Harajuku02',
            img: require('../assets/images/streetstyle/Harajuku02/carousel01.png'),
            categoryTitle:'Harajuku',
            name:'WWW',
            job:'美髮設計師',
            height:'166cm',
            itembrand: [
              { brand:'Beams' },
              { brand:'NauticaJP' },
              { brand:'Urban Research' },
            ],
            favritebrand: [
              { brand:'Beams' },
              { brand:'Urban Research' },
            ]
          },
          {
            id:'Harajuku03',
            img: require('../assets/images/streetstyle/Harajuku03/carousel01.png'),
            categoryTitle:'Harajuku',
            name:'RRR',
            job:'美髮設計師',
            height:'158cm',
            itembrand: [
              { brand:'Beams' },
              { brand:'NauticaJP' },
              { brand:'Urban Research' }
            ],
            favritebrand: [
              { brand:'Beams' },
              { brand:'Urban Research' }
            ]
          },
        ]
      },
      {
        title:"表參道",
        imgbanner: require('../assets/images/streetstyle/Omotesando01/locationbanner.png'),
        date:"2022/08",
        introduction:"以世界上獨特的時尚而著稱，有眾多時尚眼光超強的年輕人聚居於此，創造出融合了時尚、休閒、傳統、古著等風格的無視理論的自由風格。",
        menu: [
          {
            id:'Omotesando01',
            img: require('../assets/images/streetstyle/Omotesando01/carousel01.png'),
            categoryTitle:'Omotesando',
            name:'AAA',
            job:'美髮設計師',
            height:'168cm',
            itembrand: [
              { brand:"Beams" },
              { brand:"NauticaJP" },
              { brand:"Urban Research" },
            ],
            favritebrand: [
              { brand:'Beams' },
              { brand:'Urban Research' },
            ]
          },
          {
            id:'Omotesando02',
            img: require('../assets/images/streetstyle/Omotesando02/carousel01.png'),
            categoryTitle:'Omotesando',
            name:'BBB',
            job:'美髮設計師',
            height:'168cm',
            itembrand: [
              { brand:'Beams' },
              { brand:'NauticaJP' },
              { brand:'Urban Research' }
            ],
            favritebrand: [
              { brand:'Beams' },
              { brand:'Urban Research' }
            ]
          },
          {
            id:'Omotesando03',
            img: require('../assets/images/streetstyle/Omotesando03/carousel01.png'),
            categoryTitle:'Omotesando',
            name:'CCC',
            job:'美髮設計師',
            height:'168cm',
            itembrand: [
              { brand:'Beams' },
              { brand:'NauticaJP' },
              { brand:'Urban Research' }
            ],
            favritebrand: [
              { brand:'Beams' },
              { brand:'Urban Research' }
            ]
          },
        ]
      },  
      {
        title:"澀谷",
        imgbanner: require('../assets/images/streetstyle/shibuya01/locationbanner.png'),
        date:"2022/08",
        introduction:"以世界上獨特的時尚而著稱，有眾多時尚眼光超強的年輕人聚居於此，創造出融合了時尚、休閒、傳統、古著等風格的無視理論的自由風格。",
        menu: [
          {
            id:'shibuya01',
            img: require('../assets/images/streetstyle/shibuya01/carousel01.png'),
            categoryTitle:'shibuya',
            name:'DDD',
            job:'美髮設計師',
            height:'168cm',
            itembrand: [
              { brand:'Beams' },
              { brand:'NauticaJP' },
              { brand:'Urban Research' }
            ],
            favritebrand: [
              { brand:'Beams' },
              { brand:'Urban Research' }
            ]
          },
          {
            id:'shibuya02',
            img: require('../assets/images/streetstyle/shibuya02/carousel01.png'),
            categoryTitle:'shibuya',
            name:'EEE',
            job:'美髮設計師',
            height:'168cm',
            itembrand: [
              { brand:'Beams' },
              { brand:'NauticaJP' },
              { brand:'Urban Research' }
            ],
            favritebrand: [
              { brand:'Beams' },
              { brand:'Urban Research' }
            ]
          },
          {
            id:'shibuya03',
            img: require('../assets/images/streetstyle/shibuya03/carousel01.png'),
            categoryTitle:'shibuya',
            name:'FFF',
            job:'美髮設計師',
            height:'168cm',
            itembrand: [
              { brand:'Beams' },
              { brand:'NauticaJP' },
              { brand:'Urban Research' }
            ],
            favritebrand: [
              { brand:'Beams' },
              { brand:'Urban Research' }
            ]
          }
        ]
      }
    ]
    }
  },
  methods: {
    ...mapActions(['saveStateStreetStyleData']),
    gostreetpage(detail) {
      this.$router.push({ name: 'StreetStyleInnerPage' });
      this.$store.dispatch( 'saveStateStreetStyleData', detail);
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

  .Harajuku_style_container {
    display: flex;
    justify-content: space-around;
  }
  
  .locationimg{
    width: 100%;
  }

  img {
    max-width: 100%;
  }

</style>