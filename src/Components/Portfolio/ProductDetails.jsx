import Image from "next/image";
// import img from "../../assets/images/software_logo.jpg";
const ProductDetails = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col p-10 gap-16">
        {/* card */}
        <div className="card relative bg-gray-100 p-6 rounded-lg">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
          <h3 className="text-2xl font-bold mb-4">
            Customized Project and Special Works by - SOFTTASK
          </h3>
          <p className="text-lg text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            justo rutrum, tristique tortor in, bibendum risus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam nec justo rutrum,
            tristique tortor in, bibendum risus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam nec justo rutrum, tristique
            tortor in, bibendum risus.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* image description */}
          <div className="flex justify-center md:justify-start">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
          </div>
          {/* text description */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-7">
              Online Health help service app and Website - Telemedicine service
              system.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              accusantium alias iusto animi quibusdam id tempora exercitationem
              dolorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt voluptate voluptates, repudiandae qui, harum maxime
              maiores sint nam sunt ad repellat quae aliquam veritatis, totam
              officia. Ea ab vero omnis? magnam? Maiores dolor autem ratione.
              Alias, quos. Enim amet ipsa esse recusandae? Laudantium fuga
              repellendus, adipisci commodi fugit recusandae vitae. Fugiat
              perferendis ut saepe distinctio harum, nisi impedit dignissimos,
              quibusdam repellat veniam, facere incidunt.
            </p>
          </div>
        </div>

        <div className="flex  flex-col-reverse md:flex-row gap-10 items-start">
          {/* text description */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-7">
              Online Health help service app and Website - Telemedicine service
              system.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              accusantium alias iusto animi quibusdam id tempora exercitationem
              dolorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt voluptate voluptates, repudiandae qui, harum maxime
              maiores sint nam sunt ad repellat quae aliquam veritatis, totam
              officia. Ea ab vero omnis? magnam? Maiores dolor autem ratione.
              Alias, quos. Enim amet ipsa esse recusandae? Laudantium fuga
              repellendus, adipisci commodi fugit recusandae vitae. Fugiat
              perferendis ut saepe distinctio harum, nisi impedit dignissimos,
              quibusdam repellat veniam, facere incidunt.
            </p>
          </div>
          {/* image description */}
          <div className="flex justify-center md:justify-start">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* image description */}
          <div className="flex justify-center md:justify-start">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
          </div>
          {/* text description */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-7">
              Online Health help service app and Website - Telemedicine service
              system.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              accusantium alias iusto animi quibusdam id tempora exercitationem
              dolorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt voluptate voluptates, repudiandae qui, harum maxime
              maiores sint nam sunt ad repellat quae aliquam veritatis, totam
              officia. Ea ab vero omnis? magnam? Maiores dolor autem ratione.
              Alias, quos. Enim amet ipsa esse recusandae? Laudantium fuga
              repellendus, adipisci commodi fugit recusandae vitae. Fugiat
              perferendis ut saepe distinctio harum, nisi impedit dignissimos,
              quibusdam repellat veniam, facere incidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
