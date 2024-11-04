import React from "react";

import { clsx } from 'clsx';


export interface SpinnerLoadingProps {
  size?: number,
  color?: "default" | "primary" | "white"
}

enum bgColors {
  default = "bg-violet-800",
  primary = "bg-violet-800",
  white = "bg-violet-800",
}


const SpinnerLoading: React.FC<SpinnerLoadingProps> = ({ size = 32, color = 'default' }: SpinnerLoadingProps) => {

  return <div className={
    clsx("rounded-full", 'animate-ping', `${bgColors[color]}`)
  }
  style={{ width: size, height: size }}
  ></div>
    
}



export default SpinnerLoading;