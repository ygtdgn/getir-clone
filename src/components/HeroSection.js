import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import {useWindowWidth} from '@react-hook/window-size'


export default function HeroSection(){
   
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: '+1',
    DE: '+49',
    TR: '+90',
    IT: '+39'
  }


  const windowWith = useWindowWidth()


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        fade: true
      };
      return (
        <div className="relative h-[500px] h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        {windowWith >= 768 && <Slider {...settings}>
            <div>
            <img className="w-full object-cover h-[500px]" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt="" />
          </div>
          <div>
            <img className="w-full object-cover h-[500px]" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="" />
          </div>  
        </Slider>}
        <div className="md:container flex justify-between items-center relative  md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
         <div className="hidden md:block">
         <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
          <h3 className="mt-8 text-4xl font-semibold text-white">Dakikalar içinde <br />
          kapınızda</h3>
         </div>
         <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
          <div className="grid gap-y-3">
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={code => setSelected(code)}
              selected={selected}
              className="flag-select"
            />
            <label className="flex-1 relative block group cursor-pointer">
              <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer text-sm pt-2 cursor-pointer" />
              <span className="absolute top-0 left-0 h-full px-4 -mt-[2px] flex items-center text-sm text-gray-500 peer-focus:h-7 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarasi</span>
            </label>
          </div>
          <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color transition-color hover:bg-primary-brand-color hover:text-brand-yellow transition-all">
            Telefon numarasi ile devam et
          </button>
         </div>
          </div>
        </div>
        </div>
      );


}