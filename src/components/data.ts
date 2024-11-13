import featureLogoDelete from '../assets/images/feature_logo_delete.webp';
import webDevelopmentImg from '../assets/images/web-development.webp';
import appDevelopmentImg from '../assets/images/Mobile-App-Development.webp';
import aiSolutionsImg from '../assets/images/AI-Solutions.webp';
import itSolutionsImg from '../assets/images/it-solutions.webp';
import webdevelopmentService from '../assets/images/main-service-delete.webp';

export interface DevelopmentProcess {
  heading: string;
  description: string;
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



export const developmentProcess: DevelopmentProcess[] = [
  {
    heading: "Consultation",
    description:
      "We begin with an initial consultation to understand your ideas and objectives. This conversation helps us get a clear picture of your vision and sets the foundation for the entire project.",
  },
  {
    heading: "Requirement Gathering",
    description:
      "In this step, we dive deeper into the specifics of what your project needs. We gather detailed requirements to ensure that we understand every aspect and feature you want in your final product.",
  },
  {
    heading: "Planning & Strategy",
    description:
      "After gathering requirements, we move into planning. Here, we outline a strategy that maps out each phase of development, setting clear timelines and goals to keep everything on track.",
  },
  {
    heading: "Development & Testing",
    description:
      "With a solid plan in place, our development team gets to work. We start building the product, coding each feature carefully, and performing initial testing to ensure quality at every step.",
  },
  {
    heading: "Quality Assurance",
    description:
      "Before final delivery, our quality assurance team rigorously tests the product to ensure it meets our high standards. We identify and resolve any issues so that you receive a polished, ready-to-use solution.",
  },
  {
    heading: "Final Delivery & Support",
    description:
      "Once the product has passed all tests, we deliver it to you, fully prepared for launch. Our commitment doesn’t end here; we provide post-delivery support to assist with any queries or adjustments as you get started.",
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
    name: "Web Development",
    imgsrc: webDevelopmentImg,
    heading: "Building High-Performance Websites",
    description: "We create visually appealing, high-performing, and user-friendly websites that drive engagement and deliver seamless experiences across all devices.",
    button: "Discover More",
    buttonSrc: "Website Development",
  },
  {
    name: "App Development",
    imgsrc: appDevelopmentImg,
    heading: "Bringing Ideas to Life with Apps",
    description: "Our app development services focus on creating robust mobile and web applications that enhance user experience and meet your business goals.",
    button: "Explore Our Apps",
    buttonSrc: "Website Development",
  },
  {
    name: "AI Solutions",
    imgsrc: aiSolutionsImg,
    heading: "Innovating with Intelligent AI",
    description: "We deliver advanced AI solutions that optimize processes, enhance decision-making, and accelerate innovation across various industries.",
    button: "Learn About AI Solutions",
    buttonSrc: "Website Development",
  },
  {
    name: "IT Solutions",
    imgsrc: itSolutionsImg,
    heading: "Custom Solutions for Your Needs",
    description: "Our IT solutions are expertly designed to meet your unique and specific requirements, helping you streamline operations and drive sustainable innovation.",
    button: "See IT Solutions",
    buttonSrc: "Website Development",
  },
  {
    name: "Maintenance",
    imgsrc: webDevelopmentImg,
    heading: "Ensuring Smooth Operations for Your Business",
    description: "We provide ongoing maintenance and support services to keep your systems running efficiently and securely, allowing you to focus on your core business activities.",
    button: "Get Maintenance Support",
    buttonSrc: "Website Development",
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

