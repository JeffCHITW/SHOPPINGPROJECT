<template>
  <div class="shopping">
    <Header></Header>
      <img src="../assets/images/shopping-banner.png" class="bannerimg">
  </div>
  <div class="container bigcontainer">
    <div class="pt-5 mb-5 product_title">
      <h3>Product List</h3>
      <img class="product_title_img" src="../assets/images/titleimg.png">
    </div>
    <div class="row goods-bigwrapper">
      <div class="col-12 col-lg-2 col-xs-12 menu-wrapper">
        <div class="allproduct_container">
          <div class="d-none d-sm-block allproduct_title">全部商品</div>
            <ul class="d-flex flex-wrap flex-md-nowrap d-xl-block">
              <li class="category_productitem">
                <p @click="clickProductData('全部商品')">全部商品</p>
              </li>
            </ul>
          <div class="d-none d-sm-block category_title">商品分類</div>
            <ul class="d-flex justify-content-between d-xl-block">
              <li class="category_productitem">
                <p @click="clickProductData('上衣')">上衣</p>
              </li>
              <li class="category_productitem">
                <p @click="clickProductData('外套')">外套</p>
              </li>
              <li class="category_productitem">
                <p @click="clickProductData('下身')">下身</p>
              </li>
              <li class="category_productitem">
                <p @click="clickProductData('配件')">配件</p>
              </li>
            </ul>
        </div>
      </div>
      <div v-for="item in productData" :key="item.id" class="col-12 col-lg-10 col-xs-2">
        <div v-for="allitem in item.menu" :key="allitem.id">
          <div v-if="allitem.active" class="good_container">
            <div v-for="product in allitem.data" :key="product.id" class="me-3 mb-3 col-lg-3 col-xs-2">
              <img :src="product.img" class="product_list_img" @click="goBuyProduct(product)">
              <hr>
              <div class="product_nameandprice_container">
                <div class="product_name_container">
                  <p> {{ product.productName }} </p>
                  <p> NT$ {{ product.money }} </p>
                </div>
              </div>
            </div>
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
import { mapActions } from 'vuex'

export default {
  components: {
    Header,
    Footer
  },

  data () {
    return {
      productData: [
        {
          menu: [
            {
              title: '全部商品',
              active: true,
              data: [
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
                    { color:"綠色", size: "one size", shoulderlength: 49, clotheslength: 10, thickness: 7, num:0, img:'green.png', id:'01'},
                    { color:"黑色", size: "one size", shoulderlength: 49, clotheslength: 10, thickness: 7, num:0, img:'black.png', id:'02'},
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
                    { color:"灰色", size: "one size", shoulderlength: 24, clotheslength: 18.5, thickness: 17.5, num:0, img:'grey.png', id:'01'},
                    { color:"棕色", size: "one size", shoulderlength: 24, clotheslength: 18.5, thickness: 17.5, num:0, img:'green.png', id:'02'},
                  ],
                },
              ]
            },
            {
              title: '上衣',
              active: false,
              data: [
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
              ]
            },
            {
              title: '外套',
              active: false,
              data: [
                { 
                  id: 'coat01',
                  img: require('../assets/images/productlist/coat/coat01/carousel01.png'),
                  category: "pants",
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
                  category: "pants",
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
              ]
            },
            {
              title: '下身',
              active: false,
              data: [
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
                  category: "pants",
                  categoryTitle:'下身',
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
              ]
            },
            {
              title: '配件',
              active: false,
              data: [
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
                    { color:"綠色", size: "one size", shoulderlength: 49, clotheslength: 10, chestlength: 7, num:0, img:'green.png', id:'01'},
                    { color:"黑色", size: "one size", shoulderlength: 49, clotheslength: 10, chestlength: 7, num:0, img:'black.png', id:'02'},
                  ],
                },
                { 
                  id: 'Accessories02',
                  img: require('../assets/images/productlist/Accessories/Accessories02/carousel01.png'),
                  category: "Accessories",
                  categoryTitle:'配件',
                  money: 1670,
                  productName: 'EKAL 網眼套餐',
                  designtitle: "用於戶外活動的網布包裹。看似小技巧，實則威力無窮。精選輕質網眼材質，非常適合夏天。內層面料設計，適合日常使用。外帶掛環設計，可調節上部金屬鉤環，外形增加了額外的額外活動元素。也有同系列的大件送貨包。",
                  productcolorsize: [
                    { color:"灰色", size: "one size", shoulderlength: 24, clotheslength: 18.5, chestlength: 17.5, num:0, img:'grey.png', id:'01'},
                    { color:"棕色", size: "one size", shoulderlength: 24, clotheslength: 18.5, chestlength: 17.5, num:0, img:'green.png', id:'02'},
                  ],
                },
              ]
            }
          ]
        },
      ]
    }
  },

  methods: {
    ...mapActions(['saveProductData']),
    clickProductData (title) {
      this.productData.forEach((item, index) => {
        item.menu.forEach((goods, index) => {
          if (goods.title === title) {
            goods.active = true
          } else {
            goods.active = false
          }
          // console.log(goods)
        })
      })
    },
    goBuyProduct (product) {
      this.$router.push({ name: 'BuyingItemPage' });
      // console.log(product);
      this.$store.dispatch("saveProductData", product);
      // console.log(this.$store);
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

  .allproduct_container {
    margin-bottom: 35px;
  }

  .allproduct_title {
    font-size: 30px;
  }

  .category_title {
    font-size: 30px;
  }

  .product_list_img {
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

  .bannerimg {
    width: 100%;
  }

  .goods-bigwrapper{
    display: flex;
    padding: 0 10%;
  }

  .goods_content {
    display: block;
    width: 100%;
  }

  .good_container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .product_nameandprice_container {
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
  }

  .product_nameandprice_container a{
    display: block;
    border: 1px solid #0047FF;
    width: 38px;
    height: 38px;
    border-radius: 100%;
  }

  .product_name_container {
    width: 85%;
  }

  .product_price_container {
    width: 15%;
  }

  input{
    width: 10%;
    text-align: center;
  }

</style>
