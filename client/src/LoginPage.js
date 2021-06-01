import React, {useContext,useRef,useState} from 'react'
import './LoginPage.css'
import { AuthContext } from './components/Auth'
import { DataContext } from './components/context'
import axios from "axios";
import { useHistory } from "react-router-dom";
import Spinner from './components/Styles/Spinner'


const LoginPage = () => {

const history = useHistory();
const [Auth,setAuth] = useContext(AuthContext); 
const [state,setstate] = useContext(DataContext); 
const usernameRef = useRef('')
const passwordRef = useRef('')
const [status,setstatus] = useState('')
const [isloading,setisloading]=useState(false)


const RegisterUser = () => {
  if(usernameRef.current.value  && passwordRef.current.value  ){
    setisloading(true)
    axios.post('https://myappcustomers.herokuapp.com/register',
    {username:usernameRef.current.value, password:passwordRef.current.value})
    .then(res => {setstatus(res.data);setisloading(false)})
      .catch(function (err) {console.log(err)})
    }else{
      setstatus('One Or More Field Is Empty')}
}


const LoginUser = () => {
  if(usernameRef.current.value  && passwordRef.current.value  ){
      setisloading(true)
    axios.post('https://myappcustomers.herokuapp.com/login',
    {username:usernameRef.current.value,
     password:passwordRef.current.value})
    .then(res => {
      const {isLoggedin, username,id} = res.data
      if(isLoggedin){
      setAuth((prevState) => ({...prevState, isLoggedin: isLoggedin, username:username}) );
      localStorage.setItem('isLoggedin', isLoggedin)
      localStorage.setItem('userid', id)
      localStorage.setItem('username', username)
      setstate((prevState) => ({...prevState, user_id: id}) );
      history.push('/Customers')
      window.location.reload()
      } else{ setisloading(false);
            setstatus(res.data)}
        })
      .catch(function (err) {
        console.log(err);
      })
    }else{setstatus('One Or More Field Is Empty');}
}




return (

<>
<div className='flex flex-col h-screen bg-gray-100  '>

<div className=' my-32'>
<h1 className='text-center text-blue-900 text-xl'>M-App Login</h1>



<div className='flex flex-col mx-auto my-auto max-w-sm mt-10 ' dir='rtl'>
    <input ref={usernameRef} className='mx-10 p-1 rounded border' name="descreption"  placeholder="שם משתמש" type="text" ></input>
    <input ref={passwordRef}className='mx-10 p-1 mt-3 rounded border'  name="amount" placeholder="סיסמא" type="password" ></input>
    {isloading?<div className='mx-auto '><Spinner/></div>:<p className='mx-auto py-2 font-medium text-red-400'>{status}</p>}
    <button onClick={LoginUser}  className='mx-10 bg-blue-400 p-1 text-white rounded mt-2 hover:bg-blue-500 transition duration-300 ease-in-out'>Log In</button>
    <button onClick={RegisterUser} className='mx-10 bg-blue-400 p-1 text-white rounded mt-4 hover:bg-blue-500 transition duration-300 ease-in-out'>New User</button>
    <span className='text-center mt-4'>For easy demo login <br/> use <strong>"demo"</strong> for username and password </span>
</div>


</div>
</div>


</>
)



}


export default LoginPage;
