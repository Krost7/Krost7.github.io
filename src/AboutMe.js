import React from 'react';
import './font.css';

class AboutMe extends React.Component {
	render() {
return (
		<div className=" bg-white px-[10%] py-[5%] min-h-screen md:flex">
         
            <div className="  bg-white container px-4 h-[720px] border-b rounded-t-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_10px_2px_rgba(0,0,0,0.15)]" >
                  <img src="https://img.icons8.com/nolan/512/backend-development.png" className="mx-auto p-12 w-44"/>
                  <h3 className="text-center text-lg">Back-end Developer</h3>
                  <p className="text-center my-[3%] p-2">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Things I enjoy designing:</h3>
                  <p className="text-center my-[3%] p-2">UX, UI, Web, Mobile, Apps, Logos</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Design Tools:</h3>
                  <ul className="text-center text-base font-semibold text-indigo-500 my-6">
                    <li className="font-medium text-gray-900">Balsamiq Mockups</li>
                    <li className="font-medium text-gray-900">Figma</li>
                    <li className="font-medium text-gray-900">Invision</li>
                    <li className="font-medium text-gray-900">Pen & Paper</li>
                    <li className="font-medium text-gray-900">Sketch</li>
                    <li className="font-medium text-gray-900">WebFlow</li>
                    <li className="font-medium text-gray-900">Zepline</li>
                  </ul>
            </div>
            <div className=" bg-white container px-4 h-[720px] border-b  drop-shadow-[0_35px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_10px_2px_rgba(0,0,0,0.15)]" >
                  <img src="https://img.icons8.com/nolan/512/source-code.png" className="mx-auto p-12 w-44"/>
                  <h3 className="text-center text-lg">Front-end Developer</h3>
                  <p className="text-center my-[3%] p-2">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Things I enjoy designing:</h3>
                  <p className="text-center my-[3%] p-2">UX, UI, Web, Mobile, Apps, Logos</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Design Tools:</h3>
                  <ul className="text-center text-base font-semibold text-indigo-500 my-6">
                    <li className="font-medium text-gray-900">Balsamiq Mockups</li>
                    <li className="font-medium text-gray-900">Figma</li>
                    <li className="font-medium text-gray-900">Invision</li>
                    <li className="font-medium text-gray-900">Pen & Paper</li>
                    <li className="font-medium text-gray-900">Sketch</li>
                    <li className="font-medium text-gray-900">WebFlow</li>
                    <li className="font-medium text-gray-900">Zepline</li>
                  </ul>
            </div>
            <div className=" bg-white container px-4 h-[720px]   rounded-b-lg  drop-shadow-[0_35px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_10px_2px_rgba(0,0,0,0.15)]" >
                  <img src="https://img.icons8.com/nolan/512/more.png" className="mx-auto p-12 w-44"/>
                  <h3 className="text-center text-lg">Other Skills</h3>
                  <p className="text-center my-[3%] p-2">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Things I enjoy designing:</h3>
                  <p className="text-center my-[3%] p-2">UX, UI, Web, Mobile, Apps, Logos</p>
                  <h3 className="text-center text-base font-semibold text-indigo-500 my-6">Design Tools:</h3>
                  <ul className="text-center text-base font-semibold text-indigo-500 my-6">
                    <li className="font-medium text-gray-900">Balsamiq Mockups</li>
                    <li className="font-medium text-gray-900">Figma</li>
                    <li className="font-medium text-gray-900">Invision</li>
                    <li className="font-medium text-gray-900">Pen & Paper</li>
                    <li className="font-medium text-gray-900">Sketch</li>
                    <li className="font-medium text-gray-900">WebFlow</li>
                    <li className="font-medium text-gray-900">Zepline</li>
                  </ul>
            </div>

        </div>
	)
}
}

export default AboutMe;