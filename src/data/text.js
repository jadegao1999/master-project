// All text content including dialog and narrative.
import { Dialog, Narrative } from "../models/text_content";

const textList = [
  new Narrative('0', 'Tonight, you and your younger sister, Baoluo, are going to a blind date at Paramount, the biggest night club in 1940, Shanghai. '),
  new Narrative('1', 'The party will start in an hour. You pick up the old cheongsam(a traditional Chinese dress) you just ironed, stand in front of the mirror and imagine wearing it.'),
  new Narrative('2', 'It suddenly reminds you that you wore it seven years ago, also on a blind date, where you met your unfaithful, violent ex-husband.'),
  new Narrative('3', 'Although it may be unlucky, it\'s the only formal wear you have left and you have no budget for a new dress.'),
  new Dialog('4', '"Liusu, what are you doing?! "', null, 'liusu'),
  new Narrative('6', 'You hear your mother, Lady Bai, calling your name from the other side of the house, "come over here and help your sister!" '),
];

const textMap = {};
for (let i = 0; i < textList.length; i++) {
  let id = i.toString();
  textMap[id] = textList[i];
}

export {
  textMap,
}