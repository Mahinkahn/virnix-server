import img2 from '../../../assets/images/img(2).png'
import img3 from '../../../assets/images/img(3).png'
import img5 from '../../../assets/images/img(5).png'
import img4 from '../../../assets/images/img(4).png'
import butto from '../../../assets/images/button.png'
import './Featured.css';
import { Link } from 'react-router-dom'


const Featured = () => {
    return (


        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=' relative mt-20 container mx-auto'>
            <h1 className=' text-9xl font-bold text-center absolute left-0 right-0'>Works</h1>
            <div className=" items-center gap-x-16 px-20  flex justify-center relative  ">

                <div className="grid grid-flow-row gap-5  ">
                    <div className=''>
                        <div className="relative group">
                            <img className="h-auto max-w-full   " src={img2} alt="" />
                            <div
                                className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                <Link to='#' className='flex-row text-center'>
                                    <img src={butto} alt="" className=' absolute top-[18rem] right-[228px]' />
                                </Link>
                            </div>
                        </div>

                        <h4 className=' text-2xl text-center py-3 font-bold'>Grand coffee Branding</h4>

                        <div className="flex justify-center items-center gap-3 py-2">
                            <button className='btn btn-sm btn-outline border-[#A7A7A7] rounded-3xl text-[#555555] normal-case'>Banding</button>
                            <button className='btn btn-sm btn-outline border-[#A7A7A7] rounded-3xl text-[#555555] normal-case'>UI/UX </button>
                        </div>

                    </div>
                    <div className='mt-2'>
                        <div className="relative group">
                            <img className="h-auto max-w-full   " src={img5} alt="" />
                            <div
                                className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                <Link to='#' className='flex-row text-center'>
                                    <img src={butto} alt="" className=' absolute top-[18rem] right-[228px]' />
                                </Link>
                            </div>
                        </div>

                        <h4 className='text-2xl text-center py-3 font-bold'>Reggie Branding</h4>

                        <div className="flex justify-center items-center gap-3 py-2">
                            <button className='btn btn-sm btn-outline border-[#A7A7A7] rounded-3xl text-[#555555] normal-case'>Banding</button>
                            <button className='btn btn-sm btn-outline border-[#A7A7A7] rounded-3xl text-[#555555] normal-case'>UI/UX </button>
                        </div>
                    </div>
                </div>
                <div
                    className="grid grid-flow-row mt-32  gap-4 ">
                    <div className=''>
                        <div className="relative group">
                            <img className="h-auto max-w-full   " src={img3} alt="" />
                            <div
                                className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                <Link to='#' className='flex-row text-center'>
                                    <img src={butto} alt="" className=' absolute top-[18rem] right-[228px]' />
                                </Link>
                            </div>
                        </div>

                        <h4 className='text-2xl text-center py-3 font-bold'>Mulberry Interface</h4>

                        <div className="flex justify-center items-center gap-3 py-2">
                            <button className='btn btn-sm btn-outline border-[#A7A7A7] rounded-3xl text-[#555555] normal-case'>ecommerce</button>
                            <button className='btn btn-sm btn-outline border-[#A7A7A7] rounded-3xl text-[#555555] normal-case'>UI/UX </button>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className="relative group">
                            <img className="h-auto max-w-full   " src={img4} alt="" />
                            <div
                                className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                <Link to='#' className='flex-row text-center'>
                                    <img src={butto} alt="" className=' absolute top-[18rem] right-[228px]' />
                                </Link>
                            </div>
                        </div>

                        <h4 className='text-2xl text-center py-3 font-bold'>Filto Motion</h4>

                        <div className="flex justify-center items-center gap-3 py-2">
                            <button className='btn btn-sm btn-outline border-[#A7A7A7] rounded-3xl text-[#555555] normal-case'>Fashion</button>
                            <button className='btn btn-sm btn-outline border-[#A7A7A7] rounded-3xl text-[#555555] normal-case'>Motion</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>




    );
};

export default Featured;