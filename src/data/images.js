import baoluo_card from '../assets/images/baoluo_card.png';
import baoluo from '../assets/images/baoluo.png';
import baoluo_earrings from '../assets/images/baoluo_earrings.png';
import jiang_card from '../assets/images/jiang_card.png';
import door from '../assets/images/door.png';
import earrings from '../assets/images/earrings.png';
import green_dress from '../assets/images/green_dress.png';
import liusu_earrings from '../assets/images/liusu_earrings.png';
import liusu_green from '../assets/images/liusu_green.png';
import liusu_yellow from '../assets/images/liusu_yellow.png';
import yellow_dress from '../assets/images/yellow_dress.png';
import liuyuan from '../assets/images/liuyuan.png';
import old_lady_bai from '../assets/images/old_lady_bai.png';
import old_lady_bai_card from '../assets/images/old_lady_bai_card.png';
import sister_in_law from '../assets/images/sister_in_law.png';
import taxi from '../assets/images/taxi.png';
import box from '../assets/images/box.png';
import { Person, Item } from '../models/picture';

export const imagesMap = {
  baoluo_card: new Item('baoluo_card', 'baoluo profile card', baoluo_card),
  baoluo: new Person('baoluo', 'baoluo', baoluo),
  baoluo_earrings: new Person('baoluo_earrings', 'baoluo_earrings', baoluo_earrings), 
  jiang_card: new Item('jiang_card', 'jiang_card', jiang_card),
  door: new Item('door', 'door', door),
  earrings: new InteractiveItem('earrings', 'earringbox', earrings),
  green_dress: new InteractiveItem('green_dress', 'green_dress', green_dress),
  liusu_earrings: new Person('liusu_earrings', 'liusu_earrings', liusu_earrings),
  liusu_green: new Person('liusu_green', 'liusu_green', liusu_green),
  liusu_yellow: new Person('liusu_yellow', 'liusu_yellow', liusu_yellow),
  yellow_dress: new Item('yellow_dress', 'yellow_dress', yellow_dress),
  liuyuan: new Person('liuyuan', 'liuyuan', liuyuan);
  old_lady_bai: new Person('old_lady_bai', 'old_lady_bai', old_lady_bai),
  old_lady_bai_card: new Item('old_lady_bai_card', 'old_lady_bai_card', old_lady_bai_card),
  sister_in_law: new Person('sister_in_law', 'sister_in_law', sister_in_law),
  taxi: new Item('taxi', 'taxi', taxi),
  box: new Item('box', 'box', box),

  
  
}
