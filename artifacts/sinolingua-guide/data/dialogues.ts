export interface DialogueOption {
  id: string;
  text: string;
  pinyin: string;
  isCorrect: boolean;
  result: string;
  explanation: string;
}

export interface DialogueStep {
  id: string;
  speaker: "narrator" | "other" | "you";
  text: string;
  pinyin?: string;
  translation: string;
  options?: DialogueOption[];
  nextStep?: string;
}

export interface Dialogue {
  id: number;
  title: string;
  titleChinese: string;
  situation: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  steps: DialogueStep[];
}

export const dialogues: Dialogue[] = [
  {
    id: 1,
    title: "First Meeting",
    titleChinese: "初次见面",
    situation: "You meet a Chinese student at university. They approach you in the library.",
    difficulty: "beginner",
    tags: ["greeting", "introduction", "polite"],
    steps: [
      {
        id: "s1",
        speaker: "narrator",
        text: "A Chinese student approaches you in the library with a friendly smile.",
        translation: "Setting: University library, first week of semester."
      },
      {
        id: "s2",
        speaker: "other",
        text: "你好！你是新来的留学生吗？",
        pinyin: "Nǐ hǎo! Nǐ shì xīn lái de liúxuéshēng ma?",
        translation: "Hello! Are you the new international student?"
      },
      {
        id: "s3",
        speaker: "you",
        text: "Choose your response:",
        translation: "How do you respond?",
        options: [
          {
            id: "o1",
            text: "是的，我叫李明。你好！",
            pinyin: "Shì de, wǒ jiào Lǐ Míng. Nǐ hǎo!",
            isCorrect: true,
            result: "Great response! Natural and warm.",
            explanation: "Perfect! You confirmed and introduced yourself. 是的 (yes) + your name is the natural formula."
          },
          {
            id: "o2",
            text: "我不认识你。",
            pinyin: "Wǒ bù rènshi nǐ.",
            isCorrect: false,
            result: "Too abrupt. This means 'I don't know you' — quite rude in this context.",
            explanation: "While grammatically correct, saying 'I don't know you' to someone greeting you is very unfriendly."
          },
          {
            id: "o3",
            text: "对，我是。很高兴认识你！",
            pinyin: "Duì, wǒ shì. Hěn gāoxìng rènshi nǐ!",
            isCorrect: true,
            result: "Excellent! Very polite and natural.",
            explanation: "很高兴认识你 (Nice to meet you) is the perfect phrase here — warm and culturally appropriate."
          }
        ]
      },
      {
        id: "s4",
        speaker: "other",
        text: "哦！很高兴认识你！你是哪个国家来的？",
        pinyin: "Ó! Hěn gāoxìng rènshi nǐ! Nǐ shì nǎge guójiā lái de?",
        translation: "Oh! Nice to meet you! Which country are you from?"
      },
      {
        id: "s5",
        speaker: "you",
        text: "Respond to the question:",
        translation: "How do you tell them your country?",
        options: [
          {
            id: "o4",
            text: "我来自俄罗斯。你呢？",
            pinyin: "Wǒ lái zì Éluósī. Nǐ ne?",
            isCorrect: true,
            result: "Perfect! You answered and asked back — very conversational!",
            explanation: "Adding 你呢? (And you?) keeps the conversation flowing naturally. Great use of 呢 particle!"
          },
          {
            id: "o5",
            text: "我是外国人。",
            pinyin: "Wǒ shì wàiguó rén.",
            isCorrect: false,
            result: "Technically okay but vague — 'I'm a foreigner' doesn't really answer the question.",
            explanation: "This is a bit evasive. The question asks which country specifically. Better to name your country."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Ordering at a Restaurant",
    titleChinese: "在餐厅点餐",
    situation: "You're at a popular Chinese restaurant. The waiter comes to take your order.",
    difficulty: "beginner",
    tags: ["restaurant", "food", "daily life"],
    steps: [
      {
        id: "s1",
        speaker: "narrator",
        text: "You're seated at a small restaurant. A waiter approaches.",
        translation: "Setting: Traditional Chinese restaurant."
      },
      {
        id: "s2",
        speaker: "other",
        text: "您好！请问您要点什么？",
        pinyin: "Nín hǎo! Qǐngwèn nín yào diǎn shénme?",
        translation: "Hello! May I ask what you'd like to order?"
      },
      {
        id: "s3",
        speaker: "you",
        text: "You want to order but need a moment:",
        translation: "What do you say?",
        options: [
          {
            id: "o1",
            text: "等一下，我还没看好。",
            pinyin: "Děng yīxià, wǒ hái méi kàn hǎo.",
            isCorrect: true,
            result: "Natural! 'Just a moment, I haven't decided yet.' Very authentic.",
            explanation: "等一下 (wait a moment) is polite and common. 还没看好 means you haven't finished reading/deciding."
          },
          {
            id: "o2",
            text: "我要一碗米饭和一杯茶。",
            pinyin: "Wǒ yào yī wǎn mǐfàn hé yī bēi chá.",
            isCorrect: true,
            result: "Direct and clear! You ordered rice and tea perfectly.",
            explanation: "一碗 (one bowl) for rice, 一杯 (one cup) for drinks — correct measure words!"
          },
          {
            id: "o3",
            text: "你有什么？",
            pinyin: "Nǐ yǒu shénme?",
            isCorrect: false,
            result: "A bit abrupt. Better to say: 有什么推荐吗？(Any recommendations?)",
            explanation: "While understandable, 有什么? is too blunt. Better: 菜单在哪里？(Where's the menu?) or 有什么推荐？(What do you recommend?)"
          }
        ]
      },
      {
        id: "s4",
        speaker: "other",
        text: "我们今天的特色菜是红烧肉，很受欢迎！",
        pinyin: "Wǒmen jīntiān de tèsè cài shì hóngshāo ròu, hěn shòu huānyíng!",
        translation: "Our special dish today is braised pork belly — very popular!"
      },
      {
        id: "s5",
        speaker: "you",
        text: "You want to order it:",
        translation: "How do you order the special?",
        options: [
          {
            id: "o4",
            text: "好的，我要一份红烧肉！谢谢。",
            pinyin: "Hǎo de, wǒ yào yī fèn hóngshāo ròu! Xièxie.",
            isCorrect: true,
            result: "Perfect! 一份 is the right measure word for dishes.",
            explanation: "一份 (one portion/serving) is the standard measure word for restaurant dishes. Don't use 一个 for food dishes!"
          },
          {
            id: "o5",
            text: "给我一个红烧肉。",
            pinyin: "Gěi wǒ yī gè hóngshāo ròu.",
            isCorrect: false,
            result: "Understood, but 一个 is wrong for dishes. Should be 一份.",
            explanation: "个 is for objects/items. For restaurant dishes, always use 份 (fèn). Small error but noticeable to native speakers!"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Asking for Directions",
    titleChinese: "问路",
    situation: "You're lost in a city and need to find the subway station.",
    difficulty: "intermediate",
    tags: ["directions", "transport", "city"],
    steps: [
      {
        id: "s1",
        speaker: "narrator",
        text: "You're on an unfamiliar street and can't find the subway entrance.",
        translation: "Setting: City street, you need the subway."
      },
      {
        id: "s2",
        speaker: "you",
        text: "Stop a passerby:",
        translation: "How do you politely get someone's attention?",
        options: [
          {
            id: "o1",
            text: "不好意思，打扰一下！",
            pinyin: "Bù hǎoyìsi, dǎrǎo yīxià!",
            isCorrect: true,
            result: "Excellent! This is the most natural way to politely interrupt someone.",
            explanation: "不好意思 (excuse me / sorry to bother you) + 打扰一下 (let me disturb you for a moment) is the standard polite interruption formula."
          },
          {
            id: "o2",
            text: "喂！",
            pinyin: "Wèi!",
            isCorrect: false,
            result: "Too abrupt! 喂 is for answering the phone, not for addressing strangers on the street.",
            explanation: "喂 is used on the phone or in very informal settings. Using it to stop a stranger sounds rude. Use 不好意思 instead."
          }
        ]
      },
      {
        id: "s3",
        speaker: "other",
        text: "怎么了？",
        pinyin: "Zěnme le?",
        translation: "What is it?"
      },
      {
        id: "s4",
        speaker: "you",
        text: "Ask for the subway station:",
        translation: "How do you ask for directions?",
        options: [
          {
            id: "o3",
            text: "请问地铁站怎么走？",
            pinyin: "Qǐngwèn dìtiě zhàn zěnme zǒu?",
            isCorrect: true,
            result: "Perfect! The most natural way to ask for directions.",
            explanation: "怎么走 (how to get there) is the key phrase. 请问 (may I ask) makes it polite. This is exactly how locals phrase it!"
          },
          {
            id: "o4",
            text: "地铁站在哪里？",
            pinyin: "Dìtiě zhàn zài nǎlǐ?",
            isCorrect: true,
            result: "Also correct! 在哪里 (where is) is a bit more direct than 怎么走.",
            explanation: "Both work! 在哪里 asks 'where is', 怎么走 asks 'how to walk/get there'. 怎么走 is slightly more natural for navigation questions."
          }
        ]
      },
      {
        id: "s5",
        speaker: "other",
        text: "地铁站啊，从这里一直往前走，在路口左转，走大概五分钟就到了。",
        pinyin: "Dìtiě zhàn a, cóng zhèlǐ yīzhí wǎng qián zǒu, zài lùkǒu zuǒ zhuǎn, zǒu dàgài wǔ fēnzhōng jiù dào le.",
        translation: "The subway station — go straight from here, turn left at the intersection, about 5 minutes walking."
      },
      {
        id: "s6",
        speaker: "you",
        text: "Confirm you understood:",
        translation: "How do you thank them and confirm?",
        options: [
          {
            id: "o5",
            text: "谢谢！就是一直走然后左转，对吗？",
            pinyin: "Xièxie! Jiùshì yīzhí zǒu rán hòu zuǒ zhuǎn, duì ma?",
            isCorrect: true,
            result: "Excellent! Repeating back to confirm is very polite and practical.",
            explanation: "Confirming directions by repeating them is a great strategy — it shows you listened and checks understanding. 对吗 (is that right?) is perfect."
          },
          {
            id: "o6",
            text: "好的谢谢。",
            pinyin: "Hǎo de, xièxie.",
            isCorrect: true,
            result: "Fine, but repeating the directions would be safer to confirm.",
            explanation: "Minimally acceptable. But in real life, confirming directions is smart — street directions can be easy to mishear!"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Job Interview",
    titleChinese: "工作面试",
    situation: "You're interviewing for a position at a Chinese company. The interviewer begins.",
    difficulty: "advanced",
    tags: ["work", "formal", "interview"],
    steps: [
      {
        id: "s1",
        speaker: "narrator",
        text: "You're seated across from an interviewer at a formal office.",
        translation: "Setting: Professional office, job interview."
      },
      {
        id: "s2",
        speaker: "other",
        text: "请先介绍一下你自己。",
        pinyin: "Qǐng xiān jièshào yīxià nǐ zìjǐ.",
        translation: "Please first introduce yourself."
      },
      {
        id: "s3",
        speaker: "you",
        text: "Begin your self-introduction:",
        translation: "How do you start?",
        options: [
          {
            id: "o1",
            text: "您好！我叫王明，今年25岁，毕业于北京大学，专业是计算机科学。",
            pinyin: "Nín hǎo! Wǒ jiào Wáng Míng, jīnnián 25 suì, bìyè yú Běijīng Dàxué, zhuānyè shì jìsuànjī kēxué.",
            isCorrect: true,
            result: "Excellent! Clear, professional, covers all the basics.",
            explanation: "Perfect structure: 您好 (formal you) + name + age + university + major. Using 您 (formal you) vs 你 (informal) is crucial in interviews!"
          },
          {
            id: "o2",
            text: "我是王明，我很聪明，我会很多东西。",
            pinyin: "Wǒ shì Wáng Míng, wǒ hěn cōngmíng, wǒ huì hěn duō dōngxi.",
            isCorrect: false,
            result: "Too arrogant! Saying 'I'm very smart' directly is inappropriate in Chinese professional culture.",
            explanation: "Chinese professional culture values modesty. Direct self-praise sounds presumptuous. Let achievements speak for themselves rather than stating '我很聪明'."
          }
        ]
      },
      {
        id: "s4",
        speaker: "other",
        text: "你为什么想加入我们公司？",
        pinyin: "Nǐ wèishénme xiǎng jiārù wǒmen gōngsī?",
        translation: "Why do you want to join our company?"
      },
      {
        id: "s5",
        speaker: "you",
        text: "Answer the motivation question:",
        translation: "What's the best response?",
        options: [
          {
            id: "o3",
            text: "贵公司在行业内享有盛誉，我非常钦佩贵公司的企业文化和创新精神。",
            pinyin: "Guì gōngsī zài hángyè nèi xiǎngyǒu shèngyù, wǒ fēicháng qīnpèi guì gōngsī de qǐyè wénhuà hé chuàngxīn jīngshén.",
            isCorrect: true,
            result: "Perfect! Using 贵公司 (your esteemed company) is exactly the right formal register.",
            explanation: "贵公司 is a polite way to refer to the interviewer's company — literally 'your honorable company'. This shows cultural awareness and formal language mastery."
          },
          {
            id: "o4",
            text: "因为工资高。",
            pinyin: "Yīnwèi gōngzī gāo.",
            isCorrect: false,
            result: "Never say this! Even if true, citing salary as the main reason is very inappropriate.",
            explanation: "Even if salary is your main motivation, never say so directly in a Chinese interview. Focus on company reputation, learning opportunities, and career growth."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Making Friends Online",
    titleChinese: "网上交朋友",
    situation: "You meet someone in a Chinese language learning app. They send you a message.",
    difficulty: "beginner",
    tags: ["friendship", "online", "casual"],
    steps: [
      {
        id: "s1",
        speaker: "narrator",
        text: "Someone matches with you on a language exchange app.",
        translation: "Setting: Language learning app chat."
      },
      {
        id: "s2",
        speaker: "other",
        text: "嗨！你好呀～ 我看你在学中文？你学多久了？",
        pinyin: "Hāi! Nǐ hǎo ya~ Wǒ kàn nǐ zài xué zhōngwén? Nǐ xué duō jiǔ le?",
        translation: "Hi! Hey there~ I see you're learning Chinese? How long have you studied?"
      },
      {
        id: "s3",
        speaker: "you",
        text: "Respond casually:",
        translation: "How do you reply in a friendly, casual way?",
        options: [
          {
            id: "o1",
            text: "哈喽～我学了大概两年了，但是还差得远哈哈",
            pinyin: "Hā lóu~ Wǒ xué le dàgài liǎng nián le, dànshì hái chà de yuǎn haha",
            isCorrect: true,
            result: "Perfect casual tone! Modest, friendly, and genuine.",
            explanation: "哈喽 (hello) is a casual borrowed word. 还差得远 (still far from good) + 哈哈 (haha) is the perfect humble self-deprecating style that works great in casual Chinese chat."
          },
          {
            id: "o2",
            text: "您好，本人已学习中文二十四个月。",
            pinyin: "Nín hǎo, běnrén yǐ xuéxí zhōngwén èrshísì gè yuè.",
            isCorrect: false,
            result: "Way too formal! This sounds like a government document, not a friendly chat.",
            explanation: "您 and 本人 (this person = formal 'I') are extremely formal. Casual chat uses 你, not 您. And saying '24 months' vs '2 years' sounds robotic!"
          }
        ]
      },
      {
        id: "s4",
        speaker: "other",
        text: "两年了！不错嘛～那你会说方言吗？比如广东话？",
        pinyin: "Liǎng nián le! Bùcuò ma~ Nà nǐ huì shuō fāngyán ma? Bǐrú Guǎngdōnghuà?",
        translation: "Two years already! Nice~ Do you speak any dialects? Like Cantonese?"
      },
      {
        id: "s5",
        speaker: "you",
        text: "You don't speak Cantonese:",
        translation: "How do you say you don't know it but want to learn?",
        options: [
          {
            id: "o3",
            text: "广东话不会，但是好想学哦～你是广东人吗？",
            pinyin: "Guǎngdōnghuà bù huì, dànshì hǎo xiǎng xué o~ Nǐ shì Guǎngdōng rén ma?",
            isCorrect: true,
            result: "Great! Shows genuine interest and keeps the conversation going.",
            explanation: "好想学 (really want to learn) shows enthusiasm. The final 哦～ adds a casual, expressive tone. Asking back keeps the conversation flowing!"
          },
          {
            id: "o4",
            text: "不会。",
            pinyin: "Bù huì.",
            isCorrect: false,
            result: "Too short and cold. Conversation might die here.",
            explanation: "Just 不会 (don't know how) without anything else is very abrupt. In Chinese chat culture, short one-word replies can feel dismissive. Add interest or ask back!"
          }
        ]
      }
    ]
  }
];
