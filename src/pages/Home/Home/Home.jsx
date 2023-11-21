import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Lider from "../Lider/Lider";
import News from "../News/News";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="bg-[#000000]">
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Lider></Lider>
            <News></News>
        </div>
    );
};

export default Home;