import React from 'react'
import Anuncio from '../components/Anuncio'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'



function Home() {
    return (
        <>  
            <Anuncio/>                        
            <>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products viewForHome={true}/>
            <Newsletter/>
            <Footer/>
            </>            
        </>
    )
}

export default Home
