import styles from "../styles/AboutClient.module.css";
import ClientMarquee from "./ClientMarquee";
import { features } from "./data";

function AboutClient() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-xl-8">
                    <h2 className={`${styles.aboutClientHeading}`}>
                        Proud to have collaborated with these clients.
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
