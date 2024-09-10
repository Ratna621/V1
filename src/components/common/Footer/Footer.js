import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="mainfooter container">
        <div className="row d-flex justify-content-between mb-5">
          <div className="col-lg-4">
            <h3 className="updatetext font-bold text-center">
              Get the latest updates, news,<br />and more from <span>Alpyne</span>.
            </h3>
          </div>
          <div className="col-lg-8 newsletter-col">
            <div className="d-flex justify-content-end newsletter-sec">
              <div>
                <p className="newsletter-text">Newsletter</p>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <input
                    className="newsletter-input"
                    type="text"
                    placeholder="Email"
                  />
                  <button
                    type="submit"
                    className="subscribe-btn shadow"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="d-flex items-align-center mt-4 fromcheck">
                  <input className="styled-checkbox" type="checkbox" value='check' id="check" />
                  <label htmlFor='check'
                  >Check this box to receive communications from
                    <a href="" className="fw-bold text-pink text-decoration-none ms-1">Alpyne</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-white w-full my-6" />
        <div className="w-full">
          <div className="row subscriberow-mob mt-5">
            <div className="col-lg-5 pr-12 d-flex flex-column justify-content-between ps-lg-4">
              <div className="crypto-text">
                <img className="footerlogo" src="/images/alpyne-logo.svg" alt="logo" />
                <div className="formobile">
                  <p><span className="text-gray">©</span> 2024 Alpyne. <span className="text-gray">All rights reserved</span> </p>
                </div>
                <p>
                  Indla's leading crypto payment infrastructure provider
                </p>
              </div>
              <div className="forweb">
                <p><span className="text-gray">©</span> 2024 Alpyne. <span className="text-gray">All rights reserved</span> </p>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-end subscriberow-col-right">
              <div className="flex-grow-1">
                <h4 className="footer-title">Company</h4>
                <ul className="list-unstyled itemlist">
                  <li><a href="">About us</a></li>
                  <li><a href="">Product</a></li>
                  <li><a href="">OTC</a></li>
                  <li><a href="">FAQ</a></li>
                  <li><a href="">API Documentation</a></li>
                  <li><a href="">Blogs</a></li>
                </ul>
              </div>
              <div className="flex-grow-1 contact-col">
                <h4 className="footer-title">Contact us</h4>
                <ul className="list-unstyled itemlist">
                  <li><a className="d-flex align-items-center" href="">
                    <img className="sociallogo" src="/images/mail-icon.svg" alt="Mail icon" />
                    support@alpyne.tech</a></li>
                  <li><a className="d-flex align-items-center" href="">
                    <img className="sociallogo" src="/images/phone-icon.svg" alt="Phone icon" />
                    +91 8652488544</a></li>
                  <li><a className="d-flex align-items-center" href="">
                    <img className="sociallogo" src="/images/twitter-icon.svg" alt="Twitter icon" />
                    Twitter</a></li>
                  <li><a className="d-flex align-items-center" href="">
                    <img className="sociallogo" src="/images/linkedin-icon.svg" alt="Linkedin icon" />
                    Linkedin</a></li>
                </ul>
              </div>
              <div className="flex-grow-1">
                <h4 className="footer-title">More info</h4>
                <ul className="list-unstyled itemlist">
                  <li><a href="">Privacy policy</a></li>
                  <li><a href="">Terms and conditions</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;