import React from 'react';
import '../App.css'

class Home extends React.Component {


render() {
  
return (
  <div className="cursor-none">
    <div className="max-h-screen mx-2 2xl:mx-[10%] 2xl:py-[2%]">
      
      <div className=" border-red-900 py-[42%] 2xl:py-[13%]">
        <div className="mx-auto relative "> 
        <div className=" relative z-[-1] bg-[url('../public/contentBg.png')] px-4 py-2 2xl:pt-6 2xl:pl-14 2xl:pb-20 h-[70px] w-[350px] bg-cover 2xl:w-[48%] bg-no-repeat  2xl:bg-auto mx-auto">
          <h1 className="text-[1.618rem] 2xl:text-[2.618rem] all ">KROST<span className=" 2xl:text-[2.618rem] text-gray-800 font-medium 2xl:mx-10">   Full-Stack Developer </span></h1>
        </div> 
          <h3 className="text-center text-[0.618rem] my-16 2xl:my-12 all underline"><a  onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} href="sawkyawwalarhtwe123@gmail.com" >sawkyawwalarhtwe123@gmail.com</a></h3>
        </div>
      </div>
      <h3 className="text-center my-2 all text-[0.618rem]"><a >made by me, craft by tailwindcss and react &copy;</a></h3>
    </div>
    </div>
  )
}
}
export default Home;