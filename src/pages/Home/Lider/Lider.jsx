import Slider from 'react-slick';
import logo1 from '../../../assets/icon/logo(1).png'
import logo2 from '../../../assets/icon/logo(2).png'
import logo3 from '../../../assets/icon/logo(3).png'
import logo4 from '../../../assets/icon/logo(4).png'
import logo5 from '../../../assets/icon/logo(5).png'

const Lider = () => {

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear"

    };

    return (
        <div
            data-aos='fade-zoom-in'
            data-aos-delay='50'
            data-aos-duration='1000'
            className=' flex justify-center items-center'>
            <div className=" bg-[#F5F5F5] p-20">
                <h2
                    data-aos='fade-zoom-in'
                    data-aos-delay='50'
                    data-aos-duration='1000'
                    className=' text-5xl font-semibold'>Our <br />
                    clients</h2>
            </div>

            <Slider {...settings} className='container mx-auto  items-center mt-20 mb-20 '>

                <div>
                    <img src={logo1} alt="" />
                </div>
                <div>
                    <img src={logo2} alt="" />
                </div>
                <div>
                    <img src={logo3} alt="" />
                </div>
                <div>
                    <img src={logo4} alt="" />
                </div>
                <div>
                    <img src={logo5} alt="" />
                </div>
                <div>
                    <img src={logo1} alt="" />
                </div>
                <div>
                    <img src={logo2} alt="" />
                </div>
                <div>
                    <img src={logo3} alt="" />
                </div>
                <div>
                    <img src={logo4} alt="" />
                </div>
                <div>
                    <img src={logo5} alt="" />
                </div>



            </Slider>

        </div>
    );
};

export default Lider;