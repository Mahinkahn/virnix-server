
import hero from '../../../assets/imag/Hero Section.png'; // Import the image

const Banner = () => {
    return (
        <div className=' h-screen relative'>
            <div className="  absolute bottom-[400px] left-[200px]">
                <h1
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className=' text-5xl font-urbanist font-extrabold leading-[64px] text-[#FFFFFF]'>
                    Empowering Tomorrow <br />
                    with World-Class Hosting <br />
                    Solutions</h1>
                <p
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className='text-[#FFFFFF] leading-[24px] py-4 mb-3 text-base'>
                    Discover the strength of [Holding Company Name] s diverse <br />
                    portfolio in infrastructure-as-a-service.</p>
                <button
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="btn btn-error normal-case bg-[#FD3246] text-white">Learn More About Our Brands</button>
            </div>
            <div className="">
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;
