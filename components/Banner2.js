const Banner2 = () => {
  return (
    <div className="mt-[5%] flex flex-col items-center justify-center bg-[#222] p-5 h-40">
      <div className="glitch-wrapper lg:text-5xl text-3xl">
        <div className="glitch" data-glitch="Save up to 60%">
          Save up to 60%
        </div>
      </div>
      <button className="lg:px-6 lg:py-3 px-3 py-2 text-white hover:text-black border-2 mt-5 hover:bg-[#eee] hover:border-black transistion-color duration-300">
        SHOP NOW
      </button>
    </div>
  );
};

export default Banner2;
