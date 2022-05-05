import React from "react"
import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"


export default function(){
    return ( 
        <div className="main-body">
            <Info />
            <div className="about-and-interest-div">
                <About />
                <Interest />
            </div>
            <Footer />
        </div>
    )
}