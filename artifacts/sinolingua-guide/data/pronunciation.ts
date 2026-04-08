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
    name: "First Tone (阴平)",
    description: "High and level. Start high and stay there — like a sustained musical note.",
    symbol: "ā",
    pitch: "55 (High Level)",
    example: "妈",
    examplePinyin: "mā",
    exampleMeaning: "mother",
    mnemonic: "Flat line on a heart monitor — steady and high"
  },
  {
    tone: 2,
    name: "Second Tone (阳平)",
    description: "Rising tone. Like asking a question in English — goes from mid to high.",
    symbol: "á",
    pitch: "35 (Rising)",
    example: "麻",
    examplePinyin: "má",
    exampleMeaning: "hemp / numb",
    mnemonic: "Arrow pointing up — your voice rises like a question"
  },
  {
    tone: 3,
    name: "Third Tone (上声)",
    description: "Dipping tone. Falls low then comes back up. In normal speech, often just falls (half third tone).",
    symbol: "ǎ",
    pitch: "214 (Dipping)",
    example: "马",
    examplePinyin: "mǎ",
    exampleMeaning: "horse",
    mnemonic: "A valley — dip down then rise back up"
  },
  {
    tone: 4,
    name: "Fourth Tone (去声)",
    description: "Falling tone. Sharp drop from high to low. Like an abrupt command or 'stop!'",
    symbol: "à",
    pitch: "51 (Falling)",
    example: "骂",
    examplePinyin: "mà",
    exampleMeaning: "scold",
    mnemonic: "Arrow pointing down sharply — a sudden drop"
  },
  {
    tone: 0,
    name: "Neutral Tone (轻声)",
    description: "Light and short, with no particular pitch contour. Often appears in particles and certain words.",
    symbol: "a",
    pitch: "Neutral",
    example: "吗",
    examplePinyin: "ma",
    exampleMeaning: "question particle",
    mnemonic: "A feather — light, quick, effortless"
  }
];

export const tonePairs: TonePair[] = [
  {
    id: 1,
    word: "mā/má/mǎ/mà",
    pairs: [
      { pinyin: "mā", tone: 1, meaning: "妈 — mother" },
      { pinyin: "má", tone: 2, meaning: "麻 — hemp / numb" },
      { pinyin: "mǎ", tone: 3, meaning: "马 — horse" },
      { pinyin: "mà", tone: 4, meaning: "骂 — scold" }
    ],
    note: "The classic 4-tone example! One syllable 'ma' with four totally different meanings depending on tone."
  },
  {
    id: 2,
    word: "bāo/báo/bǎo/bào",
    pairs: [
      { pinyin: "bāo", tone: 1, meaning: "包 — bag / wrap" },
      { pinyin: "báo", tone: 2, meaning: "薄 — thin" },
      { pinyin: "bǎo", tone: 3, meaning: "保 — protect / treasure" },
      { pinyin: "bào", tone: 4, meaning: "报 — report / newspaper" }
    ],
    note: "Very different meanings — confusing bǎo (protect) with bào (report) is a common error!"
  },
  {
    id: 3,
    word: "shī/shí/shǐ/shì",
    pairs: [
      { pinyin: "shī", tone: 1, meaning: "诗 — poetry / teacher (老师)" },
      { pinyin: "shí", tone: 2, meaning: "时 — time / ten (十)" },
      { pinyin: "shǐ", tone: 3, meaning: "史 — history" },
      { pinyin: "shì", tone: 4, meaning: "事 — matter / affair" }
    ],
    note: "The sh- initial is tricky for many learners. The retroflex 'sh' sound must be mastered first."
  },
  {
    id: 4,
    word: "wèn/wén",
    pairs: [
      { pinyin: "wén", tone: 2, meaning: "文 — culture / literature / text" },
      { pinyin: "wèn", tone: 4, meaning: "问 — ask / question" }
    ],
    note: "Very common pair. 问题 (wèntí) means 'problem/question', not 文题."
  }
];

export const trickyPronunciations: PronunciationItem[] = [
  {
    id: 1,
    character: "是",
    pinyin: "shì",
    tone: 4,
    meaning: "to be / is / are",
    audioDescription: "Start high and fall sharply: 'shrrr-SHRRR' dropping",
    tip: "The 'sh' is retroflex — curl your tongue tip back toward the roof of your mouth. Do NOT use the English 'sh' from 'she'.",
    category: "tricky"
  },
  {
    id: 2,
    character: "这",
    pinyin: "zhè",
    tone: 4,
    meaning: "this",
    audioDescription: "Retroflex 'zh', similar to 'j' but with tongue curled back",
    tip: "zh-, ch-, sh-, r- are all retroflex consonants. Your tongue tip curls back — this is the most common pronunciation challenge for English speakers.",
    category: "initial"
  },
  {
    id: 3,
    character: "女",
    pinyin: "nǚ",
    tone: 3,
    meaning: "woman / female",
    audioDescription: "The ü sound: round your lips as if saying 'oo' but say 'ee'",
    tip: "The ü vowel doesn't exist in English! Round your lips into a tight 'O' shape, then say 'ee'. This applies to lü, nü, and after j, q, x (written as just 'u' there).",
    similar: [{ character: "鱼", pinyin: "yú", meaning: "fish" }],
    category: "final"
  },
  {
    id: 4,
    character: "人",
    pinyin: "rén",
    tone: 2,
    meaning: "person / people",
    audioDescription: "The 'r' in Mandarin is unlike English — softer, buzzing",
    tip: "Mandarin 'r' is made with the tongue in the retroflex position, creating a buzzing sound similar to the French 'j' in 'je'. NOT like English 'r'.",
    category: "initial"
  },
  {
    id: 5,
    character: "学",
    pinyin: "xué",
    tone: 2,
    meaning: "study / learn",
    audioDescription: "x- is lighter than English 'sh', more like 'sy'",
    tip: "x-, j-, q- are palatal consonants. x sounds like a 'sh' made further forward in the mouth, almost 'sy'. j is like 'jy', q is like 'chy'.",
    category: "initial"
  },
  {
    id: 6,
    character: "和",
    pinyin: "hé",
    tone: 2,
    meaning: "and / harmony / peace",
    audioDescription: "h- is a light breathy sound, not English 'h'",
    tip: "Chinese 'h' is slightly fricative, like a gentle 'kh'. It's breathier than English 'h'. The -e final is a back vowel, not like English 'e' in 'bed'.",
    category: "initial"
  },
  {
    id: 7,
    character: "二",
    pinyin: "èr",
    tone: 4,
    meaning: "two",
    audioDescription: "The -er final: curl tongue back while saying 'uh'",
    tip: "The -er/r ending is an 'r-colored vowel'. Say 'uh' and then curl your tongue back. Common in 儿 (ér), 而 (ér). Also used in 'erhua' to make words sound more colloquial.",
    category: "final"
  },
  {
    id: 8,
    character: "不",
    pinyin: "bù",
    tone: 4,
    meaning: "not / no",
    audioDescription: "Tone changes! 不 changes from 4th tone to 2nd tone before another 4th tone word",
    tip: "Tone sandhi: 不 is normally 4th tone, but becomes 2nd tone (bú) before another 4th tone. Example: 不对 = bú duì (not correct). This is automatic in native speech.",
    category: "tone"
  },
  {
    id: 9,
    character: "一",
    pinyin: "yī",
    tone: 1,
    meaning: "one",
    audioDescription: "One is a tone change master — changes based on what follows",
    tip: "一 changes tone depending on context: before 4th tone → 2nd tone (一个 yí gè); before 1st/2nd/3rd tone → 4th tone (一天 yì tiān); standalone → 1st tone. Practice this rule!",
    category: "tone"
  },
  {
    id: 10,
    character: "哦",
    pinyin: "ó / ò",
    tone: 2,
    meaning: "oh! / I see (particle)",
    audioDescription: "Different tones change meaning dramatically for particles",
    tip: "Sentence-final particles like 啊, 哦, 呢, 吧, 嘛 carry tone and change the feeling of sentences. 哦 (ó) = surprised realization, 哦 (ò) = sudden understanding. Pay attention to these!",
    category: "tone"
  }
];
