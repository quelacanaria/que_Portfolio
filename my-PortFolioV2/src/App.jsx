import Header from './Components/Header' 
import Home from './Components/Home' 
import About from './Components/About' 
import Projects from './Components/Projects' 
import Forms from './Components/Forms' 
import Links from './Components/Links'
import HeaderFooter from './Components/HeaderFooter'

function App() { 
  
    return ( 
      <> 
        <Header/> 
        <Home Id="home" />
        <About Id="about" />
        <Projects Id="projects" />
        <Forms Id="contact" />
        <Links Id='links'/>
        <HeaderFooter/>
      </> 
    ) 
  } 
  
  export default App