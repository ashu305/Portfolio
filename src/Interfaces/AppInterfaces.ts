import { SvgIconProps } from "@mui/material";
import React from "react";

export interface navBarHeadersInterface {
  label: string;
  icon: React.ElementType<SvgIconProps>;
  color: string;
}

interface Skills {
  name: string;
  icon?: React.ElementType<SvgIconProps>;
}
export interface AboutDetailsInterface {
  bio: string;
  skills: Skills[];
}
