import React, { ChangeEvent } from "react";

//redux
import { useAppDispatch } from "../app/hooks";
import { Edit_resume } from "../features/resume/resumeSlice";

// material
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// components
import UploadImage from "../components/UploadImage";
import Title from "../components/tags/Title";
import { DayName } from "../calculations/Date";



const Contact = () => {
  const dispatch = useAppDispatch();
  const HandleChange = (event: ChangeEvent<HTMLInputElement>|any) => {
    dispatch(
      Edit_resume({
        name: event.target.name,
        value: event.target.value,
      })
    );
  };

const HandleChangeDate=(name:string,event:any)=>{
  const date=new Date(event.$y, event.$M, event.$D)
  const fullNumber = `${event.$y}/${("0" +  event.$M).slice(-2)}/${("0" +  event.$D).slice(
    -2
  )}`;
  dispatch(
    Edit_resume({
      name: name,
      value: fullNumber,
    })
  );
}

  return (
    <div>
      <Title className="mb-8 font-bold">Contact Information</Title>
      <form className="grid grid-cols-2 gap-[20px] px-[20px] flex-center gap-y-[20px]">
        <div className="flex flex-col">
          <div className="my-2 w-full">
            <TextField
              label="First name"
              variant="outlined"
              name="firstName"
              onChange={HandleChange}
            />
          </div>
          <div className="mt-4 w-full">
            <TextField
              label="Last name"
              variant="outlined"
              name="lastName"
              onChange={HandleChange}
            />
          </div>
        </div>

        <UploadImage />

        <TextField
          label="Occupation"
          name="occupation"
          onChange={HandleChange}
        />
        <TextField label="Address" name="address" onChange={HandleChange} />
        <TextField label="Email" name="email" onChange={HandleChange} />
        <TextField
          label="Nationality"
          name="nationality"
          onChange={HandleChange}
        />
        <TextField label="Phone" name="phone" onChange={HandleChange} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Date of birth" 
        onChange={(event)=>HandleChangeDate("date_birth",event)}
        />
    </LocalizationProvider>
    
      </form>
    </div>
  );
};

export default Contact;
