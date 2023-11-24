SnDFirstView.vue<script setup lang="ts">
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
    label: "1975 - 1985 Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechanicznych"
  }
])


const history = ref(
    {
      "parent_folder": "history_files\\SnD\\1975 - 1985- Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechanicznych",
      "texts_with_images": [
        {
          "text": "W 1975 roku Zesp\u00f3\u0142 Szk\u00f3\u0142 Zawodowych nr 4 zosta\u0142 przekszta\u0142cony w Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechanicznych przy ul. J. D\u0142ugosza 10.<br/><br/>W dalszym ci\u0105gu funkcj\u0119 dyrektora pe\u0142ni\u0142 p. Henryk Frydecki, kt\u00f3ry kierowa\u0142 szko\u0142\u0105 do czasu swego przej\u015bcia na emerytur\u0119 w 1979 roku.",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 671.webp"
          ]
        },
        {
          "text": "Henryk Frydecki uko\u0144czy\u0142 przed wojn\u0105 gimnazjum im. St.Staszica w Lublinie i dwie klasy Liceum Pedagogicznego w Che\u0142mie. Gdy wybuch\u0142a II wojna powr\u00f3ci\u0142 do Lublina, pracowa\u0142 w pogotowiu opieku\u0144czym przy ul. Kr\u00f3lewskiej. Po likwidacji pogotowia w 1940 roku zacz\u0105\u0142 pracowa\u0107 w zak\u0142adzie wychowawczym prowadzonym przez siostry zakonne przy ul. Dominika\u0144skiej. Opu\u015bci\u0142 Lublin, bo grozi\u0142o mu aresztowanie. Wr\u00f3ci\u0142 do Lublina w 1944 r. i rozpocz\u0105\u0142 prac\u0119 jako nauczyciel. Pocz\u0105tkowo pracowa\u0142 w szkole podstawowej w Milan\u00f3wku, a nastepnie w Radzyniu Podlaskim.<br/> <br/> Pracuj\u0105c jako nauczyciel uko\u0144czy\u0142 eksternistycznie Liceum Og\u00f3lnokszta\u0142c\u0105ce, a nast\u0119pnie zosta\u0142 skierowany na Wy\u017cszy Kurs Nauczycielski przy Pa\u0144stwowym Instytucie Rob\u00f3t R\u0119cznych. Po uko\u0144czeniu kursu zosta\u0142 dyrektorem Zasadniczej Szko\u0142y Zawodowej w Janowie Podlaskim. Pracowa\u0142 tam przez 4 lata. W 1954 roku zosta\u0142 przeniesiony do Lublina na stanowisko dyrektora Zasadniczej Szko\u0142y Metalowej nr 1, kt\u00f3ra mie\u015bci\u0142a si\u0119 przy ul. Narutowicza. Pracuj\u0105c jako dyrektor szko\u0142y uko\u0144czy\u0142 zaocznie technikum mechaniczne, a nastepnie studia w Wy\u017cszej Szkole In\u017cynierskiej w Lublinie. Warunki w jakich funkcjonowa\u0142a szko\u0142a by\u0142y bardzo trudne. Henryk Frydecki rozpocz\u0105\u0142 starania o budow\u0119 nowego budynku dla potrzeb szko\u0142y.<br/> <br/> Dzia\u0142ania prowadzone wsp\u00f3lnie z dyrektorem szko\u0142y samochodowej zako\u0144czy\u0142y si\u0119 w 1961 r. przeprowadzk\u0105 do nowej siedziby przy Al. D\u0142ugosza. Jego nast\u0119pc\u0105 zostaje mgr, in\u017c. Zdzis\u0142aw Jab\u0142o\u0144ski, kt\u00f3ry sprawowa\u0142 t\u0119 funkcj\u0119 do 1985 roku.",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 667.webp"
          ]
        },
        {
          "text": "Z \u017cycia szko\u0142y - notatki z kronik.<br/> <br/> Ko\u0142o Mechanik\u00f3w zosta\u0142o powo\u0142ane w szkole 20 pa\u017adziernika 1975 r. Opiekunem ko\u0142a zosta\u0142 Mieczys\u0142aw Bandura. Cz\u0142onkami Ko\u0142a byli nauczyciele i uczniowie. Plan pracy zak\u0142ada\u0142: udzia\u0142 w Olimpiadzie Wiedzy Technicznej, organizacj\u0119 konkurs\u00f3w na najlepsz\u0105 prac\u0119 dyplomow\u0105, wycieczki do zak\u0142ad\u00f3w pracy, wsp\u00f3\u0142prac\u0119 z ko\u0142em SIMP przy WSI, popularyzacj\u0119 osi\u0105gni\u0119\u0107 techniki. Mieczys\u0142aw Bandura w marcu 1978r. przeszed\u0142 do innej pracy.<br/> <br/> Dyrektor ZSM Henryk Frydecki funkcj\u0119 przewodnicz\u0105cego Ko\u0142a i powo\u0142anej szkolnej komisji Turnieju M\u0142odych Mistrz\u00f3w Techniki powierzy\u0142 Januszowu Ochowi.",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 668.webp",
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 669.webp",
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 670.webp",
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 679.webp",
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 680.webp"
          ]
        },
        {
          "text": "Wyjazdy z Sekcj\u0105 W\u0119dkarsk\u0105.",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 174.webp"
          ]
        },
        {
          "text": "Z \u017cycia kulturalnego szko\u0142y.",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 176.webp",
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 177.webp",
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 178.webp"
          ]
        },
        {
          "text": "W szkole dzia\u0142a\u0142 Zesp\u00f3\u0142 Recytatorski, kt\u00f3rym kierowa\u0142a pani Janik. Cz\u0142onkowie zespo\u0142u odnosili znacz\u0105ce sukcesy. Ucze\u0144 Janusz Goliszek otrzyma\u0142 wyr\u00f3\u017cnienie w Og\u00f3lnopolskim Konkursie Recytatorskim, kt\u00f3rego fina\u0142 odby\u0142 si\u0119 w Warszawie 05.03.1978 roku.<br/> <br/> W kolejnym konkursie, kt\u00f3ry odbywa\u0142 si\u0119 w grudniu 1978 roku wyr\u00f3\u017cnienie zdoby\u0142 Henryk Gil.",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 682.webp"
          ]
        },
        {
          "text": "Dzia\u0142a\u0142 szkolny kabaret \"\u015arubka\"oraz zesp\u00f3\u0142 muzyczny.<br/><br/>Jako nauczyciel zaj\u0119\u0107 pozalekcyjnych zatrudniony by\u0142 Krzysztof Obst, absolwent Wychowania Muzycznego UMCS. ",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 175.webp"
          ]
        },
        {
          "text": "12 stycznia 1984 roku odwiedzi\u0142a szko\u0142\u0119 wnuczka Henryka Sienkiewicza - Maria Sienkiewicz. ",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 274.webp",
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 275.webp"
          ]
        },
        {
          "text": "Ko\u0142o Mi\u0142osnik\u00f3w Teatru 1979 r. ",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 276.webp"
          ]
        },
        {
          "text": "Dzie\u0144 Nauczyciela 1983 r. ",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 277.webp"
          ]
        },
        {
          "text": "Krzysztof Jurewicz - ucze\u0144 klasy czwartej uratowa\u0142 \u017cycie 5-letniemu Paw\u0142owi wynosz\u0105c go z mieszkania, w kt\u00f3rym 5.12.1980 r. wybuch\u0142 po\u017car. <br/><br/>Krzysztof otrzyma\u0142 podzi\u0119kowanie od prezydenta Lublina, oraz medal przyznany przez Rad\u0119 Pa\u0144stwa Za Ofiarno\u015b\u0107 i Odwag\u0119.",
          "images": [
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 672.webp",
            "../assets/schools/SnD/1975 - 1985- Zespół Szkół Mechanicznych/images/zdj. 673.webp"
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