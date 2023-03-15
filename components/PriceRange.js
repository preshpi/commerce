import { useState } from "react";

function PriceRangeSlider() {
  const [minPrice, setMinPrice] = useState(3);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleMinPriceChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
      <input
        type="range"
        min="3"
        max="2000"
        value={minPrice}
        onChange={handleMinPriceChange}
        className="h-3 bg-indigo-500 rounded-full appearance-none w-full"
      />
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500">{minPrice}$</span>
        <span className="text-sm font-medium text-gray-500">{maxPrice}$</span>
      </div>
      <input
        type="range"
        min="3"
        max="2000"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="h-3 bg-indigo-500 rounded-full appearance-none w-full"
      />
    </div>
  );
}

export default PriceRangeSlider;
