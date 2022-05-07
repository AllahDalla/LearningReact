import React from "react"


export default function(props){
    return (
        <div className= "card--div">
            <div className= "card">
                <div className="img-div">
                    <img className= "card-img" src={props.item.imageUrl}  alt= "picture of journey"/>
                </div>
                <div className= "info-div">
                    <div className = "location-div">
                        <img className= "location-img" src="../Images/figmaIcon-location.png" alt="picture of location icon" />
                        <span className="location"> {props.item.location} </span>
                        <a href={props.item.googleMapsUrl}> View on google maps </a>
                    </div>
                    <h1 className="title"> {props.item.title} </h1>
                    <p className="para-top"> {props.item.startDate}-{props.item.endDate}</p>  
                    <p className="para-bottom">{props.item.description} </p>
                </div>
            </div>
            <hr/>
        </div>
    )
}