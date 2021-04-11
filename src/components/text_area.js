import React, { Component } from "react";
import reactStringReplace from 'react-string-replace';
import ScrollSnap from 'scroll-snap'
import { TextContent, Dialog, Narrative, Action } from '../models/text_content';


import './text_area.css';

function callback() {
  console.log('snapped')
}

export default class TextArea extends Component {
  container = React.createRef();
  textEndRef = React.createRef();

  bindScrollSnap() {
    const element = this.container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '100%',
    })

    snapElement.bind(callback)
  }

  componentDidMount() {
    // this.bindScrollSnap()
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.textEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  formatText(textContent, callback) {
    if (textContent.onClickImageList == null || textContent.onClickImageList.length == null) {
      return textContent.text;
    }

    const text = textContent.text;
    const onClickImageList = textContent.onClickImageList;

    var res = text.slice();
    var matches = text.match(/\${.*}/g);
    if (matches == null) {
      return textContent.text;
    }
    for (let i = 0; i < matches.length; i++) {
      var word = matches[i].slice(2, -1);
      var imageName = onClickImageList[i];
      res = reactStringReplace(res, matches[i], (match, i) => 
          (<span key={i} onClick={(e) => { e.stopPropagation(); callback(imageName); }}>{word}</span>))
    }
    return res;
  }

  renderTextList() {
    const { textContentList, callback, leftImage, rightImage } = this.props;
    const res = [];
    
    for (let i = textContentList.length - 1; i >= 0; i--) {
      let textContent = textContentList[i];
      let className = 'text-item';
      let pClassName = '';
      if (textContent instanceof Narrative) {
        className += ' narrative-text-item';
      } else if (textContent instanceof Dialog) {
        let isLeft = this.isDialogOnLeft(textContent);
        console.log(`No: ${i}, isDialogLeft: ${isLeft}`);
        className += ' dialog-text-item';
        className += isLeft ? 
            ' bubble-left' : 
            ' bubble-right';
        className += isLeft ?
            ` ${leftImage.id}` :
            ` ${rightImage.id}`;
      } else if (textContent instanceof Action) {
        className += ' action-text-item';
      }

      if (i == textContentList.length - 1) {
        res.push(
            <div key={i} className={className + " animation"}>
              <p className={pClassName}>{this.formatText(textContent, callback)}</p>
            </div>
        );
      } else {
        res.push(
          <div key={i} className={className}>
            <p className={pClassName}>{this.formatText(textContent, callback)}</p>
          </div>
        )
      }

    }

    return res;
  }

  isDialogOnLeft(dialog) {
    if (dialog.speakerId == null) {
      return false;
    }
    if (dialog.speakerId == 'left') {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div ref={this.container} className='text-area'>
          <div ref={this.textEndRef} />
          {this.renderTextList()}
      </div>  
    )
  }
}