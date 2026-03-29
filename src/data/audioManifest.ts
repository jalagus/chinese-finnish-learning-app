export type AudioAssetEntry = {
  text: string;
  source: number;
};

export type StoryAudioParagraph = AudioAssetEntry & {
  index: number;
};

export const audioManifest = {
  lessons: {
    "moi": {
      word: {
        text: "Moi",
        source: require('../../assets/audio/lessons/moi/word.mp3'),
      },
      example: {
        text: "Moi! Mitä kuuluu?",
        source: require('../../assets/audio/lessons/moi/example.mp3'),
      },
    },
    "hei": {
      word: {
        text: "Hei",
        source: require('../../assets/audio/lessons/hei/word.mp3'),
      },
      example: {
        text: "Hei, minä olen Lin.",
        source: require('../../assets/audio/lessons/hei/example.mp3'),
      },
    },
    "nakymin": {
      word: {
        text: "Näkemiin",
        source: require('../../assets/audio/lessons/nakymin/word.mp3'),
      },
      example: {
        text: "Näkemiin, nähdään huomenna.",
        source: require('../../assets/audio/lessons/nakymin/example.mp3'),
      },
    },
    "kiitos": {
      word: {
        text: "Kiitos",
        source: require('../../assets/audio/lessons/kiitos/word.mp3'),
      },
      example: {
        text: "Kiitos avusta.",
        source: require('../../assets/audio/lessons/kiitos/example.mp3'),
      },
    },
    "ole-hyva": {
      word: {
        text: "Ole hyvä",
        source: require('../../assets/audio/lessons/ole-hyva/word.mp3'),
      },
      example: {
        text: "Kiitos. Ole hyvä.",
        source: require('../../assets/audio/lessons/ole-hyva/example.mp3'),
      },
    },
    "anteeksi": {
      word: {
        text: "Anteeksi",
        source: require('../../assets/audio/lessons/anteeksi/word.mp3'),
      },
      example: {
        text: "Anteeksi, missä asema on?",
        source: require('../../assets/audio/lessons/anteeksi/example.mp3'),
      },
    },
    "kylla": {
      word: {
        text: "Kyllä",
        source: require('../../assets/audio/lessons/kylla/word.mp3'),
      },
      example: {
        text: "Kyllä, ymmärrän.",
        source: require('../../assets/audio/lessons/kylla/example.mp3'),
      },
    },
    "ei": {
      word: {
        text: "Ei",
        source: require('../../assets/audio/lessons/ei/word.mp3'),
      },
      example: {
        text: "Ei, en puhu hyvin suomea.",
        source: require('../../assets/audio/lessons/ei/example.mp3'),
      },
    },
    "ehka": {
      word: {
        text: "Ehkä",
        source: require('../../assets/audio/lessons/ehka/word.mp3'),
      },
      example: {
        text: "Ehkä tulen myöhemmin.",
        source: require('../../assets/audio/lessons/ehka/example.mp3'),
      },
    },
    "mina": {
      word: {
        text: "Minä",
        source: require('../../assets/audio/lessons/mina/word.mp3'),
      },
      example: {
        text: "Minä olen täällä.",
        source: require('../../assets/audio/lessons/mina/example.mp3'),
      },
    },
    "sina": {
      word: {
        text: "Sinä",
        source: require('../../assets/audio/lessons/sina/word.mp3'),
      },
      example: {
        text: "Sinä puhut hyvin.",
        source: require('../../assets/audio/lessons/sina/example.mp3'),
      },
    },
    "han": {
      word: {
        text: "Hän",
        source: require('../../assets/audio/lessons/han/word.mp3'),
      },
      example: {
        text: "Hän asuu Espoossa.",
        source: require('../../assets/audio/lessons/han/example.mp3'),
      },
    },
    "suomi": {
      word: {
        text: "Suomi",
        source: require('../../assets/audio/lessons/suomi/word.mp3'),
      },
      example: {
        text: "Opiskelen suomea.",
        source: require('../../assets/audio/lessons/suomi/example.mp3'),
      },
    },
    "kiina": {
      word: {
        text: "Kiina",
        source: require('../../assets/audio/lessons/kiina/word.mp3'),
      },
      example: {
        text: "Olen kotoisin Kiinasta.",
        source: require('../../assets/audio/lessons/kiina/example.mp3'),
      },
    },
    "englanti": {
      word: {
        text: "Englanti",
        source: require('../../assets/audio/lessons/englanti/word.mp3'),
      },
      example: {
        text: "Puhutko englantia?",
        source: require('../../assets/audio/lessons/englanti/example.mp3'),
      },
    },
    "missa": {
      word: {
        text: "Missä",
        source: require('../../assets/audio/lessons/missa/word.mp3'),
      },
      example: {
        text: "Missä wc on?",
        source: require('../../assets/audio/lessons/missa/example.mp3'),
      },
    },
    "mita": {
      word: {
        text: "Mitä",
        source: require('../../assets/audio/lessons/mita/word.mp3'),
      },
      example: {
        text: "Mitä tämä tarkoittaa?",
        source: require('../../assets/audio/lessons/mita/example.mp3'),
      },
    },
    "milloin": {
      word: {
        text: "Milloin",
        source: require('../../assets/audio/lessons/milloin/word.mp3'),
      },
      example: {
        text: "Milloin juna lähtee?",
        source: require('../../assets/audio/lessons/milloin/example.mp3'),
      },
    },
    "tanaan": {
      word: {
        text: "Tänään",
        source: require('../../assets/audio/lessons/tanaan/word.mp3'),
      },
      example: {
        text: "Tänään on kylmä.",
        source: require('../../assets/audio/lessons/tanaan/example.mp3'),
      },
    },
    "huomenna": {
      word: {
        text: "Huomenna",
        source: require('../../assets/audio/lessons/huomenna/word.mp3'),
      },
      example: {
        text: "Nähdään huomenna.",
        source: require('../../assets/audio/lessons/huomenna/example.mp3'),
      },
    },
    "nyt": {
      word: {
        text: "Nyt",
        source: require('../../assets/audio/lessons/nyt/word.mp3'),
      },
      example: {
        text: "Minun täytyy mennä nyt.",
        source: require('../../assets/audio/lessons/nyt/example.mp3'),
      },
    },
    "aamu": {
      word: {
        text: "Aamu",
        source: require('../../assets/audio/lessons/aamu/word.mp3'),
      },
      example: {
        text: "Aamu on rauhallinen.",
        source: require('../../assets/audio/lessons/aamu/example.mp3'),
      },
    },
    "ilta": {
      word: {
        text: "Ilta",
        source: require('../../assets/audio/lessons/ilta/word.mp3'),
      },
      example: {
        text: "Hyvää iltaa!",
        source: require('../../assets/audio/lessons/ilta/example.mp3'),
      },
    },
    "vetta": {
      word: {
        text: "Vettä",
        source: require('../../assets/audio/lessons/vetta/word.mp3'),
      },
      example: {
        text: "Haluan vettä.",
        source: require('../../assets/audio/lessons/vetta/example.mp3'),
      },
    },
    "kahvi": {
      word: {
        text: "Kahvi",
        source: require('../../assets/audio/lessons/kahvi/word.mp3'),
      },
      example: {
        text: "Juon aamulla kahvia.",
        source: require('../../assets/audio/lessons/kahvi/example.mp3'),
      },
    },
    "tee": {
      word: {
        text: "Tee",
        source: require('../../assets/audio/lessons/tee/word.mp3'),
      },
      example: {
        text: "Haluatko teetä vai kahvia?",
        source: require('../../assets/audio/lessons/tee/example.mp3'),
      },
    },
    "leipa": {
      word: {
        text: "Leipä",
        source: require('../../assets/audio/lessons/leipa/word.mp3'),
      },
      example: {
        text: "Syön leipää aamiaisella.",
        source: require('../../assets/audio/lessons/leipa/example.mp3'),
      },
    },
    "maito": {
      word: {
        text: "Maito",
        source: require('../../assets/audio/lessons/maito/word.mp3'),
      },
      example: {
        text: "Ostan maitoa kaupasta.",
        source: require('../../assets/audio/lessons/maito/example.mp3'),
      },
    },
    "omena": {
      word: {
        text: "Omena",
        source: require('../../assets/audio/lessons/omena/word.mp3'),
      },
      example: {
        text: "Punainen omena on pöydällä.",
        source: require('../../assets/audio/lessons/omena/example.mp3'),
      },
    },
    "kauppa": {
      word: {
        text: "Kauppa",
        source: require('../../assets/audio/lessons/kauppa/word.mp3'),
      },
      example: {
        text: "Kauppa on vielä auki.",
        source: require('../../assets/audio/lessons/kauppa/example.mp3'),
      },
    },
    "raha": {
      word: {
        text: "Raha",
        source: require('../../assets/audio/lessons/raha/word.mp3'),
      },
      example: {
        text: "Minulla ei ole paljon rahaa.",
        source: require('../../assets/audio/lessons/raha/example.mp3'),
      },
    },
    "juna": {
      word: {
        text: "Juna",
        source: require('../../assets/audio/lessons/juna/word.mp3'),
      },
      example: {
        text: "Juna lähtee pian.",
        source: require('../../assets/audio/lessons/juna/example.mp3'),
      },
    },
    "bussi": {
      word: {
        text: "Bussi",
        source: require('../../assets/audio/lessons/bussi/word.mp3'),
      },
      example: {
        text: "Bussi tulee viidessä minuutissa.",
        source: require('../../assets/audio/lessons/bussi/example.mp3'),
      },
    },
    "asema": {
      word: {
        text: "Asema",
        source: require('../../assets/audio/lessons/asema/word.mp3'),
      },
      example: {
        text: "Rautatieasema on tuolla.",
        source: require('../../assets/audio/lessons/asema/example.mp3'),
      },
    },
    "lippu": {
      word: {
        text: "Lippu",
        source: require('../../assets/audio/lessons/lippu/word.mp3'),
      },
      example: {
        text: "Missä voin ostaa lipun?",
        source: require('../../assets/audio/lessons/lippu/example.mp3'),
      },
    },
    "koulu": {
      word: {
        text: "Koulu",
        source: require('../../assets/audio/lessons/koulu/word.mp3'),
      },
      example: {
        text: "Koulu on keskustassa.",
        source: require('../../assets/audio/lessons/koulu/example.mp3'),
      },
    },
    "tyo": {
      word: {
        text: "Työ",
        source: require('../../assets/audio/lessons/tyo/word.mp3'),
      },
      example: {
        text: "Minulla on paljon työtä tänään.",
        source: require('../../assets/audio/lessons/tyo/example.mp3'),
      },
    },
    "koti": {
      word: {
        text: "Koti",
        source: require('../../assets/audio/lessons/koti/word.mp3'),
      },
      example: {
        text: "Menen nyt kotiin.",
        source: require('../../assets/audio/lessons/koti/example.mp3'),
      },
    },
    "huone": {
      word: {
        text: "Huone",
        source: require('../../assets/audio/lessons/huone/word.mp3'),
      },
      example: {
        text: "Huone on pieni mutta valoisa.",
        source: require('../../assets/audio/lessons/huone/example.mp3'),
      },
    },
    "ystava": {
      word: {
        text: "Ystävä",
        source: require('../../assets/audio/lessons/ystava/word.mp3'),
      },
      example: {
        text: "Hän on minun ystäväni.",
        source: require('../../assets/audio/lessons/ystava/example.mp3'),
      },
    },
    "perhe": {
      word: {
        text: "Perhe",
        source: require('../../assets/audio/lessons/perhe/word.mp3'),
      },
      example: {
        text: "Minun perheeni asuu Kiinassa.",
        source: require('../../assets/audio/lessons/perhe/example.mp3'),
      },
    },
    "opettaja": {
      word: {
        text: "Opettaja",
        source: require('../../assets/audio/lessons/opettaja/word.mp3'),
      },
      example: {
        text: "Opettaja puhuu hitaasti.",
        source: require('../../assets/audio/lessons/opettaja/example.mp3'),
      },
    },
    "opiskelija": {
      word: {
        text: "Opiskelija",
        source: require('../../assets/audio/lessons/opiskelija/word.mp3'),
      },
      example: {
        text: "Olen uusi opiskelija.",
        source: require('../../assets/audio/lessons/opiskelija/example.mp3'),
      },
    },
    "iso": {
      word: {
        text: "Iso",
        source: require('../../assets/audio/lessons/iso/word.mp3'),
      },
      example: {
        text: "Tämä talo on iso.",
        source: require('../../assets/audio/lessons/iso/example.mp3'),
      },
    },
    "pieni": {
      word: {
        text: "Pieni",
        source: require('../../assets/audio/lessons/pieni/word.mp3'),
      },
      example: {
        text: "Minulla on pieni laukku.",
        source: require('../../assets/audio/lessons/pieni/example.mp3'),
      },
    },
    "hyva": {
      word: {
        text: "Hyvä",
        source: require('../../assets/audio/lessons/hyva/word.mp3'),
      },
      example: {
        text: "Se on hyvä idea.",
        source: require('../../assets/audio/lessons/hyva/example.mp3'),
      },
    },
    "kylma": {
      word: {
        text: "Kylmä",
        source: require('../../assets/audio/lessons/kylma/word.mp3'),
      },
      example: {
        text: "Ulkona on kylmä.",
        source: require('../../assets/audio/lessons/kylma/example.mp3'),
      },
    },
    "lammin": {
      word: {
        text: "Lämmin",
        source: require('../../assets/audio/lessons/lammin/word.mp3'),
      },
      example: {
        text: "Tänään on lämmin päivä.",
        source: require('../../assets/audio/lessons/lammin/example.mp3'),
      },
    },
    "aurinko": {
      word: {
        text: "Aurinko",
        source: require('../../assets/audio/lessons/aurinko/word.mp3'),
      },
      example: {
        text: "Aurinko paistaa.",
        source: require('../../assets/audio/lessons/aurinko/example.mp3'),
      },
    },
    "sataa": {
      word: {
        text: "Sataa",
        source: require('../../assets/audio/lessons/sataa/word.mp3'),
      },
      example: {
        text: "Tänään sataa vettä.",
        source: require('../../assets/audio/lessons/sataa/example.mp3'),
      },
    },
    "ravintola": {
      word: {
        text: "Ravintola",
        source: require('../../assets/audio/lessons/ravintola/word.mp3'),
      },
      example: {
        text: "Tämä ravintola on hyvin suosittu.",
        source: require('../../assets/audio/lessons/ravintola/example.mp3'),
      },
    },
    "hinta": {
      word: {
        text: "Hinta",
        source: require('../../assets/audio/lessons/hinta/word.mp3'),
      },
      example: {
        text: "Mikä tämän hinta on?",
        source: require('../../assets/audio/lessons/hinta/example.mp3'),
      },
    },
    "halpa": {
      word: {
        text: "Halpa",
        source: require('../../assets/audio/lessons/halpa/word.mp3'),
      },
      example: {
        text: "Tämä takki on yllättävän halpa.",
        source: require('../../assets/audio/lessons/halpa/example.mp3'),
      },
    },
    "kallis": {
      word: {
        text: "Kallis",
        source: require('../../assets/audio/lessons/kallis/word.mp3'),
      },
      example: {
        text: "Kahvi asemalla on aika kallista.",
        source: require('../../assets/audio/lessons/kallis/example.mp3'),
      },
    },
    "vasen": {
      word: {
        text: "Vasen",
        source: require('../../assets/audio/lessons/vasen/word.mp3'),
      },
      example: {
        text: "Käänny seuraavasta kadusta vasemmalle.",
        source: require('../../assets/audio/lessons/vasen/example.mp3'),
      },
    },
    "oikea": {
      word: {
        text: "Oikea",
        source: require('../../assets/audio/lessons/oikea/word.mp3'),
      },
      example: {
        text: "Pankki on oikealla puolella.",
        source: require('../../assets/audio/lessons/oikea/example.mp3'),
      },
    },
    "suoraan": {
      word: {
        text: "Suoraan",
        source: require('../../assets/audio/lessons/suoraan/word.mp3'),
      },
      example: {
        text: "Mene suoraan ja sitten vasemmalle.",
        source: require('../../assets/audio/lessons/suoraan/example.mp3'),
      },
    },
    "kirjasto": {
      word: {
        text: "Kirjasto",
        source: require('../../assets/audio/lessons/kirjasto/word.mp3'),
      },
      example: {
        text: "Kirjasto on aseman lähellä.",
        source: require('../../assets/audio/lessons/kirjasto/example.mp3'),
      },
    },
    "apteekki": {
      word: {
        text: "Apteekki",
        source: require('../../assets/audio/lessons/apteekki/word.mp3'),
      },
      example: {
        text: "Anteeksi, missä lähin apteekki on?",
        source: require('../../assets/audio/lessons/apteekki/example.mp3'),
      },
    },
    "sairaala": {
      word: {
        text: "Sairaala",
        source: require('../../assets/audio/lessons/sairaala/word.mp3'),
      },
      example: {
        text: "Sairaala on avoinna koko yön.",
        source: require('../../assets/audio/lessons/sairaala/example.mp3'),
      },
    },
    "pankki": {
      word: {
        text: "Pankki",
        source: require('../../assets/audio/lessons/pankki/word.mp3'),
      },
      example: {
        text: "Pankki sulkeutuu neljältä.",
        source: require('../../assets/audio/lessons/pankki/example.mp3'),
      },
    },
    "puhelin": {
      word: {
        text: "Puhelin",
        source: require('../../assets/audio/lessons/puhelin/word.mp3'),
      },
      example: {
        text: "Puhelimeni on laukussa.",
        source: require('../../assets/audio/lessons/puhelin/example.mp3'),
      },
    },
    "numero": {
      word: {
        text: "Numero",
        source: require('../../assets/audio/lessons/numero/word.mp3'),
      },
      example: {
        text: "Mikä sinun puhelinnumerosi on?",
        source: require('../../assets/audio/lessons/numero/example.mp3'),
      },
    },
    "osoite": {
      word: {
        text: "Osoite",
        source: require('../../assets/audio/lessons/osoite/word.mp3'),
      },
      example: {
        text: "Kirjoita osoite tähän, kiitos.",
        source: require('../../assets/audio/lessons/osoite/example.mp3'),
      },
    },
    "varata": {
      word: {
        text: "Varata",
        source: require('../../assets/audio/lessons/varata/word.mp3'),
      },
      example: {
        text: "Haluan varata ajan lääkärille.",
        source: require('../../assets/audio/lessons/varata/example.mp3'),
      },
    },
    "tavata": {
      word: {
        text: "Tavata",
        source: require('../../assets/audio/lessons/tavata/word.mp3'),
      },
      example: {
        text: "Hauska tavata sinut.",
        source: require('../../assets/audio/lessons/tavata/example.mp3'),
      },
    },
    "ymmartaa": {
      word: {
        text: "Ymmärtää",
        source: require('../../assets/audio/lessons/ymmartaa/word.mp3'),
      },
      example: {
        text: "En ymmärrä tätä sanaa vielä.",
        source: require('../../assets/audio/lessons/ymmartaa/example.mp3'),
      },
    },
    "harjoitella": {
      word: {
        text: "Harjoitella",
        source: require('../../assets/audio/lessons/harjoitella/word.mp3'),
      },
      example: {
        text: "Harjoittelen ääntämistä joka ilta.",
        source: require('../../assets/audio/lessons/harjoitella/example.mp3'),
      },
    },
    "puhua": {
      word: {
        text: "Puhua",
        source: require('../../assets/audio/lessons/puhua/word.mp3'),
      },
      example: {
        text: "Puhun vähän suomea.",
        source: require('../../assets/audio/lessons/puhua/example.mp3'),
      },
    },
    "lukea": {
      word: {
        text: "Lukea",
        source: require('../../assets/audio/lessons/lukea/word.mp3'),
      },
      example: {
        text: "Luen lyhyen tarinan joka päivä.",
        source: require('../../assets/audio/lessons/lukea/example.mp3'),
      },
    },
    "kirjoittaa": {
      word: {
        text: "Kirjoittaa",
        source: require('../../assets/audio/lessons/kirjoittaa/word.mp3'),
      },
      example: {
        text: "Kirjoitan uuden sanan vihkoon.",
        source: require('../../assets/audio/lessons/kirjoittaa/example.mp3'),
      },
    },
    "eilen": {
      word: {
        text: "Eilen",
        source: require('../../assets/audio/lessons/eilen/word.mp3'),
      },
      example: {
        text: "Eilen olin kotona koko illan.",
        source: require('../../assets/audio/lessons/eilen/example.mp3'),
      },
    },
    "usein": {
      word: {
        text: "Usein",
        source: require('../../assets/audio/lessons/usein/word.mp3'),
      },
      example: {
        text: "Käyn kirjastossa usein.",
        source: require('../../assets/audio/lessons/usein/example.mp3'),
      },
    },
    "joskus": {
      word: {
        text: "Joskus",
        source: require('../../assets/audio/lessons/joskus/word.mp3'),
      },
      example: {
        text: "Joskus opiskelen kahvilassa.",
        source: require('../../assets/audio/lessons/joskus/example.mp3'),
      },
    },
    "nopeasti": {
      word: {
        text: "Nopeasti",
        source: require('../../assets/audio/lessons/nopeasti/word.mp3'),
      },
      example: {
        text: "Opettaja puhuu joskus liian nopeasti.",
        source: require('../../assets/audio/lessons/nopeasti/example.mp3'),
      },
    },
    "rauhallinen": {
      word: {
        text: "Rauhallinen",
        source: require('../../assets/audio/lessons/rauhallinen/word.mp3'),
      },
      example: {
        text: "Etsin rauhallista paikkaa opiskeluun.",
        source: require('../../assets/audio/lessons/rauhallinen/example.mp3'),
      },
    },
    "lahella": {
      word: {
        text: "Lähellä",
        source: require('../../assets/audio/lessons/lahella/word.mp3'),
      },
      example: {
        text: "Kauppa on hyvin lähellä kotia.",
        source: require('../../assets/audio/lessons/lahella/example.mp3'),
      },
    },
    "wc": {
      word: {
        text: "WC",
        source: require('../../assets/audio/lessons/wc/word.mp3'),
      },
      example: {
        text: "Missä wc on, kiitos?",
        source: require('../../assets/audio/lessons/wc/example.mp3'),
      },
    },
    "aika": {
      word: {
        text: "Aika",
        source: require('../../assets/audio/lessons/aika/word.mp3'),
      },
      example: {
        text: "Onko sinulla aikaa tänään?",
        source: require('../../assets/audio/lessons/aika/example.mp3'),
      },
    },
    "myohassa": {
      word: {
        text: "Myöhässä",
        source: require('../../assets/audio/lessons/myohassa/word.mp3'),
      },
      example: {
        text: "Olen vähän myöhässä tänään.",
        source: require('../../assets/audio/lessons/myohassa/example.mp3'),
      },
    },
  },
  stories: {
    "morning-hello": {
      title: {
        text: "Aamun tervehdys",
        source: require('../../assets/audio/stories/morning-hello/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Liisa näkee ystävänsä bussipysäkillä. Hän sanoo: Moi!",
          source: require('../../assets/audio/stories/morning-hello/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Ystävä hymyilee ja vastaa: Moi, Liisa! Mitä kuuluu?",
          source: require('../../assets/audio/stories/morning-hello/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Liisa sanoo: Hyvää, kiitos! Entä sinulle?",
          source: require('../../assets/audio/stories/morning-hello/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Ystävä sanoo: Kiitos, kaikki on hyvin. Bussi tulee pian.",
          source: require('../../assets/audio/stories/morning-hello/paragraphs/04.mp3'),
        },
      ],
    },
    "water-at-cafe": {
      title: {
        text: "Vettä kahvilassa",
        source: require('../../assets/audio/stories/water-at-cafe/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Wei menee pieneen kahvilaan Helsingissä.",
          source: require('../../assets/audio/stories/water-at-cafe/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Hän sanoo tarjoilijalle: Anteeksi, haluan vettä.",
          source: require('../../assets/audio/stories/water-at-cafe/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Tarjoilija kysyy: Haluatko myös kahvia?",
          source: require('../../assets/audio/stories/water-at-cafe/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Wei vastaa: Ei, kiitos. Vesi riittää.",
          source: require('../../assets/audio/stories/water-at-cafe/paragraphs/04.mp3'),
        },
      ],
    },
    "train-to-school": {
      title: {
        text: "Juna kouluun",
        source: require('../../assets/audio/stories/train-to-school/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Minä opiskelen suomea ja menen kouluun junalla.",
          source: require('../../assets/audio/stories/train-to-school/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Aamulla juna on hiljainen, ja minä luen kirjaa.",
          source: require('../../assets/audio/stories/train-to-school/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Koulussa ystäväni sanoo: Sinun suomesi on nyt parempaa!",
          source: require('../../assets/audio/stories/train-to-school/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Minä hymyilen ja sanon: Kiitos, minä harjoittelen joka päivä.",
          source: require('../../assets/audio/stories/train-to-school/paragraphs/04.mp3'),
        },
      ],
    },
    "breakfast-at-home": {
      title: {
        text: "Aamiainen kotona",
        source: require('../../assets/audio/stories/breakfast-at-home/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Aamulla Mei on kotona ja tekee aamiaista.",
          source: require('../../assets/audio/stories/breakfast-at-home/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Pöydällä on leipää, maitoa ja yksi omena.",
          source: require('../../assets/audio/stories/breakfast-at-home/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Mei ajattelee: Tänään minä opiskelen paljon suomea.",
          source: require('../../assets/audio/stories/breakfast-at-home/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Aamiainen on pieni, mutta hyvä.",
          source: require('../../assets/audio/stories/breakfast-at-home/paragraphs/04.mp3'),
        },
      ],
    },
    "ticket-at-station": {
      title: {
        text: "Lippu asemalla",
        source: require('../../assets/audio/stories/ticket-at-station/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Chen tulee asemalle vähän myöhässä.",
          source: require('../../assets/audio/stories/ticket-at-station/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Hän kysyy: Anteeksi, missä voin ostaa lipun?",
          source: require('../../assets/audio/stories/ticket-at-station/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Työntekijä sanoo: Lippuautomaatti on tuolla oikealla.",
          source: require('../../assets/audio/stories/ticket-at-station/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Chen kysyy vielä: Milloin juna lähtee? Työntekijä vastaa: Se lähtee ihan pian.",
          source: require('../../assets/audio/stories/ticket-at-station/paragraphs/04.mp3'),
        },
      ],
    },
    "new-student": {
      title: {
        text: "Uusi opiskelija",
        source: require('../../assets/audio/stories/new-student/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Lin on uusi opiskelija suomalaisessa koulussa.",
          source: require('../../assets/audio/stories/new-student/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Opettaja sanoo: Hei! Tervetuloa luokkaan.",
          source: require('../../assets/audio/stories/new-student/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Lin sanoo: Hei, minä olen Lin. Olen kotoisin Kiinasta.",
          source: require('../../assets/audio/stories/new-student/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Opettaja hymyilee ja sanoo: Suomesi on jo hyvää.",
          source: require('../../assets/audio/stories/new-student/paragraphs/04.mp3'),
        },
      ],
    },
    "weather-today": {
      title: {
        text: "Sää tänään",
        source: require('../../assets/audio/stories/weather-today/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Tänään ulkona on kylmä, mutta aurinko paistaa.",
          source: require('../../assets/audio/stories/weather-today/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Minä laitan lämpimän takin päälle ja menen bussilla.",
          source: require('../../assets/audio/stories/weather-today/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Ystäväni sanoo: Huomenna on ehkä lämpimämpää.",
          source: require('../../assets/audio/stories/weather-today/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Minä vastaan: Se on hyvä uutinen.",
          source: require('../../assets/audio/stories/weather-today/paragraphs/04.mp3'),
        },
      ],
    },
    "after-work-shop": {
      title: {
        text: "Kauppaan työn jälkeen",
        source: require('../../assets/audio/stories/after-work-shop/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Työn jälkeen Jun menee pieneen kauppaan.",
          source: require('../../assets/audio/stories/after-work-shop/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Hän ostaa leipää, maitoa ja kahvia.",
          source: require('../../assets/audio/stories/after-work-shop/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Jun katsoo rahojaan ja ajattelee: Täksi päiväksi tämä riittää.",
          source: require('../../assets/audio/stories/after-work-shop/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Sitten hän menee tyytyväisenä kotiin.",
          source: require('../../assets/audio/stories/after-work-shop/paragraphs/04.mp3'),
        },
      ],
    },
    "supermarket-evening": {
      title: {
        text: "Ilta supermarketissa",
        source: require('../../assets/audio/stories/supermarket-evening/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Ying menee isoon ruokakauppaan työpäivän jälkeen.",
          source: require('../../assets/audio/stories/supermarket-evening/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Hän vertaa kahden jogurtin hintaa ja huomaa, että toinen on halvempi.",
          source: require('../../assets/audio/stories/supermarket-evening/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Hedelmäosastolla omenat näyttävät hyviltä, mutta mansikat ovat tänään liian kalliita.",
          source: require('../../assets/audio/stories/supermarket-evening/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Lopuksi Ying ostaa vain sen, mitä hän oikeasti tarvitsee.",
          source: require('../../assets/audio/stories/supermarket-evening/paragraphs/04.mp3'),
        },
      ],
    },
    "library-card": {
      title: {
        text: "Kirjastokortti",
        source: require('../../assets/audio/stories/library-card/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Bo menee kirjastoon, koska hän haluaa tehdä kirjastokortin.",
          source: require('../../assets/audio/stories/library-card/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Työntekijä pyytää hänen nimeään, osoitettaan ja puhelinnumeroaan.",
          source: require('../../assets/audio/stories/library-card/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Bo kirjoittaa tiedot hitaasti ja tarkistaa ne vielä kerran.",
          source: require('../../assets/audio/stories/library-card/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Kun kortti on valmis, hän lainaa heti yhden helpon suomenkielisen kirjan.",
          source: require('../../assets/audio/stories/library-card/paragraphs/04.mp3'),
        },
      ],
    },
    "meeting-neighbor": {
      title: {
        text: "Juttelu naapurin kanssa",
        source: require('../../assets/audio/stories/meeting-neighbor/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Illalla Lan kohtaa uuden naapurinsa käytävässä.",
          source: require('../../assets/audio/stories/meeting-neighbor/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "He tervehtivät toisiaan ja puhuvat hetken talosta.",
          source: require('../../assets/audio/stories/meeting-neighbor/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Naapuri sanoo, että talo on yleensä hyvin rauhallinen.",
          source: require('../../assets/audio/stories/meeting-neighbor/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Lan ilahtuu siitä, koska hän haluaa opiskella kotona iltaisin.",
          source: require('../../assets/audio/stories/meeting-neighbor/paragraphs/04.mp3'),
        },
      ],
    },
    "wrong-bus-stop": {
      title: {
        text: "Väärällä pysäkillä",
        source: require('../../assets/audio/stories/wrong-bus-stop/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Hao jää bussista pois liian aikaisin ja huomaa heti olevansa väärässä paikassa.",
          source: require('../../assets/audio/stories/wrong-bus-stop/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Hän kysyy ohikulkijalta, miten hän pääsee takaisin asemalle.",
          source: require('../../assets/audio/stories/wrong-bus-stop/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Ohikulkija neuvoo: Mene suoraan, käänny vasemmalle ja ota seuraava bussi.",
          source: require('../../assets/audio/stories/wrong-bus-stop/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Hao on vähän myöhässä, mutta hän oppii samalla monta hyödyllistä sanaa.",
          source: require('../../assets/audio/stories/wrong-bus-stop/paragraphs/04.mp3'),
        },
      ],
    },
    "study-group": {
      title: {
        text: "Opintoryhmä",
        source: require('../../assets/audio/stories/study-group/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Kolme opiskelijaa kokoontuu kirjastoon tekemään yhdessä tehtävää.",
          source: require('../../assets/audio/stories/study-group/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Yksi heistä sanoo, että opettaja puhuu joskus liian nopeasti tunnilla.",
          source: require('../../assets/audio/stories/study-group/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Toinen vastaa, että asia helpottuu, kun puhuu enemmän ja harjoittelee ääneen.",
          source: require('../../assets/audio/stories/study-group/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Lopulta ryhmä päättää tavata ensi viikolla uudelleen ja jatkaa yhdessä opiskelua.",
          source: require('../../assets/audio/stories/study-group/paragraphs/04.mp3'),
        },
      ],
    },
    "doctor-call": {
      title: {
        text: "Lääkäriajan varaaminen",
        source: require('../../assets/audio/stories/doctor-call/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Mei ei voi hyvin, joten hän soittaa terveysasemalle aamulla.",
          source: require('../../assets/audio/stories/doctor-call/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Puhelimessa hän kertoo nimensä ja sanoo haluavansa varata ajan lääkärille.",
          source: require('../../assets/audio/stories/doctor-call/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Hoitaja kysyy hänen henkilötietonsa ja ehdottaa aikaa seuraavalle päivälle.",
          source: require('../../assets/audio/stories/doctor-call/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Puhelun jälkeen Mei kirjoittaa ajan ylös ja miettii, missä lähin apteekki on.",
          source: require('../../assets/audio/stories/doctor-call/paragraphs/04.mp3'),
        },
      ],
    },
    "apartment-viewing": {
      title: {
        text: "Asuntonaytto",
        source: require('../../assets/audio/stories/apartment-viewing/title.mp3'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Jun käy katsomassa pientä asuntoa, joka on lähellä hänen työpaikkaansa.",
          source: require('../../assets/audio/stories/apartment-viewing/paragraphs/01.mp3'),
        },
        {
          index: 2,
          text: "Välittäjä näyttää ensin olohuoneen, sitten keittiön ja lopuksi pienen makuuhuoneen.",
          source: require('../../assets/audio/stories/apartment-viewing/paragraphs/02.mp3'),
        },
        {
          index: 3,
          text: "Jun kysyy, onko alue rauhallinen iltaisin ja onko lähellä ruokakauppa.",
          source: require('../../assets/audio/stories/apartment-viewing/paragraphs/03.mp3'),
        },
        {
          index: 4,
          text: "Kun hän lähtee pois, hän ei vielä tiedä, onko tämä oikea asunto hänelle, mutta paikka tuntuu lupaavalta.",
          source: require('../../assets/audio/stories/apartment-viewing/paragraphs/04.mp3'),
        },
      ],
    },
  },
} as const;

export type AudioManifest = typeof audioManifest;

export function getLessonAudio(lessonId: string) {
  return audioManifest.lessons[lessonId as keyof typeof audioManifest.lessons] ?? null;
}

export function getStoryAudio(storyId: string) {
  return audioManifest.stories[storyId as keyof typeof audioManifest.stories] ?? null;
}
