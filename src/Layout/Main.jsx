import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { useEffect } from "react";
import Aos from "aos";


const Main = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="bg-[#000000]">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;