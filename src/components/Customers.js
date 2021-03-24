import React, {useContext,useEffect} from 'react'
import {DataContext} from './context'
import CusomerCard from './CustomerCard'
/* import './Styles/Customers.css' */
import SearchBar from './SearchBar'
import ToasterComponent from "./Styles/Toaster/ToasterComponent";


export default function Customers() {
    
  const [state] = useContext(DataContext);
  const {customer_list, searchValue} = state;
  const newCustArr = customer_list.filter((customer) =>customer.name.includes(searchValue)
  );


  useEffect(() => {
console.log('rendered')
    }
  , [customer_list])

    return (
      <div className=" bg-gray-100  w-screen ">
     <div className=" flex flex-col">
<h1 className="text-3xl  pt-11 pb-5  text-center">לקוחות</h1>

        <SearchBar />


        <p
          id="numcutsomers"
          dir="rtl" 
          className="px-4 text-center pb-4 ">
          {` ${newCustArr.length} לקוחות נמצאו`}</p>
        <div className=" p-5 flex m-auto  ">
          <div className="cust grid grid-cols-2 gap-2 md:grid-cols-3 " dir="rtl">
          <ToasterComponent/>
            {newCustArr.map((item) => (
              
              <CusomerCard
                key={item._id}
                idd={item._id}
                costumername={item.name}
                projects = {item.projects}
              />
            ))}
          </div>
          </div>
        
        </div>
        </div>
       
    );


}
  