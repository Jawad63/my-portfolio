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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nesciunt repudiandae quaerat, amet quod quia consectetur placeat odit error vero nemo sed adipisci alias voluptatum at dolorem doloribus tempora beatae officia ad quidem culpa! Provident recusandae rerum corrupti iste tempore!</p>
               </div>
            </div>

            <div className="sectionTwo">
               <h3>What do i do?</h3>
               <div className="textContainer">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nesciunt repudiandae quaerat, amet quod quia consectetur placeat odit error vero nemo sed adipisci alias voluptatum at dolorem doloribus tempora beatae officia ad quidem culpa! Provident recusandae rerum corrupti iste tempore!</p>
               </div>
            </div>

         </div>


      </div>
   )
}
