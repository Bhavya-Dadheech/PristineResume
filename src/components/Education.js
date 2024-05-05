import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setEducation } from "../redux";
import { useDispatch, useSelector } from "react-redux";

export default function Education({ setProgress }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialVal = useSelector((state) => state.education);

  const validation = Yup.object({
    institute_name: Yup.string().required("Institue Name is required"),
    location: Yup.string().required("Location is required"),
    degree: Yup.string().required("Degree is required"),
    course: Yup.string().required("Course is required"),
    graduation_date: Yup.date().required("Graduation Date is required"),
    still_enrolled: Yup.string()
  });

  return (
    <>
      <span className="roboto-bold text-3xl">Fill us in about your qualification's</span>
      <Formik
        initialValues={initialVal}
        validationSchema={validation}
        onSubmit={(values) => {
          dispatch(setEducation(values));
          setProgress();
          navigate("/skills");
        }}
        className="mt-5"
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Education</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Tell us about any colleges, primary eduaction , or any other program you have attend.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-x-6 gap-y-8">
                  <div className="col-span-1">
                    <label htmlFor="institute_name" className="block text-sm font-medium leading-6 text-gray-900">
                      Institue Name<span className="mx-1 text-red-600">*</span>
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="institute_name"
                        className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                      />
                    </div>
                    <ErrorMessage component="div" className="text-xs text-red-500" name="institute_name" />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                      Location<span className="mx-1 text-red-600">*</span>
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="location"
                        className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                      />
                    </div>
                    <ErrorMessage component="div" className="text-xs text-red-500" name="location" />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
                      Degree<span className="mx-1 text-red-600">*</span>
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="degree"
                        className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                      />
                    </div>
                    <ErrorMessage component="div" className="text-xs text-red-500" name="degree" />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">
                      Course<span className="mx-1 text-red-600">*</span>
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="course"
                        className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                      />
                    </div>
                    <ErrorMessage component="div" className="text-xs text-red-500" name="course" />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="graduation_date" className="block text-sm font-medium leading-6 text-gray-900">
                      Graduation Date<span className="mx-1 text-red-600">*</span>
                    </label>
                    <div className="mt-2">
                      <Field
                        type="date"
                        name="graduation_date"
                        className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                      />
                      <ErrorMessage component="div" className="text-xs text-red-500" name="graduation_date" />
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 col-span-1">
                    <div className="text-sm leading-6">
                      <Field
                        name="still_enrolled"
                        type="checkbox"
                        className="cursor-pointer mr-2 mt-8 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="still_enrolled" className="font-medium text-gray-900">
                        I'm still enrolled.
                      </label>
                      <p className="text-gray-500">Select if you are currently studying here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-4">
              <button
                type="button"
                className="rounded-md hover:bg-slate-200 px-3 py-2 text-sm font-semibold leading-6 text-gray-600"
                onClick={() => {
                  navigate("/header");
                }}
              >
                Back
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
