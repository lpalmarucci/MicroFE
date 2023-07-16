import { CircularProgress } from "@mui/material";
import React from "react";

type Props = {};

const SplashScreen = (props: Props) => {
  return (
    <div className="text-white absolute top-0 left-0 h-full z-[9999] backdrop-filter bg-indigo-200 bg-opacity-20 w-full flex justify-center items-center backdrop-blur-md">
      <CircularProgress
        size={100}
        color="info"
      />
    </div>
  );
};

export default SplashScreen;
