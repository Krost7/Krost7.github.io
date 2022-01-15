import React from 'react';
import './font.css';
import { Divide as Hamburger } from 'hamburger-react';
import Particles from "react-tsparticles";
import Home from './Home';
import AboutMe from './AboutMe'
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
class App extends React.Component {

constructor () {
    super()
    this.state = {
      isHidden: true,
      isHiddenF:false
    }
  }

toggleHiddenF () {
    this.setState({
      isHiddenF: !this.state.isHiddenF
     
    })
     console.log(this.state.isHiddenF);
  }

toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
     
    })
     console.log(this.state.isHidden);
  }

render() {
return (

        <Router>
            <div className=" ">
              
                  <nav className="flex items-center justify-between sm:h-10 lg:justify-start bg-white" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 z-[600] md:hidden">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <button type="button" className="bg-white rounded-md p inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                          <span className="sr-only">Open main menu</span>
                          <span onClick={this.toggleHidden.bind(this)} className="opacity-100 "><Hamburger rounded toggled={!this.state.isHidden} /></span>
                        </button>
                      </div>
                    </div>
                      {!this.state.isHidden && <div  className="w-full h-screen fixed bg-black z-[400] py-[100%]">
        <h1 className=" text-4xl md:text-5xl font-medium mb-[25%] text-white z-[100] text-center underline" onClick={this.toggleHidden.bind(this)} ><Link to="/AboutMe">Home</Link></h1>
        <h1 className=" text-4xl md:text-5xl font-medium mb-[25%] text-white z-[100] text-center underline" onClick={this.toggleHidden.bind(this)} ><Link to="/AboutMe">Works</Link></h1>
        <h1 className=" text-4xl md:text-5xl font-medium mb-[25%] text-white z-[100] text-center underline" onClick={this.toggleHidden.bind(this)} ><Link to="/AboutMe">Contact</Link></h1>
        <Particles 
      id="tsparticles1"
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
        </div> }
                  <div className="hidden md:flex w-full px-[10%] py-12 h-[100px]">

                    <a className="font-semibold text-black hover:text-indigo-900 text-xl flex-1"><Link to="/Home"><img className="rounded-full hover:bg-sky-100 h-[49px]" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-home-user-interface-icongeek26-outline-gradient-icongeek26.png"/></Link></a>


                    <a href="sawkyawwalarhtwe123@gmail.com"  className="font-semibold text-black hover:text-indigo-900 text-xl "><img className="rounded-full hover:bg-sky-100 h-[50px]" src="https://img.icons8.com/nolan/512/apple-mail.png"/></a>
                    
                    <a  href="https://www.linkedin.com/in/kyaw-walar-htwe-98388622a/" className="font-semibold text-black hover:text-indigo-900 text-xl"><img className="rounded-full hover:bg-sky-100 h-[49px]" src="https://img.icons8.com/nolan/512/linkedin.png"/></a>

                    <a  className="font-semibold text-black hover:text-indigo-900 text-xl"><img className="rounded-full hover:bg-sky-100 h-[50px]" src="https://img.icons8.com/nolan/64/instagram-new.png"/></a>
                  
                    <a  className="font-semibold text-black hover:text-indigo-900 text-xl"><img className="rounded-full hover:bg-sky-100 h-[50px]" src="https://img.icons8.com/nolan/64/dribbble.png"/></a>
                  </div>
                </nav>
            <div>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/Home" element={<Home />}></Route>
                  <Route path="/AboutMe" element={<AboutMe />}></Route>
                </Routes>
              </div>
            </div>
        </Router>
        );
    }
}

export default App;
