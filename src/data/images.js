import baoluo_card from '../assets/images/baoluo_card.png';
import baoluo from '../assets/images/baoluo.png';
import door from '../assets/images/door.png';
import earrings from '../assets/images/earrings.png';
import green_dress from '../assets/images/green_dress.png';
import liusu_earrings from '../assets/images/liusu_earrings.png';
import liusu_green from '../assets/images/liusu_green.png';
import liusu_yellow from '../assets/images/liusu_yellow.png';
import yellow_dress from '../assets/images/yellow_dress.png';
import yiyuan_card from '../assets/images/yiyuan_card.png';
import old_lady_bai from '../assets/images/old_lady_bai.png';
import { Person, Item, InteractiveItem } from '../models/picture';

export const imagesMap = {
  baoluo_card: new Item('baoluo_card', 'baoluo profile card', baoluo_card),
  baoluo: new Person('baoluo', 'baoluo', baoluo),
  door: new Item('door', 'door', door),
  earrings: new Item('earrings', 'earringbox', earrings),
  green_dress: new InteractiveItem('green_dress', 'green_dress', green_dress),
  liusu_earrings: new InteractiveItem('liusu_earrings', 'liusu_earrings', liusu_earrings),
  liusu_green: new Person('liusu_green', 'liusu_green', liusu_green),
  liusu_yellow: new Person('liusu_yellow', 'liusu_yellow', liusu_yellow),
  yellow_dress: new Item('yellow_dress', 'yellow_dress', yellow_dress),
  yiyuan_card: new Item('yiyuan_card', 'yiyuan_card', yiyuan_card),
  old_lady_bai: new Item('old_lady_bai', 'old_lady_bai', old_lady_bai),
  

  
}
