import React from "react"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import Data from "./data"

export default function(){
    const attr= Data.map(item => {
        return (
            <Card  
            key= {item.title}
            item= {item}
            />
        )
    })
    return(
        <div className= "main">
            <Navbar />
            {attr}
        </div>
    )
}