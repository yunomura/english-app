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
    id: 100, word: "incredible", number: "0015", category: "すごい",
    sentences: [
      { ja: "めっちゃすごいね。", en: "That's {incredible}.", note: "形: 驚くくらいすごい" },
      { ja: "その犯罪ドラマ、めちゃくちゃ（驚くくらい）面白かった。", en: "The crime drama was {incredibly} good.", note: "副: incredibly 驚くほど" },
    ]
  },
  {
    id: 101, word: "fantastic", number: "0016", category: "すごい",
    sentences: [
      { ja: "彼女のコンサートでのパフォーマンスは素晴らしかった。", en: "Her performance at the concert was {fantastic}.", note: "形: 素晴らしい" },
    ]
  },
  {
    id: 102, word: "excellent", number: "0017", category: "すごい",
    sentences: [
      { ja: "そのレストランのご飯は完璧だった。", en: "The food at the restaurant was {excellent}.", note: "形: 完璧な、素晴らしい" },
    ]
  },
  {
    id: 103, word: "brilliant", number: "0018", category: "すごい",
    sentences: [
      { ja: "彼の日本語はすばらしい！", en: "His Japanese is {brilliant}!", note: "形: 素晴らしい" },
    ]
  },
  {
    id: 104, word: "impress", number: "0019", category: "感動する",
    sentences: [
      { ja: "彼女の絵に感動を与えた。", en: "Her painting {impressed} me.", note: "動: ～を感動させる、～に感銘を与える" },
      { ja: "映画に大感動した。", en: "The movie was {impressive}.", note: "impressive: 感動的な" },
      { ja: "その映画に感動させられた。", en: "I was {impressed} by the movie.", note: "be impressed by ～: ～に感動する" },
    ]
  },
  {
    id: 105, word: "move", number: "0020", category: "感動する",
    sentences: [
      { ja: "感動した。", en: "I got goosebumps.", note: "goosebumps: 鳥肌が立った" },
      { ja: "彼女の歌声に感動した。", en: "Her voice {moved} me.", note: "動: ～を感動させる" },
    ]
  },
  {
    id: 106, word: "touch", number: "0021", category: "感動する",
    sentences: [
      { ja: "このミュージカル映画は心に響いた。", en: "This movie musical was {touching}.", note: "touching: 心にグッとくるような" },
    ]
  },
  {
    id: 107, word: "fascinate", number: "0022", category: "感動する",
    sentences: [
      { ja: "その美しい作品に魅了された。", en: "I was {fascinated by} the beautiful work.", note: "be fascinated by ～: ～に魅了される" },
    ]
  },
  {
    id: 108, word: "glad", number: "0023", category: "嬉しい",
    sentences: [
      { ja: "そう聞けて嬉しかった。", en: "I'm {glad to} hear that.", note: "be glad to ●: ●して嬉しい" },
      { ja: "けがが治って良かったね。", en: "I'm {glad} (that) you recovered from the injury.", note: "be glad (that) ×: ×のことが嬉しい" },
    ]
  },
  {
    id: 109, word: "honor", number: "0024", category: "満足する",
    sentences: [
      { ja: "ここにいられて光栄です。", en: "I'm {honored to} be here.", note: "be honored to ●: ●して光栄だ" },
      { ja: "お会いできて光栄です。", en: "It's an {honor} to meet you.", note: "名: honor 光栄、名誉" },
    ]
  },
  {
    id: 110, word: "satisfy", number: "0025", category: "満足する",
    sentences: [
      { ja: "テスト結果に満足してるの？", en: "Are you {satisfied with} the test result?", note: "be satisfied with ～: ～に満足する" },
      { ja: "そのマッサージは満足できるものだった。", en: "The quality of the massage was {satisfying}.", note: "satisfying: それに満足" },
      { ja: "彼のパフォーマンスには満足しなかった。", en: "His performance didn't {satisfy} me.", note: "動: ～を満足させる" },
    ]
  },
  {
    id: 111, word: "fulfill", number: "0026", category: "満足する",
    sentences: [
      { ja: "自分の人生に大満足している。", en: "I feel {fulfilled} in my life.", note: "feel fulfilled: 人の気持ちなどを満たして、幸せいっぱい" },
      { ja: "家庭生活はやりがいがあって満足している。", en: "My family life is {fulfilling}.", note: "fulfilling: やりがいのある" },
    ]
  },
  {
    id: 112, word: "relieve", number: "0027", category: "安心する・落ち着く",
    sentences: [
      { ja: "元気なんだね！そう聞いて安心した！", en: "You are good! I'm {relieved to} hear that!", note: "be relieved to ●: ●して安心する" },
      { ja: "この薬が痛みを和らげてくれた。", en: "This medicine {relieved} the pain.", note: "動: ～を和らげる、～を楽にする" },
      { ja: "ストレス解消法は？", en: "What do you do for stress {relief}?", note: "名: relief 安心、(痛みなどの)除去" },
    ]
  },
  {
    id: 113, word: "secure", number: "0028", category: "安心する・落ち着く",
    sentences: [
      { ja: "精神的に調子が良くなくて不安に感じていたけど、今は家族が助けてくれているから安心。", en: "I was not mentally healthy and feeling {insecure}, but now I'm feeling {secure} because my family is helping me.", note: "feel secure: 安心する / insecure: 不安な" },
    ]
  },
  {
    id: 114, word: "relax", number: "0029", category: "安心する・落ち着く",
    sentences: [
      { ja: "休みの日は家でリラックスしたい。", en: "I want to {relax} at home on my day off.", note: "動: リラックスする" },
    ]
  },
  {
    id: 115, word: "chill", number: "0030", category: "安心する・落ち着く",
    sentences: [
      { ja: "今、家でダラダラしてる。", en: "I'm {chilling out} at home now.", note: "chill out: ダラダラする" },
    ]
  },
  {
    id: 116, word: "calm", number: "0031", category: "安心する・落ち着く",
    sentences: [
      { ja: "彼女はいつも冷静で落ち着いている。", en: "She is always {calm}.", note: "形: 落ち着いた、冷静な、穏やかな" },
      { ja: "落ち着いて深呼吸して。", en: "{Stay calm} and take a deep breath.", note: "stay calm: 落ち着く" },
    ]
  },
  {
    id: 117, word: "comfortable", number: "0032", category: "安心する・落ち着く",
    sentences: [
      { ja: "このカフェに来ると落ち着く。", en: "I {feel comfortable} when I come to this cafe.", note: "feel comfortable: 落ち着く" },
      { ja: "誰かが夜に外で大きな声で話していて、不快だった。", en: "Someone was speaking loudly outside at night, and I was feeling {uncomfortable}.", note: "uncomfortable: 不快な" },
    ]
  },
  {
    id: 118, word: "settle", number: "0033", category: "安心する・落ち着く",
    sentences: [
      { ja: "全てが落ち着いたら、会おうね。", en: "When everything has {settled down}, let's meet up.", note: "settle down: 落ち着く" },
    ]
  },
  {
    id: 119, word: "thank", number: "0034", category: "感謝する",
    sentences: [
      { ja: "その優しさに感謝。", en: "{Thank you for} your kindness.", note: "Thank you for ～: ～をありがとう" },
      { ja: "その会社に電話してくれて本当にありがとう。", en: "{Thank you} so much {for} calling the company.", note: "Thank you so much for ～" },
      { ja: "彼のおかげでテストに合格できた。", en: "{Thanks to} him, I passed the exam.", note: "Thanks to ～: ～のおかげで" },
    ]
  },
  {
    id: 120, word: "appreciate", number: "0035", category: "感謝する",
    sentences: [
      { ja: "感謝します。", en: "I {appreciate} it.", note: "動: ～に感謝する、～を評価する" },
      { ja: "助けに感謝します。", en: "I {appreciate} your help.", note: "appreciate ●: ●に感謝する" },
    ]
  },
  {
    id: 121, word: "grateful", number: "0036", category: "感謝する",
    sentences: [
      { ja: "この機会に感謝しています。", en: "I'm {grateful for} this opportunity.", note: "be grateful for ～: ～に感謝している" },
    ]
  },
  {
    id: 122, word: "treasure", number: "0037", category: "大切にする",
    sentences: [
      { ja: "もらった手紙は宝物のように大切にしている。", en: "I {treasure} the letters I received.", note: "動: ～を大切にする" },
    ]
  },
  {
    id: 123, word: "cherish", number: "0038", category: "大切にする",
    sentences: [
      { ja: "彼女は友達を大切にしている。", en: "She {cherishes} her friends.", note: "動: ～を大切にする" },
    ]
  },
  {
    id: 124, word: "enthusiasm", number: "0039", category: "情熱がある",
    sentences: [
      { ja: "彼は教育に情熱を注いでいる。", en: "He has a lot of {enthusiasm} for education.", note: "名: 熱意、情熱。be enthusiastic about ～: ～に情熱がある" },
    ]
  },
  {
    id: 125, word: "passion", number: "0040", category: "情熱がある",
    sentences: [
      { ja: "彼女は自分の仕事に対して強い情熱を持っている。", en: "She has a lot of {passion} for her job.", note: "名: 情熱。be passionate about ～: ～に情熱がある" },
    ]
  },
  {
    id: 126, word: "ambition", number: "0041", category: "情熱がある",
    sentences: [
      { ja: "彼は成功するという大きな野望を持っている。", en: "He has a great {ambition} to be successful.", note: "名: 熱望、野望" },
    ]
  },
  {
    id: 127, word: "tired", number: "0042", category: "疲れる",
    sentences: [
      { ja: "あの人と話すのうんざり。", en: "I'm {tired of} talking with that person.", note: "be tired of ～: ～に疲れた、～に飽きた" },
      { ja: "その曲にはもう飽きた。", en: "I got {tired of} the song.", note: "get tired of ～: ～に飽きる" },
    ]
  },
  {
    id: 128, word: "exhausted", number: "0043", category: "疲れる",
    sentences: [
      { ja: "激しく走って疲労困憊。（めちゃくちゃ疲れている）", en: "I'm {exhausted} after running hard.", note: "形: とても疲れた（状態）" },
    ]
  },
  {
    id: 129, word: "overwhelm", number: "0044", category: "疲れる",
    sentences: [
      { ja: "有名人がいっぱいいて圧倒された。", en: "I saw a lot of famous people and felt {overwhelmed}.", note: "be overwhelmed by ～: ～に圧倒される" },
      { ja: "今日は新しいことをたくさん学んで、脳がいっぱい。", en: "I'm {overwhelmed by} all of the new things I learned today.", note: "すさまじく圧倒される" },
      { ja: "3日間連続で働いて、打ちのめされた。", en: "I worked for three days in a row and I'm {overwhelmed}.", note: "overwhelmed: 圧倒されている" },
    ]
  },
  {
    id: 130, word: "busy", number: "0045", category: "忙しい",
    sentences: [
      { ja: "子育てで忙しい。", en: "I'm {busy} raising kids.", note: "be busy ●ing: ●するので忙しい" },
      { ja: "家の掃除をするので忙しい。", en: "I'm {busy} cleaning my house.", note: "busy + ●ing" },
      { ja: "仕事で忙しい。", en: "I'm {busy} with work.", note: "busy with ●: ●で忙しい" },
    ]
  },
  {
    id: 131, word: "tight", number: "0046", category: "忙しい",
    sentences: [
      { ja: "今週はスケジュールがキツイ。", en: "I have a {tight} schedule this week.", note: "tight schedule: スケジュールや服がキツイ" },
      { ja: "このシャツはきつすぎる。", en: "This shirt is too {tight}.", note: "形: 詰まった、キツイ" },
    ]
  },
  {
    id: 132, word: "nervous", number: "0047", category: "緊張する",
    sentences: [
      { ja: "会議のことで緊張している。", en: "I'm {nervous about} the meeting.", note: "be nervous about ～: ～のことで緊張する" },
    ]
  },
  {
    id: 133, word: "pressure", number: "0048", category: "忙しい",
    sentences: [
      { ja: "上司との会話でプレッシャーを感じる。", en: "Conversations with my boss {put a lot of pressure on} me.", note: "put a lot of pressure on ～: ～にプレッシャーを与える" },
      { ja: "プレゼンのプレッシャーを感じる。", en: "I {feel pressured} when I make a presentation.", note: "feel pressured: プレッシャーを感じる" },
    ]
  },
  {
    id: 134, word: "annoy", number: "0049", category: "イライラ・ストレス",
    sentences: [
      { ja: "工事の音にイライラしている。", en: "I'm {annoyed} with the construction sound.", note: "be annoyed: イライラしている" },
      { ja: "映画館で子供たちが私の座席を蹴っていて、イライラした。", en: "Kids were kicking my seat at the movie theater, and I was {annoyed}.", note: "annoying: それがイライラする" },
      { ja: "彼女が言うことはいつもイライラする。", en: "What she says is always {annoying}.", note: "annoying: イライラさせるような" },
    ]
  },
  {
    id: 135, word: "irritate", number: "0050", category: "イライラ・ストレス",
    sentences: [
      { ja: "彼の大きな声がみんなをイラっとさせた。", en: "His loud voice {irritated} everyone.", note: "動: (神経にさわるほど)～をイライラさせる" },
    ]
  },
  {
    id: 136, word: "frustrate", number: "0051", category: "イライラ・ストレス",
    sentences: [
      { ja: "TOEICスコアにモヤモヤした。", en: "I was {frustrated} with the TOEIC score.", note: "be frustrated: 悔しい！モヤモヤする" },
      { ja: "そのテストの結果にモヤモヤする。", en: "The exam result is {frustrating}.", note: "frustrating: それがモヤモヤさせる" },
    ]
  },
  {
    id: 137, word: "stress", number: "0052", category: "ストレス",
    sentences: [
      { ja: "ストレスをためるのは体に良くない。", en: "Having a lot of {stress} is not good for our health.", note: "have stress: ストレスがたまる" },
      { ja: "ストレスがたまっている。", en: "I'm {stressed out}.", note: "be stressed out: ストレスがたまっている" },
      { ja: "この締切のせいでストレスがたまった。", en: "This deadline {stressed} me out.", note: "動: ～にストレスを与える" },
      { ja: "毎日運動をすることは、私にとってはストレスがたまる。", en: "Exercising every day is {stressful} for me.", note: "stressful: ストレスがたまるような" },
    ]
  },
  {
    id: 138, word: "confuse", number: "0053", category: "困る",
    sentences: [
      { ja: "頭がごちゃごちゃしている。", en: "I'm {confused}.", note: "be confused: 困惑している" },
      { ja: "彼の長い説明が私を困惑させた。", en: "His long explanation {confused} me.", note: "動: ～を混乱させる、～を困惑させる" },
      { ja: "彼女の決断によって困惑させられた。", en: "I was {confused by} her decision.", note: "be confused by ～: ～で困惑する" },
      { ja: "このプールのルールはややこしい。", en: "This pool's rules are {confusing}.", note: "confusing: それが困惑させるような" },
    ]
  },
  {
    id: 139, word: "bother", number: "0054", category: "困る",
    sentences: [
      { ja: "手間をかけて申し訳ないんだけど、もう一度ファイルを送ってくれる？", en: "I'm sorry to {bother} you, but can you send the file again?", note: "動: 手をわずらわせる、～に迷惑をかける" },
    ]
  },
  {
    id: 140, word: "terrible", number: "0055", category: "ひどい",
    sentences: [
      { ja: "今年の夏の気温はひどすぎる。", en: "The temperature is {terrible} this summer.", note: "形: ひどい" },
      { ja: "彼女の絵はひどすぎるね。", en: "Her drawing is {terrible}.", note: "terrible: ひどい、やばい" },
    ]
  },
  {
    id: 141, word: "insane", number: "0056", category: "ひどい",
    sentences: [
      { ja: "花火大会で通りが人でいっぱい。やばい！", en: "The street is too busy because of the fireworks festival. That's {insane}!", note: "形: 正気をなくっている、ひどい、やばい" },
    ]
  },
  {
    id: 142, word: "awful", number: "0057", category: "すごくひどい",
    sentences: [
      { ja: "その映画は最悪にひどかったよ。", en: "The movie was {awful}.", note: "形: 最悪の、ひどい" },
      { ja: "これ、臭い…ひどい匂いだよ。", en: "This smells bad...it's {awful}.", note: "awful: 厳しい" },
    ]
  },
  {
    id: 143, word: "severe", number: "0058", category: "すごくひどい",
    sentences: [
      { ja: "背中にひどい痛みがある。", en: "I have {severe} pain in my back.", note: "severe pain: ひどい痛み" },
      { ja: "ひどい腹痛がする。", en: "I have a {severe} stomachache.", note: "形: 厳しい（苦痛の程度など）" },
      { ja: "雨の被害はひどかった。", en: "The damage from the rain was {severe}.", note: "severe: 最悪である" },
    ]
  },
  {
    id: 144, word: "suck", number: "0059", category: "すごくひどい",
    sentences: [
      { ja: "今年の夏は最悪！暑すぎる。", en: "This summer {sucks}! It's too hot.", note: "動: 最悪である（カジュアル）" },
    ]
  },
  {
    id: 145, word: "badly", number: "0060", category: "すごくひどい",
    sentences: [
      { ja: "腕がひどく痛む。", en: "My arm hurts {badly}.", note: "副: 下手に、ひどく、悪く" },
      { ja: "彼女は行儀悪く振る舞った。", en: "She behaved {badly}.", note: "behaved badly: 行儀悪く振る舞う" },
    ]
  },
  {
    id: 146, word: "disgusting", number: "0061", category: "不快",
    sentences: [
      { ja: "この暴力的な動画は不快になる。", en: "This violent video is {disgusting}.", note: "形: (人を)不快にさせるような、吐き気がするような" },
      { ja: "昨夜自分で作った料理は最悪だった。", en: "What I cooked last night was {disgusting}.", note: "disgusting: 気持ち悪い" },
    ]
  },
  {
    id: 147, word: "gross", number: "0062", category: "不快",
    sentences: [
      { ja: "あの食べ物は個人的にキモかった。", en: "Personally, the food was {gross}.", note: "形: 「キモい」のようなカジュアルな言い方" },
    ]
  },
  {
    id: 148, word: "ugly", number: "0063", category: "不快",
    sentences: [
      { ja: "みんなが私のダサい服を笑ってた。", en: "Everyone was laughing at my {ugly} clothes.", note: "形: 醜い、ダサい" },
    ]
  },
  {
    id: 149, word: "offend", number: "0064", category: "不快",
    sentences: [
      { ja: "彼の言葉で不快な気持ちになった。", en: "His words {offended} me.", note: "動: ～の気分を害する" },
      { ja: "人を不快にさせる言葉は言わないようにしている。", en: "I'm trying not to say {offensive} words.", note: "offensive: 気分を害するような" },
    ]
  },
  {
    id: 150, word: "sad", number: "0065", category: "悲しい",
    sentences: [
      { ja: "とても悲しそうだね。", en: "You look so {sad}.", note: "形: 悲しい" },
    ]
  },
  {
    id: 151, word: "tragic", number: "0066", category: "悲しい",
    sentences: [
      { ja: "あの車の事故は悲しくてトラウマ的な経験でした。", en: "That car accident was a {tragic} and traumatic experience.", note: "形: 悲劇的な。tragedy: 悲劇" },
    ]
  },
  {
    id: 152, word: "regret", number: "0067", category: "悲しい",
    sentences: [
      { ja: "若いときに友達を作らなかったことを後悔している。", en: "I {regret} (that) I didn't make friends when I was young.", note: "regret ☆: ☆を後悔している" },
      { ja: "その会社に入社したことを彼女は後悔している。", en: "She {regrets} joining the company.", note: "regret ●ing: ●したことを後悔している" },
    ]
  },
  {
    id: 153, word: "unfortunately", number: "0068", category: "悲しい",
    sentences: [
      { ja: "残念なことに、トムは試験に落ちた。", en: "{Unfortunately}, Tom failed the examination.", note: "副: 残念なことに。fortunately: 幸運にも" },
    ]
  },
  {
    id: 154, word: "poor", number: "0069", category: "かわいそう",
    sentences: [
      { ja: "なんてかわいそうな子供なの…。", en: "What a {poor} kid.", note: "形: かわいそう、哀れな" },
      { ja: "そのかわいそうな猫に同情した。", en: "I felt sorry for the {poor} cat.", note: "poor: 哀れな" },
    ]
  },
  {
    id: 155, word: "pity", number: "0070", category: "かわいそう",
    sentences: [
      { ja: "道で生活をしている子供たちを見ると哀れに感じる。", en: "I feel {pity} for homeless kids.", note: "名: 哀れみ。feel pity for ～: ～を哀れに思う" },
    ]
  },
  {
    id: 156, word: "miserable", number: "0071", category: "かわいそう",
    sentences: [
      { ja: "全財産を失って、彼女は惨めそうに見えた。", en: "She lost all of her property and looked {miserable}.", note: "形: 惨めな" },
    ]
  },
  {
    id: 157, word: "sorry", number: "0072", category: "謝る・申し訳ない",
    sentences: [
      { ja: "それはごめん。", en: "{Sorry} about that.", note: "Sorry about ●: ●についてごめん" },
      { ja: "プリン食べてごめん。", en: "{Sorry} (that) I ate your pudding.", note: "Sorry (that) ●: ●してごめん" },
      { ja: "ミスしたことに対して謝るよ。", en: "{Sorry for} the mistake.", note: "Sorry for ●: ●に対してごめん" },
      { ja: "会社を辞めると聞いて残念だよ。", en: "I'm {sorry to} hear (that) you are leaving the company.", note: "be sorry to ●: ●して残念だ" },
      { ja: "ご愁傷様です。", en: "I'm {sorry for} your loss.", note: "I'm sorry for your loss: お悔やみ" },
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
