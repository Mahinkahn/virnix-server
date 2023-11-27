import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import 'animate.css';

const Featured = () => {
    const [counterState, setConterState] = useState(false)
    return (
        <div className=" container mx-auto mt-48"

        >
            <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"

                className="text-[64px] font-bold text-[#FFFFFF] text-center ">
                Global Coverage, Local Routing
            </h2>

            <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className=" text-base font-normal leading-[26px] text-[#FFFFFF] text-center pt-10">
                Thanks to diverse mix of top transit providers and 240+ PNIs at major <br /> internet hubs, DataPacket has direct access to local ISPs
            </p>
            <ScrollTrigger onEnter={() => setConterState(true)} onExit={() => setConterState(false)}
            >
                <div
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className=' grid grid-cols-5 text-[#FFFFFF] ml-4 mt-24' >
                    <div className="mb-10  border-l-2 border-[#131A25] w-[255px]">
                        <div className=" ml-4">
                            <h2 className='font-bold text-[32px]'>
                                {counterState &&
                                    <CountUp start={0} end={6} duration={2} />
                                }
                            </h2>
                            <h4 className='font-semibold text-[18px] '>Global locations</h4>
                        </div>
                    </div>
                    <div className="mb-10 border-l-2 border-[#131A25] w-[255px]">
                        <div className="ml-4">
                            <h2 className='font-bold text-[32px]'>
                                {counterState &&
                                    <CountUp start={0} end={50000} duration={2} />
                                }
                            </h2>
                            <h4 className='font-semibold text-[18px]'>Customers Served</h4>
                        </div>
                    </div>
                    <div className="mb-10 border-l-2 border-[#131A25] w-[255px]">
                        <div className="ml-4">
                            <h2 className='font-bold text-[32px]'>
                                {counterState &&
                                    <CountUp start={0} end={140000} duration={2} />
                                }
                            </h2>
                            <h4 className='font-semibold text-[18px] leading-[22px]'>Server instances <br />
                                deployed</h4>
                        </div>
                    </div>
                    <div className="mb-10 border-l-2 border-[#131A25] w-[255px]">
                        <div className="ml-4">
                            <h2 className='font-bold text-[32px]'>
                                {counterState &&
                                    <CountUp start={0} end={600} duration={2} />
                                }
                            </h2>
                            <h4 className='font-semibold text-[18px]'>
                                Gbit network capacity
                            </h4>
                        </div>
                    </div>
                    <div className="mb-10 border-l-2 border-[#131A25] w-[255px]">
                        <div className="ml-4">
                            <h2 className='font-bold text-[32px]'>
                                {counterState &&
                                    <CountUp start={0} end={99999} duration={2} suffix='%' />
                                }
                            </h2>
                            <h4 className='font-semibold text-[18px] leading-[20px]'>
                                Average Uptime <br />
                                across all brands
                            </h4>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>

            <div
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className=" text-center  flex justify-center mt-6">
                <p className="text-[#FFFFFF] border px-7 bg-[#131A25] py-1  rounded-2xl border-[#131A25]">
                    We might put more stats here so make sure the design is scalable.
                </p>
            </div>
        </div>
    );
};

export default Featured;