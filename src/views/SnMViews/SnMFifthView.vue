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
    label: "1998-2014 - Lubelskie Centrum Edukacji Zawodowej"
  }
])


const history = ref(
    {
      "parent_folder": "history_files\\SnM\\1998-2014 - Lubelskie Centrum Edukacji Zawodowej",
      "texts_with_images": [
        {
          "text": "15 wrze\u015bnia 1998 r. - decyzj\u0105 Kuratora O\u015bwiaty powo\u0142anie Lubelskiego Centrum Edukacji Zawodowej. LCEZ powsta\u0142o na bazie Zespo\u0142u Szk\u00f3\u0142 Mechaniczno \u2013 Energetycznych im. K. K. Baczy\u0144skiego oraz Centrum Kszta\u0142cenia Praktycznego w Lublinie mieszcz\u0105cego si\u0119 na ul. Magnoliowej 8 ",
          "images": []
        },
        {
          "text": ".Rok szkolny 1998/99 \u2013 decyzja  Kuratora O\u015bwiaty o powo\u0142aniu w LCEZ nowego typu szko\u0142y \u2013 Liceum Technicznego o profilu mechanicznym.Dyrektorem szko\u0142y do 1 wrze\u015bnia 2002 roku  by\u0142  mgr in\u017c. Kazimierz Jakubowski",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 571.jpg"
          ]
        },
        {
          "text": "Od wrze\u015bnia 2002 roku funkcj\u0119 dyrektora pe\u0142ni\u0142 mgr in\u017c. Eryk Winkler",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 37.jpg"
          ]
        },
        {
          "text": "Dyrektor Eryk Winkler oraz wice-dyrektor mgr. in\u017c. S\u0142awomir Dyba\u0142a, kierownik warsztat\u00f3w mgr in\u017c.Stanis\u0142aw Kwietniewski, wice-dyrektor mgr in\u017c. Andrzej Zbara\u0144ski, wice-dyrektor mgr Bo\u017cenna Jankiewicz, wice-dyrektor mgr Andrzej G\u0142owacki",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 569.JPG"
          ]
        },
        {
          "text": "1 wrze\u015bnia 2002 \u2013 w LCEZ rozpocz\u0119\u0142y dzia\u0142alno\u015b\u0107 szko\u0142y ponadgimnazjalne: 3-letnie liceum profilowane i 4-letnie technikum1 wrze\u015bnia 2007 roku -  dyrektorem szko\u0142y zosta\u0142 mgr Jacek Misiuk",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 173.jpg"
          ]
        },
        {
          "text": "Studni\u00f3wka \u2013 rok szkolny 2000/2001",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 572.jpg"
          ]
        },
        {
          "text": "Wsp\u00f3\u0142praca ze szko\u0142ami na W\u0119grzech i S\u0142owacjiPierwsze kontakty ze szko\u0142\u0105 w Debreczynie na W\u0119grzech zosta\u0142y nawi\u0105zane w 1978 roku. Inicjatorami wsp\u00f3\u0142pracy byli  Kovacs Gabor, Baranovsky Istvane i Szendrei Gyorgy ze strony  w\u0119gierskiej oraz S\u0142awomira Ziemi\u0144skiego i Andrzeja Kity z Lublina. W Lublinie i Debreczynie odbywa\u0142y si\u0119 spotkania delegacji nauczycieli oraz wymiany klas. Niespotykan\u0105 form\u0105 by\u0142y indywidualne wizyty w\u0119gierskich uczni\u00f3w w polskich domach.Od 1995 roku rozwija\u0142a si\u0119 wsp\u00f3\u0142praca ze szko\u0142\u0105 w Debreczynie",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 589.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 590.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 591.jpg"
          ]
        },
        {
          "text": "Wsp\u00f3\u0142praca ze szko\u0142\u0105 w Koszycach",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 577.jpg"
          ]
        },
        {
          "text": "\"KATY\u0143...Ocali\u0107 od zapomnienia\" D\u0105b Pami\u0119ci Porucznika Feliksa Czarneckiego jako ho\u0142d pami\u0119ci dla ofiar zbrodni katy\u0144skiej.28 maja 2009 roku w naszej szkole odby\u0142a si\u0119 uroczysto\u015b\u0107 posadzenia D\u0119bu Pami\u0119ci porucznika Feliksa Czarneckiego, a nast\u0119pnie przygotowana przez m\u0142odzie\u017c akademia upami\u0119tniaj\u0105ca ofiary zbrodni katy\u0144skiej. Obecni byli: pani Halina Czarnecka- bratowa porucznika Feliksa Czarneckiego oraz przedstawiciele organ\u00f3w pa\u0144stwowych i samorz\u0105dowych, Prezes Lubelskiej Rodziny Katy\u0144skiej, Dyrektor Lubelskiego Oddzia\u0142u IPN",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. A 0.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. A 01.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. A 02.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. A 03.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. A 04.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. A 05.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. A 06.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. A 07.JPG"
          ]
        },
        {
          "text": "Feliks Czarnecki urodzi\u0142 si\u0119 13.03.1909 roku w Rudach ko\u0142o Pu\u0142aw w rolniczej rodzinie. W 1929 roku zda\u0142 egzamin maturalny i po otrzymaniu \u015bwiadectwa dojrza\u0142o\u015bci rozpocz\u0105\u0142 w 1930 roku prac\u0119 w Dyrekcji Poczt i Telegraf\u00f3w w Lublinie. Powo\u0142any do odbycia s\u0142u\u017cby wojskowej rozpocz\u0105\u0142 z dniem 12.09.1932 roku przeszkolenie na Dywizyjnym Kursie Podchor\u0105\u017cych Rezerwy Piechoty przy 15 p.p. Wilk\u00f3w w D\u0119blinie. Uko\u0144czy\u0142 je 15.07.1933 roku z wynikiem dobrym i wraz z awansem do stopnia kaprala podchor\u0105\u017cego zosta\u0142 zwolniony do rezerwy. W pa\u017adzierniku 1933 roku podj\u0105\u0142 studia na Wydziale Prawa i Nauk Spo\u0142eczno-Ekonomicznych KUL. W latach 1934 -1935 by\u0142 powo\u0142ywany dwukrotnie na sze\u015bciotygodniowe \u0107wiczenia wojskowe, po kt\u00f3rych uzyska\u0142 nominacj\u0119 na podporucznika rezerwy w korpusie osobowym oficer\u00f3w piechoty ze starsze\u0144stwem od 01.01.1936 roku. Mimo pracy zawodowej, odbywania \u0107wicze\u0144 wojskowych uko\u0144czy\u0142 w 1938 roku studia z wynikiem dobrym i uzyska\u0142 dyplom magistra prawa. W ko\u0144cu sierpnia 1939 roku zosta\u0142 zmobilizowany do O\u015brodka Zapasowego 44 pu\u0142ku strzelc\u00f3w Legii Ameryka\u0144skiej w R\u00f3wnym. W trakcie kampanii wrze\u015bniowej dosta\u0142 si\u0119 w nieznanych okoliczno\u015bciach do niewoli sowieckiej. Przebywa\u0142 w obozie jenieckim w Kozielsku do kwietnia 1940 roku, po czym zosta\u0142 wywieziony do Lasu Katy\u0144skiego i tam zamordowany",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. A 08.jpg"
          ]
        },
        {
          "text": "Obchody 60-lecia szko\u0142y - 6 grudnia 2013 roku w LCEZ odby\u0142y si\u0119 uroczysto\u015bci zwi\u0105zane z 60 rocznic\u0105 powstania szko\u0142y. \u015awi\u0119to rozpocz\u0119\u0142o si\u0119 msz\u0105 \u015bwi\u0119t\u0105 w ko\u015bciele parafialnym pod wezwaniem Niepokalanego Pocz\u0119cia Naj\u015bwi\u0119tszej Marii Panny przy ulicy Bazylian\u00f3wka 85, kt\u00f3rej przewodniczy\u0142 ks. biskup Artur Mizi\u0144ski. Dalsza cz\u0119\u015b\u0107 uroczysto\u015bci odby\u0142a si\u0119 w auli szkolnej.Na wst\u0119pie pan dyrektor Jacek Misiuk powita\u0142 zaproszonych go\u015bci, nauczycieli , pracownik\u00f3w administracji i uczni\u00f3w i wyg\u0142osi\u0142 kr\u00f3tkie przem\u00f3wienie. Wszyscy go\u015bcie wyg\u0142osili mowy. Kolejny punkt programu stanowi\u0142a prezentacja po\u015bwi\u0119cona patronowi szko\u0142y K. K. Baczy\u0144skiemu oraz prezentacja przedstawiaj\u0105ca ofert\u0119 edukacyjn\u0105 LCEZ. Nast\u0119pnie go\u015bcie udali si\u0119 na warsztaty szkolne w celu zapoznania si\u0119 z bogatym zapleczem dydaktycznym szko\u0142y",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 179.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 180.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 181.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 182.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 183.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 56.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 184.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 189.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 190.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 191.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 192.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 193.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 53.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 54.jpg"
          ]
        },
        {
          "text": "Medal Prezydenta Miasta Lublin oraz Dyplom Uznania dla LCEZ. Medale Prezydenta Miasta Lublin za wybitne osi\u0105gni\u0119cia dydaktyczno \u2013 wychowawcze oraz propagowanie innowacyjnych technologii i metod  kszta\u0142cenia",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 57.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 58.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 188.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 186.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 187.jpg"
          ]
        },
        {
          "text": "Po zako\u0144czeniu oficjalnych uroczysto\u015bci go\u015bcie zwiedzili szko\u0142\u0119",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 194.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 195.jpg"
          ]
        },
        {
          "text": "Sponsorzy",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 196.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 197.JPG"
          ]
        },
        {
          "text": "\"NASZA SZKO\u0141A \"- projekt realizowany w roku 2007 we wsp\u00f3\u0142pracy z Wy\u017csz\u0105 Szko\u0142\u0105 Ekonomii i Innowacji w Lublinie. Opracowano i zrealizowano 20 program\u00f3w ukierunkowanych na wyr\u00f3wnanie szans edukacyjnych uczni\u00f3w pochodz\u0105cych z teren\u00f3w wiejskich wojew\u00f3dztw \u015bciany wschodniej. Oto niekt\u00f3re z nich:Angielski szlif. O technice po angielsku",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 101.jpg"
          ]
        },
        {
          "text": "Matematyk\u0119 mo\u017cna polubi\u0107, Dobry mówca, Energetyczne ABC",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 103.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 102.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 104.jpg"
          ]
        },
        {
          "text": "Umiem wi\u0119cej- szkolenia w zakresie obs\u0142ugi obrabiarek sterowanych numerycznie, Komputerowe wspomaganie projektowania, Podziel się swoją pasją oraz nauczyciele podczas pracy nad projektem",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 409.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 410.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 411.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 408.JPG"
          ]
        },
        {
          "text": "MOJA FIRMA, Będę przedsiębiorcą, MOJA SZANSA, Mój ECDL, Program Edukacji Konsumenckiej i Obywatelskiej",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 105.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 106.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 107.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 108.jpg"
          ]
        },
        {
          "text": "COMENIUS 2005-2007 \"Mierzenie jako\u015bci pracy szko\u0142y\", COMENIUS \"RegioNet\"- regionalne konfrontacje i praca w Internecie pomiędzy europejskimi szkołami",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 109.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 110.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 111.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 112.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 113.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 114.jpg"
          ]
        },
        {
          "text": "Projekt \"IPAN - Mi\u0119dzynarodowa automatyzacja produkcji w sieci\"Projekt realizowany w naszej szkole w latach 2012-2014.G\u0142\u00f3wnym celem jest umo\u017cliwienie wsp\u00f3\u0142pracy mi\u0119dzynarodowej mi\u0119dzy nauczycielami i uczniami oraz firmami partnerskimi. W projekcie bra\u0142y udzia\u0142 nastepuj\u0105ce szko\u0142y i instytucje: Tampereen ammattiopisto, Tampere, FinlandiaFastems Oy Ab, Tampere, FinlandiaSIPMA Sp\u00f3\u0142ka Akcyjna, Lublin, PolskaInstitut d'Educacio Secundaria i Superior d'Ensenyaments Professionals Lacetania, Manresa, HiszpaniaMax-Eyth-Schule Stuttgart, Stuttgart, NiemcyCentro de Formacao Profissional da Industria Metalurgica e Metaloamecanica, Lizbona, PortugaliaDzi\u0119ki realizacji projektu uczniowie: rozwijali umiej\u0119tno\u015bci zawodowych, doskonalili  j\u0119zyk angielski, poznawali nowye programy nauczania i typy kszta\u0142cenia, poznawali nowe metody nauczania i urz\u0105dze\u0144 technicznych.Koordynatorem projektu by\u0142a pani Wies\u0142awa W\u0105sik, osoby wsp\u00f3\u0142pracuj\u0105ce: pan Marek Kotowski - Sipma S.A., pani Anna Fugel, pan Stanis\u0142aw W\u00f3jcik, pan Bogus\u0142aw Dyba\u0142a, pani Ewa D\u0119bska, pani Teresa So\u0142tan",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 115.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 116.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 117.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 527.jpg"
          ]
        },
        {
          "text": "Poczet sztandarowy - Rok szkolny 2000/2001, rok szkolny 2009/2010 - Święto szkoły, rok szkolny 2009/2010 - pożegnanie klas czwartych, 11 kwietnia 2010 – udział w uroczystościach związanych z katastrofą pod Smoleńskiem",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 575.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 403.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 404.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 402.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 380.jpg"
          ]
        },
        {
          "text": "15 kwietnia 2010 \u2013 uroczysto\u015bci  zorganizowane przez Rodziny Katy\u0144skie pod pomnikiem ofiar Katynia znajduj\u0105cym si\u0119 przy ul. G\u0142\u0119bokiej, uroczystości miejskie z okazji Świeta Niepodległości 2010 rok, poczet sztandarowy na uroczystości 60-lecia szkoły",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 381.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 378.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 379.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 50.jpg"
          ]
        },
        {
          "text": "Targi edukacyjneRok szkolny 2012/2013 Tak wygl\u0105da\u0142o nasze stanowisko, za kt\u00f3re otrzymali\u015bmy nagrod\u0119 oraz nauczyciele i uczniowie reprezentujący szkołę",

          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 394.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 395.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 396.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 399.JPG"
          ]
        },
        {
          "text": "Liga SumiBOT\u00d3W - Pomys\u0142 na zorganizowanie Turnieju Gimnazjalnej Ligi SumiBOT\u00d3W powsta\u0142 po tym, jak 27 pa\u017adziernika 2010 r. w Lubelskim Centrum Edukacji Zawodowej przy ul. Magnoliowej 8\u00a0 odby\u0142 si\u0119 \"Wiecz\u00f3r SumiBOT\u00d3W\"\u00a0. Turniej jest przeznaczony dla gimnazjalist\u00f3w i ma na celu przede wszystkim zainteresowanie mechatronik\u0105, promowanie nowoczesnych technologii oraz robotyki, a tak\u017ce dobrej zabawy i rywalizacji w duchu fair play. Ta kategoria robot\u00f3w to p\u00f3\u0142kilogramowe, autonomiczne pojazdy, kt\u00f3rych celem jest lokalizacja przeciwnika oraz zepchni\u0119cie go z ringu. O sukcesie decyduje strategia walki i programy, kt\u00f3re s\u0105 tworzone przez uczni\u00f3w. Wszystkie roboty wraz z oprogramowaniem dostarczy\u0142a firma Mechatronik. W marcu 2011 r. przedstawiciel firmy Mechatronik, pan Mariusz Jurczy\u0144ski przeprowadzi\u0142 w LCEZ szkolenie nauczycieli - opiekun\u00f3w szkolnej Ligi SumiBOT. 3 czerwca 2011 w LCEZ odby\u0142 si\u0119 pierwszy Turniej Ligi SumiBOT. W rywalizacji wzi\u0119li udzia\u0142 gimnazjali\u015bci z naszego regionu oraz pi\u0119ciu gimnazj\u00f3w z Lublina. Do walki stan\u0119\u0142o osiem robot\u00f3w, mi\u0119dzy innymi Asco 1, Asco 2 i Batory ( nazwy pochodz\u0105 od sponsor\u00f3w). Roboty rywalizowa\u0142y w czterech konkurencjach \u2013 zlokalizowanie przeszkody i wypchni\u0119cie jej poza ring, zlokalizowanie dw\u00f3ch przeszk\u00f3d, walka na ringu mi\u0119dzy robotami, oraz prezentacja stylu dowolnego- Friestile). Robot Asco 1 zata\u0144czy\u0142 poloneza w takt muzyki, inne r\u00f3wnie\u017c pokaza\u0142y swoje niekonwencjonalne umiej\u0119tno\u015bci. Rozgrywki dostarczy\u0142y wielu emocji.\tTurnieje Gimnazjalnej Ligi SumiBOT\u00d3W odbywaj\u0105 si\u0119 systematycznie 4 razy w roku szkolnym. Zwyci\u0119\u017ca dru\u017cyna, kt\u00f3ra w ci\u0105gu roku uzyska najwi\u0119cej punkt\u00f3w. Gospodarzami byli uczniowie LCKZiU, kt\u00f3rzy brali udzia\u0142 w konkursie poza punktacj\u0105. Lata 2011-2014",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 502.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 503.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 504.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 505.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 506.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 501.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 118.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 119.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 120.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 121.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 518.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 507.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 508.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 509.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 510.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 511.JPG"
          ]
        },
        {
          "text": "\"Przedsi\u0119biorczy ucze\u0144 na rynku pracy\" - Konkurs organizowany przez doradc\u0119 metodycznego przedmiot\u00f3w zawodowych (przedsi\u0119biorczo\u015b\u0107) El\u017cbiet\u0119 Mitur\u0119.Celem konkursu jest kszta\u0142towanie u uczni\u00f3w aktywnej postawy wobec \u017cycia osobistego i zawodowego. Uczniowie wyrabiaj\u0105 w sobie umiej\u0119tno\u015bci poznawania siebie i oceniania swoich mo\u017cliwo\u015bci psychofizycznych w celu znalezienia pracy lub podj\u0119cia dzia\u0142alno\u015bci gospodarczej. Wsp\u00f3\u0142organizatorem konkursu by\u0142a  Wy\u017csz\u0105 Szko\u0142a Przedsi\u0119biorczo\u015bci i Administracji w Lublinie i  i NBP",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 122.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 123.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 627.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 628.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 629.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 630.jpg"
          ]
        },
        {
          "text": "\"ROK PRZED DYPLOMEM\" - Od 2006 r. uczniowie naszej szko\u0142y bior\u0105 udzia\u0142 w Mi\u0119dzyszkolnym Konkursie Zawodowym \u201eRok przed dyplomem\u201d organizowanym przez lubelskie Samorz\u0105dowe Centrum Doskonalenia Nauczycieli i doradc\u00f3w metodycznych miasta Lublin. Konkurs adresowany jest dla uczni\u00f3w klas trzecich technikum.Celem jego jest rozwijanie umiej\u0119tno\u015bci zawodowych, utrwalenie procedur egzaminacyjnych oraz sprawdzenie wiedzy przed egzaminem zawodowym. Nasi uczniowie prezentuj\u0105 nast\u0119puj\u0105ce zawody: technik mechanik, technik mechatronik, technik informatyk. Ka\u017cdego roku zostaj\u0105 laureatami zajmuj\u0105c pierwsze , drugie i trzecie miejsca",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 124.jpg",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 125.jpg"
          ]
        },
        {
          "text": "Wojew\u00f3dzka Konferencja Geogebry zorganizowana przez doradc\u0119 metodycznego z matematyki E\u017cbiet\u0119 Marzyck\u0105  odby\u0142a si\u0119  w naszej szkole w roku 2012 i 2013. Celem konferencji by\u0142o zapoznanie nauczycieli matematyki z nowymi technologiami w nauczaniu tego przedmiotu",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 625.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 626.JPG"
          ]
        },
        {
          "text": "Wojew\u00f3dzki Konkurs Piosenki RomantycznejW roku szkolnym 2011-2012 nauczyciele j\u0119zyk\u00f3w obcych zorganizowali w naszej szkole Wojew\u00f3dzki Konkurs Piosenki Romantycznej. M\u0142odzie\u017c z gimnazj\u00f3w wojew\u00f3dztwa lubelskiego wykonywa\u0142a piosenki w j\u0119zyku angielskim i niemieckim",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 245.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 246.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 247.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 248.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 249.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 250.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 251.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 252.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 253.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 254.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 255.JPG"
          ]
        },
        {
          "text": "\u015awi\u0119to szko\u0142y -Rok szkolny 2009/2010 - Uroczysto\u015b\u0107 po\u015bwi\u0119cona patronowi szko\u0142y. Po oficjalnej części obchodów tradycyjne zawody w wyciskaniu na ławeczce oraz zwycięzcy",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 417.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 418.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 419.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 420.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 421.JPG"
          ]
        },
        {
          "text": "Rok szkolny 2009/2010- wr\u0119czanie nagr\u00f3d i dyplom\u00f3w za udzia\u0142 w  konkursach i innych formach aktywno\u015bci",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 422.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 423.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 424.JPG"
          ]
        },
        {
          "text": "Jase\u0142ka w latach 2010-2014",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 356.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 357.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 355.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 358.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 359.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 360.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 361.JPG"
          ]
        },
        {
          "text": "Rok szkolny 2000/2001 Studni\u00f3wka",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 572.jpg"
          ]
        },
        {
          "text": "Matura  2004",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 200.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 201.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 202.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 203.JPG"
          ]
        },
        {
          "text": "Po\u017cegnanie klas maturalnych \u2013 rok szkolny 2009/2010",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 457.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 458.JPG"
          ]
        },
        {
          "text": "Kwiecie\u0144 2000 r. - zosta\u0142 wystawiony szkolny spektakl \"Antygona\" Sofoklesa, kt\u00f3ry zosta\u0142 nagrany na kaset\u0119 i wys\u0142any papie\u017cowi Janowi Paw\u0142owi II z okazji osiemdziesi\u0105tych urodzin. Spektakl przygotowa\u0142a m\u0142odzie\u017c naszej szko\u0142y pod kierunkiem pani Beaty Kopyckiej oraz ks. Piotra Napierkowskiego MIC",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 573.jpg"
          ]
        },
        {
          "text": "Konkursy na prezentacje multimedialne \u2013 Bo\u017cennna JankiewiczPrzez kilka lat w auli LCEZ odbywa\u0142 si\u0119 fina\u0142 wojew\u00f3dzkiego konkursu na prezentacj\u0119 multimedialn\u0105  og\u0142oszonego w danym roku patrona. - w 2009 r. by\u0142 to Juliusz S\u0142owacki, w 2010 r. był to Fryderyk Chopin",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 455.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 456.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 454.JPG"
          ]
        },
        {
          "text": "24 lutego 2012 r. w obecno\u015bci pana Rafa\u0142a Dobrowolskiego reprezentuj\u0105cego Marsza\u0142ka Wojew\u00f3dztwa Lubelskiego, Departament Kultury, Edukacji i  Sportu i organizator\u00f3w konkursu: dyrektora LCEZ - pana Jacka Misiuka, przewodnicz\u0105cej SNaP \u2013 Bo\u017cenny Jankiewicz zosta\u0142y przedstawione najlepsze prezentacje dotycz\u0105ce Cz. Mi\u0142osza z udzia\u0142em  uczestnik\u00f3w konkursu  i m\u0142odzie\u017cy LCEZ-",
          "images": [
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 425.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 426.JPG",
            "../assets/schools/SnM/1998-2014 - Lubelskie Centrum Edukacji Zawodowej/images/zdj. 427.JPG"
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