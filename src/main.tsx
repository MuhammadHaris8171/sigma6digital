import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './pages/About/About';
import ServicesPage from './pages/Services/ServicesPage';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import MainService from './pages/MainService/MainService';
import { maintenanceSupportPageContentAr,maintenanceSupportPageContentEn,developmentPageContentEn,cloudSolutionsPageContentEn,cloudSolutionsPageContentAr,developmentPageContentAr,appDevelopmentPageContentAr,appDevelopmentPageContentEn, crmDevelopmentPageContentAr,crmDevelopmentPageContentEn, digitalMarketingPageContentAr,digitalMarketingPageContentEn,eCommerceDevelopmentPageContentEn,eCommerceDevelopmentPageContentAr,itConsultingPageContentEn,itConsultingPageContentAr,networkManagementPageContentAr,networkManagementPageContentEn, webDevelopmentPageContentEn,
  webDevelopmentPageContentAr, 
  dataSecurityPageContentAr,
  dataSecurityPageContentEn,
  virtualizationPageContentAr,
  virtualizationPageContentEn,
  educationIndustryPageContentAr,
  educationIndustryPageContentEn,
  legalServicesIndustryPageContentAr,
  legalServicesIndustryPageContentEn,
  technologyIndustryPageContentAr,
  technologyIndustryPageContentEn,
  healthcareIndustryPageContentAr,
  healthcareIndustryPageContentEn,
  realEstateIndustryPageContentAr,
  realEstateIndustryPageContentEn,
  aiAutomationPageContentAr,
  aiAutomationPageContentEn,
  machineLearningPageContentAr,
  machineLearningPageContentEn,
  itSolutionsPageContentAr,
  itSolutionsPageContentEn,
  creativeDesignPageContentAr,
  creativeDesignPageContentEn,
  softwareMaintenancePageContentAr,
  softwareMaintenancePageContentEn,
  bugFixingPageContentAr,
  bugFixingPageContentEn,
  securityPatchingPageContentAr,
  securityPatchingPageContentEn,
  performanceOptimizationPageContentAr,
  performanceOptimizationPageContentEn,
  dataBackupPageContentAr,
  dataBackupPageContentEn,
  productDesignPageContentAr,
  productDesignPageContentEn,
  motionGraphicsPageContentAr,
  motionGraphicsPageContentEn,
  uiUxDesignPageContentAr,
  uiUxDesignPageContentEn,
  logoBrandingPageContentAr,
  logoBrandingPageContentEn,
  graphicDesignPageContentAr,
  graphicDesignPageContentEn,
  emailMarketingPageContentAr,
  emailMarketingPageContentEn,
  ppcPageContentAr,
  ppcPageContentEn,
  contentCreationPageContentAr,
  contentCreationPageContentEn,
  socialMediaMarketingPageContentAr,
  socialMediaMarketingPageContentEn,
  seoOptimizationPageContentAr,
  seoOptimizationPageContentEn,
  nlpPageContentEn,
  nlpPageContentAr,
  computerVisionPageContentAr,
  computerVisionPageContentEn,
  predictiveAnalyticsPageContentAr,
  predictiveAnalyticsPageContentEn,
  chatbotPageContentEn,
  chatbotPageContentAr} from './components/data';
import IndustriesPage from './pages/Industries/IndustriesPage';
import Notfound from './pages/404/Notfound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
      // {
      //   path: "/about-us",
      //   element: <About />,
      // },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/industries",
        element: <IndustriesPage />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/development",
        element: <MainService contentEn={developmentPageContentEn} 
      contentAr={developmentPageContentAr}  />,
      },
      {
        path: "/website-development",
        element: <MainService
        contentEn={webDevelopmentPageContentEn} 
      contentAr={webDevelopmentPageContentAr}
        />,
      },
      {
        path: "/app-development",
        element: <MainService 
        contentEn={appDevelopmentPageContentEn} 
      contentAr={appDevelopmentPageContentAr}
        />,
      },
      {
        path: "/ecommerce-development",
        element: <MainService 
        contentEn={eCommerceDevelopmentPageContentEn} 
        contentAr={eCommerceDevelopmentPageContentAr}
        />,
      },
      {
        path: "/crm-development",
        element: <MainService
        contentAr={crmDevelopmentPageContentAr}
        contentEn={crmDevelopmentPageContentEn}
        />,
      },
      {
        path: "/it-solutions",
        element: <MainService 
        contentAr={itSolutionsPageContentAr}
        contentEn={itSolutionsPageContentEn}
        />,
      },
      {
        path: "/network-management",
        element: <MainService
        contentAr={networkManagementPageContentAr}
        contentEn={networkManagementPageContentEn}
        />,
      },
      {
        path: "/cloud-solutions",
        element: <MainService
        contentAr={cloudSolutionsPageContentAr}
        contentEn={cloudSolutionsPageContentEn}
        />,
      },
      {
        path: "/data-security",
        element: <MainService
        contentAr={dataSecurityPageContentAr}
        contentEn={dataSecurityPageContentEn}
        />,
      },
      {
        path: "/it-consulting",
        element: <MainService
        contentAr={itConsultingPageContentAr}
        contentEn={itConsultingPageContentEn}
        />,
      },
      {
        path: "/virtualization",
        element: <MainService
        contentAr={virtualizationPageContentAr}
        contentEn={virtualizationPageContentEn}
        />,
      },
      {
        path: "/ai-automation",
        element: <MainService contentAr={aiAutomationPageContentAr} contentEn={aiAutomationPageContentEn} />,
      },
      {
        path: "/machine-learning",
        element: <MainService contentAr={machineLearningPageContentAr} contentEn={machineLearningPageContentEn} />,
      },
      {
        path: "/chatbot-development",
        element: <MainService contentEn={chatbotPageContentEn} contentAr={chatbotPageContentAr} />,
      },
      {
        path: "/predicitve-analytics",
        element: <MainService contentAr={predictiveAnalyticsPageContentAr} contentEn={predictiveAnalyticsPageContentEn} />,
      },
      {
        path: "/computer-vision",
        element: <MainService contentAr={computerVisionPageContentAr} contentEn={computerVisionPageContentEn} />,
      },
      {
        path: "/nlp-solutions",
        element: <MainService contentEn={nlpPageContentEn} contentAr={nlpPageContentAr} />,
      },
      {
        path: "/maintenance-support",
        element: <MainService
        contentAr={maintenanceSupportPageContentAr}
        contentEn={maintenanceSupportPageContentEn}
        />,
      },
      {
        path: "/software-maintenance",
        element: <MainService 
        contentAr={softwareMaintenancePageContentAr}
        contentEn={softwareMaintenancePageContentEn}
        />,
      },
      {
        path: "/bug-fixing",
        element: <MainService contentAr={bugFixingPageContentAr} contentEn={bugFixingPageContentEn} />,
      },
      {
        path: "/security-patching",
        element: <MainService contentAr={securityPatchingPageContentAr} contentEn={securityPatchingPageContentEn} />,
      },
      {
        path: "/performance-optimization",
        element: <MainService contentAr={performanceOptimizationPageContentAr} contentEn={performanceOptimizationPageContentEn} />,
      },
      {
        path: "/data-backup",
        element: <MainService contentAr={dataBackupPageContentAr} contentEn={dataBackupPageContentEn} />,
      },
      {
        path: "/digital-marketing",
        element: <MainService
        contentAr={digitalMarketingPageContentAr}
        contentEn={digitalMarketingPageContentEn}
        />,
      },
      {
        path: "/seo-optimization",
        element: <MainService contentAr={seoOptimizationPageContentAr} contentEn={seoOptimizationPageContentEn} />,
      },
      {
        path: "/social-media-marketing",
        element: <MainService contentAr={socialMediaMarketingPageContentAr} contentEn={socialMediaMarketingPageContentEn} />,
      },
      {
        path: "/content-creation",
        element: <MainService contentAr={contentCreationPageContentAr} contentEn={contentCreationPageContentEn} />,
      },
      {
        path: "/ppc-campaigns",
        element: <MainService contentAr={ppcPageContentAr} contentEn={ppcPageContentEn} />,
      },
      {
        path: "/email-marketing",
        element: <MainService contentAr={emailMarketingPageContentAr} contentEn={emailMarketingPageContentEn} />,
      },
      {
        path: "/creative-design",
        element: <MainService contentAr={creativeDesignPageContentAr} contentEn={creativeDesignPageContentEn} />,
      },
      {
        path: "/graphic-design",
        element: <MainService contentAr={graphicDesignPageContentAr} contentEn={graphicDesignPageContentEn} />,
      },
      {
        path: "/logo-and-branding",
        element: <MainService contentAr={logoBrandingPageContentAr} contentEn={logoBrandingPageContentEn} />,
      },
      {
        path: "/ui-ux-design",
        element: <MainService contentAr={uiUxDesignPageContentAr} contentEn={uiUxDesignPageContentEn} />,
      },
      {
        path: "/motion-graphics",
        element: <MainService contentAr={motionGraphicsPageContentAr} contentEn={motionGraphicsPageContentEn}/>,
      },
      {
        path: "/product-design",
        element: <MainService contentAr={productDesignPageContentAr} contentEn={productDesignPageContentEn}  />,
      },
      {
        path: "/education-industry",
        element: <MainService
        contentAr={educationIndustryPageContentAr}
        contentEn={educationIndustryPageContentEn}
        />,
      },
      {
        path: "/legal-industry",
        element: <MainService contentAr={legalServicesIndustryPageContentAr} contentEn={legalServicesIndustryPageContentEn} />,
      },
      {
        path: "/technology-industry",
        element: <MainService contentAr={technologyIndustryPageContentAr} contentEn={technologyIndustryPageContentEn} />,
      },
      {
        path: "/healthcare-industry",
        element: <MainService contentAr={healthcareIndustryPageContentAr} contentEn={healthcareIndustryPageContentEn} />,
      },
      {
        path: "/realestate-industry",
        element: <MainService contentAr={realEstateIndustryPageContentAr} contentEn={realEstateIndustryPageContentEn} />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
