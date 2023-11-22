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
    label: "2002-2019 Zesp\u00f3\u0142 Szk\u00f3\u0142 nr 6"
  }
])


const history = ref(
    {
      "parent_folder": "history_files\\ZS6\\2002-2019 Zesp\u00f3\u0142 Szk\u00f3\u0142 nr 6",
      "texts_with_images": [
        {
          "text": "Kr\u00f3tka historia Zespo\u0142u Szk\u00f3\u0142 nr 6 przy ul. Diamentowej 2 w Lublinie.",
          "images": []
        },
        {
          "text": "1 wrze\u015bnia w 2002 roku nast\u0105pi\u0142o po\u0142\u0105czenie Zespo\u0142u Szk\u00f3\u0142 nr 2 w Lublinie z Zespo\u0142em Szk\u00f3\u0142 Zawodowych nr 1 w Lublinie w Zesp\u00f3\u0142 Szk\u00f3\u0142 nr 6 w Lublinie z siedzib\u0105 przy ul. Diamentowej 2, kt\u00f3rego dyrektorem zosta\u0142 mgr Zbigniew Kowalski.",
          "images": []
        },
        {
          "text": "W sk\u0142ad nowego zespo\u0142u Szk\u00f3\u0142 nr 6 w Lublinie wesz\u0142y nast\u0119puj\u0105ce szko\u0142y: Gimnazjum nr 4;<br>Technikum Energetyczne nr 2;<br>Technikum Mechaniczno-Energetyczne nr 2 na podbudowie programowej szko\u0142y podstawowej (do wyga\u015bni\u0119cia): Technikum Mechaniczno-Energetyczne na podbudowie programowej zasadniczej szko\u0142y zawodowej (do wyga\u015bni\u0119cia):Zasadnicza Szko\u0142a Zawodowa;<br>Gimnazjum dla Doros\u0142ych: Zasadnicza Szko\u0142a Zawodowa dla Doros\u0142ych;<br>Technikum Mechaniczno-Elektryczne dla Doros\u0142ych;<br>XVII Liceum Profilowane dla Doros\u0142ych.",
          "images": []
        },
        {
          "text": "W 2007 roku dyrektorem Zespo\u0142u Szk\u00f3\u0142 nr 6 w Lublinie zosta\u0142a pani mgr Marta Piekarczyk, a po niej obowi\u0105zki dyrektora przej\u0105\u0142 w 2014 roku pan mgr Jan Wasilewicz.",
          "images": []
        },
        {
          "text": "W wyniku kolejnych przekszta\u0142ce\u0144 w 2019 roku w sk\u0142ad Zespo\u0142u Szk\u00f3\u0142 nr 6 w Lublinie wchodzi\u0142y nast\u0119puj\u0105ce szko\u0142y:Gimnazjum nr 4 w Lublinie (z klasami przysposabiaj\u0105cymi do pracy w zawodach: \u015blusarz i ogrodnik);Zasadnicza Szko\u0142a Zawodowa nr 17 w Lublinie (o profilu mechanik pojazd\u00f3w samochodowych i ogrodnik);Bran\u017cowa Szko\u0142a Wielozawodowa I stopnia nr 1 w Lublinie (o profilu mechanik pojazd\u00f3w samochodowych, ogrodnik, \u015blusarz).",
          "images": []
        },
        {
          "text": "W 2019 roku Zesp\u00f3\u0142 Szk\u00f3\u0142 nr 6 przy ul. Diamentowej 2 w Lublinie zosta\u0142 rozwi\u0105zany, a w/w szko\u0142y wesz\u0142y w sk\u0142ad Lubelskiego Centrum Kszta\u0142cenia Zawodowego i Ustawicznego  im. K.K. Baczy\u0144skiego w Lublinie przy ul. Magnoliowej 8.",
          "images": []
        },
        {
          "text": "Migawki z \u017cycia szko\u0142y.",
          "images": []
        },
        {
          "text": "Budynek szko\u0142y od zewn\u0105trz",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/1_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/2_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/3_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/5_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/5a_zs6.webp"
          ]
        },
        {
          "text": "spacer po szkole",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/7_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/8_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/9_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/10_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/11_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/12_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/13_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/14_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/15_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/16_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/17_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/18_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/19_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/20_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/21_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/22_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/23_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/24_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/25_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/26_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/27_zs6.webp"
          ]
        },
        {
          "text": "Szko\u0142a prowadzi\u0142a dzia\u0142ania na rzecz \u015brodowiska lokalnego.  W 2014 roku z inicjatywy pana mgr Jana Wasilewicza dyrektora Zespo\u0142u szk\u00f3\u0142 nr 6 w Lublinie ul. Diamentowa 2 rozpocz\u0119\u0142a si\u0119 wsp\u00f3\u0142praca Z Katolickim Uniwersytetem Jana Paw\u0142a II Instytutem Pedagogiki, kt\u00f3rego kierownikiem by\u0142 ks. Prof. Dr hab. Marian Nowak. Podsumowaniem dwuletniej wsp\u00f3\u0142pracy sta\u0142a si\u0119 konferencja naukowa, kt\u00f3ra odby\u0142a si\u0119 dnia 15 marca 2016 roku pt. \u201eZapobieganie absencji uczni\u00f3w w okresie adolescencji\u201d. W konferencji uczestniczyli zaproszeni dyrektorzy, pedagodzy, psycholodzy gimnazj\u00f3w, poradni psychologiczno-pedagogicznych, nauczyciele, studencji KUL. Konferencja odby\u0142a si\u0119 pod patronatem pani Ewy Dumkiewicz-Sprawki Dyrektora Wydzia\u0142u O\u015bwiaty i Wychowania Urz\u0119du Miasta Lublin. Prelegentami byli przedstawiciele instytucji wsp\u00f3\u0142pracuj\u0105cych ze szko\u0142\u0105. Zesp\u00f3\u0142 badawczy opracowa\u0142 ankiety, kt\u00f3re by\u0142y przeprowadzone w lubelskich gimnazjach w klasach drugich, by\u0142y one podstaw\u0105 do analizy problem\u00f3w absencji uczni\u00f3w w okresie dojrzewania",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/90_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/91_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/92_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/93_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/94_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/95_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/96_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/97_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/98_zs6.webp"
          ]
        },
        {
          "text": "22 pa\u017adziernika 2018 roku spo\u0142eczno\u015b\u0107 szkolna Zespo\u0142u Szk\u00f3\u0142 nr 6 w Lublinie uczci\u0142a 100 rocznic\u0119 odzyskania przez Polsk\u0119 niepodleg\u0142o\u015bci posadzeniem przed budynkiem szko\u0142y \u201eD\u0119bu Niepodleg\u0142o\u015bci\u201d. W wydarzeniu licznie uczestniczyli uczniowie, nauczyciele dyrekcja szko\u0142y oraz zaproszeni go\u015bcie: Biskup Mieczys\u0142aw Cis\u0142o - Biskup Pomocniczy Archidiecezji Lubelskiej, pani Teresa Misiuk - Lubelski Kurator O\u015bwiaty, pan Miros\u0142aw Jarosi\u0144ski - z-ca Dyrektora Wydzia\u0142u O\u015bwiaty i Wychowania Urz\u0119du Miasta Lublin, ks. Grzegorz Tr\u0105bka - proboszcz parafii \u015bw. Jana Paw\u0142a II w Lublinie, pani Iwona Kr\u0119glicka \u2013 z-ca przewodnicz\u0105cej RSOiW NSZZ \u201eSolidarno\u015b\u0107\u201d Regionu \u015arodkowowschodniego",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/151_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/152_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/153_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/154_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/155_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/156_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/157_zs6.webp"
          ]
        },
        {
          "text": "Szko\u0142a wsp\u00f3\u0142pracowa\u0142a z...",
          "images": []
        },
        {
          "text": "PCK Oddzia\u0142 w Lublinie w zbi\u00f3rce grosik\u00f3w w ramach akcji \u201eGor\u0105czka Z\u0142ota\u201d pomagaj\u0105c najbiedniejszym dzieciom z wojew\u00f3dztwa lubelskiego w mo\u017cliwo\u015bci wyjazdu na letni wypoczynek",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/58_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/59_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/60_zs6.webp"
          ]
        },
        {
          "text": "Lubelskim Hospicjum dla Dzieci im. Ma\u0142ego Ksi\u0119cia w Lublinie, Wydzia\u0142em Zdrowia i Profilaktyki, Stra\u017c\u0105 Miejsk\u0105 Miasta Lublin, Specjalistyczn\u0105 Poradni\u0105 Zawodow\u0105 w Lublinie, Schroniskiem dla bezdomnych zwierz\u0105t przy ul. Metalurgicznej w Lublinie, Stowarzyszeniem mali bracia Ubogich",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/110_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/147_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/148_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/149_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/150_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/299_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/79a_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/79_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/80_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/81_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/82_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/83_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/84_zs6.webp"
          ]
        },
        {
          "text": "Miejsk\u0105 Bibliotek\u0105 Publiczn\u0105 Filia 39 ul. G\u0142uska 138 dla spo\u0142eczno\u015bci, kt\u00f3rej m\u0142odzie\u017c wraz z nauczycielami prowadzi\u0142a warsztaty florystyczne i r\u0119kodzielnicze oraz Bo\u017conarodzeniowe dla \"milusi\u0144skich\" z Przedszkola \"Tosia\" w G\u0142usku",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/138_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/139_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/140_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/141_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/142_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/143_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/144_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/145_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/146_zs6.webp"
          ]
        },
        {
          "text": "Miejsk\u0105 Bibliotek\u0105 Publiczn\u0105 w Bychawie Oddzia\u0142 Pedagogiczny, Osiedlowym Domem Kultury \u201ePrzyja\u017ani\u201d ul. Przyja\u017ani 13 w Lublinie, WTZ Miserii Cordia Lublin ul. G\u0142uska 138 \u2013 wystawy prac konkursowych np. \u201eRo\u015blina na ulicach Lublina\u201d, czytanie poezji patriotycznej",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/375_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/376_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/377_zs6.webp"
          ]
        },
        {
          "text": "SP nr 20 w Lublinie \u2013 2018 rok  i 2019 rok \u2013 warsztaty zawodoznawcze dla uczni\u00f3w.",
          "images": []
        },
        {
          "text": "Uniwersytetem Przyrodniczym Wydzia\u0142 Ogrodnictwa i Architektury Krajobrazu oraz Gospodarstwem Do\u015bwiadczalnym Felin",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/99_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/100_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/101_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/102_zs6.webp"
          ]
        },
        {
          "text": "Hortico Lublin \u2013 Centrum Ogrodnicze PNOS \u2013 praktyczna nauka zawodu   Pa\u0144stwow\u0105 Inspekcj\u0105 Ochrony Ro\u015blin i Nasiennictwa w Lublinie.  Okr\u0119gow\u0105 Stacj\u0105 Chemiczno-Rolnicz\u0105 w Lublinie. Licencjonowanym Gospodarstwem Szk\u00f3\u0142karskim Krystyna Krzewi\u0144ska \u2013 2018 rok",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/122_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/123_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/124_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/125_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/126_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/127_zs6.webp"
          ]
        },
        {
          "text": "Agencj\u0105 Restrukturyzacji i Modernizacji Rolnictwa Eliz\u00f3wka",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/276_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/277_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/278_zs6.webp"
          ]
        },
        {
          "text": "Z 34 zak\u0142adami mechaniki pojazd\u00f3w samochodowych zrzeszonych min. w Izbie Rzemios\u0142a i Przedsi\u0119biorczo\u015bci w Lublinie w Cechu Metalowym ul. Rynek 2.",
          "images": []
        },
        {
          "text": "Uczniowie naszej szko\u0142y dwukrotnie zostali laureatami Og\u00f3lnopolskiego Konkursu \u201eEuropa z naszej ulicy\u201d, zorganizowanego przez Polsk\u0105 Fundacj\u0119 Dzieci i M\u0142odzie\u017cy. Rok 2018 \u2013 Fina\u0142 konkursu w Warszawie \u201eEuropejczycy mieszkaj\u0105 na naszej ulicy\u201d. Rok 2019 \u2013 Fina\u0142 konkursu w Warszawie, I miejsce, nagroda wyjazd do Brukseli",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/117_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/118_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/119_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/120_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/121_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/69a_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/69_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/70_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/71_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/72_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/73_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/74_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/75_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/76_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/77_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/78_zs6.webp"
          ]
        },
        {
          "text": "2 czerwiec 2016 rok \u2013 Konkurs na m\u0142odzie\u017cowe innowacje dotycz\u0105ce rolnictwa i rozwoju obszar\u00f3w wiejskich. Uczniowie zostali laureatami uzyskali I miejsce oraz nagrod\u0119 w wysoko\u015bci 4000 z\u0142 z przeznaczeniem na wycieczk\u0119 integracyjn\u0105 dla m\u0142odzie\u017cy",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/190_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/191_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/192_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/193_zs6.webp"
          ]
        },
        {
          "text": "Wycieczka odby\u0142a si\u0119 w miesi\u0105cu czerwcu 2016 roku do Che\u0142ma i Zamo\u015bcia",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/211_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/212_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/213_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/214_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/215_zs6.webp"
          ]
        },
        {
          "text": "Szko\u0142a oferowa\u0142a uczniom szeroki wachlarz wydarze\u0144 pozalekcyjnych, a uczniowie anga\u017cowali si\u0119 w \u017cycie szko\u0142y i brali czynny udzia\u0142 w r\u00f3\u017cnych uroczysto\u015bciach szkolnych, warsztatach, konkursach, wycieczkach. Oto niekt\u00f3re z nich: Uroczyste rozpocz\u0119cia roku szkolnego w latach: 2015-2019, \u015alubowanie uczni\u00f3w klas pierwszych Gimnazjum nr 4 w Lublinie 22 pa\u017adziernik 2018 rok",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/179_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/180_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/181_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/182_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/170_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/171_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/172_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/173_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/164_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/165_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/162_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/163_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/157a_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/158_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/159_zs6.webp"
          ]
        },
        {
          "text": "Jesie\u0144 2008 \u2013 Integracja spo\u0142eczno\u015bci szkolnej pod has\u0142em \u201eBarwy jesieni\u201d. Jesie\u0144 2009 rok \u2013 Integracja spo\u0142eczno\u015bci szkolnej pod has\u0142em \u201ePlony jesieni\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/40_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/41_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/42_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/43_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/44_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/45_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/293_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/294_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/295_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/296_zs6.webp"
          ]
        },
        {
          "text": "20 pa\u017adziernik 2011 rok \u2013 Integracja spo\u0142eczno\u015bci szkolnej",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/196_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/197_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/198_zs6.webp"
          ]
        },
        {
          "text": "Pa\u017adziernik 2017 rok \u2013 Dekoracje dla Lubelskiego Kuratorium O\u015bwiaty w Lublinie z okazji Dnia Edukacji Narodowej",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/115_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/116_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/134_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/135_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/136_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/137_zs6.webp"
          ]
        },
        {
          "text": "Obchody \u015awi\u0119ta Edukacji Narodowej 14 pa\u017adziernik w latach 2016  oraz 2018",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/262_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/263_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/264_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/265_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/266_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/324_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/325_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/326_zs6.webp"
          ]
        },
        {
          "text": "18 pa\u017adziernik 2016 rok \u2013 Festyn szk\u00f3\u0142 promuj\u0105cych zdrowie",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/267_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/268_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/269_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/270_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/271_zs6.webp"
          ]
        },
        {
          "text": "Opieka nad miejscami pami\u0119ci narodowej \u2013 Mogi\u0142a Zbiorowa Ofiar Bombardowania Miasta Lublina na cmentarzu przy ul. Lipowej w Lublinie oraz Cmentarz Wojenny z 1915 roku \u2013 Pami\u0105tkowa Mogi\u0142a ul. Nowy \u015awiat w Lublinie",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/112_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/113_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/114_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/160_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/161_zs6.webp"
          ]
        },
        {
          "text": "Akademia z okazji odzyskania niepodleg\u0142o\u015bci przez Polsk\u0119 11 listopada w latcah 2015-2017 ",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/219_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/220_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/221_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/216_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/217_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/218_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/222_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/223_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/224_zs6.webp"
          ]
        },
        {
          "text": "14 listopad 2016 rok \u2013 Warsztaty \u201eKto pali ten palant, czyli nikotynowa asertywno\u015b\u0107\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/310_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/311_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/312_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/313_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/314_zs6.webp"
          ]
        },
        {
          "text": "21 listopad 2018 rok - Dzie\u0144 \u017byczliwo\u015bci i Pozdrowie\u0144",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/272_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/273_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/274_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/275_zs6.webp"
          ]
        },
        {
          "text": "25 listopad 2016 rok \u2013 Archipelag Skarb\u00f3w",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/306_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/307_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/308_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/309_zs6.webp"
          ]
        },
        {
          "text": "Prze\u0142om listopada i grudnia 2018 roku \u2013 akcja \u201eG\u00f3ra Grosza\u201d organizowana przez Towarzystwo Nasz Nowy Dom z Warszawy",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/290_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/291_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/292_zs6.webp"
          ]
        },
        {
          "text": "Miko\u0142ajki \u2013  grudzie\u0144 2018 rok",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/85_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/86_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/87_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/88_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/89_zs6.webp"
          ]
        },
        {
          "text": "Spotkania i Jasełka w grudniu różnych lat: Grudzień 2005, 2006, 2008, 2012, 2015, 2016, 2017, 2018",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/111_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/111a_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/48_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/49_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/50_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/51_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/199_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/200_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/201_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/174_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/175_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/176_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/177_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/178_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/251_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/252_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/253_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/254_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/256_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/257_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/67_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/68_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/68a_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/68b_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/55_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/56_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/57_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/57a_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/57b_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/57c_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/57d_zs6.webp"
          ]
        },
        {
          "text": "2018 rok \u2013 Projekt \u201eMy\u015bl\u0119 pozytywnie\u201d w ramach og\u00f3lnopolskiego programu Szko\u0142a Pozytywnego My\u015blenia pod kierunkiem Instytutu Edukacji Pozytywnej z Warszawy",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/282_zs6.webp"
          ]
        },
        {
          "text": "Dzie\u0144 Kobiet",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/61_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/62_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/63_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/64_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/65_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/66_zs6.webp"
          ]
        },
        {
          "text": "21 marzec 2006 rok \u2013 \u015awi\u0119to wiosny",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/46_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/47_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/35_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/36_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/37_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/38_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/39_zs6.webp"
          ]
        },
        {
          "text": "20 marzec 2009 rok  - \u015awi\u0119to wiosny",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/194_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/195_zs6.webp"
          ]
        },
        {
          "text": "Udział w Targach Edukacyjnych w Lublinie w różnych latach: Kwiecień 2003, Marzec 2006, 2016, 2018, 2019",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/28_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/29_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/30_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/208_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/209_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/210_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/31_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/32_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/33_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/51_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/52_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/53_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/54_zs6.webp"
          ]
        },
        {
          "text": "Wielkanoc w różnych latach: 2010, 2016, 2018, 2019",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/279_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/280_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/281_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/183_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/184_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/185_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/186_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/187_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/188_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/189_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/166_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/167_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/168_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/169_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/204_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/205_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/206_zs6.webp"
          ]
        },
        {
          "text": "8 kwiecie\u0144 2016 rok \u2013 Warsztaty \u201eLiderzy Szkolni Pierwszego Stopnia\u201d \u2013 Fundacja Szcz\u0119\u015bliwe Dzieci\u0144stwo",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/300_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/301_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/302_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/303_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/304_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/305_zs6.webp"
          ]
        },
        {
          "text": "27 kwiecie\u0144 2018 rok \u2013 Dzie\u0144 Ziemi",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/258_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/259_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/260_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/261_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/261a_zs6.webp"
          ]
        },
        {
          "text": "16 kwiecie\u0144 2019 rok \u2013 Dzie\u0144 Ziemi",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/283_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/284_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/285_zs6.webp"
          ]
        },
        {
          "text": "Maj 2016 rok \u2013 Akademia z okazji rocznicy uchwalenia Konstytucji 3 Maja",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/247_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/248_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/249_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/250_zs6.webp"
          ]
        },
        {
          "text": "Maj 2018 rok \u2013 Akademia \u201ePolski Maj\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/362_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/363_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/364_zs6.webp"
          ]
        },
        {
          "text": "Wycieczki edukacyjne do St\u0119\u017cycy",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/103_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/104_zs6.webp"
          ]
        },
        {
          "text": "\u015aluby panie\u0144skie i ojczy\u017aniane",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/128_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/129_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/130_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/131_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/132_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/133_zs6.webp"
          ]
        },
        {
          "text": "Czerwiec 2018 rok \u2013 Fundacja Sempre a Frente warsztaty Eurodesk \u201eO czy warto wiedzie\u0107 wyje\u017cd\u017caj\u0105c za granic\u0119\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/286_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/287_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/288_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/289_zs6.webp"
          ]
        },
        {
          "text": "Uroczyste zakończenie roku szkolnego w różnych latach: Czerwiec 2016, 2017, 2018, 2019",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/225_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/226_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/227_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/228_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/229_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/230_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/231_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/232_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/233_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/234_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/235_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/236_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/237_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/238_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/239_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/240_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/241_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/242_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/243_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/244_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/245_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/246_zs6.webp"
          ]
        },
        {
          "text": "2016 rok \u2013  Kampania informacyjno-edukacyjna Rakoobrona",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/151_zs6.webp"
          ]
        },
        {
          "text": "2017 rok \u2013 Og\u00f3lnopolski Konkurs \u201eBli\u017cej pszcz\u00f3\u0142\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/374_zs6.webp"
          ]
        },
        {
          "text": "Zaj\u0119cia edukacyjne \u201eZachowuj\u0119 si\u0119 rozs\u0105dnie i bezpiecznie\u201d, Warsztaty \u201eSocjal media, czyli m\u00f3j \u015bwiadomy wizerunek w sieci\u201d oraz Warsztaty \u201eStres i radzenie sobie z nim. Wykorzystanie SITA jako metody relaksacji\u201d w 2018 roku",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/315_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/316_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/317_zs6.webp"
          ]
        },
        {
          "text": "Warsztaty \u201eRatowanie na spontanie, czyli warsztaty z pierwszej pomocy\u201d, Warsztaty \u201eZdrowy styl \u017cycia dla opornych, czyli- Jak skutecznie kszta\u0142towa\u0107 swoje \u017cycie?\u201d oraz Warsztaty \u201eEUROPRACA\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/318_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/319_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/320_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/321_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/322_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/323_zs6.webp"
          ]
        },
        {
          "text": "Warsztaty \u201eAlkohol i narkotyki przyjemno\u015b\u0107 czy zagro\u017cenie?\u201d, Warsztaty \u201ePsychiatra te\u017c dla ludzi\u201d oraz Festiwal Aktywno\u015bci M\u0142odych",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/327_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/328_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/329_zs6.webp"
          ]
        },
        {
          "text": "Warsztaty \u201eHejt? Hejty nie promuj\u0119, hejt banuj\u0119, bo reaguj\u0119\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/330_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/331_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/332_zs6.webp"
          ]
        },
        {
          "text": "Dzie\u0144 g\u0142o\u015bnego czytania, Spotkanie z przedstawicielami Ochotniczych Hufc\u00f3w Pracy, Realizacja Programu edukacyjnego \u201eWybierz \u017cycie \u2013 Pierwszy krok\u201d, Warsztaty \u201eTrzymaj FASon \u2013 Fas p\u0142odowy, zesp\u00f3\u0142 alkoholowy\u201d, Warsztaty \u201eRoli the cancer \u2013 wyroluj raka\u201d, Akcja charytatywna \u201eNasza szko\u0142a dla Syrii\u201d, \u201eKonkurs Wiedzy Obywatelskiej\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/333_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/334_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/335_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/336_zs6.webp"
          ]
        },
        {
          "text": "Plebiscyt \u201eKr\u00f3l/Kr\u00f3lowa \u017cyczliwo\u015bci\u201d, Og\u00f3lnopolskie Dni kariery \u2013 Konkurs \u201eMoje talenty i mocne strony \u2013 Moja wymarzona praca\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/337_zs6.webp"
          ]
        },
        {
          "text": "Mistrzostwa szko\u0142y w tenisie sto\u0142owym",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/338_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/339_zs6.webp"
          ]
        },
        {
          "text": "\u201eKonkurs Wiedzy o \u017byciu i Tw\u00f3rczo\u015b\u0107 Josefa Conrada\u201d,  Udzia\u0142 w Targach Aktywno\u015bci Os\u00f3b Niepe\u0142nosprawnych \u201eWszyscy jeste\u015bmy tacy sami\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/340_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/341_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/342_zs6.webp"
          ]
        },
        {
          "text": "Akcja informacyjna o potencjalnym dawstwu szpiku kostnego",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/343_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/344_zs6.webp"
          ]
        },
        {
          "text": "Warsztaty \u201eBudowanie w\u0142a\u015bciwych relacji mi\u0119dzyludzkich\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/345_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/346_zs6.webp"
          ]
        },
        {
          "text": "Spotkanie z Wojew\u00f3dzk\u0105 Komend\u0105 Uzupe\u0142nie\u0144 w Lublinie",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/347_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/348_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/349_zs6.webp"
          ]
        },
        {
          "text": "Narodowy Dzie\u0144 \u017bo\u0142nierzy Wykl\u0119tych",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/350_zs6.webp"
          ]
        },
        {
          "text": "Program Profilaktyczny \u201eMy\u015bl\u0119 pozytywnie\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/351_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/352_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/353_zs6.webp"
          ]
        },
        {
          "text": "Targi pracy po\u0142\u0105czone z warsztatami wiedzy o rynku pracy",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/354_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/355_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/356_zs6.webp"
          ]
        },
        {
          "text": "Konkurs przyrodniczy",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/357_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/358_zs6.webp"
          ]
        },
        {
          "text": "Wycieczka do Ogrodu Botanicznego",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/356_zs6.webp"
          ]
        },
        {
          "text": "Og\u00f3lnopolski Konkurs Plastyczny \u201eMartwa natura\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/360_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/361_zs6.webp"
          ]
        },
        {
          "text": "Wycieczka po \u201eSzlaku Pami\u0119ci \u017bo\u0142nierzy Wykl\u0119tych\u201d w Lublinie",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/365_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/366_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/367_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/368_zs6.webp"
          ]
        },
        {
          "text": "Warsztaty \u201eSprawy m\u0119skie, czyli faceci facetom\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/369_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/370_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/371_zs6.webp"
          ]
        },
        {
          "text": "Konkurs \u201eKszta\u0142towanie przestrzeni \u201eAMFITEATR\u201d",
          "images": [
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/372_zs6.webp",
            "../assets/schools/ZS6/2002-2019 Zespół Szkół nr 6/images/373_zs6.webp"
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