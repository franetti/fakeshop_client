import React from 'react';
import styled from '@emotion/styled';
import { Close } from '@mui/icons-material';

const Modal = ({children,visibility,setVisibility }) => {

    return (  
        <>  
            {visibility && 
                <Overlay>
                    <ContenedorModal>
                        <Encabezado>          
                            <BotonCerrar onClick={()=>setVisibility(false)}>
                                <Close></Close>
                            </BotonCerrar>                  
                        </Encabezado>
                        {children}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    );
}
 
export default Modal;

const Overlay = styled.div`
    z-index:1000;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw ;
    height:100vh;
    background:rgba(0,0,0,.5);
    position:fixed;
    top:0 ;
    left:0;
`

const ContenedorModal = styled.div`
    width:300px;
    min-height:200px ;
    background-color:#fff ;
    position:relative ;
    box-shadow:rgba(100, 100,111,0.2) 0px 7px 29px 00px;
    border-radius:5px ;
    padding:20px ;
`

const Encabezado = styled.div`
    display:flex;
    align-items:center ;
    justify-content:space-between ;
    margin-bottom:20px ;
    padding-bottom:20px;
    border-bottom:1px solid #e8e8e8 ;
`
const BotonCerrar = styled.div`
    position:absolute;
    display:flex;
    top:10px;
    right:20px;
    width:25px;
    height:25px;
    border:none;
    background:none;
    cursor:pointer;
    transition:.3 ease all;
    border-radius:5px;
    color:#1766DC;
    &:hover{
        background:#f2f2f2;
    }
`

