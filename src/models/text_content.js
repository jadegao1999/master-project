

class TextContent {
  constructor(id, text, onClickActionList = []) {
    this.id = id;
    // words wrapped with $1{} will be converted to a clickable button and
    // binds with the callback function onClickList[1].
    // For example, $0{show card} binds to onClickList[0].
    this.text = text;
    this.onClickActionList = onClickActionList;
  }
}

class Narrative extends TextContent {
  constructor(id, text, onClickActionList = []) {
    super(id, text, onClickActionList);
  }
}

class Dialog extends TextContent {
  constructor(id, text, onClickActionList = [], speakerId = null) {
    super(id, text, onClickActionList);
    this.speakerId = speakerId;
  }
}

export {
  TextContent,
  Narrative,
  Dialog,
}