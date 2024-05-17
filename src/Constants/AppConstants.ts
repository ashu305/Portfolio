import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { navBarHeadersInterface } from "../Interfaces/AppInterfaces";

export const NavbarHeaders: navBarHeadersInterface[] = [
  { label: "Home", icon: HomeIcon, color: "#fff" },
  { label: "About", icon: InfoIcon, color: "#fff" },
  { label: "Portfolio", icon: WorkOutlineIcon, color: "#fff" },
  { label: "Resume", icon: DocumentScannerIcon, color: "#fff" },
];
