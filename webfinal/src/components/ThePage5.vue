<template>
  <div>
    <div
      style="
        color: #333333;
        font-size: 24px;
        font-family: 'Roboto', 'Arial', sans-serif;
        margin-left: 20px;
        margin-top: 20px;
      "
    >
      Kategoriler
    </div>
    <br />
    <div
      class="q-pa-md row items-start q-gutter-md"
      style="display: flex; flex-wrap: nowrap; overflow-x: auto"
    >
      <q-btn
        v-for="(category, index) in categories"
        :key="index"
        color="white"
        :style="{ width: category.width, height: category.height }"
      >
        <div style="display: flex; flex-direction: column; align-items: center">
          <div :style="{ marginLeft: category.style?.marginLeft }">
            <q-icon
              :name="category.icon"
              style="font-size: 40px; color: #003177"
            />
          </div>
          <div
            class="text-subtitle2 text-center"
            :style="{ color: '#003177', textTransform: 'capitalize' }"
          >
            {{ category.label }}
          </div>
        </div>
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      categories: [
        {
          icon: 'smartphone',
          label: 'telefon',
          width: '139.55px',
          height: '85.16px',
        },
        {
          icon: 'laptop',
          label: 'Notebook',
          width: '139.55px',
          height: '85.16px',
        },
        {
          icon: 'tv',
          label: 'Televizyon',
          width: '139.55px',
          height: '85.16px',
        },
        {
          icon: 'watch',
          label: 'Akıllı Saat',
          width: '139.55px',
          height: '85.16px',
        },
        {
          icon: 'print',
          label: 'Yazıcı',
          width: '139.55px',
          height: '85.16px',
          style: { marginLeft: '20px' },
        },
        {
          icon: 'gamepad',
          label: 'Oyun Konsolları',
          width: '139.55px',
          height: '85.16px',
        },
        {
          icon: 'iron',
          label: 'Ev Ürünleri',
          width: '139.55px',
          height: '85.16px',
        },
        {
          icon: 'hair',
          label: 'Kişisel Bakım',
          width: '139.55px',
          height: '85.16px',
        },
        {
          icon: 'headphones',
          label: 'Aksesuar',
          width: '139.55px',
          height: '85.16px',
        },
      ] as {
        icon: string;
        label: string;
        width: string;
        height: string;
        style?: { marginLeft: string };
      }[],
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 270px;
}
</style>
