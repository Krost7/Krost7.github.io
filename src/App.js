import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import Home from './Home';
import About from './About'
class App extends React.Component{
  render() {
    return (
      <Router>
        <div className="fixed align-middle origin-center rotate-90 mt-[20%]">
          <h1 className=" my-4 text-[#B29E84] scrol text-xs">craftbyme, madebyreact</h1>
          <div className=" bg-[#B29E84] w-[80px] opacity-70 mx-[150%] h-[1px] mt-[-25px]"></div>
        </div>
          <div className=" px-44 py-12 bg-[#253439]">
     

            <nav className=" navBar">
              <div className="flex">
                <ul className="flex flex-1 opacity-70">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="/">Skills</Link></li>
                  <li><Link to="/">Works</Link></li>
                </ul>
                <h1 className="m-2 opacity-70"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#B29E84" d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></h1>
              </div>
            </nav>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/About" element={<About/>}/>
            </Routes>
          </div>
     </Router>
      )
  }
  }
export default App;
