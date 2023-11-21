import logoRight from '../../../assets/imag/logo-light 1.png'
import img from '../../../assets/imag/Frame.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Category = () => {
    return (

        <div className=" flex justify-center items-center gap-[163px]">
            <div className=" w-[34%]">
                <span><img src={logoRight} alt="" /></span>
                <h3 className='text-[#FDFDFF] text-5xl font-bold leading-[64px] pt-14'>Windows Servers</h3>
                <p className='text-[#FDFDFF] py-7'>
                    CDN77 is a global content delivery network that is known for low <br /> latency delivery, no-compromise security, reliability, and strong <br /> customer focus.
                </p>
                <p className='text-[#FDFDFF] pb-7'>
                    Our 120 Tbps network stretches over six continents and can <br />
                    easily handle large volume traffic and unexpected peaks.
                </p>
                <button
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="btn btn-error  capitalize bg-[#FD3246] text-white">More DDOS Protection
                </button>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className=" flex gap-3 items-center py-7">
                    <div className=" flex text-white items-center gap-1">
                        <span><FaFacebookF></FaFacebookF></span>
                        <p className=''>Facebook</p>
                    </div>
                    <div className=" flex text-white items-center gap-1">
                        <span><FaTwitter></FaTwitter></span>
                        <p className=''>Twitter</p>
                    </div>
                    <div className=" flex text-white items-center gap-1">
                        <span><FaLinkedinIn></FaLinkedinIn></span>
                        <p className=''>Linkedin</p>
                    </div>
                </div>
            </div>
            <div className="">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Category;