import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSlider = () => {
  return (
     <Carousel
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        stopOnHover
        animationHandler="slide"
        centerMode
        centerSlidePercentage={20}
        infiniteLoop
        axis="horizontal"
      >
                <div>
                    <div className="sliderbox flex-1">
<div>
<img className="pienalogo" src="/images/piena-logo.png" alt="img" />
</div>
<p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor
incididunt ut labore et dolore maana aliqua</p>
<div className="starblock d-flex">
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-border-icon.svg" alt="icon" />
</div>
<div className="userinfo d-flex">
<div><img className="avatarimg" src="/images/avatar.png" alt="Avatar img" /></div>
<div className="userinfo-wrapper">
<h3 className="text-light">Brendan Eich</h3>
<p className="text-light">Co-founder & CEO of Brave</p>
</div>
</div>
</div>
                </div>
                <div>
                   <div className="sliderbox flex-1">
<div>
<img className="pienalogo" src="/images/piena-logo.png" alt="img" />
</div>
<p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor
incididunt ut labore et dolore maana aliqua</p>
<div className="starblock d-flex">
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-border-icon.svg" alt="icon" />
</div>
<div className="userinfo d-flex">
<div><img className="avatarimg" src="/images/avatar.png" alt="Avatar img" /></div>
<div className="userinfo-wrapper">
<h3 className="text-light">Brendan Eich</h3>
<p className="text-light">Co-founder & CEO of Brave</p>
</div>
</div>
</div>
                </div>
                <div>
                    <div className="sliderbox flex-1">
<div>
<img className="pienalogo" src="/images/piena-logo.png" alt="img" />
</div>
<p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor
incididunt ut labore et dolore maana aliqua</p>
<div className="starblock d-flex">
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-border-icon.svg" alt="icon" />
</div>
<div className="userinfo d-flex">
<div><img className="avatarimg" src="/images/avatar.png" alt="Avatar img" /></div>
<div className="userinfo-wrapper">
<h3 className="text-light">Brendan Eich</h3>
<p className="text-light">Co-founder & CEO of Brave</p>
</div>
</div>
</div>
                </div>
                <div>
                   <div className="sliderbox flex-1">
<div>
<img className="pienalogo" src="/images/piena-logo.png" alt="img" />
</div>
<p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor
incididunt ut labore et dolore maana aliqua</p>
<div className="starblock d-flex">
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-border-icon.svg" alt="icon" />
</div>
<div className="userinfo d-flex">
<div><img className="avatarimg" src="/images/avatar.png" alt="Avatar img" /></div>
<div className="userinfo-wrapper">
<h3 className="text-light">Brendan Eich</h3>
<p className="text-light">Co-founder & CEO of Brave</p>
</div>
</div>
</div>
                </div>
                <div>
                    <div className="sliderbox flex-1">
<div>
<img className="pienalogo" src="/images/piena-logo.png" alt="img" />
</div>
<p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor
incididunt ut labore et dolore maana aliqua</p>
<div className="starblock d-flex">
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-full-icon.svg" alt="icon" />
<img className="staricon" src="/images/star-border-icon.svg" alt="icon" />
</div>
<div className="userinfo d-flex">
<div><img className="avatarimg" src="/images/avatar.png" alt="Avatar img" /></div>
<div className="userinfo-wrapper">
<h3 className="text-light">Brendan Eich</h3>
<p className="text-light">Co-founder & CEO of Brave</p>
</div>
</div>
</div>
                </div>
                
            </Carousel>
  );
};
export default TestimonialsSlider;

