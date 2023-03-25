import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { useState } from "react";

const FavouriteButton = () => {
  
  const [isChecked, setIsChecked] = useState(false);
  const handleIconClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div onClick={handleIconClick}>
      {isChecked ? (
        <HiHeart
          size={20}
          className="text-[red] hover:scale-75 transition-all duration-300"
        />
      ) : (
        <HiOutlineHeart
          size={20}
          className="hover:scale-125 transition-all duration-300"
        />
      )}
    </div>
  );
};

export default FavouriteButton;
