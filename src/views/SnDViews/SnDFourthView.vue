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
    label: "1985 - 1993 Zawodowe Centrum Kszta\u0142cenia Ustawicznego"
  }
])


const history = ref(
    {
      "parent_folder": "history_files\\SnD\\1985 - 1993 - Zawodowe Centrum Kszta\u0142cenia Ustawicznego",
      "texts_with_images": [
        {
          "text": "W 1985 roku Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechanicznych zosta\u0142 przekszta\u0142cony w Zawodowe Centrum Kszta\u0142cenia Ustawicznego przy ul. J. D\u0142ugosza 10. Funkcj\u0119 dyrektora w latach 1985 \u2013 1991 pe\u0142ni\u0142 mgr Henryk G\u00f3ral.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 674.png"
          ]
        },
        {
          "text": "W roku szkolnym 1991/92 dyrektorem szko\u0142y by\u0142 mgr Roman Lisowski.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 675.png"
          ]
        },
        {
          "text": "W roku szkolnym 1992/93 stanowisko dyrektora obj\u0105\u0142 mgr S\u0142awomir W\u00f3jcik.",
          "images": [
          ]
        },
        {
          "text": "Z kronik szko\u0142y: Rok szkolny 1985/86 Dzie\u0144 Nauczyciela.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 325.png"
          ]
        },
        {
          "text": "Dzie\u0144 Kobiet.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 326.png"
          ]
        },
        {
          "text": "09.04.1986r. - podpisanie umowy patronackiej z Lubelsk\u0105 Fabryk\u0105 Maszyn Rolniczych.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 327.png"
          ]
        },
        {
          "text": "Rok szkolny 1986/87 Dzie\u0144 Wojska Polskiego.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 328.png"
          ]
        },
        {
          "text": "Dzie\u0144 Nauczyciela.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 329.png"
          ]
        },
        {
          "text": "Jedna z form dzia\u0142alno\u015bci harcerzy.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 330.png"
          ]
        },
        {
          "text": "Szkolny Turniej Szachowy.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 331.png"
          ]
        },
        {
          "text": "Studni\u00f3wka.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 332.png"
          ]
        },
        {
          "text": "Dni otwartej szko\u0142y.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 333.png"
          ]
        },
        {
          "text": "\u015awi\u0119to 1-go Maja.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 334.png"
          ]
        },
        {
          "text": "Dyplom za udzia\u0142 w konkursie \"Zak\u0142ad pracy pomaga szkole - szko\u0142a pomaga zak\u0142adowi pracy\".",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 335.png"
          ]
        },
        {
          "text": "Rok szkolny 1987/88 Dzie\u0144 Edukacji Narodwej.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 336.png"
          ]
        },
        {
          "text": "Po\u017cegnanie pracownik\u00f3w odchodz\u0105cych na emerytur\u0119 i \u015blubowanie klas I.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 337.png"
          ]
        },
        {
          "text": "Dni Honorowego Krwiodawstwa.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 338.png"
          ]
        },
        {
          "text": "Obchody Rocznicy Wyzwolenia Warszawy.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 339.png"
          ]
        },
        {
          "text": "Dni otwartej szko\u0142y.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 340.png",
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 341.png"
          ]
        },
        {
          "text": "Turniej Kulturalny Szk\u00f3\u0142.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 342.png"
          ]
        },
        {
          "text": "Akademia 1 Majowa.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 343.png"
          ]
        },
        {
          "text": "Rok szkolny 1988/89 5 rocznica Honorowego Dawcy Krwi oraz Miejska konferencja PCK.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 344.png",
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 345.png"
          ]
        },
        {
          "text": "Rok szkolny 1990/91. Jedna z kart kroniki szkolnej.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 346.png"
          ]
        },
        {
          "text": "Msza \u015bw. z okazji rozpocz\u0119cia roku szkolnego.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 347.png"
          ]
        },
        {
          "text": "Dzie\u0144 Edukacji Narodwej.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 348.png"
          ]
        },
        {
          "text": "W szkole dzia\u0142a\u0142o Szkolne Ko\u0142o Teatralne.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 349.png"
          ]
        },
        {
          "text": "Wycieczka szkolna.",
          "images": [
            "../assets/schools/SnD/1985 - 1993 - Zawodowe Centrum Kształcenia Ustawicznego/images/zdj. 350.png"
          ]
        }
      ]
    }
)

</script>
<template>
  <transition>
    <template v-if="globalState.loading">
      <LoadingScreen/>
    </template>
  </transition>
  <MenuComponent :items="items"/>

  <BackButton to="/snd"/>
  <ShowHistoryComponent :items="history.texts_with_images"/>


</template>
<style scoped>

</style>