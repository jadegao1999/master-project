import React, { Component } from "react";

import './decision_area.css';

export default class TextArea extends Component {
  constructor() {
    super();
    this.renderDecisions = this.renderDecisions.bind(this);
  }

  renderDecisions() {
    const { decisionList, selectDecision } = this.props;

    return (
      decisionList.map((decision, index) => 
        <div 
        className="decision-item" 
        key={index} 
        onClick={(e) => { e.stopPropagation(); selectDecision(index)}}>{decision}</div>)
    );
  }

  render() {
    return(
      <div className="decision-list">{this.renderDecisions()}</div>
    )
  }
}