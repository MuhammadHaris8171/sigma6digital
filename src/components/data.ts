// Define the interface for a feature.
export interface Feature {
  src: string; // Image source for the feature.
}

// Define the interface for a service.
export interface Service {
  name: string;       // Name of the service.
  imgsrc: string;     // Image source for the service.
  heading: string;    // Heading/title of the service.
  description: string; // Description of the service.
  button: string;     // Button text for the service.
}

// Define the interface for an industry.
export interface IndustryData {
  heading: string;    // Industry name.
  description: string; // Description of the industry.
  point_1: string;    // First key point related to the industry.
  point_2: string;    // Second key point related to the industry.
}

// Sample data for features.
export const features: Feature[] = [
  { src: "/src/assets/images/feature_logo_delete.webp" },
  { src: "/src/assets/images/feature_logo_delete.webp" },
  { src: "/src/assets/images/feature_logo_delete.webp" },
  { src: "/src/assets/images/feature_logo_delete.webp" },
  { src: "/src/assets/images/feature_logo_delete.webp" },
  { src: "/src/assets/images/feature_logo_delete.webp" },
  { src: "/src/assets/images/feature_logo_delete.webp" },
  { src: "/src/assets/images/feature_logo_delete.webp" },
  { src: "/src/assets/images/feature_logo_delete.webp" },
  { src: "/src/assets/images/feature_logo_delete.webp" },
];

// Sample data for services.
export const services: Service[] = [
  {
    name: "Web Development",
    imgsrc: "/src/assets/images/web-development.webp",
    heading: "Building High-Performance Websites",
    description: "We create visually appealing, high-performing, and user-friendly websites that drive engagement and deliver seamless experiences across all devices.",
    button: "Discover More",
  },
  {
    name: "App Development",
    imgsrc: "/src/assets/images/Mobile-App-Development.webp",
    heading: "Bringing Ideas to Life with Apps",
    description: "Our app development services focus on creating robust mobile and web applications that enhance user experience and meet your business goals.",
    button: "Explore Our Apps",
  },
  {
    name: "AI Solutions",
    imgsrc: "/src/assets/images/AI-Solutions.webp",
    heading: "Innovating with Intelligent AI",
    description: "We deliver advanced AI solutions that optimize processes, enhance decision-making, and accelerate innovation across various industries.",
    button: "Learn About AI Solutions",
  },
  {
    name: "IT Solutions",
    imgsrc: "/src/assets/images/it-solutions.webp",
    heading: "Custom Solutions for Your Needs",
    description: "Our IT solutions are expertly designed to meet your unique and specific requirements, helping you streamline operations and drive sustainable innovation.",
    button: "See IT Solutions",
  },
  {
    name: "Maintenance",
    imgsrc: "/src/assets/images/web-development.webp",
    heading: "Ensuring Smooth Operations for Your Business",
    description: "We provide ongoing maintenance and support services to keep your systems running efficiently and securely, allowing you to focus on your core business activities.",
    button: "Get Maintenance Support",
  },
];

// Sample data for industries.
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
