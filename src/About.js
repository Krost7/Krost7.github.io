import React from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import about1 from './about1.png';
import about2 from './about2.png';
import about3 from './about3.png';
class About extends React.Component{
  componentDidMount() {
  // or simply just AOS.init();
  AOS.init({
    // initialise with other settings
    duration : 1200
  });
}
  render() {
    return (
            <div>
              <div className="flex pt-16 bg-[#253439]" data-aos="fade-up">
               <div className="w-2/6 p-12" >
                  <img src="https://images.squarespace-cdn.com/content/v1/55c8b005e4b09069b52cac48/1537101450552-WNH83Y9STB556398FTJK/39486222_542696442830193_1245952197045256192_n%281%29.jpg" alt="Girl in a jacket" className="rounded-2xl object-cover"/>
                </div>
                <div className="w-2/6 pt-10">
                  <div className="flex"><hr className=" w-24 opacity-70 mt-[12px] mr-8 "/><h1 className="text-white secHeader text-white opacity-70">Some Info</h1></div>
                  <p className="w-[140%]  bg-white p-12 rounded-3xl my-36 but text-[#B29E84]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                  </p>
                </div>
              </div>
              <div className="mx-auto" data-aos="fade-up">
                <h1 className=" my-4 text-white scrol mx-[30%]">SCROLL</h1>
                <div className=" bg-white w-[1px] opacity-70 mx-[32%] h-[350px]"></div>
              </div>
              <div className="flex w-2/4 w-full p-12 my-16" data-aos="fade-right">
                <div className=" w-2/4">
                  <hr className=" w-24 opacity-70 mt-[12px] my-16 "/>
                  <p className="text-white w-[80%] scrol text-2xl">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                  </p>
                </div>
                <div className=" w-2/4 px-28">
                   <img className="w-[500px] h-[500px] mr-28" src={about1} alt="Sublime Text"/>
                </div>
              </div>
                <hr className="opacity-50"/>

              <div className="flex w-2/4 w-full p-12 my-16" data-aos="fade-left">
                
                <div className=" w-2/4 ">
                   <img className="w-[500px] h-[500px] mr-28" src={about2} alt="Sublime Text"/>
                </div>
                <div className=" w-2/4 pl-28">
                  <hr className=" w-24 opacity-70 mt-[12px] my-16 "/>
                  <p className="text-white w-[80%] scrol text-2xl">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                  </p>
                </div>
              </div>

                <hr className="opacity-50"/>
              <div className="flex w-2/4 w-full p-12 my-16" data-aos="fade-right">

              <div className=" w-2/4">
                  <hr className=" w-24 opacity-70 mt-[12px] my-16 "/>
                  <p className="text-white w-[80%] scrol text-2xl">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                  </p>
                </div>
                
                <div className=" w-2/4 px-28">
                   <img className="w-[500px] h-[500px] mr-28" src={about3} alt="Sublime Text"/>
                </div>
                
              </div>

            </div>
      )
  }
  }
export default About;
