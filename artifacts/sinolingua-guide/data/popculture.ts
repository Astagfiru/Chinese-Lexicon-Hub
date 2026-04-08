export interface PopCulturePhrase {
  id: number;
  phrase: string;
  pinyin: string;
  source: string;
  sourceType: "drama" | "movie" | "anime" | "song" | "meme" | "game" | "variety";
  meaning: string;
  context: string;
  usage: string;
  tags: string[];
}

export const popCulturePhrases: PopCulturePhrase[] = [
  {
    id: 1,
    phrase: "人间不值得",
    pinyin: "rén jiān bù zhí dé",
    source: "Li Zongsheng (singer), popularized on Weibo",
    sourceType: "meme",
    meaning: "The human world is not worth it — originally a lyric expressing life's futility, ironically used online to express mild disappointment or exhaustion.",
    context: "Became a viral phrase used humorously when tired or stressed",
    usage: "Used ironically: 'I failed my exam — the human world is not worth it 😩'",
    tags: ["viral", "humor", "song", "pessimism"]
  },
  {
    id: 2,
    phrase: "元芳，你怎么看",
    pinyin: "yuán fāng, nǐ zěnme kàn",
    source: "Judge Di Renjie (TV Drama)",
    sourceType: "drama",
    meaning: "Yuan Fang, what do you think? — used to ask for someone's opinion, often sarcastically when the question is obvious.",
    context: "From the hit detective drama, the magistrate always asked his assistant Yuan Fang's opinion",
    usage: "Jokingly asking for opinions on trivial matters: 'The tea is cold, Yuan Fang, what do you think?'",
    tags: ["drama", "humor", "classic Chinese", "viral"]
  },
  {
    id: 3,
    phrase: "你的良心不会痛吗",
    pinyin: "nǐ de liángxīn bù huì tòng ma",
    source: "Internet meme / variety show",
    sourceType: "meme",
    meaning: "Doesn't your conscience hurt? — used to call someone out for something shameless or unfair, often dramatically.",
    context: "Used as a dramatic accusation in online arguments",
    usage: "When someone does something questionable: 'You ate the last piece of cake — doesn't your conscience hurt?'",
    tags: ["humor", "accusation", "internet", "drama"]
  },
  {
    id: 4,
    phrase: "我命由我不由天",
    pinyin: "wǒ mìng yóu wǒ bù yóu tiān",
    source: "Ne Zha (2019 animated film)",
    sourceType: "movie",
    meaning: "My fate is mine to decide, not heaven's — a declaration of defiance against predetermined destiny.",
    context: "The iconic line from the blockbuster animation Ne Zha, said at a crucial moment",
    usage: "Used when overcoming challenges: 'I failed last time but I'll succeed — my fate is mine to control!'",
    tags: ["movie", "determination", "animation", "inspirational"]
  },
  {
    id: 5,
    phrase: "真香",
    pinyin: "zhēn xiāng",
    source: "A certain talent show (Wang Jingze's statement)",
    sourceType: "variety",
    meaning: "So fragrant / so good — used when someone said they'd never do something and then immediately does it. The ultimate 'I was wrong' admission.",
    context: "From a contestant who confidently declared he'd never eat a certain food, then immediately ate it saying 'zhēn xiāng'",
    usage: "When eating crow: 'I said I'd never download TikTok... zhēn xiāng' (with a photo of TikTok on your phone)",
    tags: ["variety", "viral", "humor", "irony"]
  },
  {
    id: 6,
    phrase: "我太难了",
    pinyin: "wǒ tài nán le",
    source: "Farmer uncle interview / viral video",
    sourceType: "meme",
    meaning: "Life is so hard for me / I'm having such a difficult time — heartfelt expression of struggle, used both sincerely and humorously.",
    context: "From a viral video of an emotionally overwhelmed man expressing his hardships",
    usage: "When life is hard: 'Three exams tomorrow — I'm having such a difficult time'",
    tags: ["viral", "sympathy", "humor", "relatable"]
  },
  {
    id: 7,
    phrase: "奥力给",
    pinyin: "ào lì gěi",
    source: "Wuhan uncle viral video",
    sourceType: "meme",
    meaning: "Go for it! / Give it all! — a rousing cheer for encouragement. Originally said by an enthusiastic uncle cheering on a fishing contest.",
    context: "Went viral from a video of an extremely enthusiastic fishing commentator",
    usage: "Before a challenge: 'You got this — 奥力给!'",
    tags: ["encouragement", "viral", "cheer", "humor"]
  },
  {
    id: 8,
    phrase: "耗子尾汁",
    pinyin: "hào zi wěi zhī",
    source: "Zhu Zhiwen (singer) viral rant",
    sourceType: "meme",
    meaning: "Good self-reflection — from a slurred pronunciation of '好自为之' (hǎo zì wéi zhī). Used to tell someone to behave themselves.",
    context: "From a viral video where a folk singer scolded someone with slurred speech",
    usage: "Jokingly warning someone: 'You better 耗子尾汁!'",
    tags: ["warning", "meme", "humor", "pronunciation"]
  },
  {
    id: 9,
    phrase: "细思极恐",
    pinyin: "xì sī jí kǒng",
    source: "Internet culture",
    sourceType: "meme",
    meaning: "The more you think about it, the more terrifying it becomes — used for creepy realizations or unsettling implications.",
    context: "Commonly used in discussions about conspiracy theories, horror, or shocking revelations",
    usage: "After a disturbing realization: 'Wait, if they were there the whole time... 细思极恐'",
    tags: ["horror", "realization", "internet"]
  },
  {
    id: 10,
    phrase: "防火防盗防闺蜜",
    pinyin: "fáng huǒ fáng dào fáng guīmì",
    source: "Internet saying",
    sourceType: "meme",
    meaning: "Guard against fire, guard against theft, guard against your best girlfriend — dark humor about romantic betrayal by close friends.",
    context: "Popular saying warning about the 'bestie who steals your boyfriend' trope",
    usage: "Jokingly warning friends: 'Remember: 防火防盗防闺蜜'",
    tags: ["relationships", "humor", "warning", "dark comedy"]
  },
  {
    id: 11,
    phrase: "996福报",
    pinyin: "jiǔ jiǔ liù fú bào",
    source: "Jack Ma (Alibaba founder) speech controversy",
    sourceType: "meme",
    meaning: "996 as a blessing — Jack Ma controversially called 996 work schedule a 'blessing'. Became ironic meme used to criticize overwork culture.",
    context: "From a 2019 speech that sparked massive online debate about work-life balance in China",
    usage: "Sarcastically: 'Another 12-hour day — truly a 996 福报'",
    tags: ["work", "irony", "tech", "controversy"]
  },
  {
    id: 12,
    phrase: "人艰不拆",
    pinyin: "rén jiān bù chāi",
    source: "Internet culture",
    sourceType: "meme",
    meaning: "Life is hard, don't tear it apart — don't expose someone's flimsy illusions when they're struggling; spare someone's feelings.",
    context: "Used when you could point out an obvious lie or delusion but choose kindness instead",
    usage: "When deciding not to correct someone: '人艰不拆, let him believe his cooking is good'",
    tags: ["kindness", "internet", "philosophy"]
  },
  {
    id: 13,
    phrase: "吃我一剑",
    pinyin: "chī wǒ yī jiàn",
    source: "Chinese martial arts games/dramas",
    sourceType: "game",
    meaning: "Take my sword! — classic xianxia/wuxia battle cry. Used humorously when attacking anything, from a bug to an argument.",
    context: "Standard battle phrase from countless martial arts RPGs and dramas",
    usage: "Dramatically: 'You ate my last fry — 吃我一剑!'",
    tags: ["gaming", "wuxia", "humor", "battle cry"]
  },
  {
    id: 14,
    phrase: "到底是上海人",
    pinyin: "dào dǐ shì shànghǎi rén",
    source: "Variety show / internet meme",
    sourceType: "meme",
    meaning: "After all, they are Shanghainese — ironic phrase implying someone is particularly sophisticated, picky, or exclusive. Can be used for any stereotype.",
    context: "Used to mock or tease regional stereotypes with affection",
    usage: "When someone is being high-maintenance: '到底是上海人 — only drinks imported coffee'",
    tags: ["regional", "humor", "stereotype", "irony"]
  },
  {
    id: 15,
    phrase: "yyds，我哭死",
    pinyin: "yǒngyuǎn de shén, wǒ kū sǐ",
    source: "Bilibili / Weibo culture",
    sourceType: "meme",
    meaning: "Forever a god, I'm crying — combo expression: first praising something as legendary, then expressing deep emotional impact (humor or genuine).",
    context: "Extremely common internet expression combining two viral phrases",
    usage: "Seeing a beautiful performance: 'YYDS, 我哭死'",
    tags: ["internet", "emotion", "combo", "viral"]
  },
  {
    id: 16,
    phrase: "一口老血",
    pinyin: "yī kǒu lǎo xiě",
    source: "Martial arts novel culture / internet",
    sourceType: "meme",
    meaning: "A mouthful of old blood — from wuxia novels where characters spit blood in shock. Used to express being so shocked, embarrassed, or frustrated you could 'spit blood'.",
    context: "Classic wuxia expression adapted for internet humor",
    usage: "When shocked by bad news: 'He failed again? 一口老血'",
    tags: ["wuxia", "shock", "humor", "expression"]
  }
];
