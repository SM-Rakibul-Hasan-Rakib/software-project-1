import { data } from "../../../assets/Data";
import CommonNav from "../../../Components/CommonNav";
import HotelManagementDetails from "../../../Components/HotelManagement/HotelManagementDetails";
import Banner from "../../../Components/Portfolio/Banner";
import WebDesignFeatures from "../../../Components/WebDesignDevelopment/WebDesignFeatures";

const WebDesignDevelopment = () => {
  const cards = [
    {
      title: "Responsive Web Design",
      subtitle: "Set any Devices",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
    },
    {
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
    },
    {
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
    },
    {
      title: "E-commerce Solutions",
      subtitle: "Online Shopping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
    },
    {
      title: "Cloud Computing",
      subtitle: "Scalable Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
    },
    {
      title: "Blockchain Technology",
      subtitle: "Decentralized Systems",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
    },
  ];
  const desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque libero alias, sunt dolor animi ipsum sint explicabo nihil iure  accusamus, atque non quibusdam, ratione assumenda aspernatu'

  return (
    <div>
      <Banner
        title={"Reliable Web Design and Development Company BD"}
        subTitle={"WE OFFER"}
        data={data.hotel_management_banner_ul_data}
      />
      <CommonNav
        title={"Best Website Design Company in Bangladesh"}
        link={"Pricing Package"}
      />
      <HotelManagementDetails />

      <WebDesignFeatures title={"Web Feature"} desc={desc} cards={cards} />
    </div>
  );
};

export default WebDesignDevelopment;
