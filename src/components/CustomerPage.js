import React, { useContext, useEffect, useState } from "react";
/* import "./Styles/CustomerPage.css"; */
import { DataContext } from "./context";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Spinner from "./Spinner";
import CustomerPageTop from "./CustomerPageTop"



const CustomerPage = (props) => {
  const [state, setState] = useContext(DataContext);
  const { Customerid } = state;
  let history = useHistory();
  const [cdata, setCdata] = useState([]);
 

  useEffect(() => {
    axios
      .post("http://localhost:4000/getcustomer", { idn: Customerid })
      .then((res) => {
        console.log(res.data[0]);
        setCdata(res.data[0].projects);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("context effect ran");
  }, []);

  if (cdata.length === 0) {
    return (
  <>
<div className="projectCard mx-auto">
    <CustomerPageTop/>
    <Spinner/>
    </div>
 </>
      )}
else{
  return (
    
   
      <div className="flex flex-col mx-auto">
       
      <CustomerPageTop/> 
      
      <div id="projectscontainer flex  ">
        {cdata.map((project) => (
          <ProjectCard amount={project.amount} name={project.projectname} />
        ))}
      </div>
      </div>
  );
};
}
export default CustomerPage;
