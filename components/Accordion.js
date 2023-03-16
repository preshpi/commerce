import React, { useState } from "react";
import Product from "./Product";
import PriceRangeSlider from "./PriceRange";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Accordion = ({ price }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <p>Filter By:</p>
      <p></p>
      {/* <Collapse>
        <Panel header="Price" key="1">
          <p>yes!</p>
        </Panel>
      </Collapse>
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
            <PriceRangeSlider />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Accordion;
