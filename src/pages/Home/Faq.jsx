import React, { useState } from "react";
import "./faq.css";
import { FiPlus, FiX } from "react-icons/fi";

const faqs = [
  {
    question: "What services does Vishnu Dental Clinic offer?",
    answer: "We provide general dentistry, cosmetic dentistry, orthodontics, dental implants, root canals, and more.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most dental insurance plans. Please contact us to verify your coverage.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment online through our website or call our reception for assistance.",
  },
  {
    question: "Is emergency dental care available?",
    answer: "Yes, we offer emergency dental services. If you have a dental emergency, please call us immediately.",
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every six months for a routine checkup and cleaning.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? <FiX /> : <FiPlus />}
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
