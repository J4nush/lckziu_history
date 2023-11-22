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
    label: "Zespół Szkół przy ulicy Długosza",
    to: "/snd"
  },
  {
    label: "1993 - 2005 Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechanicznych"
  }
])


const history = ref(
    {
      "parent_folder": "history_files\\SnD\\1993 - 2005 - Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechanicznych",
      "texts_with_images": [
        {
          "text": "W 1993 roku Zawodowe Centrum Kszta\u0142cenia Ustawicznego zosta\u0142o przekszta\u0142cone w Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechanicznych przy ul. J. D\u0142ugosza 10. W roku szkolnym 1993/94 funkcj\u0119 dyrektora szko\u0142y pe\u0142ni\u0142 mgr S\u0142awomir W\u00f3jcik. Od wrze\u015bnia 1994 roku stanowisko dyrektora obj\u0105\u0142 mgr Tadeusz Caban. W roku 1999 dyrektorem zosta\u0142 mgr in\u017c.  Wies\u0142aw Ciorgo\u0144. Dyrektor Wies\u0142aw Ciorgo\u0144  i zast\u0119pcy -  Teresa Krasowska i Dariusz Winiarczyk. Funkcj\u0119 t\u0119 pe\u0142ni\u0142 do 2005 roku.",
          "images": [
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/zdj. 133.webp"
          ]
        },
        {
          "text": "Z \u017cycia szko\u0142y - notatki z kronik - Rok szkolny 2001-2002.",
          "images": [
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/001.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/003.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/004.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/005.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/006.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/007.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/008.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/009.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/010.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/011.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/012.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/013.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/015.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/016.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/017.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/018.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/019.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/020.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2001-2002/021.webp"
          ]
        },
        {
          "text": "Rok szkolny 2002-2003.",
          "images": [
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/001.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/003.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/004.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/005.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/006.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/007.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/008.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/009.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/010.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/011.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/012.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/013.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/014.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/015.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/016.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/017.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/018.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/019.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/020.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/021.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/022.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/023.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/024.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/025.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/026.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/027.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/028.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2002-2003/029.webp"
          ]
        },
        {
          "text": "Rok szkolny 2003-2004.",
          "images": [
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/001.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/002.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/003.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/004.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/005.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/006.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/007.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/008.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/009.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/010.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/011.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/012.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/013.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/014.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/015.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/016.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/017.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/018.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/019.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/020.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/021.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/022.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/023.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/024.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/025.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/026.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2003-2004/027.webp"
          ]
        },
        {
          "text": "Rok szkolny 2004-2005.",
          "images": [
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/001.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/002.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/003.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/004.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/005.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/006.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/007.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/008.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/009.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/010.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/2004-2005/011.webp"
          ]
        },
        {
          "text": "W 2005 roku szko\u0142a zosta\u0142a po\u0142\u0105czona z Lubelskim Centrum Edukacji Zawodowej i przeniesiona na ul. Magnoliow\u0105 8.",
          "images": [
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/zdj. 156.webp"
          ]
        },
        {
          "text": "Nauczyciele oraz pracownicy administracji i obs\u0142ugi, kt\u00f3rzy w 2005 roku zostali przeniesieni do Lubelskiego Centrum Edukacji Zawodowej.",
          "images": [
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/zdj. 157.webp",
            "../assets/schools/SnD/1993 - 2005 - Zespół Szkół Mechanicznych/images/zdj. 158.webp"
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

    <BackButton to="/snd" />
    <ShowHistoryComponent :items="history.texts_with_images"/>



</template>
<style scoped>

</style>