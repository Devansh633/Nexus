import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text,
    Status
} from './LoginElements';

const Login = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginStatus,setLoginStatus] = useState('');

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3001/login",{
            email:email,
            password:password,
        }).then((response) => {
            if(response.data.message){
                alert(response.data.message);
            }
        });
    };

    useEffect(()  =>{
        Axios.get("http://localhost:3001/login").then((response) =>{
            if(response.data.loggedIn == true){
                navigate('/')}
            else{
                navigate('/login')
            }
        })
    },[])
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">NEXUS</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Login in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required onChange={(e)=>{setEmail(e.target.value);}} />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required onChange={(e)=>{setPassword(e.target.value);}} />
                        <FormButton type='submit' onClick={login}>Continue</FormButton>
                        <Text>Forget Password</Text>
                        <Status>{loginStatus}</Status>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Login;