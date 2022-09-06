import {useSelector, useDispatch} from 'react-redux'
import {removeProduct,cleanCart} from '../redux/cartRedux'
import styled from '@emotion/styled'
import { Add, Remove, Done } from '@mui/icons-material'
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Cart = () => 
{   
    const [visibility, setVisibility] = useState(false);
    const cart = useSelector( state => state.cart )        
    const dispatch = useDispatch()  
    const navigate = useNavigate();

    const handleRemoveProduct = (product,index) => {                
        dispatch(removeProduct({product,index}))
    }
    const handleCleanRemoveCart = () => {                
        dispatch(cleanCart())
    }

    return (
        <Container>
            <Navbar color="black"/> 
            <Wrapper>
                {/* <Title>YOUR BAG</Title>   
                <Top>
                    <TopButtom>CONTINUE SHOPPING</TopButtom>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Whishlist</TopText>
                    </TopTexts>
                    <TopButtom type="filled">CHECKOUT NOW</TopButtom>
                </Top> */}
                <Bottom>
                {cart.quantity > 0 ?              
                    (<> 
                        <Info>
                            {cart.products?.map( (product,index) => (                                                                               
                                <Product>
                                    <ProductDetail>
                                        <Link to={`/product/${product._id}`}>
                                            <Image src={product.img}/>
                                        </Link>
                                        <Details>
                                            <Link to={`/product/${product._id}`} style={{textDecoration:'none', color:"gray"}}>
                                                <ProductInfoTitle>{product.title}</ProductInfoTitle>
                                            </Link>
                                            <ProductInfo><b>Cantidad :</b>{product.quantity}</ProductInfo>
                                            <ProductInfo><b>ID :</b>985632</ProductInfo>
                                            <ProductInfo><b>Color :</b><ProductColor bg={product.color}/></ProductInfo>
                                            <ProductInfo><b>Size :</b>{product.size}</ProductInfo>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        {/* <ProductAmountContainer>
                                            <ProductInfo>
                                                <b>Cantidad :</b>
                                                <Add/>
                                                <ProductAmount>{product.quantity}</ProductAmount>
                                                <Remove/>                                            
                                            </ProductInfo>
                                        </ProductAmountContainer> */}
                                        <ProductInfo>
                                            <b style={{fontSize:"25px"}}> Precio : </b> <ProductPrice>${product.price * product.quantity} ARS</ProductPrice>
                                        </ProductInfo> 
                                        <button
                                            style={{
                                                border:"1px solid tea",
                                                background:"transparent",
                                                padding:"5px 50px",
                                                fontSize:"15px",
                                                color:"black",                                            
                                                cursor:"pointer"
                                            }}
                                            onClick={ () => handleRemoveProduct(product,index)}
                                        >Eliminar de la lista</button>
                                    </PriceDetail>
                                </Product>                                                     
                            ))}                                             
                        </Info>
                        <Summary>
                            <SummaryTitle>RESUMEN DE COMPRA</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Costo de envio</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total*0.05}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>TOTAL</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total+cart.total*0.05} ARS</SummaryItemPrice>
                            </SummaryItem>                   
                            <SummaryButton 
                                onClick={() => {
                                    setVisibility(true)
                                    handleCleanRemoveCart()
                                }}
                            >CONFIRMAR COMPRA</SummaryButton>
                        </Summary>
                    </>)
                :
                <>                
                    <div style={{
                        display:"flex", 
                        flexDirection:"column",
                        justifyContent:"center", 
                        alignItems:"center",
                        margin:"auto",
                        marginTop:"100px",
                        marginBottom:"200px"
                    }}>
                        <h1>RESUMEN DE COMPRA</h1> 
                        <p style={{margin:"20px 0"}}>No tienes nada agregado nada al carrito</p>   
                        <Link to={`/products/`}>
                            <SummaryButton>SEGUIR COMPRANDO</SummaryButton>
                        </Link>
                    </div>                                     
                </>
                }
                </Bottom>
            </Wrapper>
            <Footer/>
            
            <Modal visibility={visibility} setVisibility={setVisibility}>
                <ContenidoModal>
                <Done style={{color:"#1766dc", fontSize:"50px",}}/>
                    <h3>Compra confirmada </h3>                    
                    <button 
                        onClick={()=>{
                            setVisibility(false)
                            navigate("/products")
                        }}
                    >Continuar</button>                    
                </ContenidoModal>
            </Modal> 
        </Container>
    )
}

export default Cart;

const ContenidoModal =styled.div`
    display:flex ;
    flex-direction:column;
    justify-content:space-around ;
    align-items:center ;

    h3{
        font-size:20px ;
        font-weight:700 ;
        margin-bottom:25px ;
    }

    button{
        display:block;
        padding:10px 30px;
        border-radius:100px;
        color:#FFF;
        border:none;
        background:#1766DC ;
        cursor:pointer;
        transition:.3 ease all;
        &:hover{
            background:#0066ff;
        }
    }
`

const Container = styled.div``
const Wrapper = styled.div`
    padding-top: 120px;
    padding-bottom: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButtom = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor:pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display:flex;
    justify-content: space-between; 
    margin: 0px 5px 15px 0;      
    border-top:0.5px solid #eee  ;
    border-bottom:0.5px solid #eee  ;
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width:150px;
`
const Details = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
`
const ProductInfo = styled.span`
    margin:10px 0;
`
const ProductInfoTitle = styled.h3`
    font-size:25px ;
`
const ProductColor = styled.div`
    width:20px;
    height: 20px;
    border-radius:50%;
    display:inline-block ;
    margin-left:7px ;
    background-color: ${props => props.bg};
`
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
`
const ProductAmountContainer = styled.div`
    width:100% ;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.p`
    display: inline;
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.span`
    font-size: 25px;
    font-weight: 200;
`
const HR =styled.hr`
    background-color: #eee;
    border:none;
    height: 1px;
`
const Summary = styled.div`
    flex:1;
    border-left: 0.5px solid lightgray;
    background-color: ghostwhite;
    border-bottom:0 ;
    padding: 20px;    
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin:30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: ${props => props.type==="total" && "500"};
    font-size: ${props => props.type==="total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
    width:100%;
    padding: 10px 50px ;
    background-color:black;
    color:white;
    font-weight: 600;    
    margin-top:15px;
    border:none;
    cursor:pointer ;    
    &:hover{
        background-color:gray ;        
        color:white;
    }
`
