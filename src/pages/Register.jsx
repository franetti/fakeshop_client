import styled from '@emotion/styled'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

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
    flex-wrap:wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin:20px 0;
`
const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color: white;
    cursor: pointer;

`

const Register = () => {
    return (
        <>
        <Navbar/>
        <Container>                        
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                {/*VER DE HACER FORMULARIO CON react-hook-form*/}
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Agreement>By creating an account, I consent to the procesing of my personal
                        data in accordane with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE ACCOUNTS</Button>
                </Form>
            </Wrapper>
        </Container>
        <Newsletter/>
        <Footer/>
        </>
    )
}

export default Register
