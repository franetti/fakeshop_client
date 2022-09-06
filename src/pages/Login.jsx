import {useState} from 'react'
import {login} from '../redux/apiCalls.js'
import styled from '@emotion/styled'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'


const Container = styled.div`
    width:100vw;
    height:95vh;
    /* background:linear-gradient(), url() */
    display:flex;
    align-items: center;
    justify-content:center;
`
const Wrapper = styled.div`
    width:40%;
    padding: 20px;
    background-color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    width: 50%;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    margin-bottom: 10px;
    color: white;
    cursor: pointer;
    &:disabled{
        background-color: gray;
        cursor: not-allowed;
    }

`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration:underline;
    cursor:pointer;
`
const Error = styled.span`
    color: red;
`

const Login = () => {

    const [username, setUsername] =useState("");
    const [password, setPassword] =useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector(state => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch,{username,password})
    }

    return (
        <>
        <Navbar/>
        <Container>                        
            <Wrapper>
                <Title>SIGN IN</Title>
                {/*VER DE HACER FORMULARIO CON react-hook-form*/}
                <Form>
                    <Input 
                        placeholder="username" 
                        onChange={ e => setUsername(e.target.value)}
                    ></Input>
                    <Input 
                        type="password" 
                        placeholder="password" 
                        onChange={ e => setPassword  (e.target.value)}
                    ></Input>                    
                    <Button 
                        onClick={handleClick} 
                        disabled={isFetching}
                    >LOGIN</Button>
                    {error && <Error>No se pudo Iniciar sesion. Verifique los datos ingresados</Error>}
                    <Link>DO NOT REMEMBER A PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
        <Newsletter/>
        <Footer/>
        </>
    )
}

export default Login
