import React, { Component } from "react";
import TextArea from '../components/text_area';
import PictureContainer from './picture_container';
import DecisionArea from './decision_area';

import { storyNodeMap } from '../data/story';
import { imagesMap } from '../data/images';

import './app.css';

export default class App extends Component {
  constructor() {
    super();
    let storyStartNode = storyNodeMap['0'];

    this.storyNode = storyStartNode;

    this.state = {
      // storyNode: storyStartNode,
      allTextContent: ['Click screen to start'],
      isCurrentChapterEnded: false,
    };

    this.leftImage = imagesMap.liusu;
    this.rightImage = imagesMap.door;
    // this.textList = [
    //   'Tonight, you and your younger sister, Baoluo, are going to a blind date at Paramount, the biggest night club in 1940, Shanghai. ',
    //   'The party will start in an hour. You pick up the old cheongsam(a traditional Chinese dress) you just ironed, stand in front of the mirror and imagine wearing it.',
    //   'It suddenly reminds you that you wore it seven years ago, also on a blind date, where you met your unfaithful, violent ex-husband.',
    //   'Although it may be unlucky, it\'s the only formal wear you have left and you have no budget for a new dress.',
    //   '"Liusu, what are you doing?! "',
    //   'You hear your mother, Lady Bai, calling your name from the other side of the house, "come over here and help your sister!" ',
    // ];
    this.nextText = this.nextText.bind(this);
    this.onDecisionClick = this.onDecisionClick.bind(this);
  }

  // Populates the next passage in text area on click.
  nextText() {
    const { allTextContent } = this.state;

    console.log(`index = ${this.storyNode.textIndex}`);
    
    if (this.storyNode.textIndex < this.storyNode.textContentList.length) {
      allTextContent.push(this.storyNode.textContentList[this.storyNode.textIndex]);
      this.storyNode.textIndex += 1;
      this.setState({
        allTextContent,
      })
    } else {
      // Trigger next story decision.
      this.setState({isCurrentChapterEnded: true});
    }
  }

  onDecisionClick(index) {
    let nextStoryNodeKey = this.storyNode.decisionKeyList[index];
    let nextStoryNode = storyNodeMap[nextStoryNodeKey];
    console.log(`next node index = ${nextStoryNode.textIndex}`);

    this.storyNode = nextStoryNode;
    this.setState({
      isCurrentChapterEnded: false,
    }, 
    // Populate the first passage in next story node.
    this.nextText
    );
  }

  render() {
    console.log(`is current ended: ${this.state.isCurrentChapterEnded}`);
    return (
      <div className="app" onClick={this.nextText}>
        <PictureContainer className="left-picture-container" imageModel={this.leftImage}/>
        <div className='text-container'>
        <TextArea className="text-area" textContentList={this.state.allTextContent}/>
        { this.state.isCurrentChapterEnded && 
          <DecisionArea 
              decisionList={this.storyNode.decisionTextList}
              selectDecision={this.onDecisionClick} /> 
        }
        </div>
        <PictureContainer className="right-picture-container" imageModel={this.rightImage}/>
      </div>  
    )
  }
}