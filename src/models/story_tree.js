
class StoryTree {
  constructor(storyNode, textContentList) {
    this.storyNode = storyNode;
    this.textContentList = textContentList;
    this.currentTextIndex = 0;
  }
}

class StoryNode {
  constructor(id, textContentList, decisionKeyList = [], decisionTextList = []) {
    this.id = id;
    this.textContentList = textContentList;
    this.textIndex = 0;
    this.decisionKeyList = decisionKeyList;
    this.decisionTextList = decisionTextList;
  }   
}

export {
  StoryTree,
  StoryNode,
}

