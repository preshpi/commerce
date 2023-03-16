import { useState } from "react";

function PriceRangeSlider() {
  const [minPrice, setMinPrice] = useState(3);

  const handleMinPriceChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
      <input
        type="range"
        min="3"
        max="2000"
        onChange={handleMinPriceChange}
        className="h-3 bg-indigo-500 rounded-full appearance-none w-full"
      />
      <div className="flex justify-center items-center">
        <span className="text-sm font-medium text-gray-500">${minPrice} - $2000 </span>
      </div>
    </div>
  );
}

export default PriceRangeSlider;
