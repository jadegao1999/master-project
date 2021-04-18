// All text content including dialog and narrative.
import { Dialog, Narrative, Action } from "../models/text_content";

const textList = [
  // prolog
  new Narrative('0', 'Tonight, you and your younger sister, ${Baoluo}, are invited by your family friend, Mrs.Xu, to go on a blind date at Paramount, the biggest nightclub in Shanghai. The party will start in an hour.', ['baoluo_card'], [null, 'liusu_yellow']),
  // baoluo - baoluo card pops up on left
  new Action('1', '<<< Click on the cheongsam on the left to wear it on.', null, ['green_dress', 'liusu_yellow']),
  new Narrative('2', 'You pick up the old cheongsam (a traditional Chinese dress) you just ironed and wear it on.', null, ['yellow_dress', 'liusu_green']),
  new Narrative('3', 'It suddenly reminds you that you wore it seven years ago, also on a blind date, where you met your unfaithful, violent ex_husband.', null, [null, 'liusu_green']),
  new Narrative('4', 'Although it may be unlucky, it\'s the only formal wear you have left, and you have no budget for a new dress.'),
  new Narrative('5', 'Maybe putting on your favourite pearl earrings will add some luck.', null),
  new Action('6', '<<< Click on the pearl earrings on the left to put them on.', null, ['earrings', 'liusu_green']),
  new Dialog('7', '"Liusu, what are you doing?! "', null, 'left', ['door', 'liusu_earrings']),
  new Narrative('8', 'You hear your mother, Lady Bai, calling your name from the other side of the house.', null),
  new Dialog('9', '"come over here and help your sister!" ', null, 'left', ['door', 'liusu_earrings']),
  new Narrative('10', 'What? They still need more help? Everyone in the house is in that room dressing up Baoluo, and they almost upturn the house!'),
  // button here: walk to your mother's room (Icon – GiWalk (react icons – game icons))
  new Narrative('11', 'What a glittering beauty! You can hardly recognize Baoluo. And the delicate cheongsam and jewelry on her – for sure you haven\'t seen such luxuries in the decayed Bai family for years.', null, ['baoluo', 'liusu_earrings']),
  new Dialog('12', '"Mom forced our sister-in-law to hand over the fine silk she just got as a birthday gift to make me this cheongsam..." ', null, 'left', ['baoluo', 'liusu_earrings']),
  new Narrative('13', 'Seeing you with a puzzled face, Baoluo explains,'),
  new Dialog('14', '"and she pawned her very own old furs to buy me these bracelets and rings..." ', null, 'left', ['baoluo', 'liusu_earrings']),
  new Narrative('15', 'No one ever cared about what you wear. You don\'t hate Baoluo, it\'s just two daughters in the same house, but one gets lots of attention, and the other gets cold silence, and sadly you are used to that.'),
  new Dialog('16', '"There is no time to talk nonsense to your sister now. Liusu, your sister needs a pair of good earrings. I remember you still have a pair of pearl ones."', null, 'left', ['old_lady_bai', 'liusu_earrings']),
  new Narrative('17', 'She ties a final piece of green jade around Baoluo\'s neck and turns to you.'),
  new Dialog('18', '"Oh, you are wearing them! See, I thought it\'s a good match for the color of Baoluo\'s cheongsum."', null, 'left', ['old_lady_bai', 'liusu_earrings']),
  new Narrative('19', 'Hah! But, those are your favorite ones, and you are wearing them NOW!'),
  // button here: choice1 - take them off and give them to Baoluo
  new Dialog('20', '"Here."', null, 'right', ['baoluo','liusu_green']),
  new Narrative('21', 'You take off the earrings and hand them over to Baoluo.', null, ['baoluo_earrings', 'liusu_green']),
  new Dialog('22', '"Thanks Liusu! I told mom that this is your favorite pair, but she ..."', null, 'left', ['baoluo','liusu_green']),
  new Narrative('23', 'Baoluo seems sorry.', null),
  new Dialog('24', '"I\'m doing this for you!"', null, 'left', ['old_lady_bai', 'liusu_green']),
  new Narrative('25', 'Lady Bai interrupts again.', null),
  new Dialog('26', '"Mothers in Shanghai are pushing their daughters to the party. You have to stand out.  It\'s hard to find a perfect marriage candidate like Liuyuan."', null, 'left', ['old_lady_bai', 'liusu_green']),
  new Dialog('27', '"I heard that his family owns a successful business in London, and he is the ONLY SON!!"', null, 'left', ['old_lady_bai', 'liusu_green']),
  new Dialog('28', '"Aside from that..."', null, 'left', ['sister_in_law', 'liusu_green']),
  new Narrative('29', 'Your sister-in-laws on the side echo.', null),
  new Dialog('30', '"He is also young and unattached! If Baoluo can climb this high branch, our Bai family may be able to bring back the past glories.."', null, 'left', ['sister_in_law', 'liusu_green']),
  new Narrative('31', 'They go on and on about how ideal this Liuyuan is.', null),
  new Narrative('32', 'You have a feeling that tonight you are only invited because Baoluo needs a companion.', null),
  new Narrative('33', 'After all, who would take your remarriage seriously? And, is a remarriage that important to you?', null),
  new Narrative('34', 'At the appointed time, all family members cram into a taxi-cab.', null, ['taxi', 'liusu_green']),
// button here: choice2 - insist on wearing yourself
  // new Dialog('20', '"Here."', null, 'right', ['baoluo','liusu_green']),
  // new Narrative('21', 'You take off the earrings and hand them over to Baoluo.', null, ['baoluo_earrings', 'liusu_green']),
  // new Dialog('22', '"Thanks Liusu! I told mom that this is your favorite pair, but she ..."', null, 'left', ['baoluo','liusu_green']),
  // new Narrative('23', 'Baoluo seems sorry.', null),
  // new Dialog('24', '"I\'m doing this for you!"', null, 'left', ['old_lady_bai', 'liusu_green']),
  // new Narrative('25', 'Lady Bai interrupts again.', null),
  // new Dialog('26', '"Mothers in Shanghai are pushing their daughters to the party. You have to stand out.  It\'s hard to find a perfect marriage candidate like Liuyuan."', null, 'left', ['old_lady_bai', 'liusu_green']),
  // new Dialog('27', '"I heard that his family owns a successful business in London, and he is the ONLY SON!!"', null, 'left', ['old_lady_bai', 'liusu_green']),
  // new Dialog('28', '"Aside from that..."', null, 'left', ['sister_in_law', 'liusu_green']),
  // new Narrative('29', 'Your sister-in-laws on the side echo.', null),
  // new Dialog('30', '"He is also young and unattached! If Baoluo can climb this high branch, our Bai family may be able to bring back the past glories.."', null, 'left', ['sister_in_law', 'liusu_green']),
  // new Narrative('31', 'They go on and on about how ideal this Liuyuan is.', null),
  // new Narrative('32', 'You have a feeling that tonight you are only invited because Baoluo needs a companion.', null),
  // new Narrative('33', 'After all, who would take your remarriage seriously? And, is a remarriage that important to you?', null),
  // new Narrative('34', 'At the appointed time, all family members cram into a taxi-cab.', null, ['taxi', 'liusu_green']),
  //button here: Arrive at Paramount (GiCarWheel)
  new Narrative('35', '0'),
  new Narrative('36', '0', null),
  new Dialog('37', '0', null),
  // button here: Walk inside
  new Narrative('38', 'The family is immediately led inside. In the center of the lobby, a group of women surround a young man who is smiling gently and talking. It’s as if being surrounded is a thing that relaxes him.', null, ['baoluo', 'liusu_green']),
  new Dialog('39', '"That must be Liuyuan!"', null, 'left', ['baoluo', 'liusu_green']),
  new Narrative('40', 'Baoluo holds your hand and whispers beside your ear. You can tell by one peak that he is good at dealing with women.', null),
  new Narrative('41', 'Lady Bai pushes you and Baoluo into that circle around Liuyuan.', null, ['liuyuan', 'liusu_green'] ),
  new Narrative('42', 'Up close, Liuyuan cannot be called handsome, but he has a unique quality that is different from the Shanghai men you know.', null),
  new Narrative('43', 'He has brown hair and a tall body, with wide shoulders and long legs.', null),
  new Narrative('44', 'You don\'t believe in love at first sight - especially after the divorce. But at this moment, your heart races again.', null),
  new Dialog('45', '"Hi."', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('46', 'Liuyuan smiles and nods to both of you. His eyes linger on you for a while.', null),
  new Narrative('47', 'You share quick eye contact with Baoluo, finding she\'s blushing and can hardly speak. This is why Lady Bai forced you to be here - Baoluo is always shy in public.', null, ['baoluo', 'liusu_green']),
  //button here: Introduce yourself to attract his attention
  new Dialog('48', '"Hi, I am Liusu. Nice to meet you. Welcome back to Shanghai!"', null, 'right', ['liuyuan', 'liusu_green']),
  new Narrative('49', 'You pause, not knowing what else to say. Seeing you ignoring her, Baoluo unhappily pulls the corner of your dress.', null),
  new Dialog('50', '“Shanghai is now different indeed."', null, 'left', ['liuyuan', 'liusu_green']),
  new Dialog('51', '“I remember when I was a little boy, about 25 years ago, there was no ballroom at all."', null, 'left', ['liuyuan', 'liusu_green']),
  new Dialog('52', '“Of course, there was also no woman as charming as either of you."', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('53', 'He gives you a deep look and sips his wine.', null, ['liuyuan', 'liusu_green']),
  new Narrative('54', 'A man like him is probably very picky. You can\'t interpret this signal. Is he implying something? Or does this mean Baoluo will have a chance?.', null),
  new Dialog('55', '"So... you grew up in Shanghai?"', null, 'left', ['baoluo', 'liusu_green']),
  new Narrative('56', 'You are shocked that Baoluo has the courage to talk to Liuyuan.', null, ['liuyuan', 'liusu_green']),
  new Dialog('57', '"I stayed in Shanghai until I was eight, and then I followed my mother to London to reunite with my father"', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('58', 'The speaker inside Paramount rings loudly in a sudden:', null, ['liuyuan', 'liusu_green']),
  new Dialog('59', '"Ladies and gentlemen, are you ready? Our first dance is about to begin!"', null, 'left', ['liuyuan', 'liusu_green']),
  //button here: ...?!
  new Narrative('60', 'Wait, first dance? Are you going to dance tonight?', null, ['baoluo', 'liusu_green']),
  new Narrative('61', 'You also find the same shock on Baoluo\'s face. ', null),
  new Narrative('62', 'In traditional Shanghai at this time, decent ladies aren\'t taught to dance. Only trendy teenagers who practice secretly.', null),
  new Narrative('63', 'Unfortunately, Baolu is not one of them - she can\'t dance! NOT AT ALL.', null),
  new Narrative('64', 'But you are different. Your ex-husband likes to go to beautiful dance halls like this, and he is a good dance teacher.', null),
  new Narrative('65', 'God knows how much you miss the days of spinning on the dance floor!', null),
  new Dialog('66', '"Liusu, you know how to dance, right? I can see that. How about the first dance with me?"', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('67', 'He approaches you and bows.', null),
  new Narrative('68', 'Baoluo\'s face turns pale. Your brothers stare at you. Everyone is shocked.', null),
  new Narrative('69', 'For so many years, you have been looked down upon by the Bai family; this may be a good opportunity to fight back. But you also know that it\'s not a good idea to show-off here.', null),
  //buttons here: dance with Liuyuan
  new Narrative('70', 'Under people\'s shocked eyes, you and Liuyuan slip onto the dance floor.', null, ['liuyuan', 'liusu_green']),
  new Dialog('71', '"I didn\'t expect you to dance so well."', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('72', 'Liuyuan\'s voice whispers into your ears, like the sound of a low cello', null),
  new Dialog('73', '"And I have to admit, I love making fun of people - I didn\'t know you would accept my invitation. You are really special."', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('74', 'You can sense the heat passing through his hands, and you can even feel his heartbeat, combined with yours.', null),
  new Narrative('75', 'You haven\'t felt so good for years - people are watching you, talking about you, admiring you. Who said your life is over? Even Liuyuan, who was the perfect match for Baoluo, favors you more.', null),
  new Narrative('76', 'Several songs have played, but to you, soon the music ends - you never know the time topass so quickly.', null),
  new Dialog('77', '“You know, we should dance all night. You are born for the dance floor!"', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('78', 'He leaves a gentle kiss on your hand and winks.', null),
  new Dialog('79', '"But now, you must be tired, I\'ll go and get you some drinks."', 'left', null),
  new Narrative('80', 'The warmth of his lips left on your hand takes your breath away, blanking your mind for a second.', null, ['liuyuan', 'liusu_green']),
  //button here: take a break
  new Narrative('81', 'As soon as you sit down for some rest, the old Lady Bai and your sisters-in-law come over with Baoluo crying.', null, ['old_lady_bai', 'liusu_green']),
  new Dialog('82', '"I really don\'t understand what you are doing! Liuyuan is not the match for you!"', null, 'left', ['old_lady_bai', 'liusu_green']),
  new Dialog('83', '"Have you ever thought about this family?"', null, 'left', ['old_lady_bai', 'liusu_green']),
  new Dialog('84', '"What are we here for? Are we here to dance?"', null, 'left', ['sister_in_law', 'liusu_green']),
  new Narrative('85', 'Your sisters-in-law interject', null),
  new Dialog('86', '"This is really inappropriate! You are a divorced woman who returns to her mother\'s family, but you let your sister wait while you dance in public with Liuyuan?"', null, 'left', ['sister_in_law', 'liusu_green']),
  new Narrative('87', 'They continue to babble and don\'t even give you any chance to talk.', null),
  new Dialog('88', '"If you run into a suitable man, it would be nice for us all. But when you were dancing, there was a Mr. Jiang who stated directly that you are outrageous!"', null, 'left', ['sister_in_law', 'liusu_green']),
  new Dialog('89', '"Who dares to marry you? You won\'t stay in our house forever, will you?"', null, 'left', ['sister_in_law', 'liusu_green']),
  new Narrative('90', 'Thank God they finally stop when Liuyuan approaches. Liuyuan hands you a glass of wine and turns to your family.', null, ['liuyuan', 'liusu_green']),
  new Dialog('91', '"Do you mind if I borrow her for a while?"', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('92', 'Such a LIFESAVER! It\'s perfect timing to sneak away, but you do feel sorry for Baoluo.', null),
  //button here: follow liuyuan
  new Narrative('93', 'You pass through the people who are networking and enter the garden. As Liuyuan walks, you slowly follow. ', null, ['liuyuan', 'liusu_green']),
  new Dialog('94', 'You know, when I met you in the hallway, I was thinking, If I could get you away from your family, you might be more at ease."', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('95', 'He seems to be more sincere when the two of you are alone, and he is so clever to understand what happened. ', null),
  new Dialog('96', '"I grew up in England, so I might think differently, I hope I don’t offend you."', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('97', 'He pauses shortly.', null),
  new Dialog('98', '"But I don\'t want to be the bad guy who hurts you in the end. I know Chinese people value marriage, and maybe you need one right now, just like all other girls I\'ve talked to in this party."', null, 'left', ['liuyuan', 'liusu_green']),
  new Dialog('99', '"I don\'t want to marry anyone for the time being. Maybe one day I will, but certainly not now, not in the near future."', null, 'left', ['liuyuan', 'liusu_green']),
  //button here: you cannot breathe
  new Narrative('100', 'Seeing you have been silent, he goes on. ', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('101', 'I do business in Hong Kong a lot, and I think you would like it there too. We can go dancing, go to  watch operas, go shopping...', null, 'left'),
  new Narrative('102', 'Bullshit! You feel that you are being played by him in his hands. Clearly, he wants you, but he doesn\'t want to marry you.', null),
  new Narrative('103', 'His innocence is fake - it\'s just that he doesn\'t want to take that responsibility. Without a legal marriage, you will never have long-term security. ', null),
  new Narrative('104', 'But on the other hand, so what? He likes you, and you may never meet another man like him again. ', null),
  new Narrative('105', 'Even without marriage, you can stay away from the Bai family and, more importantly, finally live for yourself. ', null),
  new Dialog('106', '"Such a beautiful night is not suitable for unhappy things. Maybe you think it is too sudden, but I really like you. Give me time, and I\'ll make you happy."', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('107', 'He stares at you, waiting for your answer.', null),
  //button here: unfinished - agree

  
  //War Hong Kong
  new Narrative('108', 'You are awakened by the sound of a huge cannon, and you can even feel the crack of a screaming bomb slapping you hard in the face.', null, ['liuyuan', 'liusu_green']),
  new Dialog('109', '"War is on, war is on!"', null, 'left', ['door', 'liusu_green']),
  new Narrative('110', 'With the sound of closing the door, you see the maid rushing into your room yelling.', null),
  new Dialog('111', '"The Japanese are here to bomb Hong Kong!"', null, 'left', ['door', 'liusu_green']),
  new Narrative('112', 'But, but there is even no food at home! ', null),
  new Narrative('113', 'In the following days, you are exhausted and weak, sharing the last cookies with the maid. Just as you are thinking about the end of your life, you hear a knock on the door.', null),
  new Dialog('114', '"Go get your things together, hurry!"', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('115', 'The two of you rush around the house and stuff your bags, and lie down on the truck Liuyuan gets.', null),
  new Dialog('116', '"My ship wasn\'t able to leave"', null, 'left', ['liuyuan', 'liusu_green']),
  new Dialog('117', '"Now I am trapped here."', null, 'left', ['liuyuan', 'liusu_green']),
  new Narrative('118', 'Along with other first class passengers on the ship, you stay in the Repulse Bay Hotel for a couple of days. Guests are offered just enough food to sustain.', null),

  //War Shanghai
  new Narrative('119', 'One day, Jiang comes home from work.', null, ['jiang', 'liusu_green']),
  new Dialog('120', '"The Japanese army has occupied Shanghai, and now the customs office is under Japan\'s control. I am really worried."', null, 'left', ['jiang', 'liusu_green']),
  new Narrative('121', 'Jiang\'s worry is not unreasonable. ', null),
  new Narrative('122', ' Shanghai is now completely silent, factories have closed down, waterways have been cut off, and supplies are scarce. The living expenses are way higher than before.', null),
  new Narrative('123', 'Jiang flips through his wallet and licks his lips,', null),
  new Dialog('124', '"this month\'s salary was not paid. Can you ask Bai family to lend us some money? We can\'t let the kids starve."', null, 'left', ['jiang', 'liusu_green']),
  new Dialog('125', '"Ask them yourself."', null, 'right', ['jiang', 'liusu_green']),
  new Narrative('126', ' You laugh ironically.', null),
  new Narrative('127', 'There is no doubt that the Bai family rejects him immediately -- they can\'t take care of it themselves.', null),
  new Narrative('128', 'Liuyuan didn\'t pick Baoluo at last, and you hear that he stays in England after his return and never comes back.', null),





];

const textMap = {};
for (let i = 0; i < textList.length; i++) {
  let id = i.toString();
  textMap[id] = textList[i];
}

export {
  textMap,
}
