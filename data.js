// 英単語データ - 写真から抽出
// keyword: 空欄にする単語, keywordForms: 活用形も含む
const WORD_DATA = [
  {
    id: 1, word: "enjoy", number: "0001", category: "楽しい",
    sentences: [
      { ja: "結婚式、楽しかった？", en: "Did you {enjoy} the wedding party?", blank: "enjoy" },
      { ja: "めっちゃ楽しかった。", en: "I {enjoyed} it a lot.", blank: "enjoyed" },
      { ja: "毎日単語を覚えることを楽しむことが大切だよね。", en: "It's important to {enjoy} learning new words every day.", blank: "enjoy" },
    ]
  },
  {
    id: 2, word: "fun", number: "0002", category: "楽しい",
    sentences: [
      { ja: "めっちゃ楽しかった！", en: "I had a lot of {fun}!", blank: "fun" },
      { ja: "ジェットコースターに乗るのは楽しい。", en: "It's {fun} to ride the roller coaster.", blank: "fun" },
    ]
  },
  {
    id: 3, word: "excited", number: "0003", category: "楽しい",
    sentences: [
      { ja: "彼に会うことを楽しみにしている。", en: "I'm {excited} to meet him.", blank: "excited" },
      { ja: "彼女はそのコンサートをとても楽しみにしている。", en: "She is so {excited} about the concert.", blank: "excited" },
      { ja: "また会えるの楽しみにしてるね。", en: "I'm looking forward to seeing you again.", blank: "forward" },
    ]
  },
  {
    id: 4, word: "entertaining", number: "0004", category: "楽しい",
    sentences: [
      { ja: "すごい楽しいショーだった。", en: "It was a very {entertaining} show.", blank: "entertaining" },
    ]
  },
  {
    id: 5, word: "thrill", number: "0005", category: "楽しい",
    sentences: [
      { ja: "ハラハラする映画が見たくない？", en: "Why don't we watch a {thrilling} movie?", blank: "thrilling" },
      { ja: "あのジェットコースターに彼はハラハラしてた。", en: "He was {thrilled} by that roller coaster.", blank: "thrilled" },
    ]
  },
  {
    id: 6, word: "like", number: "0006", category: "好き",
    sentences: [
      { ja: "犬が好き。", en: "I {like} dogs.", blank: "like" },
      { ja: "猫の動画を見るのが好き。", en: "I {like} watching cat videos.", blank: "like" },
      { ja: "こんなこと言いたくないけど…それおかしいよ。", en: "I don't {like} to say this, but that's wrong.", blank: "like" },
      { ja: "長い映画を見るのは、あんまり好きじゃないんだよね。", en: "I don't really {like} watching long movies.", blank: "like" },
    ]
  },
  {
    id: 7, word: "prefer", number: "0007", category: "好き",
    sentences: [
      { ja: "紅茶よりコーヒーが好き。", en: "I {prefer} coffee to tea.", blank: "prefer" },
      { ja: "休みの日は外出するより家にいる方が好きですか？", en: "Do you {prefer} staying at home to going out on your day off?", blank: "prefer" },
    ]
  },
  {
    id: 8, word: "favorite", number: "0008", category: "好き",
    sentences: [
      { ja: "これ私が好きなやつ！", en: "This is my {favorite}!", blank: "favorite" },
      { ja: "よく見るお気に入りのミュージックビデオってある？", en: "Do you have a {favorite} music video you often watch?", blank: "favorite" },
    ]
  },
  {
    id: 9, word: "cool", number: "0009", category: "いい",
    sentences: [
      { ja: "それいいね。", en: "That's {cool}.", blank: "cool" },
      { ja: "今日は涼しい。", en: "It's {cool} today.", blank: "cool" },
      { ja: "サンドイッチを冷蔵庫に入れる前に、冷ましておいてね。", en: "{Cool} down the sandwich before you put it in the fridge.", blank: "Cool" },
    ]
  },
  {
    id: 10, word: "fine", number: "0010", category: "いい",
    sentences: [
      { ja: "天気がいい日だね。", en: "It's a {fine} day.", blank: "fine" },
      { ja: "水要らないよ！僕は大丈夫、ありがとう。", en: "I don't need water! I'm {fine}, thank you.", blank: "fine" },
      { ja: "先週トムは交通事故に遭ったけど、今日は元気そうだね。", en: "Tom had a traffic accident last week, but he looks {fine} today.", blank: "fine" },
    ]
  },
  {
    id: 11, word: "fancy", number: "0011", category: "いい",
    sentences: [
      { ja: "今回の旅行では、いい感じのレストランで夜ご飯を食べて、少し高めのホテルに泊まった。", en: "During this trip, I had dinner at a {fancy} restaurant and stayed at a {fancy} hotel.", blank: "fancy" },
    ]
  },
  {
    id: 12, word: "refreshing", number: "0012", category: "いい",
    sentences: [
      { ja: "外でご飯を食べるのは気持ちいいね。", en: "Eating outside is {refreshing}.", blank: "refreshing" },
      { ja: "味が爽やかだね。", en: "The taste is {refreshing}.", blank: "refreshing" },
    ]
  },
  {
    id: 13, word: "awesome", number: "0013", category: "すごい",
    sentences: [
      { ja: "新しいアトラクションがめっちゃいい！", en: "The new attraction is {awesome}!", blank: "awesome" },
    ]
  },
  {
    id: 14, word: "amazing", number: "0014", category: "すごい",
    sentences: [
      { ja: "あの有名人は素晴らしい声をしている。", en: "The celebrity has an {amazing} voice.", blank: "amazing" },
      { ja: "彼のパフォーマンスにはすごく驚かされた。", en: "His performance {amazed} me.", blank: "amazed" },
    ]
  },
];
