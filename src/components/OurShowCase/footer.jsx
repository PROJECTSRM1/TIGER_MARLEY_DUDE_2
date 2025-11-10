import React, { useState } from "react";
import "./footer.css"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h3 className="logo">TIGERMARLEY</h3>
          <p>
            🇮🇳 15-2, RM1 Codershub Software Solutions, Hyderabad, Gachibowli,
            Vasavi Sky City Building, TN IND
          </p>
          <p className="email">
            Email:{" "}
            <a href="mailto:care@rm1codershub.com">care@rm1codershub.com</a>
          </p>
          <p>Support Hours: 10am to 7pm</p>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-col">
          <h4>Need Help</h4>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Order Tracking</li>
            <li>Initiate Return</li>
            <li>International Orders</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>Our Story</li>
            <li>Customer Voice</li>
            <li>Giving Back</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Shopping</h4>
          <ul>
            <li>Geek</li>
            <li>Kids</li>
            <li>Couple</li>
            <li>Corporate Orders</li>
            <li>Bulk Ordering</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>We’re Shipping Globally</h4>
          <p>Homegrown Indian Brand</p>
          <p>Free Shipping & Fast Processing</p>
          <p>Easy Return & Exchange</p>
          <p>📞 WhatsApp Us: +91 8247582810</p>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="footer-bottom">
        <div
          className="accordion-item"
          onClick={() => toggleAccordion("navlinks")}
        >
          NAVIGATION LINKS{" "}
          <span className="icon">
            {activeAccordion === "navlinks" ? "−" : "+"}
          </span>
        </div>

        {activeAccordion === "navlinks" && (
          <div className="accordion-content">
            <div className="nav-section">
              <p>
                <span className="category">GEEK</span> :
                <span className="links">
                  Android Logo T-Shirt, iOS T-Shirt, Programmer T-Shirts, Python
                  & Java, Microsoft T-Shirt, Developer Hoodies, Marketing,
                  Tester & Manager
                </span>
              </p>
              <p>
                <span className="category">MEN</span> :
                <span className="links">
                  Hoodies, T-Shirts, Polos, Full Sleeve T-Shirts, Oversized,
                  Plain, Plus Size
                </span>
              </p>
              <p>
                <span className="category">WOMEN</span> :
                <span className="links">
                  T-Shirts, Half Sleeve, Plain T-Shirts
                </span>
              </p>
              <p>
                <span className="category">ANIME</span> :
                <span className="links">
                  Anime T-Shirts, Anime Oversized, Anime Hoodies
                </span>
              </p>
              <p>
                <span className="category">THEME</span> :
                <span className="links">
                  Sarcasm, Music, Coffee & Tea, Motivational, Travel, Pets
                </span>
              </p>
              <p>
                <span className="category">KIDS</span> :
                <span className="links">T-Shirts</span>
              </p>
            </div>
          </div>
        )}

        <div className="accordion-item" onClick={() => toggleAccordion("who")}>
          WHO WE ARE{" "}
          <span className="icon">{activeAccordion === "who" ? "−" : "+"}</span>
        </div>

        {activeAccordion === "who" && (
          <div className="accordion-content">
            <h3>
              TigerMarley - Your One-Stop Destination for High Quality T-Shirts
              Online in India
            </h3>

            <h4>Discover the Best Collection of T-Shirts Online</h4>
            <p>
              Are you looking for the latest trends in T-Shirts? Look no further
              than <strong>TigerMarley</strong>, India's ultimate destination for
              stylish and high-quality T-shirts online.
            </p>
            <p>
              We understand that T-Shirts are a staple in everyone’s wardrobe.
              That’s why we curate collections for all styles, from casual to
              graphic, for both men and women.
            </p>

            <h4>Buy T-Shirts Online in India at Affordable Prices</h4>
            <p>
              Shopping for T-Shirts online has never been easier than with{" "}
              <strong>TigerMarley</strong>. Enjoy free shipping, fast delivery,
              and great deals every day.
            </p>

            <h4>Exceptional Support & Fast Delivery</h4>
            <p>
              Our support team is always ready to assist, ensuring you have a
              seamless shopping experience from start to finish.
            </p>

            <h4>Discount Coupons</h4>
            <p>
              Use <b>WELCOME10</b> for 10% off your first order, <b>SAVE40</b>{" "}
              for 40% off next, or <b>DEAL200</b> to save ₹200 on 3+ items.
            </p>

            <div className="benefits">
              <h5>We’re spending a lot of money to:</h5>
              <ul>
                <li>Give you high-quality products</li>
                <li>Make our designs pop and stand out</li>
                <li>Deliver products with extra safety and care</li>
              </ul>
            </div>

            <p>
              Think of <strong>TigerMarley</strong> — where fashion meets
              comfort, quality, and affordability.
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
