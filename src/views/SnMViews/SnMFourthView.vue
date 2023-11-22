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
    label: "Szkoła na ulicy Magnoliowej 8",
    to: "/magnoliowa"
  },
  {
    label: "1971-1998 - Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechaniczno-Energetycznych"
  }
])


const history = ref(

      {
        "parent_folder": "../assets/schools/SnM/1971-1998 - Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechaniczno-Energetycznych",
        "texts_with_images": [
          {
            "text": "Funkcj\u0119 dyrektora szko\u0142y do 1975 r. sprawowa\u0142 mgr in\u017c. Wies\u0142aw Jab\u0142o\u0144ski. Rok szkolny 1971/72  - przy Technikum powsta\u0142a Zasadnicza Szko\u0142a Zawodowa. Liczba oddzia\u0142\u00f3w w plac\u00f3wce wynosi\u0142a 12.<br/>We wrze\u015bniu 1975 r. -  dyrektorem szko\u0142y zosta\u0142 mgr S\u0142awomir Ziemi\u0144ski",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechaniczno-Energetycznych/images/zdj. 35.webp"
            ]
          },
          {
            "text": "1 wrze\u015bnia 1972 roku na stanowisko zast\u0119pcy dyrektora zosta\u0142 powo\u0142any mgr Ziemowit Bara\u0144ski. Funkcj\u0119 t\u0119 pe\u0142ni\u0142 do 1978 roku. Ziemowit Bara\u0144ski by\u0142 kapitanem \u017beglugi Wielkiej i uczy\u0142 m\u0142odzie\u017c  \u017ceglarstwa na Zalewie Zemborzyckim",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechaniczno-Energetycznych/images/zdj. 570.webp"
            ]
          },
          {
            "text": "W latach 1972-1974 drugim zast\u0119pc\u0105 dyrektora by\u0142a mgr Stefania Grochowicz.<br/>W latach 1976/86 funkcj\u0119 zast\u0119pcy dyrektora pe\u0142ni\u0142 in\u017c. Wac\u0142aw Mazur",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 574.webp"
            ]
          },
          {
            "text": "Funkcj\u0119 zast\u0119pcy dyrektora w r\u00f3\u017cnych latach pe\u0142nili tak\u017ce:<br/>mgr Wies\u0142awa Kulicka,<br/>mgr Kamila Pi\u0119tas,<br/>mgr in\u017c. Mieczys\u0142aw Ruta,<br/>mgr in\u017c. Andrzej Zbara\u0144ski,<br/>mgr in\u017c. Henryk \u0141ukasik,<br/>mgr Andrzej G\u0142owacki",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 678.webp"
            ]
          },
          {
            "text": "Do 1977 roku szko\u0142a mie\u015bci\u0142a si\u0119 w budynku przy ulicy Lubartowskiej 76. W lutym 1977 r. nast\u0105pi\u0142a przeprowadzka do nowego gmachu szko\u0142y mieszcz\u0105cego si\u0119 przy ulicy Magnoliowej 8, kt\u00f3rego budow\u0119 rozpocz\u0119to w 1974 roku",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 5.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 6.webp"
            ]
          },
          {
            "text": "Budynek by\u0142 nowoczesny,  wyposa\u017cony w gabinety lekcyjne z zapleczami, \u015brodki dydaktyczne - g\u0142\u00f3wnie audiowizualne. Notatki z kroniki szkolnej",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 6b.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 6c.webp"
            ]
          },
          {
            "text": "Pierwsza studni\u00f3wka w nowym budynku",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 48.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 48a.webp"
            ]
          },
          {
            "text": "Drugi semestr roku szkolnego 1977/78 - przeniesienie warsztat\u00f3w szkolnych do nowego budynku",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 7.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 8.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 9.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 10.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 11.webp"
            ]
          },
          {
            "text": "Ko\u0142o \u017bywego S\u0142owa powsta\u0142o z inicjatywy nauczycielki j. polskiego Alicji Rebety we  wrze\u015bniu  1975 r. Cz\u0142onkowie ko\u0142a organizowali uroczysto\u015bci szkolne, spotkania np.<br/>z Miros\u0142awem Konarowskim, wyst\u0119powali z przygotowanym programem poza szko\u0142\u0105,  uczestniczli w przegl\u0105dach ma\u0142ych form teatralnych",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 676.webp"
            ]
          },
          {
            "text": "Nawi\u0105zali kontakt z kuzynk\u0105 K.K. Baczy\u0144skiego Aniel\u0105 Kmit\u0105-Piorunow\u0105, kt\u00f3ra  uczestniczy\u0142a w grudniu 1978r.  w uroczysto\u015bciach 25 lecia szko\u0142y i  nadania  jej imienia K.K. Baczy\u0144skiego",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 600.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 601.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 602.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 603.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 604.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 633.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 634.webp"
            ]
          },
          {
            "text": "Kabaret Haba za\u0142o\u017cony w 1979 roku . Uczniowie tworzyli autorskie programy, wyst\u0119powali na uroczysto\u015bciach  szkolnych, klubach osiedlowych i domach kultury. Kapela Wuja Kazia dzia\u0142a\u0142a  w latach 1976-1978 za\u0142o\u017cona przez uczni\u00f3w Andrzeja Dunina, Kazimierza Podlaskiego, Andrzeja Celi\u0144skiego.Uczniowie prygotowywali r\u00f3wnie\u017c audycje nadawane przez radiow\u0119ze\u0142  szkolny",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 632.webp"
            ]
          },
          {
            "text": "Kabaret dzia\u0142a\u0142 w latach 1986-1988, potem przekszta\u0142ci\u0142 si\u0119 Teatr 88",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 631.webp"
            ]
          },
          {
            "text": "W roku szkolnym 1975/76 zosta\u0142 za\u0142o\u017cony Szkolne Ko\u0142o Sportowe \"P\u0142omie\u0144\". Za\u0142o\u017cycielem i opiekunem klubu by\u0142 nauczyciel wychowania fizycznego p. Andrzej Kita",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 581.webp"
            ]
          },
          {
            "text": "Wojciech Kowalski  ucze\u0144 klasy II TEpz by\u0142 cz\u0142onkiem Kadry Narodowej sekcji Tae Kwon Do, Mistrzem Polski za rok 1986, zdobywca Dru\u017cynowego Pucharu Polski za rok 1987.<br/>2 grudnia 1978 r. - obchody 25-lecia szko\u0142y po\u0142\u0105czone z uroczystym nadaniem szkole imienia Krzysztofa Kamila Baczy\u0144skiego.<br/>Podczas uroczysto\u015bci ods\u0142oni\u0119to  pami\u0105tkow\u0105 tablic\u0119 w obecno\u015bci ciotecznej siostry poety Anieli Kmity- Piorunowej.  Kalendarz obchod\u00f3w",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 11a.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 11b.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 12.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 12a.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 13.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 14.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 15.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 17.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 161.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 162.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 163.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 164.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 165.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 166.webp"
            ]
          },
          {
            "text": "24 kwietnia 1979 - druga uroczysto\u015b\u0107 z okazji srebrnego jubileuszu szko\u0142y,odby\u0142o si\u0119 przekazanie szkole nowego sztandaru",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 20.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 21.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 167.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 168.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 169.webp"
            ]
          },
          {
            "text": "Pracownicy szko\u0142y w roku szkolnym 1979/1980 - wpis z kroniki szkolnej",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 582.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 583.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 584.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 585.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 586.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 587.webp"
            ]
          },
          {
            "text": "Struktura organizacyjna szko\u0142y w roku szkolnym 1979/1980 - wpis z kroniki szkolnej",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 588.webp"
            ]
          },
          {
            "text": "8 kwietnia 1987 r. - spotkanie ministra do spraw m\u0142odzie\u017cy Aleksandera Kwa\u015bniewskiego z uczniami szko\u0142y",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 22.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 23.webp"
            ]
          },
          {
            "text": "Rok 1989 - obchody 35-lecia szko\u0142y. Zjazd absolwent\u00f3w",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 24.webp"
            ]
          },
          {
            "text": "9 wrze\u015bnia 1990 r. - po\u015bwi\u0119cenie sztandaru szko\u0142y i krzy\u017cy przez ksi\u0119dza biskupa Boles\u0142awa Pylaka na uroczysto\u015bci po\u015bwi\u0119conej 72 Rocznicy Odzyskania Niepodleg\u0142o\u015bci przez Polsk\u0119",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 25.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 26.webp"
            ]
          },
          {
            "text": "1 wrze\u015bnia 1991 r. dyrektorem szko\u0142y zosta\u0142 mgr in\u017c. Kazimierz Jakubowski, kt\u00f3ry sprawuje t\u0119 funkcj\u0119 do 2002 roku",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 36.webp"
            ]
          },
          {
            "text": "1 wrze\u015bnia 1993 r. - do ZSME przechodzi m\u0142odzie\u017c z Zespo\u0142u Szk\u00f3\u0142 Pedagaogiczno-Technicznych z dyrektorem mgr Andrzejem G\u0142owackim",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 635.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 636.webp"
            ]
          },
          {
            "text": "1 stycznia 1997 r. - powo\u0142anie Centrum Kszta\u0142cenia Praktycznego w Organizacji z lokalizacj\u0105w pomieszczeniach warsztat\u00f3w szkolnych",
            "images": [
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 27.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 28.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 29.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 30.webp",
              "../assets/schools/SnM/1971-1998 - Zespół Szkół Mechaniczno-Energetycznych/images/zdj. 31.webp"
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