import React, {useContext,useEffect} from 'react'
import {DataContext} from './context'
import CusomerCard from './CustomerCard'
import './Styles/Customers.css'
import SearchBar from './SearchBar'

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
      <>
        <SearchBar />
        <p
          id="numcutsomers"
          dir="rtl" >
          {` ${newCustArr.length} לקוחות נמצאו`}</p>
        <div className="clients-main">
          <div className="cust" dir="rtl">
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
      </>
    );


}
  