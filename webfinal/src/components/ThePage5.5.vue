<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img :src="currentImage" @mousemove="handleMouseMove" />

      <q-card-section>
        <div class="text-h8">GC4567/80</div>
        <div class="text-subtitle2">PHILIPS GC4567/80 AZUR BUHARLI ÜTÜ</div>
        <div class="text-h4" style="color: #003177">{{ price }}</div>

        <q-btn
          outline
          rounded
          color="white"
          text-color="black"
          label="KARGO BEDAVA"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, computed } from 'vue';

export default defineComponent({
  setup() {
    const images: string[] = [
      'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/TeoriV2-96214_small.jpg',
      'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/TeoriV2-96214-1_small.jpg',
      'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/TeoriV2-96214-2_small.jpg',
      'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/TeoriV2-96214-3_small.jpg',
      'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/TeoriV2-96214-4_small.jpg',
    ];

    const currentIndex = ref(0);
    const price = ref('1.799 TL');

    const handleMouseMove = () => {
      currentIndex.value = (currentIndex.value + 1) % images.length;
    };

    const currentImage = computed(() => images[currentIndex.value]);

    onUnmounted(() => {
      //
    });

    return {
      handleMouseMove,
      currentImage,
      price,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
