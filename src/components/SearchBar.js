import React, {useContext} from 'react'
import './Styles/SearchBar.css'
import {DataContext} from './context'
import { Link} from "react-router-dom";


const SearchBar = () => {
const [state,setState] = useContext(DataContext)

const updateValue = (e) => {
const svalue = e.target.value
setState(prevState => ({...prevState, searchValue: svalue}))}


  return (
    <div className="searchbar" dir="rtl">
      <input 
        type="text" 
        id="search" 
        placeholder="חיפוש לקוח" 
        onChange={updateValue}/>
        <Link to="/AddCustomer">
      <div className="plusbtn">
        <button> + </button>
      </div>
      </Link>
    </div>
  );
};

export default SearchBar;