import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../redux";
import skillList from "../models/skillsList";

export default function Skills({ setProgress }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [skillsInput, setSkillsInput] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [skillsArr, setSkillsArr] = useState(useSelector((state) => state.skills.skills));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputRef = useRef(null);

  const initialVal = {
    skills: ""
  };

  const handleSkillChange = (e) => {
    const input = e.target.value;
    setSkillsInput(input);

    // Filter the skillList based on user input
    const newFilteredSkills = skillList.filter((skill) => skill.toLowerCase().includes(input.toLowerCase()));

    setFilteredSkills(newFilteredSkills);
  };

  const handleAddSkill = (skill) => {
    // Add the skill to the skillsArr if it doesn't already exist
    if (!skillsArr.includes(skill)) {
      setSkillsArr((prevSkills) => [...prevSkills, skill]);
    }

    setSkillsInput(""); // Clear the input field
    setFilteredSkills([]); // Clear the filtered skills
    setIsSubmitted(false);
  };

  const handleRemoveSkill = (skill) => {
    // Remove the skill from the skillsArr
    setSkillsArr((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  // Handle click outside to close autocomplete
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setFilteredSkills([]); // Clear filtered skills when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <span className="roboto-bold text-3xl">Let’s note down your top skills.</span>
      <Formik
        initialValues={initialVal}
        onSubmit={() => {
          if (skillsArr.length < 5) {
            setIsSubmitted(true); // Set error state if fewer than 5 skills
          } else {
            dispatch(setSkills(skillsArr));
            setProgress();
            navigate("/experience");
          }
        }}
        className="mt-5"
      >
        <Form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Skills</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Add languages, frameworks, or tools that you are good with.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-x-6 gap-y-8">
                <div className="col-span-1">
                  <label htmlFor="skills" className="block text-sm font-medium leading-6 text-gray-900">
                    Skill
                  </label>
                  <div className="mt-2 relative" ref={inputRef}>
                    <input
                      type="text"
                      value={skillsInput}
                      onChange={handleSkillChange}
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />

                    {/* Display autocomplete options */}
                    {filteredSkills.length > 0 && (
                      <div className="absolute mt-2 z-10 w-full border border-gray-200 bg-white shadow-sm rounded-md">
                        {filteredSkills.map((skill, index) => (
                          <div
                            key={index}
                            onClick={() => handleAddSkill(skill)}
                            className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Error message if form is submitted with fewer than 5 skills */}
                  {isSubmitted && skillsArr.length < 5 && (
                    <span className="text-xs text-red-500">Skills are required / Add at least 5 skills</span>
                  )}
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">Selected skills</label>
                  <div className="flex flex-row flex-wrap p-1 mt-2 hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 min-h-10 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
                    {skillsArr.map((item, index) => (
                      <div
                        key={index}
                        className="m-1 hover:bg-gray-300 flex flex-row gap-1 w-max py-1 px-2 border border-gray-500 bg-gray-200 rounded-2xl"
                      >
                        <span>{item}</span>
                        <XMarkIcon
                          onClick={() => handleRemoveSkill(item)}
                          className="cursor-pointer border bg-gray-300 border-gray-500 rounded-full mt-0.5 block h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="rounded-md hover:bg-slate-200 px-3 py-2 text-sm font-semibold leading-6 text-gray-600"
              onClick={() => {
                navigate("/education");
              }}
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
