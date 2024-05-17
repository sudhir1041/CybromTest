import { Link , Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <div style={{width:"100%", height:"10vh", backgroundColor:"blue", color:"white" , display:"flex"}}>
        <Link style={{marginLeft:"1%", marginRight:"1%"}} to="home">Home</Link>    |  
        <Link style={{marginLeft:"1%" , marginRight:"1%"}} to="about">About</Link>   |  
        <Link style={{marginLeft:"1%" , marginRight:"1%"}} to="faculty">Faculty</Link>   |  
        <Link style={{marginLeft:"1%" , marginRight:"1%"}} to="ourcourses">Our Cources</Link>  |  
        <Link style={{marginLeft:"1%" , marginRight:"1%"}} to="contact">Contact Us</Link>  
        </div>

        <hr size="3" color="red" />
        <Outlet/>

        <hr size="3" color="red" />
        www.Footer.com
        </>
    )
}

export default Layout;