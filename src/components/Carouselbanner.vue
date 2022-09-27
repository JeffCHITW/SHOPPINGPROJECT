<template>
  <div class="carousel">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide><img src="../assets/images/3291_pc.png"></swiper-slide>
      <swiper-slide><img src="../assets/images/3776_pc.png"></swiper-slide>
      <swiper-slide><img src="../assets/images/3800_pc.png"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js'

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }
}
</script>

<style scoped>
img{
  max-width: 100%;
}
</style>
