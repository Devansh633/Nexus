import React,{useState,useEffect} from 'react';
import LoggedOut from '../components/loggedout';
import User from '../components/user';
import Axios from 'axios';
import Admin from '../components/admin';


const Home = () => {

  const[loginStatus,setLoginStatus] = useState(false)
  const[role,setRole] = useState("")

  useEffect(()  =>{
    Axios.get("http://localhost:3001/login").then((response) =>{
        if(response.data.loggedIn == true){
        setLoginStatus(true);
        setRole(response.data.user[0].user_role)
      }else{
        setLoginStatus(false);
      }
    })
},[])

  return (
    <> 
       {loginStatus == false && <LoggedOut />}
       {role == "user" && <User />}
       {role == "admin" && <Admin />}
     </>
  )
}

export default Home;