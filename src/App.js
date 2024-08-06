import React from 'react'
import Product from './Product/Product';
import './App.css'
 

export default function App() {

  const allProducts = [
    {id:1 ,title:'V15 G4 لنوو - Athlon Silver 7120U 610M 8GB 256GB', image:'images/1.webp',  price:14_800_000, count:12},
    {id:2 ,title:'IdeaPad Slim 3 15AMN8 لنوو - Ryzen 5 7520U 610M 8GB 256GB', image:'images/2.webp',  price:27_800_000, count:10},
    {id:3 ,title:'VivoBook 15 X1502ZA ایسوس - Core i3-1220P UHD 8GB 512GB', image:'images/3.webp',  price:20_200_000, count:1},
    {id:4 ,title:'IdeaPad Slim 3 لنوو - Ryzen 7 7730U RX Vega 8 8GB 512GB', image:'images/4.webp',  price:23_200_000, count:31},
    {id:5 ,title:'Vivobook Go 15 OLED E1504FA ایسوس - Ryzen 5 7520U 610M 8GB ', image:'images/5.webp',  price:14_800_000, count:20},
    {id:6 ,title:'IdeaPad 5 لنوو - Core i5-1235U MX550 16GB 512GB', image:'images/6.webp',  price:23_800_000, count:2},
    {id:7 ,title:'VivoBook 15 X1502ZA ایسوس - Core i5-12500H Iris Xe 16GB 512GB', image:'images/7.webp',  price:20_200_000, count:22},
    {id:8 ,title:'Vostro 3520 دل - Core i5-1235U Iris Xe 8GB 256GB', image:'images/8.webp',  price:27_900_000, count:8},
    {id:9 ,title:'ENVY X360 14-ES0013DX اچ پی - Core i5-1335U Iris Xe 8GB 512GB', image:'images/9.webp',  price:41_500_000, count:18 },
  ]

  return (
    <div className='container'>
     <Product {...allProducts[0]}/>
     <Product {...allProducts[1]}/>
     <Product {...allProducts[2]}/>
     <Product {...allProducts[3]}/>
     <Product {...allProducts[4]}/>
     <Product {...allProducts[5]}/>
     <Product {...allProducts[6]}/>
     <Product {...allProducts[7]}/>
     <Product {...allProducts[8]}/>

    
    </div>
  );
}