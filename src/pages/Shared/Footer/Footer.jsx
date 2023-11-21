import { Link } from 'react-router-dom';
import icon from '../../../assets/images/icon - Copy.png'
import union from '../../../assets/images/Union.png'
import ico from '../../../assets/images/icon(1).png'
import '../Footer/footer.css'
import { Helmet } from 'react-helmet';
import { FaArrowRight } from 'react-icons/fa';



const Footer = () => {



    return (
        <footer className="  bg-[#242424]  text-neutral-content mt-32">

            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
            </Helmet>

            <div className=" container mx-auto flex justify-center ">
                <h1 className=" text-9xl font-semibold text-center leading-[9rem]">Have a project <br /> in mind?</h1>
            </div>
            <div className=" flex justify-center py-20">
                <button className=' flex items-center justify-center gap-2 py-4 px-6 font-bold text-[#FFFFFF] rounded-full border-[#FFFFFF] border text-xs hover:bg-slate-300'>Request a project <span className='w-[10px]'><img src={union} alt="" /></span>
                </button>
            </div>


            <footer
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="  bg-[#FFFFFF]  text-base-content w-8/12 rounded-t-3xl mx-auto">
                <div className="flex  justify-between mx-16 items-center">
                    <div className=" flex items-center gap-3">
                        <Link className=' border border-[#555555] hover:bg-slate-200 p-3 rounded-full'><img src={icon} alt="" /></Link>
                        <p className=' text-[#555555] text-base font-semibold'>info@yourdomin.com</p>
                    </div>

                    <div className=" my-7">
                        <div className="wrapper ">
                            <div className="button ">
                                <div className="icon">
                                    <i className="fab fa-facebook-f"></i>
                                </div>

                            </div>
                            <div className="button">
                                <div className="icon">
                                    <i className="fab fa-twitter"></i>
                                </div>

                            </div>
                            <div className="button">
                                <div className="icon">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                            <div className="button">
                                <div className="icon">
                                    <i className="fab fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" border-base-300 border-t mx-16"></div>

                <footer className="footer p-10 text-base-content mx-16">
                    <nav>
                        <header className="footer-title">Who we are</header>
                        <a className="link link-hover">Studio</a>
                        <a className="link link-hover">Our story</a>
                        <a className="link link-hover">Code of conduct</a>
                        <a className="link link-hover">Careers</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Our services</header>
                        <a className="link link-hover">Digital marketing</a>
                        <a className="link link-hover">Branding design</a>
                        <a className="link link-hover">UI/UX design</a>
                        <a className="link link-hover">Web development</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Contact</header>
                        <a className="link link-hover">1901 Thornridge Cir.</a>
                        <a className="link link-hover">Shiloh, Hawaii 63</a>
                        <a className="link link-hover">P : (00) 123 456 779</a>
                    </nav>
                    <form>
                        <header className="footer-title">Newsletter</header>
                        <div className="flex items-center border-b border-teal-500 py-2">
                            <img src={ico} alt="" />
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="info@yourmail.com" aria-label="Full name"
                            />
                            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                <FaArrowRight></FaArrowRight>
                            </button>

                        </div>
                    </form>
                </footer>
                <div className="border-t mx-16"></div>
                <footer className="footer px-16 py-4   text-base-content border-base-300 ">
                    <aside className="items-center grid-flow-col">

                        <p>Copyright © 2023 Agon.</p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">

                            Privacy Policy
                        </div>
                    </nav>
                </footer>
            </footer>

        </footer>
    );
};

export default Footer;