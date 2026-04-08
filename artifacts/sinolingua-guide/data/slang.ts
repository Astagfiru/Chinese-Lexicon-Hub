export interface SlangEntry {
  id: number;
  word: string;
  pinyin: string;
  type: "slang" | "abbreviation" | "internet";
  meaning: string;
  example: string;
  exampleTranslation: string;
  origin?: string;
  tags: string[];
}

export const slangEntries: SlangEntry[] = [
  {
    id: 1,
    word: "YYDS",
    pinyin: "yǒng yuǎn de shén",
    type: "abbreviation",
    meaning: "永远的神 (Forever a god) — used to express that someone or something is the absolute best, legendary, unbeatable.",
    example: "这个歌手YYDS，我超爱！",
    exampleTranslation: "This singer is a legend forever — I love them so much!",
    origin: "Esports community, went mainstream around 2021",
    tags: ["praise", "internet", "youth"]
  },
  {
    id: 2,
    word: "躺平",
    pinyin: "tǎng píng",
    type: "slang",
    meaning: "Lie flat — to reject hustle culture and societal pressure; choosing a minimal, low-effort lifestyle as a form of protest.",
    example: "我决定躺平了，不卷了。",
    exampleTranslation: "I've decided to lie flat — no more rat race.",
    origin: "Originated in 2021 among young people disillusioned with 996 work culture",
    tags: ["lifestyle", "youth", "social commentary"]
  },
  {
    id: 3,
    word: "内卷",
    pinyin: "nèi juǎn",
    type: "slang",
    meaning: "Involution — intense, often futile competition within a system; grinding harder and harder for diminishing returns.",
    example: "现在大学生太卷了，人人都在熬夜。",
    exampleTranslation: "College students are so caught up in involution now — everyone is pulling all-nighters.",
    origin: "Academic term that became viral slang around 2020",
    tags: ["work", "competition", "social commentary"]
  },
  {
    id: 4,
    word: "打工人",
    pinyin: "dǎ gōng rén",
    type: "slang",
    meaning: "Laborer / wage slave — self-deprecating term for a working person, often used humorously to express the grind of daily work life.",
    example: "打工人，打工魂，打工都是人上人。",
    exampleTranslation: "Workers, workers' spirit — workers are the best of all.",
    origin: "Went viral in 2020 as a humorous working-class identity",
    tags: ["work", "humor", "identity"]
  },
  {
    id: 5,
    word: "OMG",
    pinyin: "ō mā gē",
    type: "abbreviation",
    meaning: "Oh My God — used identically to the English expression, extremely common in Chinese internet culture and casual speech.",
    example: "OMG，这个太好吃了！",
    exampleTranslation: "OMG, this is so delicious!",
    tags: ["exclamation", "internet", "borrowed"]
  },
  {
    id: 6,
    word: "凡尔赛",
    pinyin: "fán ěr sài",
    type: "slang",
    meaning: "Versailles — subtle boasting disguised as humility or complaint; humblebrag. Named after the Palace of Versailles.",
    example: "他又开始凡尔赛了：'唉，又收到两份工作邀请，真烦。'",
    exampleTranslation: "He's doing the Versailles thing again: 'Sigh, got two more job offers, so annoying.'",
    origin: "From a manga/webtoon character, became viral in 2020",
    tags: ["social media", "attitude", "humor"]
  },
  {
    id: 7,
    word: "佛系",
    pinyin: "fó xì",
    type: "slang",
    meaning: "Buddhist-style — a carefree, indifferent attitude; not caring about outcomes, going with the flow.",
    example: "他很佛系，什么事都不太在意。",
    exampleTranslation: "He has a very Buddhist vibe — he doesn't really care about anything.",
    origin: "Became popular around 2017",
    tags: ["attitude", "lifestyle", "zen"]
  },
  {
    id: 8,
    word: "666",
    pinyin: "liù liù liù",
    type: "internet",
    meaning: "Awesome / impressive — from gaming culture where '6' sounds like '溜' (liū, meaning smooth/skilled). Used to express admiration.",
    example: "你的操作666，太厉害了！",
    exampleTranslation: "Your moves are insane — so impressive!",
    origin: "Online gaming community",
    tags: ["praise", "gaming", "internet"]
  },
  {
    id: 9,
    word: "996",
    pinyin: "jiǔ jiǔ liù",
    type: "abbreviation",
    meaning: "Work schedule of 9am to 9pm, 6 days a week — describes the intense overtime culture at many Chinese tech companies.",
    example: "那家公司是996，我不想去。",
    exampleTranslation: "That company runs on 996 — I don't want to work there.",
    origin: "Tech industry term that became mainstream social commentary",
    tags: ["work", "tech", "culture"]
  },
  {
    id: 10,
    word: "绝绝子",
    pinyin: "jué jué zǐ",
    type: "internet",
    meaning: "Absolutely incredible / peak amazing — intensifier meaning something is absolutely the best or worst, context-dependent.",
    example: "这道菜的味道绝绝子！",
    exampleTranslation: "The taste of this dish is absolutely incredible!",
    origin: "Went viral around 2021 on Bilibili and Weibo",
    tags: ["intensifier", "youth", "internet"]
  },
  {
    id: 11,
    word: "拿捏",
    pinyin: "ná niē",
    type: "slang",
    meaning: "To have something totally under control; to nail it perfectly. Often used to describe mastery of a situation or person.",
    example: "这个妆容把她拿捏了。",
    exampleTranslation: "This makeup look has her completely nailed.",
    tags: ["mastery", "control", "praise"]
  },
  {
    id: 12,
    word: "整活",
    pinyin: "zhěng huó",
    type: "internet",
    meaning: "To pull off something wild or entertaining; to do creative, outrageous, or funny things for the lols.",
    example: "他又在整活，发了一个搞笑视频。",
    exampleTranslation: "He's at it again — posted another hilarious video.",
    tags: ["humor", "internet", "creativity"]
  },
  {
    id: 13,
    word: "破防",
    pinyin: "pò fáng",
    type: "slang",
    meaning: "To break through someone's defenses — to be deeply moved emotionally, often to tears; to have your emotional guard shattered.",
    example: "看到这个视频我直接破防了，哭了半天。",
    exampleTranslation: "That video completely broke through my defenses — I cried for a long time.",
    origin: "Gaming term that migrated to emotional expression",
    tags: ["emotion", "gaming", "internet"]
  },
  {
    id: 14,
    word: "emo",
    pinyin: "ē mō",
    type: "internet",
    meaning: "Feeling low, sad, or in a gloomy mood — borrowed from English emo subculture but used more broadly for any down feeling.",
    example: "最近比较emo，不想说话。",
    exampleTranslation: "Been feeling a bit emo lately — don't want to talk.",
    tags: ["emotion", "borrowed", "mood"]
  },
  {
    id: 15,
    word: "PUA",
    pinyin: "pī yōu ēi",
    type: "abbreviation",
    meaning: "Psychological manipulation — borrowed from 'pickup artist' but used in Chinese internet culture to describe emotional manipulation or gaslighting in any relationship.",
    example: "我老板总是PUA我们，说我们不够努力。",
    exampleTranslation: "My boss is always manipulating us, saying we're not working hard enough.",
    tags: ["manipulation", "warning", "relationships"]
  },
  {
    id: 16,
    word: "卷王",
    pinyin: "juǎn wáng",
    type: "slang",
    meaning: "King of involution — someone who works obsessively hard and sets an impossible standard, making everyone else's life harder.",
    example: "班里有个卷王，每天学到凌晨三点。",
    exampleTranslation: "There's a grind king in our class who studies until 3am every day.",
    tags: ["work", "competition", "school"]
  },
  {
    id: 17,
    word: "爷青回",
    pinyin: "yé qīng huí",
    type: "internet",
    meaning: "My youth is back — used when something from your childhood is revived or revisited; nostalgia hit.",
    example: "这首歌重新发布了，爷青回！",
    exampleTranslation: "This song was re-released — my childhood is back!",
    origin: "Went viral around 2021",
    tags: ["nostalgia", "youth", "internet"]
  },
  {
    id: 18,
    word: "焦绿",
    pinyin: "jiāo lǜ",
    type: "slang",
    meaning: "Anxiety green — playful term for extreme anxiety, combining 焦虑 (anxiety) with green color to emphasize intensity.",
    example: "考前我整个人都焦绿了。",
    exampleTranslation: "Before the exam I was completely anxiety-green.",
    tags: ["emotion", "humor", "school"]
  },
  {
    id: 19,
    word: "CP",
    pinyin: "sī pī",
    type: "abbreviation",
    meaning: "Couple/pairing — from English 'Couple', used to describe fan-imagined romantic pairings between celebrities, fictional characters, or even real friends.",
    example: "他俩太配了，是我的OTP CP！",
    exampleTranslation: "Those two are so perfect together — they're my ultimate ship!",
    tags: ["fandom", "romance", "internet"]
  },
  {
    id: 20,
    word: "社恐",
    pinyin: "shè kǒng",
    type: "slang",
    meaning: "Social anxiety / social phobia — abbreviation of 社交恐惧症. Commonly used as a self-identifier for introverts or the socially anxious.",
    example: "我是社恐，不喜欢参加聚会。",
    exampleTranslation: "I have social anxiety — I don't like attending parties.",
    tags: ["personality", "youth", "identity"]
  }
];
