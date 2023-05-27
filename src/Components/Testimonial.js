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
import Footer from "./Footer";

const Testimonial = () => {
  const product = [
    {
      nama: product1,
      title:"Roti Almond",
      deskripsi: "Roti dengan dibaluti almond yang gurih",
    },
    {
      nama: product2,
      title:"Roti Strawberry",
      deskripsi: "Roti dengan balutan gula tepung dengan selai strawberry didalamnya",
    },
    {
      nama: product3,
      title:"Roti Choco Banana",
      deskripsi: "Roti dengan balutan meses coklat dengan buah pisang didalamnya",
    },
    {
      nama: product4,
      title:"Roti Pizza",
      deskripsi: "Roti isi daging perpaduan cita rasa indonesia dan italia",
    },
    {
      nama: product5,
      title:"Roti Mexican",
      deskripsi: "Roti dengan aroma dan rasa kopi yang nikamt",
    },
    {
      nama: product6,
      title:"Roti Choco Lava",
      deskripsi: "Roti dengan adonan coklat dan berisi coklat yang meleleh dimulut",
    },
    {
      nama: product7,
      title:"Roti Sosis",
      deskripsi: "Roti dengan baluran saus dan sosis yang menempel ditengahnya",
    },
  ];

  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default Testimonial;
