<script setup lang="ts">
import {ref} from 'vue'
import MenuComponent from "@/components/MenuComponent.vue";
import Button from "primevue/button";
import ShowHistoryComponent from "@/components/ShowHistoryComponent.vue";
import BackButton from "@/components/BackButton.vue";
import globalState from "@/globalState";
import LoadingScreen from "@/components/LoadingScreen.vue";

const items = ref([
  {
    label: "magnoliowa",
    to: "/magnoliowa"
  },
  {
    label: "1953-1959 - Technikum Gospodarki Komunalnej"
  }
])

const history = ref(
  {
    "parent_folder": "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej",
    "texts_with_images": [
      {
        "text": "Wrzesie\u0144 1953 r. - dzi\u0119ki staraniom dyrektor mgr Haliny Gotzowej utworzono Technikum Gospodarki Komunalnej w Lublinie",
        "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 0.jpg",
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 0a dyrektor Halina Gotz.BMP",
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 0b.jpg",
        ]
      },
      {
        "text": "Technikum mie\u015bci\u0142o si\u0119 przy ul. 1-go Maja 10 i posiada\u0142o w\u00f3wczas dwa wydzia\u0142y: wydzia\u0142 planowania gospodarki komunalnej oraz wydzia\u0142 eksploatacji i remontu gazowni i sieci gazowych",
        "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 1a.jpg"
        ]
      },
      {
        "text": "1954 r. - patronat nad szko\u0142\u0105 przej\u0119\u0142a Gazownia Miejska w Lublinie.Pierwsze studni\u00f3wki odbywa\u0142y si\u0119 w gazowni. Konrad B\u0105kowski pracownik Gazowni Miejskiej i jednocze\u015bnie nauczyciel szko\u0142y organizuje w 1957 roku  na terenie zak\u0142adu opieku\u0144czego laboratorium chemiczne",
        "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 0c.png"
        ]
      },
      {
        "text": "Na terenie gazowni utworzono r\u00f3wnie\u017c mechaniczny warsztat szkoleniowy, w kt\u00f3rym uczniowie  wykonywali podstawowe prace mechaniczne zgodne z programem nauczania." +
            " Konrad B\u0105kowski  jest autorem podr\u0119cznik\u00f3w z dziedziny gazownictwa, niekt\u00f3re z nich znajduj\u0105 si\u0119 w naszej bibliotece",
        "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 0d.png"
        ]
      },
      {
        "text": "W kwietniu 1956 r. szko\u0142a przenosi si\u0119 do w\u0142asnego budynku. Jest to dostosowany do  potrzeb naucznia barak przy ul.Nowoprojektowej 3 (potem Bohater\u00f3w Bohater\u00f3w ORMO 3, a obecnie ul. W. Grabskiego)" ,
        "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 42.BMP"
        ]
      },
      {
        "text": "Rok szkolny 1956/57 \u2013 w zwi\u0105zku z reform\u0105 szkolnictwa szko\u0142a przesta\u0142a by\u0107 resortow\u0105, a zacz\u0119\u0142a podlega\u0107 Ministerstwu O\u015bwiaty. W roku szkolnym 1956/1957 w szkole odbywa si\u0119 pierwszy egzamin maturalny",
        "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 47.jpg",
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 47a.png",
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 47b.png"
        ]
      },
      {
        "text": "Powsta\u0142 te\u017c zesp\u00f3\u0142 taneczny \u2013 (zdj. 563).",
        "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 563.jpeg"
        ]
      },
      {
        "text": "Szko\u0142\u0119 opuszczaj\u0105 pierwsi absolwenci: 55 absolwent\u00f3w wydzia\u0142u planowania gospodarki komunalnej i 18 wydzia\u0142u eksploatacji  i remontu gazowni. " +
        "Rok szkolny 1957/1958 -  szko\u0142\u0119  ko\u0144czy 30 absolwent\u00f3w wydzia\u0142u planowania gospodarki komunalnej i 25 ekspoatacji i remontu gazowni." +
                "W roku szkolnym 1958/59 szko\u0142a liczy\u0142a 7 klas:- by\u0142a to ostatnia klasa planowania gospodarki komunalnej licz\u0105ca 25 uczennic- dwie klasy pierwsze licz\u0105ce 35 uczni\u00f3w o specjalno\u015bci gazowniczej- dwie klasy drugie po 24 uczni\u00f3w o specjalno\u015bci   gazowniczej- jedna klasa trzecia licz\u0105ca 35 uczni\u00f3w o specjalno\u015bci gazowniczej- jedna klasa czwarta licz\u0105ca 18 uczni\u00f3w o specjalno\u015bci eksploatacja i remont gazowni i sieci gazowych.Grono nauczycielskie sk\u0142ada\u0142o si\u0119 z 19 os\u00f3b. Dyrektorem szko\u0142y by\u0142a nadal Halina Gotzowa, a nauczycielami byli: Czes\u0142aw Banaszek, Ryszard Buchli\u0144ski, Konrad B\u0105kowski, Henryk Bzowski, Piotr Ilczuk, Ryszard Knie\u0107, Ewa Litwi\u0144czuk, Wac\u0142aw Miszczak, Wojciech Pankowski, Maria Pr\u00f3chniak, Kazimiera Rewkowska, Stanis\u0142aw Szymanik, Aleksander Szyma\u0144ski,Alina Wendrowska, Tadeusz Wendrowski, Adam Markwat, S\u0142awomir Ziemi\u0144ski, Barbara Lecewicz.Lekcja matematyki prowadzona przez Tadeusza Wendrowskiego ",
        "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 556.jpg"
        ]
      },
      {
        "text": "Zaj\u0119cia praktyczne w pracowni chemicznej",
        "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 564.jpg"
        ]
      },
      {
        "text": "W szkole dzia\u0142a\u0142 zesp\u00f3\u0142 dramatyczny",
            "images": [
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 558.jpg",
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 559.jpg",
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 560.jpg",
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 561.jpg",
          "../assets/schools/SnM/1953-1959 - Technikum Gospodarki Komunalnej/images/zdj. 563.jpeg"
        ]
      },
      {
        "text": "Dnia 25 czerwca 1959 roku odby\u0142o si\u0119 zako\u0144czenie roku szkolnego. Promocj\u0119 do kolejnej klasy otrzyma\u0142a nast\u0119puj\u0105ca liczba uczni\u00f3w: kl.I A   26 uczni\u00f3w                      kl.IIA  21 uczni\u00f3w         kl.III 27kl.IB   16 uczni\u00f3w                       kl.II.B 20 uczni\u00f3w W zwi\u0105zku z zarz\u0105dzeniem Ministerstwa O\u015bwiaty z dnia 8 sierpnia 1959 roku szko\u0142a zmieni\u0142a nazw\u0119 na Technikum Chemiczne.",
        "images": [],
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
<MenuComponent :items="items"/>
  <BackButton to="/magnoliowa" />
  <ShowHistoryComponent :items="history.texts_with_images"/>
</template>

<style scoped>

</style>