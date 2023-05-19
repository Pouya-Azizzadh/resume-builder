// icons
import { ReactNode } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
export interface typeContact {
  name: string;
  icon: ReactNode;
}

export const contact: typeContact[] = [
  { name: "address", icon: <AiOutlineHome className="mr-2" /> },
  { name: "email", icon: <AiOutlineMail className="mr-2" /> },
  { name: "phone", icon: <AiOutlinePhone className="mr-2" /> },
  { name: "nationality", icon: <TfiWorld className="mr-2" /> },
  { name: "date_birth", icon: <BsCalendarDate className="mr-2" /> },
];
//  {name:"date_birth",icon: <BsCalendarDate className="mr-2" />}
