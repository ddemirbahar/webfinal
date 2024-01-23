// Kişisel bakım butonunun üstüne gelğinde tıklamadan açılır ve her bir liste
elemanın üstüne gelindiğinde rebgi değişir.

<template>
  <div class="q-pa-md" @mouseleave="closeMenu">
    <div class="q-gutter-md">
      <q-btn
        color="white"
        text-color="black"
        label="KİŞİSEL BAKIM"
        @mouseover="openMenu"
        @mouseleave="closeMenu"
      >
        <q-menu ref="menuRef" @mouseover="menuHover" @mouseleave="closeMenu">
          <q-list class="flex-list">
            <div
              v-for="(column, columnIndex) in columns"
              :key="columnIndex"
              class="list-column"
            >
              <q-item
                v-for="(item, index) in column"
                :key="index"
                clickable
                @mouseover="changeItemColor(columnIndex, index, true)"
                @mouseleave="changeItemColor(columnIndex, index, false)"
                @click="handleItemClick('item.label')"
                :class="{ 'item-hover': isItemHover[columnIndex][index] }"
              >
                <q-item-section>{{ item.label }}</q-item-section>
              </q-item>
            </div>
            <div class="list-column">
              <q-item clickable @click="handleItemClick('Help & Feedback')">
                <q-item-thumbnail>
                  <img
                    src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/kisisel-bakim.jpg"
                  />
                </q-item-thumbnail>
              </q-item>
            </div>
          </q-list>
          <div>
            <q-btn
              outline
              rounded
              color="black"
              label="Tüm Kişisel Bakım Ürünlerini Gör"
              style="margin-bottom: 50px; margin-left: 50px"
            />
          </div>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<style scoped>
.flex-list {
  display: flex;
  flex-wrap: wrap;
}

.list-column {
  flex: 1;
  padding: 0 10px;
  box-sizing: border-box;
}

.q-list .q-item.item-hover {
  color: #003177;
}
</style>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const menuRef = ref();

    const columns = [
      [
        { label: 'Tıraş Makineleri' },
        { label: 'Epilasyon Aletleri' },
        { label: 'Saç Kurutma Makineleri' },
        { label: 'Saç Şekillendirme Setleri' },
      ],
      [
        { label: 'Ağız ve Diş Bakım Ürünleri' },
        { label: 'Şarjlı Diş Fırçaları' },
        { label: 'Saç Düzleştiricler' },
        { label: 'Sakal Şekillendirme Makineleri' },
      ],
      [{ label: 'Saç Maşaları' }, { label: 'Tartılar' }],
    ];

    const isItemHover = ref(
      columns.map((column) => Array(column.length).fill(false))
    );

    const changeItemColor = (
      columnIndex: number,
      index: number,
      hoverState: boolean
    ) => {
      isItemHover.value[columnIndex][index] = hoverState;
    };

    const openMenu = () => {
      menuRef.value.show();
    };
    const closeMenu = () => {
      menuRef.value.hide();
    };

    const toggleMenu = () => {
      menuRef.value.toggle();
    };

    const handleItemClick = (item: string) => {
      console.log(`Clicked: ${item}`);
      closeMenu();
    };
    const menuHover = () => {
      openMenu();
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.value.$el &&
        !menuRef.value.$el.contains(event.target as Node) &&
        menuRef.value.isShowing
      ) {
        closeMenu();
      }
    };
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      menuRef,
      columns,
      isItemHover,
      changeItemColor,
      openMenu,
      closeMenu,
      toggleMenu,
      handleItemClick,
      menuHover,
    };
  },
};
</script>
