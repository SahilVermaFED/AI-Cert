import { goldenBag } from '../../assets';

const opportunitiesData = [
    {
        title: 'Introduction to AI',
        content: 'Understand the basics of Artificial Intelligence and its various applications.'
    },
    {
        title: 'Machine Learning',
        content: 'Learn about the fundamentals of machine learning and how to implement basic algorithms.'
    },
    {
        title: 'Deep Learning',
        content: 'Dive into deep learning techniques and neural networks for more complex tasks.'
    }
];

const Opportunities = () => {
    return (
        <div className="bg-black">
            <div className="text-white p-10 max-w-[90rem] mx-auto">
                <h3 className="text-3xl text-center font-semibold mb-8 flex justify-center items-center">
                    Industry Opportunities after Course Completion
                </h3>

                <div className="w-full">
                    <div className="flex flex-col md:flex-row justify-center gap-6 ">
                        {opportunitiesData.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-start items-center text-center p-4 bg-[#171A24]">
                                <img src={goldenBag} alt="golden bag" className="w-10 h-10 self-center" />
                                <h4 className="text-xl font-bold mb-4 flex items-center">{item.title}</h4>
                                <p className="text-base">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opportunities;
