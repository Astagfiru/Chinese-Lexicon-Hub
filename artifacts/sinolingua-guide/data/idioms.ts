export interface Idiom {
  id: number;
  idiom: string;
  pinyin: string;
  translation: string;
  meaning: string;
  examples: { sentence: string; translation: string }[];
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
}

export const idioms: Idiom[] = [
  {
    id: 1,
    idiom: "一石二鸟",
    pinyin: "yī shí èr niǎo",
    translation: "Kill two birds with one stone",
    meaning: "Accomplish two things with a single action; solve two problems at once with minimal effort.",
    examples: [
      { sentence: "这次旅行既能出差又能游玩，真是一石二鸟。", translation: "This trip serves both business and leisure — truly killing two birds with one stone." },
      { sentence: "学中文的同时了解文化，一石二鸟。", translation: "Learning Chinese while understanding culture — two birds with one stone." }
    ],
    difficulty: "easy",
    tags: ["efficiency", "planning"]
  },
  {
    id: 2,
    idiom: "马到成功",
    pinyin: "mǎ dào chénggōng",
    translation: "Immediate success upon arrival",
    meaning: "Swift success in whatever one undertakes; used to wish someone good luck.",
    examples: [
      { sentence: "祝你考试马到成功！", translation: "Wishing you instant success on your exam!" },
      { sentence: "新公司开业，马到成功！", translation: "For the new company's opening — may success come swiftly!" }
    ],
    difficulty: "easy",
    tags: ["luck", "success", "greetings"]
  },
  {
    id: 3,
    idiom: "半途而废",
    pinyin: "bàn tú ér fèi",
    translation: "Give up halfway",
    meaning: "To abandon an undertaking before its completion; to stop midway. Used as a warning against quitting.",
    examples: [
      { sentence: "学习语言不能半途而废，要坚持。", translation: "One must not give up halfway when learning a language — persevere." },
      { sentence: "他总是半途而废，从来没完成过任何事。", translation: "He always quits halfway and never finishes anything." }
    ],
    difficulty: "easy",
    tags: ["perseverance", "warning"]
  },
  {
    id: 4,
    idiom: "亡羊补牢",
    pinyin: "wáng yáng bǔ láo",
    translation: "Mend the fold after the sheep are lost",
    meaning: "Better late than never; it is not too late to correct a mistake after the fact.",
    examples: [
      { sentence: "虽然来不及了，但亡羊补牢，为时未晚。", translation: "Even though it is late, mending the fold now is still worthwhile." },
      { sentence: "发现错误就要改正，亡羊补牢。", translation: "When an error is found, correct it — better late than never." }
    ],
    difficulty: "medium",
    tags: ["wisdom", "correction"]
  },
  {
    id: 5,
    idiom: "画蛇添足",
    pinyin: "huà shé tiān zú",
    translation: "Draw legs on a snake",
    meaning: "To ruin something by adding unnecessary embellishments; overdoing things leads to failure.",
    examples: [
      { sentence: "文章已经很好了，再加修饰就是画蛇添足。", translation: "The essay is already excellent — adding more would be drawing legs on a snake." },
      { sentence: "他的解释画蛇添足，反而让人更困惑。", translation: "His explanation overdid it and made people even more confused." }
    ],
    difficulty: "medium",
    tags: ["warning", "simplicity"]
  },
  {
    id: 6,
    idiom: "对牛弹琴",
    pinyin: "duì niú tán qín",
    translation: "Play the lute to a cow",
    meaning: "To talk reason to a person who cannot or will not understand; casting pearls before swine.",
    examples: [
      { sentence: "跟他讲道理简直是对牛弹琴。", translation: "Reasoning with him is like playing lute to a cow." },
      { sentence: "不懂艺术的人看这幅画，就像对牛弹琴。", translation: "Someone who doesn't understand art viewing this painting — like playing lute to a cow." }
    ],
    difficulty: "medium",
    tags: ["communication", "frustration"]
  },
  {
    id: 7,
    idiom: "塞翁失马",
    pinyin: "sài wēng shī mǎ",
    translation: "The old man lost his horse",
    meaning: "A blessing in disguise; a seeming misfortune can turn into good fortune. From a famous Huainanzi story.",
    examples: [
      { sentence: "失去了那份工作反而找到了更好的机会，真是塞翁失马。", translation: "Losing that job led to a better opportunity — truly a blessing in disguise." },
      { sentence: "塞翁失马，焉知非福？", translation: "The old man lost his horse — who knows if it isn't a blessing?" }
    ],
    difficulty: "hard",
    tags: ["philosophy", "fortune", "classical"]
  },
  {
    id: 8,
    idiom: "掩耳盗铃",
    pinyin: "yǎn ěr dào líng",
    translation: "Cover ears while stealing a bell",
    meaning: "Self-deception; trying to deceive others while only deceiving oneself.",
    examples: [
      { sentence: "不面对问题，只是掩耳盗铃而已。", translation: "Not facing the problem is just self-deception." },
      { sentence: "假装不知道，这是掩耳盗铃的做法。", translation: "Pretending not to know — that's covering your ears while stealing the bell." }
    ],
    difficulty: "hard",
    tags: ["self-deception", "wisdom"]
  },
  {
    id: 9,
    idiom: "青出于蓝",
    pinyin: "qīng chū yú lán",
    translation: "Indigo comes from the indigo plant",
    meaning: "The student surpasses the teacher; the younger generation outperforms the older. A compliment.",
    examples: [
      { sentence: "他的成就已经超过了老师，真是青出于蓝。", translation: "His achievements have surpassed his teacher — truly indigo from the plant." },
      { sentence: "青出于蓝而胜于蓝，这是教育的最大成功。", translation: "When a student surpasses their teacher, that is the greatest success of education." }
    ],
    difficulty: "hard",
    tags: ["education", "progress", "praise"]
  },
  {
    id: 10,
    idiom: "守株待兔",
    pinyin: "shǒu zhū dài tù",
    translation: "Guard the stump waiting for rabbits",
    meaning: "Relying on luck rather than effort; waiting passively for fortune instead of taking action.",
    examples: [
      { sentence: "光是守株待兔，不去努力找工作，是不行的。", translation: "Just waiting for luck without actively job hunting won't work." },
      { sentence: "守株待兔的人永远得不到真正的成功。", translation: "Those who wait passively for luck will never achieve true success." }
    ],
    difficulty: "medium",
    tags: ["effort", "warning", "laziness"]
  },
  {
    id: 11,
    idiom: "纸上谈兵",
    pinyin: "zhǐ shàng tán bīng",
    translation: "Fight battles only on paper",
    meaning: "Armchair strategizing without practical experience; theoretical knowledge without real application.",
    examples: [
      { sentence: "只读书不实践，只是纸上谈兵。", translation: "Only reading without practice is just paper warfare." },
      { sentence: "他的方案听起来不错，但都是纸上谈兵。", translation: "His plan sounds good but it's all just armchair strategy." }
    ],
    difficulty: "medium",
    tags: ["practice", "theory", "criticism"]
  },
  {
    id: 12,
    idiom: "一箭双雕",
    pinyin: "yī jiàn shuāng diāo",
    translation: "One arrow, two eagles",
    meaning: "Achieve two goals with one effort; similar to 'kill two birds with one stone' but more elegant.",
    examples: [
      { sentence: "这个策略可以一箭双雕，既节省成本又提高效率。", translation: "This strategy achieves two goals at once — saving costs and improving efficiency." }
    ],
    difficulty: "easy",
    tags: ["efficiency", "strategy"]
  },
  {
    id: 13,
    idiom: "水落石出",
    pinyin: "shuǐ luò shí chū",
    translation: "When the water recedes, the rocks appear",
    meaning: "The truth will emerge in the end; every mystery will eventually be solved.",
    examples: [
      { sentence: "不用着急，事情总会水落石出的。", translation: "No need to worry — the truth will surface eventually." }
    ],
    difficulty: "medium",
    tags: ["truth", "patience"]
  },
  {
    id: 14,
    idiom: "三人行，必有我师",
    pinyin: "sān rén xíng, bì yǒu wǒ shī",
    translation: "Among three walkers, one is surely my teacher",
    meaning: "Everyone has something to teach you; humility in learning from others. From Confucius.",
    examples: [
      { sentence: "三人行，必有我师，要向每个人学习。", translation: "Among three travelers, one is your teacher — learn from everyone." }
    ],
    difficulty: "easy",
    tags: ["learning", "humility", "Confucius"]
  },
  {
    id: 15,
    idiom: "破釜沉舟",
    pinyin: "pò fǔ chén zhōu",
    translation: "Break the cauldrons and sink the boats",
    meaning: "Burn one's bridges; commit completely to a course of action with no retreat. Historical allusion to general Xiang Yu.",
    examples: [
      { sentence: "他破釜沉舟，辞掉工作全力创业。", translation: "He burned his bridges, quit his job, and threw everything into his startup." }
    ],
    difficulty: "hard",
    tags: ["determination", "commitment", "history"]
  },
  {
    id: 16,
    idiom: "功夫不负有心人",
    pinyin: "gōngfū bù fù yǒuxīn rén",
    translation: "Effort never disappoints the committed",
    meaning: "Hard work and dedication will always pay off in the end; perseverance leads to success.",
    examples: [
      { sentence: "功夫不负有心人，你的努力一定会有回报。", translation: "Hard work never disappoints — your efforts will surely be rewarded." }
    ],
    difficulty: "easy",
    tags: ["encouragement", "perseverance", "success"]
  },
  {
    id: 17,
    idiom: "笑里藏刀",
    pinyin: "xiào lǐ cáng dāo",
    translation: "A dagger hidden in a smile",
    meaning: "Smiling outwardly while harboring malicious intent; a hypocrite or two-faced person.",
    examples: [
      { sentence: "他表面上很友好，其实笑里藏刀。", translation: "He seems friendly on the surface but hides a dagger in his smile." }
    ],
    difficulty: "medium",
    tags: ["warning", "character", "deception"]
  },
  {
    id: 18,
    idiom: "三十六计，走为上计",
    pinyin: "sānshíliù jì, zǒu wéi shàng jì",
    translation: "Of the thirty-six stratagems, fleeing is the best",
    meaning: "When all else fails, retreat is the wisest option. From the classic military text.",
    examples: [
      { sentence: "形势不好，三十六计走为上计。", translation: "The situation is bad — of all strategies, retreat is the best." }
    ],
    difficulty: "hard",
    tags: ["strategy", "military", "wisdom"]
  },
  {
    id: 19,
    idiom: "一鸣惊人",
    pinyin: "yī míng jīng rén",
    translation: "One cry that astounds the world",
    meaning: "To rise to fame with a single brilliant act; to make a stunning debut after a long period of quiet preparation.",
    examples: [
      { sentence: "他沉寂多年，这次终于一鸣惊人。", translation: "He was quiet for many years and finally made a stunning debut." }
    ],
    difficulty: "medium",
    tags: ["fame", "talent", "surprise"]
  },
  {
    id: 20,
    idiom: "金无足赤，人无完人",
    pinyin: "jīn wú zú chì, rén wú wán rén",
    translation: "Gold is never pure, humans are never perfect",
    meaning: "Nobody is perfect; everyone has their flaws. Used for tolerance and understanding.",
    examples: [
      { sentence: "金无足赤，人无完人，要学会包容。", translation: "Gold is never pure, humans are never perfect — learn to be tolerant." }
    ],
    difficulty: "medium",
    tags: ["wisdom", "tolerance", "imperfection"]
  }
];
