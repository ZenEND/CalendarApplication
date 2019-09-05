import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="EN">
        <Head>
          <meta charSet="utf-8" />
          <title key="title">My simple Calendar</title>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// <script
//   type="text/javascript"
//   src="/helpers/scriptGA.js"
// />
export default MyDocument
