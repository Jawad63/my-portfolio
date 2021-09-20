import react from "react";
// here goes the components: 
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioList from "./components/portfolioList/PortfolioList";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";


function App() {
  return (
    <div className="app">
      <Topbar />
    </div>
  );
}

export default App;
