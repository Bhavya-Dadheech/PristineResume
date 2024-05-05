"use strict";(self.webpackChunkpristine_resume=self.webpackChunkpristine_resume||[]).push([[553],{4553:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});a(5043);var t=a(3216),i=a(3003),d=a(6909);const l=e=>({type:d.c,payload:e});var n=a(3892),o=a(899),r=a(579);function m(e){let{setProgress:s}=e;const a=(0,t.Zp)(),d=(0,i.wA)(),m=(0,i.d4)((e=>e.header)),c=o.Ik({fname:o.Yj().max(15,"Must be 15 characters or less").required("First name is required"),lname:o.Yj().max(20,"Must be 20 characters or less").required("Last name is required"),email:o.Yj().email("Invalid email address").required("Email is required"),mobile:o.Yj().matches(/^\d+$/,"Mobile must be a number").required("Mobile is required"),country:o.Yj().required("Country is required"),address:o.Yj(),city:o.Yj().required("City is required"),state:o.Yj().required("State is required"),pincode:o.Yj()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"roboto-bold text-3xl",children:"Let's start with the header"}),(0,r.jsx)(n.l1,{initialValues:m,validationSchema:c,onSubmit:e=>{d(l(e)),s(),a("/education")},className:"mt-5",children:(0,r.jsxs)(n.lV,{children:[(0,r.jsx)("div",{className:"space-y-12",children:(0,r.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,r.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Personal Information"}),(0,r.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Use a permanent address where you can receive mail."}),(0,r.jsxs)("div",{className:"mt-5 grid grid-cols-3 gap-x-6 gap-y-8",children:[(0,r.jsxs)("div",{className:"col-span-1",children:[(0,r.jsxs)("label",{htmlFor:"fname",className:"block text-sm font-medium leading-6 text-gray-900",children:["First name",(0,r.jsx)("span",{className:"mx-1 text-red-600",children:"*"})]}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(n.D0,{type:"text",name:"fname",className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,r.jsx)(n.Kw,{component:"div",className:"text-xs text-red-500",name:"fname"})]}),(0,r.jsxs)("div",{className:"col-span-1",children:[(0,r.jsxs)("label",{htmlFor:"lname",className:"block text-sm font-medium leading-6 text-gray-900",children:["Last name",(0,r.jsx)("span",{className:"mx-1 text-red-600",children:"*"})]}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(n.D0,{type:"text",name:"lname",className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,r.jsx)(n.Kw,{component:"div",className:"text-xs text-red-500",name:"lname"})]}),(0,r.jsxs)("div",{className:"col-span-1",children:[(0,r.jsxs)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:["Email address",(0,r.jsx)("span",{className:"mx-1 text-red-600",children:"*"})]}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(n.D0,{name:"email",type:"email",className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,r.jsx)(n.Kw,{component:"div",className:"text-xs text-red-500",name:"email"})]}),(0,r.jsxs)("div",{className:"col-span-1",children:[(0,r.jsxs)("label",{htmlFor:"mobile",className:"block text-sm font-medium leading-6 text-gray-900",children:["Mobile",(0,r.jsx)("span",{className:"mx-1 text-red-600",children:"*"})]}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(n.D0,{name:"mobile",type:"number",className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,r.jsx)(n.Kw,{component:"div",className:"text-xs text-red-500",name:"mobile"})]}),(0,r.jsxs)("div",{className:"col-span-1",children:[(0,r.jsxs)("label",{htmlFor:"city",className:"block text-sm font-medium leading-6 text-gray-900",children:["City",(0,r.jsx)("span",{className:"mx-1 text-red-600",children:"*"})]}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(n.D0,{name:"city",type:"text",className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,r.jsx)(n.Kw,{component:"div",className:"text-xs text-red-500",name:"city"})]}),(0,r.jsxs)("div",{className:"col-span-1",children:[(0,r.jsxs)("label",{htmlFor:"state",className:"block text-sm font-medium leading-6 text-gray-900",children:["State / Province",(0,r.jsx)("span",{className:"mx-1 text-red-600",children:"*"})]}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(n.D0,{name:"state",type:"text",className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,r.jsx)(n.Kw,{component:"div",className:"text-xs text-red-500",name:"state"})]}),(0,r.jsxs)("div",{className:"col-span-1",children:[(0,r.jsxs)("label",{htmlFor:"country",className:"block text-sm font-medium leading-6 text-gray-900",children:["Country",(0,r.jsx)("span",{className:"mx-1 text-red-600",children:"*"})]}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(n.D0,{name:"country",type:"text",className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,r.jsx)(n.Kw,{component:"div",className:"text-xs text-red-500",name:"country"})]}),(0,r.jsxs)("div",{className:"col-span-1",children:[(0,r.jsx)("label",{htmlFor:"address",className:"block text-sm font-medium leading-6 text-gray-900",children:"Street address"}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(n.D0,{name:"address",type:"text",className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,r.jsx)(n.Kw,{component:"div",className:"text-xs text-red-500",name:"address"})]}),(0,r.jsxs)("div",{className:"col-span-1",children:[(0,r.jsx)("label",{htmlFor:"pincode",className:"block text-sm font-medium leading-6 text-gray-900",children:"ZIP / Postal code"}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(n.D0,{name:"pincode",type:"number",className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,r.jsx)(n.Kw,{component:"div",className:"text-xs text-red-500",name:"pincode"})]})]})]})}),(0,r.jsx)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:(0,r.jsx)("button",{type:"submit",className:"px-4 rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Next"})})]})})]})}}}]);
//# sourceMappingURL=553.4f00fd4a.chunk.js.map