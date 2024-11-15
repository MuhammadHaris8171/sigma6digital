import styles from '../styles/ClientMarquee.module.css';
import Marquee from 'react-fast-marquee';

interface ClientMarqueeProps {
  aboutClient: { name: string }[]; 
  direction: "left" | "right";
  speed: number;
}

const ClientMarquee: React.FC<ClientMarqueeProps> = ({ aboutClient, direction, speed }) => {
  return (
    <Marquee speed={speed} direction={direction} gradient={false} pauseOnHover={true}>
      {aboutClient.map((item, index) => (
        <div className={styles.aboutClientbox} key={index}>
          <h4 className={`${styles.aboutClientName}`}>{item.name}</h4>
        </div>
      ))}
    </Marquee>
  );
}

export default ClientMarquee;