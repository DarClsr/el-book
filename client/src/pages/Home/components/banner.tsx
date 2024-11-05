
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type IBanner = {
    src:string,
    alt:string
}




const Banner = ({banners}: {banners:IBanner[]}) => {
    var settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        dots:true,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
    };

    return <>
        <Slider {...settings}>
            {
                banners.map((banner, index) => {
                    return <div key={index} className="flex justify-center items-center overflow-hidden h-[150px] rounded-md">
                        <img className="w-full h-full object-cover" src={banner.src} alt={banner.alt} />
                    </div>
                })
            }
        </Slider>
    </>


}

export default Banner;