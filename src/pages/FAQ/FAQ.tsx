import Cta from '../../components/Cta';
import PagesHero from '../../components/PagesHero'
import WorkProcess from '../../components/WorkProcess'
import styles from "./FAQ.module.css"

interface faqsItem {
  question: string;
  answer: string;
}

function FAQ() {
    const faqs: faqsItem[] = [
  {
    question: "What services does Sigma 6 Digital offer?",
    answer: "Sigma 6 Digital offers a range of services, including web development, app development, AI solutions, and IT support. We provide customized solutions tailored to meet the unique needs of your business."
  },
  {
    question: "How long does it take to develop a website or app?",
    answer: "The development timeline varies based on the project’s complexity and specific requirements. Typically, a website or app can take anywhere from a few weeks to several months. We will provide a detailed timeline during the initial consultation."
  },
  {
    question: "Do you offer digital marketing services?",
    answer: "Yes, we provide comprehensive digital marketing services designed to enhance your online presence. Our offerings include search engine optimization (SEO), social media marketing, content creation, and targeted advertising strategies to help your business reach and engage your target audience effectively."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we provide ongoing support and maintenance services to ensure your website or app runs smoothly. Our team is available to assist with updates, troubleshooting, and any other needs you may have."
  },
  {
    question: "What industries do you serve?",
    answer: "We work with a diverse range of industries, including retail, healthcare, education, and finance. Our solutions are adaptable to various business sectors, allowing us to meet the specific needs of each client."
  },
  {
    question: "How do I get started with Sigma 6 Digital?",
    answer: "To get started, simply reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your project requirements and explore how we can assist you in achieving your goals."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing varies based on the complexity and scope of each project. We provide customized quotes after assessing your specific needs during the initial consultation. We strive to offer competitive rates while maintaining high-quality service."
  },
  {
    question: "Do you provide training for your solutions?",
    answer: "Yes, we offer training sessions to help your team effectively use and manage the solutions we deliver. Our goal is to ensure you feel confident and capable in utilizing the technology we provide."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow a rigorous development process that includes regular testing, code reviews, and client feedback at various stages of the project. Our focus on quality assurance ensures that we deliver reliable and high-performing solutions."
  },
];
  return (
    <>
      <section id="faqhero">
        <PagesHero 
          heading="Frequently Asked Questions" 
          description="At Sigma 6 Digital, we understand that you may have questions about our services and processes. To help you make informed decisions, we’ve compiled a list of common inquiries from our clients. Explore the FAQs below to find answers and learn more about how we can support your business in the digital landscape." 
          videoLink="https://sigma6digital.com/wp-content/uploads/2024/10/Comp-1-1.m4v" 
        />
      </section>
      <section className={styles.faqWorkProcess}>
        <WorkProcess 
          heading="Here's How We Get Things Done" 
          workSteps={faqs}
        />
      </section>
      <section>
        <Cta />
      </section>
    </>
  )
}

export default FAQ
