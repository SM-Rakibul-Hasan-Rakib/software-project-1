import Image from "next/image";
// import img from "../../assets/images/software_logo.jpg";

const OurProduct = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col gap-10 py-20">
        {/* title */}
        <div className="text-center flex flex-col gap-2">
          <h3 className="text-4xl font-bold">Our Product</h3>
          <p className="text-xl">The best Software for global market.</p>
        </div>
        {/* products */}
        <div className="grid md:grid-cols-3 px-10 grid-cols-1 lg:grid-cols-5  gap-5">
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
          <div className="p-6 border flex flex-col gap-4">
            <Image
              width={96}
              height={96}
              src={"/software_logo.jpg"}
              className="max-w-96 m-5 rounded-sm"
              alt=""
            />
            <p className="text-xl font-bold text-center">hotel software</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
