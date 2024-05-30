import { goldenTick } from '../../assets';

const learningData = [
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
    },
    {
        title: 'Ethical Considerations',
        content: 'Explore the ethical implications and considerations in AI development and deployment.'
    }
];

const LearningSection = () => {
    return (
        <div className="bg-[#171A24]">
            <div className="text-white p-10 max-w-[90rem] mx-auto">
                <h3 className="text-3xl font-semibold mb-8 flex items-center">What You Will Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {learningData.map((item, index) => (
                        <div key={index} className="flex gap-3 w-full relative p-4">
                            <img src={goldenTick} alt="golden tick" className=" w-7 h-7" />
                            <div>
                                <h4 className="text-xl font-bold mb-4 flex items-center">{item.title}</h4>
                                <p className="text-base">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearningSection;
