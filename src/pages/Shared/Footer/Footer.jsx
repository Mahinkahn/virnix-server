import { Link } from "react-router-dom";

const Footer = () => {
    const footerStyle = {
        backgroundImage: 'url("/src/assets/imag/Screenshot.png")',
        backgroundSize: 'cover', // Adjust this based on your needs
        backgroundRepeat: 'no-repeat',

    };

    return (
        <footer className="mt-96 container mx-auto" style={footerStyle}>

            <div className=" py-32">
                <h1
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className=" text-[40px] font-extrabold leading-[64px] text-[#FFFFFF]">
                    Company Information
                </h1>

                <p
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className=" leading-[18px] text-base font-normal pt-8 pb-10 text-[#ffffff82]">
                    Krixe Pte. Ltd. <br />
                    18 Sin Ming Lane #07-13 <br />
                    Midview Citybr <br />
                    Singapore 573960
                </p>

                <p
                    data-aos="fade-up-right"
                    data-aos-duration="1500"
                    className="text-base font-normal text-[#ffffff82]">
                    Company Registration: 202345555E
                </p>
                <p
                    data-aos="fade-up-right"
                    data-aos-duration="1500"
                    className=" text-2xl font-normal text-[#ffffff82]">
                    Say hello at <Link className=" text-[#FD3246]">
                        hello@krixe.com
                    </Link>
                </p>
            </div>

        </footer>
    );
};

export default Footer;