import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import { mobile } from '../responsive'
import Product from './Product'
import { CircularProgress } from '@mui/material'

const Container = styled.div`    
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-evenly;

    width: 100%;
    margin: auto;    
    ${mobile({flexDirection:"column"})}
`

const Products = ({category, filters, sort, viewForHome}) => {
    const [products,setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect( () => {
        const getProducts = async () => {
            let url = category ? `https://fakeshop-api.onrender.com/api/products?category=${category}` : "https://fakeshop-api.onrender.com/api/products"          
            try { 
                const response = await fetch(url) 
                const result = await response.json()      
                setProducts(result)                                                                                       
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    },[category] )

    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter( (item) =>
                    Object.entries(filters).every(([key,value]) =>                       
                        item[key].includes(value)
                    )
                )
            )
    },[products,category,filters])

    useEffect(() => {   
        if(sort==="newest"){            
            setFilteredProducts(prev => 
                [...prev].sort((a,b) => a.creratedAt - b.createdAt)
            );
        } else if( sort === "asc" ){
            setFilteredProducts(prev => 
                [...prev].sort((a,b) => a.price - b.price)
            );
        } else{
            setFilteredProducts(prev => 
                [...prev].sort((a,b) => b.price - a.price)
            );
        }        
    },[sort])
    
    return (
        <Container>
            {products.length !== 0 ? (                
                viewForHome
                    ? products.map( (product,index) => index < 6 && <Product product={product} key={index}/>)                    
                    : category
                        ? filteredProducts.map( (product,index) => <Product product={product} key={index}/>)            
                        : products.map(( product, index) => <Product product={product} key={index}/>)                    
                
            ) : (
                <CircularProgress size={150} style={{margin:"200px 0"}}/>
            )}
        </Container>
    )
}

export default Products
