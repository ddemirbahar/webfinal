zz
<template>
  <q-page
    class="q-pa-md"
    :style="{ width: dynamicWidth + 'px', height: dynamicHeight + 'px' }"
  >
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      navigation
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/teknoloji-icin-haydi-vatana-4-12-23-web-rev3.jpg"
      >
      </q-carousel-slide>
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/iphone12-ilan-5-12-23-web.jpg"
      />

      <q-carousel-slide
        :name="3"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/acer-aspire5-ilan-5-12-23-web-rev.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/lg-tv-ilan-5-12-23-web-rev.jpg"
      />
      <q-carousel-slide
        :name="5"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/philips-supurge-5-12-23-web.jpg"
      />
      <q-carousel-slide
        :name="6"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/philips-dunya-turk-kahvesi-gunu-web.jpg"
        style="height: 200px; width: auto"
      />
      <q-carousel-slide
        :name="7"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/vergisiz-urunler-5-12-23-web.jpg"
      />
      <q-carousel-slide
        :name="8"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/acer-reklam-amd-6-12-23-web.jpg"
      />
      <q-carousel-slide
        :name="9"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/apple-watch-4taksit-web-rev.jpg"
      />
      <q-carousel-slide
        :name="10"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/apple-macbook-16-11-23-web.jpg"
        style="height: auto; width: auto"
      />
      <q-carousel-slide
        :name="11"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/009/dell-g15-5530-web.jpg"
      />
      <q-carousel-slide
        :name="12"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/iPhone-15-degistokus-web-rev.jpg"
      />
      <q-carousel-slide
        :name="13"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0010/apple-airpods-6-3-23-kategori-web-rev.jpg"
      />
      <q-carousel-slide
        :name="14"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/tcl-4-12-23-ilan-rev-web.jpg"
      />
      <q-carousel-slide
        :name="15"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/huawei-intel-haftanin-urunu-1-12-23-web-rev1.jpg"
      />
      <q-carousel-slide
        :name="16"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/lg-opet-kampanya-banner-30-11-23-web.jpg"
      />
      <q-carousel-slide
        :name="17"
        img-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/philips-6-12-23-web.jpg"
      />
    </q-carousel>
    <div class="thumbnails">
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/teknoloji-icin-haydi-vatana-4-12-23-thumb.jpg"
        alt="Thumbnail 1"
        @mouseenter="goToSlide(1)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/iphone12-ilan-5-12-23-thumb.jpg"
        alt="Thumbnail 2"
        @mouseenter="goToSlide(2)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/acer-aspire5-ilan-5-12-23-thumb.jpg"
        alt="Thumbnail 3"
        @mouseenter="goToSlide(3)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/lg-tv-ilan-5-12-23-thumb.jpg"
        alt="Thumbnail 4"
        @mouseenter="goToSlide(4)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/philips-supurge-5-12-23-thumb.jpg"
        alt="Thumbnail 5"
        @mouseenter="goToSlide(5)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/philips-dunya-turk-kahvesi-gunu-thumb.jpg"
        alt="Thumbnail 6"
        @mouseenter="goToSlide(6)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/vergisiz-urunler-5-12-23-thumb.jpg"
        alt="Thumbnail 7"
        @mouseenter="goToSlide(7)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/acer-reklam-amd-6-12-23-thumb.jpg"
        alt="Thumbnail 8"
        @mouseenter="goToSlide(8)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/apple-watch-4taksit-thumb.jpg"
        alt="Thumbnail 9"
        @mouseenter="goToSlide(9)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/macbook-thumb.jpg"
        alt="Thumbnail 10"
        @mouseenter="goToSlide(10)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/dell-g15-thumb.jpg"
        alt="Thumbnail 11"
        @mouseenter="goToSlide(11)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/iPhone-15-degistokus-thumb-rev.jpg"
        alt="Thumbnail 12"
        @mouseenter="goToSlide(12)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/airpods-thumb.jpg"
        alt="Thumbnail 13"
        @mouseenter="goToSlide(13)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/tcl-thumb.jpg"
        alt="Thumbnail 14"
        @mouseenter="goToSlide(14)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/huawei-intel-haftanin-urunu-1-12-23-thumb.jpg"
        alt="Thumbnail 15"
        @mouseenter="goToSlide(15)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/lg-thumb.jpg"
        alt="Thumbnail 16"
        @mouseenter="goToSlide(16)"
        class="thumbnail"
      />
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0012/philips-thumb.jpg"
        alt="Thumbnail 17"
        @mouseenter="goToSlide(17)"
        class="thumbnail"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const slide = ref<number>(1);
    const autoplay = ref<boolean>(true);
    const dynamicWidth = ref<number>(1450);
    const dynamicHeight = ref<number>(500);

    const onMouseEnter = () => {
      autoplay.value = false;
    };
    const onMouseLeave = () => {
      autoplay.value = true;
    };
    const goToSlide = (index: number) => {
      slide.value = index;
    };

    return {
      slide,
      autoplay,
      dynamicHeight,
      dynamicWidth,
      onMouseEnter,
      onMouseLeave,
      goToSlide,
    };
  },
};
</script>
<style scoped>
.thumbnails {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
}

.thumbnail {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
