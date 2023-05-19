import React, { useState, ChangeEvent } from "react";

// redux
import { Add_Skills } from "../features/resume/resumeSlice";
import { useAppDispatch } from "../app/hooks";

// material ui
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Skills = () => {
  const [Skill, setSkill] = useState("");
  const dispatch = useAppDispatch();

  const handleSkill = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value);
  };
const AddSkill=()=>{
  dispatch(Add_Skills(Skill));
  setSkill("");
}
  return (
    <div>
      <div className="flex justify-between">
        <TextField label="Skill" value={Skill} onChange={handleSkill} />
        <Button variant="contained" onClick={AddSkill}>Add</Button>
      </div>
    </div>
  );
};

export default Skills;
