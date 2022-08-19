import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HeroSection(){
   
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="">
        <Slider {...settings}>
            <div>
            <img className="w-full h-[500px]" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="" />
          </div>
          <div>
            <img className="w-full object-cover h-[500px]" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt="" />
          </div>  
        </Slider>
        </div>
      );


}