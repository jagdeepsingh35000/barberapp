import React from "react";
import "../CssFiles/ContactPage.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <p className="comeandget">Come and get a great haircut</p>
        <p className="contactus">Contact Us</p>
        <p>------------------</p>
        <div className="FormAndOpeningHours">
          <div className="OpeninghoursandAddress">
            <div className="openinghours">
              <p className="txt">OPENING HOURS</p>
              <p>Mon - Fri : 9am - 9pm</p>
              <p>Saturday : 11am - 6pm</p>
              <p>Sunday : 11am - 4pm</p>
            </div>
            <div className="address">
              <p className="txt">OUR ADDRESS</p>
              <p>298 Ontario street Stratford, Ontario CA N4Z1B3 </p>
              <p>Tel: 9814663238</p>
            </div>
            <div className="socilamediaicons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} color="#4267B2" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} color="#E1306C" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} color="#1DA1F2" />
              </a>
            </div>
          </div>
          <div className="form">
            <div className="firstandlastname">
              <div className="firstname">
                <label>First name *</label>
                <input type="text"></input>
              </div>
              <div className="lastname">
                <label>last name *</label>
                <input type="text"></input>
              </div>
            </div>
            <div className="email">
              <label>Email *</label>
              <input type="text"></input>
            </div>
            <div className="message">
              <label>Message</label>
              <textarea rows="5" cols="50"></textarea>
            </div>
            <div className="submit">Submit</div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.7832341157678!2d-80.98381062467668!3d43.36849247079972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ead2fc409507d%3A0x2695ce4246c7a218!2sDick&#39;s%20Barber%20Shop!5e1!3m2!1sen!2sin!4v1735745170404!5m2!1sen!2sin"
         allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-bottom"></div>
    </div>
  );
}
