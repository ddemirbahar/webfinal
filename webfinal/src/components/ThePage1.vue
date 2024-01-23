@ -0,0 +1,144 @@
<template>
  <div class="q-pa-md">
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px;
      "
    >
      <div
        style="
          color: #333333;
          font-size: 24px;
          font-family: 'Roboto', 'Arial', sans-serif;
        "
      >
        Sizin İçin Seçtiklerimiz
      </div>
      <div
        class="q-pa-md q-gutter-sm"
        style="display: flex; justify-content: flex-end"
      >
        <q-btn outline round color="grey" label="<"></q-btn>
        <q-btn outline round color="grey" label=">"></q-btn>
      </div>
    </div>

    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="grey"
      navigation
      padding
      arrows
      height="350px"
      class="bg-white"
    >
      <q-carousel-slide
        v-for="(slideContent, slideIndex) in carouselContent"
        :key="slideIndex"
        :name="slideIndex + 1"
        class="column no-wrap"
      >
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            v-for="(product, productIndex) in slideContent"
            :key="productIndex"
            outline
            color="grey"
            :style="{ width: '192.66px', height: '231.49px' }"
          >
            <img
              :src="product.image"
              :width="product.imageWidth"
              :height="product.imageHeight"
              :style="{
                width: product.imageWidth,
                height: product.imageHeight,
              }"
            />
            <p
              style="
                font-size: 12px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              {{ product.name }}
            </p>
            <div class="text-h3 q-mt-sm q-mb-xs"></div>
            <div style="margin-top: -10px; margin-bottom: 5px">
              <span
                style="
                  color: #003177;
                  font-family: Roboto, Arial, sans-serif;
                  font-weight: 700;
                  font-size: 26px;
                "
                >{{ product.price }}</span
              >
              <span
                class
                style="
                  color: #003177;
                  font-family: Roboto, Arial, sans-serif;
                  font-size: 12px;
                "
                >TL</span
              >
            </div>
          </q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const slide = ref(1);

// Carousel içeriği
const carouselContent = [
  [
    {
      name: 'PHILIPS XB9185/07 MARATHON ULTIMATE TOZ TORBASIZ SÜPÜRGE',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/TeoriV2-103934_small.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '12.499',
    },
    {
      name: 'PHILIPS XB7150/07 MARATHON DAILY TOZ TORBASIZ SÜPÜRGE',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/139636-1_small.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '7.499',
    },
    {
      name: 'PHILIPS FC9331/07 POWERPRO CITY TOZ TORBASIZ ELEKTRİKLİ SÜPÜRGE',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/v2-87848-6_small.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '4.499',
    },
    {
      name: 'PHILIPS FC9331/07 POWERPRO CITY TOZ TORBASIZ ELEKTRİKLİ SÜPÜRGE',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/arzum/thumb/115605_small.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '12.499',
    },
    {
      name: 'PHILIPS XB9155/07 MARATHON ULTIMATE TOZ TORBASIZ SÜPÜRGE',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/TeoriV2-103933_large.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '12.499',
    },
  ],
  [
    // İkinci sayfa içeriği
    {
      name: 'FAKİR FREELANDER RC7081-TOZ TORBASIZ SUPRGE-SIYAH',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/fakir/thumb/132248-1_large.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '5.999',
    },
    {
      name: 'ELECTROLUX PC91-ALRG -TOZ TORBASIZ ELEKTRİKLİ SÜPÜRGESİ',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/electrolux/thumb/118249_large.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '9.999',
    },
    {
      name: 'Philips XB2123/09 2000 Serisi Torbasız Elektrikli Süpürge',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/137502-1_large.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '4.899',
    },
    {
      name: 'PHILIPS XB9125/07 MARATHON ULTIMATE TOZ TORBASIZ SÜPÜRGE',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/103931_large.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '9.999',
    },
    {
      name: 'FANTOM Mangalcı C1012 Araç Tipi Elektrikli Süpürge',
      image:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/fantom/thumb/142557-1_large.jpg',
      imageWidth: '113.29px',
      imageHeight: '113.29px',
      price: '729',
    },
  ],
];
</script>

<style scoped>
.q-btn {
  position: relative; /* Pozisyonu ayarla */
}

.q-btn:hover {
  box-shadow: 0 0 10px gray; /* Opsiyonel: Gölgelendirme efekti ekleyebilirsiniz */
  transition: border 0.3s, box-shadow 0.3s; /* Hover efekti için geçiş süresi */
}
</style>
