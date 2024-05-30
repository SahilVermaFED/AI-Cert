import { arrow, companyImage1, companyImage2, companyImage3, companyImage4 } from '../../assets';

const Partners = () => {
    return (
        <div className='bg-black'>
            <div className="flex items-center gap-5 border-y border-[#2A2E36] p-[3.125rem] mx-auto max-w-[90rem]">
                <button>
                    <img src={arrow} alt="back arrow" />
                </button>
                <div className="flex gap-[1.375rem]">
                    <div className="px-16 py-4 bg-[#171A24]">
                        <img src={companyImage1} alt="partner 1" className="rounded-full aspect-3/2 w-[23rem]" />
                    </div>
                    <div className="px-16 py-4 bg-[#171A24]">
                        <img src={companyImage2} alt="partner 2" className="rounded-full aspect-3/2 w-[23rem]" />
                    </div>
                    <div className="px-16 py-4 bg-[#171A24]">
                        <img src={companyImage4} alt="partner 3" className="rounded-full aspect-3/2 w-[23rem]" />
                    </div>
                    <div className="px-16 py-4 bg-[#171A24]">
                        <img src={companyImage3} alt="partner 4" className="rounded-full aspect-3/2 w-[23rem]" />
                    </div>
                    <div className="px-16 py-4 bg-[#171A24]">
                        <img src={companyImage4} alt="partner 5" className="rounded-full aspect-3/2 w-[23rem]" />
                    </div>
                </div>
                <button>
                    <img src={arrow} alt="forward arrow" className="rotate-180" />
                </button>
            </div>
        </div>
    );
};
export default Partners;
