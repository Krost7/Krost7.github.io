import React from 'react';
import './font.css';
import { Divide as Hamburger } from 'hamburger-react';
import Particles from "react-tsparticles";

class App extends React.Component {

constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }

toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
     
    })
     console.log(this.state.isHidden);
  }

render() {
return (
  <div>
        {!this.state.isHidden && <div  className="w-full h-screen bg-black fixed">
        acd
        </div> }
      <div className="p-2 absolute z-4" >
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="bg-white/20 rounded-md p inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    
                    
                    <span onClick={this.toggleHidden.bind(this)} className="opacity-100"><Hamburger rounded /></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
              <a href="#" className="font-semibold text-black hover:text-indigo-900">Product</a>

              <a href="#" className="font-semibold text-black hover:text-indigo-900">Features</a>

              <a href="#" className="font-semibold text-black hover:text-indigo-900">Marketplace</a>

              <a href="#" className="font-semibold text-black  hover:text-gray-900">Company</a>

              <a href="#" className="font-semibold text-black hover:text-indigo-500">Log in</a>
            </div>
          </nav>
        </div>
        
        <div className="container px-[10%] py-[70%] md:py-[5%] bg-[url('../public/mbBg1.png')] md:bg-[url('../public/mdBg1.png')] min-h-screen max-h-screen bg-cover z-40">
          <h1 className=" text-4xl font-semibold my-[10%] md:text-6xl">Hello <br/>Nice To Meet Ya!</h1>
          <p className=" text-base md:text-xl">I'm Krost of the Burma. I'm a developer, a coder and also a UI/UX designer. Thanks for visiting my Portfolio. </p>
          <p className=" mx-[40%] mt-[100px] text-sm md:text-lg text-center border p-2 md:p-3 h-[40px] w-[100px] md:h-[60px] md:w-[140px] rounded-full text-cyan-600 border-sky-600">Explore More</p>
          <p className="hidden md:inline float-right">Seek Your Future here</p>
        </div>
        <div className="container px-[10%] py-[70%] md:py-[1%] bg-[url('https://i.pinimg.com/originals/ca/0f/ab/ca0fab980a0e70a23bb782fe32a95058.jpg')] min-h-screen max-h-screen bg-cover z-40">
          <h1 className=" text-4xl font-semibold my-[10%] md:text-4xl">Well, Let Me Take You To My Personality</h1>
          <p className=" text-base md:text-xl">I'm Krost of the Burma. I'm a developer, a coder and also a UI/UX designer.<br/> Thanks for visiting my Portfolio. So when you were here, I would like to suggest<br/> you take a tour my portfolio and take a look to my design. There's are a bunch of <br/>code and if you want you can copy my code. But make sure you give the credit for<br/> me. And if you don't understand my code you can contact me by hitting contact<br/> button. Well then, take a tour.
I promise you won't regret it. </p>
          <p className=" mt-[100px] text-sm md:text-lg text-center decoration-solid underline p-2 md:p-3 h-[40px] w-[100px] md:h-[60px] md:w-[140px] text-cyan-600 border-sky-600">Lets Talk</p>
      
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
        "distance": 0,
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
          <h1 className=" text-4xl md:text-5xl font-medium mb-[5%] text-white z-[0]">My Works</h1>
            
            <div className="md:flex hidden">
               <div className="container rounded-lg mt-4 md:mx-2">
              <img src="https://hackr.io/blog/best-web-development-projects/thumbnail/large" className="rounded-lg  min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%] "/>
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

            <p className="z-[0] mx-[30%] md:mx-[45%] mt-[100px] text-base text-center border p-4 h-[60px] w-[140px] rounded-full text-white border-sky-600">Browse More</p>
             </div>

        <div className=" bg-white px-[10%] py-[5%] min-h-screen md:flex">
         
            <div className="  bg-white container px-4 h-[720px] border-b rounded-t-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_10px_2px_rgba(0,0,0,0.15)]" >
                  <img src="https://img.icons8.com/nolan/512/backend-development.png" className="mx-auto p-12 w-44"/>
                  <h3 className="text-center text-lg">Back-end Developer</h3>
            </div>
            <div className=" bg-white container px-4 h-[720px] border-b  drop-shadow-[0_35px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_10px_2px_rgba(0,0,0,0.15)]" >
                  <img src="https://img.icons8.com/nolan/512/source-code.png" className="mx-auto p-12 w-44"/>
                  <h3 className="text-center text-lg">Front-end Developer</h3>
            </div>
            <div className=" bg-white container px-4 h-[720px]   rounded-b-lg  drop-shadow-[0_35px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_10px_2px_rgba(0,0,0,0.15)]" >
                  <img src="https://img.icons8.com/nolan/512/more.png" className="mx-auto p-12 w-44"/>
                  <h3 className="text-center text-lg">Other Skills</h3>
            </div>

        </div>
        
      </div>);
}
}

export default App;
