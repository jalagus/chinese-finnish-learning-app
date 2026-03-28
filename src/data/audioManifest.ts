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
  },
} as const;

export type AudioManifest = typeof audioManifest;

export function getLessonAudio(lessonId: string) {
  return audioManifest.lessons[lessonId as keyof typeof audioManifest.lessons] ?? null;
}

export function getStoryAudio(storyId: string) {
  return audioManifest.stories[storyId as keyof typeof audioManifest.stories] ?? null;
}
