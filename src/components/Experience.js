import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setExperienceInfo } from "../redux";

export default function Experience({ setProgress }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialVal = useSelector((state) => state.experience);

  const validation = Yup.object({
    job_title: Yup.string().required("Job title is required"),
    employer: Yup.string().required("Employer name is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    start_date: Yup.date().required("Start Date is required"),
    end_date: Yup.date().required("End Date is required"),
    still_work_here: Yup.string()
  });

  return (
    <>
      <span className="roboto-bold text-3xl">Let’s work on your experience</span>
      <Formik
        initialValues={initialVal}
        validationSchema={validation}
        onSubmit={(values) => {
          dispatch(setExperienceInfo(values));
          setProgress();
          navigate("/projects");
        }}
        className="mt-5"
      >
        <Form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Work Experience</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Start with your most recent job first.</p>
              <div className="mt-5 grid grid-cols-3 gap-x-6 gap-y-8">
                <div className="col-span-1">
                  <label htmlFor="job_title" className="block text-sm font-medium leading-6 text-gray-900">
                    Job Title<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      type="text"
                      name="job_title"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="job_title" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="employer" className="block text-sm font-medium leading-6 text-gray-900">
                    Employer<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      type="text"
                      name="employer"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="employer" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      name="city"
                      type="text"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="city" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Country<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      name="country"
                      type="text"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="country" />
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

                <div className="relative flex gap-x-3 col-span-1">
                  <div className="flex h-6 items-center">
                    <Field
                      name="still_work_here"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="still_work_here" className="font-medium text-gray-900">
                      I still work here.
                    </label>
                    <p className="text-gray-500">Select if you are currently work here.</p>
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
                navigate("/skills");
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
