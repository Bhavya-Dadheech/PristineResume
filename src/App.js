import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
import { useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoadingBar from "react-top-loading-bar";
import Sidebar from "./components/sidenav/Sidebar";

export default function App() {
  const location = useLocation();
  const [progress, setprogress] = useState(0);

  const setProgress = () => {
    setprogress(progress + 30);
    setTimeout(() => {
      setprogress(progress + 70);
    }, 500);
    setTimeout(() => {
      setprogress(100);
    }, 500);
  };

  return (
    <Provider store={store}>
      <>
        <LoadingBar color="#FFA500" progress={progress} onLoaderFinished={() => setprogress(0)} />
        <Navbar className="" />
        <Sidebar />
        <div className={`${location.pathname === "/" ? "sm:p-12 sm:m-12 p-6 m-3" : "sm:p-12 sm:mx-12 p-6 mx-2"}`}>
          <RoutePath setProgress={setProgress} />
        </div>
      </>
    </Provider>
  );
}
