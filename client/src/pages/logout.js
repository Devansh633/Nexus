import React, { useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () =>{

    const navigate = useNavigate();

    useEffect(() =>{

    Axios.get("http://localhost:3001/logout");
    navigate('/');
    },[]);
}

export default LogoutPage;