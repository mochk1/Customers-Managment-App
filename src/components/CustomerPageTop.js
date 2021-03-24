import React, { useState, useContext } from "react";
import { DataContext } from "./context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMinusSquare,
    faPlusSquare,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import axios from "axios";
/* import "./Styles/CustomerPage.css"; */



export default function CustomerPageTop() {

    const [state, setState] = useContext(DataContext);
    const { Customerid, toaster, CustomerName, customer_list } = state;
    let history = useHistory();

    const removeCustomer = () => {
        const id = Customerid;
        axios
            .post("http://localhost:4000/deletecustomer", { data: id })
            .then((res) => {
                console.log(res.data);
                setState((prevState) => ({ ...prevState, customer_list: res.data }));
                history.push("/");
            })
            .catch(function (error) {
                console.log(error);
            });

        setState((prevState) => ({ ...prevState, toaster: 'deleted' }));

        setTimeout(() => {
            setState((prevState) => ({ ...prevState, toaster: '' }));
        }, 2400);
    };


    return (
        <div className=" flex mx-auto pt-14 ">
           

            <div className=" ">

                
                    <button className="back-btn bg-white rounded"
                             onClick={() => history.goBack()}>
                        <FontAwesomeIcon className="icons" icon={faChevronRight}></FontAwesomeIcon>
                               <p className="btntext">חזור</p>
                    </button>
                  
                    
                   
                        <button className="add-btn bg-white rounded">
                            <Link to="/AddInvoice">
                                <FontAwesomeIcon className="icons" icon={faPlusSquare}></FontAwesomeIcon>
                            </Link>
                        <div className="btntext">הוסף</div>
                        </button>
                        
                    </div>

                    <div>
                    <h1 className="Name text-3xl"> {CustomerName}</h1>
                    </div>


                    <div>
                        <button className="bg-white rounded" id="remove-btn" onClick={removeCustomer}>
                            <FontAwesomeIcon className="icons" icon={faMinusSquare}></FontAwesomeIcon>
                        <div className="btntext">מחק</div>
                        </button>
                    </div>
                   
            </div>
    )
}
