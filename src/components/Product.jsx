import React,{useRef, useEffect} from 'react'
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {Link} from "react-router-dom"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { mobile } from '../responsive';
import { CircularProgress } from '@mui/material';

const Product = ({ product }) => {
    
    return (
        <Container>
            <Link to={`/product/${product._id}`}>
            <ImgContainer>
                <Image src={product.img}/>                
                <ImageTransition src={product.imgAnimate}/>          
            </ImgContainer>  
            </Link>                    
            <PriceContainer>
                <p style={{marginBottom:"5px"}}>{product.title}</p>
                <h4>${product.price} ARS</h4>
            </PriceContainer>                               
        </Container>
    )
}

export default Product


const Container = styled.div`    
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center; 
    position: relative;
    transition: all 0.3s ease;
    ${mobile({height:"100px!important"})}
`
const ImgContainer = styled.div`    
    position: relative;    
    display: flex;
    width: 600px;
    height: 800px;    
`
const Image = styled.img`    
    height: 100%;
    width: 100%; 
    object-fit:cover ;
`
const ImageTransition = styled.img`    
    position: absolute;    
    opacity: 0;
    top: 0;    
    height: 100%;
    width: 100%;
    object-fit:cover ;
    transition: all 0.5s ease;
    &:hover{
       opacity:1;
    }    
`
const PriceContainer = styled.div`
    background-color: white;
    text-align: center;
    padding: 10px;
`

