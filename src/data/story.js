import { StoryNode } from '../models/story_tree';
import { textMap } from './text';

const storyNodeMap = {
  0: new StoryNode(
    '0', 
    //narrative and dialog number
    [textMap['0'], textMap['1'], textMap['2'], textMap['3'], textMap['4'], textMap['5'], textMap['6'], textMap['7'], textMap['8'], textMap['9'], textMap['10']],
    //next node number
    ['1'], 
    //choice content
    ['Walk to your mother\'s room']),
  1: new StoryNode(
    '1', 
    [textMap['11'], textMap['12'], textMap['13'], textMap['14'], textMap['15'], textMap['16'], textMap['17'], textMap['18'], textMap['19']], 
    ['2', '3'],
    ['Take them off', 'Insist on wearing them']),
  2: new StoryNode(
    '2', 
    [textMap['20'], textMap['21'], textMap['22'], textMap['23'], textMap['24'], textMap['25'], textMap['26'], textMap['27'], textMap['28'], textMap['29'], textMap['30'], textMap['31'], textMap['32'], textMap['33'], textMap['34']], 
    ['4'],
    ['Arrive at Paramount']),
  3: new StoryNode(
    '4', 
    [textMap['0'], textMap['1'], textMap['2'], textMap['3'], textMap['4'], textMap['5']], 
    ['6', '7'],
    ['left', 'right']),

  
}

export {
  storyNodeMap,
}
