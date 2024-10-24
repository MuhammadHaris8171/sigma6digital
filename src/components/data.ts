export interface Feature {
  src: string;
}

export interface Service {
  name: string;
  imgsrc: string;
  heading: string;
  description: string;
  button: string;
}

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
