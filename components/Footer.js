import Link from "next/link";

const Footer = () => {
  return (
    <div className="lg:h-[80px] md:h-[100px] h-[100px] bg-[#222] text-white mt-[4%] grid lg:grid-cols-3 md:grid-cols-2  place-items-center  md:justify-between  text-x font-[400]">
      <div>
        <Link
          href="/aboutus"
          className="cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300"
        >
          About FlairStyle{" "}
        </Link>
      </div>

      <div>
        <p className="lg:animate-pulse text-center w-[300px]">
          © 2023 FlairStyle.
        </p>
      </div>

      <div>
        <a
          href="mailto:ijeomaegwuenu22@gmail.com"
          className="cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300"
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Footer;
