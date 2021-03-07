import liusu from '../assets/images/liusu.png';
import door from '../assets/images/door.png';
import { Person, Item } from '../models/picture';

export const imagesMap = {
  liusu: new Person('liusu', 'liusu', liusu),
  door: new Item('door', 'door', door),
}