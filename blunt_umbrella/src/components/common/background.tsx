import React from "react";
import ProductDescription from "../ProductDescription";
import Modular from "../Modular";
import Radial from "../Radial";
import CollaborationSection from "../CollaborationSection";
import OurProductSection from "../OurProductSection";
import BottomSection from "../BottomSection";
import VariantBar from "../VariantBar";

const variants = [
  {
    id: 1,
    label: "Woodland Camo",
    image: "//bluntumbrellas.com/cdn/shop/files/Woodland_Camo_Swatch_2.jpg?v=1731016448",
    price: "$114.00",
    inStock: true, 
  },
 
];

function Sustainability() {
  return (
    <div className="relative z-10 bg-white min-h-screen font-blunt">
     
      <ProductDescription />
      <Modular />
      <Radial />
      <CollaborationSection />
      <OurProductSection />
      <BottomSection />

      
      <VariantBar title="Classic" variants={variants} />
    </div>
  );
}

export default Sustainability;
