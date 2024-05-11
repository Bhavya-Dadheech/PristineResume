import React from "react";

const Dashboard = React.lazy(() => import("../components/Dashboard"));
const Header = React.lazy(() => import("../components/Header"));
const Experience = React.lazy(() => import("../components/Experience"));
const Education = React.lazy(() => import("../components/Education"));
const Skills = React.lazy(() => import("../components/Skills"));
const Summary = React.lazy(() => import("../components/Summary"));
const Projects = React.lazy(() => import("../components/Projects"));

const navigation = [
  { title: "Dashboard", path: "/", component: Dashboard },
  { title: "Header", path: "/header", component: Header },
  { title: "Education", path: "/education", component: Education },
  { title: "Skills", path: "/skills", component: Skills },
  { title: "Experience", path: "/experience", component: Experience },
  { title: "Projects", path: "/projects", component: Projects },
  { title: "Summary", path: "/summary", component: Summary }
];

// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
// for subnav
// export const SidebarData = [
//   {
//     title: "About Us",
//     path: "/about-us",
//     icon: <AiIcons.AiFillHome />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: "Our Aim",
//         path: "/about-us/aim",
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: "Our Vision",
//         path: "/about-us/vision",
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   }
// ];

export default navigation;
