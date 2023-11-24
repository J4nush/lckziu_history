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
    label: "Zespół Szkół Pedagogicznych i Technicznych"
  }
])


const history = ref(
    {
      "parent_folder": "Zespół Szkół Pedagogicznych i Technicznych",
      "texts_with_images": [
        {
          "text": "Zespół Szkół Pedagogicznych i Technicznych im. Komisji Edukacji Narodowej był jedyną w województwie lubelskim szkołą średnią i pomaturalną, kształcącą nauczycieli w różnych kierunkach zawodowych. W jego skład wchodziły: Pedagogiczne Studium Techniczne, Zasadnicza Szkoła Zawodowa nr 2 z warsztatami, Studium Wychowania Przedszkolnego oraz Policealne Studium Zawodowe.<br/><br/>Siedzibą Szkoły był budynek przy ul. Krzywej 6. Został on wybudowany na kilka lat przed wybuchem II wojny światowej z funduszy, jakie ówczesne władze kościelne zebrały od ludności miasta Lublina oraz regionu lubelskiego.",
          "images": [
          ]
        },
        {
          "text": "Najstarszą szkołą, która dała początek Zespołowi Szkół Pedagogicznych i Technicznych, było Technikum Przemysłowo – Pedagogiczne. Szkoła ta powstała w 1962 r. jako jedna ze szkół Technikum Mechanicznego przy ul. Długosza. Lubelskie Technikum z chwilą powstania, korzystało z zaplecza technicznego warsztatów Zasadniczej Szkoły Zawodowej, wchodzącej w skład kompleksu szkół mechanicznych przy ul. Długosza.",
          "images": [
          ]
        },
        {
          "text": "W maju 1970 r. szkoła otrzymała gmach przy ul. Krzywej 6. Szkoła odziedziczyła również warsztaty szkolne wraz z kadrą pracowniczą po Zasadniczej Szkole Zawodowej nr 2, którą przeniesiono z ul. 1-go Maja na ul. Krzywą.<br/><br/>Jednocześnie ze zmianą lokalu, nastąpiła zmiana nazwy szkoły. Dotychczasowe Technikum Przemysłowo-Pedagogiczne zostało przemianowane na Pedagogiczną Szkołę Techniczną.",
          "images": [
            "../assets/schools/ZSTiP/images/zdj. 636.webp"
          ]
        },
        {
          "text": "12 października 1974 roku Pedagogiczna Szkoła Techniczna otrzymała imię Komisji Edukacji Narodowej. Ufundowany został także przez Komitet Rodzicielski sztandar szkoły. Od tego czasu dzień 14 października będący rocznicą powołania Komisji Edukacji Narodowej stał się świętem szkoły.",
          "images": [
            "../assets/schools/ZSTiP/images/zdj. 635.webp"
          ]
        },
        {
          "text": "W 1982 roku od Zespołu Szkół Pedagogicznych i Technicznych zostaje oddzielona Zasadnicza Szkoła Zawodowa, która wraz warsztatami szkolnymi zostaje przeniesiona do szkoły przy ul. Magnoliowej, a na jej miejsce powstaje Studium Nauczania Początkowego i Studium Wychowania Fizycznego. Zmienia się też charakter szkoły techniczno - pedagogicznej na humanistyczno - pedagogiczną. ",
          "images": [

          ]
        },
        {
          "text": "W roku szkolnym 1992/93 na podstawie decyzji Ministerstwa Edukacji Narodowej o likwidacji Pedagogicznych Studiów Technicznych (PST) oraz Studiów Nauczyczcielskich (SN), zaprzestano naboru do klas pierwszych Pedagogicznego Studium Technicznego.<br/><br/>Funkcjonujące dotychczas w ramach ZSPiT Studium Wychowania Przedszkolnego z dniem 1 września 1990 r. zostało przemianowane na Liceum Ogólnokształcące nr 19. Pedagogiczne Studium Techniczne pozostawiono do wygaśnięcia, ale zostało przeniesione do Zespołu Szkół Mechaniczno-Energetycznych przy ul. Magnoliowej 8 razem z dyr.Andrzejem Głowackim i częścią kadry pedagogicznej.",
          "images": [
            "../assets/schools/ZSTiP/images/zdj. 569.webp"
          ]
        },
        {
          "text": "Resztki 2 letniego Studium Wychowania Przedszkolnego przeszły wraz z XIX LO do budynku Szkoły Podstawowej nr 22 przy ul. Rzeckiego.",
          "images": [

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

    <BackButton to="/" />
    <ShowHistoryComponent :items="history.texts_with_images"/>



</template>
<style scoped>

</style>