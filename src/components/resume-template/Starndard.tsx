import React, { FC } from "react";

// type
import { TemplateProps } from "./ResumePaper";

// material
import Paper from "@mui/material/Paper";

// tags
import Title from "../tags/Title";
import Text from "../tags/Text";

// css
import styles from "./standard-layout.module.css";
import Paragraph from "../tags/Paragraph";

// icons
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";

// constant
import { contact, typeContact } from "../../constant";

import { resumeState } from "../../features/resume/resumeSlice";

const Starndard: FC<TemplateProps> = ({ data }) => {
  console.log(data.date_birth);
  return (
    <Paper
      elevation={3}
      className="md:px-10 md:py-[50px] px-[10px] py-[25px] md:w-[450px] w-[350px] h-[750px] flex flex-col"
    >
      <div className="flex justify-between w-full h-[120px] border-b pb-4 ">
        <div className="flex flex-col">
          <Text className="text-gray tracking-widest">
            {data.occupation.toUpperCase()}
          </Text>
          <Title className="font-light	 font-playfair text-gray">
            {data.firstName.toUpperCase()}
          </Title>
          <Title className="font-light	 font-playfair text-gray">
            {data.lastName.toUpperCase()}
          </Title>
        </div>
        {data.profile && (
          <div className="rounded-full overflow-hidden border p-2">
            <img src={data.profile} className="w-[80px]  object-cover" />
          </div>
        )}
      </div>

      <div className={`${styles.grid} h-full `}>
        <div className="border-r flex flex-col py-4">
          <div className="border-b pb-4">
            <Text className="tracking-widest ">CONTACT INFORMATION</Text>
            {contact.map((val) => {
              const dataInstance = data as any;
              const str = val.name as keyof typeof data;

              return (
                <>
                  {dataInstance[str] ? (
                    <Paragraph className="item">
                      {val.icon}
                      {dataInstance[str]}
                    </Paragraph>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
          <div className=" py-4">
            <Text className="tracking-widest ">Skills</Text>
            {data?.skills?.map((item: any) => {
              return <Paragraph className="item">{item}</Paragraph>;
            })}
          </div>
        </div>
        <div className="flex flex-col py-4 px-2">
          <div className="border-b pb-4">
            <Text className="tracking-widest mb-5">Experience</Text>
            {data.experience?.map((item: any) => {
              return (
                <div className="flex flex-col my-4">
                  <Text>{item.title.toUpperCase()}</Text>
                  <div className="flex items-end">
                    <Paragraph className="font-bold">
                      {item.company},{" "}
                    </Paragraph>
                    <Paragraph>
                      {item.location} | {item.start_date} - {item.end_date}
                    </Paragraph>
                  </div>
                  <Paragraph className="text-gray">
                    {item.describtion}
                  </Paragraph>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Starndard;
