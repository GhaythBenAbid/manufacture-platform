'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What types of renewable energy solutions do you offer?',
      answer: 'We offer a variety of renewable energy solutions, including solar power, wind energy, hydroelectric power, and geothermal energy systems. Our goal is to provide comprehensive solutions tailored to meet the specific needs of our clients.'
    },
    {
      question: 'How can I determine if renewable energy is right for my home?',
      answer: 'Our experts can conduct a thorough assessment of your property, energy usage patterns, and local climate conditions to determine the most suitable renewable energy solutions for your home.'
    },
    {
      question: 'What are the financial benefits of switching to renewable energy?',
      answer: 'Switching to renewable energy can lead to significant long-term cost savings through reduced utility bills, tax incentives, and potential income from energy credits. We can provide a detailed cost-benefit analysis for your specific situation.'
    },
    {
      question: 'How long does it take to install a renewable energy system?',
      answer: 'Installation timelines vary depending on the type and size of the system. A typical residential solar installation takes 1-3 days, while larger commercial projects may take several weeks.'
    },
    {
      question: 'What maintenance is required for renewable energy systems?',
      answer: 'Most renewable energy systems require minimal maintenance. Regular inspections and basic cleaning are typically sufficient to maintain optimal performance. We provide comprehensive maintenance guidelines and support services.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr,1.5fr] gap-20">
        <div>
          <h2 className="text-5xl font-bold mb-4">
            We Have 24/7<br />
            Support Available
          </h2>
          <p className="text-gray-600 mb-8">
            In case you're still looking for answers.
          </p>
          <button className="bg-[#66CA98] text-white px-8 py-3 rounded-full hover:bg-[#54b583] inline-flex items-center gap-2">
            Contact Support
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              viewBox="0 0 16 16"
            >
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-2xl transition-all overflow-hidden
                ${index === openIndex ? 'bg-[#F1F9F3]' : 'bg-white border border-gray-100'}`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <div className={`transform transition-transform ${index === openIndex ? 'rotate-180' : ''}`}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    fill="currentColor" 
                    viewBox="0 0 16 16"
                  >
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>
              </button>
              <div 
                className={`px-8 transition-all duration-200 ease-in-out
                  ${index === openIndex ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 