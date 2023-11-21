import { useState } from "react";
import img from '../../../assets/images/img(6).png'
import ico from '../../../assets/images/ic.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Testimonials = () => {
    const frames = [
        {

            imageSrc: img,
            text: '1 Product Manager',
            description:
                '1 If your need high-quality design in a friendly budget than there is no better option than Alpha. We working them more than six month. ',

            titleText: 'Annette Black',

            gotoAction: 2,
        },
        {

            imageSrc: img,
            text: '2 Product Manager',
            description:
                '2 If your need high-quality design in a friendly budget than there is no better option than Alpha. We working them more than six month. ',
            titleText: 'Annette',
            gotoAction: 2,
        },
        {

            imageSrc: img,
            text: '3 Product Manager',
            description:
                '3 If your need high-quality design in a friendly budget than there is no better option than Alpha. We working them more than six month. ',
            titleText: 'Black',
            gotoAction: 2,
        },
        // Add more frames here...
    ];

    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < frames.length - 1) {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };



    const frame = frames[index];

    if (!frame) {
        return null; // Handle the case where the frame is undefined.
    }

    return (
        <div className="bg-[#F2F1F1] h-screen mt-32">
            <div className=" container mx-auto ">
                <div className="content-area w-full  overflow-hidden">
                    <div className="platform shadow-xl h-full flex ">
                        <div className="each-frame  flex-none h-full">
                            <div className="main flex w-full p-8 pt-32">
                                <div
                                    data-aos="flip-left"
                                    data-aos-duration="1500"
                                    className="sub my-auto">
                                    <img className="" src={frame.imageSrc} alt="" />
                                </div>

                                <div
                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                    className="sub w-[30%] my-auto px-20 ">
                                    <div className="head text-2xl mb-4"><img src={ico} alt="" /></div>
                                    <div className="long-text text-3xl font-semibold">{frame.description}</div>
                                    <div className=" border-[#CECECE] border-t-[1px] my-5"></div>
                                    <div className=" flex justify-center items-center">
                                        {frame.gotoAction !== undefined && (
                                            <div
                                                className="">

                                                <h4 className="text-xl font-bold">{frame.titleText}</h4>
                                                <div className=" text-[#757575] text-xs font-semibold">
                                                    {frame.text}
                                                </div>

                                            </div>

                                        )}

                                        <div className="buttons ml-auto flex justify-center items-center gap-3 text-gray-600 mr-1">
                                            <svg className="w-[55px] h-[55px] border-2 rounded-lg p-4 hover:bg-[#1D1D1D] hover:text-white cursor-pointer border-r-0" onClick={prev}>
                                                <FaArrowLeft></FaArrowLeft>
                                            </svg>
                                            <svg className="w-[55px] h-[55px] border-2 hover:bg-[#1D1D1D] hover:text-white rounded-lg p-4 cursor-pointer" onClick={next}>
                                                <FaArrowRight></FaArrowRight>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;