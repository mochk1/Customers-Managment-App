import React, { useContext, useEffect, useState } from "react";
import "../Styles/CustomerPage.css";
import { DataContext } from "../context";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Spinner from "../Styles/Spinner";
import CustomerPageTop from "./CustomerPageTop"


const CustomerPage = (props) => {
  const [state, setState] = useContext(DataContext);
  const { Customerid,Loading } = state;
  const [cdata, setCdata] = useState([]);
 
  
  useEffect(() => {
    setState((prevState) => ({ ...prevState, Loading: true }));
    axios
      .post("http://localhost:4000/getcustomer", { idn: Customerid })
      .then((res) => {
        setCdata(res.data[0].projects);
        setState((prevState) => ({ ...prevState, Loading: false }));})
      .catch(function (error) {
        console.log(error);
      });
  }, [state.customer_list]);

  return (
    
   
     <div className="mx-auto">
          <CustomerPageTop/> 
          

          <div className='ml-44'>
         { Loading?<Spinner/>:null}
          </div>


        <div className='max-h-full overflow-auto px-2 '>
              <div dir='ltr' className="projectscontainer max-h-96 mt-6" >
                  {cdata.map((project,index) => (
                    <ProjectCard
                      amount={project.amount}
                      name={project.projectname}
                      key={project.projectname}
                      projectIndex={index}
                      projectId={project}
                      customerid={Customerid}/>
                  ))}
                
              </div>
          </div>
      </div>
     
     
  );
};

export default CustomerPage;
