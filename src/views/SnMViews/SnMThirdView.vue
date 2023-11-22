<script setup lang="ts">
import {ref} from 'vue'
import MenuComponent from "@/components/MenuComponent.vue";
import Button from "primevue/button";
import ShowHistoryComponent from "@/components/ShowHistoryComponent.vue";
import BackButton from "@/components/BackButton.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import globalState from "@/globalState";

const items = ref([
  {
    label: "Szkoła na ul. Magnoliowej 8",
    to: "/magnoliowa"
  },
  {
    label: "1969-1971 - Technikum Mechaniczno-Energetyczne"
  }
])


const history = ref(
      {
        "parent_folder": "../assets/schools/SnM/1969-1971 - Technikum Mechaniczno-Energetyczne",
        "texts_with_images": [
          {
            "text": "We wrze\u015bniu 1969 roku szko\u0142a zmieni\u0142a na  nazw\u0119 Technikum Mechaniczno \u2013 Energetyczne. Funkcj\u0119 dyrektora szko\u0142y nadal  sprawowa\u0142 mgr in\u017c. Wies\u0142aw Jab\u0142o\u0144ski",
            "images": [
              "../assets/schools/SnM/1969-1971 - Technikum Mechaniczno-Energetyczne/images/zdj. 34.webp"
            ]
          },
          {
            "text": "Do, roku 1970  Technikum Mechaniczno \u2013 Energetyczne mie\u015bci\u0142o si\u0119 przy ulicy Bohater\u00f3w ORMO 3. 12 lutego 1970 r. szko\u0142a zosta\u0142a przeniesiona do  budynku przy ul. Lubartowskiej 76 (obecnie Al. Sp\u00f3\u0142dzielczo\u015bci Pracy)",
            "images": [
              "../assets/schools/SnM/1969-1971 - Technikum Mechaniczno-Energetyczne/images/zdj. 3.webp",
              "../assets/schools/SnM/1969-1971 - Technikum Mechaniczno-Energetyczne/images/zdj. 4.webp",
              "../assets/schools/SnM/1969-1971 - Technikum Mechaniczno-Energetyczne/images/zdj. 39.webp",
              "../assets/schools/SnM/1969-1971 - Technikum Mechaniczno-Energetyczne/images/zdj. 40.webp",
              "../assets/schools/SnM/1969-1971 - Technikum Mechaniczno-Energetyczne/images/zdj. 41.webp"
            ]
          },
          {
            "text": ".Szko\u0142a kszta\u0142ci\u0142a m\u0142odzie\u017c w trzech specjalno\u015bciach: gazownictwo, urz\u0105dzenia i instalacje przemys\u0142u gazowniczego, budowa maszyn i urz\u0105dze\u0144 przemys\u0142u spo\u017cywczego.",
            "images": []
          },
          {
            "text": "Skład Rady Pedagogicznej",
            "images": [
              "../assets/schools/SnM/1969-1971 - Technikum Mechaniczno-Energetyczne/images/zdj. 557a.webp",
              "../assets/schools/SnM/1969-1971 - Technikum Mechaniczno-Energetyczne/images/zdj. 557b.webp"
            ]
          }
        ]
      }

)

</script>
<template>
  <transition>
    <template v-if="globalState.loading">
      <LoadingScreen />
    </template>
  </transition>
    <MenuComponent  :items="items"/>

    <BackButton to="/magnoliowa" />
    <ShowHistoryComponent :items="history.texts_with_images"/>



</template>
<style scoped>

</style>