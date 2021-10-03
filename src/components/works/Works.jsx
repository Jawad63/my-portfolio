import { useState } from "react";
import "./works.css"
import {VideogameAsset, ArrowBack, ArrowForward} from "@material-ui/icons";

export default function Works() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const data = [
      {
         id: "1",
         title: "Snake Game",
         desc:
            "This snake game was made by using HTML, CSS and JavaScript.",
         img: "assets/snakegame.png",
      },
      
      {
         id: "2",
         title: "Weather App",
         desc:
            "I made This weather App using ReactJS",
         img: "assets/weatherapp.png",
      },

      {
         id: "3",
         title: "CRUD Operation",
         desc:
            "This is my First Backend application. I used PHP & mySQL to make this.",
         img: "assets/crud.png",
            
      },
   ];

   const handleClick = (way) => {
      way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
   };

   return (

      

      <div className="works" id="works">

         <div
            className="slider"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
         >

            {data.map((d) => (


               <div className="container">
                  <div className="item">

                     <div className="left">
                        <div className="leftContainer">

                           <h2>{d.title}</h2>
                           <p>{d.desc}</p>
                           <span>Source:</span>
                           
                           {/* Here goes the icons for netlify & github */}

                        </div>

                     </div>

                     <div className="right">
                     <img src={d.img} alt="" />
                     </div>

                  </div>
               </div>
            ))}

         </div>


         <ArrowBack className="icon arrow left" onClick={() => handleClick("left")} />
         <ArrowForward className="icon arrow right" onClick={() => handleClick()} />



      </div>
   )
}
