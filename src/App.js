import react from "react";
// here goes the components: 
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioList from "./components/portfolioList/PortfolioList";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import "./app.css"

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
