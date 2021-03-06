import React from 'react'
import "./intro.css"
import { ArrowDownward } from "@material-ui/icons"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'


export default function Intro() {

   const textRef = useRef();
   useEffect(() => {
      init(textRef.current, {
         showCursor: true,
         backDelay: 1500,
         backSpeed: 60,
         strings: ['Full stack Web-Developer'],
      });
   },[])

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
               <h3>I'm a <span ref={textRef}></span></h3>
            </div>

            <a href="#portfolio">
            <ArrowDownward className="icon"/>
            </a>
         </div>

      </div>
   )
}
