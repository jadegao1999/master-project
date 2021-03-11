import React, { Component } from "react";
import reactStringReplace from 'react-string-replace';
import ScrollSnap from 'scroll-snap'
import { TextContent, Dialog, Narrative, Action } from '../models/text_content';

import './text_area.css';

function callback() {
  console.log('snapped')
}

export default class TextArea extends Component {
  container = React.createRef()

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
    const { textContentList, callback} = this.props;
    const res = [];
    
    for (let i = textContentList.length - 1; i >= 0; i--) {
      let textContent = textContentList[i];
      let className = 'text-item';
      if (textContent instanceof Narrative) {
        className += ' narrative-text-item';
      } else if (textContent instanceof Dialog) {
        className += ' dialog-text-item';
      } else if (textContent instanceof Action) {
        className = ' action-text-item';
      }
      res.push(
        <div 
            key={textContent.id} 
            className={className}>
          <p>{this.formatText(textContent, callback)}</p>
        </div>
      );
    }

    return res;
  }

  render() {
    return (
      <div ref={this.container} className='text-area'>
        {this.renderTextList()}
      </div>  
    )
  }
}