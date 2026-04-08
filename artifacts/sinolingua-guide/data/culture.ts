export interface CultureEntry {
  id: number;
  title: string;
  titleChinese: string;
  category: "etiquette" | "festivals" | "food" | "business" | "social" | "symbols" | "history";
  description: string;
  keyPoints: string[];
  example: string;
  doAndDont?: { do: string[]; dont: string[] };
  tags: string[];
}

export const cultureEntries: CultureEntry[] = [
  {
    id: 1,
    title: "Face (面子 Miànzi)",
    titleChinese: "面子文化",
    category: "social",
    description: "Miànzi (面子) — 'face' — is one of the most important concepts in Chinese society. It refers to social standing, reputation, and dignity. Giving face (给面子) means showing respect and helping someone look good. Losing face (丢面子) is a serious social embarrassment. Understanding this concept is essential for navigating Chinese relationships.",
    keyPoints: [
      "Never publicly criticize or correct someone — do it privately",
      "Praise others generously, especially in front of their peers",
      "Accept gifts graciously even if you don't want them",
      "Declining something directly can make the other person lose face — be indirect"
    ],
    example: "A colleague makes an error in a meeting. Instead of saying 'That's wrong', you say '这个想法很有意思，我们也可以考虑一下另一个角度...' (This idea is interesting, we could also consider another angle...).",
    doAndDont: {
      do: ["Praise publicly, correct privately", "Use indirect refusals ('maybe later', 'I'll think about it')", "Acknowledge others' status and achievements"],
      dont: ["Correct someone in front of others", "Flat-out refuse offers or invitations", "Brag excessively about yourself"]
    },
    tags: ["essential", "social", "relationships"]
  },
  {
    id: 2,
    title: "Gift Giving Customs",
    titleChinese: "送礼习俗",
    category: "etiquette",
    description: "Gift giving in China is a sophisticated social practice with important rules. The meaning behind a gift often matters more than its monetary value, and many items carry symbolic connotations — some positive, some very negative.",
    keyPoints: [
      "Never give: clocks (送钟 sounds like 送终, attending death), pears (梨 sounds like 离, separation), umbrellas (伞 sounds like 散, fall apart), shoes (suggests 'walk away')",
      "Great gifts: tea, fruit baskets, alcohol, quality food items",
      "Always wrap gifts nicely — presentation matters",
      "Gifts are often not opened immediately in front of the giver"
    ],
    example: "Your colleague is getting married. Giving cash in a red envelope (红包/hóngbāo) is perfectly appropriate and very common in China. Use an auspicious amount (168, 666, 888) — avoid 4.",
    doAndDont: {
      do: ["Use red envelopes for money gifts", "Choose auspicious numbers (6, 8, 9)", "Accept with two hands", "Give to the whole family when visiting"],
      dont: ["Give clocks, pears, or shoes", "Use 4 (四 sounds like 死, death) in amounts", "Wrap in white (mourning color) or black", "Insist someone open a gift immediately"]
    },
    tags: ["etiquette", "gifts", "numbers", "taboos"]
  },
  {
    id: 3,
    title: "Chinese New Year Traditions",
    titleChinese: "春节传统",
    category: "festivals",
    description: "Spring Festival (春节, Chūnjié) is the most important Chinese holiday, celebrating the lunar new year. The celebrations span 15 days and are filled with traditions, food, and family gatherings. It's the largest annual human migration in the world as people return home.",
    keyPoints: [
      "Red envelopes (红包) given to children and unmarried people by elders",
      "Reunion dinner (年夜饭) on New Year's Eve — the year's most important meal",
      "Cleaning the house before New Year removes bad luck",
      "Dumplings (饺子) are eaten — especially at midnight in northern China",
      "Avoid washing hair on New Year's Day (washing away good luck)"
    ],
    example: "The phrase 恭喜发财 (Gōngxǐ fācái — 'Wishing you prosperity') is the standard New Year greeting. Response: 红包拿来 (Hóngbāo ná lái — 'Hand over the red envelope') — said humorously.",
    tags: ["festivals", "family", "traditions", "food"]
  },
  {
    id: 4,
    title: "Dining Etiquette",
    titleChinese: "餐桌礼仪",
    category: "food",
    description: "Chinese dining is a communal experience. Shared dishes are placed in the center, and meals are an important social occasion. Showing appreciation for food and being a gracious host or guest are highly valued.",
    keyPoints: [
      "Wait for the host to sit first and invite everyone to eat",
      "The guest of honor sits facing the door",
      "Never stick chopsticks vertically in rice — resembles incense at funerals",
      "Tapping two fingers on the table says 'thank you' when tea is poured",
      "Pouring tea for others before yourself shows respect"
    ],
    example: "When a host offers more food: 我吃饱了，谢谢 (Wǒ chī bǎo le, xièxie — 'I'm full, thank you') might not work immediately. Hosts often insist. Accept a little more to show appreciation.",
    doAndDont: {
      do: ["Let elders eat first", "Use the serving chopsticks (公筷) for shared dishes", "Compliment the food enthusiastically", "Refill others' tea before your own"],
      dont: ["Stick chopsticks upright in rice", "Point with chopsticks", "Pick through a shared dish to find the best piece", "Waste food if avoidable"]
    },
    tags: ["food", "dining", "etiquette", "chopsticks"]
  },
  {
    id: 5,
    title: "The Number 8 and Lucky Numbers",
    titleChinese: "数字与运气",
    category: "symbols",
    description: "Numbers carry profound cultural significance in China. The pronunciation of numbers determines whether they're lucky or unlucky. This affects everything from phone numbers to building floors to wedding dates.",
    keyPoints: [
      "8 (八 bā) — luckiest number, sounds like 发 (fā, prosper). 888 is extremely auspicious",
      "6 (六 liù) — smooth and lucky, sounds like 流 (smooth flow)",
      "9 (九 jiǔ) — long-lasting, sounds like 久 (jiǔ, long time)",
      "4 (四 sì) — very unlucky, sounds like 死 (sǐ, death). Many buildings skip the 4th floor",
      "The 2008 Beijing Olympics started 8/8/08 at 8:08pm deliberately"
    ],
    example: "A phone number with 8888 sells for thousands of yuan. Getting a license plate with 6666 or 8888 is considered very lucky. Conversely, 444 or 14 are considered very unlucky.",
    tags: ["numbers", "luck", "symbols", "culture"]
  },
  {
    id: 6,
    title: "Guanxi (关系 Connections)",
    titleChinese: "关系网络",
    category: "business",
    description: "Guānxi (关系) literally means 'relationship/connections' but in Chinese culture it refers to a network of relationships and mutual obligations that facilitate business and social life. Building and maintaining guanxi is essential for getting things done.",
    keyPoints: [
      "Relationships before business — take time to build trust before discussing deals",
      "Favors create obligations (人情, rénqíng) — both parties must reciprocate over time",
      "Introductions through mutual connections carry much more weight than cold outreach",
      "Business meals and socializing are essential for building guanxi"
    ],
    example: "Instead of emailing a company cold, find a mutual contact (中间人, zhōngjiānrén — middleman) to make an introduction. The endorsement from a trusted person opens doors much faster.",
    tags: ["business", "relationships", "networking", "social"]
  },
  {
    id: 7,
    title: "Four Gentlemen of Chinese Art",
    titleChinese: "花中四君子",
    category: "history",
    description: "The Four Gentlemen (梅兰竹菊, méi lán zhú jú) — plum blossom, orchid, bamboo, and chrysanthemum — are the four symbolic plants of Chinese art and poetry. Each represents a virtue and a season, and they appear constantly in Chinese art, poetry, and decor.",
    keyPoints: [
      "Plum (梅 méi) — winter, endurance, perseverance despite hardship",
      "Orchid (兰 lán) — spring, refinement, moral integrity",
      "Bamboo (竹 zhú) — summer, strength, flexibility, modesty",
      "Chrysanthemum (菊 jú) — autumn, nobility, graceful aging"
    ],
    example: "When a Chinese person says someone is as 'straight as bamboo' (竹子一样正直), they mean the person has unwavering integrity. Recognizing these symbols helps understand poetry, paintings, and decorative motifs.",
    tags: ["art", "symbolism", "poetry", "classical"]
  },
  {
    id: 8,
    title: "Saving Face in Disagreements",
    titleChinese: "委婉表达不同意",
    category: "social",
    description: "Direct disagreement and outright refusal are uncomfortable in Chinese social culture. Learning to decline, disagree, or say 'no' in indirect ways is crucial for navigating relationships without causing offense.",
    keyPoints: [
      "Hard 'no' → Use: '我考虑一下' (I'll think about it) or '不太方便' (It's not very convenient)",
      "Disagreement → '这个想法很好，不过…' (This idea is great, but...)",
      "Can't come → '我可能有事' (I might have something) — vague excuses are socially acceptable",
      "Silence often means 'no' — pay attention to hesitation"
    ],
    example: "Boss asks you to work overtime on your day off. Direct: '不行，那天我有事' is blunt. Better: '我会尽量安排，不过那天可能有些不方便...' (I'll try to arrange it, but it might be somewhat inconvenient that day...)",
    doAndDont: {
      do: ["Use 可能, 也许, 不太方便 for indirect refusals", "Follow up a refusal with an alternative offer", "Read silence and hesitation as 'no'"],
      dont: ["Force a direct yes/no from people", "Say 不行 (can't do it) too bluntly", "Interpret indirect responses as genuine agreement"]
    },
    tags: ["communication", "social", "face", "politeness"]
  },
  {
    id: 9,
    title: "Red Color Symbolism",
    titleChinese: "红色的象征意义",
    category: "symbols",
    description: "Red (红 hóng) is China's most auspicious color — the color of luck, prosperity, joy, and celebration. It appears everywhere: red envelopes, bridal wear, decorations, and national holidays. Understanding red's role unlocks much of Chinese visual culture.",
    keyPoints: [
      "Red = luck and prosperity. Opposite of Western funeral associations",
      "Brides wear red, not white (白 bái = mourning color in Chinese culture)",
      "Red envelopes (红包) for money gifts at festivals and events",
      "Red is prominent during Spring Festival, weddings, and national holidays",
      "White and black are worn to funerals — avoid at celebrations"
    ],
    example: "A friend invites you to their wedding. Wearing white or black is inappropriate. Red or bright colors show celebration and good wishes for the couple.",
    tags: ["colors", "symbols", "weddings", "festivals"]
  },
  {
    id: 10,
    title: "Tea Culture",
    titleChinese: "茶文化",
    category: "food",
    description: "Tea (茶 chá) has been central to Chinese culture for over 3,000 years. It's more than a drink — it's a social ritual, a form of respect, and an art form. The tea ceremony (茶道 chádào) embodies harmony, respect, purity, and tranquility.",
    keyPoints: [
      "Offer tea to guests immediately — it's the first act of hospitality",
      "Always pour for others before yourself",
      "Tap two fingers on the table to say 'thank you' when tea is poured (from Qing dynasty etiquette)",
      "Four main categories: green (绿茶), black (红茶), oolong (乌龙), pu-erh (普洱)",
      "Dragon Well (龙井 Lóngjǐng) and Tieguanyin (铁观音) are the most prestigious teas"
    ],
    example: "During a business meeting, tea is almost always served. The appropriate response when tea is poured: tap two bent fingers on the table (representing a respectful bow). Saying 谢谢 is also fine in modern settings.",
    tags: ["tea", "hospitality", "ritual", "culture"]
  },
  {
    id: 11,
    title: "WeChat Etiquette",
    titleChinese: "微信礼仪",
    category: "social",
    description: "WeChat (微信 Wēixìn) is China's super-app — messaging, payments, social media, and business all in one. Knowing WeChat etiquette is essential for navigating modern Chinese social and professional life.",
    keyPoints: [
      "Business contacts are often exchanged via WeChat QR codes, not business cards",
      "Voice messages are very common in China — don't be surprised if someone sends long voice memos",
      "Red envelope battles happen during festivals — participate to build goodwill",
      "Don't add people you've just met on WeChat immediately — wait until there's a real connection",
      "Moments (朋友圈) posts are significant — liking or commenting shows you care"
    ],
    example: "At a networking event, Chinese attendees might ask '加一下微信吧' (Let's add each other on WeChat) instead of exchanging business cards. Have your QR code ready.",
    tags: ["digital", "social media", "modern", "business"]
  },
  {
    id: 12,
    title: "The Art of Compliments",
    titleChinese: "称赞的艺术",
    category: "social",
    description: "Giving and receiving compliments follows distinct patterns in Chinese culture. The expected response to a compliment is modest deflection, not acceptance. This is a deeply ingrained politeness convention that surprises many Westerners.",
    keyPoints: [
      "Responding with 'thank you' to a compliment can seem arrogant — deflect instead",
      "Common deflections: 哪里哪里 (nǎlǐ nǎlǐ — where, where = 'not at all!'), 过奖了 (guò jiǎng le — you flatter me)",
      "When complimenting food you cooked: '做得不好，随便吃点' (not well made, just eat a little)",
      "Complimenting children: parents often respond by pointing out flaws to ward off evil eye"
    ],
    example: "Someone says: '你中文说得真好！' (Your Chinese is so good!) — Wrong response: '谢谢，我学了很久' (Thanks, I studied for a long time). Right response: '哪里哪里，还差得远呢！' (Not at all, still far from good!)",
    tags: ["compliments", "modesty", "communication", "social"]
  }
];
