import React from "react";

// react router dom
import { routes } from "./Routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      
      <Routes>
        {routes.map((val) => {
          if(val.type==="single"){
          return (<Route key={val.route} path={val.route} element={val.component} />)
        }
        else {
          return (
            <Route
              path={val.route}
              element={
                  val.component
                
              }
              key={val.route}
            >
              {val?.list?.map((value) => {
                return (
                  <>
                    <Route
                      path={value.route}
                      element={value.component}
                      key={value.route}
                    />
                  </>
                );
              })}
            </Route>
          );
        }


      })}
      </Routes>
    </div>
  );
}

export default App;
