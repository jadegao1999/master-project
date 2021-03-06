import React, { Component } from "react";
import TextArea from '../components/text_area';
import PictureContainer from './picture_container';
import DecisionArea from './decision_area';
import { TextContent } from '../models/text_content';
import { InteractiveItem } from '../models/picture';

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
      isReset: true,
      allTextContent: [],
      isCurrentChapterEnded: false,
      leftImage: null,
      rightImage: null,
      cardImage: null,
      isCardShowing: false,
      isActionPending: false,
    };
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
    this.showCard = this.showCard.bind(this);
    this.handleInteractiveItemClick = this.handleInteractiveItemClick.bind(this);
  }

  // Populates the next passage in text area on click.
  nextText() {
    const { allTextContent, isCardShowing, isActionPending } = this.state;

    if (this.state.isReset) {
      this.setState({isReset: false});
    }

    if (isCardShowing) {
      // Remove card but do not populate next text.
      this.setState({
        isCardShowing: false,
        cardImage: null,
      });
      return;
    }

    console.log(`isActionPending: ${isActionPending}`);
    if (isActionPending) {
      return;
    }
    
    if (this.storyNode.textIndex < this.storyNode.textContentList.length) {
      // Show next text.
      console.log(`abc=story id: ${this.storyNode.id}`);
      console.log(`abc=text index: ${this.storyNode.textIndex}`);
      var textContent = this.storyNode.textContentList[this.storyNode.textIndex];
      allTextContent.push(textContent);
      this.storyNode.textIndex += 1;
      this.setState({
        allTextContent,
      });
      // Update images if they appear in [textContent].
      if (textContent.images != null) {
        if (textContent.images[0] != null) {
          console.log(`abc=left image: ${textContent.images[0]}`);
          this.setState({ leftImage: imagesMap[textContent.images[0]] });
          if (imagesMap[textContent.images[0]] instanceof InteractiveItem) {
            this.setState({ isActionPending: true });
          }
        }
        if (textContent.images[1] != null) {
          console.log(`abc=right image: ${textContent.images[1]}`);
          this.setState({ rightImage: imagesMap[textContent.images[1]] });
        }
      }
    } else {
      // Trigger next story decision, if current passage ends.
      this.setState({isCurrentChapterEnded: true});
    }
  }

  // Render Character description card on screen.
  showCard(cardId) {
    this.setState({
      cardImage: imagesMap[cardId],
      isCardShowing: true,
    });
  }

  onDecisionClick(index) {
    let nextStoryNodeKey = this.storyNode.decisionKeyList[index];
    let nextStoryNode = storyNodeMap[nextStoryNodeKey];
    console.log(`next node index = ${nextStoryNode.textIndex}`);

    this.storyNode = nextStoryNode;
    this.setState({
      allTextContent: [],
      isCurrentChapterEnded: false,
    }, 
    // Populate the first passage in next story node.
    () => {
      this.nextText();
      this.props.onBackgroundColorChange(this.storyNode.backgroundColor);
    }
    );
  }

  handleInteractiveItemClick() {
    console.log('handle click');
    this.setState({ isActionPending: false }, this.nextText);
  }

  render() {
    console.log(`is current ended: ${this.state.isCurrentChapterEnded}`);
    return (
      <div className="app" onClick={this.nextText}>
        <div className="time-and-place">
          { !this.state.isReset && <div>{`${this.storyNode.time}, ${this.storyNode.place}`}</div> }
        </div>
        <div className="main-container">
          { this.state.isReset && <div className="start-message">Click screen to start</div> }
          <PictureContainer 
              className="left picture-container" 
              imageModel={this.state.leftImage}
              cardImage={this.state.cardImage}
              onActionButtonClick={this.handleInteractiveItemClick}/>
          <div className='text-container'>
            <TextArea className="text-area" 
                      textContentList={this.state.allTextContent}
                      leftImage={this.state.leftImage}
                      rightImage={this.state.rightImage}
                      callback={this.showCard}/>
            { this.state.isCurrentChapterEnded && 
              <DecisionArea 
                  decisionList={this.storyNode.decisionTextList}
                  selectDecision={this.onDecisionClick} /> 
            }
          </div>
          <PictureContainer className="right picture-container" imageModel={this.state.rightImage}/>
          </div>
      </div>  
    )
  }
}