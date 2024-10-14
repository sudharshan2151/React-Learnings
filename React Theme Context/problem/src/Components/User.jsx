import React from 'react'



export default function User({name,img,position, level,points,isDarkTheme}) {
    
    const value = {
        "isDarkTheme":isDarkTheme
    }

    return (
        <div data-testid = "user" style={
            {
                display:"flex",
                gap : "10px",
                color:value.isDarkTheme?"white":"black",
                backgroundColor:value.isDarkTheme?"black":"white"
            }
        }>
            <div>
                <div style={{
                     display:"flex",
                }}>
                    <img src={img} alt="" style={{
                        width:"50%"
                    }}/>
                    <div>
                         <h4>{name}</h4>
                         <h4>{position}</h4>
                    </div>
                </div>
                <div>
                    <input type = "range" data-testid = "level"  value={level} style={
                        {
                            accentColor:!isDarkTheme?"blue":"yellow"
                        }
                    }/>
                    professional level {level}
                </div>
            </div>
            <div>
                {points} Points
            </div>
        </div>
    )
}
