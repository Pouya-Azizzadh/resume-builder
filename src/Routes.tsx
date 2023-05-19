import React, { ReactNode } from "react";
import { Home, Contact, Experience, Skills } from "./pages";

export interface Route {
  title: string;
  route: string;
  component: ReactNode;
  list?: { route: string; component: ReactNode }[];
  type: "single" | "multiple";
}

export const routes: Route[] = [
  {
    title: "Home",
    route: "/",
    component: <Home />,
    list: [
      { route: "contact-information", component: <Contact /> },
      { route: "work-experience", component: <Experience /> },
      { route: "skills", component: <Skills /> },
    ],
    type: "multiple",
  },
];
