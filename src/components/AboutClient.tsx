import styles from "../styles/AboutClient.module.css";
import logo from "../assets/images/feature_logo_delete.webp";
import ClientMarquee from "./ClientMarquee";

function AboutClient() {
    const aboutClient = [
        { src: logo },
        { src: logo },
        { src: logo },
        { src: logo },
        { src: logo },
        { src: logo },
        { src: logo },
        { src: logo },
        { src: logo },
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-xl-8">
                    <h2 className={`${styles.aboutClientHeading}`}>
                        Proud to have collaborated with these clients.
                    </h2>
                </div>
                <div className="col-12 py-5">
                    <ClientMarquee aboutClient={aboutClient} direction="left" speed={70}/>
                    <ClientMarquee aboutClient={aboutClient} direction="right" speed={70} />
                </div>
            </div>
        </div>
    );
}

export default AboutClient;
