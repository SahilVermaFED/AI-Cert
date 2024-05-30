import { useState } from 'react';
import AccordionItem from '../../components/Accordian';

const aiAccordionData = [
    {
        header: 'What is Artificial Intelligence?',
        content:
            'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn. These machines can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.'
    },
    {
        header: 'Types of AI',
        content:
            'There are two main types of AI: Narrow AI, which is designed to perform a narrow task (e.g. facial recognition), and General AI, which can perform any intellectual task that a human can do. Narrow AI is currently the most common form, while General AI remains largely theoretical.'
    },
    {
        header: 'Applications of AI',
        content:
            'AI is used in various fields, including healthcare for diagnostics and personalized medicine, finance for fraud detection and algorithmic trading, automotive for self-driving cars, and many others. The potential applications of AI are vast and continually expanding.'
    },
    {
        header: 'Applications of AI',
        content:
            'AI is used in various fields, including healthcare for diagnostics and personalized medicine, finance for fraud detection and algorithmic trading, automotive for self-driving cars, and many others. The potential applications of AI are vast and continually expanding.'
    },
    {
        header: 'Applications of AI',
        content:
            'AI is used in various fields, including healthcare for diagnostics and personalized medicine, finance for fraud detection and algorithmic trading, automotive for self-driving cars, and many others. The potential applications of AI are vast and continually expanding.'
    },
    {
        header: 'Applications of AI',
        content:
            'AI is used in various fields, including healthcare for diagnostics and personalized medicine, finance for fraud detection and algorithmic trading, automotive for self-driving cars, and many others. The potential applications of AI are vast and continually expanding.'
    },
    {
        header: 'Applications of AI',
        content:
            'AI is used in various fields, including healthcare for diagnostics and personalized medicine, finance for fraud detection and algorithmic trading, automotive for self-driving cars, and many others. The potential applications of AI are vast and continually expanding.'
    },
    {
        header: 'Applications of AI',
        content:
            'AI is used in various fields, including healthcare for diagnostics and personalized medicine, finance for fraud detection and algorithmic trading, automotive for self-driving cars, and many others. The potential applications of AI are vast and continually expanding.'
    },
    {
        header: 'Applications of AI',
        content:
            'AI is used in various fields, including healthcare for diagnostics and personalized medicine, finance for fraud detection and algorithmic trading, automotive for self-driving cars, and many others. The potential applications of AI are vast and continually expanding.'
    },
    {
        header: 'Applications of AI',
        content:
            'AI is used in various fields, including healthcare for diagnostics and personalized medicine, finance for fraud detection and algorithmic trading, automotive for self-driving cars, and many others. The potential applications of AI are vast and continually expanding.'
    },
    {
        header: 'Applications of AI',
        content:
            'AI is used in various fields, including healthcare for diagnostics and personalized medicine, finance for fraud detection and algorithmic trading, automotive for self-driving cars, and many others. The potential applications of AI are vast and continually expanding.'
    }
];

const CertificateModule = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div className='bg-black'>
            <div className="max-w-[90rem] mx-auto text-white p-6">
                <h3 className="capitalize font-semibold text-3xl mb-8">Certification Modules</h3>
                <div className="">
                    <section className="self-start text-start">
                        {aiAccordionData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                header={item.header}
                                content={item.content}
                                index={index}
                                expandedIndex={expandedIndex}
                                setExpandedIndex={setExpandedIndex}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CertificateModule;
