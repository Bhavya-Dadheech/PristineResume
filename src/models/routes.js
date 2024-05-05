import React from "react";

const Dashboard = React.lazy(() => import("../components/Dashboard"));
const Header = React.lazy(() => import("../components/Header"));
const Experience = React.lazy(() => import("../components/Experience"));
const Education = React.lazy(() => import("../components/Education"));
const Skills = React.lazy(() => import("../components/Skills"));
const Summary = React.lazy(() => import("../components/Summary"));
const Projects = React.lazy(() => import("../components/Projects"));

const navigation = [
  { name: "Dashboard", to: "/", component: Dashboard },
  { name: "Header", to: "/header", component: Header },
  { name: "Education", to: "/education", component: Education },
  { name: "Skills", to: "/skills", component: Skills },
  { name: "Experience", to: "/experience", component: Experience },
  { name: "Projects", to: "/projects", component: Projects },
  { name: "Summary", to: "/summary", component: Summary }
];

export default navigation;
