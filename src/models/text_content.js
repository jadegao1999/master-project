import React from 'react';

class TextContent {
  constructor(id, text, onClickActionList = [], persons = []) {
    this.id = id;
    // words wrapped with ${} will be converted to a clickable button and
    // binds with the callback function onClickList[1].
    // For example, ${show card} binds to onClickList[0].
    this.text = text;
    this.onClickActionList = onClickActionList;

    this.persons = persons;
  }

  renderText() {
    var res = this.text.slice();
    var matches = this.text.match(/\${.*}/);
    for (let i = 0; i < matches.length; i++) {
      var word = matches[i].slice(1)
      res.replace(matches[0], <span></span>)
    }
  }
}

class Narrative extends TextContent {
  constructor(id, text, onClickActionList = [], persons = []) {
    super(id, text, onClickActionList, persons);
  }
}

class Dialog extends TextContent {
  constructor(id, text, onClickActionList = [], speakerId = null, persons = []) {
    super(id, text, onClickActionList, persons);
    this.speakerId = speakerId;
  }
}

export {
  TextContent,
  Narrative,
  Dialog,
}