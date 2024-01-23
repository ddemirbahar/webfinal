<template>
  <div class="q-pa-md q-gutter-sm" style="text-align: center">
    <div id="my-breadcrumbs">
      <q-breadcrumbs-el
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        :label="breadcrumb.label"
        :style="{ marginLeft: breadcrumb.marginLeft, color: breadcrumb.color }"
      ></q-breadcrumbs-el>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: -10px;
        "
      >
        <q-img
          class="rounded-borders"
          src="https://cdn.vatanbilgisayar.com/UPLOAD/vatan40.png"
          style="width: 170.45px; height: 75px; object-fit: cover; float: left"
        />

        <!-- Arama Butonu -->
        <div style="flex: 1; margin-bottom: 10px">
          <q-btn
            align="around"
            rounded
            class="btn-fixed-width"
            style="
              width: 400px;
              height: 40px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              text-align: left;
              padding: 0 10px;
              text-transform: lowercase;
              margin-left: 150px;
            "
            color="grey-4"
            label=""
          >
            <q-input
              v-model="searchQuery"
              dense
              placeholder="Aramak istediğiniz ürünü buraya yazın"
              outlined
              rounded
              color="grey-4"
              @blur="toggleInput"
              style="flex: 1; margin-right: 10px; width: 400px; height: 40px; no-border;margin-left:10px;"
            />
          </q-btn>
        </div>

        <!-- Giriş Yap Genişletilebilir Öğe -->
        <div
          class="q-pa-md"
          style="max-width: 250px; margin-right: 30px; margin-bottom: 10px"
        >
          <q-expansion-item
            style="
              max-width: 250px;
              color: white;
              background-color: #003177;
              border-radius: 30px;
            "
            icon="perm_identity"
            label="GİRİŞ YAP"
          >
            <q-card>
              <q-card-section>
                <q-list bordered separator style="background-color: #003177">
                  <q-item clickable v-ripple>
                    <q-item-section style="color: white"
                      >Giriş Yap</q-item-section
                    >
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label style="color: white">Üye Ol</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>

        <!-- Sepetim Genişletilebilir Öğe -->
        <div class="q-pa-md" style="max-width: 300px; margin-bottom: 10px">
          <q-expansion-item
            v-model="isExpanded"
            style="
              max-width: 250px;
              color: white;
              background-color: #003177;
              border-radius: 30px;
            "
            icon="shop"
            label="SEPETİM"
          >
            <q-badge color="blue" floating>0</q-badge>
            <div
              class="q-pa-md"
              style="max-width: 500px; background-color: white"
            >
              <q-list bordered separator>
                <q-item clickable v-ripple style="background-color: blue">
                  <q-item-section style="color: white"
                    >Sepetinizde Ürün Bulunmamaktadır</q-item-section
                  >
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  style="background-color: white; max-width: 600px"
                >
                  <q-item-section>
                    <q-item-label
                      style="
                        color: #000;
                        font-size: 14px;
                        font-family: 'Roboto', 'Arial', sans-serif;
                        color: #003177;
                      "
                      >TOPLAM: 0.0</q-item-label
                    >
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple style="background-color: white">
                  <q-item-section>
                    <q-btn
                      color="blue-10"
                      label="ALIŞVERİŞİ TAMAMLA"
                      rounded
                    ></q-btn>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-expansion-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const breadcrumbs = [
  { label: "Web'e Özel", marginLeft: '0px', color: 'blue' },
  { label: 'Yeni', marginLeft: '50px', color: 'grey' },
  { label: 'Hazır Sistem', marginLeft: '50px', color: 'grey' },
  { label: 'PC Toplama', marginLeft: '50px', color: 'grey' },
  { label: 'Sipariş Takibi', marginLeft: '50px', color: 'grey' },
  { label: 'İade', marginLeft: '50px', color: 'grey' },
  { label: 'Mağazalar', marginLeft: '50px', color: 'grey' },
  { label: 'İşe Alım', marginLeft: '50px', color: 'grey' },
  { label: 'Bize Ulaşın', marginLeft: '50px', color: 'grey' },
  { label: 'Gaming', marginLeft: '50px', color: 'grey' },
];
import { ref } from 'vue';

const showInput = ref(false);
const searchQuery = ref<string>('');

const toggleInput = () => {
  showInput.value = !showInput.value;
};
const isExpanded = ref(false);
</script>

<style>
#my-breadcrumbs {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
}
</style>
