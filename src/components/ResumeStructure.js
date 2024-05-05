import React from "react";
import { useSelector } from "react-redux";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function ResumeStructure() {
  const state = useSelector((state) => state);
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
      <div className="book" ref={componentRef}>
        <div className="page w-[21cm] min-h-[29.7cm] shadow-[0 0 5px rgba(0, 0, 0, 0.1)] rounded-md border border-slate-800 bg-slate-50">
          <div className="flex flex-col gap-5 p-[1cm]">
            {/* header */}
            <div className="flex flex-col gap-1 justify-center items-center border-b-2 border-slate-900 pb-2">
              <span className="text-2xl">
                <strong>
                  {state.header.fname}
                  {state.header.lname}
                </strong>
              </span>
              <span>Full Stack Developer</span>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-0.5 items-center text-sm roboto-medium">
                  <PhoneIcon className="w-4 h-4"></PhoneIcon>
                  {state.header.mobile}
                </div>
                <div className="flex flex-row gap-0.5 items-center text-sm roboto-medium">
                  📧
                  {state.header.email}
                </div>
              </div>
            </div>

            {/* summary */}
            <div className="flex flex-col gap-1">
              <div className="text-lg border-b-2 border-slate-900 roboto-bold">PROFESSIONAL SUMMARY:</div>
              <span className="text-sm text-gray-600">{state.summary.summary}</span>
            </div>

            {/* skills */}
            <div className="flex flex-col gap-1">
              <div className="text-lg border-b-2 border-slate-900 roboto-bold">TECHNICAL SKILLS:</div>
              <div className="grid grid-cols-3 gap-5 px-8 py-2">
                {state.skills.skills.map((item) => (
                  <div key={item} className="flex flex-row gap-5 items-center col-span-1 text-gray-600">
                    <span className="text-[7px] bg-gray-600 rounded-full w-2.5">&nbsp;</span>
                    <span className="text-sm"> {item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* experience */}
            <div className="flex flex-col gap-1">
              <div className="text-lg border-b-2 border-slate-900 roboto-bold">EXPERIENCE:</div>
              <div className="flex flex-col">
                <div className="roboto-bold">
                  <span>{state.experience.job_title}</span>&nbsp;–&nbsp;<span>{state.experience.employer}</span>
                </div>
                <span className="text-base">
                  {state.experience.city} ,{state.experience.country} &nbsp;
                  <span className="text-sm">
                    ({state.experience.start_date} &nbsp;–&nbsp; {state.experience.end_date})
                  </span>
                </span>
              </div>
              <ul className="px-4">
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
                <span className="roboto-bold border-b-2 border-slate-900">{state.project.project_title}</span>
                &nbsp;({state.project.start_date} – {state.project.end_date})
              </div>
              <div className="roboto-bold">
                <span>Tech Stack :- </span>
                {state.project.tech_stack}
              </div>
              <div>{state.project.description}</div>
            </div>

            {/* education */}
            <div className="flex flex-col gap-1">
              <div className="text-lg border-b-2 border-slate-900 roboto-bold">EDUCATION:</div>
              <div>
                <span className="roboto-bold">{state.education.institute_name}</span>
                <span className="roboto-bold">&nbsp;|&nbsp;{state.education.degree}</span>
                <span className="roboto-bold">&nbsp;|&nbsp;{state.education.course}</span>
                <span className="roboto-bold">&nbsp;|&nbsp;{state.education.graduation_date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
