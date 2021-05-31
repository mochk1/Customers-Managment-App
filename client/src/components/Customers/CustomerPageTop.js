import React, {  useContext } from "react";
import { DataContext } from "../context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinusSquare, faPlusSquare, faChevronRight,} from "@fortawesome/free-solid-svg-icons";
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
            .post("http://localhost:4000/deletecustomer", { data: id,userid:localStorage.getItem('userid') })
            .then((res) => {
                console.log(res.data);
                setState((prevState) => ({ ...prevState, customer_list: res.data }));
                history.goBack();
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
        <>
                <h1 className="Name text-3xl mt-8 text-center"> {CustomerName}</h1>
        <div className=" flex mx-auto pt-8 w-full justify-between  ">
           
            <div className='flex pr-2' >

                <button className="items-center hover:bg-blue-800 hover:text-white flex back-btn bg-white text-gray-500 rounded p-2 focus:outline-none"
                    onClick={() => history.goBack()}>
                    <FontAwesomeIcon className="icons" icon={faChevronRight}></FontAwesomeIcon>
                    <p className="btntext pr-2">חזור</p>
                </button>

                    <Link to="/AddInvoice">
                <button className="hover:bg-blue-800 hover:text-white bg-white text-gray-500 flex items-center add-btn  rounded p-2 mr-3 focus:outline-none">
                        <FontAwesomeIcon className="icons" icon={faPlusSquare}></FontAwesomeIcon>
                    <p className="btntext pr-2">פרויקט חדש</p>
                </button>
                    </Link>

            </div>

        
           

            <div className='pl-2'>
                <button className="bg-white text-gray-500 hover:bg-blue-800 hover:text-white  flex items-center add-btn bg-white rounded p-2 mr-3 focus:outline-none" id="remove-btn" onClick={removeCustomer}>
                    <FontAwesomeIcon className="icons" icon={faMinusSquare}></FontAwesomeIcon>
                    <p className="btntext pr-2"> מחק לקוח</p>
                </button>
            </div>

        </div>
        </>
    )
}
