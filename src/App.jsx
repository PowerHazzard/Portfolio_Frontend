import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Contact,
  Hero,
  Tech,
  Works,
  StarsCanvas,
  Navbar,
} from "./components";
import Education from "./components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education/>
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
