import React, { useState } from "react";
import Product from "./Product";
import PriceRangeSlider from "./PriceRange";

const Accordion = ({ price }) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex justify-between p-5 text-xl font-bold"
        >
          <h1 className="text-black">{price}</h1>
          <p>{isActive ? "-" : "+"}</p>
        </div>

        {isActive && (
          <div className="p-5">
            <p>I&apos;m opened</p>
          </div>
        )}
      </div>

      <div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex justify-between p-5 text-xl font-bold"
        >
          <h1>Title</h1>
          <p>{isActive ? "-" : "+"}</p>
        </div>

        {isActive && (
          <div className="p-5">
            <p>I&apos;m opened</p>
          </div>
        )}
      </div>

      <div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex justify-between p-5 text-xl font-bold"
        >
          <h1>Price</h1>
          <p>{isActive ? "-" : "+"}</p>
        </div>

        {isActive && (
          <div className="p-5">
            <PriceRangeSlider/>
          </div>
        )}
      </div>
          {/* <Product {...product} /> */}

    </div>
  );
};

export default Accordion;
