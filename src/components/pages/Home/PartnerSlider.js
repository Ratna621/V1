import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnerSlider = () => {
  return (
     <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        autoPlay
        stopOnHover
        animationHandler="slide"
        centerMode
        centerSlidePercentage={20}
        infiniteLoop
        axis="horizontal"
      >
                <div>
                    <img src="/images/slide-logo1.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo2.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo3.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo4.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo5.png"  />
                </div>
                 <div>
                    <img src="/images/slide-logo1.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo2.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo3.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo4.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo5.png"  />
                </div>
                 <div>
                    <img src="/images/slide-logo1.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo2.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo3.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo4.png"  />
                </div>
                <div>
                    <img  src="/images/slide-logo5.png"  />
                </div>
            </Carousel>
  );
};
export default PartnerSlider;

