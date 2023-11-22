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
    label: "Zesp\u00f3\u0142 Szk\u00f3\u0142 nr 6",
    to: "/zs6"
  },
  {
    label: "1959-2002 Zesp\u00f3\u0142 Szk\u00f3\u0142 Zawodowych nr 1"
  }
])


const history = ref(
    {
      "parent_folder": "history_files\\ZS6\\1959-2002 Zesp\u00f3\u0142 Szk\u00f3\u0142 Zawodowych nr 1",
      "texts_with_images": [
        {
          "text": "Kr\u00f3tka historia Zespo\u0142u Szk\u00f3\u0142 Zawodowych nr 1 w Lublinie. W 1959 roku. Ministerstwo Budownictwa i Przemys\u0142u Materia\u0142\u00f3w Budowlanych powo\u0142a\u0142o Zasadnicz\u0105 Szko\u0142\u0119 Zawodow\u0105 dla Pracuj\u0105cych Przedsi\u0119biorstwa Rob\u00f3t Elektrycznych \u2013 Elektromonta\u017c w Lublinie. Szko\u0142a mie\u015bci\u0142a si\u0119 w budynku Szko\u0142y Podstawowej nr 32 przy ul. Przerwy-Tetmajera 2. Kszta\u0142ci\u0142a w zawodzie elektromontera dla potrzeb nowego zak\u0142adu. By\u0142a to szko\u0142a dokszta\u0142caj\u0105ca. Zaj\u0119cia warsztatowe odbywa\u0142y si\u0119 w zak\u0142adzie, a w szkole by\u0142o dokszta\u0142canie. W 1963 roku powo\u0142ano Technikum Mechaniczne dla Pracuj\u0105cych przy Przedsi\u0119biorstwie Rob\u00f3t Elektrycznych \u201eElektromonta\u017c\u201d w Lublinie. W 1974 roku dyrektor Wawnosek rozpocz\u0105\u0142.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/1_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/2_zsz1.jpg"
          ]
        },
        {
          "text": "Dyrektor Edward Kie\u0142czykowski doko\u0144czy\u0142 budow\u0119 budynku przy ul. Diamentowej 2, do kt\u00f3rego w 1976 roku zasta\u0142a przeniesiona szko\u0142a.",
          "images": [
          ]
        },
        {
          "text": "W 1979 roku powo\u0142ano Zesp\u00f3\u0142 Szk\u00f3\u0142 Zawodowych Przedsi\u0119biorstwa Rob\u00f3t Eletrycznych \u201eElektromonta\u017c\u201d w Lublinie. W sk\u0142ad zespo\u0142u wchodzi\u0142y szko\u0142y: <br> - Zasadnicza Szko\u0142a Zawodowa dla Pracuj\u0105cych; <br>- Technikum Elektryczne dla Pracuj\u0105cych; <br> - \u015arednie Studium dla Pracuj\u0105cych.<br> Zasadnicza Szko\u0142a Zawodowa dla Pracuj\u0105cych kszta\u0142ci\u0142a w nast\u0119puj\u0105ce kierunkach: elektromonter, \u015blusarz \u2013 spawacz.",
          "images": [
          ]
        },
        {
          "text": "Technikum Elektrycznym dla Pracuj\u0105cych kszta\u0142ci\u0142o w  kierunku technik elektryk, a \u015arednie Studium Zawodowe w kierunku monter konstrukcji stalowych oraz monter rob\u00f3t wyko\u0144czeniowych w budownictwie.",
          "images": [
          ]
        },
        {
          "text": "Zaj\u0119cia praktyczne m\u0142odzie\u017c odbywa\u0142a w Zak\u0142adach \u201eElektromonta\u017c\u201d,  jako m\u0142odociani pracownicy, otrzymywa\u0142a wynagrodzenie, posi\u0142ki regeneracyjne, ubrania robocze.",
          "images": [
          ]
        },
        {
          "text": "Absolwenci szko\u0142y mieli mo\u017cliwo\u015b\u0107 podj\u0119cia pracy w \u201eElektromonta\u017cu\u201d. W 1990 roku \u201eElektromonta\u017c\u201d przekaza\u0142 szko\u0142\u0119 Kuratorium O\u015bwiaty w Lublinie. R\u00f3wnocze\u015bnie zmieniono nazw\u0119 szko\u0142y na Zesp\u00f3\u0142 Szk\u00f3\u0142 Zawodowych nr 1 w Lublinie.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/3_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/4_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/5_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/5a_zsz1.jpg"
          ]
        },
        {
          "text": "W 1991 roku w sk\u0142ad Zespo\u0142u Szk\u00f3\u0142 Zawodowych nr 1 w\u0142\u0105czono Zasadnicz\u0105 Szko\u0142\u0119 Zawodow\u0105 nr 10 w Lublinie. Natomiast w 1992 roku Technikum Energetyczne Zak\u0142adu Energetycznego z ul. Garbarskiej.",
          "images": [
          ]
        },
        {
          "text": "W 1993 roku powo\u0142ano Technikum Mechaniczno-Energetyczne nr 2 w Lublinie, kt\u00f3re kszta\u0142ci\u0142o w zawodzie technik mechanik \u2013 specjalno\u015b\u0107: budowa maszyn. Natomiast Technikum Elektryczne dla Pracuj\u0105cych przemianowano na Technikum Elektryczne dla Doros\u0142ych, by w 1998 roku przemianowa\u0107 w Technikum Mechaniczno-Elektryczne dla Doros\u0142ych. W 1996 roku powo\u0142ano Policealne Studium Zawodowe: technik archiwista.",
          "images": [
          ]
        },
        {
          "text": "Szko\u0142y wchodz\u0105ce w sk\u0142ad Zespo\u0142u Szk\u00f3\u0142 Zawodowych nr 1 w Lublinie w 90-latach kszta\u0142ci\u0142y w nast\u0119puj\u0105cych zawodach: Zasadnicza Szko\u0142a Zawodowa nr 17: mechanik pojazd\u00f3w samochodowych, elektryk, blacharz samochodowy i elektromonter. Technikum Mechaniczno-Energetyczne nr 2 na podbudowie programowej szko\u0142y podstawowej: technik mechanik specjalno\u015bciach: energetyka cieplna i budowa maszyn, budowa i eksploatacja maszyn samochodowych. Technikum Mechaniczno-Elektryczne dla Doros\u0142ych: technik elektryk i technik mechanik.",
          "images": [
          ]
        },
        {
          "text": "Warsztaty szkolne przy ul. 1-Maja zosta\u0142y w 1991 roku kupione przez Ministerstwo Edukacji Narodowej od likwidowanej fabryki maszyn rolniczych. Zaj\u0119cia w nich odbywali nie tylko uczniowie ZSZ nr 1, ale r\u00f3wnie\u017c m\u0142odzie\u017c Gimnazjum nr 4 w Lublinie i Zasadniczej Szko\u0142y Zawodowej dla Doros\u0142ych Zespo\u0142u Szk\u00f3\u0142 nr 2 w Lublinie przy ul. W\u0142. Grabskiego 4.",
          "images": [
          ]
        },
        {
          "text": "Z dniem 1 wrze\u015bnia 2002 roku zosta\u0142 powo\u0142any Zesp\u00f3\u0142 Szk\u00f3\u0142 nr 6 w Lublinie na bazie Zespo\u0142u Szk\u00f3\u0142 Zawodowych nr 1 i w\u0142\u0105czonego w jego sk\u0142ad Zespo\u0142u Szk\u00f3\u0142 nr 2 \nz ul. Grabskiego 4 w Lublinie.",
          "images": [
          ]
        },
        {
          "text": "W latach 1959 \u2013 2002 stanowisko dyrektora przekszta\u0142canych szk\u00f3\u0142 piastowali: in\u017c. Edward Kie\u0142czykowski, in\u017c. Remigiusz D\u0105browa-Karasi\u0144ski oraz mgr Zbigniew Kowalski.",
          "images": [
          ]
        },
        {
          "text": "Migawki z \u017cycia szko\u0142y...",
          "images": [
          ]
        },
        {
          "text": "Pracownie szkolne.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/6_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/7_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/8_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/9_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/10_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/11_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/12_zsz1.jpg"
          ]
        },
        {
          "text": "Zaj\u0119cia na warsztatach.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/13_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/14_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/15_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/16_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/17_zsz1.jpg"
          ]
        },
        {
          "text": "Posi\u0142ek regeneracyjny.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/18_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/19_zsz1.jpg"
          ]
        },
        {
          "text": "Rozpocz\u0119cie roku szkolnego 1988/1989.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/20_sz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/21_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/23_zsz1.jpg"
          ]
        },
        {
          "text": "17 wrzesie\u0144 1988 rok \u2013 Festyn sportowo-rekreacyjny.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/24_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/25_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/26_zsz1.jpg"
          ]
        },
        {
          "text": "Listopad 1988 rok \u2013 Andrzejki.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/27_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/28_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/29_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/30_zsz1.jpg"
          ]
        },
        {
          "text": "21 stycze\u0144 1989 rok \u2013 Studni\u00f3wka.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/31_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/32_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/33_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/34_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/35_zsz1.jpg"
          ]
        },
        {
          "text": "8 marzec 1989 rok \u2013 Akademia z okazji Mi\u0119dzynarodowego \u015awi\u0119ta Kobiet.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/36_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/37_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/38_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/39_zsz1.jpg"
          ]
        },
        {
          "text": "1 maj 1989 \u2013 Akademia z okazji \u015awi\u0119ta Pracy 1 Maja.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/40_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/41_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/42_zsz1.jpg"
          ]
        },
        {
          "text": "8-10 maj 1989 rok \u2013 Wycieczka \u201eSzlakiem Piastowskim\u201d.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/43_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/44_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/45_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/46_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/47_zsz1.jpg"
          ]
        },
        {
          "text": "9 czerwiec 1989 rok \u2013 Po\u017cegnanie klas trzecich.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/48_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/49_zsz1.jpg"
          ]
        },
        {
          "text": "24 czerwiec 1989 rok \u2013 Uroczyste zako\u0144czenie roku szkolnego 1988/1989.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/50_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/51_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/52_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/53_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/54_zsz1.jpg"
          ]
        },
        {
          "text": "11 listopad 1989 rok \u2013 Akademia z okazji rocznicy odzyskania niepodleg\u0142o\u015bci przez Polsk\u0119.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/55_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/56_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/57_zsz1.jpg"
          ]
        },
        {
          "text": "1989 rok \u2013 Kurs ta\u0144ca towarzyskiego I stopnia.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/58_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/59_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/60_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/61_zsz1.jpg"
          ]
        },
        {
          "text": "30 listopad 1989 rok \u2013 Andrzejki.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/61_zsz1.jpg"
          ]
        },
        {
          "text": "20 stycze\u0144 1990 rok \u2013 Studni\u00f3wka.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/63_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/64_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/65_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/66_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/67_zsz1.jpg"
          ]
        },
        {
          "text": "8 marzec 1990 rok \u2013 Mi\u0119dzynarodowy Dzie\u0144 Kobiet.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/68_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/69_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/70_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/71_zsz1.jpg"
          ]
        },
        {
          "text": "Maj 1990 rok \u2013 Matura.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/72_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/73_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/74_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/75_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/76_zsz1.jpg"
          ]
        },
        {
          "text": "22 czerwiec 1990 rok \u2013 Uroczyste zako\u0144czenie roku szkolnego 1998/1990.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/77_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/78_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/79_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/80_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/81_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/82_zsz1.jpg"
          ]
        },
        {
          "text": "21 marzec 1991 rok \u2013 Integracja spo\u0142eczno\u015bci szkolnej.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/83_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/84_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/85_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/86_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/87_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/88_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/89_zsz1.jpg"
          ]
        },
        {
          "text": "14 kwiecie\u0144 1991 rok \u2013 Akademia \u2013 Kwiecie\u0144 miesi\u0105cem Pami\u0119ci Narodowej.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/90_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/91_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/92_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/93_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/94_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/95_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/96_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/97_zsz1.jpg"
          ]
        },
        {
          "text": "2001 rok \u2013 Studni\u00f3wka.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/98_zsz1.jpg"
          ]
        },
        {
          "text": "Lekcja j\u0119zyka polskiego w korelacji z j\u0119zykiem niemieckim.",
          "images": [
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/99_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/100_zsz1.jpg",
            "../assets/schools/ZS6/1959-2002 Zespół Szkół Zawodowych nr 1/images/101_zsz1.jpg"
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

    <BackButton to="/zs6" />
    <ShowHistoryComponent :items="history.texts_with_images"/>



</template>
<style scoped>

</style>