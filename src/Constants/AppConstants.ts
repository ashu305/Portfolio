import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { navBarHeadersInterface } from "../Interfaces/AppInterfaces";

export const NavbarHeaders: navBarHeadersInterface[] = [
  { label: "Home", icon: HomeIcon },
  { label: "About", icon: InfoIcon },
  { label: "Portfolio", icon: WorkOutlineIcon },
  { label: "Resume", icon: DocumentScannerIcon },
];
