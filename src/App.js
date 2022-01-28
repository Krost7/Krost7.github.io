import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import './App.css';
import { Twirl as Hamburger } from 'hamburger-react';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About'

class App extends React.Component {

  constructor(){
  super();
  this.state = {
        left: 0,
        top: 0,
        hovered: false,
        isOpen: true,
        setOpen: true
    }

}
menuBar= e =>{
  this.setState({isOpen: false});
}
onMouseEnter = e => {
    this.setState({ hovered: true });
  };

  onMouseLeave = e => {
    this.setState({ hovered: false });
  };

componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            this.setState({left: e.pageX-50, top: e.pageY-50});
        });}
    render(){
      const { hovered } = this.state;
    const style = hovered ? { padding:'55px' ,left: this.state.left, top: this.state.top } : {left: this.state.left, top: this.state.top};
      return( <Router className="cursor-none">
      <span className=" duration-100 absolute p-[40px] rounded-full border border-t-blue-200 border-r-blue-200 border-b-blue-200 border-l-blue-200 hidden" style={style} id="cur"></span>
      <nav className="cursor-none flex  w-full py-8 all relative px-[10%] mt-[2%]" >
        
          <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full ">
          <Hamburger label="Show menu"  toggle={!this.state.isOpen} onClick={this.menuBar.bind(this)}/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 -translate-y-full scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-10  scale-100"
        leaveTo="transform opacity-0 scale-95 "
      >
        <Menu.Items className=" absolute  mt-2 w-20  ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" >
            <Link to="/About"><Menu.Item onClick={this.menuBar.bind(this)}>
              {({ active }) => (

                <a 
                  href="#"
                  
                >
                       <img  src="https://img.icons8.com/material-outlined/384/000000/home--v2.png" className="w-[50px] border rounded-full relative"/>
          
                </a>
              )}
            </Menu.Item></Link>
            <Menu.Item >
              {({ active }) => (
                <a  
                  href="#"
                  
                >
                  <img src="https://img.icons8.com/ios/100/000000/about-us-male.png" className="w-[50px] mb-2 p-2 border rounded-full"/>
                </a>
              )}
             
            </Menu.Item> 
            <Menu.Item >
              {({ active }) => (
                <a  
                  href="#"
                 
                >
                  <img src="https://img.icons8.com/pastel-glyph/64/000000/domain.png" className="w-[50px] mb-2 p-2 border rounded-full"/>
                </a>
              )}
            </Menu.Item>
            
  
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        <div className="flex-1 text-[1.618rem] hidden"> <a>Portfolio</a> </div>
        <div className="flex text-[1.618rem] hidden"> 
        <Link to="/"><a className="mx-20 text-yellow-400" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Home</a></Link>
        <Link to="/About"><a className=" mx-20" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>About</a></Link>
        <Link to="/Works"><a className="mx-20" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Works</a> </Link>
        </div>
      </nav>
      <Routes className="">
        <Route path="/" element={<Home onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}/>} ></Route>
      <Route path="/About" element={<About onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}/>} className="cursor-none"/>
      </Routes>
      </Router>)}
}
export default App;