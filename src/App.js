import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
import { useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoadingBar from "react-top-loading-bar";

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
        <Navbar />
        <div className={`${location.pathname === "/" ? "p-12 m-12" : "p-12 mx-12"}`}>
          <RoutePath setProgress={setProgress} />
        </div>
      </>
    </Provider>
  );
}
