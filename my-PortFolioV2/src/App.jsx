import Header from './Components/Header' 
import Home from './Components/Home' 
import About from './Components/About' 
import Projects from './Components/Projects' 
import Forms from './Components/Forms' 
import Links from './Components/Links'
import HeaderFooter from './Components/HeaderFooter'
import React, { useState, useEffect } from 'react'
function App() { 
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
  const sections = document.querySelectorAll('section[data-section]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        setCurrentSection(entry.target.getAttribute('data-section'))
      }
    })
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));

  return() => observer.disconnect();
}, []);
    return ( 
      <> 
        <Header currentSection = {currentSection} />  
        <section id="home" data-section='home' ><Home /></section>
        <section id="about" data-section='about'><About  /></section>
        <section id="projects" data-section='projects'><Projects  /></section>
        <section id="contact" data-section='contact'><Forms  /></section>
        <section id='links' data-section='links'><Links /></section>
        <HeaderFooter currentSection = {currentSection} />
      </> 
    ) 
  } 
  
  export default App