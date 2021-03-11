import React, { Component } from "react";
import { InteractiveItem } from "../models/picture";

import './picture_container.css';

export default class PictureContainer extends Component {
  
 renderPicture() {
  return (
    <img
      key={this.props.imageModel.id}
      src={this.props.imageModel.image}
      alt="Liusu"
      width={200}
      height={400}
    />
  )
 }

 renderActionButton() {
   return (
     <div className="action-button" onClick={this.props.callback}></div>
   )
 }

  render() {
    const { imageModel } = this.props;
    return (
      <div className={this.props.className}>
        {(imageModel != null) && this.renderPicture()}
        {(imageModel != null && imageModel instanceof InteractiveItem) 
          && this.renderActionButton()}
      </div>  
    )
  }
}