// All text content including dialog and narrative.
import { Dialog, Narrative } from "../models/text_content";

const textList = [
  // prolog
  new Narrative('0', 'Tonight, you and your younger sister, ${Baoluo}, are going on a blind date at Paramount, the biggest nightclub in Shanghai in 1940. The party will start in an hour.'),
  new Narrative('1', '<<< Click on the cheongsam on the left to wear it on.'),
  new Narrative('2', 'You pick up the old cheongsam (a traditional Chinese dress) you just ironed and wear it on.'),
  new Narrative('3', 'It suddenly reminds you that you wore it seven years ago, also on a blind date, where you met your unfaithful, violent ex-husband.'),
  new Narrative('4', 'Although it may be unlucky, it\'s the only formal wear you have left, and you have no budget for a new dress.')
  new Narrative('5', 'Maybe putting on your favourite pearl earrings will add some luck.')
  new Narrative('6', '<<< Click on the pearl earrings on the left to put them on.')
  new Dialog('7', '"Liusu, what are you doing?! "', null, 'door'),
  new Narrative('8', 'You hear your mother, Lady Bai, calling your name from the other side of the house.'),
  new Dialog('9', '"come over here and help your sister!" ', null, 'door'),
  new Narrative('10', 'What? They still need more help? Everyone in the house is in that room dressing up Baoluo, and they almost upturn the house!'),
  // button here: walk to your mother's room
  new Narrative('11', 'What a glittering beauty! You can hardly recognize Baoluo. And the delicate cheongsam and jewelry on her – for sure you haven\'t seen such luxuries in the decayed Bai family for years.'),
  new Dialog('12', '"Mom forced our sister-in-law to hand over the fine silk she just got as a birthday gift to make me this cheongsam..." ', null, 'baoluo'),
  new Narrative('13', 'Seeing you with a puzzled face, Baoluo explains,'),
  new Dialog('14', '"and she pawned her very own old furs to buy me these bracelets and rings..." ', null, 'baoluo'),
  new Narrative('15', 'No one ever cared about what you wear. You don\'t hate Baoluo, it\'s just two daughters in the same house, but one gets lots of attention, and the other gets cold silence, and sadly you are used to that.'),
  new Dialog('16', '"There is no time to talk nonsense to your sister now. Liusu, your sister needs a pair of good earrings. I remember you still have a pair of pearl ones."', null, 'old lady bai'),
  new Narrative('17', 'She ties a final piece of green jade around Baoluo\'s neck and turns to you.'),
  new Dialog('18', '"Oh, you are wearing them! See, I thought it\'s a good match for the color of Baoluo\'s cheongsum."', null, 'old lady bai'),
  new Narrative('19', 'Hah! But, those are your favorite ones, and you are wearing them NOW!'),
  // button here: Take them off and give them to Baoluo/Insist on wearing them yourslef
  new Dialog('20', '"Here."', null, 'liusu-green'),
  new Narrative('21', 'Hah! But, those are your favorite ones, and you are wearing them NOW!'),



];

const textMap = {};
for (let i = 0; i < textList.length; i++) {
  let id = i.toString();
  textMap[id] = textList[i];
}

export {
  textMap,
}
