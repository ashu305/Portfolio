import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { AboutDetailsInterface, navBarHeadersInterface } from "../Interfaces/AppInterfaces";
import CodeIcon from "@mui/icons-material/Code";
import { SiTypescript } from "react-icons/si";
import { VscTypeHierarchy } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa";

export const NavbarHeaders: navBarHeadersInterface[] = [
  { label: "Home", icon: HomeIcon, color: "#fff" },
  { label: "About", icon: InfoIcon, color: "#fff" },
  { label: "Portfolio", icon: WorkOutlineIcon, color: "#fff" },
  { label: "Resume", icon: DocumentScannerIcon, color: "#fff" },
];

export const AboutDetails: AboutDetailsInterface = {
  bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ad. Modi esse cumque
  sunt laborum amet ducimus voluptatibus non explicabo, sequi expedita et delectus
  repellat voluptas debitis illo laudantium corrupti.`,
  skills: [
    { name: "React", icon: FaReact },
    { name: "System Design", icon: VscTypeHierarchy },
    { name: "HTML", icon: CodeIcon },
    { name: "C++", icon: TbBrandCpp },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: FaPython },
    { name: "Database", icon: FaDatabase },
    { name: "Git", icon: FaGitAlt },
    { name: "Unity", icon: FaUnity },
  ],
};
