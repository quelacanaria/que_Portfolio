import { useRef } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Forms from "./Components/Forms";
import Card from "./Components/Card";

function App() {
  const refs = {
    Home: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  return (
    <>
      <Header sectionRefs={refs} />

      <div id="Home" ref={refs.Home}>
        <Home />
      </div>

      <div id="About" ref={refs.About}>
        <About />
      </div>

      <div id="Projects" ref={refs.Projects}>
        <Projects />
      </div>

      <div id="Contact" ref={refs.Contact}>
        <Forms />
      </div>
    </>
  );
}

export default App;
