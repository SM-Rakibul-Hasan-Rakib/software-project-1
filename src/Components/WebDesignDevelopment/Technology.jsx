import img from "../../assets/images/software_logo.jpg";
const Technology = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 py-20">
      <h1 className="text-center text-3xl text-blue-700 font-bold">
        USING TECHNOLOGY FOR PROFESSIONAL DEVELOPMENT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-6 items-center justify-center gap-4">
        <div className="p-6 border flex flex-col gap-4">
          <img src={img} alt="" />
          <p className="text-xl font-bold text-center">hotel software</p>
        </div>
        <div className="p-6 border flex flex-col gap-4">
          <img src={img} alt="" />
          <p className="text-xl font-bold text-center">hotel software</p>
        </div>
        <div className="p-6 border flex flex-col gap-4">
          <img src={img} alt="" />
          <p className="text-xl font-bold text-center">hotel software</p>
        </div>
        <div className="p-6 border flex flex-col gap-4">
          <img src={img} alt="" />
          <p className="text-xl font-bold text-center">hotel software</p>
        </div>
        <div className="p-6 border flex flex-col gap-4">
          <img src={img} alt="" />
          <p className="text-xl font-bold text-center">hotel software</p>
        </div>
        <div className="p-6 border flex flex-col gap-4">
          <img src={img} alt="" />
          <p className="text-xl font-bold text-center">hotel software</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
