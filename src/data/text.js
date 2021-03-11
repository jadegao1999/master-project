// All text content including dialog and narrative.
import { Dialog, Narrative, Action } from "../models/text_content";

const textList = [
  // prolog
  new Narrative('0', 'Tonight, you and your younger sister, ${Baoluo}, are going on a blind date at Paramount, the biggest nightclub in Shanghai in 1940. The party will start in an hour.', ['baoluo_card'], [null, 'liusu_yellow']),
  // baoluo - baoluo card pops up on left
  new Action('1', '<<< Click on the cheongsam on the left to wear it on.', null, ['green_dress', 'liusu_yellow']),
  new Narrative('2', 'You pick up the old cheongsam (a traditional Chinese dress) you just ironed and wear it on.', null, ['yellow_dress', 'liusu_green']),
  new Narrative('3', 'It suddenly reminds you that you wore it seven years ago, also on a blind date, where you met your unfaithful, violent ex_husband.', null, [null, 'liusu_green']),
  new Narrative('4', 'Although it may be unlucky, it\'s the only formal wear you have left, and you have no budget for a new dress.'),
  new Narrative('5', 'Maybe putting on your favourite pearl earrings will add some luck.', null),
  new Action('6', '<<< Click on the pearl earrings on the left to put them on.', null, ['earrings', 'liusu_green']),
  new Dialog('7', '"Liusu, what are you doing?! "', null, 'door', ['door', 'liusu_earrings']),
  new Narrative('8', 'You hear your mother, Lady Bai, calling your name from the other side of the house.', null),
  new Dialog('9', '"come over here and help your sister!" ', null, 'door'),
  new Narrative('10', 'What? They still need more help? Everyone in the house is in that room dressing up Baoluo, and they almost upturn the house!'),
  // button here: walk to your mother's room (Icon – GiWalk (react icons – game icons))
  new Narrative('11', 'What a glittering beauty! You can hardly recognize Baoluo. And the delicate cheongsam and jewelry on her – for sure you haven\'t seen such luxuries in the decayed Bai family for years.', null, ['baoluo', 'liusu_earrings']),
  new Dialog('12', '"Mom forced our sister-in-law to hand over the fine silk she just got as a birthday gift to make me this cheongsam..." ', null, 'baoluo'),
  new Narrative('13', 'Seeing you with a puzzled face, Baoluo explains,'),
  new Dialog('14', '"and she pawned her very own old furs to buy me these bracelets and rings..." ', null, 'baoluo'),
  new Narrative('15', 'No one ever cared about what you wear. You don\'t hate Baoluo, it\'s just two daughters in the same house, but one gets lots of attention, and the other gets cold silence, and sadly you are used to that.'),
  new Dialog('16', '"There is no time to talk nonsense to your sister now. Liusu, your sister needs a pair of good earrings. I remember you still have a pair of pearl ones."', null, 'old lady bai', ['old_lady_bai', 'liusu_earrings']),
  new Narrative('17', 'She ties a final piece of green jade around Baoluo\'s neck and turns to you.'),
  new Dialog('18', '"Oh, you are wearing them! See, I thought it\'s a good match for the color of Baoluo\'s cheongsum."', null, 'old_lady_bai'),
  new Narrative('19', 'Hah! But, those are your favorite ones, and you are wearing them NOW!'),
  // button here: choice1 - take them off and give them to Baoluo
  new Dialog('20', '"Here."', null, 'liusu', ['baoluo','liusu_green']),
  new Narrative('21', 'You take off the earrings and hand them over to Baoluo.', null, ['baoluo_earrings', 'liusu_green']),
  new Dialog('22', '"Thanks Liusu! I told mom that this is your favorite pair, but she ..."', null, 'baoluo_earrings'),
  new Narrative('23', 'Baoluo seems sorry.', null),
  new Dialog('24', '"I\'m doing this for you!"', null, 'old_aldy_bai', ['old_lady_bai', 'liusu_green']),
  new Narrative('25', 'Lady Bai interrupts again.', null),
  new Dialog('26', '"Mothers in Shanghai are pushing their daughters to the party. You have to stand out.  It\'s hard to find a perfect marriage candidate like Liuyuan."', null, 'old_aldy_bai'),
  new Dialog('27', '"I heard that his family owns a successful business in London, and he is the ONLY SON!!"', null, 'old_lady_bai'),
  new Dialog('28', '"Aside from that..."', null, 'sister_in_law', ['sister_in_law', 'liusu_green']),
  new Narrative('29', 'Your sister-in-laws on the side echo.', null),
  new Dialog('30', '"He is also young and unattached! If Baoluo can climb this high branch, our Bai family may be able to bring back the past glories.."', null, 'sister_in_law'),
  new Narrative('31', 'They go on and on about how ideal this Liuyuan is.', null),
  new Narrative('32', 'You have a feeling that tonight you are only invited because Baoluo needs a companion.', null),
  new Narrative('33', 'After all, who would take your remarriage seriously? And, is a remarriage that important to you?', null),
  new Narrative('34', 'At the appointed time, all family members cram into a taxi-cab.', null, ['taxi', 'liusu_green']),
  //button here: Arrive at Paramount (GiCarWheel)
  new Narrative('35', 'As the largest ballroom in Shanghai, Paramount shines with dazzling lights under the night sky. It\'s been too long since the last time you\'ve to a place like this. ', null, ['baoluo', 'liusu_earrings']),
  new Narrative('36', 'As you are stunned by its glory, you hear a voice inside your mind:', null),
  new Dialog('37', '"This could be an important night that will change your life. You might want to think twice before you make a decision. Would you like to learn more before you walk into that door?"', null),
  //button here: Walk inside
  new Narrative('38', 'The family is immediately led inside. In the center of the lobby, a group of women surround a young man who is smiling gently and talking. It’s as if being surrounded is a thing that relaxes him.', null, ['baoluo', 'liusu_green']),
  new Dialog('39', '"That must be Liuyuan!"', null, 'baoluo'),
  new Narrative('40', 'Baoluo holds your hand and whispers beside your ear. You can tell by one peak that he is good at dealing with women.', null),
  new Narrative('41', 'Lady Bai pushes you and Baoluo into that circle around Liuyuan.', null, ['liuyuan', 'liusu_green'] ),
  new Narrative('42', 'Up close, Liuyuan cannot be called handsome, but he has a unique quality that is different from the Shanghai men you know.', null),
  new Narrative('43', 'He has brown hair and a tall body, with wide shoulders and long legs.', null),
  new Narrative('44', 'You don\'t believe in love at first sight - especially after the divorce. But at this moment, your heart races again.', null),
  new Dialog('45', '"Hi."', null, 'liuyuan'),
  new Narrative('46', 'Liuyuan smiles and nods to both of you. His eyes linger on you for a while.', null),
  new Narrative('47', 'You share quick eye contact with Baoluo, finding she\'s blushing and can hardly speak. This is why Lady Bai forced you to be here - Baoluo is always shy in public.', null, ['baoluo', 'liusu_green']),
  //button here: Introduce yourself to attract his attention
  new Dialog('48', '"Hi, I am Liusu. Nice to meet you. Welcome back to Shanghai!"', null, 'liusu_green', ['liuyuan', 'liusu_green']),
  new Narrative('49', 'You pause, not knowing what else to say. Seeing you ignoring her, Baoluo unhappily pulls the corner of your dress.', null),
  new Dialog('50', '“Shanghai is now different indeed."', null, 'liuyuan', ['liuyuan', 'liusu_green']),
  new Dialog('51', '“I remember when I was a little boy, about 25 years ago, there was no ballroom at all."', null, 'liuyuan'),
  new Dialog('52', '“Of course, there was also no woman as charming as either of you."', null, 'liuyuan'),
  new Narrative('53', 'He gives you a deep look and sips his wine.', null, ['liuyuan', 'liusu_green']),
  new Narrative('54', 'A man like him is probably very picky. You can\'t interpret this signal. Is he implying something? Or does this mean Baoluo will have a chance?.', null),
  new Dialog('55', '"So... you grew up in Shanghai?"', null, 'baoluo',['baoluo', 'liusu_green']),
  new Narrative('56', 'You are shocked that Baoluo has the courage to talk to Liuyuan.', null, ['liuyuan', 'liusu_green']),
  new Dialog('57', '"I stayed in Shanghai until I was eight, and then I followed my mother to London to reunite with my father"', null, 'liuyuan'),
  new Narrative('58', 'The speaker inside Paramount rings loudly in a sudden:', null, ['liuyuan', 'liusu_green']),
  new Dialog('59', '"Ladies and gentlemen, are you ready? Our first dance is about to begin!"', null, 'liuyuan'),
  //button here: ...?!
  new Narrative('60', 'Wait, first dance? Are you going to dance tonight?', null, ['baoluo', 'liusu_green']),
  new Narrative('61', 'You also find the same shock on Baoluo\'s face. ', null),
  new Narrative('62', 'In traditional Shanghai at this time, decent ladies aren\'t taught to dance. Only trendy teenagers who practice secretly.', null),
  new Narrative('63', 'Unfortunately, Baolu is not one of them - she can\'t dance! NOT AT ALL.', null),
  new Narrative('64', 'But you are different. Your ex-husband likes to go to beautiful dance halls like this, and he is a good dance teacher.', null),
  new Narrative('65', 'God knows how much you miss the days of spinning on the dance floor!', null),
  new Dialog('66', '"Liusu, you know how to dance, right? I can see that. How about the first dance with me?"', null, 'liuyuan', ['liuyuan', 'liusu_green']),
  new Narrative('67', 'He approaches you and bows.', null),
  new Narrative('68', 'Baoluo\'s face turns pale. Your brothers stare at you. Everyone is shocked.', null),
  new Narrative('69', 'For so many years, you have been looked down upon by the Bai family; this may be a good opportunity to fight back. But you also know that it\'s not a good idea to show-off here.', null),
  //buttons here: 







  


  


  
  
  
  // choice2 - insist on wearing them yourslef



];

const textMap = {};
for (let i = 0; i < textList.length; i++) {
  let id = i.toString();
  textMap[id] = textList[i];
}

export {
  textMap,
}
