
class StoryTree {
  constructor(storyNode, textContentList) {
    this.storyNode = storyNode;
    this.textContentList = textContentList;
    this.currentTextIndex = 0;
  }
}

class StoryNode {
  constructor(id, textContentList, decisionKeyList = [], decisionTextList = [], time, place) {
    this.id = id;
    this.textContentList = textContentList;
    this.textIndex = 0;
    this.decisionKeyList = decisionKeyList;
    this.decisionTextList = decisionTextList;
    this.time = time;
    this.place = place;
  }
}

export {
  StoryTree,
  StoryNode,
}

