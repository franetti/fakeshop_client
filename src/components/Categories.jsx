import Rellax from 'rellax'
import styled from '@emotion/styled'
import {keyframes} from '@emotion/react'
import {useRef,useEffect} from 'react'
import { mobile } from '../responsive'
import CategoryItem from './CategoryItem'

//ASSETS
import remeras from '../assets/remeras22.png'
import buzos from '../assets/buzos2.png'
import pantalones from '../assets/pantalones2.png'
import camisas from '../assets/camisas.jpg'


const Container = styled.div`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    height:100%;        
    width: 100%;    
    ${mobile({padding:"0px", flexDirection:"column"})}
`
const ContainerCat = styled.div`
    width: 90%;
    height: 400vh;
    overflow: hidden;
    position: relative;    
    margin: 100px auto; 
`
const Image = styled.div`
    background-image: url('${ props => props.url}');
    background-size: cover;
    //background-position:top center;
    /* width: 600px;
    height: 700px;     */
    width: 35vw;
    height: 75vh;    
    position: absolute;
    top:${props => props.top};
    left:${props => props.left};    
`
const ContainerInfiniteText = styled.div`        
    width: 100%;    
    display: flex;
    overflow: hidden;
`
const animate = keyframes`
    0%{
        transform: translateX(100%)
    }
    100%{
        transform: translateX(-100%)
    }
`
const animate2 = keyframes`
    0%{
        transform: translateX(0)
    }
    100%{
        transform: translateX(-200%)
    }
`
const animate3 = keyframes`
    0%{
        transform: translateX(-100%)
    }
    100%{
        transform: translateX(100%)
    }
`
const animate4 = keyframes`
    0%{
        transform: translateX(-200%)
    }
    100%{
        transform: translateX(0%)
    }
`
const InfiniteText = styled.div`
    font-size: 4em;
    overflow: hidden;
    display: flex;
    flex-shrink:0;
    align-items: center;    
    white-space: nowrap;
    animation: ${animate} 30s linear infinite;    
    animation-delay: -30s;
`
const InfiniteText2 = styled.div`
    font-size: 4em;    
    overflow: hidden;  
    white-space: nowrap;
    display: flex;   
    flex-shrink:0;
    align-items: center;
    animation: ${animate2} 30s linear infinite;    
    animation-delay: -15s;
`
const InfiniteText3 = styled.div`
    font-size: 4em;
    /* width: 100%; */
    overflow: hidden;
    display: flex;
    flex-shrink:0;
    align-items: center;    
    white-space: nowrap;
    animation: ${animate3} 30s linear infinite;         
`
const InfiniteText4 = styled.div`
    font-size: 4em;    
    overflow: hidden;  
    display: flex;   
    flex-shrink:0;
    align-items: center;
    animation: ${animate4} 30s linear infinite;         
    animation-delay: -15s;   
`

const Categories = () => {    
    let rellaxRef = useRef([])

    useEffect( () => {
        rellaxRef.current.forEach( element => {
            new Rellax(element,{                
                center:true,
                vertical: true,
            })
        })       
    },[])

    const categories = [
        {
            id:1,
            img:remeras,
            title:"REMERAS"
        },
        {
            id:2,
            img:camisas,
            title:"CAMISAS"
        },
        {
            id:3,
            img:pantalones,
            title:"PANTALONES"
        },
        {
            id:4,
            img:buzos,
            title:"BUZOS"
        }
    ]        

    return (
    
        <Container >
            <ContainerInfiniteText style={{borderTop:"1px solid black"}}>
                <InfiniteText>
                    // POPULAR CATEGORYS // POPULAR CATEGORYS // POPULAR CATEGORYS 
                </InfiniteText> 
                 <InfiniteText2>
                    // POPULAR CATEGORYS // POPULAR CATEGORYS // POPULAR CATEGORYS 
                </InfiniteText2>               
            </ContainerInfiniteText>

            <ContainerInfiniteText style={{borderBottom:"1px solid black"}}>
                <InfiniteText3>
                    // POPULAR CATEGORYS // POPULAR CATEGORYS // POPULAR CATEGORYS 
                </InfiniteText3> 
                 <InfiniteText4>
                    // POPULAR CATEGORYS // POPULAR CATEGORYS // POPULAR CATEGORYS 
                </InfiniteText4>                           
            </ContainerInfiniteText>

            <ContainerCat>
                <div ref={el => rellaxRef.current.push(el)}  data-rellax-speed="7" style={{zIndex:"2", top:"4%", left:"40%", position:"absolute"}}>
                    <h2 style={{fontVariant:"unicase",fontStyle:"italic", fontSize:"8vw"}}>REMERAS</h2>
                    <h2 style={{fontVariant:"unicase",WebkitTextStroke:"2px black",WebkitTextFillColor:"transparent",fontStyle:"italic", top:"10%", left:"45%", zIndex:"2", fontSize:"8vw"}}>REMERAS</h2>
                    <h2 style={{fontVariant:"unicase",WebkitTextStroke:"2px black",WebkitTextFillColor:"transparent",fontStyle:"italic", top:"10%", left:"45%", zIndex:"2", fontSize:"8vw"}}>REMERAS</h2>
                </div>                
                <Image   url={remeras} top="5%" left="5%"/>
                <Image   url={remeras} top="0%" left="65%"/>

                <div ref={el => rellaxRef.current.push(el)}  data-rellax-speed="7" style={{zIndex:"2",top:"27%", left:"25%", position:"absolute"}}>
                    <h2 style={{fontVariant:"unicase",fontStyle:"italic", top:"10%", left:"25%", zIndex:"2", fontSize:"8vw"}}>CAMISAS</h2>
                    <h2 style={{fontVariant:"unicase",WebkitTextStroke:"2px black",WebkitTextFillColor:"transparent",fontStyle:"italic", top:"10%", left:"45%", zIndex:"2", fontSize:"8vw"}}>CAMISAS</h2>
                    <h2 style={{fontVariant:"unicase",WebkitTextStroke:"2px black",WebkitTextFillColor:"transparent",fontStyle:"italic", top:"10%", left:"45%", zIndex:"2", fontSize:"8vw"}}>CAMISAS</h2>
                </div>                
                <Image  url={camisas} top="30%" left="5%"/>
                <Image  url={camisas} top="25%" left="65%"/>                
                
                <div ref={el => rellaxRef.current.push(el)}  data-rellax-speed="7" style={{zIndex:"2", top:"52%", left:"45%", position:"absolute"}}>
                    <h2 style={{fontVariant:"unicase",fontStyle:"italic", top:"10%", left:"25%", zIndex:"2", fontSize:"8vw"}}>BUZOS</h2>
                    <h2 style={{fontVariant:"unicase",WebkitTextStroke:"2px black",WebkitTextFillColor:"transparent",fontStyle:"italic", top:"10%", left:"45%", zIndex:"2", fontSize:"8vw"}}>BUZOS</h2>
                    <h2 style={{fontVariant:"unicase",WebkitTextStroke:"2px black",WebkitTextFillColor:"transparent",fontStyle:"italic", top:"10%", left:"45%", zIndex:"2", fontSize:"8vw"}}>BUZOS</h2>
                </div>                
                <Image  url={buzos} top="55%" left="5%"/>
                <Image  url={buzos} top="50%" left="65%"/>                
                
                <div ref={el => rellaxRef.current.push(el)}  data-rellax-speed="7" style={{zIndex:"2", top:"77%", left:"5%", position:"absolute"}}>
                    <h2 style={{fontVariant:"unicase",fontStyle:"italic", top:"10%", left:"25%", zIndex:"2", fontSize:"8vw"}}>PANTALONES</h2>
                    <h2 style={{fontVariant:"unicase",WebkitTextStroke:"2px black",WebkitTextFillColor:"transparent",fontStyle:"italic", top:"10%", left:"45%", zIndex:"2", fontSize:"8vw"}}>PANTALONES</h2>
                    <h2 style={{fontVariant:"unicase",WebkitTextStroke:"2px black",WebkitTextFillColor:"transparent",fontStyle:"italic", top:"10%", left:"45%", zIndex:"2", fontSize:"8vw"}}>PANTALONES</h2>
                </div>                               
                <Image url={pantalones} top="80%" left="5%"/>                                
                <Image url={pantalones} top="75%" left="65%"/>                                
            </ContainerCat>

            <ContainerInfiniteText style={{borderTop:"1px solid black"}}>
                <InfiniteText>
                    // NUEVOS LANZAMIENTOS // NUEVOS LANZAMIENTOS // NUEVOS LANZAMIENTOS 
                </InfiniteText> 
                 <InfiniteText2>
                    // NUEVOS LANZAMIENTOS // NUEVOS LANZAMIENTOS // NUEVOS LANZAMIENTOS 
                </InfiniteText2>               
            </ContainerInfiniteText>

            <ContainerInfiniteText style={{borderBottom:"1px solid black"}}>
                <InfiniteText3>
                    // NUEVOS LANZAMIENTOS // NUEVOS LANZAMIENTOS // NUEVOS LANZAMIENTOS 
                </InfiniteText3> 
                 <InfiniteText4>
                    // NUEVOS LANZAMIENTOS // NUEVOS LANZAMIENTOS // NUEVOS LANZAMIENTOS 
                </InfiniteText4>                           
            </ContainerInfiniteText>

        </Container>
    )
}
export default Categories
