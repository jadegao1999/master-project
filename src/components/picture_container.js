import React, { Component } from "react";
import { InteractiveItem } from "../models/picture";
import SwitchTransition from "react-transition-group/SwitchTransition";
import { CSSTransition } from 'react-transition-group';

import './picture_container.css';

export default class PictureContainer extends Component {
  constructor() {
    super();
    this.renderActionButton = this.renderActionButton.bind(this);
    this.renderPicture = this.renderPicture.bind(this);
  }
  
 renderPicture() {
   const { imageModel } = this.props;

  if (imageModel == null) return (<div></div>)

  return (
    <div>
      <img
        key={imageModel.id}
        src={imageModel.image}
        alt={imageModel.description}
      />
      {(imageModel != null && imageModel instanceof InteractiveItem) 
        && this.renderActionButton()}
    </div>
  )
 }

 renderActionButton() {
   const { onActionButtonClick } = this.props;

   return (
     <div className="action-button" onClick={onActionButtonClick}></div>
   )
 }

  render() {
    const { imageModel } = this.props;
    var key = imageModel == null ? 'no_image' : imageModel.id;
    return (
        <div className={this.props.className}>
          <SwitchTransition mode="out-in">
            <CSSTransition key={key}
                          classNames="image"
                          timeout={300}>
              {this.renderPicture()}
            </CSSTransition>
          </SwitchTransition>
        </div>  
    )
  }
}