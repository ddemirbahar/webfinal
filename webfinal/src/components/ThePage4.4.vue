<template>
  <q-page>
    <div class="q-pa-md">
      <div class="card-container">
        <q-card v-for="card in cards" :key="card.id" class="my-card">
          <q-img :src="card.imageUrl" class="card-image">
            <!-- Her kart için ayrı bir text container eklendi -->
            <div class="text-container">
              <div class="text-subtitle2 text-center">
                {{ card.title }}
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      cards: [
        {
          id: 1,
          imageUrl:
            'https://cdn.vatanbilgisayar.com/Upload/general/frontend/home/oem-hazir-sistemler.jpg',
          title: 'OEM Hazır Sistemler',
        },
        {
          id: 2,
          imageUrl:
            'https://cdn.vatanbilgisayar.com/Upload/general/frontend/home/robot.png?v=sdadasasdasd',
          title: 'Temizlik İşi Robotta',
        },
        {
          id: 3,
          imageUrl:
            'https://cdn.vatanbilgisayar.com/Upload/general/frontend/home/mac-keyfi.png?v=sdadasasdasd',
          title: 'Evde Stadyum Keyfi',
        },
        {
          id: 4,
          imageUrl:
            'https://cdn.vatanbilgisayar.com/Upload/general/frontend/home/airfry.jpg?v=sdadasasdasd',
          title: 'Airfryer Ürünleri',
        },
      ],
    };
  },
});
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* İstediğiniz boşluk değerini ayarlayabilirsiniz */
}

.my-card {
  width: 270px; /* Kartların genişliğini ayarlayabilirsiniz */
  height: 360px;
  position: relative;
}

.card-image {
  width: 100%;
  height: 360px;
}

.text-container {
  position: absolute;
  margin-bottom: 10px;
  bottom: 10px;
  top: 10px;
  left: 10px;
  right: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  background-image: inherit;
  display: flex;
  align-items: flex-end;
  border: 1px solid white;
  border-radius: 10px;
  height: 340px;
}
</style>
