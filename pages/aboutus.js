import Head from "next/head";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SlDiamond } from "react-icons/sl";
import Footer from "../components/Footer";
import { Collapse } from "antd";
const { Panel } = Collapse;

const AboutUs = () => {
  return (  
    <>
      <Head>
        <title> FlairStyle | About</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <div className="w-[80%] mx-auto mb-3 p-3 flex items-center gap-2 text-sm mt-5">
        <span className="hover:underline text-gray-500">
          <Link href="/">Home </Link>
        </span>

        <span>
          <MdOutlineKeyboardArrowRight />
        </span>

        <span className="font-[700]">about</span>
      </div>

      <div className="w-[80%] mx-auto mt-[3%]">
        <div className="grid lg:grid-cols-2 items-center justify-center">
          <div className="justify-center flex ">
            <p className="lg:text-5xl text-3xl font-bold text-center bg-teal-100 px-6 py-1.5">
              ABOUT US
            </p>
          </div>
          <p className="text-justify lg:mt-0 mt-6 text-[16px]">
            FlairStyle is a leading e-commerce platform that offers unique and
            trendy fashion items for both men and women. With a focus on
            affordability and accessibility, we use our expertise to provide
            high-quality fashion products that cater to your needs.{" "}
            <span className="italic font-[600]">
              We are available in 10 countries, including Nigeria,
            </span>{" "}
            and strive to make the latest fashion trends accessible to everyone,
            regardless of their location or budget. At FlairStyle, we are
            passionate about empowering our customers to express their
            individuality through fashion, and we are committed to providing a
            seamless online shopping experience.
          </p>
        </div>

        <div className="text-center mt-[15%]">
          <div className="justify-center flex">
            <p className="lg:text-4xl md:text-3xl text-2xl font-bold text-center px-6 py-1.5 uppercase  bg-teal-100 ">
              what we offer
            </p>
          </div>
          <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-[30px] place-items-center justify-center mt-[5%]">
            <li className="grid place-items-center justify-center w-50 h-50">
              <CiDeliveryTruck className="text-5xl" />
              <p className="text-xl mt-3 ">Returns & Delivery</p>
            </li>
            <li className="grid place-items-center justify-center w-50 h-50">
              <RiCustomerService2Fill className="text-5xl" />
              <p className="text-xl mt-3">Customer care</p>
            </li>
            <li className="grid place-items-center justify-center w-50 h-50">
              <SlDiamond className="text-5xl" />
              <p className="text-xl mt-3">affordability & High Quality</p>
            </li>
            <li className="grid place-items-center justify-center w-50 h-50">
              <CiDiscount1 className="text-5xl" />
              <p className="text-xl mt-3">Discount & Free Delivery</p>
            </li>
          </ul>
        </div>

        <div className="mt-[15%]">
          <div className="justify-center flex">
            <p className="lg:text-4xl text-2xl md:text-3xl font-bold text-center px-6 py-1.5 uppercase  bg-teal-100 ">
              Frequently Asked Questions
            </p>
          </div>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            size="large"
            className="w-[80%] mx-auto lg:mt-[5%] mt-[12%] mb-[10%]"
          >
            <Panel header="What payment methods do you accept?" key="1">
              <p
                style={{
                  paddingLeft: 24,
                }}
              >
                <span>
                  We accept Visa, PayPal, and Mastercard. We understand that our
                  customers prefer different payment options, so we try to
                  provide a variety of choices to make your shopping experience
                  as convenient as possible.
                </span>
              </p>
            </Panel>
            <Panel
              header="What is your social media presence and where can I find you?"
              key="2"
            >
              <p
                style={{
                  paddingLeft: 24,
                }}
              >
                <span>
                  {" "}
                  You can find us on TikTok and Instagram. We love connecting
                  with our customers on social media, and we often share
                  exclusive promotions and product updates there. Follow us to
                  stay up to date with the latest trends, behind-the-scenes
                  sneak peeks, and more!
                </span>
              </p>
            </Panel>
            <Panel header="Do you offer free shipping?" key="3">
              <p
                style={{
                  paddingLeft: 24,
                }}
              >
                <span>
                  Yes, we do offer free shipping! However, please note that our
                  free shipping option may take up to 14 days for delivery. If
                  you need your products sooner, we also offer expedited
                  shipping for an additional fee. We want to provide our
                  customers with affordable and convenient shipping options, so
                  you can choose what works best for you.
                </span>
              </p>
            </Panel>
            <Panel
              header="What is your customer service contact information?"
              key="4"
            >
              <p
                style={{
                  paddingLeft: 24,
                }}
              >
                <span>
                  You can reach our customer service team via email at{" "}
                  <span className="font-bold">
                    <a href="mailto:ijeomaegwuenu22@gmail.com">
                      flairstyle@gmail.com
                    </a>
                  </span>{" "}
                  or by phone at{" "}
                  <span className="font-bold">
                    <a tel="+2349051204810">+2349051204810</a>
                  </span>{" "}
                  .We&apos;re here to help answer any questions or concerns you may
                  have, so don&apos;t hesitate to get in touch with us. We strive to
                  provide excellent customer service and want to ensure that you
                  have a positive experience shopping with us.
                </span>
              </p>
            </Panel>
            <Panel header="What is your return policy?" key="5">
              <p
                style={{
                  paddingLeft: 24,
                }}
              >
                Our return policy is designed to make your shopping experience
                as worry-free as possible. We understand that sometimes things
                don&apos;t work out, and we want to make sure you&apos;re satisfied with
                your purchase.
              </p>

              <p
                className="mt-4"
                style={{
                  paddingLeft: 24,
                }}
              >
                If you&apos;re not completely happy with your order, you may return
                it for a full refund within 30 days of the delivery date. Please
                note that items must be in new and unused condition with all
                original tags and packaging.
              </p>

              <p
                className="mt-4"
                style={{
                  paddingLeft: 24,
                }}
              >
                To initiate a return, please contact our customer service team
                via email or phone with your order number and reason for return.
                We&apos;ll provide you with instructions on how to return your item
                and issue your refund once we receive and process your return.
                Please see our website for more details on our return policy.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
