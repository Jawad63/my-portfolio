import React from 'react'
import "./intro.css"
import {ArrowDownward} from "@material-ui/icons"


export default function Intro() {
   return (
      <div className="intro" id="intro">

         <div className="left">
            <div className="imgContainer">
               <img src="assets/imageone.png" alt="" />
            </div>
         </div>

         <div className="right">
            <div className="wrapper">
               <h2>Hello, I'm</h2>
               <h1>Jawad Qureshi</h1>
               <h3>Full Stack <span>Web-Developer</span></h3>
            </div>

            <a href="#portfolio">
            <ArrowDownward className="icon"/>
            </a>
         </div>

      </div>
   )
}
