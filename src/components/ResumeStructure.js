import React from "react";
import { useSelector } from "react-redux";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function ResumeStructure() {
  const headerState = useSelector((state) => state.header);
  const educationState = useSelector((state) => state.education);
  const skillsState = useSelector((state) => state.skills);
  const experienceState = useSelector((state) => state.experience);
  const projectState = useSelector((state) => state.project);
  const summaryState = useSelector((state) => state.summary);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div className="flex flex-col gap-5 w-full h-full items-center justify-center">
      <button
        className="px-4 rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handlePrint}
      >
        Print this out!
      </button>

      {/* for desktop */}
      <div className="hidden sm:block " ref={componentRef}>
        <div className="page w-[21cm] min-h-[29.7cm] shadow-[0 0 5px rgba(0, 0, 0, 0.1)] rounded-md border border-slate-800 bg-slate-50">
          <div className="flex flex-col gap-5 p-[1cm]">
            {/* header */}
            <div className="flex flex-col gap-1 justify-center items-center border-b-2 border-slate-900 pb-2">
              <span className="text-2xl">
                <strong>
                  {headerState.fname}
                  {headerState.lname}
                </strong>
              </span>
              <span>Full Stack Developer</span>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-0.5 items-center text-sm roboto-medium">
                  <PhoneIcon className="w-4 h-4"></PhoneIcon>
                  {headerState.mobile}
                </div>
                <div className="flex flex-row gap-0.5 items-center text-sm roboto-medium">
                  📧
                  {headerState.email}
                </div>
              </div>
            </div>

            {/* summary */}
            <div className="flex flex-col gap-1">
              <div className="text-lg border-b-2 border-slate-900 roboto-bold">PROFESSIONAL SUMMARY:</div>
              <span className="text-sm text-gray-600">{summaryState.summary}</span>
            </div>

            {/* skills */}
            <div className="flex flex-col gap-1">
              <div className="text-lg border-b-2 border-slate-900 roboto-bold">TECHNICAL SKILLS:</div>
              <div className="grid grid-cols-3 gap-5 px-8 py-2">
                {skillsState.skills.map((item) => (
                  <div key={item} className="flex flex-row gap-5 items-center col-span-1 text-gray-600">
                    <span className="text-[7px] bg-gray-600 rounded-full w-2.5">&nbsp;</span>
                    <span className="text-sm text-gray-600"> {item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* experience */}
            <div className="flex flex-col gap-1">
              <div className="text-lg border-b-2 border-slate-900 roboto-bold">EXPERIENCE:</div>
              <div className="flex flex-col">
                <div className="roboto-bold">
                  <span>{experienceState.job_title}</span>&nbsp;–&nbsp;<span>{experienceState.employer}</span>
                </div>
                <span className="text-base">
                  {experienceState.city} ,{experienceState.country} &nbsp;
                  <span className="text-sm">
                    ({experienceState.start_date} &nbsp;–&nbsp; {experienceState.end_date})
                  </span>
                </span>
              </div>
              <ul className="text-sm text-gray-600 px-4">
                <li>Developed responsive and mobile-friendly web applications for optimal user experiences.</li>
                <li>Collaborated with backend developers to seamlessly integrate APIs and ensure smooth data flow. </li>
                <li>
                  Led frontend development for projects like Cube-Invoice and SPO Trading, implementing responsive
                  designs.
                </li>
                <li>Proficiently utilized GitHub for version control and collaborative development.</li>
              </ul>
            </div>

            {/* projects */}
            <div className="flex flex-col gap-1">
              <div className="text-lg border-b-2 border-slate-900 roboto-bold">PROJECTS:</div>
              <div>
                <span className="roboto-bold border-b-2 border-slate-900">{projectState.project_title}</span>
                &nbsp;({projectState.start_date} – {projectState.end_date})
              </div>
              <div className="roboto-bold">
                <span>Tech Stack :- </span>
                {projectState.tech_stack}
              </div>
              <div className="text-sm text-gray-600">{projectState.description}</div>
            </div>

            {/* education */}
            <div className="flex flex-col gap-1">
              <div className="text-lg border-b-2 border-slate-900 roboto-bold">EDUCATION:</div>
              <div>
                <span className="roboto-bold">{educationState.institute_name}</span>
                <span className="roboto-bold">&nbsp;|&nbsp;{educationState.degree}</span>
                <span className="roboto-bold">&nbsp;|&nbsp;{educationState.course}</span>
                <span className="roboto-bold">&nbsp;|&nbsp;{educationState.graduation_date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile devices */}
      <div className="sm:hidden">
        <div className="page w-[90vw] min-h-[70vh] shadow-[0 0 5px rgba(0, 0, 0, 0.1)] rounded-md border border-slate-800 bg-slate-50">
          <div className="flex flex-col gap-3 p-[0.5cm]">
            {/* header */}
            <div className="flex flex-col gap-1 justify-center items-center border-b-2 border-slate-900 pb-2">
              <span className="text-[0.6rem]">
                <strong>
                  {headerState.fname}
                  {headerState.lname}
                </strong>
              </span>
              <span className="text-[0.4rem]">Full Stack Developer</span>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-0.5 items-center text-[0.4rem] roboto-medium">
                  <PhoneIcon className="w-2 h-2"></PhoneIcon>
                  {headerState.mobile}
                </div>
                <div className="flex flex-row gap-0.5 items-center text-[0.4rem] roboto-medium">
                  📧
                  {headerState.email}
                </div>
              </div>
            </div>
            {/* summary */}
            <div className="flex flex-col gap-1">
              <div className="text-[0.45rem] border-b-2 border-slate-900 roboto-bold">PROFESSIONAL SUMMARY:</div>
              <span className="text-[0.35rem] text-gray-600">{summaryState.summary}</span>
            </div>
            {/* skills */}
            <div className="flex flex-col gap-1">
              <div className="text-[0.45rem] border-b-2 border-slate-900 roboto-bold">TECHNICAL SKILLS:</div>
              <div className="grid grid-cols-3 gap-2 px-4 py-1">
                {skillsState.skills.map((item) => (
                  <div key={item} className="flex flex-row gap-2 items-center col-span-1 text-gray-600">
                    <span className="text-[0.18rem] bg-gray-600 rounded-full w-[0.25rem]">&nbsp;</span>
                    <span className="text-[0.35rem]"> {item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* experience */}
            <div className="flex flex-col gap-1">
              <div className="text-[0.45rem] border-b-2 border-slate-900 roboto-bold">EXPERIENCE:</div>
              <div className="flex flex-col">
                <div className="text-[0.4rem] roboto-bold">
                  <span>{experienceState.job_title}</span>&nbsp;–&nbsp;<span>{experienceState.employer}</span>
                </div>
                <span className="text-[0.38rem]">
                  {experienceState.city} ,{experienceState.country} &nbsp;
                  <span>
                    ({experienceState.start_date} &nbsp;–&nbsp; {experienceState.end_date})
                  </span>
                </span>
              </div>
              <ul className="text-[0.35rem] px-2">
                <li>Developed responsive and mobile-friendly web applications for optimal user experiences.</li>
                <li>Collaborated with backend developers to seamlessly integrate APIs and ensure smooth data flow. </li>
                <li>
                  Led frontend development for projects like Cube-Invoice and SPO Trading, implementing responsive
                  designs.
                </li>
                <li>Proficiently utilized GitHub for version control and collaborative development.</li>
              </ul>
            </div>
            {/* projects */}
            <div className="flex flex-col gap-1">
              <div className="text-[0.45rem] border-b-2 border-slate-900 roboto-bold">PROJECTS:</div>
              <div className="flex flex-row">
                <span className="text-[0.4rem] roboto-bold border-b-2 border-slate-900">
                  {projectState.project_title}
                </span>
                <span className="text-[0.4rem]">&nbsp;</span>
                <span className="text-[0.4rem]">
                  ({projectState.start_date} – {projectState.end_date})
                </span>
              </div>
              <div className="text-[0.4rem] roboto-bold">
                <span>Tech Stack :- </span>
                {projectState.tech_stack}
              </div>
              <div className="text-[0.35rem]">{projectState.description}</div>
            </div>
            {/* education */}
            <div className="flex flex-col gap-1">
              <div className="text-[0.45rem] border-b-2 border-slate-900 roboto-bold">EDUCATION:</div>
              <div className="text-[0.39rem]">
                <span className="roboto-bold">{educationState.institute_name}</span>
                <span className="roboto-bold">&nbsp;|&nbsp;{educationState.degree}</span>
                <span className="roboto-bold">&nbsp;|&nbsp;{educationState.course}</span>
                <span className="roboto-bold">&nbsp;|&nbsp;{educationState.graduation_date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
