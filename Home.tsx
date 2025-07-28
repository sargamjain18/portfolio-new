"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import AboutPage from "@/components/Home/About/About";
import Contact from "@/components/Home/Contact/Contact";
import Project from "@/components/Home/Project/project";
import Skill from "@/components/Home/Skills/Skill";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(()=>{
    const initAOS = async () => {
      await import ('aos');
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:'top-bottom',
      })
    };
    initAOS();
  },[])
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <AboutPage/>
      <Project/>
      <Skill/>
      <Contact/>
    </div>
  )
}

export default Home
