import React from 'react';
import '../App.css'

class Home extends React.Component {


render() {
  
return (
  <div className="cursor-none all">
    <div className=" cursor-none relative  max-h-screen mx-[10%]  w-[40%] float-right py-[8%]">
        <h1 className="text-5xl">Hello Again</h1>
        <p className="text-xl nor font-light my-[8%]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div className="my-10  mx-auto w-[80%] flex">
          <img className="h-[80px] opacity-50 mx-10"src="https://img.icons8.com/windows/480/000000/dribbble.png"/>
          <img className="h-[73px] opacity-50 mx-10" src="https://img.icons8.com/ios/500/000000/facebook-f.png"/>
          <img className="h-[80px] opacity-50 mx-10" src="https://img.icons8.com/fluency/240/000000/github.png"/>
          <img className="h-[80px] opacity-50 mx-10" src="https://img.icons8.com/ios/500/000000/linkedin.png"/>
        </div>
      </div>
    </div>
  )
}
}
export default Home;