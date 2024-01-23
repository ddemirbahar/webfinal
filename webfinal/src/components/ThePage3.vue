<template>
  <div align="center">
    <div class="q-pa-md">
      <div
        style="display: flex; justify-content: space-between; align-items: center; margin right: ;: 50%0px; background-color: #f5f5f5; padding: 20px;"
      >
        <div
          style="
            color: grey-2;
            font-size: 24px;
            font-family: 'Roboto', 'Arial', sans-serif;
            margin-left: 50px;
          "
        >
          Web'e Özel Sınırlı Stok
        </div>
        <q-btn outline rounded color="black" label="TÜMÜNÜ GÖR "></q-btn>
      </div>

      <q-carousel
        v-model="slide"
        :transition-prev="slideRight"
        :transition-next="slideLeft"
        swipeable
        animated
        control-color="grey"
        navigation
        padding
        arrows
        height="400px"
        class="bg-grey-2"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="q-pa-md row items-start q-gutter-md">
            <!-- İlk Ürün Kartı -->
            <q-card
              class="my-card"
              flat
              bordered
              style="max-width: 450px; width: 100%; margin-left: 80px"
            >
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/TeoriV2-103934_large.jpg"
                />
                <q-card-section>
                  <div
                    class="text-overline"
                    style="
                      color: #e44b55;
                      font-family: 'Roboto', 'Arial', sans-serif;
                      font-weight: 700;
                      margin-left: 40px;
                    "
                  >
                    Web'e Özel
                  </div>
                  <q-btn
                    id="flashingBtn"
                    color="red"
                    style="font-size: 12px; text-align: center"
                    ><span id="flashingLabel">BU FİYATA SON 9 ÜRÜN</span></q-btn
                  >
                  <div
                    class="text-caption text-grey"
                    style="margin-top: 12px; font-size: 16px"
                  >
                    XB9185/07 / 103934
                  </div>
                  <div
                    class="text-caption text-black"
                    style="font-size: 15px; margin-top: 8px"
                  >
                    PHILIPS XB9185/07 MARATHON ULTIMATE TOZ TORBASIZ SÜPÜRGE
                  </div>
                  <div class="text-h3 q-mt-sm q-mb-xs">
                    <span
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-weight: 700;
                      "
                      >12.499</span
                    >
                    <span
                      class="q-mt-sm q-mb-xs"
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-size: 12px;
                      "
                      >TL</span
                    >
                  </div>
                  <q-badge
                    color="primary"
                    label="KARGO BEDAVA"
                    style="
                      font-size: 12px;
                      font-weight: 780;
                      text-align: center;
                      margin-left: 40px;
                    "
                  ></q-badge>
                </q-card-section>
              </q-card-section>
            </q-card>

            <!-- İkinci Ürün Kartı -->
            <q-card
              class="my-card"
              flat
              bordered
              style="max-width: 450px; width: 100%"
            >
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/tcl/thumb/140122-1_small.jpg"
                  style="
                    width: 175.95px;
                    height: 175.95px;
                    margin-left: 30px;
                    margin-top: 50px;
                  "
                />
                <q-card-section>
                  <div
                    class="text-overline"
                    style="
                      color: #e44b55;
                      font-family: 'Roboto', 'Arial', sans-serif;
                      font-weight: 700;
                      margin-left: 40px;
                    "
                  >
                    Web'e Özel
                  </div>
                  <q-btn
                    id="flashingBtn"
                    color="red"
                    style="font-size: 12px; text-align: center"
                    ><span id="flashingLabel">BU FİYATA SON 9 ÜRÜN</span></q-btn
                  >
                  <div
                    class="text-caption text-grey"
                    style="margin-top: 12px; font-size: 16px"
                  >
                    75C645GTV
                  </div>
                  <div
                    class="text-caption text-black"
                    style="font-size: 15px; margin-top: 8px"
                  >
                    TCL 75C645 75inc 189 cm 4K UHD Google Smart Qled TV,Uydu
                    Alıcılı
                  </div>
                  <div class="text-h3 q-mt-sm q-mb-xs">
                    <span
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-weight: 700;
                      "
                      >42.399</span
                    >
                    <span
                      class="q-mt-sm q-mb-xs"
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-size: 12px;
                      "
                      >TL</span
                    >
                  </div>
                  <q-badge
                    color="primary"
                    label=" KARGO BEDAVA"
                    style="
                      font-size: 12px;
                      font-weight: 780;
                      text-align: center;
                      margin-left: 40px;
                    "
                  >
                    <q-icon name="car" style="font-size: 20px; color: white" />
                  </q-badge>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="q-pa-md row items-start q-gutter-md">
            <!-- İlk Ürün Kartı -->
            <q-card
              class="my-card"
              flat
              bordered
              style="max-width: 450px; width: 100%; margin-left: 80px"
            >
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/139306-1_small.jpg"
                  style="width: 175.95px; height: 175.95px; margin-top: 50px"
                />
                <q-card-section>
                  <div
                    class="text-overline"
                    style="
                      color: #e44b55;
                      font-family: 'Roboto', 'Arial', sans-serif;
                      font-weight: 700;
                      margin-left: 40px;
                    "
                  >
                    Web'e Özel
                  </div>
                  <q-btn
                    id="flashingBtn"
                    color="red"
                    style="font-size: 12px; text-align: center"
                    ><span id="flashingLabel">BU FİYATA SON 9 ÜRÜN</span></q-btn
                  >
                  <div
                    class="text-caption text-grey"
                    style="margin-top: 12px; font-size: 16px"
                  >
                    xW9383/01
                  </div>
                  <div
                    class="text-caption text-black"
                    style="font-size: 15px; margin-top: 8px"
                  >
                    Philips XW9383/01 AquaTrio 9000 serisi Kablosuz Islak ve
                    Kuru Elektrik Süpürgesi
                  </div>
                  <div class="text-h3 q-mt-sm q-mb-xs">
                    <span
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-weight: 700;
                      "
                      >21.039</span
                    >
                    <span
                      class="q-mt-sm q-mb-xs"
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-size: 12px;
                      "
                      >TL</span
                    >
                  </div>
                  <q-badge
                    color="primary"
                    label="KARGO BEDAVA"
                    style="
                      font-size: 12px;
                      font-weight: 780;
                      text-align: center;
                      margin-left: 40px;
                    "
                  >
                    <q-icon
                      name="car"
                      style="font-size: 20px; color: white"
                    ></q-icon>
                  </q-badge>
                </q-card-section>
              </q-card-section>
            </q-card>

            <!-- İkinci Ürün Kartı -->
            <q-card
              class="my-card"
              flat
              bordered
              style="max-width: 450px; width: 100%"
            >
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/142164-1_small.jpg"
                  style="width: 175.95px; height: 175.95px; margin-top: 50px"
                />
                <q-card-section>
                  <div
                    class="text-overline"
                    style="
                      color: #e44b55;
                      font-family: 'Roboto', 'Arial', sans-serif;
                      font-weight: 700;
                      margin-left: 40px;
                    "
                  >
                    Web'e Özel
                  </div>
                  <q-btn
                    id="flashingBtn"
                    color="red"
                    style="font-size: 12px; text-align: center"
                    ><span id="flashingLabel">BU FİYATA SON 9 ÜRÜN</span></q-btn
                  >
                  <div
                    class="text-caption text-grey"
                    style="margin-top: 12px; font-size: 16px"
                  >
                    XC8057/01
                  </div>
                  <div
                    class="text-caption text-black"
                    style="font-size: 15px; margin-top: 8px"
                  >
                    Philips XC8057/01 8000 Serisi Kablosuz Elektrikli Süpürge
                  </div>
                  <div class="text-h3 q-mt-sm q-mb-xs">
                    <span
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-weight: 700;
                      "
                      >15.999</span
                    >
                    <span
                      class="q-mt-sm q-mb-xs"
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-size: 12px;
                      "
                      >TL</span
                    >
                  </div>
                  <q-badge
                    color="primary"
                    label="KARGO BEDAVA"
                    style="
                      font-size: 12px;
                      font-weight: 780;
                      text-align: center;
                      margin-left: 40px;
                    "
                  >
                    <q-icon
                      name="car"
                      style="font-size: 20px; color: white"
                    ></q-icon>
                  </q-badge>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="q-pa-md row items-start q-gutter-md">
            <!-- İlk Ürün Kartı -->
            <q-card
              class="my-card"
              flat
              bordered
              style="max-width: 450px; width: 100%; margin-left: 80px"
            >
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/logitech/thumb/TeoriV2-97796_small.jpg"
                  style="width: 175.95px; height: 175.95px; margin-top: 50px"
                />
                <q-card-section>
                  <div
                    class="text-overline"
                    style="
                      color: #e44b55;
                      font-family: 'Roboto', 'Arial', sans-serif;
                      font-weight: 700;
                      margin-left: 40px;
                    "
                  >
                    Web'e Özel
                  </div>
                  <q-btn
                    id="flashingBtn"
                    color="red"
                    style="font-size: 12px; text-align: center"
                    ><span id="flashingLabel">BU FİYATA SON 9 ÜRÜN</span></q-btn
                  >
                  <div
                    class="text-caption text-grey"
                    style="margin-top: 12px; font-size: 16px"
                  >
                    981-000770
                  </div>
                  <div
                    class="text-caption text-black"
                    style="font-size: 15px; margin-top: 8px"
                  >
                    LOGITECH (3432 7.1 SURROUND SES KABLOLU OYUNCU KULAKLIĞI
                  </div>
                  <div class="text-h3 q-mt-sm q-mb-xs">
                    <span
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-weight: 700;
                      "
                      >1.839</span
                    >
                    <span
                      class="q-mt-sm q-mb-xs"
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-size: 12px;
                      "
                      >TL</span
                    >
                  </div>
                  <q-badge
                    color="primary"
                    label="KARGO BEDAVA"
                    style="
                      font-size: 12px;
                      font-weight: 780;
                      text-align: center;
                      margin-left: 40px;
                    "
                  >
                    <q-icon
                      name="car"
                      style="font-size: 20px; color: white"
                    ></q-icon>
                  </q-badge>
                </q-card-section>
              </q-card-section>
            </q-card>

            <!-- İkinci Ürün Kartı -->
            <q-card
              class="my-card"
              flat
              bordered
              style="max-width: 450px; width: 100%"
            >
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/jbl/thumb/115688_small.jpg"
                  style="width: 175.95px; height: 175.95px; margin-top: 50px"
                />
                <q-card-section>
                  <div
                    class="text-overline"
                    style="
                      color: #e44b55;
                      font-family: 'Roboto', 'Arial', sans-serif;
                      font-weight: 700;
                      margin-left: 40px;
                    "
                  >
                    Web'e Özel
                  </div>
                  <q-btn
                    id="flashingBtn"
                    color="red"
                    style="font-size: 12px; text-align: center"
                    ><span id="flashingLabel">BU FİYATA SON 9 ÜRÜN</span></q-btn
                  >
                  <div
                    class="text-caption text-grey"
                    style="margin-top: 12px; font-size: 16px"
                  >
                    JB-JBLJR310BLlJ
                  </div>
                  <div
                    class="text-caption text-black"
                    style="font-size: 15px; margin-top: 8px"
                  >
                    JBL JR310 KABLOLU KULAK USTU ÇOCUK KULAKLIĞI - MAVİ
                  </div>
                  <div class="text-h3 q-mt-sm q-mb-xs">
                    <span
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-weight: 700;
                      "
                      >748</span
                    >
                    <span
                      class="q-mt-sm q-mb-xs"
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-size: 12px;
                      "
                      >TL</span
                    >
                  </div>
                  <q-badge
                    color="primary"
                    label="KARGO BEDAVA"
                    style="
                      font-size: 12px;
                      font-weight: 780;
                      text-align: center;
                      margin-left: 40px;
                    "
                  >
                    <q-icon
                      name="car"
                      style="font-size: 20px; color: white"
                    ></q-icon>
                  </q-badge>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="4" class="column no-wrap">
          <div class="q-pa-md row items-start q-gutter-md">
            <!-- Birinci Ürün Kartı -->
            <q-card
              class="my-card"
              flat
              bordered
              style="max-width: 450px; width: 100%"
            >
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/jbl/thumb/117834_small.jpg"
                  style="width: 175.95px; height: 175.95px; margin-top: 50px"
                />
                <q-card-section>
                  <div
                    class="text-overline"
                    style="
                      color: #e44b55;
                      font-family: 'Roboto', 'Arial', sans-serif;
                      font-weight: 700;
                      margin-left: 40px;
                    "
                  >
                    Web'e Özel
                  </div>
                  <q-btn
                    id="flashingBtn"
                    color="red"
                    style="font-size: 12px; text-align: center"
                    ><span id="flashingLabel">BU FİYATA SON 9 ÜRÜN</span></q-btn
                  >
                  <div
                    class="text-caption text-grey"
                    style="margin-top: 12px; font-size: 16px"
                  >
                    JBFLJR310RED
                  </div>
                  <div
                    class="text-caption text-black"
                    style="font-size: 15px; margin-top: 8px"
                  >
                    JBL JR310 KABLOLU KULAK USTU ÇOCUK KULAKLIĞI - KIRMIZI
                  </div>
                  <div class="text-h3 q-mt-sm q-mb-xs">
                    <span
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-weight: 700;
                      "
                      >748</span
                    >
                    <span
                      class="q-mt-sm q-mb-xs"
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-size: 12px;
                      "
                      >TL</span
                    >
                  </div>
                  <q-badge
                    color="primary"
                    label="KARGO BEDAVA"
                    style="
                      font-size: 12px;
                      font-weight: 780;
                      text-align: center;
                      margin-left: 40px;
                    "
                  >
                    <q-icon
                      name="car"
                      style="font-size: 20px; color: white"
                    ></q-icon>
                  </q-badge>
                </q-card-section>
              </q-card-section>
            </q-card>

            <!-- İkinci Ürün Kartı -->
            <q-card
              class="my-card"
              flat
              bordered
              style="max-width: 450px; width: 100%"
            >
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/137025-1_small.jpg"
                  style="width: 175.95px; height: 175.95px; margin-top: 50px"
                />
                <q-card-section>
                  <div
                    class="text-overline"
                    style="
                      color: #e44b55;
                      font-family: 'Roboto', 'Arial', sans-serif;
                      font-weight: 700;
                      margin-left: 40px;
                    "
                  >
                    Web'e Özel
                  </div>
                  <q-btn
                    id="flashingBtn"
                    color="red"
                    style="font-size: 12px; text-align: center"
                    ><span id="flashingLabel">BU FİYATA SON 9 ÜRÜN</span></q-btn
                  >
                  <div
                    class="text-caption text-grey"
                    style="margin-top: 12px; font-size: 16px"
                  >
                    M1603QA-MB511W
                  </div>
                  <div
                    class="text-caption text-black"
                    style="font-size: 15px; margin-top: 8px"
                  >
                    Asus Vivobook 16X 5.Nesil Ryzen 5 5600H- 8Gb-512Gb
                    Ssd-16inc-W11
                  </div>
                  <div class="text-h3 q-mt-sm q-mb-xs">
                    <span
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-weight: 700;
                      "
                      >17.499</span
                    >
                    <span
                      class="q-mt-sm q-mb-xs"
                      style="
                        color: #003177;
                        font-family: Roboto, Arial, sans-serif;
                        font-size: 12px;
                      "
                      >TL</span
                    >
                  </div>
                  <q-badge
                    color="primary"
                    label="KARGO BEDAVA"
                    style="
                      font-size: 12px;
                      font-weight: 780;
                      text-align: center;
                      margin-left: 40px;
                    "
                  >
                    <q-icon
                      name=""
                      style="font-size: 20px; color: white"
                    ></q-icon>
                  </q-badge>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const slide = ref(1);
const slideRight = 'slide-right';
const slideLeft = 'slide-left';
</script>

<style>
@keyframes flashing {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#flashingLabel {
  animation: flashing 1s infinite;
}
</style>
