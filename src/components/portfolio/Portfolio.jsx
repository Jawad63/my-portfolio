import React from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.css";
import { useState } from 'react';
import { useEffect } from 'react';
import {
   featuredPortfolio,
   javascriptPortfolio,
   reactjsPortfolio,
   phpPortfolio } from '../../data';

export default function Portfolio() {

   const [selected, setSelected] = useState("featured");
   const [data, setData] = useState([]);

   const list = [
      {
         id: "featured",
         title: "Featured",
      },

      {
         id: "javascript",
         title: "JavaScript",
      },

      {
         id: "reactjs",
         title: "ReactJS",
      },

      {
         id: "php",
         title: "PHP",
      },

   ];

   useEffect(() => {

      switch (selected) {
         case "featured":
            setData(featuredPortfolio);
         break;
         
         case "javascript":
            setData(javascriptPortfolio);
         break;

         case "reactjs":
            setData(reactjsPortfolio);
         break;

         case "php":
            setData(phpPortfolio);
            break;
         
         default:
            setData(featuredPortfolio);
      }

   }, [selected])

   return (
      <div className="portfolio" id="portfolio">
         <h1>Portfolio</h1>
         <ul>
            {list.map((item) => (
               <PortfolioList
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
               />
            ))}
         </ul>

         <div className="container">
            {data.map((d) => (
               <div className="item">
                  <img src={d.img} alt="" />
                  <h3>{d.title}</h3>
               </div>
            ))}
         </div>
      </div>
   )
}
