import { Link , Outlet } from "react-router-dom";

const Home=()=>{
    return(

        <>
        <div style={{display:"flex", justifyContent:"space-between", width:"100%", height:"auto"}}>
            <div style={{width:"20%"}}>
                <Link to="design">Create Design</Link><br />
                <Link to="display">Display Data</Link><br />
                <Link to="counter">Counter</Link><br />
                <Link to="stduentform">Student Form</Link><br />
                 <Link to="theme">Theme Chnaging</Link><br />
                  <Link to="salary">Salary</Link><br />
                 </div>
            <div style={{width:"80%"}}>
                <Outlet/>
            </div>
        </div>
        <hr  color="blue"/>
        </>
    )
}
export default Home;