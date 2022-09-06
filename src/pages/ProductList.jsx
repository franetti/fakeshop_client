import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import styled from '@emotion/styled'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FiltercContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:90% ;
    margin-top:110px ;
`
const Filter = styled.div`
    margin: 20px;
`
const  FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {

    const location = useLocation()
    const category = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilter = (e) => {
        let value = e.target.value
        switch(value){
            case 'blanco':
                value="white";
                break;
            case 'negro':
                value="black";
                break;
            case 'rojo':
                value="red";
                break;
            case 'amarillo':
                value="yellow";
                break;
            case 'verde':
                value="green";
                break;
            case 'azul':
                value="blue";
                break;
            case 'rosa':
                value="pink";
                break;
            default:
                break;
        }

        setFilters({
            ...filters,
            [e.target.name] : value
        })
    }

    return (
        <Container>            
            <Navbar top="0" position="relative" color="black"/>                                               
            {/*<FiltercContainer style={{marginTop:"100px"}}>
                <div>
                    <h2 >
                        {category 
                            ? "categorys / " + category
                            : location.pathname + "Products"
                        }
                    </h2>   
                </div>       
                 <div style={{display:"flex"}}>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select name="color" onChange={handleFilter}>
                            <Option disabled selected>Colors</Option>
                            <Option>blanco</Option>
                            <Option>negro</Option>
                            <Option>rojo</Option>
                            <Option>verde</Option>
                            <Option>amarillo</Option>
                            <Option>azul</Option>
                            <Option>rosa</Option>                        
                        </Select>
                        <Select name="size" onChange={handleFilter}>
                            <Option disabled selected>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select onChange={ e => setSort(e.target.value)}>
                            <Option value="newest">Newest</Option>
                            <Option value="asc">Price Asce</Option>
                            <Option value="des">Price Desc</Option>                        
                        </Select>
                    </Filter>  
                </div>               
            </FiltercContainer>*/} 

            <Products category={category} filters={filters} sort={sort} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
