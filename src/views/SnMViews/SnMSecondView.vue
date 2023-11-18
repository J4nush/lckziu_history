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
    label: "1959-1969 - Technikum Chemiczne"
  }
])


const history = ref(
    {
      "parent_folder": "../assets/schools/SnM/1959-1969 - Technikum Chemiczne",
      "texts_with_images": [
        {
          "text": "08 sierpnia 1959 r. - zarz\u0105dzeniem Ministerstwa O\u015bwiaty szko\u0142a zmieni\u0142a nazw\u0119  na Technikum Chemiczne. Szko\u0142a mie\u015bci\u0142a sie przy ulicy Bohater\u00f3w Bohater\u00f3w ORMO 3 ( obecnie  ul. W. Grabskiego)",
          "images":[
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 2.BMP"
          ]
        },
        {
          "text": "Stanowisko dyrektora szko\u0142y do roku 1968 pe\u0142ni\u0142a mgr Halina Gotzowa, a od wrze\u015bnia 1968 roku mgr in\u017c. Wies\u0142aw Jab\u0142o\u0144ski.  20 maja 1960 r.  w Technikum Chemicznym odby\u0142a si\u0119 donios\u0142a uroczysto\u015b\u0107 wr\u0119czenia sztandaru szko\u0142y",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 2b.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 2c.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 568.jpg"
          ]
        },
        {
          "text": "1961 r. -  zarz\u0105dzeniem Ministerstwa O\u015bwiaty szko\u0142a otrzyma\u0142a nazw\u0119 Technikum Chemiczne Nr 2, a nauczan\u0105 specjalno\u015bci\u0105 by\u0142o gazownictwo - ( ",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 171.png"
          ]
        },
        {
          "text": "). Najlepsi uczniowie po I semestrze w roku szkolnym 1962/63 \u2013.",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 566.jpg"
          ]
        },
        {
          "text": "Rok szkolny 1963/64 - Studni\u00f3wka",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 565.jpg"
          ]
        },
        {
          "text": "1967 r. Obchody Dnia Nauczyciela",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 529.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 530.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 531.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 532.png"
          ]
        },
        {
          "text": "Rok szkolny 1967/68  - w wyniku reorganizacji specjalno\u015bci kierunek szko\u0142y zmieni\u0142 si\u0119  na mechaniczny: Urz\u0105dzenia i instalacje przemys\u0142u gazowniczego. Uczniowie na terenie Gazowni Miejskiej w Lublinie" ,
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 534.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 535.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 536.png"
          ]
        },
        {
          "text": "Od roku1964 uczniowie brali udzia\u0142 w pracach w czasie wakacji w ramach akcji organizowanych przez Ochotnicze Hufce Pracy. W warunkach szkolnych najpopularniejsz\u0105 form\u0105 uczestnictwa by\u0142y hufce wakacyjno -wyjazdowe.Warunkiem przyjecia by\u0142o uko\u0144czenie 14 lat, dobrowolno\u015b\u0107 i wyra\u017cenie zgody przez rodzic\u00f3w. Za wykonywan\u0105 prac\u0119 m\u0142odzie\u017c otrzymywa\u0142a wynagrodzenie. M\u0142odzie\u017c pracowa\u0142a najcz\u0119\u015bciej w nadle\u015bnictwie  lub w PGR. Wakacyjne wyjazdy w ramach OHP cieszy\u0142y sie du\u017c\u0105 popularno\u015bci\u0105 i by\u0142y kontynuowane w przez wiele lat."
          ,
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 592.jpg",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 593.jpg",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 594.jpg",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 595.jpg",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 596.jpg",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 597.jpg"
          ]
        },
        {
          "text": " Podsumowanie jednego z turnus\u00f3w",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 598.jpg",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 599.jpg"
          ]
        },
        {
          "text":  "1968 r. - Studni\u00f3wka",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 537.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 538.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 539.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 530.png"
          ]
        },
        {
          "text": "1968 r.- A tak swi\u0119towano Dzie\u0144 Kobiet ",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 541.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 542.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 543.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 544.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 545.png"
          ]
        },
        {
          "text": "2 wrze\u015bnia 1968 r. - Uroczyste rozpocz\u0119cie roku szkolnego i powitanie nowego dyrektora in\u017c. Wies\u0142awa Jab\u0142o\u0144skiego" ,
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 546.png"
          ]
        },
        {
          "text": "1968 r. Obchody Dnia Nauczyciela" ,
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 547.png"
          ]
        },
        {
          "text": "1969 r.- Poczet sztandarowy Technikum Chemicznego",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 2d.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 552.png",
          ]
        },
        {
          "text": "\u017bycie szkolne urozmaica\u0142y wyjazdy",
          "images": [
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 549.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 550.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 551.png",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 553.jpeg",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 554.jpeg",
            "../assets/schools/SnM/1959-1969 - Technikum Chemiczne/images/zdj. 555.jpeg"
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