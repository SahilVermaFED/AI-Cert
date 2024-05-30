const ExamDetails = () => {
    const examData = [
        { module: 'Module 1' },
        { module: 'Module 2' },
        { module: 'Module 3' },
        { module: 'Module 4' },
        { module: 'Module 5' },
        { module: 'Module 6' },
        { module: 'Module 7' },
        { module: 'Module 8' }
    ];

    return (
        <div className="bg-[#171A24]">
            <div className="flex flex-col text-white p-12 mx-auto max-w-[90rem]">
                <h3 className="font-semibold text-3xl text-start pb-8">Exam Details</h3>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="aspect-[1.5/1] w-full md:w-1/2 max-h-96 bg-gray-200">
                        <video
                            src="https://www.youtube.com/watch?v=SYdPoSkEfEg&ab_channel=%23KaranK2official"
                            className=""></video>
                    </div>
                    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 justify-center">
                        {examData.slice(0, 4).map((item, index) => (
                            <div
                                key={index}
                                className="w-full h-full lg:h-44 aspect-[7/4] text-center bg-[#2A2E36] flex items-center justify-center">
                                {item.module}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamDetails;
