import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import styles from '../styles/WorkProcess.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

interface WorkProcessProps {
  heading: string;
  workSteps: FaqItem[];
}

const WorkProcess: React.FC<WorkProcessProps> = ({ heading, workSteps }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Set default to the first FAQ

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h2 className={`${styles.workHeading}`}>{heading}</h2>
        </div>
        <div className="col-12">
          <div className="row py-5 mt-4">
            <div className="col-5 d-flex justify-content-center">
              <img src="/src/assets/images/AI-Solutions.webp" alt="Sigma 6 Digital" className={`${styles.workProcessImage}`} />
            </div>
            <div className="col-7">
              <div className={`${styles.faqSection}`}>
                {workSteps.map((faq, index) => (
                  <div key={index} className={`${styles.faqItem}`}>
                    <h4
                      className={`${styles.faqQuestion} ${openIndex === index ? styles.workStepOpen : ''}`}
                      onClick={() => toggleFaq(index)}
                      style={{ display: 'flex', alignItems: 'start' }}
                    >
                      <span style={{ width: '5%', marginRight: '5px', fontSize: 'inherit', fontFamily: 'inherit' }}>
                        {index + 1}.
                      </span>
                      <span style={{ width: '85%', fontSize: 'inherit', fontFamily: 'inherit' }}>
                        {faq.question}
                      </span>
                      <span style={{ width: '10%', textAlign: 'right', fontSize: 'inherit', fontFamily: 'inherit' }}>
                        {openIndex === index ? <FiMinus /> : <FiPlus />}
                      </span>
                    </h4>
                    <p
                      className={`${styles.faqAnswer} ${openIndex === index ? styles.answerOpen : styles.answerClosed}`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
