import React from 'react';
import './App.css';
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
        hovered: false
    }

}
onMouseEnter = e => {
    this.setState({ hovered: true });
  };

  onMouseLeave = e => {
    this.setState({ hovered: false });
  };

componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            this.setState({left: e.pageX-40, top: e.pageY-40});
        });}
    render(){
      const { hovered } = this.state;
    const style = hovered ? { padding:'55px' ,left: this.state.left, top: this.state.top } : {left: this.state.left, top: this.state.top};
      return( <Router className="cursor-none">
      <span className=" duration-100 absolute p-[40px] rounded-full border border-t-blue-200 border-r-blue-200 border-b-blue-200 border-l-blue-200" style={style} id="cur"></span>
      <nav className="cursor-none flex  w-full py-8 all relative px-[10%] mt-[2%]" >
        <div className="flex-1 text-3xl"> <a>Portfolio</a> </div>
        <div className="flex text-2xl"> 
        <Link to="/"><a className="mx-20 text-yellow-400" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Home</a></Link>
        <Link to="/About"><a className=" mx-20" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>About</a></Link>
        <Link to="/Works"><a className="mx-20" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Works</a> </Link>
        </div>
      </nav>
      <Routes className="">
        <Route path="/" element={<Home onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}/>} ></Route>
      <Route path="/About" element={<About/>} className="cursor-none"/>
      </Routes>
      </Router>)}
}
export default App;