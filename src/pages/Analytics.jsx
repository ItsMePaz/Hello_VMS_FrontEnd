import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import BackLogoutBtn from "../components/BackLogoutBtn";
import WaveAnimation from "../components/WaveAnimation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PieChartModel from "../components/PieChartModel";
import PieChartModelLegends from "../components/PieChartModelLegends";
import visitorService from "../services/visitorService";

function Analytics({ visitorList }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  /*   const [visitorList, setVisitorList] = useState([]); */
  const [enrollmentQuantity, setEnrollmentQuantity] = useState("");
  const [interviewQuantity, setInterviewQuantity] = useState("");
  const [alumniVisitQuantity, setAlumniVisitQuantity] = useState("");
  const [parentVisitQuantity, setParentVisitQuantity] = useState("");
  const [reloadData, setReloadData] = useState("");

  /*  useEffect(() => {
    visitorService
      .getVisitors()
      .then((res) => {
        setVisitorList(res);

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  const listOfPurposeObject = {
    enrollment: "Enrollment",
    interview: "Interview",
    alumniVisit: "AlumniVisit",
    parentVisit: "ParentGuardianVisit",
  };

  /* Start of setting interview quantity */

  const interviewGroups = {
    interviewList: visitorList.filter(
      (obj) => obj.purposeOfEntry === listOfPurposeObject.interview
    ),
  };

  const interviewObject = interviewGroups.interviewList;
  const quantityInterview = interviewObject.length;

  useEffect(() => {
    setInterviewQuantity(quantityInterview);
  }, []);
  console.log(interviewQuantity);
  /* End of Setting Interview Quantity */

  /* Start of Setting Enrollment Quantity */

  const enrollmentGroups = {
    enrollmentList: visitorList.filter(
      (obj) => obj.purposeOfEntry === listOfPurposeObject.enrollment
    ),
  };

  const enrollmentObject = enrollmentGroups.enrollmentList;
  const quantity = enrollmentObject.length;

  useEffect(() => {
    setEnrollmentQuantity(quantity);
  }, []);
  console.log(enrollmentQuantity);
  /* End of Setting Enrollment Quantity */

  /* Start of Setting AlumniVisit Quantity */
  const alumniVisitGroups = {
    alumniVisitList: visitorList.filter(
      (obj) => obj.purposeOfEntry === listOfPurposeObject.alumniVisit
    ),
  };

  const alumniVisitObject = alumniVisitGroups.alumniVisitList;
  const alumniQuantity = alumniVisitObject.length;

  useEffect(() => {
    setAlumniVisitQuantity(alumniQuantity);
  }, []);
  console.log(alumniVisitQuantity);
  /* End of Setting AlumniVisitQuantity */

  /* Start of Setting Parent Visit Quantity */
  const parentVisitGroups = {
    parentVisitList: visitorList.filter(
      (obj) => obj.purposeOfEntry === listOfPurposeObject.parentVisit
    ),
  };

  const parentVisitObject = parentVisitGroups.parentVisitList;
  const parentQuantity = parentVisitObject.length;

  useEffect(() => {
    setParentVisitQuantity(parentQuantity);
  }, []);
  console.log(parentVisitQuantity);
  /* End of Setting Parent Quantity */

  useEffect(() => {
    if (window.localStorage.length === 0) navigate("/");
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);
  return (
    <div>
      <PageHeader bgColor=" tw-bg-[#FE54D9]" />
      <br />
      <PageTitle title="OVERALL ANALYTICS" />
      <br />
      <div className="tw-fixed tw-ml-[50%] tw-translate-x-[-45%] sm:tw-mt-[6vh] xl:tw-mt-[1vh]">
        {" "}
        <div className="tw-flex tw-tw-justify-center tw-mt-[-7em] tw-mb-[8em] ">
          <PieChartModelLegends />
          <PieChartModel
            enrollmentQuantity={enrollmentQuantity}
            interviewQuantity={interviewQuantity}
            alumniVisitQuantity={alumniVisitQuantity}
            parentVisitQuantity={parentVisitQuantity}
          />
        </div>
      </div>
      <div className="tw-mt-[35vh] tw-flex tw-justify-center">
        {" "}
        <div className="tw-bg-[#0088FE] tw-text-white tw-px-[5px] tw-rounded tw-ml-[1vh]">
          {enrollmentQuantity} Visitors
        </div>
        <div className="tw-bg-[#00C49F] tw-text-white tw-px-[5px] tw-rounded tw-ml-[1vh]">
          {interviewQuantity} Visitors
        </div>
        <div className="tw-bg-[#FFBB28] tw-text-white tw-px-[5px] tw-rounded tw-ml-[1vh]">
          {alumniVisitQuantity} Visitors
        </div>
        <div className="tw-bg-[#FF8042] tw-text-white tw-px-[5px] tw-rounded tw-ml-[1vh]">
          {parentVisitQuantity} Visitors
        </div>
      </div>
      <div className="tw-flex tw-justify-center">
        {" "}
        <div className="tw-mt-[1vh] tw-text-center tw-bg-[#000000] tw-text-white tw-px-[5px] tw-rounded tw-ml-[1vh] tw-w-[25vh] tw-z-[2500]">
          Total of{" "}
          {parentVisitQuantity +
            alumniQuantity +
            enrollmentQuantity +
            interviewQuantity}{" "}
          Visitors
        </div>{" "}
      </div>

      <BackLogoutBtn />
      <WaveAnimation />
    </div>
  );
}

export default Analytics;
