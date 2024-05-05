import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setSummary } from "../redux";

export default function Summary({ setProgress }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialVal = useSelector((state) => state.summary);

  const validation = Yup.object({
    summary: Yup.string().required("Summary is required")
  });

  return (
    <>
      <span className="roboto-bold text-3xl">Almost done! Let’s finish with a strong summary</span>
      <Formik
        initialValues={initialVal}
        validationSchema={validation}
        onSubmit={(values) => {
          dispatch(setSummary(values));
          setProgress();
          navigate("/structure");
        }}
        className="mt-5"
      >
        <Form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-5 grid grid-cols-3 gap-x-6 gap-y-8">
                <div className="col-span-2">
                  <label htmlFor="summary" className="block text-sm font-medium leading-6 text-gray-900">
                    Summary<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      as="textarea"
                      name="summary"
                      rows={6}
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="summary" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="rounded-md hover:bg-slate-200 px-3 py-2 text-sm font-semibold leading-6 text-gray-600"
              onClick={() => {
                navigate("/projects");
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
