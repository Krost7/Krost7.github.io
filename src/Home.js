import React,{ useEffect, useState } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import sublimetext from './sublimetext.png'
import setting from './setting.png'
import tools from './tools.png'
import realgo from './react.png'
import vuelgo from './vue.png'
import larlgo from './laravel.png';

class Home extends React.Component{
    componentDidMount() {
  // or simply just AOS.init();
  AOS.init({
    // initialise with other settings
    duration : 800
  });
}
  render() {

    return (
    <div>
<div className=" p-2 flex bg-[#253439] "  >
        <div className="w-2/4 " >
          <img data-aos="fade-up" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Girl in a jacket" className="inset-y-1/4 left-[300px]  absolute mx-auto rounded-full w-[240px] h-[240px] object-cover"/>
          <div data-aos="fade-up" className="mx-auto flex justify-center absolute inset-y-2/4 left-[310px]">
            <svg className="mx-3 my-8  rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#F6F4F1" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
            <svg className="mx-3 my-8  rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#F6F4F1" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <svg className="mx-3 my-8  rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#F6F4F1" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
          </div>
        </div>
        
        <div className=" w-2/4 my-[7%] " data-aos="fade-up">
          <p className="greeting italic text-4xl opacity-80 mb-24">Hello, Nice To Meet Ya!</p>
          <span className="text-2xl content mx-24 opacity-70">I'm</span>
          <h1 className="mx-24 text-5xl name tracking-widest opacity-70">KROST OF THE BURMA</h1>
          <p className="text-center mx-32 mt-14 content opacity-90">A Front-end Developer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.</p>
          <div className="rounded-3xl shadow w-32 my-24 mx-auto but">
                  <a
                    href="google.com"
                    className="rounded-3xl w-42 flex items-center justify-center px-1 text-base font-medium text-white bg-[#F6F4F1] text-[#B29E84] hover:bg-[#FFE4BA] py-2"
                  >
                    RESUME
                  </a>
                </div>
        </div>

      </div>

      <div className="mx-auto mt-[-200px]" data-aos="fade-up">
          <h1 className=" my-4 text-white scrol mx-[38%]">SCROLL</h1>
        <div className=" bg-white w-[1px] opacity-70 mx-[40%] h-[350px]"></div>
        </div>
      <div className="px-2 py-12 relative">
        
        <div className="flex" data-aos="fade-right"><hr className="my-12 w-24 opacity-70 mt-[12px] mr-8 "/><h1 className="text-white secHeader text-white opacity-70">Check Out My Skills</h1></div>
            <div className="flex my-16 but text-[#F6F4F1] text-sm" data-aos="fade-up"> 
              <img className="w-20 h-20 mr-28" src={sublimetext} alt="Sublime Text"/>
              <p className="w-[40%]  mt-8"> A Front-end Developer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. </p>
            </div>
            <div className="flex my-16 but text-[#F6F4F1] text-sm" data-aos="fade-up"> 
              <p className="w-[40%]  mt-8 ml-[600px] mr-28 "> A Front-end Developer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. </p>
              <img className="w-20 h-20 " src={tools} alt="Sublime Text"/>
              </div>
            <div className="flex my-16 but text-[#F6F4F1] text-sm" data-aos="fade-up"> 
              <img className="w-20 h-20 mr-28" src={setting} alt="Sublime Text"/>
              <p className="w-[40%] mt-8"> A Front-end Developer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. </p>
            </div>
            <div className="flex place-content-center mt-36" data-aos="fade-up">    
                <img className="w-28 h-28 mr-48" src={realgo} alt="Sublime Text"/>
                <img className="w-[4rem] h-[4rem] mr-48 mt-4" src={vuelgo} alt="Sublime Text"/>
                <img className="w-28 h-28 mr-48" src={larlgo} alt="Sublime Text"/>
            </div>
          </div>
        </div>
      )
  }
  }
export default Home;
