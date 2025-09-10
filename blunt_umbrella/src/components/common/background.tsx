import React from "react";
import ProductDescription from "../ProductDescription";
// import OurPillars from "../OurPillars";
// import DoingBusiness from "../DoingBusiness";
import Modular from "../Modular";
import Radial from "../Radial"
import CollaborationSection from "../CollaborationSection";
import OurProductSection from "../OurProductSection"

function Sustainability() {
  
  return (
    <div className="relative z-10 bg-white min-h-screen font-bold leading-1">
      <ProductDescription /> 
      <Modular />
      <Radial />
      <CollaborationSection />
    <OurProductSection />
       {/* <OurPillars /> */}
      {/* <DoingBusiness />  */}
    </div>
  );
}

export default Sustainability;
