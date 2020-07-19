Home
import React from 'react'
import Blog from './Blog'
import Produk from '../Class/Produk';

const Home = () => {
    return <div>
      { 
      <div>
      <Produk nama="Macbook Pro 2020" stock="10" harga="33000000"/>
      <Produk nama="Macbook Pro 2019" stock="15" harga="53000000"/>
      <Produk nama="Macbook Pro 2021" stock="14" harga="33000000"/>
      <Produk nama="Macbook Pro 2022" stock="50" harga="63000000"/>
      <Produk nama="Macbook Pro 2023" stock="100" harga="37000000"/>
      <Produk nama="Macbook Pro 2024" stock="108" harga="39000000"/>
      </div>
      
      /*  <Blog 
             tanggal="07 Juni 2020"
            judul="Teknologi Blockchain"
            summary="Generate Lorem Ipsum placeholder text for use in your graphic."/>
         <Blog 
             tanggal="08 Juni 2020"
            judul="Teknologi Internet of Things"
            summary="Generate Lorem Ipsum placeholder text for use in your graphic."/>
         <Blog 
             tanggal="09 Juni 2020"
            judul="Design Pattern Laravel"
      summary="Generate Lorem Ipsum placeholder text for use in your graphic."/>*/}
    </div>
}

export default Home;
