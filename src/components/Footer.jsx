import React from 'react'
import styled from '@emotion/styled'
import payment from '../assets/payment.png'
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import { mobile } from '../responsive'
import { Link} from 'react-router-dom'

const Container = styled.div`
    display:flex;
    width: 70%;
    margin: auto;
    ${mobile({flexDirection:"column"})} 
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    margin: 0;
`
const Desc = styled.p`
    margin:20px  0px;
`
const SocialContainer = styled.div`
    display: flex;    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display:"none"})} 
`
const Title = styled.h3`
    margin-bottom: 20px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom:5px;
`
const Right = styled.div`
    flex:1;
    padding: 20px;
`
const ContacItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
const Payment = styled.img`
    width: 150px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>FAKESHOP.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut cum at earum possimus autem veniam quas delectus.
                </Desc>
                <SocialContainer>
                    <SocialIcon bg="royalblue">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="lightpink">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="lightblue">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <Link to="/" style={{textDecoration:"none", color:"black"}}>
                        <ListItem>Home</ListItem>
                    </Link>                    
                    <Link to="/products" style={{textDecoration:"none", color:"black"}}>
                        <ListItem>Products</ListItem>
                    </Link>
                    <Link to="/cart" style={{textDecoration:"none", color:"black"}}>
                        <ListItem>Cart</ListItem>   
                    </Link>                                                        
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContacItem><Room style={{marginRight:"10px"}}/>Buenos Aires, Argentina</ContacItem>
                <ContacItem><Phone style={{marginRight:"10px"}}/>+54 11 12352-4541</ContacItem>
                <ContacItem><MailOutline style={{marginRight:"10px"}}/>contacto@fakeshop.com</ContacItem>
                <Payment src={payment}/>
            </Right>
        </Container>
    )
}

export default Footer
