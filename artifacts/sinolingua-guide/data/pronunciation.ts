export interface PronunciationItem {
  id: number;
  character: string;
  pinyin: string;
  tone: 1 | 2 | 3 | 4 | 0;
  meaning: string;
  audioDescription: string;
  tip: string;
  similar?: { character: string; pinyin: string; meaning: string }[];
  category: "tone" | "initial" | "final" | "tricky";
}

export interface ToneRule {
  tone: number;
  name: string;
  description: string;
  symbol: string;
  pitch: string;
  example: string;
  examplePinyin: string;
  exampleMeaning: string;
  mnemonic: string;
}

export interface TonePair {
  id: number;
  word: string;
  pairs: Array<{
    pinyin: string;
    tone: number;
    meaning: string;
  }>;
  note: string;
}

export const toneRules: ToneRule[] = [
  {
    tone: 1,
    name: "1-й тон (阴平)",
    description: "Высокий и ровный. Начинай высоко и держи высоту — как затяжная музыкальная нота.",
    symbol: "ā",
    pitch: "55 (высокий ровный)",
    example: "妈",
    examplePinyin: "mā",
    exampleMeaning: "мама",
    mnemonic: "Прямая линия на кардиограмме — ровно и высоко"
  },
  {
    tone: 2,
    name: "2-й тон (阳平)",
    description: "Восходящий тон. Как в русском вопросе — голос идёт от среднего вверх.",
    symbol: "á",
    pitch: "35 (восходящий)",
    example: "麻",
    examplePinyin: "má",
    exampleMeaning: "конопля / онемение",
    mnemonic: "Стрелка вверх — голос поднимается, как при вопросе"
  },
  {
    tone: 3,
    name: "3-й тон (上声)",
    description: "Ныряющий тон. Сначала падает вниз, затем поднимается. В быстрой речи часто просто падает (половина 3-го тона).",
    symbol: "ǎ",
    pitch: "214 (ныряющий)",
    example: "马",
    examplePinyin: "mǎ",
    exampleMeaning: "лошадь",
    mnemonic: "Долина — ныряй вниз и поднимайся обратно"
  },
  {
    tone: 4,
    name: "4-й тон (去声)",
    description: "Падающий тон. Резкое падение с высокого вниз. Как командный «Стоп!».",
    symbol: "à",
    pitch: "51 (падающий)",
    example: "骂",
    examplePinyin: "mà",
    exampleMeaning: "ругать",
    mnemonic: "Стрелка резко вниз — как удар кулаком по столу"
  },
  {
    tone: 0,
    name: "Нейтральный тон (轻声)",
    description: "Лёгкий и короткий, без определённого контура. Часто появляется в частицах и некоторых словах.",
    symbol: "a",
    pitch: "Нейтральный",
    example: "吗",
    examplePinyin: "ma",
    exampleMeaning: "вопросительная частица",
    mnemonic: "Пёрышко — лёгко, быстро, без усилий"
  }
];

export const tonePairs: TonePair[] = [
  {
    id: 1,
    word: "mā/má/mǎ/mà",
    pairs: [
      { pinyin: "mā", tone: 1, meaning: "妈 — мама" },
      { pinyin: "má", tone: 2, meaning: "麻 — конопля / онемение" },
      { pinyin: "mǎ", tone: 3, meaning: "马 — лошадь" },
      { pinyin: "mà", tone: 4, meaning: "骂 — ругать" }
    ],
    note: "Классический пример 4 тонов! Один слог «ma» с четырьмя совершенно разными значениями — только тон меняет смысл."
  },
  {
    id: 2,
    word: "bāo/báo/bǎo/bào",
    pairs: [
      { pinyin: "bāo", tone: 1, meaning: "包 — сумка / заворачивать" },
      { pinyin: "báo", tone: 2, meaning: "薄 — тонкий" },
      { pinyin: "bǎo", tone: 3, meaning: "保 — защищать / беречь" },
      { pinyin: "bào", tone: 4, meaning: "报 — сообщение / газета" }
    ],
    note: "Очень разные значения — путать bǎo (защищать) с bào (сообщение) — распространённая ошибка!"
  },
  {
    id: 3,
    word: "shī/shí/shǐ/shì",
    pairs: [
      { pinyin: "shī", tone: 1, meaning: "诗 — поэзия / учитель (老师)" },
      { pinyin: "shí", tone: 2, meaning: "时 — время / десять (十)" },
      { pinyin: "shǐ", tone: 3, meaning: "史 — история" },
      { pinyin: "shì", tone: 4, meaning: "事 — дело / событие" }
    ],
    note: "Начальный звук sh- труден для многих студентов. Сначала освой ретрофлексный sh-, потом работай над тонами."
  },
  {
    id: 4,
    word: "wèn/wén",
    pairs: [
      { pinyin: "wén", tone: 2, meaning: "文 — культура / литература / текст" },
      { pinyin: "wèn", tone: 4, meaning: "问 — спрашивать / вопрос" }
    ],
    note: "Очень распространённая пара. 问题 (wèntí) — «проблема/вопрос», а не 文题."
  }
];

export const trickyPronunciations: PronunciationItem[] = [
  {
    id: 1,
    character: "是",
    pinyin: "shì",
    tone: 4,
    meaning: "быть / является",
    audioDescription: "Начни высоко и резко упади вниз",
    tip: "Звук «sh» ретрофлексный — загни кончик языка назад к нёбу. НЕ используй английский «sh» из слова «she». Это совсем другой звук!",
    category: "tricky"
  },
  {
    id: 2,
    character: "这",
    pinyin: "zhè",
    tone: 4,
    meaning: "этот",
    audioDescription: "Ретрофлексный «zh», похожий на «дж» с загнутым языком",
    tip: "zh-, ch-, sh-, r- — все ретрофлексные согласные. Кончик языка загибается назад. Это самая распространённая трудность для русскоязычных студентов.",
    category: "initial"
  },
  {
    id: 3,
    character: "女",
    pinyin: "nǚ",
    tone: 3,
    meaning: "женщина / женский",
    audioDescription: "Звук ü: округли губы как для «у», но произноси «и»",
    tip: "Звук ü отсутствует в русском! Вытяни губы в трубочку как для «у», затем произноси «и». Этот звук встречается в lü, nü и после j, q, x (там пишется просто «u»).",
    similar: [{ character: "鱼", pinyin: "yú", meaning: "рыба" }],
    category: "final"
  },
  {
    id: 4,
    character: "人",
    pinyin: "rén",
    tone: 2,
    meaning: "человек / люди",
    audioDescription: "Мандаринский «r» непохож на русский — мягче, с жужжанием",
    tip: "Мандаринский «r» — ретрофлексный, создаёт жужжащий звук похожий на французское «j» в слове «je». НЕ как русский «р». Представь мягкое жужжание.",
    category: "initial"
  },
  {
    id: 5,
    character: "学",
    pinyin: "xué",
    tone: 2,
    meaning: "учиться / изучать",
    audioDescription: "x- мягче, чем «ш» — почти как «сь»",
    tip: "Звуки x-, j-, q- — палатальные согласные. x похож на «ш», произносимый дальше вперёд, почти как «сь». j — как «дзь», q — как «ць».",
    category: "initial"
  },
  {
    id: 6,
    character: "和",
    pinyin: "hé",
    tone: 2,
    meaning: "и / гармония / мир",
    audioDescription: "h- лёгкий и придыхательный",
    tip: "Китайский «h» немного фрикативный — как лёгкое «кх». Гласный «e» здесь задний: не как в слове «эй», а глубже. В «he» — почти как «хэ» с задним «э».",
    category: "initial"
  },
  {
    id: 7,
    character: "二",
    pinyin: "èr",
    tone: 4,
    meaning: "два",
    audioDescription: "Финаль -er: загни язык назад, произнося «э»",
    tip: "Финаль -er/r — это «r-окрашенная гласная». Говори «э» и загни язык назад. Встречается в 儿 (ér), 而 (ér). Также используется в «эрхуа» — придаёт словам разговорный оттенок.",
    category: "final"
  },
  {
    id: 8,
    character: "不",
    pinyin: "bù",
    tone: 4,
    meaning: "не / нет",
    audioDescription: "Тон меняется! 不 меняется с 4-го на 2-й перед другим 4-м тоном",
    tip: "Тональный сандхи: 不 обычно 4-й тон, но становится 2-м (bú) перед другим 4-м тоном. Например: 不对 = bú duì (неправильно). В быстрой речи это происходит автоматически.",
    category: "tone"
  },
  {
    id: 9,
    character: "一",
    pinyin: "yī",
    tone: 1,
    meaning: "один",
    audioDescription: "«Один» — мастер тональных изменений",
    tip: "Тон 一 меняется по контексту: перед 4-м тоном → 2-й (一个 yí gè); перед 1/2/3-м тоном → 4-й (一天 yì tiān); отдельно стоящий → 1-й. Это правило нужно выучить!",
    category: "tone"
  },
  {
    id: 10,
    character: "哦",
    pinyin: "ó / ò",
    tone: 2,
    meaning: "о! / понял (частица)",
    audioDescription: "Разные тоны кардинально меняют смысл частиц",
    tip: "Финальные частицы 啊, 哦, 呢, 吧, 嘛 несут тон и меняют оттенок предложения. 哦 (ó) = удивлённое открытие, 哦 (ò) = внезапное понимание. Обращай внимание!",
    category: "tone"
  }
];
