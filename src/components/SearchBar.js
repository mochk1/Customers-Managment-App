import React, {useContext} from 'react'
/* import './Styles/SearchBar.css' */
import {DataContext} from './context'
import { Link} from "react-router-dom";
import axios from 'axios'

const SearchBar = () => {
const [state,setState] = useContext(DataContext)

const updateValue = (e) => {
const svalue = e.target.value
setState(prevState => ({...prevState, searchValue: svalue}))}

/* const createNewCustomer = (e) => {
  const inputvalue = state.searchValue
  axios.post('http://localhost:4000/addcustomer')
  .then(res => {
   console.log(res.data);
   setState((prevState) => ({...prevState, customer_list: res.data}));
  })
  .catch(function (error) {
    console.log(error);
    
  });
  } */




  return (
    <div className="searchbar flex p-3 justify-center" dir="rtl">
      <input className="w-72 px-2 focus:outline-none"
        type="text" 
        id="search" 
        placeholder="חיפוש לקוח" 
        onChange={updateValue}/>
        <Link to="/AddCustomer">
      <div className="plusbtn bg-white px-4 py-1 mr-4 hover:bg-gray-100 ">
        <button className="text-3xl text-blue-900 mb-1"> + </button>
      </div>
      </Link>
    </div>
  );
};

export default SearchBar;