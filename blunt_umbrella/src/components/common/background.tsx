import React from "react";
import ProductDescription from "../ProductDescription";
// import OurPillars from "../OurPillars";
// import DoingBusiness from "../DoingBusiness";
import Modular from "../Modular";

function Sustainability() {
  
  return (
    <div className="relative z-10 bg-white min-h-screen font-bold leading-1">
      <ProductDescription /> 
      <Modular />
       {/* <OurPillars /> */}
      {/* <DoingBusiness />  */}
    </div>
  );
}

export default Sustainability;
