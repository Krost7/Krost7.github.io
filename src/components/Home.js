import React from 'react';
import '../App.css'

class Home extends React.Component {


render() {
  
return (
  <div className="cursor-none">
    <div className="relative  max-h-screen mx-[10%] py-[2%]">
      
      <div className=" border-red-900 py-[13%]">
        <div className="mx-auto"> <div className="bg-[url('../public/contentBg.png')] pt-6 pl-14 pb-20 w-[48%]  bg-no-repeat bg-auto mx-auto">
          <h1 className="text-5xl all relative">KROST<span className=" text-5xl text-gray-800 font-medium mx-10">   Full-Stack Developer </span></h1>
        </div> 
          <h3 className="text-center my-12 all underline"><a className="cursor-none" onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} href="sawkyawwalarhtwe123@gmail.com" >sawkyawwalarhtwe123@gmail.com</a></h3>
        </div>
      </div>
      <h3 className="text-center my-2 all"><a >made by me, craft by tailwindcss and react &copy;</a></h3>
    </div>
    </div>
  )
}
}
export default Home;