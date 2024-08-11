import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { MdCancelPresentation, MdOutlineVideoLibrary } from "react-icons/md";
import PurchaseAlert from "../../ui/modal/PurchaseAlert";
import GitTeacherDetails from "../../Hooks/teacher/GitTeacherDetails";
import GitLecture from "../../Hooks/student/GitLecture";
import BuyLecture from "../../Hooks/student/BuyLecture";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import GitMonthes from "../../Hooks/student/GitMonths";
import LectureCard from "../../components/teacher/LectureCard";
import Loading from "../../components/loading/Loading";

const TeacherDetails = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [selectedLecture, setSelectedLecture] = useState(null);

  // Fetch teacher details, lectures, and months
  const [teacherLoading, teacher] = GitTeacherDetails();
  const [lectureLoading, lectures] = GitLecture({ id });
  const [monthes, monthesLoading] = GitMonthes({ id });
  const [buyLoading, buyLecture, buyMonth] = BuyLecture();

  // Display loading spinner if data is being fetched
  if (teacherLoading || lectureLoading || monthesLoading) {
    return <Loading message="جاري تحميل البيانات..." />;
  }

  // Handle case when teacher is not found
  if (!teacher || teacher.teacher.length === 0) {
    return (
      <div className="mt-[150px] text-center" style={{ minHeight: "70vh" }}>
        <div className="h-[200px] w-[90%] m-auto border shadow flex justify-center items-center">
          <p className="font-bold">هذا المدرس غير موجود على الموقع</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[80px]">
      <div className="mx-auto mb-[50px] w-[95%]">
        <div className="my-5">
          <h1
            className="font-bold text-3xl flex text-blue-500 my-3"
            style={{ fontSize: "50px" }}
          >
            <MdOutlineVideoLibrary className="m-1 mx-2 text-red-500" />
            كل الكورسات
          </h1>
        </div>
        <div>
          {teacher.months && teacher.months.length > 0 ? (
            <div
              className="flex flex-wrap justify-center my-3 bg-white w-[95%] m-auto p-3 md:justify-start"
              style={{ borderRadius: "20px" }}
            >
              {teacher.months.map((lecture) => (
                <LectureCard
                  key={lecture.id}
                  lecture={lecture}
                  onOpen={onOpen}
                  setSelectedLecture={setSelectedLecture}
                />
              ))}
            </div>
          ) : (
            <div
              className="h-[200px] flex justify-center items-center bg-white"
              style={{ borderRadius: "20px" }}
            >
              <h1 className="font-bold flex text-xl text-black">
                <MdCancelPresentation className="text-red-500 m-2" />
                لا يوجد كورسات الآن، سوف يتم إضافتها في أقرب وقت ممكن.
              </h1>
            </div>
          )}
        </div>
      </div>
      <PurchaseAlert
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        selectedLecture={selectedLecture}
        buyLoading={buyLoading}
        buyMonth={buyMonth}
      />
      <ScrollToTop />
    </div>
  );
};

export default TeacherDetails;
