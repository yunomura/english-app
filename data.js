const WORD_DATA = [
  {
    id: 1, word: "enjoy", number: "0001", category: "楽しい",
    sentences: [
      { ja: "結婚式、楽しかった？", en: "Did you {enjoy} the wedding party?", note: "enjoy ●ing: ●することを楽しむ" },
      { ja: "めっちゃ楽しかった。", en: "I {enjoyed} it a lot.", note: "enjoy の過去形。後ろに目的語が必要" },
      { ja: "毎日単語を覚えることを楽しむことが大切だよね。", en: "It's important to {enjoy} learning new words every day.", note: "enjoy + ●ing の形。to不定詞はNG" },
    ]
  },
  {
    id: 2, word: "fun", number: "0002", category: "楽しい",
    sentences: [
      { ja: "めっちゃ楽しかった！", en: "I had a lot of {fun}!", note: "so much fun: とても楽しい。fun は名詞" },
      { ja: "ジェットコースターに乗るのは楽しい。", en: "It's {fun} to ride the roller coaster.", note: "It's fun to ●: ●するのは楽しい" },
    ]
  },
  {
    id: 3, word: "excited", number: "0003", category: "楽しい",
    sentences: [
      { ja: "彼に会うことを楽しみにしている。", en: "I'm {excited to} meet him.", note: "be excited to ●: ●することが楽しみだ" },
      { ja: "彼女はそのコンサートをとても楽しみにしている。", en: "She is so {excited about} the concert.", note: "be excited about ●: ●をワクワクする" },
      { ja: "また会えるの楽しみにしてるね。", en: "I'm {looking forward to} seeing you again.", note: "look forward to ●ing: ●することを楽しみにする" },
    ]
  },
  {
    id: 4, word: "entertaining", number: "0004", category: "楽しい",
    sentences: [
      { ja: "すごい楽しいショーだった。", en: "It was a very {entertaining} show.", note: "面白くて楽しい。人を楽しませるニュアンス" },
    ]
  },
  {
    id: 5, word: "thrill", number: "0005", category: "楽しい",
    sentences: [
      { ja: "ハラハラする映画が見たくない？", en: "Why don't we watch a {thrilling} movie?", note: "thrilling: ハラハラさせるような" },
      { ja: "あのジェットコースターに彼はハラハラしてた。", en: "He was {thrilled} by that roller coaster.", note: "be thrilled: ハラハラさせられる（受身）" },
    ]
  },
  {
    id: 6, word: "like", number: "0006", category: "好き",
    sentences: [
      { ja: "犬が好き。", en: "I {like} dogs.", note: "like ●: ●が好き" },
      { ja: "猫の動画を見るのが好き。", en: "I {like} watching cat videos.", note: "like ●ing: ●することが好き" },
      { ja: "こんなこと言いたくないけど…それおかしいよ。", en: "I don't {like to} say this, but that's wrong.", note: "like to ●: ●することが好き（to不定詞版）" },
      { ja: "長い映画を見るのは、あんまり好きじゃないんだよね。", en: "I don't really {like} watching long movies.", note: "not really like: あんまり好きじゃない（やわらかい否定）" },
    ]
  },
  {
    id: 7, word: "prefer", number: "0007", category: "好き",
    sentences: [
      { ja: "紅茶よりコーヒーが好き。", en: "I {prefer} coffee {to} tea.", note: "prefer A to B: BよりAの方が好き" },
      { ja: "休みの日は外出するより家にいる方が好きですか？", en: "Do you {prefer} staying at home {to} going out on your day off?", note: "prefer ●ing to ●ing の形も可" },
    ]
  },
  {
    id: 8, word: "favorite", number: "0008", category: "好き",
    sentences: [
      { ja: "これ私が好きなやつ！", en: "This is my {favorite}!", note: "最も好きな。名詞としても使える" },
      { ja: "よく見るお気に入りのミュージックビデオってある？", en: "Do you have a {favorite} music video you often watch?", note: "形容詞: お気に入りの" },
    ]
  },
  {
    id: 9, word: "cool", number: "0009", category: "いい",
    sentences: [
      { ja: "それいいね。", en: "That's {cool}.", note: "形: いい、かっこいい（カジュアル）" },
      { ja: "今日は涼しい。", en: "It's {cool} today.", note: "形: 涼しい（気温）" },
      { ja: "サンドイッチを冷蔵庫に入れる前に、冷ましておいてね。", en: "{Cool} down the sandwich before you put it in the fridge.", note: "動: ～を冷ます。cool down で冷ます" },
    ]
  },
  {
    id: 10, word: "fine", number: "0010", category: "いい",
    sentences: [
      { ja: "天気がいい日だね。", en: "It's a {fine} day.", note: "形: いい、元気な、細かい、繊細な" },
      { ja: "水要らないよ！僕は大丈夫、ありがとう。", en: "I don't need water! I'm {fine}, thank you.", note: "I'm fine: 大丈夫です" },
      { ja: "先週トムは交通事故に遭ったけど、今日は元気そうだね。", en: "Tom had a traffic accident last week, but he looks {fine} today.", note: "look fine: 元気そうに見える" },
    ]
  },
  {
    id: 11, word: "fancy", number: "0011", category: "いい",
    sentences: [
      { ja: "今回の旅行では、いい感じのレストランで夜ご飯を食べて、少し高めのホテルに泊まった。", en: "During this trip, I had dinner at a {fancy} restaurant and stayed at a {fancy} hotel.", note: "形: 高級な、いい感じの" },
    ]
  },
  {
    id: 12, word: "refreshing", number: "0012", category: "いい",
    sentences: [
      { ja: "外でご飯を食べるのは気持ちいいね。", en: "Eating outside is {refreshing}.", note: "形: 爽やかな、気持ちいい" },
      { ja: "味が爽やかだね。", en: "The taste is {refreshing}.", note: "味や体験が爽やかなときに使う" },
    ]
  },
  {
    id: 13, word: "awesome", number: "0013", category: "すごい",
    sentences: [
      { ja: "新しいアトラクションがめっちゃいい！", en: "The new attraction is {awesome}!", note: "形: すごくて最高な（カジュアル）" },
    ]
  },
  {
    id: 14, word: "amazing", number: "0014", category: "すごい",
    sentences: [
      { ja: "あの有名人は素晴らしい声をしている。", en: "The celebrity has an {amazing} voice.", note: "形: びっくりするような、素晴らしい" },
      { ja: "彼のパフォーマンスにはすごく驚かされた。", en: "His performance {amazed} me.", note: "動: amaze ～をすごく驚かせる" },
    ]
  },
  {
    id: 15, word: "apologize", number: "0073", category: "謝る",
    sentences: [
      { ja: "謝りたします。", en: "I {apologize}.", note: "apologize (to 人) for ～: (人に)～のことで謝る" },
      { ja: "間違いを謝罪いたします。", en: "I {apologize for} the mistake.", note: "apologize for ●: ●について謝る" },
      { ja: "彼女は失礼な態度に対して、謝罪してきた。", en: "She {apologized to} me for being rude.", note: "apologize to 人 for ●: 人に●を謝る" },
    ]
  },
  {
    id: 16, word: "guilty", number: "0074", category: "謝る",
    sentences: [
      { ja: "メアリーに小さな嘘をついてしまったことに罪悪感を感じた。", en: "I {felt guilty about} telling a small lie to Mary.", note: "feel guilty about ●: ●に罪悪感を感じる" },
      { ja: "自分のミスに罪悪感を感じた。", en: "I {felt guilty about} my mistake.", note: "feel guilty: 罪悪感を感じる" },
    ]
  },
  {
    id: 17, word: "hurt", number: "0075", category: "つらい",
    sentences: [
      { ja: "傷ついている。", en: "I'm {hurt}.", note: "メンタルを傷つけるニュアンスが多い" },
      { ja: "指を切って、(それが)痛い。", en: "I cut my finger and it {hurts}.", note: "動: 痛む。主語が痛みの原因" },
      { ja: "彼の言葉に傷ついた。", en: "His words {hurt} me.", note: "動: ～を傷つける" },
    ]
  },
  {
    id: 18, word: "bitter", number: "0076", category: "つらい",
    sentences: [
      { ja: "それはつらい経験だね。", en: "That's a {bitter} experience.", note: "形: ほろ苦い経験のようなつらさ" },
      { ja: "このコーヒーは苦い？甘い？", en: "Is this coffee {bitter} or sweet?", note: "形: 苦い（味）" },
    ]
  },
  {
    id: 19, word: "painful", number: "0077", category: "つらい",
    sentences: [
      { ja: "友達が昨年に亡くなって…つらい経験だったよ。", en: "I lost my friend last year, which was a {painful} experience.", note: "形: つらい、痛い" },
      { ja: "そのけが、痛そうだね。", en: "The injury looks {painful}.", note: "look painful: 痛そうに見える" },
      { ja: "足の骨折ったの？痛そう…。", en: "You broke your leg? That's {painful}...", note: "That's painful: それは痛い/つらい" },
    ]
  },
  {
    id: 20, word: "tough", number: "0078", category: "大変・キツイ",
    sentences: [
      { ja: "大学時代は、大変な時期を過ごした。", en: "I had a {tough} time in college.", note: "形: 大変な。tough time: 大変な時期" },
    ]
  },
  {
    id: 21, word: "harsh", number: "0079", category: "大変・キツイ",
    sentences: [
      { ja: "あの会社で働いたのは、きつい経験でした。", en: "Working at the company was a {harsh} experience.", note: "形: 厳しい、過酷な" },
    ]
  },
  {
    id: 22, word: "disappoint", number: "0080", category: "落ち込む",
    sentences: [
      { ja: "息子のテストの結果にがっかりした。", en: "My son's test result {disappointed} me.", note: "動: ～をがっかりさせる" },
      { ja: "彼女は自分自身にがっかりしている。", en: "She is {disappointed} with herself.", note: "be disappointed with ●: ●にがっかりしている" },
    ]
  },
  {
    id: 23, word: "depress", number: "0081", category: "落ち込む",
    sentences: [
      { ja: "あの悲しい映画で憂鬱な気分になった。", en: "That sad movie {depressed} me.", note: "動: ～を憂鬱にさせる" },
      { ja: "春は気分が下がる。", en: "I get {depressed} in spring.", note: "get depressed: 憂鬱な気分になる" },
      { ja: "父親がいなくなって落ち込んだ。", en: "I was {depressed} by the loss of my father.", note: "be depressed by ●: ●で落ち込む" },
    ]
  },
  {
    id: 24, word: "suffer", number: "0082", category: "苦しむ",
    sentences: [
      { ja: "人は物価高に苦しんでいる。", en: "People are {suffering from} high prices.", note: "suffer from ～: ～で苦しむ" },
    ]
  },
  {
    id: 25, word: "struggle", number: "0083", category: "苦しむ",
    sentences: [
      { ja: "タマネギを切るのに苦戦している。", en: "I'm {struggling with} cutting onions.", note: "struggle with ～: ～に苦戦する、もがき苦しむ" },
      { ja: "毎日運動を続けることに苦戦している。", en: "I'm {struggling to} keep working out every day.", note: "struggle to ●: ●することに苦戦する" },
    ]
  },
  {
    id: 26, word: "trouble", number: "0084", category: "苦しむ",
    sentences: [
      { ja: "その解決策を見つけるのにトラブった。", en: "I had {trouble} finding the solution.", note: "have trouble ●ing: ●するのに困る（状態）" },
    ]
  },
  {
    id: 27, word: "stand", number: "0085", category: "我慢する",
    sentences: [
      { ja: "その痛みにもう耐えられなかった。", en: "I couldn't {stand} the pain.", note: "動: ～を我慢する、～に耐える" },
    ]
  },
  {
    id: 28, word: "patient", number: "0086", category: "我慢する",
    sentences: [
      { ja: "大変なときは、忍耐強く問題を解決してね。", en: "During hard times, be {patient} and solve the problem.", note: "形: 忍耐強い" },
    ]
  },
  {
    id: 29, word: "tolerate", number: "0087", category: "怒る",
    sentences: [
      { ja: "目標を達成するには辛い時期を我慢しなきゃいけないときもある。", en: "To achieve goals, we sometimes have to {tolerate} difficulties.", note: "動: (忍耐強く)～を我慢する" },
    ]
  },
  {
    id: 30, word: "angry", number: "0089", category: "怒る",
    sentences: [
      { ja: "彼は自分自身のミスに怒った。", en: "He {got angry} about his own mistakes.", note: "get angry: 怒る（状態変化）" },
      { ja: "怒りは状況を悪くするだけ。", en: "{Anger} just makes the situation worse.", note: "名: anger 怒り" },
      { ja: "メアリーは怒りをコントロールできないことがよくある。", en: "Mary often can't control her {anger}.", note: "control one's anger: 怒りをコントロールする" },
    ]
  },
  {
    id: 31, word: "furious", number: "0090", category: "怒る",
    sentences: [
      { ja: "彼はその言葉に大激怒している。", en: "He is so {furious about} the words.", note: "be furious about 物: 物に激怒している" },
    ]
  },
  {
    id: 32, word: "resist", number: "0088", category: "我慢する",
    sentences: [
      { ja: "チョコをもう1個食べるのを我慢できなかった。（抵抗できなかった）", en: "I couldn't {resist} eating one more chocolate.", note: "resist ●ing: ●するのを我慢する（抵抗する）" },
    ]
  },
];
