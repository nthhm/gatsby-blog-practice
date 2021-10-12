import React from "react"
import "../styles/hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my blog!
        <br />
        Enjoy lots of posts.
        <br />
      </h1>
      <div className="hero-author">
        <img
          src="https://source.unsplash.com/IuJc2qh2TcA"
          alt="avatar"
          className="hero-author-image"
        ></img>
        <p>
          Written by hogehoge.
          <br />
          Front Engineer at Hoge.Inc. Love JavaScript.
        </p>
      </div>
    </div>
  )
}
