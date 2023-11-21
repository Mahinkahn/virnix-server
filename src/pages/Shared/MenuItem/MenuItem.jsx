

const MenuItem = ({ item }) => {
    const { name, img, recipe } = item;
    return (
        <div
            data-aos="flip-up"
            data-aos-duration="1500"
            className="flex space-x-2">
            <div className="relative  flex w-[300px] h-[400px] flex-col rounded-3xl hover:bg-[#CCCCCC] border  text-gray-700 ">
                <div className="p-10 ">
                    <img src={img} alt="" />
                    <h5 className="mb-2 block font-sans text-4xl font-semibold  tracking-normal text-blue-gray-900 antialiased pt-16 ">
                        {name}
                    </h5>
                    <p className="block font-sans text-xs text-gray-700 leading-relaxed text-inherit antialiased pt-6">
                        {recipe}
                    </p>
                </div>

            </div>


        </div>
    );
};

export default MenuItem;