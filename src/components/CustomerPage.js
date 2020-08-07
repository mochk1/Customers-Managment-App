import React, { useContext, useEffect, useState } from "react";
import "./Styles/CustomerPage.css";
import { DataContext } from "./context";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusSquare,
  faPlusSquare,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CustomerPage = (props) => {
  const [state, setState] = useContext(DataContext);
  const { Customerid, CustomerName, customer_list } = state;
  let history = useHistory();
  const [cdata, setCdata] = useState([]);

  const removeCustomer = () => {
    const id = Customerid;
    axios
      .post("http://localhost:4000/deletecustomer", { data: id })
      .then((res) => {
        console.log(res.data);
        setState((prevState) => ({ ...prevState, customer_list: res.data }));
      })
      .catch(function (error) {
        console.log(error);
      });
    history.push("/");
  };

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

  return (
    <div className="projectCard">
      <h1 className="Name"> {CustomerName}</h1>
      <div className="top-buttons">
        <button className="back-btn" onClick={() => history.goBack()}>
          <FontAwesomeIcon className="icons" icon={faChevronRight} ></FontAwesomeIcon>
        </button>
        <div className="left-btns">
            <button className="add-btn">
              <Link to="/AddInvoice">
                <FontAwesomeIcon className="icons" icon={faPlusSquare} ></FontAwesomeIcon>
              </Link>
  
            </button>

            <button id="remove-btn" onClick={removeCustomer}>
              <FontAwesomeIcon className="icons" icon={faMinusSquare}></FontAwesomeIcon>
            </button>
        </div>
        <div/>
      </div>

      <div id="projectscontainer">
        {cdata.map((project) => (
          <ProjectCard name={project.projectName} />
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;
