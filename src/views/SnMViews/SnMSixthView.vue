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
    label: "od 2014 - Lubelskie Centrum Kszta\u0142cenia Zawodowego i Ustawicznego"
  }
])


const history = ref(
    {
      "parent_folder": "history_files\\SnM\\od 2014 - Lubelskie Centrum Kszta\u0142cenia Zawodowego i Ustawicznego",
      "texts_with_images": [
        {
          "text": "2014 r. - Lubelskie Centrum Edukacji Zawodowej zosta\u0142o przekszta\u0142cone w Lubelskie Centrum Kszta\u0142cenia Zawodowego i Ustawicznego. Od 1 wrze\u015bnia 2007 do 31 grudnia 2020r. funkcj\u0119 dyrektora szko\u0142y sprawowa\u0142 mgr Jacek Misiuk.",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 204.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X96.jpeg"
          ]
        },
        {
          "text": "Od 1 stycznia 2021r. dyrektorem jest mgr in\u017c. S\u0142awomir Dyba\u0142a. Zast\u0119pcy dyrektora: mgr in\u017c.Wies\u0142aw Ciorgo\u0144, mgr Jan Wasilewicz, mgr in\u017c. Cezary Wawszczak.",

          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X87.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X88.JPG"
          ]
        },
        {
          "text": "Warsztaty szkolne w LCKZiU",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 205.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 206.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 207.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 208.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 209.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 210.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 211.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 212.jpg"
          ]
        },
        {
          "text": "11 grudnia 2015 r. w zwi\u0105zku ze zmian\u0105 nazwy szko\u0142y odby\u0142a si\u0119 uroczysto\u015b\u0107 po\u015bwi\u0119cenia i przekazania LCKZiU nowego sztandaru. \u015awi\u0119to rozpocz\u0119\u0142o si\u0119 msz\u0105 \u015bwi\u0119t\u0105 w ko\u015bciele parafialnym pod wezwaniem Niepokalanego Pocz\u0119cia Naj\u015bwi\u0119tszej Marii Panny przy ulicy Bazylian\u00f3wka 85, gdzie sztandar zosta\u0142 po\u015bwi\u0119cony. Dalsza cz\u0119\u015b\u0107 uroczysto\u015bci odby\u0142a sie w szkole. Szczeg\u00f3ln\u0105 rang\u0119 uroczysto\u015bci nadali zaproszeni go\u015bcie \u2013 Senator RP p. Stanis\u0142aw Gogacz, przedstawiciele w\u0142adz Miasta Lublin, Kuratorium O\u015bwiaty, Zwi\u0105zk\u00f3w Zawodowych, a tak\u017ce zak\u0142ad\u00f3w wsp\u00f3\u0142pracujacych ze szko\u0142\u0105. Msza \u015bwi\u0119ta podczas kt\u00f3rej sztandar zosta\u0142 po\u015bwi\u0119cony",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 60.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 61.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 62.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 63.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 64.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 579.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 580JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 92.JPG"
          ]
        },
        {
          "text": "Wbicie, pami\u0105tkowych gwo\u017adzi oraz uroczyste przekazanie sztandaru p. Dyrektorowi Jackowi Misiukowi przekazał go Samorządowi Uczniowskiemu",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 66.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 67.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 68,JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 69.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 70.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 71.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 72.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 73.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 74.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 75.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 76.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 77.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 78.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 79.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 80.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 81.JPG"
          ]
        },
        {
          "text": "Przem\u00f3wienia zaproszonych go\u015bci, część artystyczna w wykonaniu uczniów, zaproszeni goście",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 82.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 83.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 84.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 85.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 86.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 87.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 88.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 89.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 90.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 91.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 65.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 93.JPG"
          ]
        },
        {
          "text": "Poczet sztandarowy reprezentuje nasz\u0105 plac\u00f3wk\u0119 zar\u00f3wno na wa\u017cnych uroczysto\u015bcich szkolnych, jak r\u00f3wnie\u017c na terenie miasta. Poczet sztandarowy na obchodach 6 Rocznicy Katastrofy Smole\u0144skiej - 2015 /2016. Po\u017cegnanie klas czwartych 2015/2016, 2016/2017. Poczet Sztandarowy LCKZiU na miejskich obchodach \u015awi\u0119ta Niepodleg\u0142o\u015bci 2016/2017. Rozpocz\u0119cie roku szkolnego 2016/2017, 2017/2018. Poczet sztandarowy 2017/2018 podczas szkolnych uroczysto\u015bci z okazji \u015awi\u0119ta Niepodleg\u0142o\u015bci. Poczet sztandarowy na miejskich obchodach Narodowego \u015awi\u0119ta Niepodleg\u0142o\u015bci 2017/2018. Uroczysto\u015b\u0107 z okazji 232 rocznicy uchwalenia Konstytucji 3 Maja 2022/2023",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 374.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 376.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 377.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 373.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 375.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 370.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 371.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 372.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X84.jpg"
          ]
        },
        {
          "text": "Nasza szko\u0142a trzykrotnie bra\u0142a udzia\u0142 w konkursie \"Szko\u0142a innowacji\" organizowanym przez Wy\u017csz\u0105 Szko\u0142\u0119 Ekonomii i Innowacji w Lublinie.W roku 2013 otrzymali\u015bmy certyfikat \"Szko\u0142a innowacji \"",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 397.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 398.jpg"
          ]
        },
        {
          "text": "W 2014 roku przyznano nam certyfikat \"Szko\u0142a innowacji \", a Dariusz Janiszek za dzia\u0142ania innowacyjne promuj\u0105ce kszta\u0142cenie zawodowe poprzez zabaw\u0119 w\u015br\u00f3d gimnazjalist\u00f3w - Liga SumiBot otrzyma\u0142 certyfikat \"Nauczyciel- lider innowacji \".W roku 2015 po raz trzeci plac\u00f3wka zosta\u0142a uhonorowana certyfikatem \"Szko\u0142a innowacji \".",
          "images": []
        },
        {
          "text": "Nasza szko\u0142a kilkakrotnie otrzymywa\u0142a wyr\u00f3\u017cnienia w og\u00f3lnopolskim rankingu prowadzonym przez portal Perspektywy. Technika by\u0142y oceniane za pomoc\u0105 czterech kryteri\u00f3w: sukcesy szko\u0142y w olimpiadach, wyniki matury z przedmiot\u00f3w obowi\u0105zkowych, wyniki matury z przedmiot\u00f3w dodatkowych, oraz wyniki egzaminu zawodowego.",
          "images": []
        },
        {
          "text": "Rok 2016- Technikum Mechaniczne otrzyma\u0142o tytu\u0142: \" Srebrnej Szko\u0142y 2016\". Rok 2020 - Technikum Mechaniczne otrzyma\u0142o tytu\u0142: \" Srebrnej Szko\u0142y 2020\". Rok 2021 - Technikum Mechaniczne otrzyma\u0142o tytu\u0142: \" Srebrnej Szko\u0142y 2021\". Rok 2022- Technikum Mechaniczne w LCKZiU im. Krzysztofa Kamila Baczy\u0144skiego w Lublinie kolejny raz zdoby\u0142o tytu\u0142 \"Srebrnej Szko\u0142y 2022",

          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 256.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X70.png",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X71.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X22.png"
          ]
        },
        {
          "text": "Portal waszaedukacja.pl opublikowa\u0142 w kwietniu 2017 roku ranking szk\u00f3\u0142 ponadgimnazjalnych, w kt\u00f3rym Technikum Mechaniczne w LCKZiU zdoby\u0142o pierwsze miejsce spo\u015br\u00f3d lubelskich szk\u00f3\u0142. W rankingu uwzgl\u0119dniono wyniki egzamin\u00f3w zewn\u0119trznych",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 256.jpg"
          ]
        },
        {
          "text": "23 czerwca 2017 r. na uroczysto\u015bci zako\u0144czenia roku szkolnego nastapi\u0142o podpisanie porozumienia o wsp\u00f3\u0142pracy pomi\u0119dzy 23. Batalionem Obrony Terytorialnej i Lubelskim Centrum Kszta\u0142cenia Zawodowego i Ustawicznego, dzi\u0119ki kt\u00f3remu uczniowie LCKZiU mog\u0105 bra\u0107 udzia\u0142 w zaj\u0119ciach prowadzonych przez \u017co\u0142nierzy z jednostki. Porozumienie pozwoli tak\u017ce absolwentom LCKZiU na zatrudnienie w 23 Batalionie WOT.",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 258.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 259.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 362.JPG"
          ]
        },
        {
          "text": "Po uroczysto\u015bciach mo\u017cna by\u0142o obejrze\u0107 sprz\u0119t wojskowy i wyposa\u017cenie \u017co\u0142nierzy 23 Batalionu Obrony Terytorialnej w Lublinie",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 260.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 261.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 363.JPG"
          ]
        },
        {
          "text": "\u015awi\u0119to Niepodleg\u0142o\u015bci 11 Listopada w latach 2015/2016 oraz 2016/2017. Od 2016 roku obchodom \u015awi\u0119ta Niepodleg\u0142o\u015bci w LCKZiU towarzysz\u0105 Sztafetowe Biegi Niepodleg\u0142o\u015bci, w kt\u00f3rych bior\u0105 udzia\u0142 przdstawiciele wszystkich klas. Startuj\u0105 trzyosobowe zespo\u0142y ze wszystkich klas, trasa biegnie wok\u00f3l szko\u0142y (560) metr\u00f3w",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 96.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 97.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 98.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 100.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 229.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 230.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 231.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 416.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 223.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 224.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 225.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X76.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X77.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 232.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 233.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 234.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 227.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 228.jpg"
          ]
        },
        {
          "text": "\u015awi\u0119to Szko\u0142y po\u0142\u0105czone ze \u015blubowaniem klas I-szych w roku szkolnym 2014/2015. Święto Szkoły połączone ze ślubowaniem klas I-szych w roku szkolnym 2016/2017 połączone z zawodami sportowymi o Puchar Dyrektora Szkoły oraz konkursem \"Budowanie w Minecraft\" oraz Święto Szkoły połączone ze ślubowaniem klas I-szych w latach 2017/2018 oraz 2022/2023",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 244.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 240.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 241.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 242.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 243.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 438.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 439.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 440.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 441.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 442.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 235.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 236.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 237.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 238.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 239.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X81.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X82.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X83.jpg"
          ]
        },
        {
          "text": "Jase\u0142ka w latach 2015/2016 oraz 2017/2018",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 126.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 221.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 222.jpg"
          ]
        },
        {
          "text": "Rok szkolny 2016/2017 - nietypowe Jase\u0142ka- \"Wigilijna ulica\"",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 218.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 219.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 220.jpg"
          ]
        },
        {
          "text": "Magnolkowe, Miko\u0142ajki w latach 2021/2022 oraz 2021/2022",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X85.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.x86.jpg"
          ]
        },
        {
          "text": "Studni\u00f3wki czyli tak m\u0142odzie\u017c bawi\u0142a si\u0119 100 dni przed matur\u0105 w latach 2016/2017, 2017/2018 oraz 2019/2020",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 287.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 288.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 289.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 290.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 291.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 292.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X78.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X79.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X80.jpg"
          ]
        },
        {
          "text": "Po\u017cegnanie klas maturalnych: Rok szkolny 2015/2016",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 431.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 432.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 422.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 434.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 435.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 436.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 437.JPG"
          ]
        },
        {
          "text": "Pożegnanie klas maturalnych: Rok szkolny 2016/2017 Wr\u0119czenie \u015bwiadectw i nagr\u00f3d absolwentom klasy 4 TA i 4 TB",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 428.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 429.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 430.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 217.jpg"
          ]
        },
        {
          "text": "Absolwenci po odebraniu upragnionych \u015bwiadectw uko\u0144czenia szko\u0142y",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 215.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 216.jpg"
          ]
        },
        {
          "text": "Zako\u0144czenie roku szkolnego 2022/2023 dla klas czwartych Technikum Mechanicznego",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X32.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X33.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X34.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X35.jpg"
          ]
        },
        {
          "text": "Zako\u0144czenie roku szkolnego 2016/ 2017. Wr\u0119czenie dyplom\u00f3w z konkurs\u00f3w i \u015bwiadectw uko\u0144czenia szko\u0142y z wyr\u00f3\u017cnieniem",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 445.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 446.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 447.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 448.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 449.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 450.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 451.JPG"
          ]
        },
        {
          "text": "Zako\u0144czenie roku szkolnego 2022/ 2023. Wr\u0119czenie dyplom\u00f3w z konkurs\u00f3w i \u015bwiadectw uko\u0144czenia szko\u0142y z wyr\u00f3\u017cnieniem",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X7.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X8.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X9.jpg"
          ]
        },
        {
          "text": "W ramach obchod\u00f3w 100-lecia odzyskania niepodleg\u0142o\u015bci nasza szko\u0142a przy\u0142\u0105czy\u0142a si\u0119 do akcji Rekord dla Niepodleg\u0142ej. 9.11.2018 o godzinie 11.11 uczniowie wszystkich klas wraz z wychowawcami od\u015bpiewali 4 zwrotki hymnu pa\u0144stwowego. Akcja trwa nadal",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X72.png"
          ]
        },
        {
          "text": "13 kwietnia 2022 roku o godz. 12:00 w Lubelskim Centrum Kszta\u0142cenia Zawodowego i Ustawicznego odby\u0142 si\u0119 Apel Pami\u0119ci o Ofiarach Zbrodni Katy\u0144skiej. Tym samym nasza szko\u0142a w\u0142\u0105czy\u0142a si\u0119 w przedsi\u0119wzi\u0119cie D\u0118BY KATY\u0143SKIE \u2013 \u0141A\u0143CUCH PAMI\u0118CI KOLEJNYCH POKOLE\u0143, kt\u00f3re zosta\u0142o obj\u0119te honorowym patronatem Ministra Edukacji i Nauki prof.\u00a0Przemys\u0142awa Czarnka. Nasz\u0105 uroczysto\u015b\u0107 zaszczycili swoj\u0105 obecno\u015bci\u0105: Minister Edukacji i Nauki, Pan prof. Przemys\u0142aw Czarnek, Zast\u0119pca Biura Wojewody Pan Waldemar Podsiad\u0142y reprezentuj\u0105cy Wojewod\u0119 Lubelskiego, Kurator O\u015bwiaty w Lublinie, Pani Teresa Misiuk, Dyrektor Oddzia\u0142u Instytutu Pami\u0119ci Narodowej Pan dr Robert Derewenda, Zast\u0119pca Prezydenta Miasta Lublin Pan dr Mariusz Banach, Dyrektor Departamentu O\u015bwiaty i Wychowania Urz\u0119du Miasta Lublin Pani Ewa Dumkiewicz-Sprawka, Przewodnicz\u0105cy Zarz\u0105du Regionu \u015arodkowo-Wschodniego NSZZ \"Solidarno\u015b\u0107 \" Pan Marian Kr\u00f3l, Zast\u0119pca Przewodnicz\u0105cego Zarz\u0105du Regionu \u015arodkowo \u2013 Wschodniego NSZZ \"Solidarno\u015b\u0107 \" Pan Marek W\u0105torski oraz Przewodnicz\u0105ca regionalnej sekcji O\u015bwiaty Regionu \u015arodkowo \u2013 Wschodniego NSZZ \"Solidarno\u015b\u0107 \" NSZZ \"Solidarno\u015b\u0107 \" Pani Wies\u0142awa Stec. Mieli\u015bmy te\u017c zaszczyt i przyjemno\u015b\u0107 go\u015bci\u0107 Pani\u0105 Halin\u0119 Czarneck\u0105, bratow\u0105 porucznika Feliksa Czarneckiego \u2013 patrona naszego D\u0119bu Katy\u0144skiego",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X39.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X40.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X41.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X42.jpg"
          ]
        },
        {
          "text": "Narodowe CzytanieW roku szkolnym 2016/2017 w\u0142\u0105czyli\u015bmy si\u0119 do akcji Narodowego Czytania. Podczas uroczysto\u015bci rozpocz\u0119cia nowego roku szkolnego nauczyciele przeczytali fragmenty \"Quo vadis\" Henryka Sienkiewicza. Akcj\u0119 koordynowa\u0142a p. Beata Kopycka. Rok szkolny 2017/2018 zainaugurowali\u015bmy wsp\u00f3lnym czytaniem \"Wesela \" Stanis\u0142awa Wyspia\u0144skiego. Po raz drugi nasza szko\u0142a w\u0142\u0105czy\u0142a si\u0119 do akcji Narodowego Czytania klasyki literatury polskiej pod honorowym patronatem Pary Prezydenckiej \u2013 Pana Andrzeja Dudy i Pani Agaty Kornhauser-Dudy. Czytali Dyrektorzy, nauczyciele i uczniowie. Osoby, kt\u00f3re przynios\u0142y prywatne egzemplarze dramatu Stanis\u0142awa Wyspia\u0144skiego otrzyma\u0142y pami\u0105tkow\u0105 piecz\u0119\u0107 Czytania 2017 r. Ca\u0142o\u015b\u0107 przygotowa\u0142a p. Beata Kopycka",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 364.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 365.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 366.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 311.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 312.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 313.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 314.jpg"
          ]
        },
        {
          "text": "W 2019 r. lektur\u0105 Narodowego Czytania by\u0142y nowele polskie \u2013 zbi\u00f3r 8 utwor\u00f3w autorstwa Elizy Orzeszkowej, Marii Konopnickiej, Boles\u0142awa Prusa, Brunona Schulza, W\u0142adys\u0142awa Stanis\u0142awa Reymonta, Stefana \u017beromskiego, Henryka Sienkiewicza i Henryka Rzewuskiego. Akcj\u0119 koordynowa\u0142a p. Beata Kopycka. W 2020 r. czytali\u015bmy on-line \"Balladyn\u0119 \" Juliusza S\u0142owackiego. W 2021r. lektur\u0105 by\u0142a \"Moralno\u015b\u0107 Pani Dulskiej \" Gabrieli Zapolskiej. W 2022r. \u2013 \"Ballady i Romanse \" Adama Mickiewicza. Akcj\u0119 koordynowa\u0142a p. Marta Gawe\u0142. W 2023r. czytali\u015bmy \"Nad Niemnem \" Elizy Orzeszkowej. Akcj\u0119 koordynowa\u0142ay p. Beata Kopycka i p. Marta Gawe\u0142",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X3.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X4.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X5.jpg"
          ]
        },
        {
          "text": "Z okazji walentynek 10 lutego 2023r. przedstawiony zosta\u0142 monta\u017c s\u0142owno-muzyczny \"Mi\u0119dzykulturowe dialogi walentynkowe. Co w sercu piszczy\u2026 \". Uczniowie zaprezentowali wyb\u00f3r powsta\u0142ych w kilku j\u0119zykach wierszy i piosenek, kt\u00f3rych motywem przewodnim by\u0142a mi\u0142o\u015b\u0107. Z utwor\u00f3w, takich jak: \"Another love \" T. Odella, \"Rozmowa liryczna \" K. I. Ga\u0142czy\u0144skiego, \"Love me tender \" E. Presleya, \"Anmutiger Vertrag \" C. Morgensterna, \"Wszelka liczba \" T. R\u00f3\u017cyckiego, \"Chcia\u0142bym umrze\u0107 z mi\u0142o\u015bci \" Myslovitz, \"Odk\u0105d ci\u0119 pozna\u0142am\u2026 \" H. Po\u015bwiatowskiej czy \"Andrzeli \" Nocnego Kochanka, dowiedzieli\u015bmy si\u0119, jakie s\u0105 fazy, objawy i skutki bycia zakochanym. Monta\u017c przygotowa\u0142y: p. Marta Gawe\u0142, p. Maria Helman, p Dorota Kr\u00f3l i p. Urszula Klucha",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X57.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X58.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X59.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X60.jpg"
          ]
        },
        {
          "text": "W dniu 04.10.2023 r. obchodzili\u015bmy w LCKZiU Europejski Dzie\u0144 J\u0119zyk\u00f3w Obcych. Na d\u0142ugich przerwach \"\u017cyli\u015bmy \" j\u0119zykami obcymi. M\u0142odzie\u017c przygotowa\u0142a MN\u00d3STWO przepysznych smako\u0142yk\u00f3w inspirowanych potrawami i przek\u0105skami typowymi dla kraj\u00f3w niemiecko- i angloj\u0119zycznych. D\u0142ugie przerwy up\u0142ywa\u0142y w rytmie ameryka\u0144skich, angielskich i niemieckich przeboj\u00f3w. Prawie ca\u0142a spo\u0142eczno\u015b\u0107 naszej szko\u0142y gremialnie uczestniczy\u0142a w konkursach, quizach i zabawach j\u0119zykowych, maj\u0105cych na celu pog\u0142\u0119bianie znajomo\u015bci kultury poszczeg\u00f3lnych kraj\u00f3w",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X10.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X11.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X12.jpg"
          ]
        },
        {
          "text": "Akcja \"Polacy – Rodakom \" - Od 2013 roku spo\u0142eczno\u015b\u0107 naszej szko\u0142y bierze udzia\u0142 w akcji charytatywnej zainicjowanej przez senatora Stanis\u0142aw Gogacza. Pomoc skierowana jest do ubogich rodzin polskich zamieszkuj\u0105cych na terenie Ukrainy. W naszej szkole w grudniu odbywaj\u0105 si\u0119 uroczyste spotkania b\u0119d\u0105ce podsumowaniem akcji w danym roku. Co roku uczniowie poszczeg\u00f3lnych klas przygotowuj\u0105 paczki. Od 2015 roku w pomieszczeniach warsztat\u00f3w szkolnych pakowane s\u0105 przez wolontariuszy akcji setki paczek. W tych pracach pomagaj\u0105 tak\u017ce nasi uczniowie. Na terenie LCKZiU akcj\u0119 koordynuj\u0105 nauczyciele: Katarzyna Bugaj, Bo\u017cena Gabry\u015b- Szuli\u0144ska, Wies\u0142awa Tarasi\u0144ska",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 262.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 263.jpg"
          ]
        },
        {
          "text": "Liga SumiBOTÓW - pomys\u0142 na zorganizowanie Turnieju Gimnazjalnej Ligi SumiBOT\u00d3W powsta\u0142 po tym, jak 27 pa\u017adziernika 2010 r. w Lubelskim Centrum Edukacji Zawodowej przy ul. Magnoliowej 8 odby\u0142 si\u0119 \"Wiecz\u00f3r SumiBOT\u00d3W\". Turniej by\u0142 przeznaczony dla gimnazjalist\u00f3w i ma na celu przede wszystkim zainteresowanie mechatronik\u0105, promowanie nowoczesnych technologii oraz robotyki, a tak\u017ce dobrej zabawy i rywalizacji w duchu fair play. Turnieje Gimnazjalnej Ligi SumiBOT\u00d3W odbywa\u0142y si\u0119 systematycznie 4 razy w roku szkolnym. W rozgrywkach bra\u0142y udzia\u0142 dru\u017cyny m.in. z: Gimnazjum im. J\u00f3zefa Pi\u0142sudskiego w Jastkowie, Gimnazjum nr 3 w Lublinie, Gimnazjum nr 6 w Lublinie, Gimnazjum z \u0141ucki, Gimnazjum nr 19 w Lublinie, Gimnazjum w Sahryniu, Gimnazjum im. \u015aw. Stanis\u0142awa Kostki w Lublinie. Gospodarzami s\u0105 uczniowie LCKZiU, bior\u0105 udzia\u0142 w konkursie poza punktacj\u0105. Rok szkolny 2016/2017",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 512.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 513.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 514.jpg"
          ]
        },
        {
          "text": "Wyjazdy integracyjne klas ,wycieczki",
          "images": []
        },
        {
          "text": "Klasa I TA na wycieczce z Zwierzy\u0144cu (2013/2014)",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 444.jpg"
          ]
        },
        {
          "text": "Rok szkolny 2015/2016",
          "images": []
        },
        {
          "text": "Klasa III TA na paint ball oraz integracja przy ognisku - wychowawczyni p. Dorota Kr\u00f3l, klasa III TA",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 443.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 293.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 294.jpg"
          ]
        },
        {
          "text": "Uczniowie klasy I TC wzi\u0119li udzia\u0142 w wyje\u017adzie integracyjnym do o\u015brodka wypoczynkowo-sportowego LCKZiU nad jeziorem Piaseczno. Zaj\u0119cia integracyjne przeprowadzili (z pomoc\u0105 wychowawcy klasy, Paw\u0142em W\u0142oskiem oraz nauczycielem W-F, Maciejem Powa\u0142\u0105-Nied\u017awieckim) pedagog szkolny Helena Flisiak i doradca zawodowy Miros\u0142aw G\u00f3rczy\u0144ski",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 367.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 368.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 369.jpg"
          ]
        },
        {
          "text": "Rok szkolny 2017/ 2018",
          "images": []
        },
        {
          "text": "21 wrze\u015bnia klasy pierwsze: 1TB, 1TCI oraz 1TI wraz ze swoimi wychowawczyniami: p.Wies\u0142aw\u0105 Tarasi\u0144sk\u0105, p. Dorot\u0105 Kr\u00f3l, p. Agnieszk\u0105 Kowalsk\u0105 oraz z p. Cezarym Wawszczakiem uczestniczy\u0142y w wyje\u017adzie integracyjnym do Starej Jedlanki. Pogoda nie by\u0142a \u0142askawa. Jednak\u017ce ani ch\u0142\u00f3d, ani przelotny deszczyk nie przeszkodzi\u0142y ch\u0119tnym w pokonaniu wybranej trasy w Parku Linowym o\u015brodka \"Le\u015bna Ryba \". Cz\u0119\u015b\u0107 uczestnik\u00f3w wola\u0142a zagra\u0107 w bilard lub w pi\u0142k\u0119 no\u017cn\u0105",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 301.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 304.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 305.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 306.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 307.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 308.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 322.jpg"
          ]
        },
        {
          "text": "27 wrze\u015bnia dwie klasy \"mechatronika \" 1TA i 2TA przebywa\u0142y wraz z wychowawcami p. Kamilem Michoniem oraz p. Miros\u0142awem Mazurem na wycieczce integracyjnej w Jedlance Starej",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 298.png",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 299.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 300.jpg"
          ]
        },
        {
          "text": "W dniu 23 wrze\u015bnia uczniowie klas 1TC i 1TI pod opiek\u0105 wychowawc\u00f3w p. Doroty Kr\u00f3l i p. Agnieszki Kowalskiej oraz pedagoga szkolnego p. Marzeny Gruszki uczestniczyli w zaj\u0119ciach integracyjnych w o\u015brodku wypoczynkowym LCKZiU nad Jeziorem Piaseczno.",
          "images": []
        },
        {
          "text": "Rok szkolny 2018/2019",
          "images": []
        },
        {
          "text": "W dniu 28 wrze\u015bnia klasy 1 TB i 2 TB przebywa\u0142y pod opiek\u0105 wychowawczy\u0144- p.Wies\u0142awy Tarasi\u0144skiej i p. Katarzyny Bugaj oraz p. Urszuli Kluchy na wycieczce integracyjnej w o\u015brodku MAKADAN w Janowie Lubelskim",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X73.jpg"
          ]
        },
        {
          "text": "Rok szkolny 2022/2023",
          "images": []
        },
        {
          "text": "Integracyjny wyjazd klasy I TD nad Jezioro Piaseczno. W wyprawie nad Jezioro Piaseczno wzi\u0119\u0142o udzia\u0142 21 uczni\u00f3w klasy I TD wraz z wychowawc\u0105 Mariuszem Ka\u0142u\u017c\u0105, pani\u0105 psycholog Anit\u0105 Ward\u0105 i nauczycielem W-F panem Markiem Cie\u015blakiem",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X15.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X16.jpg"
          ]
        },
        {
          "text": "W dniach 24-26 pa\u017adziernika 2022 r. uczniowie z klas 3 TI, 4 TI, 4 TB i 4 TC pod opiek\u0105 p. Mariusza Ka\u0142u\u017cy wzi\u0119li udzia\u0142 w wycieczce w Bieszczady",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X36.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X37.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X38.jpg"
          ]
        },
        {
          "text": "Noc\u0105 3.05 2023r. 51 uczni\u00f3w z klas: 1TA2, 1TI, 2TA2, 2TC, 2TI, 2TA1, 2TB, 3TI, 3TC, 3TB i 3TA pod opiek\u0105 Pa\u0144: Doroty Kr\u00f3l, Marii Helman, Urszuli Kluchy oraz Pana Piotra Kajlewicza wyruszy\u0142o nad polskie morze. Podczas 4 dniowej wycieczki zwiedzili: Trz\u0119sacz, Niechorze, Berlin oraz Toru\u0144",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X44.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X45.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X46.jpg"
          ]
        },
        {
          "text": "Od roku 2010 tradycj\u0105 naszej szko\u0142y sta\u0142y si\u0119 organizowane przez p. Mari\u0119 Helman wraz z wychowawcami klas pierwszych wycieczki programowe do Warszawy szlakiem patrona szko\u0142y Krzysztofa Kamila Baczy\u0144skiego. M\u0142odzie\u017c zwiedza II Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Stefana Batorego, do kt\u00f3rego ucz\u0119szcza\u0142 patron naszej szko\u0142y oraz Cmentarz Wojskowy na Pow\u0105zkach, gdzie uczniowie sk\u0142adaj\u0105 kwiaty na grobie K. K. Baczy\u0144skiego i jego \u017cony Barbary. Wa\u017cnym punktem programu jest zwiedzenie Muzeum Powstania Warszawskiego. W marcu 2012 r. w wycieczce uczestniczyli uczniowie kl . II TA i II TB wraz z opiekunami p. Mari\u0105 Helman, Katarzyn\u0105 Bugaj i Cezarym Wawszczkiem.  Na cmentarzu wojskowym na Pow\u0105zkach przy grobie Barbary i Krzysztofa Baczy\u0144skich",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 352.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 353.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 354.JPG"
          ]
        },
        {
          "text": "W listopadzie 2014 r. w dw\u00f3ch wycieczkach uczestniczyli uczniowie klas : 2 TB i 3 TB wraz z opiekunami \u2013 p. M. Helman, p. W. Tarasi\u0144sk\u0105 i p. A. Fugel oraz Beata Kopyck\u0105, Dorot\u0105 Kr\u00f3l, Maciejem Powa\u0142\u0105- Nied\u017awieckim",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 315.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 316.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 317.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 318.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 319.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 320.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 321.JPG"
          ]
        },
        {
          "text": "Od roku 2010 uczniowie szko\u0142y uczestnicz\u0105 w organizowanych przez NSZZ \"Solidarno\u015b\u0107\" inscenizacjach historycznych wprowadzenia stanu wojennego w Polsce. Udzia\u0142 bierze corocznie oko\u0142o 40-50 os\u00f3b. W Tarnogrodzie w dniach 18\u201319.12.2021 r. odby\u0142y si\u0119 wojew\u00f3dzkie obchody czterdziestej rocznicy wprowadzenia stanu wojennego w Polsce. G\u0142\u00f3wnym punktem by\u0142a inscenizacja pacyfikacji KWK \"Wujek \", w trakcie kt\u00f3rej zgin\u0105\u0142 J\u00f3zef Krzysztof Giza, dwudziestoczteroletni mieszkaniec Tarnogrodu.W rol\u0119 g\u00f3rnik\u00f3w i demonstrant\u00f3w wcieli\u0142a si\u0119 m\u0142odzie\u017c naszej szko\u0142y. Inscenizacja wywo\u0142a\u0142a bardzo du\u017ce wra\u017cenie w\u015br\u00f3d mieszka\u0144c\u00f3w miasta",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 515.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 516.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 517.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X49.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X50.jpg"
          ]
        },
        {
          "text": "Od wielu lat m\u0142odzie\u017c wraz nauczycielami aktywnie uczestniczy w targach prezentuj\u0105c ofert\u0119 edukacyjn\u0105 oraz bogate zaplecze dydaktyczne naszej szko\u0142y. W roku szkolnym 2015/2016 tak wyglądało nasze stanowisko, za które otrzymaliśmy nagrodę",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 390.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 391.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 392.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 393.jpg"
          ]
        },
        {
          "text": "Od pa\u017adziernika 2022 w LCKZiU dzia\u0142a Szkolne Ko\u0142o Caritas, kt\u00f3rego opiekunem jest p. D.Huszaluk. Organizował takie akcje jak Dzień Dobra czy charytatywny kiermasz ciast",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X66.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X67.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X68.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X69.jpg"
          ]
        },
        {
          "text": "Od roku 2008 w szkole organizowane s\u0105 cykliczne zawody w wyciskaniu na \u0142aweczce. W cyklu trzech turniej\u00f3w w danym roku szkolnym wy\u0142aniani s\u0105 medali\u015bci mistrzostw LCKZiU. Wszyscy uczestnicy otrzymuj\u0105 pami\u0105tkowe puchary, dyplomy i medale.",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 638.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 639.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 640.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 641.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 642.jpg"
          ]
        },
        {
          "text": "Nauczyciele wychowania fizycznego corocznie organizuj\u0105 zawody o mistrzostwo szko\u0142y w tenisie sto\u0142owym . Ka\u017cdorazowo startuje du\u017ca grupa uczni\u00f3w (ponad 50), a tak\u017ce nauczyciele szko\u0142y",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 643.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 644.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 658.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 659.jpg"
          ]
        },
        {
          "text": "Od wielu lat organizowane s\u0105 mistrzostwa szko\u0142y w pi\u0142ce halowej. Startuj\u0105 reprezentacje wielu klas. Zawody gromadz\u0105 na sali gimnastycznej oko\u0142o stu uczestnik\u00f3w tej okazji",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 645.jpg"
          ]
        },
        {
          "text": "\"Drużynowe Mistrzostwa Lublina Szkół Średnich w tenisie stołowym (Licealiada)\" - 28 marca 2023. Uczniowie naszej szko\u0142y uplasowali si\u0119 tu\u017c za podium na 4 miejscu. Nasz\u0105 szko\u0142\u0119 reprezentowali Jan i Piotr Matyjaszczyk. Opiekun S\u0142awomir Kotko.",
          "images": []
        },
        {
          "text": "W szkole powsta\u0142 Szkolny Klub Wolontariatu. Uczniowie pomagaj\u0105 w du\u017cych imprezach sportowych organizowanych w Lublinie. Mi\u0119dzy innymi uczestniczyli we wszystkich sze\u015bciu (2013-2018) maratonach lubelskich, p\u00f3\u0142maratonie \"Solidarno\u015bci\"(2013-2018), Mili Pami\u0119ci Ofiar Komunizmu, Biegu Nieustraszonych, Akademickich Mistrzostwach Polski w p\u0142ywaniu i lekkoatletyce, Mili na Start, P\u00f3\u0142maratonie Lubelskim. Wrzesień 2023 r.- uczniowie LCKZiU pomagali w organizacji \"8 Mili Pamięci Ofiar Komunizmu\"",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 646.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 647.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 648.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 649.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X18.jpg"
          ]
        },
        {
          "text": "Uczniowski Klub Sportowy \"Magnoliowa\" istniej\u0105cy w naszej szkole organizuje od roku 2008 sp\u0142ywy kajakowe rzekami Lubelszczyzny. M\u0142odzie\u017c pod opiek\u0105 instruktor\u00f3w kajakarstwa Macieja Powa\u0142y -Nied\u017awieckiego, Dariusza Winiarczyka i S\u0142awomira Kotko p\u0142ywa Wieprzem, Tanwi\u0105 i Bystrzyc\u0105 w sp\u0142ywach jedno i wielodniowych",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 324.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 652.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 302.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 303.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 653.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 650.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 651.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X13.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X14.jpg"
          ]
        },
        {
          "text": "\"Licealiada Szkolna liga lekkoatletyczna\" - rok szkolny 2023/2024 - nasi uczniowie pod opiek\u0105 nauczyciela wychowania fizycznego Pana Piotra Szali\u0142owa godnie reprezentowali szko\u0142\u0119 walcz\u0105c w poszczeg\u00f3lnych konkurencjach",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X17.jpg"
          ]
        },
        {
          "text": "W 2017 roku Damian Mazu\u015b, ucze\u0144 klasy III TB startowa\u0142 w dw\u00f3ch fina\u0142ach mistrzostw Polski w rugby. W obu zdoby\u0142 medale. Br\u0105zowy w odmianie siedmioosobowej, srebrny na Og\u00f3lnopolskiej Olimpiadzie M\u0142odzie\u017cy",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 297.jpg"
          ]
        },
        {
          "text": "Rozdanie nagr\u00f3d w konkursie informatycznym dla gimnazjalist\u00f3w \u2013 kwiecie\u0144 2016",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 453.JPG"
          ]
        },
        {
          "text": "Nasza szko\u0142a uczestniczy w wielu projektach zagranicznych. W latach 2013-2015 realizowany by\u0142 projekt Comenius PRIME Integracja i Migracja w Europie.",
          "images": []
        },
        {
          "text": "Maj\u0105c na uwadze polityczne, ekonomiczne, spo\u0142eczne i kulturowe r\u00f3\u017cnice mi\u0119dzy poszczeg\u00f3lnymi regionami uczniowie szk\u00f3\u0142 partnerskich z Hiszpanii, Niemiec, W\u0142och, Grecji, Turcji opracowali materia\u0142y, w kt\u00f3rych zawarli przyczyny i skutki migracji w poszczeg\u00f3lnych regionach oraz wyci\u0105gn\u0119li wnioski nakierowane na integracj\u0119. Wyniki pracy region\u00f3w partnerskich by\u0142y analizowane i sprawdzane pod k\u0105tem mo\u017cliwo\u015bci wcielenia ich w \u017cycie w innym regionie partnerskim. Koordynatorem by\u0142 pan Dariusz Hryciuk, a nast\u0119pnie pani Agnieszka Kowalska, nauczyciele wsp\u00f3\u0142pracuj\u0105cy: pani Bo\u017cena Gabry\u015b - Szuli\u0144ska, pani Katarzyna Bugaj i pani Dorota Kr\u00f3l.",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P1.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P2.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P3.jpg"
          ]
        },
        {
          "text": "Erasmus+ Pierwszy cel Europy 2020: Walka z bezrobociem realizowany w latach 2015-2017. Uczniowie bior\u0105cy udzia\u0142 w projekcie maj\u0105 za zadanie zbada\u0107 przyczyny i skutki bezrobocia zar\u00f3wno w regionach/krajach partnerskich, jak i kontek\u015bcie ca\u0142ej Unii Europejskiej. Uczniowie, pracuj\u0105c w grupach narodowych i mi\u0119dzynarodowych, badali wy\u017cej wymienione zagadnienia bior\u0105c pod uwag\u0119 wielo\u015b\u0107 aspekt\u00f3w zale\u017cno\u015bci cz\u0142owieka i rynku pracy (np. wiek, p\u0142e\u0107, wykszta\u0142cenie, \u015brodowisko, spo\u0142eczne, niepe\u0142nosprawno\u015b\u0107, wyznanie).Koordynatorem by\u0142a pani Agnieszka Kowalska, nauczyciele wspomagaj\u0105cy: pani Bo\u017cena Gabry\u015b - Szuli\u0144ska, pani Katarzyna Bugaj i pani Dorota Kr\u00f3l.",
          "images": []
        },
        {
          "text": "W projekcie wzi\u0119li udzia\u0142 uczniowie ze szk\u00f3\u0142 partnerskich: Institut Lacetania \u2013 Manresa (Hiszpania) \u2013 szko\u0142a koordynuj\u0105ca, Lubelskie Centrum Kszta\u0142cenia Zawodowego i Ustawicznego (Polska), Kaufm\u00e4nnische Schule Goeppingen (Niemcy), Liceo scientifico Morgagni \u2013 Rzym (W\u0142ochy), 3rd GENERAL LYCEUM OF KAVALA \u2013 Trzecie liceum w Kavali (Grecja), T.C. Milli Egitim Bakanligi (Turcja). Spotkania projektowe w Manresie w dniach 25 -28 listopada 2015, Kavali 17-20 kwietnia 2016, Lublinie 16-18 października 2016, Rzymie 15-18 lutego 2017, Göppingen 2-5 marca 2016 oraz zakończenie projektu",

          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P5.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P6.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P7.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P8.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P9.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 452.JPG"
          ]
        },
        {
          "text": "Erasmus+ \"Spo\u0142eczna Europa 2020: walka z wykluczeniem spo\u0142ecznym i ub\u00f3stwem w Unii Europejskiej \" realizowany w latach 2017-2019. Wyb\u00f3r tematu projektu podyktowany jest wzrostem liczby obywateli pa\u0144stw UE, kt\u00f3rzy \u017cyj\u0105 w ub\u00f3stwie lub s\u0105 nim zagro\u017ceni. Szacuje si\u0119, \u017ce do 2020 roku co czwarty obywatel UE b\u0119dzie zagro\u017cony bied\u0105 lub wykluczeniem spo\u0142ecznym.Celem projektu jest rozwijanie i pog\u0142\u0119bianie \u015bwiadomo\u015bci uczni\u00f3w na temat problemu ub\u00f3stwa w r\u00f3\u017cnych krajach Europy, doskonalenie kompetencji j\u0119zykowych, doskonalenie umiej\u0119tno\u015bci my\u015blenia krytycznego i my\u015blenia tw\u00f3rczego oraz umiej\u0119tno\u015bci interpersonalnych, promowanie w\u015br\u00f3d uczni\u00f3w warto\u015bci i zasad takich jak r\u00f3wno\u015b\u0107 spo\u0142eczna, sp\u00f3jno\u015b\u0107, przeciwdzia\u0142anie wykluczeniu spo\u0142ecznemu, wzmocnienie poczucia posiadania wsp\u00f3lnych cel\u00f3w i przynale\u017cno\u015bci do wsp\u00f3lnoty obywateli Unii Europejskiej. W ramach projektu odby\u0142o si\u0119 do tej pory jedno spotkanie, w kt\u00f3rym brali udzia\u0142 nauczyciele.Koordynatorem by\u0142a pani Agnieszka Kowalska, nauczyciele wspomagaj\u0105cy: pani Dorota Kr\u00f3l i pan Pawe\u0142 W\u0142osek. Hiszpania - Manresa 15-17 listopad 2017",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P10.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P11.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. P12.jpg"
          ]
        },
        {
          "text": "Projekt \"Bli\u017cej Europejskiego Rynku Pracy \" IVT. Projekt \"Bli\u017cej Europejskiego Rynku Pracy \" realizowany by\u0142 w ramach projektu \"Sta\u017ce i praktyki zagraniczne dla os\u00f3b kszta\u0142c\u0105cych si\u0119 i szkol\u0105cych zawodowo \" wsp\u00f3\u0142finansowanego przez FRSE w ramach Europejskiego Funduszu Spo\u0142ecznego \u2013 Programu Operacyjnego Kapita\u0142 Ludzki na zasadach Programu Leonardo da Vinci b\u0119d\u0105cego cz\u0119\u015bci\u0105 Programu ,,Uczenie si\u0119 przez ca\u0142e \u017cycie \". W trakcie trwania projektu od 01.09. 2013- 28.02.2015, uczniowie wyje\u017cd\u017cali w dw\u00f3ch terminach na praktyki do Niemiec: 1. Grupa mechatronik\u00f3w: 16.06.-04.07.2014 - 3 uczni\u00f3w. 2. Grupa informatyk\u00f3w i technik\u00f3w cyfrowych proces\u00f3w graficznych: 19.01-06.02.15 - 4 uczni\u00f3w. Zaj\u0119cia obydwu grup poprzedzone by\u0142y dodatkowymi zaj\u0119ciami j\u0119zykowymi z j\u0119zyka angielskiego i niemieckiego w Polsce. Zaj\u0119cia j\u0119zykowe prowadzi\u0142y pani Wies\u0142awa W\u0105sik oraz pani Anna Fugel. Koordynatorem projektu by\u0142a pani Wies\u0142awa W\u0105sik, nauczycielem wspomagaj\u0105cym by\u0142a pani Anna Fugel",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 523.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 524.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 525.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 526.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 527.jpg"
          ]
        },
        {
          "text": "Konkurs w ramach projektu \"Niemiecki ma klas\u0119 / Deutsch hat Klasse \" prowadzonego przez Instytucie Goethego w Warszawie i realizowanego w naszej szkole w roku szkolnym 2016/2017. Zadanie konkursowe polega\u0142o na tym, by wsp\u00f3lnie zastanowi\u0107 si\u0119, jak powinna wygl\u0105da\u0107 optymalna sala lekcyjna do nauki j\u0119zyka niemieckiego i wprowadzi\u0107 takie zmiany, kt\u00f3re sprawi\u0105, \u017ce przebywaj\u0105cy w niej uczniowie i nauczyciel b\u0119d\u0105 czu\u0107 si\u0119 komfortowo, a aran\u017cacja klasy u\u0142atwi nauk\u0119. W ramach tego zadania zosta\u0142a wyremontowana sala do nauki j\u0119zyka niemieckiego w naszej szkole.Patronat honorowy nad projektem obj\u0105\u0142 Minister Edukacji Narodowej, a partnerem projektu jest O\u015brodek Rozwoju Edukacji w Warszawie. Instytucj\u0105 wspieraj\u0105c\u0105 projekt jest Ministerstwo Spraw Zagranicznych Republiki Federalnej Niemiec. Koordynatorem projektu by\u0142a pani Wies\u0142awa W\u0105sik, nauczyciele wspomagaj\u0105cy - pani Anna Fugel, pani Bo\u017cena Gabry\u015b \u2013 Szuli\u0144ska.Uczestnicy projektu: uczniowie klasy II TA ",

          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 528.png"
          ]
        },
        {
          "text": "Polsko \u2013 niemiecka wymiana m\u0142odzie\u017cy w ramach projektu \"Razem osi\u0105gniemy wi\u0119cej \u2013 teraz zawodowo \". Wymiana uczniowska odbywa si\u0119 ze szko\u0142\u0105 w Geldern- Berufskolleg. Uczniowie, kt\u00f3rzy brali udzia\u0142 w pierwszym etapie wymiany i przez tydzie\u0144 przebywali w Hirschluch w plac\u00f3wce kszta\u0142ceniowej opowiedzieli i swoich wra\u017ceniach, a tak\u017ce zaprezentowali filmy dokumentuj\u0105ce ich dzia\u0142ania. Drugim przedsi\u0119wzi\u0119ciem by\u0142 wielostronny mi\u0119dzynarodowy projekt Erasmus + \"Spo\u0142eczna Europa 2020: walka z wykluczeniem spo\u0142ecznym i ub\u00f3stwem w Unii Europejskiej \".Projekt rozpocz\u0105\u0142 si\u0119 1 wrze\u015bnia 2017 r. a zako\u0144czy si\u0119 31 sierpnia 2019 r.",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X74.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X75.jpg"
          ]
        },
        {
          "text": "Dziesi\u0119ciu uczni\u00f3w z Niemiec ze szko\u0142y w Geldern wraz z opiekunami w dniach 21-28.05.2023 przyjecha\u0142o do Lublina, aby ponownie spotka\u0107 si\u0119 z uczniami z LCKZiU i zrealizowa\u0107 wcze\u015bniej ustalony program w ramach projektu wsp\u00f3\u0142finansowanego ze \u015brodk\u00f3w Polsko Niemieckiej Wsp\u00f3\u0142pracy M\u0142odzie\u017cy oraz wp\u0142at rodzic\u00f3w. Podczas tego tygodnia go\u015bcie odwiedzili dwie firmy znajduj\u0105ce si\u0119 na terenie Lublina: w\u0142osk\u0105 firm\u0119 produkuj\u0105c\u0105 felgi do samochod\u00f3w \u2013 MW POLAND Sp. z o.o. oraz niemieck\u0105 firm\u0119 produkuj\u0105c\u0105 nap\u0119dy silnikowe \u2013 ABM Greiffenberger Polska Sp. z o.o. Wybrali si\u0119 r\u00f3wnie\u017c razem na wycieczk\u0119 do Warszawy. W naszej szkole wzi\u0119li udzia\u0142 w lekcjach z j\u0119zyka niemieckiego zawodowego, warsztatach graficznych z wykorzystaniem oprogramowania CorelDraw, warsztatach mechanicznych na obrabiarce CNC oraz warsztatach w pracowni mechatronicznej. W czasie tego tygodnia pokazano im Lublin. W ramach zaj\u0119\u0107 integracyjnych odby\u0142y si\u0119: mecz siatk\u00f3wki, pi\u0142ki noznej, wyj\u015bcie do kr\u0119gielni, wsp\u00f3lna gra w bilard, wyjazd na kajaki i grillowanie nad Zalewem Zemborzyckim. Go\u015bcie spotkali si\u0119 r\u00f3wnie\u017c z Wiceprezydentem Miasta Lublina Panem Mariuszem Banachem, kt\u00f3remu przekazano pozdrowienia od burmistrza Geldern Pana Svena Kaisera. Na trzy dni do go\u015bci do\u0142\u0105czy\u0142 r\u00f3wnie\u017c Dyrektor Berufskolleg w Geldern Pan Andreas Boland, kt\u00f3ry by\u0142 zauroczony Lublinem, obejrza\u0142 szko\u0142\u0119 i zasmakowa\u0142 polskiego jedzenia.",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X27.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X28.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X29.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X30.jpg"
          ]
        },
        {
          "text": "Uczniowie Technikum Mechanicznego osi\u0105gaj\u0105 tak znacz\u0105ce wyniki w nauce, \u017ce otrzymuj\u0105 Stypendia Prezesa Rady Ministr\u00f3w. Za wybitne osi\u0105gni\u0119cia w roku szkolnym 2020/2021 stypendia te otrzymali: Ada Szpakowska z kl. 4 TCI oraz Piotr Matyjaszczyk z kl. 2 TK, w roku szkolnym 2021/2022 zostali uhonorowani: Micha\u0142 Kosi\u0144ski z kl.3TB i Oleksandr Sosnovskyi z kl. 2TI, a roku szkolnym 2022/2023 Micha\u0142 Kosi\u0144ski z kl. 4 TB i Oleksander Sosnovskyi z kl. 3 TI",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X90.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X91.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X92.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X93.jpg"
          ]
        },
        {
          "text": "W roku 2017 troje naszych uczni\u00f3w: Aleksandra St\u0119pniak \u2013 kl.3 TC, Maciej Sadowski \u2013 kl. 2TA i Dominik Stachura z kl. 4TB otrzyma\u0142o stypedium w ramach rozpocz\u0119tej rok wcze\u015bniej AKCJI \"Lubelska Ku\u017ania Talent\u00f3w 2019-2021\" realizowanego przez Wojew\u00f3dztwo Lubelskie w ramach 12 Osi Priorytetowej Edukacja, kwalifikacje i kompetencje Dzia\u0142anie 12.4 Kszta\u0142cenie Zawodowe Regionalnego programu operacyjnego Wojew\u00f3dztwa Lubelskiego , wsp\u00f3\u0142finansowanego przez Uni\u0119 Europejsk\u0105 w ramach Europejskiego Funduszu Spo\u0142ecznego. W roku 2018 Maciej Sadowski z kl. 3 TA poraz kolejny zosta\u0142 stypendyst\u0105 Lubelskiej Ku\u017ani Talent\u00f3w. W roku 2019 stypendium otrzymuj\u0105 Maciej Sadowski z kl. 3 TA poraz trzeci, a tak\u017ce Piotr Czarnecki z kl. 1 TA, Filip Golczewski kl.1 TC, Mateusz Dudziak kl. 2 TI, Jakub Furdel kl. 2 TI, Kamil Kamieniak kl. 3 TI, Ada Szpakowska kl. 3 TI, Alicja Sadowska 3 TCI i Paulina Pazur z kl. 2 BA. W roku szkolnym 2020/21 stypendium otrzymuj\u0105 Kamil Kamieniak z kl. 4TI, Ada Szpakowska z kl. 4TCI, Alicja Sadowska z kl. 4TCI, Szymon Grzeszczak z kl. 2 TK, Konrad Wo\u0142odkiewicz z kl. 1 TI i Paulina Pazur z kl. 3 BA Bran\u017cowej Szko\u0142y Wielozawodowej. 6 uczni\u00f3w Technikum Mechanicznego i Bran\u017cowej Szko\u0142y Wielozawodowej I stopnia nr 1. W roku szkolnym 2021/2022 16 uczni\u00f3w Technikum Mechanicznego znalaz\u0142o si\u0119 na li\u015bcie zwyci\u0119zc\u00f3w tego programu stypendialnego: Szymon Besztak kl. 3TI, Justyna Brzozowska kl. 3TC, Filip Golczewski kl. 3TC, Rafa\u0142 Golczewski kl. 3 TN, Szymon Kazimierczak kl. 3 TM, Mateusz Korzon kl. 2TA, Micha\u0142 Kosi\u0144ski kl. 3 TB, Jacek Leniart kl. 2 TC, Dawid Olek kl. 4TB, Oleksandr Sosnovskyi kl. 2 TI, Micha\u0142 Stanicki kl. 4 TI, Damian Szyszko kl. 4 TA, Jakub W\u00f3jciak kl. 3 TC, Krystian Zbaradzki kl. 3 TB, Jakab \u0141uka kl. 4 TA, Kacper \u017bydek kl. 4 TB",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X94.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X95.jpg"
          ]
        },
        {
          "text": "Od 2006 r. uczniowie naszej szko\u0142y bior\u0105 udzia\u0142 w Mi\u0119dzyszkolnym Konkursie Zawodowym \"Rok przed dyplomem \" organizowanym przez lubelskie Samorz\u0105dowe Centrum Doskonalenia Nauczycieli i doradc\u00f3w metodycznych miasta Lublin. Konkurs adresowany jest dla uczni\u00f3w klas trzecich technikum.Celem jego jest rozwijanie umiej\u0119tno\u015bci zawodowych, utrwalenie procedur egzaminacyjnych oraz sprawdzenie wiedzy przed egzaminem zawodowym. Nasi uczniowie prezentuj\u0105 nast\u0119puj\u0105ce zawody: technik mechanik, technik mechatronik, technik informatyk. Ka\u017cdego roku zostaj\u0105 laureatami zajmuj\u0105c pierwsze , drugie i trzecie miejsca. Patronat nad konkursem sprawuj\u0105: Marsza\u0142ek Wojew\u00f3dztwa Lubelskiego, Lubelski Kurator O\u015bwiaty, Prezydent Miasta Lublin, Rektor Politechniki Lubelskiej, Polskie Towarzystwo Informatyczne. 7 maja 2015 r. odby\u0142 - IX konkurs \"Rok przed dyplomem \". W zawodzie technik mechanik kwalifikacja M.20 I miejsce \u2013 Cezary Szyma\u0144ski klasa 3TA,III miejsce \u2013 Stanis\u0142aw Walczak klasa 3TA. W zawodzie technik mechatronik kwalifikacja E18 II miejsce zdoby\u0142 Przemys\u0142aw Stronikowski klasa 3TA, III miejsce \u2013 \u0141ukasz G\u0105siorowski klasa 3TA. W zawodzie technik informatyk wyr\u00f3\u017cnienie otrzyma\u0142 Przemys\u0142aw Mazur klasa 3TB.",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 282.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 283.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 663.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 664.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 665.jpg"
          ]
        },
        {
          "text": "W 2019 r. w Konkursie na etapie regionalnym uczniowie naszej szko\u0142y osi\u0105gn\u0119li nast\u0119puj\u0105ce wyniki: Maciej Armaci\u0144ski w zawodzie technik informatyk, Micha\u0142 Ga\u0142\u0105zka w zawodzie technik mechatronik, Pawe\u0142 Polak w zawodzie technik mechanik. W 2020r. W Konkursie na etapie regionalnym uczniowie naszej szko\u0142y osi\u0105gn\u0119li nast\u0119puj\u0105ce wyniki. Technik mechanik \u2013 kwalifikacja MG.19: Jakub K\u0142os \u2013 I miejsce oraz Jakub Oko\u0144 - II miejsce. Technik mechatronik \u2013 kwalifikacja EE.02: Marek Fenert, Grzegorz Paluch \u2013 wyr\u00f3\u017cnienie. Technik Informatyk \u2013 kwalifikacja EE.08: Mateusz Fedor - wyr\u00f3\u017cnienie. W 2021r. W Konkursie na etapie regionalnym uczniowie naszej szko\u0142y osi\u0105gn\u0119li nast\u0119puj\u0105ce wyniki. Technik mechanik \u2013 kwalifikacja MG.19: Kacper \u017bydek kl. 3 TB \u2013 II miejsce, Aleksander Kope\u0107, Winiarczyk Maciej kl. 3TB \u2013 III miejsce. Technik mechatronik \u2013 kwalifikacja EE.02: \u0141uka Jakub, Szyszko Damian \u2013 kl. 3TA \u2013 I miejsce. Technik informatyk \u2013 kwalifikacja EE.08: Micha\u0142 Stanicki kl. 3 TI- wyr\u00f3\u017cnienie. W 2022r. w XVI edycji konkursu w etapie regionalnym uczniowie naszej szko\u0142y reprezentowali nast\u0119puj\u0105ce zawody: technik informatyk \u2013 kwalifikacja INF.02, technik mechanik \u2013 kwalifikacja MEC.05,technik mechatronik \u2013 kwalifikacja ELM.03. Zaj\u0119li nast\u0119puj\u0105ce miejsca. Technik informatyk (INF.02): Szymon Besztak, kl. 3 TI \u2013 III miejsce. Technik mechanik (MEC.05): Wojciech Ba\u0142abuszek kl. 3TL \u2013 II miejsce. Technik mechatronik (ELM.03): Szymon Grzeszczak, kl.3TK \u2013 wyr\u00f3\u017cnienie. W 2023 roku laureatami w zawodzie technik mechanik zostali: Wojciech Ba\u0142abuszek, Adrian Hablak, Igor G\u0105sior, w zawodzie technik mechatronik: Maksymilian Miazek i Szymon Grzeszczak , a w zawodzie technik informatyk: Mateusz Szeptycki i Szymon Szichowicz. 14 laureat\u00f3w etapu centralnego, kt\u00f3rzy zaj\u0119li I miejsce otrzyma\u0142o \"Indeksy Politechniki Lubelskiej \". Cieszymy si\u0119, \u017ce w tej grupie najlepszych znale\u017ali si\u0119 nasi dwaj uczniowie: Wojtek Ba\u0142abuszek z klasy 4TL reprezentuj\u0105cy zaw\u00f3d technik mechanik i Szymon Grzeszczak z klasy 4TK reprezentuj\u0105cy zaw\u00f3d technik mechatronik",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X43.jpg"
          ]
        },
        {
          "text": "W dniach 25\u201326.03.2023 r. w Poznaniu i Berlinie odby\u0142a si\u0119 konsultacja szkoleniowa Kadry Narodowej M\u0119\u017cczyzn U18 w rugby. Zako\u0144czy\u0142o je kontrolne spotkanie z reprezentacj\u0105 Berlina. W zgrupowaniu uczestniczy\u0142 wychowanek Akademii RUGBY Budowlanych Lublin i ucze\u0144 klasy II TC Lubelskiego Centrum Kszta\u0142cenia Zawodowego i Ustawicznego",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X31.jpg"
          ]
        },
        {
          "text": "17.12.2015 r. w Centrum Kultury w Lublinie odby\u0142 si\u0119 fina\u0142 konkursu Innowacje w rolnictwie, kt\u00f3ry zorganizowa\u0142a i przeprowadzi\u0142a Polska Fundacja Dzieci i M\u0142odzie\u017cy. W gronie laureat\u00f3w znalaz\u0142 si\u0119 projekt samojezdnego w\u00f3zka transportowego, wykonanego przez grup\u0119 uczni\u00f3w naszej szko\u0142y w sk\u0142adzie: Mateusz Wolski klasa 4TA, Jakub Czy\u017c oraz Micha\u0142 Budzy\u0144ski klasa 3TA, Grzegorz Ciesielski klasa 2TA, pod kierunkiem nauczyciela przedmiot\u00f3w elektrycznych i elektronicznych p. Miros\u0142awa Mazura. Za\u0142o\u017ceniem projektu by\u0142o zaprojektowanie i wykonanie zdalnie sterowanego w\u00f3zka, poruszaj\u0105cego si\u0119 samodzielnie tzn. bez udzia\u0142u ludzkich mi\u0119\u015bni, kt\u00f3ry m\u00f3g\u0142by przewie\u017a\u0107 do\u015b\u0107 du\u017cy ci\u0119\u017car (kilkadziesi\u0105t kilogram\u00f3w). W\u00f3zek m\u00f3g\u0142by u\u0142atwi\u0107 prac\u0119 rolnikowi oraz wyr\u0119czy\u0107 go w ci\u0119\u017ckich pracach polowych. Mo\u017ce doskonale sprawdzi\u0107 si\u0119 jako \u015brodek transportu np. ci\u0119\u017ckich skrzynek, koszyk\u00f3w, pojemnik\u00f3w, work\u00f3w podczas zbior\u00f3w polowych owoc\u00f3w i warzyw. 9 lutego, uczniowie naszej szko\u0142y Jakub Czy\u017c z klasy 3TA i Mateusz Wolski z klasy 4TA wraz z nauczycielem-opiekunem Miros\u0142awem Mazurem uczestniczyli w porannym programie TVP Lublin, \"Poranek z Panoram\u0105 \". Udzia\u0142 w programie by\u0142 zwi\u0105zany z realizacj\u0105 projektu",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 295.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 296.jpg"
          ]
        },
        {
          "text": "21 listopada 2016 r. w Sali Kolumnowej Sejmu RP og\u0142oszono wyniki konkursu \"Obrazki z Sienkiewicza \" zorganizowanego przez Parlamentarny Zesp\u00f3\u0142 ds. Dzieci wsp\u00f3lnie z Senack\u0105 Komisj\u0105 Kultury i \u015arodk\u00f3w Przekazu z okazji Roku Henryka Sienkiewicza.W konkursie wzi\u0119\u0142o udzia\u0142 sze\u015bciu uczni\u00f3w naszej szko\u0142y. Wszystkie prace wykonano pod kierunkiem pani Beaty Kopyckiej.Do fina\u0142u og\u00f3lnopolskiego jury Biura Senatorskiego Senatora RP Stanis\u0142awa Gogacza zakwalifikowa\u0142o prac\u0119 plastyczn\u0105 - tryptyk \"Portrety kobiet w Trylogii \" Eweliny Nied\u017awied\u017a z kl. 3B",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 519.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 520.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 521.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 522.jpg"
          ]
        },
        {
          "text": "23 maja 2017 roku w Warszawie podczas Forum Technologii Bankowo\u015bci Sp\u00f3\u0142dzielczej odby\u0142 si\u0119 fina\u0142 og\u00f3lnopolskiego \"Konkursu IT i Cyberbezpiecze\u0144stwa \". 64 uczestnik\u00f3w z ca\u0142ej Polski wy\u0142onionych spo\u015br\u00f3d blisko 3 000 uczni\u00f3w szk\u00f3\u0142 ponagimnazjalnych przez godzin\u0119 odpowiada\u0142o na 45 pyta\u0144 z zakresu gospodarki elektronicznej i cyberbezpiecze\u0144stwa. Ucze\u0144 naszej szko\u0142y Dominik Stachura uzyska\u0142 w tym gronie 8 lokat\u0119 staj\u0105c si\u0119 laureatem konkursu. W czerwcu wzi\u0105\u0142 udzia\u0142 w wizycie studyjnej w Warszawie, podczas kt\u00f3rej odwiedzi\u0142 najwa\u017cniejsze instytucje i firmy zwi\u0105zane z nowoczesnymi technologiami",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 278.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 279.jpg"
          ]
        },
        {
          "text": "Ucze\u0144 klasy graficznej Jakub W\u00f3jciak odni\u00f3s\u0142 znacz\u0105ce sukcesy w konkursach og\u00f3lnopolskich. W 2020 r. zdoby\u0142 III miejsce w Og\u00f3lnopolskim Konkursie Graficznym: \"SAMOTNO\u015a\u0106 XXI w. \". Konkurs, pod patronatem Stowarzyszenia Youth Human Impact, zorganizowa\u0142a grupa uczni\u00f3w z Zespo\u0142u Szk\u00f3\u0142 Fototechnicznych w Warszawie. Celem konkursu by\u0142o rozbudzenie \u015bwiadomo\u015bci spo\u0142ecznej na aspekt samotno\u015bci, a zadanie konkursowe polega\u0142o na wykonaniu grafiki komputerowej lub fotografii odpowiadaj\u0105cej na pytanie: Jak wygl\u0105da samotno\u015b\u0107 w XXI wieku? W konkursie tym wzi\u0119\u0142a r\u00f3wnie\u017c udzia\u0142 uczennica klasy 2TC Justyna Brzozowska .kt\u00f3rej praca zosta\u0142a zosta\u0142a wyr\u00f3\u017cniona \"za nieszablonowe podej\u015bcie do tematu samotno\u015bci, nie tylko w \u015bwiecie ludzi ale r\u00f3wnie\u017c w \u015bwiecie zwierz\u0105t.\"Jak pisze sama Justyna \u2013 \"Praca nawi\u0105zuje do sytuacji z przed kilku miesi\u0119cy, gdzie k\u0142usownicy zabili 2 z 3 bia\u0142ych \u017cyraf, a na \u015bwiecie zosta\u0142a ostania bia\u0142a \u017cyrafa. \"Inspiracji do prac mo\u017cna szuka\u0107 wsz\u0119dzie dlatego serdecznie gratulujemy Justynie takiego podej\u015bcia do pracy konkursowej i \u017cyczymy kolejnych sukces\u00f3w. W 2021r. Jakub W\u00f3jciak zaj\u0105\u0142 pierwsze miejsce w konkursie pt.: WIOSENNE PRZEBUDZENIE, kategoria - uczniowie szk\u00f3\u0142 ponadpodstawowych, kt\u00f3rej organizatorem by\u0142a Powiatowa Instytucja Kultury w Legionowie PIK. W 2021r. ucze\u0144 znalaz\u0142 si\u0119 w finale VI Og\u00f3lnopolskiego Konkursu Kaligraficznego im. Janusza Korzeniowskiego \"Pi\u00f3rem i Pazurem \", a w 2023r. zosta\u0142 wyr\u00f3\u017cniony w 31. Mi\u0119dzynarodowym Konkursie Sztuki Z\u0142otniczej \"Jako\u015b\u0107 \". (Zdj. X2, X23)",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X97.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X1.jpg"
          ]
        },
        {
          "text": "Rok 2021. Nasz ucze\u0144 Pawe\u0142 Wilczopolski, zawodnik LKSW Dan \u015awidnik, zosta\u0142 br\u0105zowym medalist\u0105 mistrzostw Europy w kicboxingu rozgrywanych w dn. 9-14 listopada w Czarnog\u00f3rze. Rok 2022. Na rozegranym w dniach 12-13 marca w Dzier\u017coniowie turnieju taekwon-do Polish Open Cup zawodnik Lubelskiego Klubu Sport\u00f3w Walki Dan \u015awidnik, a zarazem ucze\u0144 naszej szko\u0142y \u2013 Pawe\u0142 Wilczopolski \u2013 osi\u0105gn\u0105\u0142 nast\u0119puj\u0105ce wyniki sportowe: z\u0142oty medal w walkach sportowych light-contact junior\u00f3w -70 kg, z\u0142oty medal w uk\u0142adach formalnych junior\u00f3w, z\u0142oty medal w walkach dru\u017cynowych junior\u00f3w w reprezentacji LKSW Dan. W turnieju wzi\u0119li udzia\u0142 zawodnicy z 64 o\u015brodk\u00f3w taekwon-do z ca\u0142ego kraju",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X24.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X25.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X26.jpg"
          ]
        },
        {
          "text": "W 2021r. uczniowie ucz\u0119szczaj\u0105cy do naszej szko\u0142y reprezentowali Polsk\u0119 na Olimpiadzie Robotycznej FIRST Global Challenge. W sk\u0142ad reprezentacji Polski wchodzili uczniowie z klasy 3TK: Adrian G\u0105sior, Filip Grela, Jakub Chibowski, Jakub W\u0142osek, Grzegorz Czapla; 1 ucze\u0144 z klasy 2TA Szymon Luba\u0144ski oraz uczniowie innych szk\u00f3\u0142 \u015brednich z Lublina i Kra\u015bnika. Uczniowie po trzech miesi\u0105cach intensywnej pracy w zespole z dru\u017cyn\u0105 z Jemenu ostatecznie zdobyli br\u0105zowy medal w kategorii edukacja. Ich projekt pt.: \"Cyberbezpiecze\u0144stwo\" dotyczy\u0142 zagro\u017ce\u0144 wyst\u0119puj\u0105cych podczas korzystania z Internetu",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X89.jpg"
          ]
        },
        {
          "text": "Rok 2022. W Trybunale Koronnym odby\u0142 si\u0119 uroczysty fina\u0142 i og\u0142oszenie wynik\u00f3w konkursu \"Logika ekologii \". Nasi uczniowie: Jakub Brzozowski (3TK), Filip Wysmulski (3TN), Anastazja Zawieja (3TN), Hubert Opali\u0144ski (3TN) i Jaros\u0142aw Choinacki (3TN), zostali laureatami konkursu. Ich projekt to \"Kran przysz\u0142o\u015bci \"",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X51.jpg"
          ]
        },
        {
          "text": "Rok 2023. Uczniowie: Szymon Berdak 4TA, Szymon Luba\u0144ski 4TA, Jakub Jendryszka 4TA, Wojtek Ba\u0142abuszek 5TL, Bartek Grucha\u0142a 4TI, pracuj\u0105cy pod opiek\u0105 p. Agnieszki Grabo\u015b, przedstawili prototyp urz\u0105dzenia, kt\u00f3re samodzielnie zaprojektowali i wykonali w szkole. Wtryskarka do topienia plastiku z butelek PET przetapia uzyskany materia\u0142 na form\u0119 plastikowych doniczek. Ich prototyp zdoby\u0142 uznanie prowadz\u0105cego spotkanie redaktora Micha\u0142a Olsza\u0144skiego, kt\u00f3ry okre\u015bli\u0142 uczni\u00f3w mianem m\u0142odych in\u017cynier\u00f3w. Ich wtryskarka zrobi\u0142a tak\u017ce du\u017ce wra\u017cenie na zaproszonych go\u015bciach, m.in.: Panu Dyrektorze Departamentu \u015arodowiska i Zasob\u00f3w Naturalnych Marsza\u0142ka Wojew\u00f3dztwa Lubelskiego Danielu Pydzie, podkre\u015blaj\u0105cego niezwykle wa\u017cn\u0105 rol\u0119 takich urz\u0105dze\u0144 w recyklingu odpad\u00f3w i zach\u0119caj\u0105cego m\u0142odzie\u017c do wsp\u00f3\u0142pracy w podejmowaniu proekologicznych dzia\u0142a\u0144",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X19.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X20.jpg"
          ]
        },
        {
          "text": "Rok 2023. Lena Ga\u0144ska, uczennica klasy II TC, zosta\u0142a laureatk\u0105 konkursu na grafik\u0119 kalendarza ESM w roku 2024 w Lublinie. Tematem prac konkursowych by\u0142 Lublin. Spo\u015br\u00f3d przes\u0142anych prac Komisja Konkursowa wybra\u0142a fina\u0142ow\u0105 trzydziestk\u0119, a w\u015br\u00f3d niej 11 najlepszych prac, kt\u00f3re zostan\u0105 umieszczone na miesi\u0119cznych kartach w kalendarzu",

          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X6.jpg"
          ]
        },
        {
          "text": "Uczniowie naszej szko\u0142y dwukrotnie wzi\u0119li udzia\u0142 w Og\u00f3lnopolskim Konkursie Turbolandeskunde. W 2022 r. wykazywali si\u0119 wiedz\u0105 na temat Niemiec. W dru\u017cynie reprezentuj\u0105cej LCKZiU znale\u017ali si\u0119: Krzysztof Baran z klasy 1 TA, Szymon Grzeszczak z klasy 3 TK oraz Piotr Czarnecki z klasy 3 TA. W 2023 r. og\u00f3lnopolski konkurs TURBOLANDESKUNDE dotyczy\u0142 wiedzy o Austrii. Nasz\u0105 szko\u0142\u0119 reprezentowali uczniowie z klasy 2 TI: Micha\u0142 Walczak, Kacper Antoniak oraz Christos Pliatsikas. Dru\u017cyna LCKZiU z 2023r. wraz z opiekunem)",

          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X47.jpg"
          ]
        },
        {
          "text": "19 kwietnia 2023 w LCKZiU odby\u0142 si\u0119 og\u00f3lnopolski jednoeatpowy Konkurs j\u0119zyka angielskiego \"Forget-me-not \". W konkursie wzi\u0119\u0142o udzia\u0142 16 uczni\u00f3w naszej szko\u0142y. Celem konkursu by\u0142o rozbudzenie w\u015br\u00f3d uczni\u00f3w zainteresowania j\u0119zykiem angielskim, podniesienie umiej\u0119tno\u015bci j\u0119zykowych, promowanie czytelnictwa oraz podniesienie samooceny uczni\u00f3w. Praktycznie wszyscy uczestnicy osi\u0105gn\u0119li wysokie wyniki, a najlepsi byli dwaj uczniowie z klasy 2 TI: Christos Pliatsikas i Micha\u0142 Walczak. Uczestnicy konkursu \"Forget-me-not \" z opiekunami",

          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X48.jpg"
          ]
        },
        {
          "text": "Marzec 2023. Uczniowie klasy 2TC Krzysztof Smyl i Hubert \u017byro zdobyli 1 nagrod\u0119 w konkursie na utw\u00f3r muzyczny \"M\u0142odo\u015b\u0107 w trze\u017awo\u015bci daje mo\u017cliwo\u015bci \". Opiekunem konkursu by\u0142a Pani Agnieszka Grabo\u015b.Wr\u0119czenie nagr\u00f3d odby\u0142o si\u0119 z udzia\u0142em uczestnik\u00f3w konkursu ze wszystkich szk\u00f3\u0142, nauczycieli, rodzic\u00f3w, a tak\u017ce Zast\u0119pcy Prezydenta Miasta Lublina Pana Mariusza Banacha, Przewodnicz\u0105cej Komisji O\u015bwiaty Rady Miasta Lublin Pani Jadwigi Mach oraz cz\u0142onk\u00f3w Komisji Rozwi\u0105zywania Problem\u00f3w Alkoholowych w Lublinie",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X53.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X54.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X55.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X56.jpg"
          ]
        },
        {
          "text": "W 2022 r. nasza szko\u0142a zosta\u0142a laureatem konkursu \"Rozw\u00f3j samorz\u0105dno\u015bci uczniowskiej w Lublinie \u2013 Szkolne Bud\u017cety Obywatelskie \u2013 druga edycja \". Otrzymali\u015bmy 4 tys. z\u0142 na realizacj\u0119 projekt\u00f3w spe\u0142niaj\u0105cych marzenia m\u0142odzie\u017cy, a tak\u017ce wsparcie merytoryczne, organizacyjne i promocyjne Biura Partycypacji Spo\u0142ecznej i Fundacji Teatrikon z Lublina. Szkolny Zesp\u00f3\u0142 Roboczy SBO przygotowa\u0142 konkurs na projekt. W g\u0142osowaniu przeprowadzonym w dniach 17-24 listopada 2022 r. w\u015br\u00f3d uczni\u00f3w, nauczycieli i pracownik\u00f3w niepedagogicznych wygra\u0142 projekt \"\u0141awki integracyjne na dworze \"",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X21.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj.X22.png"
          ]
        },
        {
          "text": "Od 2013 do 2022 roku w naszej szkole przyznawane by\u0142y stypendia naukowe w ramach projekt\u00f3w Fundacji \u015aw. Miko\u0142aja. Wszystkie dzia\u0142ania w ramach Fundacji \u015aw. Miko\u0142aja koordynowa\u0142a w naszej szkole pani Dorota Kr\u00f3l.Stypendystami byli mi\u0119dzy innymi: W roku szkolnym 2015/2016: Krzysztof Raczkowski, Patryk Do\u0142be\u0144-Sadurski. W roku szkolnym 2016/20171: Aleksandra St\u0119pniak, Daniel Siuda. W roku szkolnym 2021/2022: Jakub W\u00f3jciak",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 285.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 286.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 280.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 281.jpg"
          ]
        },
        {
          "text": "Biblioteka szkolna funkcjonuje od pocz\u0105tku za\u0142o\u017cenia szko\u0142y w 1953 roku. Skromny ksi\u0119gozbi\u00f3r by\u0142 stale uzupe\u0142niany.W roku szkolnym 1958/59 liczy\u0142 ju\u017c 2200 ksi\u0105\u017cek. Po wybudowaniu nowego budynku biblioteka otrzyma\u0142a pomieszczenia przystosowane do jej potrzeb. W 2003 roku powi\u0119kszona o jedn\u0105 sal\u0119 biblioteka przekszta\u0142cona zosta\u0142a w Multimedialne Centrum Informacyjne. W 1997 do ksi\u0119gozbioru biblioteki do\u0142\u0105czono cz\u0119\u015b\u0107 ksi\u0119gozbioru PST, a w 2005 ksi\u0119gozbi\u00f3r Zespo\u0142u Szk\u00f3\u0142 Mechanicznych. W styczniu 2002 r. biblioteka zosta\u0142a wyposa\u017cona w komputer i program komputerowy MOL 2000+, co pozwoli\u0142o na rozpocz\u0119cie tworzenia komputerowej bazy danych. Obecnie biblioteka pracuje na zaaktualizowanym programie MOL NET +. Biblioteka aktywnie uczestniczy w \u017cyciu szko\u0142y. Przygotowuje wystawy okoliczno\u015bciowe w bibliotece i na terenie szko\u0142y np;- rok Chopina, rok Kolberga, Rok \u017bo\u0142nierza Tu\u0142acza, 700- lecie Lublina, zwi\u0105zane z obchodami \u015awi\u0119ta Niepodleg\u0142o\u015bci i innych wa\u017cnych rocznic historycznych",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 605.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 606.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 607.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 610.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 614.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 620.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 622.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 623.JPG"
          ]
        },
        {
          "text": "Organizuje uroczysto\u015bci szkolne z okazji \u015awi\u0119ta Niepodleg\u0142o\u015bci i inne : rok szkolny 2014/2015, rok szkolny 2017/2018 - po\u017cegnanie absolwent\u00f3w",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 412.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 413.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 414.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 415.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 660.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 661.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 662.jpg"
          ]
        },
        {
          "text": "W 1994 roku, jako pierwsza szko\u0142a \u015brednia przy\u0142\u0105czyli\u015bmy si\u0119 do akcji \"Pom\u00f3\u017c Dzieciom Przetrwa\u0107 Zim\u0119\". Od tej pory regularnie uczestniczymy w akcji. Na terenie szko\u0142y funkcjonuje sztab akcji i zbierane s\u0105 dary rzeczowe. Bierzemy r\u00f3wnie\u017c udzia\u0142 w Wielkiej Ulicznej Zbi\u00f3rce Dar\u00f3w",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 637.jpeg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 656.jpg"
          ]
        },
        {
          "text": "\"Góra Grosza\" - celem akcji, na kt\u00f3ry zbierane s\u0105 drobne monety jest pomoc dzieciom wychowywanym poza swoj\u0105 rodzin\u0105 - w domach dziecka lub rodzinach zast\u0119pczych. Akcja by\u0142a prowadzona przez wiele lat. Rok szkolny 2010/2011 - zako\u0144czenie jednej z akcji, rok szkolny 2014/2015 Liczenie zebranych grosik\u00f3w",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 400.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 401.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 459.png"
          ]
        },
        {
          "text": "Od 2016 roku szko\u0142a bierze udzia\u0142 w akcji Dzie\u0144 G\u0142o\u015bnego Czytania. 29 wrze\u015bnia uczniowie poszczeg\u00f3lnych klas prezentuj\u0105 na auli szkolnej fragmenty ksi\u0105\u017cek, kt\u00f3re ich zdaniem warto przeczyta\u0107. Imprezie towarzyszy zwykle wystawa plakat\u00f3w wykonanych przez uczni\u00f3w naszej szko\u0142y oraz prezentacja multimedialna lub film reklamuj\u0105cy ksi\u0105\u017cki. Akcj\u0119 koordynuje p. Urszula Klucha.",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 264.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 265.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 266.png",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 267.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 268.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 269.jpg"
          ]
        },
        {
          "text": "Konkursy na has\u0142a zach\u0119caj\u0105ce do odwiedzania biblioteki",

          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 609.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 608.JPG"
          ]
        },
        {
          "text": "Biblioteka dwukrotnie (w roku 2017 i 2021) zakwalifikowa\u0142a si\u0119 do og\u0142oszonego Rozporz\u0105dzeniem Rady Ministr\u00f3w z dnia 22.10. 2015 r. Narodowego Programu Rozwoju Czytelnictwa dotycz\u0105cego wspierania bibliotek szkolnych przez promocj\u0119 czytelnictwa i zakup nowo\u015bci wydawniczych.Udzia\u0142 w programie umo\u017cliwi\u0142 zakup 1238 ksi\u0105\u017cek. Przy dokonywaniu zakupu kierowano si\u0119 g\u0142\u00f3wnie preferencjami m\u0142odzie\u017cy naszej szko\u0142y. W ramach realizacji programu w bibliotece organizowane by\u0142y wydarzenia promuj\u0105ce czytelnictwo z udzia\u0142em naszych uczni\u00f3w i nawi\u0105zana zosta\u0142a wsp\u00f3\u0142praca z Fili\u0105 nr 37 Biblioteki publicznej im. H. \u0141opaci\u0144skiego mieszcz\u0105c\u0105 si\u0119 przy ul. Bazylian\u00f3wka",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 654.png",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 655.jpg"
          ]
        },
        {
          "text": "Od roku szkolnego 2012/2013 w LCKZiU p. Urszula Klucha wraz z p. Piotrem Kajlewiczem organizuj\u0105 konkursy graficzne dla gimnazjalist\u00f3w, celem kt\u00f3rych jest rozwijanie u m\u0142odzie\u017cy zainteresowania grafik\u0105 komputerow\u0105, propagowanie czytelnictwa oraz promocja naszej szko\u0142y. W dniu rozdania nagr\u00f3d odbywaj\u0105 si\u0119 warsztaty graficzne przygotowane przez uczni\u00f3w klas technikum",
          "images": [
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 405.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 406.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 407.JPG",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 270.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 271.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 272.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 273.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 309.jpg",
            "../assets/schools/SnM/od 2014  -  Lubelskie Centrum Kształcenia Zawodowego i Ustawicznego/images/zdj. 310.jpg"
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