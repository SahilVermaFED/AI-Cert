const AccordionItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const { header, content, index, expandedIndex, setExpandedIndex } = props;
    const isExpanded = index === expandedIndex;

    const handleToggle = () => {
        setExpandedIndex(isExpanded ? null : index);
    };

    return (
        <div className="w-full">
            <div
                className="flex justify-start gap-3 items-center w-full text-start px-10 py-6 cursor-pointer bg-black hover:bg-black"
                onClick={handleToggle}>
                    <div className="w-4 h-4 flex items-center justify-center">
                    {isExpanded ? (
                        <span className="text-white text-xl font-bold">-</span>
                    ) : (
                        <span className="text-white text-xl font-bold">+</span>
                    )}
                </div>
                <h3 className="text-lg font-medium text-white">{header}</h3>
                
            </div>
            {isExpanded && (
                <div className="transition duration-250 text-justify bg-black text-sm md:text-base px-10 pb-8 text-white tracking-wide leading-6 md:leading-7">
                    {content}
                </div>
            )}
            <hr className="border-[#2A2E36]"/>
        </div>
    );
};

export default AccordionItem;
