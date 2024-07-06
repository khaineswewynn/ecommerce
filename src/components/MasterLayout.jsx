import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
const MasterLayout=()=>{
    return (
        <>
        <Navbar></Navbar>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        </>
    )
}
export default MasterLayout