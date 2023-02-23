<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :spaceBetween="10"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="carouselCommoditySwiperNow"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :speed="1200"
  >
    <swiper-slide  v-for="item in 5" :key="item" ><img :src="require(`../assets/images/productlist/${nowProductData.category}/${nowProductData.id}/carousel0${item}.png`)" /></swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="carouselCommoditySwiperContent"
  >
    <swiper-slide  v-for="item in 5" :key="item" ><img :src="require(`../assets/images/productlist/${nowProductData.category}/${nowProductData.id}/carousel0${item}.png`)" /></swiper-slide>
  </swiper>
</template>

<script>
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js'

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/thumbs/thumbs.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import { ref } from '@vue/reactivity'
import { mapState, mapActions } from "vuex";
import 'swiper/modules/autoplay/autoplay.min.css'



export default {
  name: 'carouselCommodity',
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const thumbsSwiper = ref(null)

    const setThumbsSwiper = (swiper) => {
      // console.log(123)
      thumbsSwiper.value = swiper
    }

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs, Autoplay]
    }
  },
  computed: {
    ...mapState(['nowProductData'])
  },
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.carouselCommoditySwiperContent {
  height: 15%;
  width: 100%;
}

.carouselCommoditySwiperNow {
  height: 85%;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px 0;
}

.carouselCommoditySwiperNow .swiper-slide {
  width: 25%;
  height: 100%;
}

.carouselCommoditySwiperNow .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product_carousel {
    width: 45%;
    height: 45%;
}
</style>>
