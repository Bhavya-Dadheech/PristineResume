import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setProjectInfo } from "../redux";

export default function Projects({ setProgress }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialVal = useSelector((state) => state.project);

  const validation = Yup.object({
    project_title: Yup.string().required("Project Title is required"),
    tech_stack: Yup.string().required("Tech stack is required"),
    start_date: Yup.date().required("Start Date is required"),
    end_date: Yup.date().required("End Date is required"),
    description: Yup.string().required("Description is required")
  });

  return (
    <>
      <span className="roboto-bold sm:text-3xl text-2xl">Add you projects/work that you have done so far.</span>
      <Formik
        initialValues={initialVal}
        validationSchema={validation}
        onSubmit={(values) => {
          dispatch(setProjectInfo(values));
          setProgress();
          navigate("/summary");
        }}
        className="mt-5"
      >
        <Form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Projects</h2>
              <div className="mt-5 grid sm:grid-cols-3 grid-cols-1 gap-x-6 sm:gap-y-8 gap-y-4">
                <div className="col-span-1">
                  <label htmlFor="project_title" className="block text-sm font-medium leading-6 text-gray-900">
                    Title<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      type="text"
                      name="project_title"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="project_title" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="tech_stack" className="block text-sm font-medium leading-6 text-gray-900">
                    Tech Stack<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      type="text"
                      name="tech_stack"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="tech_stack" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="start_date" className="block text-sm font-medium leading-6 text-gray-900">
                    Start Date<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      type="date"
                      name="start_date"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="start_date" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="end_date" className="block text-sm font-medium leading-6 text-gray-900">
                    End Date<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      type="date"
                      name="end_date"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="end_date" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    Description<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      as="textarea"
                      name="description"
                      rows={3}
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="description" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="rounded-md hover:bg-slate-200 px-3 py-2 text-sm font-semibold leading-6 text-gray-600"
              onClick={() => {
                navigate("/experience");
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
