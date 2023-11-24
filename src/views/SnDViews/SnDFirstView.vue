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
    label: "1949 - 1973 Zasadnicza Szko\u0142a Zawodowa (Metalowa) nr 1"
  }
])


const history = ref(
    {
      "parent_folder": "history_files\\SnD\\1949 -1973 -  Zasadnicza Szko\u0142a Zawodowa (Metalowa) nr 1",
      "texts_with_images": [
        {



          "text": "Trudno ustali\u0107 dok\u0142adny pocz\u0105tek za\u0142o\u017cenia szko\u0142y. Z kronik wynika, \u017ce w okresie II wojny światowej funkcjonowa\u0142a ju\u017c ona jako pewna forma kszta\u0142cenia zawodowego. Natomiast w 1944 roku zosta\u0142a zorganizowana 3-letnia Publiczna Szko\u0142a Dokszta\u0142caj\u0105ca z siedzib\u0105 przy ul. Spokojnej o kierunkach nauczania: metalowym, elektrycznym, krawieckim, fryzjerskim, gastronomicznym, handlowym. Dyrektorem szko\u0142y by\u0142 p. Onderko, a jego zast\u0119pc\u0105 p. Majewski.<br/><br/>W 1946 roku wydzia\u0142 metalowy zosta\u0142 umieszczony na ul. \u015aw. Miko\u0142aja 10 w Szkole Podstawowej nr 3. Szko\u0142a Metalowa zajmowa\u0142a II pi\u0119tro. Kierownikiem wydzia\u0142u by\u0142 p. Radymski. Do szko\u0142y przyjmowano uczni\u00f3w w r\u00f3\u017cnym wieku. Po uko\u0144czeniu klasy pi\u0105tej uczniowie byli przyjmowani do klasy wst\u0119pnej i obowi\u0105zani byli do czteroletniego ucz\u0119szczania do szko\u0142y.  Natomiast uczniowie, kt\u00f3rzy uko\u0144czyli klas\u0119 sz\u00f3st\u0105 lub si\u00f3dm\u0105 mogli by\u0107 przyj\u0119ci do klasy przy\u015bpieszonej i ko\u0144czyli szko\u0142\u0119 w ci\u0105gu dw\u00f3ch lat. W nast\u0119pnych latach w szkole nast\u0119powa\u0142y zmiany dotycz\u0105ce osoby dyrektora lub miejsca funkcjonowania.<br/><br/>W latach 1947-1948 dyrektorem szko\u0142y by\u0142 p. P\u0119dzisz, a od 1949 roku p. Adam Kotli\u0144ski.  We wrze\u015bniu 1949 roku dyrektorem zosta\u0142 Stanis\u0142aw Izdebski, a szko\u0142a zmieni\u0142a nazw\u0119 na Zasadnicz\u0105 Szko\u0142\u0119  Metalow\u0105 nr 1 i zosta\u0142a przeniesiona na ul. 1 Maja 10. W roku 1950 dyrektor Izdebski przeni\u00f3s\u0142 szko\u0142\u0119 na ulic\u0119 Narutowicza 3, a warsztaty szkolne umieszczono na ulicy R\u00f3\u017cy Luksemburg 1 (obecnie ul. Jerzego Popie\u0142uszki). Kierownikiem warsztat\u00f3w zosta\u0142  Marian Mastalerz.   W 1951 roku stanowisko dyrektora obejmuje p. Antoni  Gilas, a w 1953 p. Janina Grochowska, kt\u00f3ra w lutym 1954r. rezygnuje z pe\u0142nionej funkcji i zostaje nauczycielem matematyki. W roku  1953 zostaj\u0105 oddane do u\u017cytku nowe warsztaty szkolne przy ul. R\u00f3\u017cy Luksemburg 5.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 146.webp",
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 147.webp",
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 148.webp",
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 149.webp",
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 150.webp",
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 151.webp",
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 152.webp"
          ]
        },
        {
          "text": "W latach 1954\u20131979 stanowisko dyrektora szko\u0142y pe\u0142ni\u0142 p. Henryk Frydecki.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 142.webp"
          ]
        },
        {

          "text": "Kierownikiem warsztat\u00f3w od 1954 do 1959  roku by\u0142 p. R. Gole\u0144. M\u0142odzie\u017c w ramach zaj\u0119\u0107 warsztatowych wykonywa\u0142a narz\u0119dzia przeznaczone do sprzeda\u017cy. By\u0142y to wiertarki, imad\u0142a \u015blusarskie, podno\u015bniki, narz\u0119dzia rzemie\u015blnicze. Wykonywa\u0142a te\u017c drobne us\u0142ugi na rzecz ma\u0142ych zak\u0142ad\u00f3w. Do  roku 1970 warsztaty przystosowane by\u0142y do realizacji programu w zasadniczych szko\u0142ach zawodowych o specjalno\u015bciach: \u015blusarz mechanik, tokarz, frezer.<br/><br/>W zwi\u0105zku z powstaniem Liceum Zawodowego w 1970 roku dosz\u0142a specjalno\u015b\u0107 obr\u00f3bka skrawaniem. W 1971 roku w Zasadniczej Szkole Zawodowej wprowadzono now\u0105 specjalno\u015b\u0107 szlifierz,  a w 1972 w technikum 5-letnim specjalno\u015b\u0107 obr\u00f3bka skrawaniem. Pierwsza kronika szko\u0142y i historyczny wpis dyrektora.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 130.webp"
          ]
        },
        {
          "text": "Wicedyrektor Zdzis\u0142aw Jab\u0142o\u0144ski.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 143.webp"
          ]
        },
        {
          "text": "Wicedyrektor Stanis\u0142aw Paluch.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 144.webp"
          ]
        },
        {
          "text": "Kierownik warsztat\u00f3w  J. Pio\u015b.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 145.webp"
          ]
        },
        {
          "text": "Grono pedagogiczne.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 131.webp"
          ]
        },
        {
          "text": "Sztandar Zasadniczej Szko\u0142y Metalowej nr 1 zosta\u0142 ufundowany przez Komitet Rodzicielski. Uroczyste wr\u0119czenie sztandaru odby\u0142o si\u0119 20.06.1959 r.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 170.webp",
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 134.webp",
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 153.webp",
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 154.webp"
          ]
        },
        {
          "text": "Pod koniec lat pi\u0119\u0107dziesi\u0105tych dzi\u0119ki staraniom dyrektora Henryka  Frydeckiego rozpocz\u0119to budow\u0119 nowej siedziby dla  szko\u0142y przy ul. J. D\u0142ugosza 10. Budynek zosta\u0142 oddany do u\u017cytku 20 grudnia 1961 r. i stanowi\u0142 jej siedzib\u0119 do roku 2005.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 132.webp"
          ]
        },
        {
          "text": "1 wrze\u015bnia 1970 roku przy Zasadniczej Szkole Zawodowej nr 1 powstaje Liceum Zawodowe nr 1. Szko\u0142a dostaje etat dla drugiego wicedyrektora, kt\u00f3rym zostaje Zdzis\u0142aw Jab\u0142o\u0144ski. Liceum Zawodowe to nowy typ szko\u0142y czteroletniej z uzyskaniem zawodu dla robotnika z matur\u0105 o specjalno\u015bci - mechanika obr\u00f3bki skrawaniem.<br/><br/>We wrze\u015bniu 1972 roku otwarto pod wsp\u00f3ln\u0105 dyrekcj\u0105 kolejne szko\u0142y: <br/>1. 5- letnie Technikum Mechaniczne po 8 klasie szko\u0142y podstawowej o specjalno\u015bci obr\u00f3bka skrawania<br/>2. 3-letnie Technikum Mechaniczne po Zasadniczej Szkole Zawodowej o specjalno\u015bci budowa maszyn<br/>3. 2-letnie Technikum dla Przoduj\u0105cych Robotnik\u00f3w o specjalno\u015bci Technik w przemy\u015ble maszynowym",
          "images": [

          ]
        },
        {
          "text": "W listopadzie 1972 r. w szkole powsta\u0142 Zesp\u00f3\u0142 Pie\u015bni i Ta\u0144ca, kt\u00f3ry prezentowa\u0142 swoje umiejetno\u015bci  nie tylko podczas uroczysto\u015bci szkolnych, ale r\u00f3wnie\u017c na terenie miasta.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 666.webp"
          ]
        },
        {
          "text": "Z \u017cycia szko\u0142y - notatki z kronik: biblioteka szkolna.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 158a.webp"
          ]
        },
        {
          "text": "Gabinet lekarski i stomatologiczny. ",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 159.webp"
          ]
        },
        {
          "text": "Sto\u0142\u00f3wka szkolna. ",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 159a.webp"
          ]
        },{
          "text": "Andrzejki.",
          "images": [
            "../assets/schools/SnD/1949 -1973 -  Zasadnicza Szkoła Zawodowa (Metalowa) nr 1/images/zdj. 172.webp"
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