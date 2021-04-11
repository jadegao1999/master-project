import React, { Component } from "react";
import { Person, InteractiveItem } from "../models/picture";
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
   var image;
   const { imageModel, cardImage } = this.props;

  if (imageModel == null && cardImage == null) return (<div></div>)

  if (cardImage != null) {
    image = cardImage; 
  } else {
    image = imageModel;
  }

  var imageClassName = (image instanceof Person) ? 'person' : 'item';

  return (
    <div className="image-wrapper">
      <img
        className={imageClassName}
        key={image.id}
        src={image.image}
        alt={image.description}
      />
      {(image != null && image instanceof InteractiveItem) 
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