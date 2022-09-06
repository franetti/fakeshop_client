import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {mobile}from '../responsive'
import remeras from '../assets/slider3.jpg'
import boys from '../assets/slider1.jpg'
import girls from '../assets/slider2.jpg'



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
    position: relative;
    overflow: hidden;
    ${mobile({display:"none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: ghostwhite;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${(props) => props.direction === "left" && "10px"};
    right:  ${(props) => props.direction === "right" && "10px"};
    bottom: 0;
    top: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: transform 1.5s ease;
    transform: translateX( ${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;
    background-color: black;
`
const ImgContainer = styled.div`
    height: 100%;
    /* flex: 1; */
`

const Image = styled.img`
    height: 100%;
    width: 100vw;
    object-fit: cover;    
`   

const InfoContainer = styled.div`
    /* flex: 1; */
    padding: 50px;
    position: absolute;        
    color: ghostwhite;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
`

const Title = styled.h1`
    font-size: 70px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    color: whitesmoke;
    border: 1px solid whitesmoke ;
    cursor: pointer;
    &:hover{
        background-color: white;
        color:black;
    }
`

const Cortina = styled.div`
    width: 100%;
    height: 100%;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    
    //HACER UN OBJETO CON LA DATA DE CADA SLIDE, HACE RUN RENDERIZADO CON .MAP Y COPIAR UNA SOLA VEZ EL CODIOG PSANDO PROPS.

    const handleClick = direction => {
        if(direction==="left"){
            setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };


    useEffect(() => {
        const autoSlide = setInterval( () => {
            setSlideIndex( slideIndex < 2 ? slideIndex+1 : 0)
        }, 7000)    
        return () => clearInterval(autoSlide);
      }, [slideIndex]);
    
    return (
        <Container>
            <Arrow direction={"left"} onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {/* HACER UN .MAP PARA LOS SLIDE */}
                <Slide>
                    <ImgContainer>
                        <Image src={boys}/>
                    </ImgContainer>   
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Button>BUY NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src={girls}/>
                    </ImgContainer>   
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Button>BUY NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src={remeras}/>
                    </ImgContainer>   
                    <InfoContainer>
                        <Title>POPULAR SALE</Title>
                        <Button>BUY NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>   
            <Arrow direction={"right"} onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon/>
            </Arrow>   
        </Container>
    )
}

export default Slider
