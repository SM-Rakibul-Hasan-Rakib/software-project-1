/* eslint-disable react/prop-types */
import { HiOutlineChevronRight } from "react-icons/hi";
// import img from "../../assets/images/portfolio_banner.jpg";
// import { Link } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";

const portfolio_banner_ul_data = [
  {
    title: "Website Design and Development",
    link: "/website-design-development",
  },
  { title: "Hotel Management Software", link: "/hotel-management-software" },
  { title: "Enterprise Resource System", link: "" },
  { title: "Point Of Sales (POS)", link: "" },
  { title: "Website Design And Development", link: "" },
  { title: "Customer Relationship Management-CRM", link: "" },
];

const Banner = ({ title, subTitle, data }) => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <Image
        src={"/portfolio_banner.jpg"}
        width={750}
        height={750}
        alt="Background Image"
        className="absolute inset-0 w-full h-[750px] object-cover filter"
      />
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative max-w-7xl bottom-24 mx-auto px-6 py-12 lg:p-20 bg-gray-200 bg-opacity-80 rounded-lg shadow-lg">
        <h3 className="text-3xl lg:text-4xl font-bold  text-black mb-4">
          {title}
        </h3>
        <p className="text-lg lg:text-xl  text-black font-bold mb-8">
          {subTitle}
        </p>
        <div className="border-t-2 border-gray-200 mb-8"></div>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {portfolio_banner_ul_data.map((item, inx) => (
            <li key={inx} className="flex items-start">
              <HiOutlineChevronRight className="mt-1 mr-2 text-black" />
              <Link
                href={item.link}
                className="text-base lg:text-lg text-black"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className=" text-white text-xl  bg-blue-700 mt-8 py-3 px-6">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
