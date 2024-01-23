<template>
  <q-page>
    <div class="icon-container" style="background-color: #003177">
      <div v-for="(icon, index) in icons" :key="index" class="icon-wrapper">
        <q-icon
          :name="icon.faName"
          size="6em"
          class="text-white"
          @mouseenter="showText = index"
          @mouseleave="showText = -1"
        />
        <div
          v-if="showText === index"
          class="tooltip"
          @mouseenter="showText = -1"
          @mouseleave="showText = index"
        >
          {{ icon.tooltip }}
        </div>
        <div class="icon-caption" style="color: aliceblue">
          {{ icon.caption }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      icons: [
        {
          faName: 'fa-solid fa-house-circle-check',
          tooltip:
            '500 tl ve üzeri tüm alışverişlerinizde kargo bedava. Kargo seçenekleri: Yurtiçi Kargo, Horoz Lojistik, Kolay Gelsin',
          caption: 'KARGO BEDAVA',
        },
        {
          faName: 'fa-solid fa-truck',
          tooltip:
            'Yurt içi kargo ile verilen siparişler ortalama 3-4 iş günü içinde, Horoz lojistik ile verilen siparişler ortalama 6 iş günü içerisinde tarafınıza teslim edilir.',
          caption: 'STANDART TESLİMAT',
        },
        {
          faName: 'fa-solid fa-truck-fast',
          tooltip:
            'Kolay Gelsin kargo ile verilen siparişler ortalama 2 iş gününde tarafınıza teslim edilir.',
          caption: 'HIZLI TESLİMAT',
        },
        {
          faName: 'fa-solid fa-store',
          tooltip:
            'Siparişlerinizi dilediğiniz mağazamızdan hemen teslim alabilirsiniz.',
          caption: 'MAĞAZADAN TESLİM',
        },
        {
          faName: 'fa-solid fa-calendar-days',
          tooltip:
            '14 gün içerisinde cayma hakkı. Mağazadan veya kargo ile iade/değişim imkanı.',
          caption: 'KOLAY İADE',
        },
        {
          faName: 'fa-solid fa-headset',
          tooltip:
            '0850 222 56 56 ‘yı arayarak, "Telefonla Sipariş" bölümümüzden sipariş verebilirsiniz.',
          caption: 'TELEFONLA SİPARİŞ',
        },
        { faName: '', tooltip: 'Star Icon' },
      ],
      showText: -1,
    };
  },
});
</script>

<style scoped>
.icon-container {
  display: flex;
}

.icon-wrapper {
  margin-right: 50px;
  margin-top: 50px;
  margin-inline-start: 50px;
  margin-bottom: 50px;
}

.tooltip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  display: inline-block;
}
.icon-caption {
  text-align: center;
  margin-top: 5px;
}
</style>
