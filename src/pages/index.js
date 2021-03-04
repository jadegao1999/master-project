import React from "react"
import { Helmet } from "react-helmet"
import App from "../components/app";

import "./index.css"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Taylor's Tidy Trees</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <div className="body">
        <App/>
      </div>
    </>
  )
}
