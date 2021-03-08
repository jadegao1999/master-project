import { StoryNode } from '../models/story_tree';
import { textMap } from './text';

const storyNodeMap = {
  0: new StoryNode(
    '0', 
    //narrative and dialog number
    [textMap['0'], textMap['1'], textMap['2'], textMap['3'], textMap['4'], textMap['5']],
    //next passage number
    ['1', '2'], 
    //choice content
    ['YES', 'NO']),
  1: new StoryNode(
    '1', 
    [textMap['0'], textMap['1'], textMap['2'], textMap['3'], textMap['4'], textMap['5']], 
    ['3', '4'],
    ['left', 'right']),
  2: new StoryNode(
    '1', 
    [textMap['0'], textMap['1'], textMap['2'], textMap['3'], textMap['4'], textMap['5']], 
    ['4', '5'],
    ['left', 'right']),
  3: new StoryNode(
    '1', 
    [textMap['0'], textMap['1'], textMap['2'], textMap['3'], textMap['4'], textMap['5']], 
    ['6', '7'],
    ['left', 'right']),

  
}

export {
  storyNodeMap,
}
