import { heroSectionBackground, heroSectionImage } from '../../assets';

const HeroSection = () => {
    return (
        <div
            style={{ backgroundImage: `url(${heroSectionBackground})` }}
            className=" bg-cover object-fit bg-center bg-no-repeat">
            <div className='flex flex-col md:flex-row-reverse justify-between mx-auto items-center md:items-start lg:items-center gap-10 p-6 md:p-10 max-w-[90rem]'>
                <div>
                    <img
                        src={`${heroSectionImage}`}
                        alt="Hero image"
                        className="aspect-square md:w-64 lg:w-auto max-w-96 2xl:h-full"
                    />
                </div>
                <div className="flex flex-col gap-3 h-full lg:gap-4 xl:gap-6">
                    <h3 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-normal">
                        <span className="text-yellow-500 uppercase">ai</span>
                        <span className="text-white">+</span>
                        <div className="flex gap-1 items-start">
                            <span className="text-white capitalize">ethical hacker</span>
                            <span className="text-white text-xs sm:text-sm md:text-base lg:text-2xl uppercase align-super">
                                tm
                            </span>
                        </div>
                    </h3>
                    <p className="text-white pb-2 xl:pb-4">Certification number: 1100ABCD</p>
                    <p className="text-[#A9A7B0] w-full md:w-96 lg:w-[30rem] xl:w-[35rem] 2xl:w-[45rem] line-clamp-6 2xl:line-clamp-none">
                        The AI+ Ethical Hacker certification delves into the intersection of cybersecurity and
                        artificial intelligence, a pivotal juncture in our era of rapid technological progress. Tailored
                        for budding ethical hackers and cybersecurity experts, it offers comprehensive insights into AI
                        is transformative impact on digital offense and defense strategies. Unlike conventional ethical
                        hacking courses, this program harnesses AI is power to enhance cybersecurity approaches. It
                        caters to tech enthusiasts eager to master the fusion of cutting-edge AI methods with ethical
                        hacking practices amidst the swiftly evolving digital landscape. The curriculum encompasses four
                        key areas, from course objectives and prerequisites to anticipated job roles and the latest AI
                        technologies in Ethical Hacking.
                    </p>
                    <div className="grid w-full grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-start gap-5 text-white">
                        <button className="flex w-full justify-center font-semibold bg-golden whitespace-nowrap transition duration-500 ease-in-out font-base transform focus:scale-100 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink md:text-xs xl:text-sm text-white lg:px-6 py-3">
                            Buy Exam Bundle
                        </button>
                        <button className="flex w-full justify-center font-semibold bg-golden whitespace-nowrap transition duration-500 ease-in-out font-base transform focus:scale-100 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink md:text-xs xl:text-sm text-white lg:px-6 py-3">
                            Download Blueprint
                        </button>
                        <button className="flex w-full justify-center font-semibold bg-golden whitespace-nowrap transition duration-500 ease-in-out font-base transform focus:scale-100 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink md:text-xs xl:text-sm text-white lg:px-6 py-3">
                            Find a Training Provider
                        </button>
                        <button className="flex w-full justify-center font-semibold text-golden bg-black border border-golden whitespace-nowrap transition duration-500 ease-in-out font-base transform focus:scale-100 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink md:text-xs xl:text-sm lg:px-6 py-3">
                            Find a Training Provider
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
