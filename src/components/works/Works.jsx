import React from 'react'
import "./works.css"

export default function Works() {
   return (
      <div className="works" id="works">
         <div className="left">
            <div className="imgContainer">
               <img src="assets/work.jpg" alt="" />
            </div>
         </div>

         <div className="right">

            <div className="sectionOne">
               <h3>About me</h3>
               <div className="textContainer">
                  <p>My name is Jawad Qureshi and i am a full stack web developer.</p>
               </div>
            </div>

            <div className="sectionTwo">
               <h3>What do i do?</h3>
               <div className="textContainer">
                  <p>I'm able to create Websites and applications by using HTML, CSS, JS, ReactJS and PHP. I'm better at Frontend but the goal is to be a full stack developer</p>
               </div>
            </div>

         </div>


      </div>
   )
}
