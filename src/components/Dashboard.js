import React from "react";
import { Button, ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import sampleImage from "../assets/images/resume-sample1.jpg";
import sampleImage2 from "../assets/images/resume-sample2.jpg";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const colors1 = ["#6253E1", "#04BEFE"];
  const getHoverColors = (colors) => colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors) => colors.map((color) => new TinyColor(color).darken(5).toString());
  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-row">
      <div className="flex flex-col max-w-3xl gap-12">
        <span className="roboto-black text-6xl">Create Your Resume With Our Resume Builder</span>
        <span className="text-xl">
          Craft a standout resume quickly and effortlessly using our complimentary resume builder.Select from
          recruiter-endorsed templates to enhance your professional appeal.
        </span>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
                colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(", ")})`,
                colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(", ")})`,
                lineWidth: 0
              }
            }
          }}
        >
          <Button
            type="primary"
            size="large"
            className="rounded-3xl h-12 mx-auto min-w-80 max-w-80"
            onClick={() => {
              navigate("/header");
            }}
          >
            Create My Resume
          </Button>
        </ConfigProvider>
      </div>
      <div className="flex flex-row gap-3 p-4 text-center">
        <div>
          <img
            className="border border-indigo-600 rounded-xl w-60 cursor-pointer"
            src={sampleImage}
            alt="Sample Resume 2"
          />
          <span>Classic</span>
        </div>
        <div>
          <img
            className="border border-indigo-600 rounded-xl w-60 cursor-pointer"
            src={sampleImage2}
            alt="Sample Resume 1"
          />
          <span>Modern</span>
        </div>
      </div>
    </div>
  );
}
