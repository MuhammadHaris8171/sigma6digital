import styles from "../styles/AboutClient.module.css";
import ClientMarquee from "./ClientMarquee";
import { features } from "./data";

interface AboutClientProps {
    language: "en" | "ar";
}
const AboutClient: React.FC<AboutClientProps> = ({ language }) => {
    const translations = {
        en: {
            heading: "Proud to have collaborated with these clients."
        },
        ar: {
            heading: "فخورون بالتعاون مع هؤلاء العملاء."
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-xl-8">
                    <h2 className={`${styles.aboutClientHeading}`}>
                    {translations[language as "en" | "ar"]?.heading || translations.en.heading}
                    </h2>
                </div>
                <div className="col-12 py-5">
                    <ClientMarquee aboutClient={features} direction="left" speed={70}/>
                    <ClientMarquee aboutClient={features} direction="right" speed={70} />
                </div>
            </div>
        </div>
    );
}

export default AboutClient;
