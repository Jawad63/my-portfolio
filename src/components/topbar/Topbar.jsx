import React from "react"
import "./topbar.css"
import {Person, Email} from "@material-ui/icons"

export default function Topbar() {
   return (
      <div className="topbar">
         <div className="wrapper">

            <div className="left">
               <a href="#contact" className="logo">MY-PORTFOLIO</a>

               <div className="itemContainer">
                  <Person className="icon"/>
                  <span>+32 465 28 89 57</span>
               </div>

               <div className="itemContainer">
                  <Email className="icon"/>
                  <span>jawadqureshi111@gmail.com</span>
               </div>
            </div>

            <div className="right">
               <div className="hamburger">
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
               </div>
            </div>
         </div>
      </div>
   )
}