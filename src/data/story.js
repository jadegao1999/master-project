import { StoryNode } from '../models/story_tree';
import { textMap } from './text';

const storyNodeMap = {
  0: new StoryNode(
    '0', 
    //narrative and dialog number
    [textMap['0'], textMap['1'], textMap['2'], textMap['3'], textMap['4'], textMap['5'], textMap['6'], textMap['7'], textMap['8'], textMap['9'], textMap['10']],
    ['1'],  // next story node number
    ['Walk to your mother\'s room'],  // choices
    '1988',  // year
    'Shanghai',  // location
    '#aaa'),  // background color
  1: new StoryNode(
    '1', 
    [textMap['11'], textMap['12'], textMap['13'], textMap['14'], textMap['15'], textMap['16'], textMap['17'], textMap['18'], textMap['19']], 
    ['2', '3'],
    ['Take them off', 'Insist on wearing them'],
    '1888',
    'Nanjing',
    '#ccc'),
  2: new StoryNode(
    '2', 
    [textMap['20'], textMap['21'], textMap['22'], textMap['23'], textMap['24'], textMap['25'], textMap['26'], textMap['27'], textMap['28'], textMap['29'], textMap['30'], textMap['31'], textMap['32'], textMap['33'], textMap['34']], 
    ['4'],
    ['Arrive at Paramount']),
  //node 3 not finished
  3: new StoryNode(
    '3', 
    [textMap['0'], textMap['1'], textMap['2'], textMap['3'], textMap['4'], textMap['5']], 
    ['6', '7'],
    ['left', 'right']),
  4: new StoryNode(
    '4', 
    [textMap['35'], textMap['36'], textMap['37']], 
    ['5', '6'],
    ['Walk inside', 'More context']),
  5: new StoryNode(
    '5', 
    [textMap['38'], textMap['39'], textMap['40'], textMap['41'], textMap['42'], textMap['43'], textMap['44'], textMap['45'], textMap['46'], textMap['47']], 
    ['7', '8'],
    ['Introduce yourself', 'Introduce Baoluo as your little sister']),
  //node 6 not finished
  6: new StoryNode(
    '4', 
    [textMap['35'], textMap['36'], textMap['37']], 
    ['5', '6'],
    ['Walk inside', 'More context']),
  7: new StoryNode(
    '7', 
    [textMap['48'], textMap['49'], textMap['50'], textMap['51'], textMap['52'], textMap['53'], textMap['54'], textMap['55'], textMap['56'], textMap['57'], textMap['58'], textMap['59']], 
    ['9'],
    ['...?!']),
  //node 8 not finished
  8: new StoryNode(
    '8', 
    [textMap['35'], textMap['36'], textMap['37']], 
    ['9', '10'],
    ['Walk inside', 'More context']),
  9: new StoryNode(
    '9', 
    [textMap['60'], textMap['61'], textMap['62'], textMap['63'], textMap['64'], textMap['65'], textMap['66'], textMap['67'], textMap['68'], textMap['69']], 
    ['10', '11'],
    ['Take Liuyuan\'s hand and agree to dance.', 'Recommend he dances with Baolu instead.']),


  
}

export {
  storyNodeMap,
}
