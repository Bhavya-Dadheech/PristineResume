import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderInfo } from "../redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Header({ setProgress }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialVal = useSelector((state) => state.header);

  const validation = Yup.object({
    fname: Yup.string().max(15, "Must be 15 characters or less").required("First name is required"),
    lname: Yup.string().max(20, "Must be 20 characters or less").required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    mobile: Yup.string().matches(/^\d+$/, "Mobile must be a number").required("Mobile is required"),
    country: Yup.string().required("Country is required"),
    address: Yup.string(),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
  });

  return (
    <>
      <span className="roboto-bold sm:text-3xl text-2xl">Let's start with the header</span>
      <Formik
        initialValues={initialVal}
        validationSchema={validation}
        onSubmit={(values) => {
          dispatch(setHeaderInfo(values));
          setProgress();
          navigate("/education");
        }}
        className="mt-5"
      >
        <Form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-5 grid sm:grid-cols-3 grid-cols-1 gap-x-6 sm:gap-y-8 gap-y-4">
                <div className="col-span-1">
                  <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                    First name<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      type="text"
                      name="fname"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="fname" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      type="text"
                      name="lname"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="lname" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      name="email"
                      type="email"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="email" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                    Mobile<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      name="mobile"
                      type="number"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="mobile" />
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
                  <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                    State / Province<span className="mx-1 text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <Field
                      name="state"
                      type="text"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="state" />
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
                  <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <Field
                      name="address"
                      type="text"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="address" />
                </div>

                <div className="col-span-1">
                  <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <Field
                      name="pincode"
                      type="number"
                      className="hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <ErrorMessage component="div" className="text-xs text-red-500" name="pincode" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
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
