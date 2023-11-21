
import { FaArrowRight } from 'react-icons/fa';
import arro from '../../../assets/icon/arrow.png';
import img7 from '../../../assets/images/img(7).png';
import img8 from '../../../assets/images/img(8).png';
import img9 from '../../../assets/images/img(9).png';
import voter from '../../../assets/images/Vector.png';
import icon from '../../../assets/images/icon.png';
import broder from '../../../assets/images/broder.png';

const News = () => {
  const frames = [
    {
      imageSrc: img7,
      icon: 'icon1.png',
      text: 'Marketing',
      description: '10 things nobody told you about being a web and mobile designer',
      titleText: 'Jan 5, 2024',
    },
    {
      imageSrc: img8,
      icon: 'icon2.png',
      text: 'Marketing',
      description: 'Best way to design a SaaS website with figma',
      titleText: 'Jan 7, 2024',
    },
    {
      imageSrc: img9,
      icon: 'icon3.png',
      text: 'Marketing',
      description: '7 Ways To Improve Website Usability And Accessibility',
      titleText: 'Jul 10, 2024',
    },
    // Add more frames here...
  ];

  return (
    <div
      className=" flex container mx-auto  gap-52 mt-28 ">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className=''>
        <div className="sticky top-0">
          <h2 className="text-8xl font-bold ">News <br /> Journals</h2>
          <button className='my-14 flex justify-center items-center gap-2 border px-4 py-2 rounded-full border-[#757575] text-[#757575] text-sm'>View all posts <span><img src={arro} alt="" /></span> </button>
        </div>
      </div>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="">
        {frames.map((frame, index) => (
          <div key={index} className="relative flex w-full max-w-[48rem] flex-row  bg-white">
            <div className="relative w-2/5 mb-8 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0  bg-clip-border">
              <img
                src={frame.imageSrc}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className=" flex items-center gap-2  mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                <div className=" flex items-center gap-2">
                  <img src={voter} alt="" />
                  <span>{frame.text}</span>
                  <img src={broder} alt="" />
                </div>
                <div className=" flex items-center gap-2">
                  <img src={icon} alt="" />
                  <span>{frame.titleText}</span>
                </div>

              </div>
              <div className="  border-pink-500 border-t-[1px] w-64"></div>
              <h4 className=" mb-2 text-[2rem] leading-10 antialiased font-bold  tracking-normal text-blue-gray-900 py-3">
                {frame.description}
              </h4>

              <a className="inline-block" href="#">
                <button
                  className=" flex items-center border gap-2 px-6 py-3 text-xs font-bold text-center text-pink-500  align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg

                    className="w-4 h-4 pt-[3px] "
                  >
                    <FaArrowRight></FaArrowRight>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default News;
