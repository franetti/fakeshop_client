import {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addProduct} from '../redux/cartRedux'
import {publicRequest} from '../requesMethod'
import styled from '@emotion/styled'
import { Add, Remove, Done } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import Navbar from '../components/Navbar'
import Anuncio from '../components/Anuncio'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Modal from '../components/Modal'


const Product = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const navigate = useNavigate();

    const [product,setProduct] = useState({});
    const [activeImg,setActiveImg] = useState();
    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    const [visibility, setVisibility] = useState(false);

    const dispatch = useDispatch()

    useEffect( () => {
         const getProduct = async () => {
            try {
                const response = await publicRequest.get("/products/find/"+id)                
                setActiveImg(response.data.img)                
                setColor(response.data.color[0])
                setSize(response.data.size[0])
                setProduct(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    },[id])

    const handleQuantity = (mood) => {
        if(mood === "inc"){
            setQuantity(quantity+1);
        }else {
            quantity > 1 && setQuantity(quantity-1);
        }
    }
    
    const handleClick = () => {        
        dispatch(addProduct({...product, quantity, color, size}))
    }

    return (
        <Container> 
            <Anuncio/>
            <Navbar color="black"/>           
            <Wrapper>                            
                <ImgContainer>
                    <div style={{width:"15%"}}>
                        {product.img ? (
                            <>
                            <div>                            
                                <ImgWrapper 
                                    src={product.img} 
                                    onClick={() => setActiveImg(product.img)}                                 
                                    active={activeImg === product.img && true}                                                               
                                />
                            </div>
                            <div>
                                <ImgWrapper 
                                    src={product.imgAnimate} 
                                    onClick={() => setActiveImg(product.imgAnimate)} 
                                    active={activeImg === product.imgAnimate && true}                                                               
                                />
                            </div>
                            </>
                        ):(
                            <CircularProgress size={50} />
                        )}                        
                    </div>                    
                    {activeImg ? <Img src={activeImg}/> : (
                        <div style={{width:"85%",display:"flex",justifyContent:"center"}}>
                            <CircularProgress size={50} />
                        </div>
                    )}                                        
                </ImgContainer>

                <InfoContainer>
                    {Object.keys(product).length !== 0 ? (
                        <>
                        <Title>{product.title}</Title>
                        <Desc>{product.desc}</Desc>                        
                        <Price>${product.price} ARS</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Colors</FilterTitle>
                                { product.color?.map( color => <FilterColor key={color} color={color} onClick={() => setColor(color)}/> ) } 
                            </Filter>                        
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    { product.size?.map( size => <FilterSizeOption key={size} onChange={() => setSize(size)}>{size}</FilterSizeOption> ) }
                                </FilterSize>
                            </Filter>                        
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity("dec")}/>
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity("inc")}/>
                            </AmountContainer>
                            <Button 
                                onClick={() => { 
                                    handleClick()
                                    setVisibility(true)
                                }}                                
                            >Add to Cart</Button>
                        </AddContainer>
                        </>
                    ) : (                      
                        <CircularProgress size={50} />                      
                    )}
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>


            <Modal visibility={visibility} setVisibility={setVisibility}>
                <ContenidoModal>
                    <Done style={{color:"#1766dc", fontSize:"50px",}}/>
                        <h3>Agregaste a tu carrito de compas:</h3>                                            
                        <p>- {product.title} x{quantity}</p>
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

export default Product

const ContenidoModal =styled.div`
    display:flex ;
    flex-direction:column;
    justify-content:space-around ;
    align-items:center ;

    h3{
        font-size:20px ;
        font-weight:700 ; 
        text-align:center ;
        margin-bottom: 10px;
    }
    p{
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

const Container = styled.div`
    width:100%;
`
const Wrapper = styled.div`
    padding-top: 120px;
    padding-bottom: 20px;
    width: 90%;
    margin: auto;
    display: flex;
`
const ImgContainer = styled.div`
    flex:3;
    display: flex;       
`
const Img = styled.img`
    width: 85%;     
    object-fit:cover;    
    object-position: top;
    margin: 0 20px;    
`
const ImgWrapper = styled.img`
    width:100%;
    border:2px solid gray;
    opacity:${props => props.active ? 1 : 0.75 };
    cursor:pointer ;
    transition:all 0.25s ;
`
const InfoContainer = styled.div`
    flex:1;

`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0 ;
`
const Price = styled.span`
    font-weight: 100;
    font-size:30px;
`
const FilterContainer = styled.div`
    width:60%;
    margin:25px 0;
    display: flex;
    justify-content: space-between;
    
` 
const Filter = styled.div`
    display:flex;
    align-items: center;  
    margin-right:20px ;
` 
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right:3px ;
` 
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    border: 1px solid lightgray;
    margin: 0 5px;
    cursor: pointer;    
` 
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px 10px;
    cursor:pointer ;

` 
const FilterSizeOption = styled.option`` 
const AddContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction:column ;
` 
const AmountContainer = styled.div`
    display:flex;    
    justify-content: space-evenly ;
    width:100% ;
    border:1px solid black;    
    font-weight: 700;
    align-items: center;
    cursor:pointer;
` 
const Amount = styled.span`
    width:30px;
    height:30px;;
    border-radius:10px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
` 
const Button = styled.button`
    padding: 10px;
    margin-top:10px;
    width:100% ;
    border:none;
    background-color: black;
    color:white;
    cursor:pointer;
    transition: background-color 0.2s ease;
    &:hover{
        background-color:gray;
        color:white;
    }
` 
