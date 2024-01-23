@ -0,0 +1,75 @@
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner rounded :class="$q.dark.isActive ? 'white' : 'white'">
      <template v-slot:avatar>
        <div
          class="q-gutter-md"
          style="display: flex; flex-wrap: nowrap; overflow-x: auto"
        >
          <q-card
            v-for="(card, index) in creditCards"
            :key="index"
            class="my-card"
            :style="{
              width: card.width,
              height: card.height,
              marginLeft: index !== 0 ? '3px' : '0px',
              border: '0.5px solid grey',
              boxSizing: 'border-box',
            }"
          >
            <div
              style="
                margin-top: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 23px;
              "
            >
              <img
                :src="card.imageUrl"
                style="max-width: 74px; min-height: 23px"
              />
            </div>
            <q-card-section>
              <div class="text-h20 text-center" style="font-size: 12px">
                {{ card.installmentText }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-banner>
  </div>

  <div
    class="q-pa-md q-gutter-sm"
    style="border-top: 1px solid grey; border-bottom: 1px solid grey"
  >
    <q-banner rounded class="white text-grey-6 no-border">
      <a style="margin-left: 10px">Mağazalar: </a>
      <a style="margin-left: 200px">Müşteri Hattı: </a>
      <a style="margin-left: 200px"> Sosyal Medya: </a>
      <a style="margin-left: 200px">İndirmek İçin: </a>
      <br />
      <a style="margin-left: 5px; color: black; font-size: 16px"
        ><q-icon name="place" />Mağaza Bul</a
      >

      <a style="margin-left: 160px; color: black; font-size: 16px">
        <q-icon name="phone" />0850 222 5656
      </a>
      <a style="margin-left: 200px; color: black; font-size: 16px">
        <q-icon name="facebook" /><q-icon name="tv" /> <q-icon name="mail"
      /></a>
      <a style="margin-left: 90px">
        <img
          src="https://www.vatanbilgisayar.com/upload/general/taksit-footer/app-store.png"
          style="width: 106px; height: 32px; margin-right: 5px"
        />
        <img
          src="https://www.vatanbilgisayar.com/upload/general/taksit-footer/play-store.png"
          style="width: 106px; height: 32px; margin-right: 3px"
        />
        <img
          src="https://www.vatanbilgisayar.com/upload/general/frontend/huawei-appgallery.png"
          style="width: 106px; height: 32px; margin-right: 3px"
        />
      </a>
    </q-banner>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      creditCards: [
        {
          imageUrl: 'https://cdn.vatanbilgisayar.com/UPLOAD/BANKA/1/1.png',
          installmentText: '3 Taksit',
          width: '121.45px',
          height: '70px',
        },
        {
          imageUrl: 'https://cdn.vatanbilgisayar.com/UPLOAD/BANKA/8/8.png',
          installmentText: '9 Taksit',
          width: '121.45px',
          height: '70px',
        },
        {
          imageUrl:
            'https://cdn.vatanbilgisayar.com/UPLOAD/GENERAL/taksit-footer/maximum-logo.png',
          installmentText: '3 Taksit',
          width: '121.45px',
          height: '70px',
        },
        {
          imageUrl: 'https://cdn.vatanbilgisayar.com/UPLOAD/BANKA/2/2.png',
          installmentText: '9 Taksit',
          width: '121.45px',
          height: '70px',
        },
        {
          imageUrl:
            'https://cdn.vatanbilgisayar.com/UPLOAD/GENERAL/taksit-footer/bankkart-logo.png',
          installmentText: '9+3 Taksit',
          width: '121.45px',
          height: '70px',
        },
        {
          imageUrl: 'https://cdn.vatanbilgisayar.com/UPLOAD/BANKA/4/4.png',
          installmentText: '3 Taksit',
          width: '121.45px',
          height: '70px',
        },
        {
          imageUrl:
            'https://cdn.vatanbilgisayar.com/UPLOAD/GENERAL/taksit-footer/fibabanka-logo-black.png',
          installmentText: 'Kredisi',
          width: '121.45px',
          height: '70px',
        },
        {
          imageUrl:
            'https://cdn.vatanbilgisayar.com/UPLOAD/GENERAL/taksit-footer/yapi_kredi_bankasi-min.png',
          installmentText: 'Kredisi',
          width: '121.45px',
          height: '70px',
        },
        {
          imageUrl:
            'https://cdn.vatanbilgisayar.com/UPLOAD/GENERAL/taksit-footer/tum-kartlar-logo.png',
          installmentText: 'Tek Çekim',
          width: '121.45px',
          height: '70px',
        },
      ] as {
        imageUrl: string;
        installmentText: string;
        width: string;
        height: string;
      }[],
    };
  },
});
</script>

<style lang="scss" scoped>
.q-gutter-md {
  overflow: hidden;
}
</style>
