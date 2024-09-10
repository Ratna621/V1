/** @format */

import React from "react";
import "./Home.css";
import PartnerSlider from "./PartnerSlider.js";
import TestimonialsSlider from "./TestimonialsSlider.js";

function Home() {
  return (
    <>
      <div className="top-banner">
        <img className="banner-bg" src="/images/banner-bg.png" alt="bg" />
        <img
          className="banner-bg-mob"
          src="/images/bannerbg-mob.png"
          alt="bg"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative">
              <h1>
                Onboard <span className="text-pink">Web3</span>
                <span className="nextline">Seamlessly</span>{" "}
              </h1>
              <p className="forweb">
                Trade between Flat and crypto with local payment solutions.
                accessing thousands of tokens
              </p>
              <div className="forweb">
                <a href="" className="button-pink shadow">
                  Schedule a demo
                </a>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <div className="mobimg">
                <img
                  className="img-fluid"
                  src="/images/banner-form.png"
                  alt="Form"
                />
              </div>

              <div className="formobile">
                <p className="text-center">
                  Trade between Flat and crypto with local payment solutions.
                  accessing thousands of tokens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-sec position-relative">
        <img
          className="partner-bg"
          src="/images/partner-bottom-bg.png"
          alt="bg"
        />
        <div className="container">
          <div>
            <h2>Partnered with</h2>
          </div>
          <div className="partnerslider d-flex overflow-hidden">
            <PartnerSlider />
          </div>
          <div className="partnerinfo">
            <div className="box-gradient flex-1 w-100">
              <div className="info-img-wrapper">
                <img src="/images/secure-img.png" alt="img" />
              </div>
              <div className="infobox position-relative">
                <div>
                  <div className="info-container">
                    <h3 className="text-dark fw-bold">Secure</h3>
                    <p>
                      Our inhouse risk engine reduces fraud rate to {"< 0.01%"}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-gradient flex-1 w-100">
              <div className="info-img-wrapper">
                <img src="/images/compliant-img.png" alt="img" />
              </div>
              <div className="infobox position-relative">
                <div>
                  <div className="info-container">
                    <h3 className="text-dark fw-bold">Compliant</h3>
                    <p>
                      We ensure regulatory compliance for a seamless entry for
                      your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-gradient flex-1 w-100">
              <div className="info-img-wrapper">
                <img src="/images/reliable-img.png" alt="img" />
              </div>
              <div className="infobox position-relative">
                <div>
                  <div className="info-container">
                    <h3 className="text-dark fw-bold">Reliable</h3>
                    <p>
                      Integrate with a few lines of code, no downtime with 24/7
                      customer support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-testimonials">
        <div className="container">
          <div className="testimonialsinfo d-flex justify-content-around">
            <div className="position-relative d-flex flex-column justify-content-center testimonialsblock">
              <div className="testimonialsbox">
                <img
                  className="bchainimg"
                  src="/images/blockchain-img.png"
                  alt="img"
                />
              </div>
              <h3 className="text-light">5 Blockchains</h3>
              <p className="text-pink">3K + Tokens</p>
            </div>
            <div className="position-relative d-flex flex-column justify-content-center testimonialsblock">
              <div className="testimonialsbox">
                <img
                  className="bchainimg"
                  src="/images/onboard-img.png"
                  alt="img"
                />
              </div>
              <h3 className="text-light">Users Onboarded</h3>
              <p className="text-pink">120K</p>
            </div>
            <div className="position-relative d-flex flex-column justify-content-center testimonialsblock">
              <div className="testimonialsbox">
                <img
                  className="bchainimg"
                  src="/images/crypto-img.png"
                  alt="img"
                />
              </div>
              <h3 className="text-light">Crypto Success</h3>
              <p className="text-pink">$16M +</p>
            </div>
          </div>
          <div>
            <h2 className="partner-title">Partner testimonials</h2>
          </div>
          <div className="testimonialsslider space-x-30 d-flex justify-content-around">
            <TestimonialsSlider />
          </div>
          {/* <div className="formobile">
    <div className="d-flex justify-content-center">
    <img className="slidericon" src="/images/prev-arrow.png" alt="icon" />
    <img className="slidericon" src="/images/next-arrow.png" alt="icon" />
    </div>
</div> */}
        </div>
      </div>
      <div className="contact-sales position-relative">
        <img className="sales-bg" src="/images/app-section-bg.png" alt="bg" />
        <div className="container">
          <div className="row">
            <div className="col-lg-7 position-relative salesinfo">
              <h2>
                Start your custom
                <span className="nextline">integration now</span>{" "}
              </h2>

              <div className="forweb">
                <a href="" className="button-pink salesbtn shadow">
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="col-lg-5 position-relative">
              <div className="mobile-app-sec">
                <img
                  className="img-fluid img-mobile-app"
                  src="/images/mobile-app-img.png"
                  alt="App img"
                />
              </div>

              <div className="formobile">
                <div className="d-flex justify-content-center">
                  <a href="" className="button-pink salesbtn shadow">
                    Schedule a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
