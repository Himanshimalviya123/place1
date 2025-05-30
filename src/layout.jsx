import { Link, Outlet } from "react-router-dom";
const Layout =()=>{
    return(
        <>
        <div className="head">
<Link to="home">home</Link>
<Link to="about">about</Link>
<Link to="contact">contact</Link>
</div>
<hr/>

<Outlet/>

<hr/>

www.my company.com all right reversed 2025
        </>
    )
}
export default Layout;