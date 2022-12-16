import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadProducts from "./loadProducts";
import Menu from "./menu";


function Banner(){
   
   const[item,setItem] = useState([])
   const [isLoad,setIsLoad]=useState("")
   const [selectedItem,setSelectedItem]=useState([])

    useEffect(()=>{
        axios.get("https://www.app.tutorjoes.in/mobile/getAllFood").then(res=>{setItem(res.data)
     
      })
    },[])

    const loadItem = (e)=>{
      setIsLoad(e.target.id)
     
      const product=item.items;
      setSelectedItem(product.filter(i=>e.target.id===i.FTYPE))
    }
    // console.log(item)

    return(
      
      <div className="container">
        <div className="ban">
          <h2>Joe's Kitchen</h2>
          <i className="bi bi-cart2"></i>
          <span id="num">0</span>
       </div>
       <div className="slider">
       <div className="brand-banner">
      <h3>Joe's Kitchen</h3>
      <p>Have a break Eat Fresh..!</p>
    </div>
       </div>
    <div className="menu-item" onClick={(e)=>loadItem(e)}>
  
      <button className="menu" data-title="Latest Products" id="Latest">Latest</button>
      <button  className="menu" data-title="Favourite" id="Fav">Favourite</button>
      <button  className="menu" data-title="Vegetarian" id="Veg">Veg</button>
      <button  className="menu" data-title="Non Vegetarian" id="Non-Veg">Non Veg</button>
      <button  className="menu" data-title="Juice" id="Juice">Juice</button>
      <button  className="menu" data-title="Cakes" id="Cake">Cakes</button>
      <button  className="menu" data-title="Sweets" id="Sweet">Sweets</button>
      <button  className="menu" data-title="Ice Cream" id="IceCream">Ice Cream</button>
      <button  className="menu" data-title="Pizza" id="Pizza">Pizza</button>
      <button  className="menu" data-title="Soups" id="Soup">Soup</button>
    
    </div>

    <div className="dishes">
      <h1>
        {isLoad?<LoadProducts ftype={isLoad} />:<></>}
        </h1>
        
    </div>
   <div>
     <Menu item={selectedItem}/>
   </div>


      </div>
        
    )
}
export default Banner;