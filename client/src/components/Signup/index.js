import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
    Text
} from './SignupElements';

const Signup = () => {

    const navigate = useNavigate();

    const [nameReg,setNameReg] = useState('');
    const [emailReg,setEmailReg] = useState('');
    const [passwordReg,setPasswordReg] = useState('');

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/signup",{
            name:nameReg,
            email:emailReg,
            password:passwordReg,
        }).then((response) => {
            console.log(response);
        });
        navigate('/login');
    };

    

  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">NEXUS</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign Up</FormH1>
                        <FormLabel htmlFor='for'>Username</FormLabel>
                        <FormInput type='name' required onChange={(e)=>{setNameReg(e.target.value);}} />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required onChange={(e)=>{setEmailReg(e.target.value);}} />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required onChange={(e)=>{setPasswordReg(e.target.value);}} />
                        <FormButton type='submit' onClick={register}>Continue</FormButton>
                        <Text>Forget Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Signup;