import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface resumeState {
  firstName: string;
  lastName: string;
  profile?:string;
  occupation: string;
  address: string;
  phone?: string;
  email?: string;
  nationality?: string;
  date_birth?: string;
  experience?: {
    title: string;
    company: string;
    location?: string;
    start_date?: string;
    end_date?: string;
    describtion?: string;
  }[];
  education?: {
    degree: string;
    intituation?: string;
    location?: string;
    start_date?: string;
    end_date?: string;
    describtion?: string;
  }[];
  skills?: string[];

  languages?: {
    title: string;
    ability_level: "Elementary" | "Intermediate" | "Advanced" | "Native";
  }[];
}

interface resumeAction{
  name:string;
  value:string;
}


const initialState: resumeState = {
  firstName: "pouya",
  lastName: "azizzade",
  occupation: "front end",
  address: "United States new york",
  nationality: "island of human",
  email:"email@email.com",
  experience:[],
  skills:[]
};

export const resumeSlice = createSlice({

  name: "resume",

  initialState,

  reducers: {
    Edit_resume(state:any, action:PayloadAction<resumeAction>) {
      state[action.payload.name] = action.payload.value
    },
    Add_Experience(state:any,action:PayloadAction<any>){
      state.experience.push(action.payload)
    },
    Add_Skills(state:any,action:PayloadAction<any>){
      state.skills.push(action.payload)
    },
  },
});

export const {Edit_resume,Add_Experience,Add_Skills} = resumeSlice.actions;
//: PayloadAction<resumeState>

export default resumeSlice.reducer;
