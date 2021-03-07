import React, { Component } from "react";

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

  render() {
    return (
      <div className={this.props.className}>
        {this.renderPicture()}
      </div>  
    )
  }
}