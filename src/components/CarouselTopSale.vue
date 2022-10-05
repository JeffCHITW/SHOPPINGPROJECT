<template>
  <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="carouselTopSaleSwiper"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :speed="1200"
  >
    <swiper-slide
      v-for="(item, index) in carouselTopSaleData"
      :key="`swiper${index}`"
    >
      <div class="swiper_row">
        <div class="img_swiperRow">
          <div class="div_mark">Hot Issue</div>
          <img :src="item.img" @click="goBuyProduct(item)">
        </div>
        <hr>
        <p>{{ item.productName }}</p>
        <p>NT${{ item.money }}<span class="oldMoney">NT${{ item.oldMoney }}</span></p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js'
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import { reactive } from '@vue/reactivity'
import { mapActions, mapState } from 'vuex'
import 'swiper/modules/autoplay/autoplay.min.css'

export default {
  name: 'CarouselTopSale',
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const carouselTopSaleData = reactive([
    { 
      id: 'clothes01',
      img: require('../assets/images/productlist/clothes/clothes01/carousel01.png'),
      category: "clothes",
      categoryTitle:'上衣',
      money: 1800,
      productName: 'PENNEYSxDOORS THE FOX 長袖T卹',
      producttitle: "以柔和溫暖的質地為特徵",
      designtitle: "這款漸變色格紋夾克是 NOMA td 的主打單品。它採用經典的格紋圖案。明亮的色彩使其成為您的裝扮的完美配飾。",
      materialtitle: "由柔軟的拉絨棉材料製成。面料的厚度細膩，因此可以在廣泛的季節使用。",
      productcolorsize: [
        { color:"黑色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'black.png', id:'01'},
        { color:"黑色", size: "M", shoulderlength: 123, clotheslength: 130, chestlength: 120, num:0, img:'black.png', id:'02'},
        { color:"黑色", size: "L", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'black.png', id:'03'},
        { color:"白色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'white.png', id:'04'},
        { color:"白色", size: "M", shoulderlength: 123, clotheslength: 130, chestlength: 120, num:0, img:'white.png', id:'05'},
        { color:"白色", size: "L", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'white.png', id:'06'},
      ],
    },
    { 
      id: 'clothes02', 
      img: require('../assets/images/productlist/clothes/clothes02/carousel01.png'),
      category: "clothes",
      categoryTitle:'上衣',
      money: 5200,
      productName: 'Ciurts 印花短袖T卹',
      colorData: [ "黑色", "白色" ],
      producttitle: "以柔和溫暖的質地為特徵",
      designtitle: "這款漸變色格紋夾克是 NOMA td 的主打單品。它採用經典的格紋圖案。明亮的色彩使其成為您的裝扮的完美配飾。",
      materialtitle: "由柔軟的拉絨棉材料製成。面料的厚度細膩，因此可以在廣泛的季節使用。",
      productcolorsize: [
        { color:"橘色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'orange.png', id:'01'},
        { color:"橘色", size: "M", shoulderlength: 123, clotheslength: 130, chestlength: 120, num:0, img:'orange.png', id:'02'},
        { color:"橘色", size: "L", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'orange.png', id:'03'},
        { color:"紫色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'purple.png', id:'04'},
        { color:"紫色", size: "M", shoulderlength: 123, clotheslength: 130, chestlength: 120, num:0, img:'purple.png', id:'05'},
        { color:"紫色", size: "L", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'purple.png', id:'06'},
      ],
    },
    { 
      id: 'coat01',
      img: require('../assets/images/productlist/coat/coat01/carousel01.png'),
      category: "coat",
      categoryTitle:'外套',
      money: 3800,
      productName: '男裝多口袋金釦外套',
      producttitle: "以柔和溫暖的質地為特徵",
      designtitle: "這款漸變色格紋夾克是 NOMA td 的主打單品。它採用經典的格紋圖案。明亮的色彩使其成為您的裝扮的完美配飾。",
      materialtitle: "由柔軟的拉絨棉材料製成。面料的厚度細膩，因此可以在廣泛的季節使用。",
      productcolorsize: [
        { color:"藍色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'blue.png', id:'01'},
        { color:"藍色", size: "L", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'blue.png', id:'02'},
        { color:"綠色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'green.png', id:'03'},
        { color:"綠色", size: "M", shoulderlength: 123, clotheslength: 130, chestlength: 120, num:0, img:'green.png', id:'04'},
        { color:"綠色", size: "L", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'green.png', id:'05'},
      ],
    },
    {
      id: 'coat02',
      img: require('../assets/images/productlist/coat/coat02/carousel01.png'),
      category: "coat",
      categoryTitle:'外套',
      money: 1490,
      productName: '泡綿西裝外套',
      producttitle: "以柔和溫暖的質地為特徵",
      designtitle: "這款漸變色格紋夾克是 NOMA td 的主打單品。它採用經典的格紋圖案。明亮的色彩使其成為您的裝扮的完美配飾。",
      materialtitle: "由柔軟的拉絨棉材料製成。面料的厚度細膩，因此可以在廣泛的季節使用。",
      productcolorsize: [
        { color:"棕色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'brown.png', id:'01'},
        { color:"棕色", size: "L", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'brown.png', id:'02'},
        { color:"綠色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'green.png', id:'03'},
        { color:"綠色", size: "M", shoulderlength: 123, clotheslength: 130, chestlength: 120, num:0, img:'green.png', id:'04'},
      ],
    },
    { 
      id: 'pants01',
      img: require('../assets/images/productlist/pants/pants01/carousel01.png'),
      category: "pants",
      categoryTitle:'下身',
      money: 1620,
      productName: '男裝寬鬆斜紋褲',
      producttitle: "以柔和溫暖的質地為特徵",
      designtitle: "這款漸變色格紋夾克是 NOMA td 的主打單品。它採用經典的格紋圖案。明亮的色彩使其成為您的裝扮的完美配飾。",
      materialtitle: "由柔軟的拉絨棉材料製成。面料的厚度細膩，因此可以在廣泛的季節使用。",
      productcolorsize: [
        { color:"黑色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'black.png', id:'01'},
        { color:"黑色", size: "L", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'black.png', id:'02'},
        { color:"白色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'white.png', id:'03'},
        { color:"白色", size: "M", shoulderlength: 123, clotheslength: 130, chestlength: 120, num:0, img:'white.png', id:'04'},
      ],
    },
    { 
      id: 'pants02',
      img: require('../assets/images/productlist/pants/pants02/carousel01.png'),
      categoryTitle:'下身',
      category: "pants",
      money: 2080,
      productName: '男裝寬鬆格紋短褲',
      producttitle: "以柔和溫暖的質地為特徵",
      designtitle: "這款漸變色格紋夾克是 NOMA td 的主打單品。它採用經典的格紋圖案。明亮的色彩使其成為您的裝扮的完美配飾。",
      materialtitle: "由柔軟的拉絨棉材料製成。面料的厚度細膩，因此可以在廣泛的季節使用。",
      productcolorsize: [
        { color:"黑色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'black.png', id:'01'},
        { color:"黑色", size: "M", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'black.png', id:'02'},
        { color:"黑色", size: "L", shoulderlength: 123, clotheslength: 140, chestlength: 130, num:0, img:'black.png', id:'03'},
        { color:"藍色", size: "S", shoulderlength: 123, clotheslength: 120, chestlength: 100, num:0, img:'blue.png', id:'04'},
        { color:"藍色", size: "M", shoulderlength: 123, clotheslength: 130, chestlength: 120, num:0, img:'blue.png', id:'05'},
        { color:"藍色", size: "L", shoulderlength: 123, clotheslength: 130, chestlength: 120, num:0, img:'blue.png', id:'06'},
      ],
    },
    { 
      id: 'Accessories01',
      img: require('../assets/images/productlist/Accessories/Accessories01/carousel01.png'),
      category: "Accessories",
      categoryTitle:'配件',
      money: 1190,
      productName: 'URD 刺繡棒球帽',
      designtitle: "人氣的URD LOGO裝飾，基本百搭的6分割棒球帽。日常穿搭、戶外活動都好用。",
      materialtitle: "※商品照片可能因打光、電腦等顯示器、觀看環境不同，與實品顏色有所差異，請以實際顏色為準。",
      productcolorsize: [
        { color:"綠色", size: "one size", length: 49, width: 10, thickness: 7, num:0, img:'green.png', id:'01'},
        { color:"黑色", size: "one size", length: 49, width: 10, thickness: 7, num:0, img:'black.png', id:'02'},
      ],
    },
    { 
      id: 'Accessories02',
      img: require('../assets/images/productlist/Accessories/Accessories02/carousel01.png'),
      category: "Accessories",
      categoryTitle:'配件',
      money: 1190,
      productName: 'EKAL 網眼套餐',
      designtitle: "用於戶外活動的網布包裹。看似小技巧，實則威力無窮。精選輕質網眼材質，非常適合夏天。內層面料設計，適合日常使用。外帶掛環設計，可調節上部金屬鉤環，外形增加了額外的額外活動元素。也有同系列的大件送貨包。",
      productcolorsize: [
        { color:"灰色", size: "one size", length: 24, width: 18.5, thickness: 17.5, num:0, img:'grey.png', id:'01'},
        { color:"棕色", size: "one size", length: 24, width: 18.5, thickness: 17.5, num:0, img:'green.png', id:'02'},
      ],
    },
  ])

    return {
      modules: [Pagination, Autoplay],
      carouselTopSaleData
    }
  },
  methods: {
    ...mapActions(['saveProductData']),
    goBuyProduct (item) {
      this.$router.push({ name: 'BuyingItemPage' });
      // console.log(product);
      this.$store.dispatch("saveProductData", item);
      // console.log(this.$store);
    },
  },
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  margin-bottom: 40px;
  text-align: center;
  font-size: 18px;

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

.swiper_row {
  padding: 10px;
  font-size: 14px;
}

.swiper_row p {
  text-align: left;
}

.oldMoney {
  color: darkgrey;
  text-decoration-line: line-through;
  margin-left: 10px;
}

.img_swiperRow {
  position: relative;
}

.div_mark {
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: black;
  color: white;
  padding: 3px 6px;
  border-radius: 2px;
}
</style>
