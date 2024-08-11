import { Fade, Zoom } from "react-awesome-reveal";
const SectionFour = () => {
  return (
    <div
      dir="ltr"
      className="  my-9 p-3 bg-blue-500 "
      style={{
        borderTopLeftRadius: "100px",
        borderBottomLeftRadius: "100px",
      }}
    >
      <div className="w-[95%] h-[350px] m-auto md:flex justify-between items-center">
        <div>
          <Zoom>
            <img src="شعار الدكتور.png" className="h-[300px] m-auto" />
          </Zoom>
        </div>
        <div className="text-center">
          <Fade bottom>
            <h1 className="big-font text-5xl text-white">
              المواد الفلسفية اسهل مع د / محمد على
            </h1>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
