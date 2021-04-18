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
    ['Walk to your mother\'s room'],
    '7PM, Dec 1st, 1941',
    'Your room',
    '#7B929A'),

  1: new StoryNode(
    '1', 
    [textMap['11'], textMap['12'], textMap['13'], textMap['14'], textMap['15'], textMap['16'], textMap['17'], textMap['18'], textMap['19']], 
    ['2', '3'],
    ['Take them off', 'Insist on wearing them'],
    '7PM, Dec 1st, 1941',
    'Your mother\'s room',
    '#B2B1B0'),

  2: new StoryNode(
    '2', 
    [textMap['20'], textMap['21'], textMap['22'], textMap['23'], textMap['24'], textMap['25'], textMap['26'], textMap['27'], textMap['28'], textMap['29'], textMap['30'], textMap['31'], textMap['32'], textMap['33'], textMap['34']], 
    ['5'],
    ['Arrive at Paramount'],
    '7PM, Dec 1st, 1941',
    'Your mother\'s room',
    '#B2B1B0'),
  
    //node 3 not finished
  3: new StoryNode(
    '3', 
    [textMap['0'], textMap['1'], textMap['2'], textMap['3'], textMap['4'], textMap['5']], 
    ['5'],
    ['Arrive at Paramount'],
    '8PM, Dec 1st, 1941',
    'Your mother\'s room',
    '#D8CBB8'),
  
  // 4: new StoryNode(
  //   '4', 
  //   [textMap['35'], textMap['36'], textMap['37']], 
  //   ['5', '6'],
  //   ['Walk inside', 'More context']),
  
  5: new StoryNode(
    '5', 
    [textMap['38'], textMap['39'], textMap['40'], textMap['41'], textMap['42'], textMap['43'], textMap['44'], textMap['45'], textMap['46'], textMap['47']], 
    ['7', '8'],
    ['Introduce yourself', 'Introduce Baoluo as your little sister'],
    '8PM, Dec 1st, 1941',
    'Paramount',
    '#B2B1B0'),
  //node 6 not finished
  // 6: new StoryNode(
  //   '4', 
  //   [textMap['35'], textMap['36'], textMap['37']], 
  //   ['5', '6'],
  //   ['Walk inside', 'More context']),
  7: new StoryNode(
    '7', 
    [textMap['48'], textMap['49'], textMap['50'], textMap['51'], textMap['52'], textMap['53'], textMap['54'], textMap['55'], textMap['56'], textMap['57'], textMap['58'], textMap['59']], 
    ['9'],
    ['...?!'],
    '8PM, Dec 1st, 1941',
    'Paramount',
    '#B2B1B0'),
  //node 8 not finished - introduce Baoluo
  8: new StoryNode(
    '8', 
    [textMap['35'], textMap['36'], textMap['37']], 
    ['9', '10'],
    ['Walk inside', 'More context']),

  9: new StoryNode(
    '9', 
    [textMap['60'], textMap['61'], textMap['62'], textMap['63'], textMap['64'], textMap['65'], textMap['66'], textMap['67'], textMap['68'], textMap['69']], 
    ['10', '11'],
    ['Take Liuyuan\'s hand and agree to dance.', 'Recommend he dances with Baolu instead.'],
    '8PM, Dec 1st, 1941',
    'Paramount',
    '#B2B1B0'),

  10: new StoryNode(
    '10', 
    [textMap['70'], textMap['71'], textMap['72'], textMap['73'], textMap['74'], textMap['75'], textMap['76'], textMap['77'], textMap['78'], textMap['79'], textMap['80']], 
    ['12'],
    ['Take a break.'],
    '9PM, Dec 1st, 1941',
    'Paramount',
    '#B2B1B0'),

// 11 not finished

  12: new StoryNode(
    '12', 
    [textMap['81'], textMap['82'], textMap['83'], textMap['84'], textMap['85'], textMap['86'], textMap['87'], textMap['88'], textMap['89'], textMap['0']], 
    ['13', '14'],
    ['Follow Liuyuan', 'Stay and apologize to Baoluo'],
    '9PM, Dec 1st, 1941',
    'Paramount',
    '#B2B1B0'),

  13: new StoryNode(
    '13', 
    [textMap['93'], textMap['94'], textMap['95'], textMap['96'], textMap['97'], textMap['98'], textMap['99']], 
    ['15'],
    ['You suddenly cannot breathe'],
    '10PM, Dec 1st, 1941',
    'Garden',
    '#C7C6B2'),

  15: new StoryNode(
    '15', 
    [textMap['100'], textMap['101'], textMap['102'], textMap['103'], textMap['104'], textMap['105'], textMap['106'], textMap['107']], 
    ['16', '17'],
    ['Agree with him', 'Confront him'],
    '10PM, Dec 1st, 1941',
    'Garden',
    '#C7C6B2'),

    // Starting from this point the order 16 is not right, only for presentation purpose
  16: new StoryNode(
    '16', 
    [textMap['108'], textMap['109'], textMap['110'], textMap['111'], textMap['112'], textMap['113'], textMap['114'], textMap['115'], textMap['116'], textMap['117'], textMap['118']], 
    ['18'],
    ['Enter end state'],
    '8AM, Dec 8th, 1941',
    'Rented house in Hong Kong',
    '#7B929A'),  


  18: new StoryNode(
  '18', 
  [textMap['119'], textMap['120'], textMap['121'], textMap['122'], textMap['123'], textMap['124'], textMap['125'], textMap['126'], textMap['127'], textMap['128']], 
  ['Enter end state'],
  '8AM, Dec 8th, 1941',
  'Jiang\'s house in Shanghai',
  '#7B929A'),  
  
}


export {
  storyNodeMap,
}
