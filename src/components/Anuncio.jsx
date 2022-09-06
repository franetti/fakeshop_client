import styled from '@emotion/styled'

const Container = styled.div`
    height: 40px;    
    color: white;
    background-color: #1d1d1f;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: 400 ;
`

const Anuncio = () => {
    return (
        <div>
            <Container>
            3 & 6 Cuotas S-Interés / Envíos a todo el país. (Local Abierto - Lun a Dom 10 a 20hs) 
            </Container>
        </div>
    )
}

export default Anuncio;
