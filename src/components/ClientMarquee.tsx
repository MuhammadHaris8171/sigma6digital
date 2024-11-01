import styles from '../styles/ClientMarquee.module.css';
import Marquee from 'react-fast-marquee';

interface ClientMarqueeProps {
  aboutClient: { src: string }[]; 
  direction: "left" | "right";
  speed: number;
}

const ClientMarquee: React.FC<ClientMarqueeProps> = ({ aboutClient, direction, speed }) => {
  return (
    <Marquee speed={speed} direction={direction} gradient={false} pauseOnHover={true}>
      {aboutClient.map((img, index) => (
        <div className={styles.aboutClientbox} key={index}>
          <img src={img.src} alt="Sigma 6 Digital Client" className={styles.aboutClientImg} />
        </div>
      ))}
    </Marquee>
  );
}

export default ClientMarquee;