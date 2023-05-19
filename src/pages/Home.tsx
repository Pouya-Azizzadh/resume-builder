import { Button } from "@mui/material";
import React, { useState } from "react";

// react router dom
import { Link, Outlet } from "react-router-dom";

// components
import { ResumePaper } from "../components";

const path = ["contact-information", "work-experience","skills"];

const Home = () => {
  const [pathIndex, setPathIndex] = useState(0);
  const GoNextPath = () => {
    setPathIndex((prev) => prev + 1);
  };

  const BackPreviousPath = () => {
    setPathIndex((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-[50px]">
      <div className="p-[40px] flex flex-col overflow-hidden">
        <Outlet />
        <div className="w-full h-[100px] mt-[100px] px-[40px] shadow-lg	flex justify-between items-center">
          <Link to={`/${path[pathIndex - 1]}`}>
            <Button
              onClick={BackPreviousPath}
              variant="contained"
              color="secondary"
              className="h-[50px]"
            >
              Previous
            </Button>
          </Link>
          <Link to={`/${path[pathIndex + 1]}`}>
            <Button
              onClick={GoNextPath}
              variant="contained"
              className="h-[50px]"
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
      <ResumePaper />
    </div>
  );
};

export default Home;
