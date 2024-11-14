import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About/About';
import ServicesPage from './pages/Services/ServicesPage';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import MainService from './pages/MainService/MainService';
import { aiAutomationPageContent, appDevelopmentPageContent, bugFixingPageContent, chatbotPageContent, cloudSolutionsPageContent, computerVisionPageContent, contentCreationPageContent, creativeDesignPageContent, crmDevelopmentPageContent, dataBackupPageContent, dataSecurityPageContent, developmentPageContent, digitalMarketingPageContent, eCommerceDevelopmentPageContent, emailMarketingPageContent, graphicDesignPageContent, itConsultingPageContent, itSolutionsPageContent, logoBrandingPageContent, machineLearningPageContent, maintenanceSupportPageContent, motionGraphicsPageContent, networkManagementPageContent, nlpPageContent, performanceOptimizationPageContent, ppcPageContent, predictiveAnalyticsPageContent, productDesignPageContent, securityPatchingPageContent, seoOptimizationPageContent, socialMediaMarketingPageContent, softwareMaintenancePageContent, uiUxDesignPageContent, virtualizationPageContent, webDevelopmentPageContent } from './components/data';


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
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
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
        element: <MainService content={developmentPageContent} />,
      },
      {
        path: "/website-development",
        element: <MainService content={webDevelopmentPageContent} />,
      },
      {
        path: "/app-development",
        element: <MainService content={appDevelopmentPageContent} />,
      },
      {
        path: "/ecommerce-development",
        element: <MainService content={eCommerceDevelopmentPageContent} />,
      },
      {
        path: "/crm-development",
        element: <MainService content={crmDevelopmentPageContent} />,
      },
      {
        path: "/it-solutions",
        element: <MainService content={itSolutionsPageContent} />,
      },
      {
        path: "/network-management",
        element: <MainService content={networkManagementPageContent} />,
      },
      {
        path: "/cloud-solutions",
        element: <MainService content={cloudSolutionsPageContent} />,
      },
      {
        path: "/data-security",
        element: <MainService content={dataSecurityPageContent} />,
      },
      {
        path: "/it-consulting",
        element: <MainService content={itConsultingPageContent} />,
      },
      {
        path: "/virtualization",
        element: <MainService content={virtualizationPageContent} />,
      },
      {
        path: "/ai-automation",
        element: <MainService content={aiAutomationPageContent} />,
      },
      {
        path: "/machine-learning",
        element: <MainService content={machineLearningPageContent} />,
      },
      {
        path: "/chatbot-development",
        element: <MainService content={chatbotPageContent} />,
      },
      {
        path: "/predicitve-analytics",
        element: <MainService content={predictiveAnalyticsPageContent} />,
      },
      {
        path: "/computer-vision",
        element: <MainService content={computerVisionPageContent} />,
      },
      {
        path: "/nlp-solutions",
        element: <MainService content={nlpPageContent} />,
      },
      {
        path: "/maintenance-support",
        element: <MainService content={maintenanceSupportPageContent} />,
      },
      {
        path: "/software-maintenance",
        element: <MainService content={softwareMaintenancePageContent} />,
      },
      {
        path: "/bug-fixing",
        element: <MainService content={bugFixingPageContent} />,
      },
      {
        path: "/security-patching",
        element: <MainService content={securityPatchingPageContent} />,
      },
      {
        path: "/performance-optimization",
        element: <MainService content={performanceOptimizationPageContent} />,
      },
      {
        path: "/data-backup",
        element: <MainService content={dataBackupPageContent} />,
      },
      {
        path: "/digital-marketing",
        element: <MainService content={digitalMarketingPageContent} />,
      },
      {
        path: "/seo-optimization",
        element: <MainService content={seoOptimizationPageContent} />,
      },
      {
        path: "/social-media-marketing",
        element: <MainService content={socialMediaMarketingPageContent} />,
      },
      {
        path: "/content-creation",
        element: <MainService content={contentCreationPageContent} />,
      },
      {
        path: "/ppc-campaigns",
        element: <MainService content={ppcPageContent} />,
      },
      {
        path: "/email-marketing",
        element: <MainService content={emailMarketingPageContent} />,
      },
      {
        path: "/creative-design",
        element: <MainService content={creativeDesignPageContent} />,
      },
      {
        path: "/graphic-design",
        element: <MainService content={graphicDesignPageContent} />,
      },
      {
        path: "/logo-and-branding",
        element: <MainService content={logoBrandingPageContent} />,
      },
      {
        path: "/ui-ux-design",
        element: <MainService content={uiUxDesignPageContent} />,
      },
      {
        path: "/motion-graphics",
        element: <MainService content={motionGraphicsPageContent} />,
      },
      {
        path: "/product-design",
        element: <MainService content={productDesignPageContent} />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
