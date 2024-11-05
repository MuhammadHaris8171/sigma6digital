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
  workImg?: string;
}

const WorkProcess: React.FC<WorkProcessProps> = ({ heading, workSteps, workImg }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="row">
        <div className={`col-md-9 ${!workImg && "m-auto"}`}>
          <h2 className={`${styles.workHeading} ${!workImg ? styles.workFullHeading : ''}`}>{heading}</h2>
        </div>
        <div className="col-12">
          <div className="row py-5 mt-4">
            {workImg && (
            <div className="col-lg-5 d-none d-lg-flex justify-content-center">
              <img src={workImg} alt="Sigma 6 Digital" className={`${styles.workProcessImage}`} />
            </div>
            )}
            <div className={workImg ? "col-lg-7" : "col-lg-9 m-auto"}>
              <div className={`${styles.faqSection} ${!workImg ? styles.faqFullSection : ''}`}>
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
