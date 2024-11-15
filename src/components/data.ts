import featureLogoDelete from '../assets/images/feature_logo_delete.webp';
import webDevelopmentImg from '../assets/images/web-development.webp';
import appDevelopmentImg from '../assets/images/Mobile-App-Development.webp';
import aiSolutionsImg from '../assets/images/AI-Solutions.webp';
import itSolutionsImg from '../assets/images/it-solutions.webp';
import globalLocationImage from '../assets/images/260x300.webp';
import webdevelopmentService from '../assets/images/main-service-delete.webp';
import maintenanceServiceImage from '../assets/images/maintenance-background.webp';
import consultationProcessImg from '../assets/images/consultation-process.webp';
import requirementGatheringProcessImg from '../assets/images/requirement-gathering-process.webp';
import planningProcessImg from '../assets/images/planning-process.webp';
import developmentProcessImg from '../assets/images/development-process.webp';
import qualityAssuranceProcessImg from '../assets/images/quality-assurance-process.webp';
import developmentLaunchProcessImg from '../assets/images/development-launch-process.webp';

export interface DevelopmentProcess {
  heading: string;
  description: string;
  image?: string;
}

export interface Feature {
  src: string;
}

export interface Service {
  name: string;
  imgsrc: string;
  heading: string;
  description: string;
  button: string;
  buttonSrc: string;
}

export interface GlobalLocation {
  image: string;
  heading: string;
}

export interface IndustryData {
  heading: string;
  description: string;
  point_1: string;
  point_2: string; 
}

export interface ContentBox {
  contentBoxheading: string;
  contentBoxDescription: string;
  contentBoxImage: string;
}

export interface TechnologiesBox {
  heading: string;
  services: string[];
}

export interface WebDevelopmentPageContent {
  heroSectionHeading: string;
  heroSectionDescription: string;
  heroSectionImage: string;
  contentBoxesContent: ContentBox[];
  servicesHeading: string;
  featureServices: Service[];
  technologiesHeading: string;
  technologiesDescription: string;
  technologiesBoxes: TechnologiesBox[];
}

export interface faqsItem {
  heading: string;
  description: string;
}

export const developmentProcess: DevelopmentProcess[] = [
  {
    heading: "Consultation",
    description:
      "We begin with an initial consultation to understand your ideas and objectives. This conversation helps us get a clear picture of your vision and sets the foundation for the entire project.",
      image: consultationProcessImg,
  },
  {
    heading: "Requirement Gathering",
    description:
      "In this step, we dive deeper into the specifics of what your project needs. We gather detailed requirements to ensure that we understand every aspect and feature you want in your final product.",
      image: requirementGatheringProcessImg,
  },
  {
    heading: "Planning & Strategy",
    description:
      "After gathering requirements, we move into planning. Here, we outline a strategy that maps out each phase of development, setting clear timelines and goals to keep everything on track.",
      image: planningProcessImg,
  },
  {
    heading: "Development & Testing",
    description:
      "With a solid plan in place, our development team gets to work. We start building the product, coding each feature carefully, and performing initial testing to ensure quality at every step.",
      image: developmentProcessImg,
  },
  {
    heading: "Quality Assurance",
    description:
      "Before final delivery, our quality assurance team rigorously tests the product to ensure it meets our high standards. We identify and resolve any issues so that you receive a polished, ready-to-use solution.",
      image: qualityAssuranceProcessImg,
  },
  {
    heading: "Final Delivery & Support",
    description:
      "Once the product has passed all tests, we deliver it to you, fully prepared for launch. Our commitment doesn’t end here; we provide post-delivery support to assist with any queries or adjustments as you get started.",
      image: developmentLaunchProcessImg,
  },
];
export  const faqs: faqsItem[] = [
  {
    heading: "What services does Sigma 6 Digital offer?",
    description: "Sigma 6 Digital offers a range of services, including web development, app development, AI solutions, and IT support. We provide customized solutions tailored to meet the unique needs of your business."
  },
  {
    heading: "How long does it take to develop a website or app?",
    description: "The development timeline varies based on the project’s complexity and specific requirements. Typically, a website or app can take anywhere from a few weeks to several months. We will provide a detailed timeline during the initial consultation."
  },
  {
    heading: "Do you offer digital marketing services?",
    description: "Yes, we provide comprehensive digital marketing services designed to enhance your online presence. Our offerings include search engine optimization (SEO), social media marketing, content creation, and targeted advertising strategies to help your business reach and engage your target audience effectively."
  },
  {
    heading: "Do you offer ongoing support after project completion?",
    description: "Yes, we provide ongoing support and maintenance services to ensure your website or app runs smoothly. Our team is available to assist with updates, troubleshooting, and any other needs you may have."
  },
  {
    heading: "What industries do you serve?",
    description: "We work with a diverse range of industries, including retail, healthcare, education, and finance. Our solutions are adaptable to various business sectors, allowing us to meet the specific needs of each client."
  },
  {
    heading: "How do I get started with Sigma 6 Digital?",
    description: "To get started, simply reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your project requirements and explore how we can assist you in achieving your goals."
  },
  {
    heading: "What is your pricing structure?",
    description: "Our pricing varies based on the complexity and scope of each project. We provide customized quotes after assessing your specific needs during the initial consultation. We strive to offer competitive rates while maintaining high-quality service."
  },
  {
    heading: "Do you provide training for your solutions?",
    description: "Yes, we offer training sessions to help your team effectively use and manage the solutions we deliver. Our goal is to ensure you feel confident and capable in utilizing the technology we provide."
  },
  {
    heading: "How do you ensure project quality?",
    description: "We follow a rigorous development process that includes regular testing, code reviews, and client feedback at various stages of the project. Our focus on quality assurance ensures that we deliver reliable and high-performing solutions."
  },
];
export const features: Feature[] = [
  { src: featureLogoDelete },
  { src: featureLogoDelete },
  { src: featureLogoDelete },
  { src: featureLogoDelete },
  { src: featureLogoDelete },
  { src: featureLogoDelete },
  { src: featureLogoDelete },
  { src: featureLogoDelete },
  { src: featureLogoDelete },
  { src: featureLogoDelete },
  { src: featureLogoDelete },
];
export const services: Service[] = [
  {
    name: "Development",
    imgsrc: webDevelopmentImg,
    heading: "Crafting Engaging Digital Experiences",
    description: "Our development team builds reliable, high-performance websites and applications, tailored to enhance user engagement and achieve your business goals.",
    button: "Read More",
    buttonSrc: "/development",
  },
  {
    name: "IT Solutions",
    imgsrc: itSolutionsImg,
    heading: "Complete IT Solutions for Modern Businesses",
    description: "We deliver end-to-end IT solutions that cater to your unique requirements, streamlining operations and fostering sustainable growth.",
    button: "Read More",
    buttonSrc: "/it-solutions",
  },
  {
    name: "AI & Automation",
    imgsrc: aiSolutionsImg,
    heading: "Advancing Business with AI & Automation",
    description: "Our AI and automation solutions are designed to optimize processes, improve efficiency, and drive data-informed decisions across industries.",
    button: "Read More",
    buttonSrc: "/ai-automation",
  },
  {
    name: "Maintenance & Support",
    imgsrc: maintenanceServiceImage,
    heading: "Reliable Maintenance for Seamless Operations",
    description: "With our ongoing maintenance and support, ensure your systems remain secure, efficient, and ready to support your business 24/7.",
    button: "Read More",
    buttonSrc: "/maintenance-support",
  },
  {
    name: "Digital Marketing",
    imgsrc: webDevelopmentImg,
    heading: "Strategies to Elevate Your Brand",
    description: "Our digital marketing services encompass SEO, social media, content creation, and PPC to boost your brand's online visibility and engagement.",
    button: "Read More",
    buttonSrc: "/digital-marketing",
  },
  {
    name: "Creative Design",
    imgsrc: webDevelopmentImg,
    heading: "Bringing Ideas to Life Through Design",
    description: "Our creative team specializes in graphic design, branding, and UI/UX, creating visually stunning designs that align with your brand’s identity.",
    button: "Read More",
    buttonSrc: "/creative-design",
  },
];

export const industriesData: IndustryData[] = [
  {
    heading: "Education",
    description: "We build dynamic e-learning platforms and interactive, engaging digital tools that enhance student engagement and streamline processes for institutions.",
    point_1: "E-learning Platforms",
    point_2: "Learning Management Systems",
  },
  {
    heading: "Legal Services",
    description: "Our digital solutions help law firms and legal professionals manage cases, enhance client communication, and streamline documentation with secure, efficient systems.",
    point_1: "Case Management",
    point_2: "Document Automation",
  },
  {
    heading: "Technology",
    description: "From startups to established tech companies, we provide cutting-edge development services that accelerate innovation, improve productivity, and deliver scalable, reliable solutions.",
    point_1: "Custom Software",
    point_2: "Web Applications",
  },
  {
    heading: "Healthcare",
    description: "We create secure, HIPAA-compliant applications that support healthcare providers in improving patient care, optimizing operations, and managing data effectively.",
    point_1: "Telehealth Solutions",
    point_2: "Patient Management",
  },
  {
    heading: "Real Estate",
    description: "We support real estate professionals with digital tools for property management, virtual tours, and transaction automation, enhancing client interactions and sales.",
    point_1: "Property Management",
    point_2: "Virtual Tours",
  },
];

export const globalLocation: GlobalLocation[] = [
  {
    image: globalLocationImage,
    heading: "United Kingdom",
  },
  {
    image: globalLocationImage,
    heading: "United States",
  },
  {
    image: globalLocationImage,
    heading: "Saudi Arabia",
  },
  {
    image: globalLocationImage,
    heading: "United Arab Emirates",
  },
]


export const WebDevelopmentServices: Service[] = [
  {
    name: "Responsive Web Design",
    imgsrc: webDevelopmentImg,
    heading: "Adaptive & Mobile-Friendly Design",
    description: "Our responsive web design services ensure that your website delivers an optimal user experience across all devices, from desktops to smartphones.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Front-End Development",
    imgsrc: webDevelopmentImg,
    heading: "Interactive and Engaging Interfaces",
    description: "We create visually engaging and interactive front-end designs using the latest frameworks like React, Angular, and Vue to captivate and retain your users.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Back-End Development",
    imgsrc: webDevelopmentImg,
    heading: "Robust & Scalable Solutions",
    description: "Our back-end development services focus on building secure, scalable, and efficient server-side applications, ensuring smooth and fast data processing.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "E-Commerce Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Building High-Converting Online Stores",
    description: "We design and develop fully functional, user-friendly e-commerce websites tailored to drive sales and enhance user experience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Website Optimization",
    imgsrc: webDevelopmentImg,
    heading: "Enhancing Speed & Performance",
    description: "Our website optimization services improve loading times, ensure mobile responsiveness, and enhance overall site performance for better user engagement.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "API Integration",
    imgsrc: webDevelopmentImg,
    heading: "Seamless Third-Party Integration",
    description: "We integrate third-party APIs into your website to enhance functionality, from payment gateways to social media integrations and beyond.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Website Maintenance",
    imgsrc: webDevelopmentImg,
    heading: "Keeping Your Site Running Smoothly",
    description: "Our maintenance services ensure your website stays updated, secure, and performs optimally with regular updates, security patches, and support.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const AppDevelopmentServices: Service[] = [
  {
    name: "iOS & Android App Development",
    imgsrc: webDevelopmentImg,
    heading: "Custom Mobile App Solutions",
    description: "We build tailored mobile applications for both iOS and Android, ensuring high performance and seamless user experiences across all devices.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Cross-Platform Development",
    imgsrc: webDevelopmentImg,
    heading: "One Codebase, Multiple Platforms",
    description: "Using technologies like React Native and Flutter, we develop apps that work on multiple platforms, reducing costs and reaching more users.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "UI/UX Design",
    imgsrc: webDevelopmentImg,
    heading: "Engaging & Intuitive User Interfaces",
    description: "Our UI/UX design services focus on creating intuitive and visually appealing app interfaces that keep users engaged and enhance their experience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Backend for Mobile Apps",
    imgsrc: webDevelopmentImg,
    heading: "Robust Server-Side Development",
    description: "We build secure and scalable backend systems that ensure your app performs well under high demand and provides a seamless user experience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "App Testing & Quality Assurance",
    imgsrc: webDevelopmentImg,
    heading: "Delivering Bug-Free Experiences",
    description: "Our testing and QA services identify and fix bugs, ensuring your app runs smoothly and provides a flawless experience for users.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "App Maintenance & Support",
    imgsrc: webDevelopmentImg,
    heading: "Keeping Your App Up-To-Date",
    description: "Our ongoing maintenance services keep your app updated, secure, and performing optimally with regular updates, security patches, and support.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "API & Third-Party Integrations",
    imgsrc: webDevelopmentImg,
    heading: "Enhancing App Functionality",
    description: "We integrate third-party APIs, from payment gateways to social media, to add more functionality and improve your app's user experience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const eCommerceDevelopmentServices: Service[] = [
  {
    name: "Custom E-commerce Development",
    imgsrc: webDevelopmentImg,
    heading: "Tailored to Fit Your Business Needs",
    description: "We build unique e-commerce websites that align with your brand and target audience, providing a customized shopping experience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Shopping Cart & Checkout",
    imgsrc: webDevelopmentImg,
    heading: "Smooth and Secure Transactions",
    description: "Our optimized cart and checkout solutions ensure a secure, user-friendly checkout process to reduce cart abandonment.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Payment Gateway Integration",
    imgsrc: webDevelopmentImg,
    heading: "Secure and Reliable Payment Processing",
    description: "We integrate secure payment gateways like PayPal and Stripe, offering your customers a safe and smooth checkout experience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Mobile-Friendly E-commerce Design",
    imgsrc: webDevelopmentImg,
    heading: "Optimized for All Devices",
    description: "Our mobile-first design approach ensures your e-commerce site is user-friendly and functional on all devices.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Third-Party Integrations",
    imgsrc: webDevelopmentImg,
    heading: "Connecting Your Store with Essential Tools",
    description: "We integrate essential third-party services, including CRM, ERP, and marketing tools, to enhance your e-commerce site’s functionality.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "E-commerce Maintenance & Support",
    imgsrc: webDevelopmentImg,
    heading: "Keeping Your Store Running Smoothly",
    description: "Our team provides ongoing maintenance and support to ensure your e-commerce site is always updated, secure, and running efficiently.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const crmDevelopmentServices: Service[] = [
  {
    name: "Custom CRM Development",
    imgsrc: webDevelopmentImg,
    heading: "Tailored CRM Solutions for Your Business",
    description: "We build custom CRM systems that align with your unique business processes, helping you manage customer relationships effectively.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Sales & Marketing Automation",
    imgsrc: webDevelopmentImg,
    heading: "Automate and Streamline Workflows",
    description: "Our CRM solutions offer powerful automation features to streamline sales and marketing efforts, making your processes more efficient.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Customer Support Management",
    imgsrc: webDevelopmentImg,
    heading: "Enhanced Customer Support",
    description: "We integrate tools for tracking customer inquiries and interactions, helping your support team respond faster and build stronger relationships.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Data Analytics & Reporting",
    imgsrc: webDevelopmentImg,
    heading: "Insightful Data for Better Decisions",
    description: "Our CRM solutions come with analytics and reporting features, providing valuable insights into customer behaviors and business trends.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Third-Party Integrations",
    imgsrc: webDevelopmentImg,
    heading: "Seamlessly Connect with Other Tools",
    description: "We integrate your CRM with other essential tools like email marketing platforms, ERP systems, and more for a unified workflow.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "CRM Maintenance & Support",
    imgsrc: webDevelopmentImg,
    heading: "Ongoing Support for Your CRM",
    description: "Our maintenance services ensure your CRM system stays up-to-date, secure, and functioning optimally with regular support and updates.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const networkManagementServices: Service[] = [
  {
    name: "Network Design & Implementation",
    imgsrc: webDevelopmentImg,
    heading: "Custom Network Solutions Tailored to Your Needs",
    description: "We design and implement network solutions that fit your unique business requirements, ensuring seamless connectivity and optimal performance.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Network Security",
    imgsrc: webDevelopmentImg,
    heading: "Protecting Your Network from Threats",
    description: "Our network security services safeguard your infrastructure with firewalls, intrusion detection, and advanced monitoring to keep your data secure.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Wireless Network Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Reliable Wireless Connectivity",
    description: "We set up robust wireless networks for seamless, secure access across your facility, ensuring high performance and ease of use.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Network Monitoring & Management",
    imgsrc: webDevelopmentImg,
    heading: "24/7 Network Health Monitoring",
    description: "Our monitoring solutions keep track of your network’s performance and security, identifying and resolving issues before they affect your business.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "VPN & Remote Access Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Secure Remote Connections",
    description: "We provide secure VPN and remote access solutions, allowing your team to work safely from anywhere with full network access.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const cloudSolutionsServices: Service[] = [
  {
    name: "Cloud Infrastructure Setup",
    imgsrc: webDevelopmentImg,
    heading: "Reliable & Scalable Cloud Environments",
    description: "We design and implement cloud infrastructure tailored to your business, ensuring scalability, reliability, and optimized performance.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Cloud Migration",
    imgsrc: webDevelopmentImg,
    heading: "Seamless Transition to the Cloud",
    description: "Our cloud migration services move your data and applications securely to the cloud, minimizing downtime and ensuring data integrity.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Cloud Security",
    imgsrc: webDevelopmentImg,
    heading: "Protecting Your Cloud Assets",
    description: "We provide comprehensive cloud security solutions, from encryption to identity management, safeguarding your data in the cloud.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Cloud Backup & Disaster Recovery",
    imgsrc: webDevelopmentImg,
    heading: "Ensuring Business Continuity",
    description: "Our cloud backup and recovery solutions protect your data from unexpected incidents, ensuring quick recovery and minimal business disruption.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Multi-Cloud & Hybrid Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Flexible Cloud Configurations",
    description: "We offer multi-cloud and hybrid cloud setups, allowing you to leverage the best features of multiple cloud providers or on-premise systems.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const dataSecurityServices: Service[] = [
  {
    name: "Data Encryption",
    imgsrc: webDevelopmentImg,
    heading: "Protecting Data Through Encryption",
    description: "We provide advanced encryption solutions that protect sensitive data at rest and in transit, ensuring only authorized access.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Identity & Access Management",
    imgsrc: webDevelopmentImg,
    heading: "Secure Access Control",
    description: "Our access management solutions control and monitor user access, minimizing risks and safeguarding critical data.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Threat Detection & Prevention",
    imgsrc: webDevelopmentImg,
    heading: "Proactive Security Monitoring",
    description: "With advanced threat detection tools, we monitor and respond to potential security threats before they can impact your business.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Data Loss Prevention (DLP)",
    imgsrc: webDevelopmentImg,
    heading: "Preventing Unauthorized Data Exposure",
    description: "Our DLP solutions prevent unauthorized access and data leakage, keeping your information secure and compliant.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Compliance & Regulatory Support",
    imgsrc: webDevelopmentImg,
    heading: "Ensuring Compliance with Data Regulations",
    description: "We help your business stay compliant with regulations such as GDPR, HIPAA, and more, ensuring data handling meets industry standards.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const itConsultingServices: Service[] = [
  {
    name: "IT Strategy & Planning",
    imgsrc: webDevelopmentImg,
    heading: "Aligning IT with Business Goals",
    description: "We develop IT strategies tailored to your business objectives, ensuring technology supports your growth and operational efficiency.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Digital Transformation",
    imgsrc: webDevelopmentImg,
    heading: "Transforming Operations with Technology",
    description: "Our consulting services guide you through digital transformation, enhancing productivity and driving business growth with innovative solutions.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Infrastructure Assessment",
    imgsrc: webDevelopmentImg,
    heading: "Optimizing Your IT Infrastructure",
    description: "We assess your current IT infrastructure, identifying areas for improvement to ensure scalability, performance, and cost-effectiveness.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Cloud Strategy & Migration",
    imgsrc: webDevelopmentImg,
    heading: "Navigating the Cloud with Confidence",
    description: "Our cloud consulting services provide guidance on cloud adoption, ensuring a smooth migration that meets your business needs.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "IT Risk & Compliance",
    imgsrc: webDevelopmentImg,
    heading: "Ensuring Compliance and Mitigating Risks",
    description: "We help you stay compliant with industry standards and manage IT risks, safeguarding your business operations and reputation.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const virtualizationServices: Service[] = [
  {
    name: "Server Virtualization",
    imgsrc: webDevelopmentImg,
    heading: "Optimize Server Resources",
    description: "We create virtual server environments that optimize resource use, increase flexibility, and reduce costs, allowing your IT infrastructure to scale efficiently.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Desktop Virtualization",
    imgsrc: webDevelopmentImg,
    heading: "Flexible & Secure Desktop Access",
    description: "Our desktop virtualization services provide employees with secure remote access to desktop environments, improving flexibility and mobility.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Network Virtualization",
    imgsrc: webDevelopmentImg,
    heading: "Enhanced Network Efficiency",
    description: "We offer network virtualization solutions that simplify network management, optimize performance, and increase operational efficiency.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Storage Virtualization",
    imgsrc: webDevelopmentImg,
    heading: "Efficient Data Storage Management",
    description: "Our storage virtualization solutions consolidate storage resources, enabling seamless data access and simplified storage management.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Application Virtualization",
    imgsrc: webDevelopmentImg,
    heading: "Run Applications Anywhere",
    description: "With application virtualization, we enable you to run applications across different environments without requiring installation on each device.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const machineLearningServices: Service[] = [
  {
    name: "Custom Machine Learning Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Tailored Models for Your Needs",
    description: "We design and develop custom machine learning models that address specific business challenges, providing actionable insights and automation.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Model Training & Optimization",
    imgsrc: webDevelopmentImg,
    heading: "Enhancing Model Performance",
    description: "Our team trains and optimizes machine learning models, ensuring high accuracy and efficiency tailored to your unique data.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Data Preparation & Feature Engineering",
    imgsrc: webDevelopmentImg,
    heading: "Preparing Data for Success",
    description: "We handle data preprocessing and feature engineering, creating high-quality input data to improve model outcomes.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const chatbotServices: Service[] = [
  {
    name: "Custom Chatbot Development",
    imgsrc: webDevelopmentImg,
    heading: "Engaging & Responsive Chatbots",
    description: "We develop custom chatbots tailored to your business needs, providing automated, real-time support and engagement with users.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Natural Language Processing (NLP)",
    imgsrc: webDevelopmentImg,
    heading: "Understanding and Interacting with Users",
    description: "Our NLP-powered chatbots understand user intent and provide context-aware responses, enhancing customer interaction.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Multi-Platform Integration",
    imgsrc: webDevelopmentImg,
    heading: "Connecting Across Platforms",
    description: "We integrate chatbots across various platforms like websites, social media, and mobile apps to provide a seamless experience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const predictiveAnalyticsServices: Service[] = [
  {
    name: "Predictive Model Development",
    imgsrc: webDevelopmentImg,
    heading: "Forecasting Future Trends",
    description: "We develop predictive models that analyze historical data to forecast future trends and inform decision-making.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Customer Behavior Analysis",
    imgsrc: webDevelopmentImg,
    heading: "Understanding Customer Patterns",
    description: "Our analytics solutions help you understand customer behavior, enabling personalized experiences and improved retention.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const computerVisionServices: Service[] = [
  {
    name: "Image Recognition",
    imgsrc: webDevelopmentImg,
    heading: "Identifying Objects in Images",
    description: "We build image recognition solutions that detect and identify objects, enabling automation and improved decision-making.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Facial Recognition",
    imgsrc: webDevelopmentImg,
    heading: "Securing Access with Facial Identification",
    description: "Our facial recognition systems provide secure and efficient identification for applications across security and user authentication.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const nlpServices: Service[] = [
  {
    name: "Text Analysis & Sentiment Detection",
    imgsrc: webDevelopmentImg,
    heading: "Understanding Customer Sentiments",
    description: "Our NLP solutions analyze text for sentiment, extracting valuable insights from customer feedback and social media.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Speech Recognition",
    imgsrc: webDevelopmentImg,
    heading: "Converting Speech to Text",
    description: "We develop speech recognition solutions that convert spoken words into text, providing accessible options for various applications.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const softwareMaintenanceServices: Service[] = [
  {
    name: "Regular Software Updates",
    imgsrc: webDevelopmentImg,
    heading: "Keeping Software Up-to-Date",
    description: "We ensure your software is up-to-date with the latest features and security patches, improving performance and user experience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Version Upgrades",
    imgsrc: webDevelopmentImg,
    heading: "Smooth Transition to New Versions",
    description: "Our team handles version upgrades seamlessly, ensuring your software continues to perform optimally.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const bugFixingServices: Service[] = [
  {
    name: "Code Debugging",
    imgsrc: webDevelopmentImg,
    heading: "Identifying & Fixing Bugs",
    description: "Our debugging services address and resolve code issues, ensuring smooth application functionality.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const securityPatchingServices: Service[] = [
  {
    name: "Regular Security Updates",
    imgsrc: webDevelopmentImg,
    heading: "Protecting Against Threats",
    description: "We provide regular security patches to protect your software from potential vulnerabilities and threats.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const performanceOptimizationServices: Service[] = [
  {
    name: "Speed Optimization",
    imgsrc: webDevelopmentImg,
    heading: "Improving Application Speed",
    description: "We optimize your application for speed, enhancing user experience and reducing load times.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const dataBackupServices: Service[] = [
  {
    name: "Automated Data Backup",
    imgsrc: webDevelopmentImg,
    heading: "Regular and Reliable Data Backup",
    description: "Our automated backup solutions ensure that your data is safely stored and readily available when needed.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Disaster Recovery Planning",
    imgsrc: webDevelopmentImg,
    heading: "Preparing for Data Recovery",
    description: "We help you prepare for data loss scenarios with a robust disaster recovery plan, minimizing downtime and data loss.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const seoOptimizationServices: Service[] = [
  {
    name: "On-Page SEO",
    imgsrc: webDevelopmentImg,
    heading: "Enhancing Site Content for Better Rankings",
    description: "We optimize your website content, metadata, and structure to improve search engine rankings and user engagement.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Technical SEO",
    imgsrc: webDevelopmentImg,
    heading: "Improving Site Performance & Crawlability",
    description: "Our technical SEO services ensure your site is optimized for speed, security, and mobile-friendliness, making it easier for search engines to crawl.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Link Building",
    imgsrc: webDevelopmentImg,
    heading: "Building High-Quality Backlinks",
    description: "We create strategies to build high-quality backlinks, improving your site's authority and search engine rankings.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const socialMediaMarketingServices: Service[] = [
  {
    name: "Social Media Strategy",
    imgsrc: webDevelopmentImg,
    heading: "Building a Targeted Social Media Plan",
    description: "We develop a social media strategy aligned with your business goals, ensuring engagement and brand growth across platforms.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Content Creation & Posting",
    imgsrc: webDevelopmentImg,
    heading: "Creating Engaging Social Content",
    description: "Our team creates engaging content tailored to your audience, keeping your social media channels active and relevant.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const contentCreationServices: Service[] = [
  {
    name: "Blog & Article Writing",
    imgsrc: webDevelopmentImg,
    heading: "Creating Valuable, Engaging Content",
    description: "We produce high-quality blog posts and articles that inform, engage, and drive traffic to your website.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Website Copywriting",
    imgsrc: webDevelopmentImg,
    heading: "Optimized Content for Your Website",
    description: "Our copywriting services create compelling, SEO-friendly website content that resonates with your audience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const ppcServices: Service[] = [
  {
    name: "Google Ads Management",
    imgsrc: webDevelopmentImg,
    heading: "Targeted PPC Campaigns",
    description: "We create and manage Google Ads campaigns to drive targeted traffic to your website and maximize ROI.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Social Media Advertising",
    imgsrc: webDevelopmentImg,
    heading: "Reaching Audiences on Social Platforms",
    description: "Our social media advertising strategies target your audience across platforms, enhancing brand visibility and engagement.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const emailMarketingServices: Service[] = [
  {
    name: "Email Campaign Management",
    imgsrc: webDevelopmentImg,
    heading: "Creating Effective Email Campaigns",
    description: "We manage and optimize email campaigns that engage customers, nurture leads, and drive conversions.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Email List Building",
    imgsrc: webDevelopmentImg,
    heading: "Growing Your Subscriber Base",
    description: "Our strategies help grow and segment your email list, ensuring messages reach the right audience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const graphicDesignServices: Service[] = [
  {
    name: "Digital Illustrations",
    imgsrc: webDevelopmentImg,
    heading: "Creative Illustrations for Your Brand",
    description: "We create custom digital illustrations that bring your brand to life, enhancing your visual identity across platforms.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Print Design",
    imgsrc: webDevelopmentImg,
    heading: "Designs for Marketing Collateral",
    description: "Our print design services cover everything from brochures to flyers, providing cohesive, professional designs for your brand.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const logoBrandingServices: Service[] = [
  {
    name: "Logo Design",
    imgsrc: webDevelopmentImg,
    heading: "Creating Memorable Brand Identities",
    description: "We design unique, memorable logos that represent your brand and resonate with your audience.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Brand Identity Development",
    imgsrc: webDevelopmentImg,
    heading: "Establishing a Cohesive Brand Image",
    description: "Our branding services create a cohesive brand identity, covering everything from color schemes to typography.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const uiUxDesignServices: Service[] = [
  {
    name: "User Research & Personas",
    imgsrc: webDevelopmentImg,
    heading: "Understanding User Needs",
    description: "We conduct thorough user research and create personas to inform user-centered design solutions.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Wireframing & Prototyping",
    imgsrc: webDevelopmentImg,
    heading: "Creating User-Friendly Interfaces",
    description: "Our wireframes and prototypes ensure a smooth user experience, providing a visual guide for the final design.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const motionGraphicsServices: Service[] = [
  {
    name: "Explainer Videos",
    imgsrc: webDevelopmentImg,
    heading: "Engaging Animated Videos",
    description: "We create explainer videos that break down complex concepts and engage your audience with dynamic visuals.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "Social Media Animations",
    imgsrc: webDevelopmentImg,
    heading: "Boosting Engagement on Social Channels",
    description: "Our animations for social media are designed to grab attention and convey messages effectively.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const productDesignServices: Service[] = [
  {
    name: "Concept Development",
    imgsrc: webDevelopmentImg,
    heading: "From Idea to Realization",
    description: "We work with you to turn product concepts into reality, focusing on functionality, aesthetics, and market appeal.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
  {
    name: "3D Modeling & Prototyping",
    imgsrc: webDevelopmentImg,
    heading: "Visualizing and Testing Ideas",
    description: "Our 3D modeling and prototyping services bring ideas to life, enabling you to visualize and test products before manufacturing.",
    button: "Book an appointment",
    buttonSrc: "/contact",
  },
];
export const developmentServices: Service[] = [
  {
    name: "Web Development",
    imgsrc: webDevelopmentImg,
    heading: "Building Modern, Scalable Websites",
    description: "Our web development services provide customized, responsive, and SEO-friendly websites to help you stand out in the digital world.",
    button: "Read More",
    buttonSrc: "/website-development",
  },
  {
    name: "App Development",
    imgsrc: appDevelopmentImg,
    heading: "Turning Ideas into Mobile Experiences",
    description: "We develop powerful, user-friendly mobile applications that engage users and offer seamless functionality.",
    button: "Read More",
    buttonSrc: "/app-development",
  },
  {
    name: "E-commerce Development",
    imgsrc: webDevelopmentImg,
    heading: "Crafting Profitable Online Stores",
    description: "Our e-commerce solutions are built to enhance user experience, optimize conversions, and support your business growth.",
    button: "Read More",
    buttonSrc: "/ecommerce-development",
  },
  {
    name: "CRM Development",
    imgsrc: webDevelopmentImg,
    heading: "Custom CRM Solutions",
    description: "From managing customer interactions to enhancing productivity, our CRM solutions are designed to streamline your operations.",
    button: "Read More",
    buttonSrc: "/crm-development",
  },
];
export const itSolutionsServices: Service[] = [
  {
    name: "Network Management",
    imgsrc: webDevelopmentImg,
    heading: "Optimizing Your Network for Reliability",
    description: "We manage and maintain your network infrastructure to ensure smooth operations, minimizing downtime and maximizing performance.",
    button: "Read More",
    buttonSrc: "/network-management",
  },
  {
    name: "Cloud Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Flexible Cloud Solutions for Modern Business",
    description: "Our cloud services provide scalable storage and computing power, making it easy for your team to collaborate and access data securely from anywhere.",
    button: "Read More",
    buttonSrc: "/cloud-solutions",
  },
  {
    name: "Data Security",
    imgsrc: webDevelopmentImg,
    heading: "Protecting Your Valuable Data",
    description: "From encryption to threat monitoring, we offer comprehensive data security solutions to keep your information safe and your business compliant.",
    button: "Read More",
    buttonSrc: "/data-security",
  },
  {
    name: "IT Consulting",
    imgsrc: webDevelopmentImg,
    heading: "Strategic Guidance for IT Success",
    description: "Our expert consultants help you align IT strategy with business goals, ensuring technology is a driver of growth, not a roadblock.",
    button: "Read More",
    buttonSrc: "/it-consulting",
  },
  {
    name: "Virtualization",
    imgsrc: webDevelopmentImg,
    heading: "Enhancing Efficiency with Virtualization",
    description: "We help you optimize resources and reduce costs through virtualization, enabling flexible, efficient management of your IT environment.",
    button: "Read More",
    buttonSrc: "/virtualization",
  },
];
export const aiAutomationServices: Service[] = [
  {
    name: "Machine Learning Models",
    imgsrc: webDevelopmentImg,
    heading: "Transforming Data into Actionable Insights",
    description: "We build custom machine learning models that analyse complex data, helping you make informed, data-driven decisions.",
    button: "Read more",
    buttonSrc: "/machine-learning",
  },
  {
    name: "Chatbot Development",
    imgsrc: webDevelopmentImg,
    heading: "Engage Customers with Smart Chatbots",
    description: "Our chatbots provide instant, personalized interactions, enhancing customer experience and streamlining support operations.",
    button: "Read more",
    buttonSrc: "/chatbot-development",
  },
  {
    name: "Predictive Analytics",
    imgsrc: webDevelopmentImg,
    heading: "Anticipate Trends and Plan Ahead",
    description: "Using predictive analytics, we help you forecast trends, manage risks, and stay a step ahead in your industry.",
    button: "Read more",
    buttonSrc: "/predictive-analytics",
  },
  {
    name: "Computer Vision",
    imgsrc: webDevelopmentImg,
    heading: "Empowering Automation with Visual Data",
    description: "Our computer vision solutions enable automated image and video analysis, enhancing efficiency and accuracy in your operations.",
    button: "Read more",
    buttonSrc: "/computer-vision",
  },
  {
    name: "NLP Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Turning Text into Insights with NLP",
    description: "From sentiment analysis to language understanding, our NLP solutions transform unstructured text into valuable insights.",
    button: "Read more",
    buttonSrc: "/nlp-solutions",
  },
];
export const maintenanceSupportServices: Service[] = [
  {
    name: "Software Maintenance",
    imgsrc: webDevelopmentImg,
    heading: "Keeping Your Software Running Smoothly",
    description: "We provide ongoing software maintenance to ensure your applications remain up-to-date, secure, and fully functional.",
    button: "Read more",
    buttonSrc: "/software-maintenance",
  },
  {
    name: "Bug Fixing",
    imgsrc: webDevelopmentImg,
    heading: "Swift Solutions for Software Issues",
    description: "Our team is dedicated to identifying and fixing bugs quickly, minimising downtime and ensuring a seamless user experience.",
    button: "Read more",
    buttonSrc: "/bug-fixing",
  },
  {
    name: "Security Patching",
    imgsrc: webDevelopmentImg,
    heading: "Keeping Your Systems Secure",
    description: "We offer timely security patching to safeguard your software against vulnerabilities, protecting your data and users.",
    button: "Read more",
    buttonSrc: "/security-patching",
  },
  {
    name: "Performance Optimization",
    imgsrc: webDevelopmentImg,
    heading: "Enhancing System Performance",
    description: "Our optimisation services ensure your software operates at peak efficiency, providing a fast and responsive experience for users.",
    button: "Read more",
    buttonSrc: "/performance-optimization",
  },
  {
    name: "Data Backup & Recovery",
    imgsrc: webDevelopmentImg,
    heading: "Protecting and Restoring Your Data",
    description: "We provide reliable backup and recovery solutions to secure your critical data and ensure quick recovery in case of any data loss.",
    button: "Read more",
    buttonSrc: "/data-backup-recovery",
  },
];
export const digitalMarketingServices: Service[] = [
  {
    name: "SEO Optimization",
    imgsrc: webDevelopmentImg,
    heading: "Boost Your Online Visibility",
    description: "Our SEO services help your website rank higher, driving organic traffic and increasing your online presence effectively.",
    button: "Read more",
    buttonSrc: "/seo-optimization",
  },
  {
    name: "Social Media Marketing",
    imgsrc: webDevelopmentImg,
    heading: "Engage and Grow Your Audience",
    description: "We create targeted social media strategies to build brand awareness, engage followers, and foster a loyal online community.",
    button: "Read more",
    buttonSrc: "/social-media-marketing",
  },
  {
    name: "Content Creation",
    imgsrc: webDevelopmentImg,
    heading: "Crafting Content That Connects",
    description: "Our team produces high-quality content that resonates with your audience, elevates your brand, and supports your marketing goals.",
    button: "Read more",
    buttonSrc: "/content-creation",
  },
  {
    name: "PPC Campaigns",
    imgsrc: webDevelopmentImg,
    heading: "Drive Results with Paid Ads",
    description: "We design and manage pay-per-click campaigns to generate immediate traffic and maximise return on ad spend.",
    button: "Read more",
    buttonSrc: "/ppc-campaigns",
  },
  {
    name: "Email Marketing",
    imgsrc: webDevelopmentImg,
    heading: "Nurture Leads with Targeted Emails",
    description: "Our email marketing services help you engage your audience, retain customers, and boost conversions through personalised campaigns.",
    button: "Read more",
    buttonSrc: "/email-marketing",
  },
];
export const creativeDesignServices: Service[] = [
  {
    name: "Graphic Design",
    imgsrc: webDevelopmentImg,
    heading: "Creating Visual Impact",
    description: "Our graphic design services bring your brand to life with visuals that capture attention and convey your message effectively.",
    button: "Read more",
    buttonSrc: "/graphic-design",
  },
  {
    name: "Logo & Branding",
    imgsrc: webDevelopmentImg,
    heading: "Building Memorable Brands",
    description: "We create distinctive logos and branding elements that represent your business identity and resonate with your audience.",
    button: "Read more",
    buttonSrc: "/logo-branding",
  },
  {
    name: "UI/UX Design",
    imgsrc: webDevelopmentImg,
    heading: "Designing User-Centric Experiences",
    description: "Our UI/UX design services focus on crafting intuitive and engaging interfaces that provide a seamless user experience.",
    button: "Read more",
    buttonSrc: "/ui-ux-design",
  },
  {
    name: "Motion Graphics",
    imgsrc: webDevelopmentImg,
    heading: "Animating Your Story",
    description: "We create motion graphics that add life to your brand’s story, making complex ideas more accessible and engaging.",
    button: "Read more",
    buttonSrc: "/motion-graphics",
  },
  {
    name: "Product Design",
    imgsrc: webDevelopmentImg,
    heading: "Innovative Product Solutions",
    description: "Our product design services take your ideas from concept to reality, blending functionality with aesthetic appeal.",
    button: "Read more",
    buttonSrc: "/product-design",
  },
];
export const educationIndustryServices: Service[] = [
  {
    name: "eLearning Platforms",
    imgsrc: webDevelopmentImg,
    heading: "Creating Immersive Learning Experiences",
    description: "We design eLearning platforms that allow educational institutions to deliver online courses, track student progress, and engage students through interactive content.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Student Portal Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Connecting Students with Resources",
    description: "Our student portal solutions help institutions streamline academic information, manage schedules, and provide a single access point for all student services.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Learning Management Systems (LMS)",
    imgsrc: webDevelopmentImg,
    heading: "Streamlining Educational Content Delivery",
    description: "We develop custom Learning Management Systems (LMS) that allow educators to organize course materials, assess students, and track progress in a secure and scalable platform.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Virtual Classroom Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Bringing Classrooms to Life Online",
    description: "We create virtual classroom solutions that enable interactive lessons, live video streaming, and collaboration, enhancing the online learning experience for both teachers and students.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "School Administration Software",
    imgsrc: webDevelopmentImg,
    heading: "Optimizing School Management",
    description: "Our administrative solutions simplify school management, including enrollment, grading, scheduling, and communication with parents, all through one centralized system.",
    button: "Read more",
    buttonSrc: "/contact",
  },
];
export const legalServicesIndustryServices: Service[] = [
  {
    name: "Legal Case Management Systems",
    imgsrc: webDevelopmentImg,
    heading: "Streamlining Case Management",
    description: "We provide custom case management systems to help law firms track case progress, manage client data, and collaborate effectively with legal teams.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Client Portal Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Enhancing Client Communication",
    description: "We build secure client portals that allow clients to track case updates, review documents, and communicate directly with their legal team.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Document Management Systems",
    imgsrc: webDevelopmentImg,
    heading: "Secure Document Storage",
    description: "Our document management systems ensure the secure storage, organization, and retrieval of legal documents, improving efficiency and compliance.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Compliance Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Ensuring Legal Compliance",
    description: "We design digital solutions that help law firms stay compliant with industry regulations, ensuring secure handling of sensitive client information.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Legal Billing & Invoicing Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Simplifying Legal Billing",
    description: "Our legal billing and invoicing solutions automate the billing process, allowing law firms to manage time-tracking and invoicing efficiently.",
    button: "Read more",
    buttonSrc: "/contact",
  },
];
export const technologyIndustryServices: Service[] = [
  {
    name: "AI & Machine Learning Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Unlocking the Power of AI",
    description: "We create custom AI solutions that help businesses automate processes, gain insights from data, and enhance decision-making.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Cloud Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Scalable & Secure Cloud Infrastructure",
    description: "We provide cloud solutions that allow businesses to scale efficiently, reduce costs, and maintain high levels of security and performance.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Custom Software Development",
    imgsrc: webDevelopmentImg,
    heading: "Tailored Software Solutions",
    description: "We develop custom software to meet your unique business needs, from CRM systems to enterprise-level applications.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Blockchain Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Innovating with Blockchain",
    description: "Our blockchain development services help businesses implement secure, decentralized solutions for everything from payment systems to supply chain tracking.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Cybersecurity Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Protecting Your Digital Assets",
    description: "We design cybersecurity solutions that protect businesses from digital threats, ensuring data security and regulatory compliance.",
    button: "Read more",
    buttonSrc: "/contact",
  },
];
export const healthcareIndustryServices: Service[] = [
  {
    name: "Telemedicine Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Connecting Doctors & Patients",
    description: "We design telemedicine platforms that allow healthcare providers to consult with patients remotely, ensuring better accessibility and timely care.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Healthcare App Development",
    imgsrc: webDevelopmentImg,
    heading: "Empowering Healthcare on the Go",
    description: "Our mobile healthcare apps help patients track their health, book appointments, and access medical resources, all from the convenience of their smartphones.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Electronic Health Records (EHR) Systems",
    imgsrc: webDevelopmentImg,
    heading: "Streamlining Patient Data Management",
    description: "We provide custom EHR solutions that integrate patient data securely and efficiently, making it easier for healthcare providers to deliver quality care.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Healthcare Analytics Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Data-Driven Decisions for Better Care",
    description: "Our analytics solutions help healthcare organizations harness the power of data to make informed decisions, improve patient outcomes, and optimize operational efficiency.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Patient Portal Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Enhancing Patient Engagement",
    description: "We build secure patient portals that enable easy access to medical records, appointment scheduling, and communication with healthcare providers.",
    button: "Read more",
    buttonSrc: "/contact",
  },
];
export const realEstateIndustryServices: Service[] = [
  {
    name: "Real Estate Website Development",
    imgsrc: webDevelopmentImg,
    heading: "Building Real Estate Digital Presence",
    description: "We create user-friendly, visually appealing websites for real estate agencies, enabling easy property listings, client interactions, and market insights.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Property Management Solutions",
    imgsrc: webDevelopmentImg,
    heading: "Streamlining Property Management",
    description: "Our property management solutions simplify tenant management, lease tracking, and maintenance requests, all through an easy-to-use digital platform.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Real Estate CRM Systems",
    imgsrc: webDevelopmentImg,
    heading: "Optimizing Client Relations",
    description: "We design custom CRM systems for real estate professionals to manage leads, clients, and property listings more effectively and increase sales.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Real Estate Mobile Apps",
    imgsrc: webDevelopmentImg,
    heading: "Real Estate in Your Pocket",
    description: "We develop mobile apps that allow real estate buyers, sellers, and agents to browse properties, schedule appointments, and communicate seamlessly.",
    button: "Read more",
    buttonSrc: "/contact",
  },
  {
    name: "Virtual Property Tours",
    imgsrc: webDevelopmentImg,
    heading: "Bringing Properties to Life",
    description: "Our virtual tour technology allows potential buyers and renters to explore properties from the comfort of their homes, enhancing the buying experience.",
    button: "Read more",
    buttonSrc: "/contact",
  },
];



export const webDevelopmentPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Build, Engage, and Grow with Cutting-Edge Web Development",
  heroSectionDescription: "Your website should do more than just exist—it should captivate, engage, and drive growth. At Sigma 6 Digital, we build high-performing, custom websites that bring your brand to life and help your business thrive in a digital world",
  heroSectionImage: webdevelopmentService,  
  contentBoxesContent: [
    {
      contentBoxheading: "Let’s Build Something Amazing Together!",
      contentBoxDescription: "We don’t just offer services—we’re here to bring your boldest ideas to life. Whether you’re dreaming of a stunning website, a game-changing app, or a data-driven AI solution, our team at Sigma 6 Digital is dedicated to creating results that truly make a difference. With us, it’s not just about ticking boxes; it’s about building digital experiences that fuel growth and make an impact. Ready to turn vision into reality? Let’s start building something great together.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Feature Services",
  featureServices: WebDevelopmentServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates odio maxime, molestias hic, placeat, vero itaque recusandae mollitia obcaecati aut. Ad nulla maxime consectetur repudiandae quia cumque id dolorem? Nulla quisquam nisi optio.",
  technologiesBoxes: [
    {
      heading: "Frontend",
      services: ["React JS", "Typescript", "HTML", "CSS", "Javascript", "GSAP"]
    },
    {
      heading: "Backend",
      services: ["Node JS", "Express JS", "Code Ignitor", "Laravel"]
    },
    {
      heading: "Databases",
      services: ["Mongodb", "MYSQL"]
    },
  ]
};
export const appDevelopmentPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Innovative App Development for a Mobile-First World",
  heroSectionDescription: "Your app should be more than just functional—it should be intuitive, engaging, and tailored to your audience. At Sigma 6 Digital, we create custom mobile applications that captivate users and help your business thrive in an increasingly mobile-focused world.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Let’s Bring Your App Idea to Life!",
      contentBoxDescription: "We don’t just develop apps—we craft experiences. Whether you’re looking to create a user-friendly mobile app, an innovative platform, or a powerful business tool, our team at Sigma 6 Digital is here to make it happen. With our expertise and dedication, we transform concepts into seamless, functional, and impactful applications. Ready to make your app vision a reality? Let’s start building together.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our App Development Services",
  featureServices: AppDevelopmentServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We leverage industry-leading technologies to bring your app to life, ensuring performance, scalability, and a seamless user experience. Here’s what powers our app development process:",
  technologiesBoxes: [
    {
      heading: "Frontend",
      services: ["React Native", "Flutter", "Swift", "Kotlin", "JavaScript"]
    },
    {
      heading: "Backend",
      services: ["Node JS", "Express JS", "Firebase", "AWS", "Laravel"]
    },
    {
      heading: "Databases",
      services: ["MongoDB", "MySQL", "SQLite"]
    },
  ]
};
export const eCommerceDevelopmentPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Empowering Online Sales with Custom E-commerce Development",
  heroSectionDescription: "Your e-commerce website should do more than just sell—it should provide a seamless shopping experience that converts visitors into loyal customers. At Sigma 6 Digital, we create robust, user-friendly e-commerce platforms tailored to drive sales and growth for your business.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Build Your Storefront for Success!",
      contentBoxDescription: "We’re here to bring your online store vision to life. From creating a visually stunning layout to optimizing for conversions, our team ensures your e-commerce platform delivers a smooth and engaging shopping experience. Ready to start selling online with a store that truly represents your brand? Let’s build your e-commerce success together.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our E-commerce Development Services",
  featureServices: eCommerceDevelopmentServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "Our e-commerce development process uses cutting-edge technologies to ensure your online store is fast, reliable, and scalable.",
  technologiesBoxes: [
    {
      heading: "E-commerce Platforms",
      services: ["Shopify", "WooCommerce", "Magento", "BigCommerce"]
    },
    {
      heading: "Frontend",
      services: ["React JS", "Vue JS", "HTML", "CSS", "JavaScript"]
    },
    {
      heading: "Backend & Databases",
      services: ["Node JS", "Express JS", "MongoDB", "MySQL"]
    }
  ]
};
export const crmDevelopmentPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Efficient CRM Solutions for Building Strong Customer Relationships",
  heroSectionDescription: "A powerful CRM system helps you connect with customers, streamline processes, and make data-driven decisions. At Sigma 6 Digital, we build custom CRM solutions that align with your business, helping you manage relationships and grow effectively.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Empower Your Team with a Custom CRM",
      contentBoxDescription: "We create CRM solutions tailored to fit your business needs. From tracking customer interactions to automating workflows, our CRM systems make managing customer relationships easier and more effective. Ready to enhance your customer management? Let’s build a CRM that works for you.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our CRM Development Services",
  featureServices: crmDevelopmentServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We employ industry-leading technologies to build reliable and scalable CRM systems, ensuring a seamless user experience and efficient data management.",
  technologiesBoxes: [
    {
      heading: "CRM Platforms",
      services: ["Salesforce", "HubSpot", "Zoho CRM", "Microsoft Dynamics"]
    },
    {
      heading: "Backend",
      services: ["Node JS", "Express JS", "PHP", "Laravel"]
    },
    {
      heading: "Databases",
      services: ["MySQL", "MongoDB", "PostgreSQL"]
    }
  ]
};
export const networkManagementPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Secure and Efficient Network Management Solutions",
  heroSectionDescription: "Your network is the backbone of your business operations. At Sigma 6 Digital, we provide network management solutions that ensure secure, reliable, and efficient connectivity across your organisation, tailored to meet your unique needs.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Designing Networks for Optimal Performance",
      contentBoxDescription: "Our network management solutions are designed to provide fast, secure, and reliable connectivity. From structured cabling to advanced network configurations, we ensure your network infrastructure meets the demands of your business.",
      contentBoxImage: aiSolutionsImg,
    },
    {
      contentBoxheading: "Proactive Network Monitoring & Security",
      contentBoxDescription: "With our proactive network monitoring and security services, we detect and address issues before they become problems. Our approach ensures uninterrupted operations and keeps your network safe from external threats.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Network Management Services",
  featureServices: networkManagementServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "Our network management solutions use industry-leading technologies to maintain secure, high-performance networks that support your business goals.",
  technologiesBoxes: [
    {
      heading: "Network Security Tools",
      services: ["Cisco Security", "Fortinet", "Palo Alto", "Firewalls", "Intrusion Detection Systems"]
    },
    {
      heading: "Network Monitoring",
      services: ["SolarWinds", "Nagios", "PRTG Network Monitor"]
    }
  ]
};
export const cloudSolutionsPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Flexible and Secure Cloud Solutions for Your Business",
  heroSectionDescription: "Unlock the power of the cloud with our scalable, secure, and reliable cloud solutions. At Sigma 6 Digital, we help businesses transform with cloud infrastructure that supports growth, enhances flexibility, and ensures data security.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Embrace the Future with Cloud Technology",
      contentBoxDescription: "Our cloud solutions allow your business to operate with flexibility, scalability, and resilience. From infrastructure setup to migration and security, we make sure your cloud environment is built to support your goals.",
      contentBoxImage: aiSolutionsImg,
    },
    {
      contentBoxheading: "Stay Protected with Cloud Security",
      contentBoxDescription: "With our cloud security services, we safeguard your cloud infrastructure against potential threats. Our security solutions cover data encryption, access control, and compliance, ensuring your cloud environment is protected.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Cloud Solutions Services",
  featureServices: cloudSolutionsServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "Our cloud solutions are powered by leading platforms and tools, providing secure, flexible, and high-performance environments tailored to your business needs.",
  technologiesBoxes: [
    {
      heading: "Cloud Platforms",
      services: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"]
    },
    {
      heading: "Security & Compliance",
      services: ["Cloudflare", "AWS Identity and Access Management (IAM)", "Azure Active Directory", "Data Encryption"]
    },
    {
      heading: "Backup & Recovery",
      services: ["Veeam", "AWS Backup", "Azure Site Recovery"]
    }
  ]
};
export const dataSecurityPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Comprehensive Data Security Solutions to Protect Your Business",
  heroSectionDescription: "Data security is crucial for building trust and protecting your business. At Sigma 6 Digital, we provide robust data security solutions that protect your information from threats and ensure compliance with industry standards.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Securing Data at Every Layer",
      contentBoxDescription: "From encryption to access control, we offer end-to-end data security solutions that protect your business data from unauthorized access and breaches. With our comprehensive approach, we ensure your data is secure wherever it resides.",
      contentBoxImage: aiSolutionsImg,
    },
    {
      contentBoxheading: "Stay Compliant with Data Regulations",
      contentBoxDescription: "Navigating data regulations can be complex. Our team helps you meet compliance requirements, ensuring your data handling aligns with standards like GDPR and HIPAA, safeguarding your business and customer trust.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Data Security Services",
  featureServices: dataSecurityServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "Our data security services are powered by advanced tools and technologies, providing a layered approach to safeguard your data and protect against threats.",
  technologiesBoxes: [
    {
      heading: "Data Protection Tools",
      services: ["Symantec DLP", "McAfee DLP", "VeraCrypt", "BitLocker"]
    },
    {
      heading: "Threat Detection & Monitoring",
      services: ["Splunk", "AlienVault", "IBM QRadar", "FireEye"]
    },
    {
      heading: "Compliance Tools",
      services: ["OneTrust", "TrustArc", "BigID"]
    }
  ]
};
export const itConsultingPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Expert IT Consulting to Drive Business Success",
  heroSectionDescription: "Effective IT consulting aligns technology with your business goals, fostering growth and innovation. At Sigma 6 Digital, we offer strategic IT consulting services that empower you to make informed decisions and enhance operational efficiency.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Customized IT Strategies for Your Business",
      contentBoxDescription: "Our IT consulting services start with understanding your business needs and challenges. We develop tailored IT strategies to align your technology investments with your goals, ensuring technology drives your business forward.",
      contentBoxImage: aiSolutionsImg,
    },
    {
      contentBoxheading: "Transforming Operations Through Digital Innovation",
      contentBoxDescription: "With our expertise in digital transformation, we help your business leverage cutting-edge technologies to enhance productivity, streamline processes, and stay competitive in a rapidly evolving market.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our IT Consulting Services",
  featureServices: itConsultingServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "Our IT consulting leverages industry-leading tools and platforms to assess, plan, and implement strategies that align with your business goals.",
  technologiesBoxes: [
    {
      heading: "Consulting & Planning Tools",
      services: ["Microsoft Azure", "AWS Solutions Architect", "IBM Cloud", "Cisco Networking Solutions"]
    },
    {
      heading: "Risk & Compliance",
      services: ["OneTrust", "Vanta", "Qualys Compliance", "NIST Framework"]
    }
  ]
};
export const virtualizationPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Scalable and Efficient Virtualization Solutions",
  heroSectionDescription: "Virtualization enhances flexibility, scalability, and efficiency within your IT infrastructure. At Sigma 6 Digital, we provide comprehensive virtualization solutions that streamline your operations, reduce costs, and optimize resource utilization.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Transforming IT Infrastructure Through Virtualization",
      contentBoxDescription: "Our virtualization services help you reduce physical hardware needs, optimize resource utilization, and increase operational flexibility. From servers to desktops, we offer tailored virtualization solutions that support your business objectives.",
      contentBoxImage: aiSolutionsImg,
    },
    {
      contentBoxheading: "Empowering Your Team with Remote Access",
      contentBoxDescription: "With desktop and application virtualization, we enable your team to securely access essential tools and resources from anywhere, enhancing productivity and collaboration.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Virtualization Services",
  featureServices: virtualizationServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We utilize advanced tools and platforms to deliver reliable, scalable, and secure virtualization solutions that adapt to your business needs.",
  technologiesBoxes: [
    {
      heading: "Virtualization Platforms",
      services: ["VMware vSphere", "Microsoft Hyper-V", "Citrix Virtual Apps", "Oracle VM"]
    },
    {
      heading: "Network & Storage Virtualization",
      services: ["Cisco ACI", "Nutanix", "Dell EMC VxRail", "NFS and iSCSI Storage"]
    }
  ]
};
export const machineLearningPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Customized Machine Learning Models for Intelligent Insights",
  heroSectionDescription: "Unlock the potential of data-driven decision-making with custom machine learning models. At Sigma 6 Digital, we create and optimize models tailored to your business, helping you gain valuable insights and automate complex tasks.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Machine Learning Tailored to Your Business",
      contentBoxDescription: "Our custom machine learning solutions are designed to meet your specific needs, from predictive analytics to automation. With our expertise, we turn raw data into valuable insights.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Machine Learning Services",
  featureServices: machineLearningServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use cutting-edge machine learning frameworks and tools to develop scalable, efficient models that meet your business requirements.",
  technologiesBoxes: [
    {
      heading: "Machine Learning Tools",
      services: ["TensorFlow", "Keras", "Scikit-Learn", "PyTorch"]
    },
    {
      heading: "Data Processing",
      services: ["Pandas", "NumPy", "Apache Spark"]
    }
  ]
};
export const chatbotPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Custom Chatbots to Enhance Customer Engagement",
  heroSectionDescription: "Provide instant support and engage your customers with intelligent, automated chatbots. At Sigma 6 Digital, we create chatbots that understand user needs and deliver efficient customer service.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Engage Customers with Smart Chatbots",
      contentBoxDescription: "Our chatbots leverage NLP to understand and respond to user needs, providing seamless, automated assistance and enhancing customer satisfaction.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Chatbot Development Services",
  featureServices: chatbotServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We build chatbots with leading technologies to provide reliable, intelligent, and responsive customer interactions.",
  technologiesBoxes: [
    {
      heading: "Chatbot Frameworks",
      services: ["Dialogflow", "Microsoft Bot Framework", "Rasa"]
    },
    {
      heading: "NLP Tools",
      services: ["SpaCy", "NLTK", "Google NLP API"]
    }
  ]
};
export const predictiveAnalyticsPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Gain Insight with Predictive Analytics Solutions",
  heroSectionDescription: "Turn data into actionable insights with predictive analytics. At Sigma 6 Digital, we help businesses leverage data to predict trends, optimize operations, and make proactive decisions.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Forecast with Data-Driven Insights",
      contentBoxDescription: "Our predictive analytics solutions analyze historical data to forecast trends, helping you make data-backed business decisions.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Predictive Analytics Services",
  featureServices: predictiveAnalyticsServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We utilize advanced tools to build predictive models, turning raw data into strategic insights.",
  technologiesBoxes: [
    {
      heading: "Predictive Analytics Tools",
      services: ["Tableau", "Power BI", "Alteryx"]
    },
  ]
};
export const computerVisionPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Computer Vision Solutions for Intelligent Image Analysis",
  heroSectionDescription: "Unlock powerful insights with computer vision. At Sigma 6 Digital, we create solutions that interpret visual data, enabling automation and enhancing security.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Automate Visual Data Analysis",
      contentBoxDescription: "Our computer vision solutions turn images into actionable insights, from image recognition to object detection and beyond.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Computer Vision Services",
  featureServices: computerVisionServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We leverage advanced computer vision libraries and tools to build powerful visual data solutions.",
  technologiesBoxes: [
    {
      heading: "Computer Vision Tools",
      services: ["OpenCV", "TensorFlow", "YOLO"]
    },
  ]
};
export const nlpPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "NLP Solutions for Understanding and Analyzing Text",
  heroSectionDescription: "Enhance your business with natural language processing solutions that interpret and analyze human language. At Sigma 6 Digital, we help businesses unlock insights from text and speech data.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Unlock Insights from Language Data",
      contentBoxDescription: "Our NLP solutions cover a range of applications, from sentiment detection to text analysis, providing deep insights into customer interactions.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our NLP Services",
  featureServices: nlpServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use advanced NLP frameworks and tools to provide accurate, reliable language processing solutions.",
  technologiesBoxes: [
    {
      heading: "NLP Libraries",
      services: ["SpaCy", "NLTK", "Transformers"]
    },
  ]
};
export const softwareMaintenancePageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Reliable Software Maintenance Services",
  heroSectionDescription: "Keep your software running smoothly with our maintenance services. At Sigma 6 Digital, we offer regular updates, version control, and ongoing support to maximize software longevity and performance.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Ensuring Software Reliability",
      contentBoxDescription: "Our software maintenance services focus on keeping your applications stable and performing at their best, providing long-term value.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Software Maintenance Services",
  featureServices: softwareMaintenanceServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use trusted platforms and tools to manage, monitor, and maintain software applications efficiently.",
  technologiesBoxes: [
    {
      heading: "Maintenance Tools",
      services: ["Jira", "GitHub", "GitLab"]
    },
  ]
};
export const bugFixingPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Efficient Bug Fixing Services",
  heroSectionDescription: "Eliminate bugs and improve user experience with our bug-fixing services. At Sigma 6 Digital, we quickly diagnose and resolve issues, keeping your application stable.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Keeping Your Software Bug-Free",
      contentBoxDescription: "Our expert team ensures your software runs smoothly by identifying and fixing bugs, minimizing disruptions.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Bug Fixing Services",
  featureServices: bugFixingServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use advanced debugging tools to identify and resolve bugs effectively.",
  technologiesBoxes: [
    {
      heading: "Debugging Tools",
      services: ["Chrome DevTools", "Xcode Debugger", "Visual Studio Debugger"]
    },
  ]
};
export const securityPatchingPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Comprehensive Security Patching Services",
  heroSectionDescription: "Safeguard your software with our security patching services. At Sigma 6 Digital, we proactively update and protect your systems from vulnerabilities.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Preventing Security Breaches",
      contentBoxDescription: "Our security patching services keep your systems safe from cyber threats, ensuring data security and peace of mind.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Security Patching Services",
  featureServices: securityPatchingServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We leverage the latest tools to provide timely and effective security patches.",
  technologiesBoxes: [
    {
      heading: "Security Tools",
      services: ["Nessus", "Qualys", "Rapid7"]
    },
  ]
};
export const performanceOptimizationPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Advanced Performance Optimization Services",
  heroSectionDescription: "Maximize your software's performance with our optimization services. At Sigma 6 Digital, we improve speed, efficiency, and resource usage.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Enhancing Application Performance",
      contentBoxDescription: "Our performance optimization services focus on speeding up applications and improving resource management.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Performance Optimization Services",
  featureServices: performanceOptimizationServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We utilize tools that help us analyze and optimize software performance.",
  technologiesBoxes: [
    {
      heading: "Optimization Tools",
      services: ["New Relic", "AppDynamics", "GTmetrix"]
    },
  ]
};
export const dataBackupPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Comprehensive Data Backup & Recovery Solutions",
  heroSectionDescription: "Safeguard your critical data with our backup and recovery solutions. At Sigma 6 Digital, we ensure data availability and protection in the event of a disaster.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Reliable Data Protection",
      contentBoxDescription: "Our data backup and recovery solutions protect your business from data loss, ensuring quick and efficient recovery.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Data Backup & Recovery Services",
  featureServices: dataBackupServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "Our backup and recovery solutions use reliable tools and technologies to secure and restore data.",
  technologiesBoxes: [
    {
      heading: "Backup Tools",
      services: ["Veeam", "Acronis", "Carbonite"]
    },
  ]
};
export const seoOptimizationPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Effective SEO Optimization for Higher Rankings",
  heroSectionDescription: "Boost your online visibility with our comprehensive SEO services. At Sigma 6 Digital, we improve your search engine rankings, driving more traffic and engagement.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Drive Organic Traffic with SEO",
      contentBoxDescription: "Our SEO services cover all aspects of optimization, from on-page adjustments to technical fixes and link building, helping you reach a wider audience.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our SEO Optimization Services",
  featureServices: seoOptimizationServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use powerful tools and platforms to analyze, optimize, and track SEO performance.",
  technologiesBoxes: [
    {
      heading: "SEO Tools",
      services: ["Google Analytics", "SEMrush", "Ahrefs", "Moz"]
    },
  ]
};
export const socialMediaMarketingPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Boost Your Brand with Social Media Marketing",
  heroSectionDescription: "Enhance your online presence and connect with your audience with our targeted social media marketing services. At Sigma 6 Digital, we help you build a strong, engaged community around your brand.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Engage and Grow Your Audience",
      contentBoxDescription: "Our social media marketing strategies drive engagement, build brand loyalty, and connect you with a wider audience.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Social Media Marketing Services",
  featureServices: socialMediaMarketingServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use advanced social media tools to manage, monitor, and enhance your social presence.",
  technologiesBoxes: [
    {
      heading: "Social Media Tools",
      services: ["Hootsuite", "Buffer", "Sprout Social"]
    },
  ]
};
export const contentCreationPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Professional Content Creation for Your Brand",
  heroSectionDescription: "Enhance your brand’s voice and engage your audience with our content creation services. At Sigma 6 Digital, we craft impactful content that resonates with your customers.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Captivate with Quality Content",
      contentBoxDescription: "Our content creation services cover blogs, articles, website copy, and more, helping you build a strong, relatable brand.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Content Creation Services",
  featureServices: contentCreationServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use advanced writing and SEO tools to create optimized, engaging content.",
  technologiesBoxes: [
    {
      heading: "Content Tools",
      services: ["Grammarly", "Hemingway Editor", "Yoast SEO"]
    },
  ]
};
export const ppcPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Effective PPC Campaigns to Drive Results",
  heroSectionDescription: "Maximize your advertising investment with our expertly managed PPC campaigns. At Sigma 6 Digital, we help you reach your target audience and achieve measurable growth.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Reach Your Audience with Targeted Ads",
      contentBoxDescription: "Our PPC services provide targeted, data-driven campaigns that enhance visibility and drive conversions.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our PPC Campaign Services",
  featureServices: ppcServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use top tools and platforms to create, monitor, and optimize PPC campaigns effectively.",
  technologiesBoxes: [
    {
      heading: "PPC Tools",
      services: ["Google Ads", "Facebook Ads Manager", "LinkedIn Campaign Manager"]
    },
  ]
};
export const emailMarketingPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Drive Engagement with Targeted Email Marketing",
  heroSectionDescription: "Connect with your audience and build lasting relationships with our email marketing services. At Sigma 6 Digital, we create personalized, effective email campaigns that boost engagement.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Reach Your Audience Directly",
      contentBoxDescription: "Our email marketing services focus on creating targeted, engaging content that resonates with subscribers and drives conversions.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Email Marketing Services",
  featureServices: emailMarketingServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use powerful email marketing tools to manage, segment, and optimize campaigns.",
  technologiesBoxes: [
    {
      heading: "Email Marketing Tools",
      services: ["Mailchimp", "Constant Contact", "HubSpot"]
    },
  ]
};
export const graphicDesignPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Professional Graphic Design to Elevate Your Brand",
  heroSectionDescription: "From digital to print, our graphic design services enhance your brand's visual appeal. At Sigma 6 Digital, we deliver designs that resonate with your audience.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Designs That Capture Attention",
      contentBoxDescription: "Our graphic design services encompass custom illustrations, print materials, and digital assets, tailored to your brand’s needs.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Graphic Design Services",
  featureServices: graphicDesignServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use industry-standard tools to produce high-quality graphic designs that make your brand stand out.",
  technologiesBoxes: [
    {
      heading: "Graphic Design Tools",
      services: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW"]
    },
  ]
};
export const logoBrandingPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Logo & Branding Services to Define Your Identity",
  heroSectionDescription: "Build a strong, recognizable brand with our logo and branding services. At Sigma 6 Digital, we create brand identities that reflect your values and resonate with your audience.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Crafting Distinctive Brand Identities",
      contentBoxDescription: "Our logo and branding services help you establish a strong visual identity, creating a lasting impression with your audience.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Logo & Branding Services",
  featureServices: logoBrandingServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We utilize top design tools to create memorable logos and cohesive branding materials.",
  technologiesBoxes: [
    {
      heading: "Branding Tools",
      services: ["Adobe Illustrator", "Canva", "Figma"]
    },
  ]
};
export const uiUxDesignPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Intuitive UI/UX Design for Seamless Experiences",
  heroSectionDescription: "Deliver a smooth, enjoyable user experience with our UI/UX design services. At Sigma 6 Digital, we create intuitive interfaces that engage users and enhance usability.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Designing for User Satisfaction",
      contentBoxDescription: "Our UI/UX services cover everything from user research to wireframing and prototyping, ensuring a design that delights users.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our UI/UX Design Services",
  featureServices: uiUxDesignServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We utilize advanced design tools to create effective, user-centered interfaces.",
  technologiesBoxes: [
    {
      heading: "UI/UX Design Tools",
      services: ["Figma", "Sketch", "Adobe XD"]
    },
  ]
};
export const motionGraphicsPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Captivating Motion Graphics for Your Brand",
  heroSectionDescription: "Enhance your storytelling with motion graphics that captivate. At Sigma 6 Digital, we produce visually compelling animations that communicate your brand’s message effectively.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Bring Your Message to Life",
      contentBoxDescription: "Our motion graphics services include explainer videos, social media animations, and more, helping you connect with your audience through engaging visuals.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Motion Graphics Services",
  featureServices: motionGraphicsServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use top animation tools to create professional motion graphics tailored to your needs.",
  technologiesBoxes: [
    {
      heading: "Animation Tools",
      services: ["Adobe After Effects", "Blender", "Cinema 4D"]
    },
  ]
};
export const productDesignPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Innovative Product Design for Market Success",
  heroSectionDescription: "Transform your ideas into tangible products with our product design services. At Sigma 6 Digital, we provide end-to-end design solutions that meet both functional and aesthetic goals.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Designing Products That Stand Out",
      contentBoxDescription: "Our product design services cover concept development, 3D modeling, and prototyping, ensuring your product makes a lasting impression in the market.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Product Design Services",
  featureServices: productDesignServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use advanced design tools to create accurate, detailed prototypes and final designs.",
  technologiesBoxes: [
    {
      heading: "Product Design Tools",
      services: ["SolidWorks", "AutoCAD", "Fusion 360"]
    },
  ]
};
export const developmentPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Expert Development Services for Digital Growth",
  heroSectionDescription: "At Sigma 6 Digital, we specialise in delivering robust, scalable, and innovative digital solutions. Our development services encompass everything from web and app development to tailored CRM and e-commerce solutions.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Bringing Your Vision to Life",
      contentBoxDescription: "Our development services cover a wide range of platforms and technologies, ensuring your digital presence is both impactful and scalable. We build with your growth in mind, so your site or app stays strong as your needs evolve. Plus, we focus on making everything easy to use and reliable from day one.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Development Services",
  featureServices: developmentServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We leverage industry-leading technologies and frameworks to deliver reliable and high-performance solutions.",
  technologiesBoxes: [
    {
      heading: "Development Frameworks & Tools",
      services: ["React", "Angular", "Node.js", "Python", "Ruby on Rails"],
    },
  ],
};
export const itSolutionsPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "IT Solutions to Empower Your Business",
  heroSectionDescription: "At Sigma 6 Digital, our IT solutions are designed to support your business goals, from secure data management to seamless network performance.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Reliable IT Solutions for Every Challenge",
      contentBoxDescription: "Our team delivers tailored IT solutions, including network management, cloud integration, and data security, to ensure your business stays connected, secure, and efficient. With our expertise, we keep you ahead of tech challenges and ready for the future.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our IT Solutions Services",
  featureServices: itSolutionsServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We leverage top-tier IT tools and software to deliver reliable, high-performance solutions for our clients.",
  technologiesBoxes: [
    {
      heading: "Core IT Tools & Platforms",
      services: ["Cisco", "AWS", "Azure", "VMware", "Fortinet"],
    },
  ],
};
export const aiAutomationPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "AI & Automation Solutions for Smarter Business",
  heroSectionDescription: "At Sigma 6 Digital, we harness the power of AI and automation to streamline operations, unlock insights, and drive innovation for your business.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Driving Innovation with AI and Automation",
      contentBoxDescription: "Our AI & Automation services range from machine learning models to NLP solutions, enabling your business to make smarter decisions and automate complex tasks. With these cutting-edge solutions, you can reduce manual effort, increase accuracy, and gain insights that give you a competitive edge.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our AI & Automation Services",
  featureServices: aiAutomationServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use state-of-the-art AI frameworks and tools to deliver robust, scalable solutions tailored to your needs.",
  technologiesBoxes: [
    {
      heading: "AI & Automation Platforms",
      services: ["TensorFlow", "PyTorch", "OpenAI", "Google Cloud AI", "AWS Machine Learning"],
    },
  ],
};
export const maintenanceSupportPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Comprehensive Maintenance & Support Services",
  heroSectionDescription: "At Sigma 6 Digital, we offer full-spectrum maintenance and support to keep your systems stable, secure, and performing at their best.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Ensuring Stability and Security",
      contentBoxDescription: "Our maintenance and support services cover everything from regular software updates to emergency bug fixes, data recovery, and security patching. With our proactive approach, we help prevent issues before they arise and keep your business running smoothly.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Maintenance & Support Services",
  featureServices: maintenanceSupportServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We utilise the latest tools and technologies to provide reliable maintenance and support for diverse software environments.",
  technologiesBoxes: [
    {
      heading: "Maintenance & Support Tools",
      services: ["JIRA", "GitLab", "Nagios", "AWS Backup", "Splunk"],
    },
  ],
};
export const digitalMarketingPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Effective Digital Marketing Solutions for Your Brand",
  heroSectionDescription: "At Sigma 6 Digital, we provide comprehensive digital marketing services to increase your brand's reach, engage your audience, and drive measurable results.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Driving Growth Through Digital Marketing",
      contentBoxDescription: "Our digital marketing services cover every channel—from SEO and social media to PPC and email marketing. We’re here to build a strategy that connects with your audience and aligns with your business goals. With a results-driven approach, we help your brand stand out in the digital landscape.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Digital Marketing Services",
  featureServices: digitalMarketingServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use advanced tools and platforms to deliver data-driven digital marketing strategies and optimise performance.",
  technologiesBoxes: [
    {
      heading: "Digital Marketing Tools",
      services: ["Google Analytics", "SEMrush", "Hootsuite", "Mailchimp", "Ahrefs"],
    },
  ],
};
export const creativeDesignPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Creative Design Solutions for Unique Brand Identity",
  heroSectionDescription: "At Sigma 6 Digital, our creative design services enhance your brand’s visual presence, from logo design to full product development.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Crafting Designs That Speak",
      contentBoxDescription: "Our creative design services cover everything from logo and branding to UI/UX and motion graphics, helping your brand make a lasting impression. With our expertise, we transform ideas into visually engaging experiences that connect with your audience and elevate your brand.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Creative Design Services",
  featureServices: creativeDesignServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use industry-leading design tools and software to deliver polished and professional creative solutions.",
  technologiesBoxes: [
    {
      heading: "Creative Design Tools",
      services: ["Adobe Photoshop", "Illustrator", "Figma", "After Effects", "Sketch"],
    },
  ],
};
export const educationIndustryPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Innovative Digital Solutions for Education",
  heroSectionDescription: "At Sigma 6 Digital, we create digital solutions that enhance learning experiences, empower educators, and streamline administrative processes for educational institutions.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Empowering Education with Technology",
      contentBoxDescription: "We offer a range of services tailored for the education sector, from eLearning platforms to student portals, designed to improve engagement, accessibility, and administration. Our solutions help educational institutions stay ahead in the digital age.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Education Industry Services",
  featureServices: educationIndustryServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We leverage cutting-edge technology and platforms to build scalable, secure, and user-friendly solutions for the education industry.",
  technologiesBoxes: [
    {
      heading: "Key Technologies",
      services: ["React", "Node.js", "WordPress", "Moodle", "AWS"],
    },
  ],
};
export const legalServicesIndustryPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Transforming Legal Practices with Technology",
  heroSectionDescription: "We provide digital solutions for law firms that streamline case management, enhance client communication, and ensure regulatory compliance. Our services help legal professionals focus on what matters most.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Elevating Legal Services Through Innovation",
      contentBoxDescription: "From custom case management systems to secure client portals, our services are designed to improve efficiency, reduce administrative burden, and ensure compliance in the legal industry.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Legal Services Industry Services",
  featureServices: legalServicesIndustryServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We utilize robust technologies to create secure, scalable, and compliant solutions for the legal industry.",
  technologiesBoxes: [
    {
      heading: "Legal Technology Tools",
      services: ["Python", "Ruby on Rails", "SQL", "AWS", "Django"],
    },
  ],
};
export const technologyIndustryPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Innovating the Future with Technology",
  heroSectionDescription: "We offer cutting-edge technology solutions designed to help businesses scale, automate, and integrate AI, machine learning, and cloud systems. Empowering the technology industry with innovative tools and services.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Transforming Business with Technology",
      contentBoxDescription: "We create custom software solutions, from AI and machine learning applications to cloud and blockchain platforms, enabling businesses to leverage technology for competitive advantage.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Technology Industry Services",
  featureServices: technologyIndustryServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We are experts in a wide range of technologies that allow us to build future-proof solutions for businesses across industries.",
  technologiesBoxes: [
    {
      heading: "Core Technologies",
      services: ["Java", "Spring Boot", "Node.js", "Docker", "Kubernetes", "AWS", "Blockchain", "TensorFlow"],
    },
  ],
};
export const healthcareIndustryPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Digital Solutions for Healthcare Excellence",
  heroSectionDescription: "Our healthcare solutions are designed to improve patient care, enhance operational efficiency, and ensure compliance. We provide everything from telemedicine platforms to patient portal solutions.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Advancing Healthcare with Technology",
      contentBoxDescription: "We help healthcare providers offer better care through telemedicine solutions, mobile health apps, and secure patient data management systems, enhancing both patient experience and operational efficiency.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Healthcare Industry Services",
  featureServices: healthcareIndustryServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "Our healthcare solutions are powered by secure, HIPAA-compliant technologies that ensure patient privacy while delivering seamless digital experiences.",
  technologiesBoxes: [
    {
      heading: "Healthcare Tech Stack",
      services: ["JavaScript", "React", "FHIR", "Node.js", "AWS", "HIPAA Compliance Tools"],
    },
  ],
};
export const realEstateIndustryPageContent: WebDevelopmentPageContent = {
  heroSectionHeading: "Empowering Real Estate with Technology",
  heroSectionDescription: "We create digital solutions for the real estate industry that streamline property management, enhance buyer experiences, and optimize client relations.",
  heroSectionImage: webdevelopmentService,
  contentBoxesContent: [
    {
      contentBoxheading: "Digital Solutions for Modern Real Estate",
      contentBoxDescription: "From custom property management software to virtual property tours and CRM systems, our solutions enable real estate professionals to stay competitive and provide top-notch services to clients.",
      contentBoxImage: aiSolutionsImg,
    },
  ],
  servicesHeading: "Our Real Estate Industry Services",
  featureServices: realEstateIndustryServices,
  technologiesHeading: "Technologies We Use",
  technologiesDescription: "We use the latest technologies to build secure, scalable, and innovative solutions for the real estate market.",
  technologiesBoxes: [
    {
      heading: "Real Estate Tech Tools",
      services: ["React", "Node.js", "MongoDB", "WordPress", "AWS", "Mapbox"],
    },
  ],
};
