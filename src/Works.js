import React,{ useEffect, useState } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

class Works extends React.Component{
    componentDidMount() {
  // or simply just AOS.init();
  AOS.init({
    // initialise with other settings
    duration : 2000
  });
}
  render() {

    return (
    <div>
          <div className=" pt-16 bg-[#253439]" data-aos="fade-up">
              <div className="flex mt-20"><hr className=" w-24 opacity-70 mt-[12px] mr-8 "/><h1 className="text-white secHeader text-white opacity-70">Explore my works</h1></div>
              <p className="text-white w-[50%] scrol text-xl my-36">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                  </p>
              <div className="ml-[50%]" data-aos="fade-up">
                  <h1 className=" my-4 text-white scrol mx-[37%]">SCROLL</h1>
                <div className=" bg-white w-[1px] opacity-70 mx-[40%] h-[350px]"></div>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4 my-28" >
              <div class="col-start-1 col-end-4" data-aos="fade-up"><img className="object-cover w-[100%] h-[100%]" src="https://uicookies.com/wp-content/uploads/2020/04/isoft-software-company-website-template.png" alt="Sublime Text"/></div>
              <div class="col-start-1 col-end-2" data-aos="fade-up"><img className="object-cover w-[100%] h-[100%]" src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/60b6b54cca1a1af1b2a9acea_gallery01.jpeg" alt="Sublime Text"/></div>
              <div class="col-start-2 col-end-4" data-aos="fade-up"><img className="object-cover w-[100%] h-[100%]" src="https://www.webfx.com/wp-content/uploads/2021/10/softdash-website-template.png" alt="Sublime Text"/></div>
              <div class="col-start-1 col-end-3" data-aos="fade-up"><img className="object-cover w-[100%] h-[100%]" src="https://bootstrapmade.com/content/templatefiles/BizLand/BizLand-bootstrap-website-template-md.png" alt="Sublime Text"/></div>
              <div class="col-start-3 col-end-4" data-aos="fade-up"><img className="object-cover w-[100%] h-[100%]" src="https://colorlib.com/wp/wp-content/uploads/sites/2/ico-crypto-technology-website-template.jpg" alt="Sublime Text"/></div>
          </div>
        </div>
      )
  }
  }
export default Works;
