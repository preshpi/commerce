import { useState } from "react";

const PriceSlider = () => {
  const [value, setValue] = useState(100);
  const [showValue, setShowValue] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setShowValue(true);
  };

  const handleInputBlur = () => {
    setShowValue(false);
  };

  const slideValueStyle = {
    left: `${value / 2}%`,
  };

  return (
    <div className="grid place-items-center justify-center">
      <div className="bg-[red] w-[40px] h-[30px] mx-auto">
        <center>
          <span
            className={
              showValue ? "mx-auto w-[300px] bg-[pink] text-center" : ""
            }
          >
            {value}
          </span>
        </center>
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <span>0</span>
        <input
          type="range"
          min="0"
          max="200"
          step="1"
          className="w-[300px] range"
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <span>200</span>
      </div>
      <style jsx>{`
        .show {
          display: block;
          position: absolute;
          left: ${slideValueStyle.left};
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

export default PriceSlider;
