import React from 'react';
import './font.css';
import { Divide as Hamburger } from 'hamburger-react';

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
      <div className="p-2 fixed z-4" >
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    
                    
                    <span onClick={this.toggleHidden.bind(this)}><Hamburger rounded /></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</a>

              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Features</a>

              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</a>

              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
            </div>
          </nav>
        </div>
        
        <div className="px-[10%] py-[70%] bg-[url('../public/mbBg1.png')] min-h-screen max-h-screen bg-cover border">
          <h1 className=" text-4xl font-semibold my-[10%]">Hello <br/>Nice To Meet Ya!</h1>
          <p className=" text-base">I'm Krost of the Burma. I'm a developer, a coder and also a UI/UX designer. Thanks for visiting my Portfolio. </p>
          <p className=" mx-[40%] mt-[100px] text-sm text-center border p-2 h-[40px] w-[100px] rounded-full text-cyan-600 border-sky-600">Explore More</p>
        </div>
        <div className=" bg-[url('../public/mbBg2.png')] min-h-screen bg-cover px-[10%] py-[30%] max-h-screen">
          <h1 className=" text-4xl font-semibold mb-[22%] mx-auto">Who Am I?</h1>
          <p className=" text-lg my-2">I'm Krost of the Burma. I'm a developer, a coder and also a UI/UX designer. Thanks for visiting my Portfolio. So when you were here, I would like to suggest you take a tour my portfolio and take a look to my design.  Well then, take a tour.
            I promise you won't regret it. </p>
          <p className="  mt-[100px] text-sm text-center border p-2 h-[40px] w-[150px] text-cyan-800 border-teal-500">More About Me</p>
        </div>
        <div className=" bg-[url('../public/mbBg3.png')] min-h-screen bg-cover py-[20%] max-h-screen border-b px-2 overflow-hidden">
          <h1 className=" text-4xl font-medium mb-[30%] text-white mx-[5%]">My Works</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-start-1 row-end-4 border rounded-lg">
                  <img src="https://financialallianceforwomen.org/wp-content/uploads/2020/09/HAckathon-website-thumbnail-.png" className="rounded-lg min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%]"/>
                </div>
                <div className="row-start-1 row-end-4 border rounded-lg">
                  <img src="https://500px.com/staticV2/media/editors8@1x.126c6fb9.png" className="rounded-lg min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%]"/>
                </div>
            </div>
            <div className="container border h-[200px] rounded-lg mt-4">
              <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e6e26d9aa5428000759e96c%2Fwomen-washing-purple-water-lilies-in-Vietnam%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D960%26cropY1%3D112%26cropY2%3D954" className="rounded-lg  min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%] "/>
            </div>
            <svg className="float-right my-2"width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" fill="#ffffff"/></svg>
        </div>
        <div className=" bg-[url('../public/mbBg4.png')] min-h-screen bg-cover max-h-screen px-[10%] py-[5%]">
            <div className="container  h-[400px] rounded-lg mt-10">
              <img src="https://cvinfos.com/wp-content/uploads/2020/03/00-10-scaled.jpg" className="rounded-lg max-h-[100%] mx-auto"/>
                  <ul className="my-4 mx-[10%]"> 
                  <li className="flex"> 
                    <span className="text-sm mr-2">Html/Css</span>
                    <div className="w-full bg-gray-200 h-1 mt-2">
                      <div className="bg-blue-600 h-1 w-[75%]"></div>
                    </div>
                  </li>
                  <li className="flex"> 
                    <span className="text-sm mr-2">Html/Css</span>
                    <div className="w-full bg-gray-200 h-1 mt-2">
                      <div className="bg-blue-600 h-1 w-[75%]"></div>
                    </div>
                  </li>
                  <li className="flex"> 
                    <span className="text-sm mr-2">Html/Css</span>
                    <div className="w-full bg-gray-200 h-1 mt-2">
                      <div className="bg-blue-600 h-1 w-[75%]"></div>
                    </div>
                  </li>
                  <li className="flex"> 
                    <span className="text-sm mr-2">Html/Css</span>
                    <div className="w-full bg-gray-200 h-1 mt-2">
                      <div className="bg-blue-600 h-1 w-[75%]"></div>
                    </div>
                  </li>
                  <li className="flex"> 
                    <span className="text-sm mr-2">Html/Css</span>
                    <div className="w-full bg-gray-200 h-1 mt-2">
                      <div className="bg-blue-600 h-1 w-[75%]"></div>
                    </div>
                  </li>
                  <li className="flex"> 
                    <span className="text-sm mr-2">Html/Css</span>
                    <div className="w-full bg-gray-200 h-1 mt-2">
                      <div className="bg-blue-600 h-1 w-[75%]"></div>
                    </div>
                  </li>
                  </ul>
            </div>

        </div>
      </div>);
}
}
export default App;
