import React from 'react';
import './font.css';
class App extends React.Component {
render() {
return (
  <div>
      <div className="p-2 fixed">
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                
                <div class="-mr-2 flex items-center md:hidden">
                  <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
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
          <h1 className=" text-3xl font-medium my-[10%]">Hello Nice To Meet Ya!</h1>
          <p className=" text-sm">I'm Krost of the Burma. I'm a developer, a coder and also a UI/UX designer. Thanks for visiting my Portfolio. </p>
          <p className=" mx-[35%] mt-[200px] text-sm text-center">Explore More</p>
        </div>
        <div className=" bg-[url('../public/mbBg2.png')] min-h-screen bg-cover px-[10%] py-[100%] max-h-screen">
          <p className=" text-sm text-center">I'm Krost of the Burma. I'm a developer, a coder and also a UI/UX designer. Thanks for visiting my Portfolio. So when you were here, I would like to suggest you take a tour my portfolio and take a look to my design. There's are a bunch of code and if you want you can copy my code. But make sure you give the credit for me. And if you don't understand my code you can contact me by hitting contact button. Well then, take a tour.
I promise you won't regret it. </p>
        </div>
        <div className=" bg-[url('../public/mbBg3.png')] min-h-screen bg-cover px-[10%] py-[20%] max-h-screen border-b">
          <h1 className=" text-4xl font-medium my-[10%] text-white">My Works</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4 h-[165px]">
                <div className="row-start-1 row-end-4 w-[150px] border rounded-lg">
                  <img src="https://financialallianceforwomen.org/wp-content/uploads/2020/09/HAckathon-website-thumbnail-.png" className="rounded-lg min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%]"/>
                </div>
                <div className="row-start-1 row-end-4 w-[150px] border rounded-lg">
                  <img src="https://500px.com/staticV2/media/editors8@1x.126c6fb9.png" className="rounded-lg min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%]"/>
                </div>
            </div>
            <div class="container border h-[200px] rounded-lg mt-4">
              <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e6e26d9aa5428000759e96c%2Fwomen-washing-purple-water-lilies-in-Vietnam%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D960%26cropY1%3D112%26cropY2%3D954" className="rounded-lg  min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%] "/>
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-4 h-[165px] mt-4">
                <div className="row-start-1 row-end-4 w-[150px] border rounded-lg">
                  <img src="https://image.freepik.com/free-photo/inspired-caucasian-female-model-with-short-haircut-looking-away-with-shy-smile-purple-wall-photo-lovable-brown-haired-woman-sweater-relaxing-photoshoot_197531-7990.jpg" className="rounded-lg min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%]"/>
                </div>
                <div className="row-start-1 row-end-4 w-[150px] border rounded-lg">
                  <img src="https://www.oberlo.com/media/1603954923-image23-1.png?w=1824&fit=max" className="rounded-lg min-h-[100%] max-h-[100%] min-w-[100%] max-w[100%]"/>
                </div>
            </div>
            <svg className="float-right my-2"width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" fill="#ffffff"/></svg>
        </div>
        <div className=" bg-[url('../public/mbBg4.png')] min-h-screen bg-cover max-h-screen px-[10%] py-[20%]">
            <div class="container border h-[200px] rounded-lg mt-20">
              <img src="https://cvinfos.com/wp-content/uploads/2020/03/00-10-scaled.jpg" className="rounded-lg "/>

            </div>
        </div>
      </div>);
}
}
export default App;
