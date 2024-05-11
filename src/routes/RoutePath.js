import React from "react";
import { Routes, Route } from "react-router-dom";
import navigation from "../models/routes";

const ResumeStructure = React.lazy(() => import("../components/ResumeStructure"));

export default function RoutePath({ setProgress }) {
  return (
    <Routes>
      {navigation.map((item) => (
        <Route
          key={item.title}
          path={item.path}
          element={
            <React.Suspense fallback={<>...</>}>
              <item.component setProgress={setProgress} />
            </React.Suspense>
          }
        ></Route>
      ))}
      <Route
        path="/structure"
        element={
          <React.Suspense fallback={<>...</>}>
            <ResumeStructure />
          </React.Suspense>
        }
      ></Route>
    </Routes>
  );
}
