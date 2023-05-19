import { useState } from "react";

import { useAppSelector } from "../../app/hooks";

// templates
import Starndard from "./Starndard";
import { resumeState } from "../../features/resume/resumeSlice";

// react pdf
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// material ui
import Button from "@mui/material/Button";

export interface TemplateProps {
  data: resumeState;
}

const ResumePaper = () => {
  const resume = useAppSelector((state) => {
    return state.Resume;
  });
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture: any = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  return (
    <div className="w-full my-8 p-8 md:h-screen flex-center  flex-col">
      <div className="actual-receipt bg-[#fff]">
        <Starndard data={resume} />
      </div>
      <Button variant="contained" className=" " onClick={downloadPDF}>
        {loader ? <span>Downloading</span> : <span>Download</span>}
      </Button>
    </div>
  );
};

export default ResumePaper;
