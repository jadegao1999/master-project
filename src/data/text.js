// All text content including dialog and narrative.
import { Dialog, Narrative } from "../models/text_content";

const textList = [
  new Narrative('0', 'Tonight, you and your younger sister, Baoluo, are going on a blind date at Paramount, the biggest nightclub in Shanghai in 1940. The party will start in an hour.'),
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
  new Narrative('11', 'What a glittering beauty! You can hardly recognize Baoluo. And the delicate cheongsam and jewelry on her – for sure you haven\'t seen such luxuries in the decayed Bai family for years.'),
];

const textMap = {};
for (let i = 0; i < textList.length; i++) {
  let id = i.toString();
  textMap[id] = textList[i];
}

export {
  textMap,
}
