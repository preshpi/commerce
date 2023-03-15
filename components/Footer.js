import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[80px] bg-[#222] text-white mt-[4%] grid grid-cols-4 place-items-center justify-between text-x font-[400]">
      <a
        href="mailto:ijeomaegwuenu22@gmail.com"
        className="cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300"
      >
        Contact us
      </a>
      <Link
        href="/aboutus"
        className="cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300"
      >
        About FlairStyle{" "}
      </Link>
      <p className="lg:animate-pulse">© 2023 FlairStyle All rights reserved.</p>
      <ul className="flex space-x-6 items-center justify-center">
        <li className="w-[50px] cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300">
          <Image
            src="https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png"
            alt="mastercard"
            width={300}
            height={300}
            loading="lazy"
          />
        </li>
        <li className="w-[50px] cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300">
          <Image
            src="https://img.ltwebstatic.com/images2_pi/2018/06/06/15282733431754785346.png"
            alt="paypal"
            width={300}
            height={300}
            loading="lazy"
          />
        </li>
        <li className="w-[50px] cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300">
          <Image
            src="https://img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png"
            alt="visa"
            width={300}
            height={300}
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
