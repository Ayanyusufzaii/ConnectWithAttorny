import React, { useState } from 'react';

const faqData = [
  {
    question: 'Is there scientific proof that Paraquat causes Parkinson’s?',
    answer:
      'Multiple studies, including research cited by the NIH, have shown a strong link between Paraquat exposure and increased Parkinson’s risk.',
  },
  {
    question: 'Is Paraquat banned?',
    answer:
      'Paraquat is banned in over 30 countries, but remains in use in the United States under EPA regulation.',
  },
  {
    question: 'How do I prove I was exposed?',
    answer:
      'Your work history, location, or industry can help demonstrate exposure. A legal team can help document this during review.',
  },
  {
    question: 'How long do I have to file?',
    answer:
      'Each state has its own statute of limitations. It’s best to submit your case review as soon as possible.',
  },
  {
    question: 'Will this cost me anything upfront?',
    answer:
      'No. You will not pay anything unless your case results in a financial recovery.',
  },
];



const HomeEight = () => {
  const [activeIndex, setActiveIndex] = useState(null); // No dropdown open by default

  const toggle = (idx) => {
    setActiveIndex(idx === activeIndex ? null : idx);
  };

  return (
    <section className="py-12 px-2 sm:px-4 md:px-8 lg:px-16 w-full max-w-none" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      {/* Title */}
      <h2
        className="text-[32px] sm:text-[40px] font-semibold text-[#0A1F8F] mb-6 capitalize leading-none"
      >
        Frequently Asked{' '}
        <span className="text-[#EDC14A] font-semibold capitalize">
          Questions
        </span>
      </h2>

      {/* Accordion */}
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded overflow-hidden">
            <button
              onClick={() => toggle(idx)}
              className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                activeIndex === idx ? 'bg-[#F4F6FC]' : 'bg-white'
              } transition`}
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              <span className="text-[#0A1F8F] text-[20px] sm:text-[24px] font-semibold leading-normal">
                {item.question}
              </span>
              <span className="text-[18px] font-light select-none">
                {activeIndex === idx ? '▴' : '▾'}
              </span>
            </button>
            {activeIndex === idx && (
              <div className="px-4 pb-4 pt-1 text-[#757575] text-[18px] sm:text-[20px] font-medium leading-normal bg-[#F4F6FC]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeEight;
