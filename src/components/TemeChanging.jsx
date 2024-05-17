import { useState } from "react"


const ThemeChanging=()=>{

    const [color, setColor]= useState("cyan")
    return(
        <>
        <div style={{backgroundColor:color, width:"70%"}}>
        <h1>This Is Background Color Chnaging</h1>
        </div>
        <button onClick={()=>{setColor("green")}}>Green</button><span> </span><br />
        <button onClick={()=>{setColor("yellow")}}>Yellow</button><span> </span><br />
        <button onClick={()=>{setColor("blue")}}>Blue</button><span> </span><br />
        <button onClick={()=>{setColor("orange")}}>Orange</button><span> </span><br />

        </>
    )
}
export default ThemeChanging;