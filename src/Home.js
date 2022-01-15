import React from 'react';
import './font.css';
import { Divide as Hamburger } from 'hamburger-react';
import Particles from "react-tsparticles";
class App extends React.Component {


render() {
return (
  <div>
        <div className="container px-[10%] py-[70%] md:py-[5%] bg-[url('../public/mbBg1.png')] md:bg-[url('../public/mdBg1.png')] min-h-screen max-h-screen min-w-full bg-cover z-40">
          <h1 className=" text-4xl font-semibold my-[10%] md:text-6xl">Hello <br/>Nice To Meet Ya!</h1>
          <p className=" text-base md:text-xl">I'm Krost of the Burma. I'm a developer, a coder and also a UI/UX designer. Thanks for visiting my Portfolio. </p>
          <p className=" mx-auto mt-[100px] text-sm md:text-lg text-center border p-2 md:p-3 h-[40px] w-[100px] md:h-[58px] md:w-[130px] cursor-pointer hover:bg-gradient-to-r from-violet-100 to-sky-100 rounded-full text-cyan-600 border-sky-600">Explore More</p>
          <p className="hidden md:inline float-right">Seek Your Future here</p>
          <hr class="w-[150px] mx-auto my-[30%]"/>
        </div>
        <div className="container px-[10%] py-[10%] md:py-[1%] bg-[url('https://i.pinimg.com/originals/ca/0f/ab/ca0fab980a0e70a23bb782fe32a95058.jpg')] min-w-full md:min-h-screen max-h-screen bg-auto bg-no-repeat md:bg-cover z-40">
          <h1 className=" text-xl font-semibold md:my-[10%] md:text-4xl">Well, Let Me Take You To My Personality</h1>
          <p className=" text-sm md:text-xl mb-[100px]">I'm Krost of the Burma. I'm a developer, a coder and also a UI/UX designer. Thanks for visiting my Portfolio. So when you were here, I would like to suggest you take a tour my portfolio and take a look to my design. There's are a bunch of code and if you want you can copy my code. But make sure you give the credit for me. And if you don't understand my code you can contact me by hitting contact button. Well then, take a tour.
I promise you won't regret it. </p>
          <a href = "mailto: sawkyawwalarhtwe123@gmail.com" className="  text-sm md:text-xl cursor-pointer text-center decoration-solid underline p-2 md:p-3 h-[40px] w-[100px] md:h-[60px] md:w-[140px] text-cyan-600 border-sky-600">Lets Talk</a>
      
        </div>

        <div className=" bg-black  py-[20%] md:py-[5%] px-[10%] border-b relative z-[-1]">
               <Particles 
      id="tsparticles"
      options={{
  
  "background": {
    "color": {
      "value": "#000000"
    },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "backgroundMask": {
    "cover": {
      "color": {
        "value": "#ffffff"
      }
    }
  },
  "fullScreen": {
    "zIndex": -1
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse"
      }
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 20
      },
      "connect": {
        "distance": 100,
        "links": {
          "opacity": 0
        }
      },
      "grab": {
        "distance": 400
      },
      "light": {
        "shadow": {
          "color": {
            "value": "#ffffff"
          }
        }
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": {
        "value": "#000000"
      },
      "distance": 150,
      "enable": true,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "path": {},
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "spin": {}
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 150
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 0.5
      },
      "animation": {
        "enable": true,
        "speed": 3,
        "minimumValue": 0.1
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 5
      },
      "animation": {
        "enable": true,
        "speed": 20,
        "minimumValue": 0.1
      }
    },
    "twinkle": {
      "lines": {
        "enable": true,
        "frequency": 0.005,
        "color": {
          "value": "#000000"
        }
      },
      "particles": {
        "enable": true,
        "color": {
          "value": "#ffff00"
        }
      }
    }
  }
  }}
/> 
          <h1 className=" text-4xl md:text-5xl font-medium mb-[2%] text-white z-[0] text-center">My Recent Works</h1>
          <p className="text-center text-white mb-[3%] p-2 z-[0] text-lg">Here are a few design projects I've worked on recently. Want to see more? Email me.</p>
            
            <div className="md:flex hidden">
               <div className="container rounded-lg mt-4 md:mx-2">
              <img src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/60b6b54cca1a1af1b2a9acea_gallery01.jpeg" className="rounded-lg  min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%] "/>
            </div>
            <div className="container  rounded-lg mt-4 z-[0] md:mx-2">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/website-building-tutorial-youtube-thumbnail-design-template-65458d2b58bd9624b45f5cfdefcff157_screen.jpg?ts=1606639135" className="rounded-lg  min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%] "/>
            </div>
            </div>
           <div className="md:flex">
               <div className="container  rounded-lg mt-4 md:mx-2">
              <img src="https://influencermarketinghub.com/wp-content/uploads/2020/08/befunky-youtube-thumbnail-maker.jpg" className="rounded-lg  min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%] "/>
            </div>
            <div className="container rounded-lg mt-4 z-[0] md:mx-2">
              <img src="https://influencermarketinghub.com/wp-content/uploads/2020/08/picmaker-free-youtube-thumbnail-maker.jpg" className="rounded-lg  min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%] "/>
            </div>
           </div>

           <button className="hover:bg-white flex cursor-pointer z-[0] mx-[30%] md:mx-[45%] mt-[100px] text-base text-center border h-[60px] w-[140px] p-2 rounded-full text-white border-sky-600 "> <p class="mt-2">Browse More</p><img className="  z-40 h-[40px]" src="https://img.icons8.com/nolan/64/dribbble.png"/></button>
             </div>

        <div className=" bg-white px-[10%] py-[5%] min-h-screen md:flex ">
         
            <div className="z-[0]  bg-white container px-4 h-[720px] border-b rounded-t-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_10px_2px_rgba(0,0,0,0.15)]" >
                  <img src="https://img.icons8.com/nolan/512/backend-development.png" className="mx-auto p-12 w-44"/>
                  <h3 className="text-center text-lg">Back-end Developer</h3>
                  <p className="text-center my-[3%] p-2">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Things I enjoy designing:</h3>
                  <p className="text-center my-[3%] p-2">UX, UI, Web, Mobile, Apps, Logos</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Design Tools:</h3>
                  <ul className="text-center text-base font-semibold text-indigo-500 my-6">
                    <li className="font-medium text-gray-900">Balsamiq Mockups</li>
                    <li className="font-medium text-gray-900">Figma</li>
                    <li className="font-medium text-gray-900">Invision</li>
                    <li className="font-medium text-gray-900">Pen & Paper</li>
                    <li className="font-medium text-gray-900">Sketch</li>
                    <li className="font-medium text-gray-900">WebFlow</li>
                    <li className="font-medium text-gray-900">Zepline</li>
                  </ul>
            </div>
            <div className=" bg-white container px-4 h-[720px] border-b  drop-shadow-[0_35px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_10px_2px_rgba(0,0,0,0.15)]" >
                  <img src="https://img.icons8.com/nolan/512/source-code.png" className="mx-auto p-12 w-44"/>
                  <h3 className="text-center text-lg">Front-end Developer</h3>
                  <p className="text-center my-[3%] p-2">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Things I enjoy designing:</h3>
                  <p className="text-center my-[3%] p-2">UX, UI, Web, Mobile, Apps, Logos</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Design Tools:</h3>
                  <ul className="text-center text-base font-semibold text-indigo-500 my-6">
                    <li className="font-medium text-gray-900">Balsamiq Mockups</li>
                    <li className="font-medium text-gray-900">Figma</li>
                    <li className="font-medium text-gray-900">Invision</li>
                    <li className="font-medium text-gray-900">Pen & Paper</li>
                    <li className="font-medium text-gray-900">Sketch</li>
                    <li className="font-medium text-gray-900">WebFlow</li>
                    <li className="font-medium text-gray-900">Zepline</li>
                  </ul>
            </div>
            <div className=" bg-white container px-4 h-[720px]   rounded-b-lg  drop-shadow-[0_35px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_10px_2px_rgba(0,0,0,0.15)]" >
                  <img src="https://img.icons8.com/nolan/512/more.png" className="mx-auto p-12 w-44"/>
                  <h3 className="text-center text-lg">Other Skills</h3>
                  <p className="text-center my-[3%] p-2">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Things I enjoy designing:</h3>
                  <p className="text-center my-[3%] p-2">UX, UI, Web, Mobile, Apps, Logos</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Design Tools:</h3>
                  <ul className="text-center text-base font-semibold text-indigo-500 my-6">
                    <li className="font-medium text-gray-900">Balsamiq Mockups</li>
                    <li className="font-medium text-gray-900">Figma</li>
                    <li className="font-medium text-gray-900">Invision</li>
                    <li className="font-medium text-gray-900">Pen & Paper</li>
                    <li className="font-medium text-gray-900">Sketch</li>
                    <li className="font-medium text-gray-900">WebFlow</li>
                    <li className="font-medium text-gray-900">Zepline</li>
                  </ul>
            </div>

        </div>
        <div className=" bg-neutral-800 md:px-[10%] py-[5%] md:min-h-3/4  flex">
        <div className="md:mx-8">
          <h3 className="text-center md:text-base text-sm font-semibold text-white my-6">Design Tools:</h3>
                  <ul className="text-center md:text-base text-sm font-semibold text-indigo-500 my-6">
                    <li className="font-medium text-white">Balsamiq Mockups</li>
                    <li className="font-medium text-white">Figma</li>
                    <li className="font-medium text-white">Invision</li>
                    <li className="font-medium text-white">Pen & Paper</li>
                    <li className="font-medium text-white">Sketch</li>
                    <li className="font-medium text-white">WebFlow</li>
                    <li className="font-medium text-white">Zepline</li>
                  </ul>
         </div>  
         <div className="md:mx-8">
          <h3 className="text-center md:text-base text-sm font-semibold text-white my-6">Design Tools:</h3>
                  <ul className="text-center md:text-base text-sm font-semibold text-indigo-500 my-6">
                    <li className="font-medium text-white">Balsamiq Mockups</li>
                    <li className="font-medium text-white">Figma</li>
                    <li className="font-medium text-white">Invision</li>
                    <li className="font-medium text-white">Pen & Paper</li>
                    <li className="font-medium text-white">Sketch</li>
                    <li className="font-medium text-white">WebFlow</li>
                    <li className="font-medium text-white">Zepline</li>
                  </ul>
         </div>  
          <div className="md:mx-8">
          <h3 className="text-center md:text-base text-sm font-semibold text-white my-6">Design Tools:</h3>
                  <ul className="text-center md:text-base text-sm font-semibold text-indigo-500 my-6">
                    <li className="font-medium text-white">Balsamiq Mockups</li>
                    <li className="font-medium text-white">Figma</li>
                    <li className="font-medium text-white">Invision</li>
                    <li className="font-medium text-white">Pen & Paper</li>
                    <li className="font-medium text-white">Sketch</li>
                    <li className="font-medium text-white">WebFlow</li>
                    <li className="font-medium text-white">Zepline</li>
                  </ul>
         </div>  
          <div className="flex-1 my-6 text-white text-sm md:pl-[30%]">
          <h3>Email: <span>sawkyawwalarhtwe123@gmail.com</span></h3>
          <div className="flex my-2">
            <img className="rounded-full hover:bg-sky-100 md:h-[40px] h-[20px] mx-2" src="https://img.icons8.com/nolan/512/apple-mail.png"/>
            <img className="rounded-full hover:bg-sky-100 md:h-[39px] h-[19px] mx-2" src="https://img.icons8.com/nolan/512/linkedin.png"/>
            <img className="rounded-full hover:bg-sky-100 md:h-[40px] h-[20px] mx-2" src="https://img.icons8.com/nolan/64/instagram-new.png"/>
            <img className="rounded-full hover:bg-sky-100 md:h-[40px] h-[20px] mx-2" src="https://img.icons8.com/nolan/64/dribbble.png"/>
          </div>
          <p className="md:text-lg mt-12 text-indigo-400">Living, learning, & leveling up <br/>one day at a time.</p>
          <p className="text-sm mt-6">Handcrafted by me &copy; Krost</p>
         </div>            
        </div>
      </div>);
}
}

export default App;
