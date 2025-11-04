import React, { useRef, useState } from "react";
import "./ourshowcase.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const users = [
  { id: 1, image: require("../../assets/showourcaseimages/alok.jpg") },
  { id: 2, image: require("../../assets/showourcaseimages/vpiruthuma.jpg") },
  { id: 3, image: require("../../assets/showourcaseimages/vishal.jpg") },
  { id: 4, image: require("../../assets/showourcaseimages/gokul.jpg") },
  { id: 5, image: require("../../assets/showourcaseimages/amrutha.jpg") },
  { id: 6, image: require("../../assets/showourcaseimages/ayushi_bani.jpg") },
  { id: 7, image: require("../../assets/showourcaseimages/bhavana.jpg") },
  { id: 8, image: require("../../assets/showourcaseimages/dev.jpg") },
  { id: 9, image: require("../../assets/showourcaseimages/manjit.jpg") },
  { id: 10, image: require("../../assets/showourcaseimages/rahul.jpg") },
  { id: 11, image: require("../../assets/showourcaseimages/souvik.jpg") },
];

const UserShowcase = () => {
  const containerRef = useRef(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Scroll carousel
  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount =
        direction === "left"
          ? -containerRef.current.offsetWidth
          : containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="user-showcase">
      <h2>WE COULDN’T HAVE SHOWN IT BETTER</h2>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}>
          &lt;
        </button>

        <div className="user-cards-container" ref={containerRef}>
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img
                src={user.image}
                alt={`User ${user.id}`}
                className="user-image"
              />
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>

      
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
                    Android Logo T-Shirt, iOS T-Shirt, Programmer T-Shirts,
                    Python & Java, Microsoft T-Shirt, Developer Hoodies,
                    Marketing, Tester & Manager
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

          <div
            className="accordion-item"
            onClick={() => toggleAccordion("who")}
          >
            WHO WE ARE{" "}
            <span className="icon">{activeAccordion === "who" ? "−" : "+"}</span>
          </div>

          {activeAccordion === "who" && (
            <div className="accordion-content">
              <h3>
                TigerMarley - Your One-Stop Destination for High Quality T-Shirts
                Online in India
              </h3>

              <h4>
                Discover the Best Collection of T-Shirts Online at TigerMarley
              </h4>
              <p>
                Are you looking for the latest trends in T-Shirts? Look no further
                than <strong>TigerMarley</strong>, India's ultimate destination for
                stylish and high-quality t-shirts online. Our online T-Shirt store
                is the perfect place to buy T-Shirts online, with a vast selection
                of trendy designs, premium fabrics, and unbeatable prices.
              </p>
              <p>
                We understand that T-Shirts are a staple item in everyone’s wardrobe.
                That’s why we have curated T-Shirts for men and women that suit every
                taste, occasion, and budget. From casual T-Shirts to graphic tees, Men
                Plain T-Shirts to printed T-Shirts, and more, we have it!{" "}
                <strong>TigerMarley</strong> is your go-to destination for comfortable
                and stylish T-Shirts that you can wear every day.
              </p>

              <h4>Buy T-Shirts Online in India at Affordable Prices</h4>
              <p>
                Shopping for T-Shirts online has never been more comfortable and
                convenient than with <strong>TigerMarley</strong>. Our online T-shirt
                store offers a hassle-free shopping experience with easy payment
                options, fast shipping, and free delivery on all orders. Plus, our
                customer service team is always ready to help you with any queries or
                concerns.
              </p>

              <h4>TigerMarley – Where Customer Service and Fast Delivery Come First</h4>
              <p>
                When it comes to shopping for unique T-Shirts online,{" "}
                <strong>TigerMarley</strong> is the best online clothing store in India.
                Not only do we offer a vast collection of trendy and fashionable
                T-Shirts, but we also provide exceptional customer support and
                lightning-fast delivery that sets us apart from other T-Shirt stores.
              </p>

              <h4>
                Exceptional Customer Support and Lightning-Fast Delivery - That’s What
                Sets TigerMarley Apart
              </h4>
              <p>
                At <strong>TigerMarley</strong>, we believe our customers deserve the
                best, so we go the extra mile to provide excellent customer service.
                Our support team is always ready to assist you with any questions or
                concerns. We pride ourselves on providing personalized attention to
                every customer, ensuring you receive the best shopping experience
                possible.
              </p>

              <h4>Discover the Best Place to Buy Unique T-Shirts Online</h4>
              <p>
                When you shop at <strong>TigerMarley</strong>, you can be assured of the
                highest quality T-Shirts and outstanding service. Our unique T-Shirts
                are designed to make a statement, and our online store brings you the
                best in geeky, fun, and trendy styles. From minimalistic prints to bold
                graphics, you can choose from a wide range of options that match your
                vibe and personality.
              </p>

              <h4>
                Shop for T-Shirts, Hoodies, and More at TigerMarley – The Best Clothing
                Store Online
              </h4>
              <p>
                Looking for the perfect place to buy T-Shirts, hoodies, sweatshirts,
                crop tops, or plain T-Shirts for men and women at affordable prices?
                Look no further than <strong>TigerMarley</strong>, the best clothing
                store online. We offer an extensive range of high-quality clothing
                options that cater to all your fashion needs.
              </p>
              <p>
                Our collection has everything from funky Tie Dye T-Shirts to elegant
                hooded tops, from classic polo shirts to stylish full-sleeve T-Shirts.
                Whether you’re looking for something casual or formal,{" "}
                <strong>TigerMarley</strong> has something for everyone. We offer a
                wide variety of clothing options that suit all styles and budgets.
              </p>

              <h4>Save More with Discount Coupons</h4>
              <p>
                Who doesn’t love discounts? <strong>TigerMarley</strong> brings you
                exclusive deals and coupons to help you save big on your purchases. Use{" "}
                <b>WELCOME10</b> to get 10% off your first order, <b>SAVE40</b> to get
                40% off your next purchase, or <b>DEAL200</b> to save ₹200 when you buy
                3 or more items. We’re all about helping you shop smarter and save more.
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
                So next time you think about upgrading your wardrobe, think of{" "}
                <strong>TigerMarley</strong> — where fashion meets comfort, quality, and
                affordability. Join our growing community and experience the best online
                shopping for t-shirts and fashion wear in India.
              </p>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default UserShowcase;
