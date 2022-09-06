import {useRef,useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import {mobile}from '../responsive'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Opacity } from '@mui/icons-material'

function Navbar({top, position, color}) {

    const quantity = useSelector( state => state.cart.quantity)    
    const currentUser = useSelector( state => state.user.currentUser);
    const [navbarState, setNavbarState] = useState(false)
    const [dropdownState, setdropdownState] = useState(false)
    let navbar = useRef(null)
    
    useEffect( () => {        
        handlerScrollNavbar();                    
    },[navbarState])

    window.addEventListener('scroll', () => window.scrollY >= 30? setNavbarState(true) : setNavbarState(false) )

    const handlerScrollNavbar = () => {   
        if(navbarState){
            navbar.style.position="fixed"
            navbar.style.background="white"            
            navbar.style.top="0"            
            navbar.firstChild.style.paddingTop="8px"
            navbar.firstChild.style.paddingBottom="8px"                                    
            navbar.firstChild.style.color="black"          
        }else{
            navbar.style.position="absolute"            
            navbar.style.background="transparent"
            navbar.removeAttribute("style", "top")
            navbar.firstChild.style.paddingTop="40px"            
            navbar.firstChild.style.paddingBottom="40px"  
            if(!color){
                navbar.firstChild.style.color="white"            
            }                      
        }        
    }        
    
    return (
        <Container ref={el => navbar = el} top={top} position={position} >
            <Wrapper color={color}>
                <Left>
                    {/* <MenuItem>
                        <NavLink to="/products" style={{textDecoration:"none"}}>
                            PRODUCTS
                        </NavLink>
                    </MenuItem> */}
                </Left>
                <Center>
                    <NavLink to="/" style={{textDecoration:"none"}}>
                        <Logo>FAKESHOP</Logo>  
                    </NavLink>
                </Center>
                <Right>
                    <MenuItem 
                        style={{ position:"relative", transition:"all 0.05s"}}                                  
                    >
                        <SpanProducts 
                                  onMouseEnter={() => setdropdownState(true) }     
                                  onMouseLeave={() => setdropdownState(false)}                                                                
                        >PRODUCTOS</SpanProducts>                                                                                        
                        {/* <Dropdown ref={el => dropdownNav = el} > */}
                        <Dropdown 
                            onMouseEnter={() => setdropdownState(true) } 
                            onMouseLeave={() => setdropdownState(false)}  
                            visible={dropdownState} 
                        >   
                            <Link to="/products" style={{textDecoration:"none", color:"inherit"}}>                        
                                <Li>
                                    TODO
                                </Li>  
                            </Link>
                            <Link to="/products/remeras" style={{textDecoration:"none", color:"inherit"}}>
                                <Li>
                                    Remeras
                                </Li>                               
                            </Link>
                            <Link to="/products/buzos" style={{textDecoration:"none", color:"inherit"}}>
                                <Li>
                                    Buzos
                                </Li>  
                            </Link>
                            <Link to="/products/camisas" style={{textDecoration:"none", color:"inherit"}}>
                                <Li>
                                    Camisas
                                </Li>  
                            </Link>
                            <Link to="/products/pantalones" style={{textDecoration:"none", color:"inherit"}}>
                                <Li>
                                    Patalones
                                </Li>  
                            </Link>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <NavLink to="/cart" style={{textDecoration:"none", color:"unset"}}>
                                <ShoppingCartOutlinedIcon />
                            </NavLink>
                        </Badge>
                    </MenuItem>
                    {/* <SearchContainer>
                        <Input placeholder="Search"/>
                        <SearchIcon style={{color:"gray", fontSize:"16px"}}/>
                    </SearchContainer> */}
                    {/*
                        currentUser
                        ?   <>
                             <MenuItem>Franco Martinetti</MenuItem>
                             <MenuItem>CERRAR SESION</MenuItem>
                            </>
                        :   <>
                             <MenuItem >
                                <NavLink to="/register">
                                    REGISTER 
                                 </NavLink>                                
                            </MenuItem>
                            <MenuItem >
                                <NavLink to="/login">
                                    LOGIN 
                                 </NavLink>                                
                            </MenuItem>
                            </>
                    */}                    
                </Right>                
            </Wrapper>            
        </Container>        
    )
}

export default Navbar
 

const Container = styled.div`
    position: ${props => props.position ? "relative" :" absolute"};
    width: 100%;
    z-index:1000;
    transition: all 0.2s ease-in-out;
    top:${props => props.top === '0' && 0};
    ${mobile({height:"50px"})};
`
const Wrapper = styled.div`
    padding:40px;
    display:flex ;
    justify-content: space-between;
    color:${props => props.color === "black" ? "black":"white"} ;
    transition:all 0.4s;
    ${mobile({padding:"10px 0"})}
`
const Left = styled.div`
    flex: 1; /*es mas justo que width: 33%; Le dice que ocupe una porcion*/
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding:5px;    
    margin-left: 25px;
    ${mobile({marginLeft:"10px", marginRight:"10px"})} 
`
const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})}
`
const Center = styled.div`
    flex: 1;
    text-align:center;    
`
const Logo = styled.h1`
    font-weight: bold;
    margin:auto;
    width:fit-content;          
    background-color: black;
    padding: 0 5px;
    font-size:40px ;
    color: white;    
    ${mobile({fontSize:"20px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:"3",justifyContent:"center",paddingRight:"15px"})}        
`
const MenuItem =styled.div`
    font-size: 14px;
    cursor:pointer;
    margin-left: 30px;
    //color:black;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
` 
const Dropdown = styled.ul`
    display:${props => props.visible ? "inline-block" : "none"};
    opacity:${props => props.visible ? 1 : 0};   
    position:absolute;    
    top:0;
    left:0;
    margin-top:25px;
    padding-left:20px!important ;
    padding-right:35px;
    border-radius:3px ;
    list-style:none;
    text-decoration:none ;
    background-color: ghostwhite;     
    box-sizing:border-box ;
    //box-shadow: 0 2px 2px 1px rgba(0,0,0,0.2) ;
`
const Li = styled.li`
    box-sizing:border-box ;
    margin: 13px 0 ;
    padding:3px;
    cursor:pointer;
    border-bottom:1px solid transparent; 
    transition:all 0.15s;
    font-size:15px ;
    color:gray!important;   
    &:hover{
        border-bottom:1px solid black;        
    }
    &:visited, :active{
        color:gray!important;
    }
`
const SpanProducts = styled.span`
    cursor:pointer;    
    letter-spacing:2px ;
    font-size:18px;    
    padding-bottom:50px ;
`