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
        source: require('../../assets/audio/lessons/moi/word.wav'),
      },
      example: {
        text: "Moi! Mitä kuuluu?",
        source: require('../../assets/audio/lessons/moi/example.wav'),
      },
    },
    "hei": {
      word: {
        text: "Hei",
        source: require('../../assets/audio/lessons/hei/word.wav'),
      },
      example: {
        text: "Hei, minä olen Lin.",
        source: require('../../assets/audio/lessons/hei/example.wav'),
      },
    },
    "nakymin": {
      word: {
        text: "Näkemiin",
        source: require('../../assets/audio/lessons/nakymin/word.wav'),
      },
      example: {
        text: "Näkemiin, nähdään huomenna.",
        source: require('../../assets/audio/lessons/nakymin/example.wav'),
      },
    },
    "kiitos": {
      word: {
        text: "Kiitos",
        source: require('../../assets/audio/lessons/kiitos/word.wav'),
      },
      example: {
        text: "Kiitos avusta.",
        source: require('../../assets/audio/lessons/kiitos/example.wav'),
      },
    },
    "ole-hyva": {
      word: {
        text: "Ole hyvä",
        source: require('../../assets/audio/lessons/ole-hyva/word.wav'),
      },
      example: {
        text: "Kiitos. Ole hyvä.",
        source: require('../../assets/audio/lessons/ole-hyva/example.wav'),
      },
    },
    "anteeksi": {
      word: {
        text: "Anteeksi",
        source: require('../../assets/audio/lessons/anteeksi/word.wav'),
      },
      example: {
        text: "Anteeksi, missä asema on?",
        source: require('../../assets/audio/lessons/anteeksi/example.wav'),
      },
    },
    "kylla": {
      word: {
        text: "Kyllä",
        source: require('../../assets/audio/lessons/kylla/word.wav'),
      },
      example: {
        text: "Kyllä, ymmärrän.",
        source: require('../../assets/audio/lessons/kylla/example.wav'),
      },
    },
    "ei": {
      word: {
        text: "Ei",
        source: require('../../assets/audio/lessons/ei/word.wav'),
      },
      example: {
        text: "Ei, en puhu hyvin suomea.",
        source: require('../../assets/audio/lessons/ei/example.wav'),
      },
    },
    "ehka": {
      word: {
        text: "Ehkä",
        source: require('../../assets/audio/lessons/ehka/word.wav'),
      },
      example: {
        text: "Ehkä tulen myöhemmin.",
        source: require('../../assets/audio/lessons/ehka/example.wav'),
      },
    },
    "vetta": {
      word: {
        text: "Vettä",
        source: require('../../assets/audio/lessons/vetta/word.wav'),
      },
      example: {
        text: "Haluan vettä.",
        source: require('../../assets/audio/lessons/vetta/example.wav'),
      },
    },
    "kahvi": {
      word: {
        text: "Kahvi",
        source: require('../../assets/audio/lessons/kahvi/word.wav'),
      },
      example: {
        text: "Juon aamulla kahvia.",
        source: require('../../assets/audio/lessons/kahvi/example.wav'),
      },
    },
    "tee": {
      word: {
        text: "Tee",
        source: require('../../assets/audio/lessons/tee/word.wav'),
      },
      example: {
        text: "Haluatko teetä vai kahvia?",
        source: require('../../assets/audio/lessons/tee/example.wav'),
      },
    },
    "leipa": {
      word: {
        text: "Leipä",
        source: require('../../assets/audio/lessons/leipa/word.wav'),
      },
      example: {
        text: "Syön leipää aamiaisella.",
        source: require('../../assets/audio/lessons/leipa/example.wav'),
      },
    },
    "maito": {
      word: {
        text: "Maito",
        source: require('../../assets/audio/lessons/maito/word.wav'),
      },
      example: {
        text: "Ostan maitoa kaupasta.",
        source: require('../../assets/audio/lessons/maito/example.wav'),
      },
    },
    "omena": {
      word: {
        text: "Omena",
        source: require('../../assets/audio/lessons/omena/word.wav'),
      },
      example: {
        text: "Punainen omena on pöydällä.",
        source: require('../../assets/audio/lessons/omena/example.wav'),
      },
    },
    "juna": {
      word: {
        text: "Juna",
        source: require('../../assets/audio/lessons/juna/word.wav'),
      },
      example: {
        text: "Juna lähtee pian.",
        source: require('../../assets/audio/lessons/juna/example.wav'),
      },
    },
    "bussi": {
      word: {
        text: "Bussi",
        source: require('../../assets/audio/lessons/bussi/word.wav'),
      },
      example: {
        text: "Bussi tulee viidessä minuutissa.",
        source: require('../../assets/audio/lessons/bussi/example.wav'),
      },
    },
    "asema": {
      word: {
        text: "Asema",
        source: require('../../assets/audio/lessons/asema/word.wav'),
      },
      example: {
        text: "Rautatieasema on tuolla.",
        source: require('../../assets/audio/lessons/asema/example.wav'),
      },
    },
    "lippu": {
      word: {
        text: "Lippu",
        source: require('../../assets/audio/lessons/lippu/word.wav'),
      },
      example: {
        text: "Missä voin ostaa lipun?",
        source: require('../../assets/audio/lessons/lippu/example.wav'),
      },
    },
    "koulu": {
      word: {
        text: "Koulu",
        source: require('../../assets/audio/lessons/koulu/word.wav'),
      },
      example: {
        text: "Koulu on keskustassa.",
        source: require('../../assets/audio/lessons/koulu/example.wav'),
      },
    },
    "tyo": {
      word: {
        text: "Työ",
        source: require('../../assets/audio/lessons/tyo/word.wav'),
      },
      example: {
        text: "Minulla on paljon työtä tänään.",
        source: require('../../assets/audio/lessons/tyo/example.wav'),
      },
    },
    "koti": {
      word: {
        text: "Koti",
        source: require('../../assets/audio/lessons/koti/word.wav'),
      },
      example: {
        text: "Menen nyt kotiin.",
        source: require('../../assets/audio/lessons/koti/example.wav'),
      },
    },
    "huone": {
      word: {
        text: "Huone",
        source: require('../../assets/audio/lessons/huone/word.wav'),
      },
      example: {
        text: "Huone on pieni mutta valoisa.",
        source: require('../../assets/audio/lessons/huone/example.wav'),
      },
    },
    "kauppa": {
      word: {
        text: "Kauppa",
        source: require('../../assets/audio/lessons/kauppa/word.wav'),
      },
      example: {
        text: "Kauppa on auki vielä.",
        source: require('../../assets/audio/lessons/kauppa/example.wav'),
      },
    },
    "raha": {
      word: {
        text: "Raha",
        source: require('../../assets/audio/lessons/raha/word.wav'),
      },
      example: {
        text: "Minulla ei ole paljon rahaa.",
        source: require('../../assets/audio/lessons/raha/example.wav'),
      },
    },
    "ystava": {
      word: {
        text: "Ystävä",
        source: require('../../assets/audio/lessons/ystava/word.wav'),
      },
      example: {
        text: "Hän on minun ystäväni.",
        source: require('../../assets/audio/lessons/ystava/example.wav'),
      },
    },
    "perhe": {
      word: {
        text: "Perhe",
        source: require('../../assets/audio/lessons/perhe/word.wav'),
      },
      example: {
        text: "Minun perheeni asuu Kiinassa.",
        source: require('../../assets/audio/lessons/perhe/example.wav'),
      },
    },
    "opettaja": {
      word: {
        text: "Opettaja",
        source: require('../../assets/audio/lessons/opettaja/word.wav'),
      },
      example: {
        text: "Opettaja puhuu hitaasti.",
        source: require('../../assets/audio/lessons/opettaja/example.wav'),
      },
    },
    "opiskelija": {
      word: {
        text: "Opiskelija",
        source: require('../../assets/audio/lessons/opiskelija/word.wav'),
      },
      example: {
        text: "Olen uusi opiskelija.",
        source: require('../../assets/audio/lessons/opiskelija/example.wav'),
      },
    },
    "suomi": {
      word: {
        text: "Suomi",
        source: require('../../assets/audio/lessons/suomi/word.wav'),
      },
      example: {
        text: "Opiskelen suomea.",
        source: require('../../assets/audio/lessons/suomi/example.wav'),
      },
    },
    "kiina": {
      word: {
        text: "Kiina",
        source: require('../../assets/audio/lessons/kiina/word.wav'),
      },
      example: {
        text: "Olen kotoisin Kiinasta.",
        source: require('../../assets/audio/lessons/kiina/example.wav'),
      },
    },
    "englanti": {
      word: {
        text: "Englanti",
        source: require('../../assets/audio/lessons/englanti/word.wav'),
      },
      example: {
        text: "Puhutko englantia?",
        source: require('../../assets/audio/lessons/englanti/example.wav'),
      },
    },
    "mina": {
      word: {
        text: "Minä",
        source: require('../../assets/audio/lessons/mina/word.wav'),
      },
      example: {
        text: "Minä olen täällä.",
        source: require('../../assets/audio/lessons/mina/example.wav'),
      },
    },
    "sina": {
      word: {
        text: "Sinä",
        source: require('../../assets/audio/lessons/sina/word.wav'),
      },
      example: {
        text: "Sinä puhut hyvin.",
        source: require('../../assets/audio/lessons/sina/example.wav'),
      },
    },
    "han": {
      word: {
        text: "Hän",
        source: require('../../assets/audio/lessons/han/word.wav'),
      },
      example: {
        text: "Hän asuu Espoossa.",
        source: require('../../assets/audio/lessons/han/example.wav'),
      },
    },
    "missa": {
      word: {
        text: "Missä",
        source: require('../../assets/audio/lessons/missa/word.wav'),
      },
      example: {
        text: "Missä wc on?",
        source: require('../../assets/audio/lessons/missa/example.wav'),
      },
    },
    "mita": {
      word: {
        text: "Mitä",
        source: require('../../assets/audio/lessons/mita/word.wav'),
      },
      example: {
        text: "Mitä tämä tarkoittaa?",
        source: require('../../assets/audio/lessons/mita/example.wav'),
      },
    },
    "milloin": {
      word: {
        text: "Milloin",
        source: require('../../assets/audio/lessons/milloin/word.wav'),
      },
      example: {
        text: "Milloin juna lähtee?",
        source: require('../../assets/audio/lessons/milloin/example.wav'),
      },
    },
    "tanaan": {
      word: {
        text: "Tänään",
        source: require('../../assets/audio/lessons/tanaan/word.wav'),
      },
      example: {
        text: "Tänään on kylmä.",
        source: require('../../assets/audio/lessons/tanaan/example.wav'),
      },
    },
    "huomenna": {
      word: {
        text: "Huomenna",
        source: require('../../assets/audio/lessons/huomenna/word.wav'),
      },
      example: {
        text: "Nähdään huomenna.",
        source: require('../../assets/audio/lessons/huomenna/example.wav'),
      },
    },
    "nyt": {
      word: {
        text: "Nyt",
        source: require('../../assets/audio/lessons/nyt/word.wav'),
      },
      example: {
        text: "Minun täytyy mennä nyt.",
        source: require('../../assets/audio/lessons/nyt/example.wav'),
      },
    },
    "aamu": {
      word: {
        text: "Aamu",
        source: require('../../assets/audio/lessons/aamu/word.wav'),
      },
      example: {
        text: "Aamu on rauhallinen.",
        source: require('../../assets/audio/lessons/aamu/example.wav'),
      },
    },
    "ilta": {
      word: {
        text: "Ilta",
        source: require('../../assets/audio/lessons/ilta/word.wav'),
      },
      example: {
        text: "Hyvää iltaa!",
        source: require('../../assets/audio/lessons/ilta/example.wav'),
      },
    },
    "iso": {
      word: {
        text: "Iso",
        source: require('../../assets/audio/lessons/iso/word.wav'),
      },
      example: {
        text: "Tämä talo on iso.",
        source: require('../../assets/audio/lessons/iso/example.wav'),
      },
    },
    "pieni": {
      word: {
        text: "Pieni",
        source: require('../../assets/audio/lessons/pieni/word.wav'),
      },
      example: {
        text: "Minulla on pieni laukku.",
        source: require('../../assets/audio/lessons/pieni/example.wav'),
      },
    },
    "hyva": {
      word: {
        text: "Hyvä",
        source: require('../../assets/audio/lessons/hyva/word.wav'),
      },
      example: {
        text: "Se on hyvä idea.",
        source: require('../../assets/audio/lessons/hyva/example.wav'),
      },
    },
    "kylma": {
      word: {
        text: "Kylmä",
        source: require('../../assets/audio/lessons/kylma/word.wav'),
      },
      example: {
        text: "Ulkona on kylmä.",
        source: require('../../assets/audio/lessons/kylma/example.wav'),
      },
    },
    "lammin": {
      word: {
        text: "Lämmin",
        source: require('../../assets/audio/lessons/lammin/word.wav'),
      },
      example: {
        text: "Tänään on lämmin päivä.",
        source: require('../../assets/audio/lessons/lammin/example.wav'),
      },
    },
    "aurinko": {
      word: {
        text: "Aurinko",
        source: require('../../assets/audio/lessons/aurinko/word.wav'),
      },
      example: {
        text: "Aurinko paistaa.",
        source: require('../../assets/audio/lessons/aurinko/example.wav'),
      },
    },
    "sataa": {
      word: {
        text: "Sataa",
        source: require('../../assets/audio/lessons/sataa/word.wav'),
      },
      example: {
        text: "Tänään sataa vettä.",
        source: require('../../assets/audio/lessons/sataa/example.wav'),
      },
    },
  },
  stories: {
    "morning-hello": {
      title: {
        text: "Aamun tervehdys",
        source: require('../../assets/audio/stories/morning-hello/title.wav'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Liisa näkee ystävänsä bussipysäkillä. Hän sanoo: Moi!",
          source: require('../../assets/audio/stories/morning-hello/paragraphs/01.wav'),
        },
        {
          index: 2,
          text: "Ystävä hymyilee ja vastaa: Moi, Liisa! Mitä kuuluu?",
          source: require('../../assets/audio/stories/morning-hello/paragraphs/02.wav'),
        },
        {
          index: 3,
          text: "Liisa sanoo: Hyvää kuuluu. Kiitos! Ja sinä?",
          source: require('../../assets/audio/stories/morning-hello/paragraphs/03.wav'),
        },
        {
          index: 4,
          text: "Ystävä sanoo: Kyllä, kaikki on hyvin. Bussi tulee pian.",
          source: require('../../assets/audio/stories/morning-hello/paragraphs/04.wav'),
        },
      ],
    },
    "water-at-cafe": {
      title: {
        text: "Vettä kahvilassa",
        source: require('../../assets/audio/stories/water-at-cafe/title.wav'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Wei menee pieneen kahvilaan Helsingissä.",
          source: require('../../assets/audio/stories/water-at-cafe/paragraphs/01.wav'),
        },
        {
          index: 2,
          text: "Hän sanoo tarjoilijalle: Anteeksi, haluan vettä.",
          source: require('../../assets/audio/stories/water-at-cafe/paragraphs/02.wav'),
        },
        {
          index: 3,
          text: "Tarjoilija kysyy: Haluatko myös kahvia?",
          source: require('../../assets/audio/stories/water-at-cafe/paragraphs/03.wav'),
        },
        {
          index: 4,
          text: "Wei vastaa: Ei, kiitos. Vettä on hyvä.",
          source: require('../../assets/audio/stories/water-at-cafe/paragraphs/04.wav'),
        },
      ],
    },
    "train-to-school": {
      title: {
        text: "Juna kouluun",
        source: require('../../assets/audio/stories/train-to-school/title.wav'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Minä opiskelen suomea ja menen kouluun junalla.",
          source: require('../../assets/audio/stories/train-to-school/paragraphs/01.wav'),
        },
        {
          index: 2,
          text: "Aamulla juna on hiljainen, ja minä luen kirjaa.",
          source: require('../../assets/audio/stories/train-to-school/paragraphs/02.wav'),
        },
        {
          index: 3,
          text: "Koulussa ystäväni sanoo: Sinun suomi on parempi nyt!",
          source: require('../../assets/audio/stories/train-to-school/paragraphs/03.wav'),
        },
        {
          index: 4,
          text: "Minä hymyilen ja sanon: Kiitos, minä harjoittelen joka päivä.",
          source: require('../../assets/audio/stories/train-to-school/paragraphs/04.wav'),
        },
      ],
    },
    "breakfast-at-home": {
      title: {
        text: "Aamiainen kotona",
        source: require('../../assets/audio/stories/breakfast-at-home/title.wav'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Aamulla Mei on kotona ja tekee aamiaista.",
          source: require('../../assets/audio/stories/breakfast-at-home/paragraphs/01.wav'),
        },
        {
          index: 2,
          text: "Pöydällä on leipää, maitoa ja yksi omena.",
          source: require('../../assets/audio/stories/breakfast-at-home/paragraphs/02.wav'),
        },
        {
          index: 3,
          text: "Mei ajattelee: Tänään minä opiskelen paljon suomea.",
          source: require('../../assets/audio/stories/breakfast-at-home/paragraphs/03.wav'),
        },
        {
          index: 4,
          text: "Aamiainen on pieni, mutta hyvä.",
          source: require('../../assets/audio/stories/breakfast-at-home/paragraphs/04.wav'),
        },
      ],
    },
    "ticket-at-station": {
      title: {
        text: "Lippu asemalla",
        source: require('../../assets/audio/stories/ticket-at-station/title.wav'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Chen tulee asemalle vähän myöhässä.",
          source: require('../../assets/audio/stories/ticket-at-station/paragraphs/01.wav'),
        },
        {
          index: 2,
          text: "Hän kysyy: Anteeksi, missä voin ostaa lipun?",
          source: require('../../assets/audio/stories/ticket-at-station/paragraphs/02.wav'),
        },
        {
          index: 3,
          text: "Työntekijä sanoo: Lippuautomaatti on tuolla oikealla.",
          source: require('../../assets/audio/stories/ticket-at-station/paragraphs/03.wav'),
        },
        {
          index: 4,
          text: "Chen kysyy vielä: Milloin juna lähtee? Työntekijä vastaa: Nyt pian.",
          source: require('../../assets/audio/stories/ticket-at-station/paragraphs/04.wav'),
        },
      ],
    },
    "new-student": {
      title: {
        text: "Uusi opiskelija",
        source: require('../../assets/audio/stories/new-student/title.wav'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Lin on uusi opiskelija suomalaisessa koulussa.",
          source: require('../../assets/audio/stories/new-student/paragraphs/01.wav'),
        },
        {
          index: 2,
          text: "Opettaja sanoo: Hei! Tervetuloa luokkaan.",
          source: require('../../assets/audio/stories/new-student/paragraphs/02.wav'),
        },
        {
          index: 3,
          text: "Lin sanoo: Hei, minä olen Lin. Olen kotoisin Kiinasta.",
          source: require('../../assets/audio/stories/new-student/paragraphs/03.wav'),
        },
        {
          index: 4,
          text: "Opettaja hymyilee ja sanoo: Sinun suomi alkaa hyvin.",
          source: require('../../assets/audio/stories/new-student/paragraphs/04.wav'),
        },
      ],
    },
    "weather-today": {
      title: {
        text: "Sää tänään",
        source: require('../../assets/audio/stories/weather-today/title.wav'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Tänään ulkona on kylmä, mutta aurinko paistaa.",
          source: require('../../assets/audio/stories/weather-today/paragraphs/01.wav'),
        },
        {
          index: 2,
          text: "Minä laitan lämpimän takin päälle ja menen bussiin.",
          source: require('../../assets/audio/stories/weather-today/paragraphs/02.wav'),
        },
        {
          index: 3,
          text: "Ystäväni sanoo: Huomenna on ehkä lämpimämpi päivä.",
          source: require('../../assets/audio/stories/weather-today/paragraphs/03.wav'),
        },
        {
          index: 4,
          text: "Minä vastaan: Se on hyvä uutinen.",
          source: require('../../assets/audio/stories/weather-today/paragraphs/04.wav'),
        },
      ],
    },
    "after-work-shop": {
      title: {
        text: "Kauppaan työn jälkeen",
        source: require('../../assets/audio/stories/after-work-shop/title.wav'),
      },
      paragraphs: [
        {
          index: 1,
          text: "Työn jälkeen Jun menee pieneen kauppaan.",
          source: require('../../assets/audio/stories/after-work-shop/paragraphs/01.wav'),
        },
        {
          index: 2,
          text: "Hän ostaa leipää, maitoa ja kahvia.",
          source: require('../../assets/audio/stories/after-work-shop/paragraphs/02.wav'),
        },
        {
          index: 3,
          text: "Jun katsoo rahaa ja ajattelee: Tänään tämä riittää.",
          source: require('../../assets/audio/stories/after-work-shop/paragraphs/03.wav'),
        },
        {
          index: 4,
          text: "Sitten hän menee tyytyväisenä kotiin.",
          source: require('../../assets/audio/stories/after-work-shop/paragraphs/04.wav'),
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
