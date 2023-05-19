import React, { ChangeEvent, useState, useEffect } from "react";

//redux
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Add_Experience } from "../features/resume/resumeSlice";

// material
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// components
import Editor from "../components/tags/Editor";
import { Button } from "@mui/material";
import Paragraph from "../components/tags/Paragraph";

function Add() {
  const dispatch = useAppDispatch();
  const [workNow,setWorkNow]=useState(false)



  const [experienceData, setExperienceData] = useState({
    title: "string",
    company: "string",
    location: "string",
    start_date: "string",
    end_date: "i worked",
    describtion: "string;",
  });
  const AddExperience = () => {
    dispatch(Add_Experience(experienceData));
  };
  const HandleChange = (e: ChangeEvent<HTMLInputElement> | any) => {
    setExperienceData((res) => {
      return {
        ...res,
        [e.target.name]: e.target.value,
      };
    });
  };


const handleWorkStatus=(event:React.ChangeEvent<HTMLInputElement>) => {
  setWorkNow(event.target.checked);
};

  const HandleChangeDate = (name: string, event: any) => {
    console.log(event);
    const fullNumber = `${event.$y}-${("0" + event.$M).slice(-2)}-${(
      "0" + event.$D
    ).slice(-2)}`;
    setExperienceData((res) => {
      return {
        ...res,
        [name]: fullNumber,
      };
    });
  };


  

  return (
    <div>
      <form>
        <div className="grid grid-cols-2 gap-[20px] px-[20px] flex-center gap-y-[20px]">
          <TextField
            label="Title/Position"
            name="title"
            onChange={HandleChange}
          />
          <TextField label="Company" name="company" onChange={HandleChange} />
          <TextField label="Location" name="location" onChange={HandleChange} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start date"
              onChange={(event) => HandleChangeDate("start_date", event)}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End date"
              onChange={(event) => HandleChangeDate("end_date", event)}
              disabled={workNow?true:false}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleWorkStatus}/>}
                label="I'm in this job right now"
                
              />
            </FormGroup>
          </LocalizationProvider>
        </div>
        <div className="px-[20px] w-full flex flex-col">
          <Editor
            name="describtion"
            onChange={HandleChange}
            placeholder="describtion"
          ></Editor>
          <Button variant="contained" onClick={AddExperience}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}



function List() {
  const data = useAppSelector((state) => {
    return state.Resume;
  });
  return (
    <div className="flex flex-col">
      {data.experience?.map((item) => {
        return (
          <section className="px-8 py-8  flex-col my-4 rounded-2xl bg-[#f8f5f5] hover:bg-[#fff] hover:cursor-pointer shadow-xl hover:shadow-lg w-full">
            <Paragraph>{item.title}</Paragraph>
            <Paragraph>
              {item.company} {item.start_date} - {item.end_date}
            </Paragraph>
          </section>
        );
      })}
    </div>
  );
}



const Experience = () => {
  const [showAdd, setShaowAdd] = useState(true);

  const experience = useAppSelector((state) => {
    return state.Resume.experience;
  });

  useEffect(() => {
    setShaowAdd((prev) => !prev);
  }, [experience]);

  return <>{showAdd ? <Add /> : <List />}</>;
};

export default Experience;
