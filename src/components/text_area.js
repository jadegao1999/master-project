import React, { Component } from "react";
import ScrollSnap from 'scroll-snap'
import { TextContent, Dialog, Narrative } from '../models/text_content';

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

  renderTextList() {
    const { textContentList } = this.props;
    const res = [];
    
    for (let i = textContentList.length - 1; i >= 0; i--) {
      let textContent = textContentList[i];
      let className = 'text-item';
      if (textContent instanceof Dialog) {
        className = 'dialog-text-item';
      }
      res.push(<div key={textContent.id} className={className}><p>{textContent.text}</p></div>);
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