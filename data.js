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
];
