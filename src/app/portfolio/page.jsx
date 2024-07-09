import CommonNav from "@/Components/CommonNav";
import Banner from "@/Components/Portfolio/Banner";
import OurProduct from "@/Components/Portfolio/OurProduct";
import ProductDetails from "@/Components/Portfolio/ProductDetails";

const Portfolio = () => {
  return (
    <div className="justify-center items-center">
      <Banner
        title={"Company Portfolio"}
        subTitle={"FEW WORK BY US"}
        // data={data.portfolio_banner_ul_data}
      />
      <CommonNav
        title={"Custom Software Development Company in Bangladesh"}
        link={"Contact"}
      />
      <OurProduct />
      <ProductDetails />
    </div>
  );
};

export default Portfolio;
