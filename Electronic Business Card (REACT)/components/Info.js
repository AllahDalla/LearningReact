import React from "react"


export default function(){
    return(
        <div className="info-div">
            <img className="img" src="../Images/design-card-proj.png" alt="picture of a woman" />
            <div className="info-div-top">
                <p className="person-name">LAURA SMITH</p>
                <p className="person-career">Frontend Developer</p>
                <p className="person-website">laurasmith.website</p>
            </div>
            <div className="info-div-bottom">
                <div className="email-div">
                    <img src="../Images/mail-icon.png" alt="email icon"  className="email-icon"/>
                    <h3 className="email-name"> Email </h3>
                </div>
                <div className="linkedin-div">
                    <img src="../Images/linkedin.png" alt="linkedin icon" className="linkedin-icon" />
                    <h3 className="linkedin-name"> LinkedIn </h3>
                </div>                
            </div>
        </div>
    )
}