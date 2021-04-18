import React, { Component } from "react"
import { Helmet } from "react-helmet"
import App from "../components/app";

import "./index.css"

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        backgroundColor: '#7b929a'
    }
    this.onBackgroundColorChange = this.onBackgroundColorChange.bind(this);
  }

  onBackgroundColorChange(color) {
    this.setState({backgroundColor: color});
  }

  render() {
    return (<>
      <Helmet>
        <title>A fateful night</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <div className="body" style={{backgroundColor: this.state.backgroundColor}}>
        <App onBackgroundColorChange={this.onBackgroundColorChange}/>
      </div>
    </>);
  }
}
