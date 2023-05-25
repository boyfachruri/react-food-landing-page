import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import product1 from "../Assets/asyraf-logo/product1.jpg";
import product2 from "../Assets/asyraf-logo/product2.jpg";
import product3 from "../Assets/asyraf-logo/product3.jpg";
import product4 from "../Assets/asyraf-logo/product4.jpg";
import product5 from "../Assets/asyraf-logo/product5.jpg";
import product6 from "../Assets/asyraf-logo/product6.jpg";
import product7 from "../Assets/asyraf-logo/product7.jpg";
import { AiFillStar } from "react-icons/ai";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Testimonial = () => {
  const product = [
    {
      nama: product1,
      title:"",
      deskripsi: "",
    },
    {
      nama: product2,
      title:"Roti Strawberry",
      deskripsi: "Roti dengan balutan gula tepung dengan selai strawberry didalamnya",
    },
    {
      nama: product3,
    },
    {
      nama: product4,
    },
    {
      nama: product5,
    },
    {
      nama: product6,
    },
    {
      nama: product7,
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="product-container">
        {product.map((item) => (
          <div className="product-container-card">
            <div className="product-card">
              <div className="product-image">
                <img src={item.nama} />
                <div className="product-info">
                  <h5 className="product-header-font">{item.title}</h5>
                  <h6 className="product-deskripsi-font">{item.deskripsi}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">What They Are Saying</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>John Doe</h2>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Testimonial;
