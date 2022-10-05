<template>
  <div><Header></Header></div>
  <div class="container my-5 streetstyle_container">
    <div class="row">
      <div class="col-lg-4 mb-5">
        <CarouselCommodityStreetStyle></CarouselCommodityStreetStyle>
      </div>
      <div class="col-lg-8 streetstyledata">
        <table class="mt-4 profile_container">
          <tr>
            <td>姓名</td>
            <td>{{ data.name }}</td>
          </tr>
          <tr>
            <td>職業</td>
            <td>{{ data.job }}</td>
          </tr>
          <tr>
            <td>身高</td>
            <td>{{ data.height }}</td>
          </tr>
        </table>
        <table class="mt-4 itembrand_container">
          <tr>
            <td>Item/brand</td>
            <td class="d-flex flex-column" v-for="branddetail in data.itembrand" :key="branddetail.id">
              <span>{{ branddetail.brand }}</span>
            </td>
          </tr>
        </table>
        <table class="my-4 favoritebrind_container">
          <tr>
            <td>Favorite brand</td>
            <td class="d-flex flex-column" v-for="favoritebranddetail in data.favritebrand" :key="favoritebranddetail.id">
              <span>{{ favoritebranddetail.brand }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <div><Footer></Footer></div>
</template>

<script>
import CarouselCommodityStreetStyle from "../components/CarouselCommodityStreetStyle.vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import { mapState } from "vuex"


export default {
  components: {
    CarouselCommodityStreetStyle,
    Header,
    Footer
  },
  data () {
    return{
      data:{}
    }
  },
  computed: {
    ...mapState(['newStreetStyleData']),
  },
  watch: {
    newStreetStyleData: {
      immediate: true,
      handler(newVal, oldVal) {
        this.data = newVal
      }
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

ul {
  padding-left: 0;
}

table  {
  width: 100%;
}

td {
  white-space: nowrap;
  padding-right: 15px;
  min-width: 160px;
  width: auto;
}

span {
  display: block;
}

.itembrand_container td {
  padding: 3px 0px;
  vertical-align: baseline;
}

.streetstyledata {
  background-color: #D0DAF5;
}

.streetstyle_title {
  font-size: 153px;
  color: #B1BDE0;
  position: absolute;
  bottom: 15px;
  left: 40px;
}

.favoritebrind_container td {
  padding: 3px 0px;
  vertical-align: baseline;
}
</style>