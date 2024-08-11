import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Zoom, Fade } from "react-awesome-reveal";
const SectionThree = () => {
  return (
    <div className="my-[70px]">
      <div className="w-[90%] m-auto md:flex justify-between">
        <div className="">
          <div className="flex justify-center">
            <h1 className="fonts font-bold text-xl">
              {" "}
              نبذة مختصرة عن دكتور محمد على{" "}
            </h1>
          </div>

          <div className="mt-[50px]">
            <UnorderedList>
              <Zoom>
                <ListItem className="font-bold m-1">
                  حاصل على ماجستير الاداب فى الفلسفة
                </ListItem>
                <ListItem className="font-bold m-1">
                  حاصل على دبلوم علم النفس التربوى
                </ListItem>
                <ListItem className="font-bold m-1">
                  صاحب قناة الدكتور محمد على علي اليوتيوب
                </ListItem>
              </Zoom>
            </UnorderedList>
          </div>
        </div>

        <div>
          <Fade>
            <img
              src="Modern Stationary Page Border.png"
              className="h-[250px]"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
