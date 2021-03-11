import React from 'react';

class TextContent {
  constructor(id, text, onClickImageList = [], images = []) {
    this.id = id;
    // words wrapped with ${} will be converted to a clickable button and
    // binds with the callback function onClickList[1].
    // For example, ${show card} binds to onClickList[0].
    this.text = text;
    this.onClickImageList = onClickImageList;

    this.images = images;
  }
}

class Narrative extends TextContent {
  constructor(id, text, onClickImageList = [], images = []) {
    super(id, text, onClickImageList, images);
  }
}

class Dialog extends TextContent {
  constructor(id, text, onClickImageList = [], speakerId = null, images = []) {
    super(id, text, onClickImageList, images);
    this.speakerId = speakerId;
  }
}

class Action extends TextContent {
  constructor(id, text, onClickImageList = [], images = []) {
    super(id, text, onClickImageList, images);
  }
}

export {
  TextContent,
  Narrative,
  Dialog,
  Action,
}