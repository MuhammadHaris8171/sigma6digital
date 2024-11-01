import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamMemberRow from "./TeamMemberRow";
import styles from "../styles/Team.module.css"
import rameez_img from "../assets/images/rameez-img.webp"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  Designation: string;
  imageSrc: string;
}

const Team: React.FC = () => {
  const TeamDetailOne: TeamMember[] = [
    { name: "Muhammad Rameez", Designation: "Sr. Full-Stack Developer", imageSrc: rameez_img },
    { name: "Muhammad Rameez", Designation: "Sr. Full-Stack Developer", imageSrc: rameez_img },
    { name: "Muhammad Rameez", Designation: "Sr. Full-Stack Developer", imageSrc: rameez_img },
  ];
  
  const TeamDetailTwo: TeamMember[] = [
    { name: "Muhammad Rameez", Designation: "Sr. Full-Stack Developer", imageSrc: rameez_img },
    { name: "Muhammad Rameez", Designation: "Sr. Full-Stack Developer", imageSrc: rameez_img },
    { name: "Muhammad Rameez", Designation: "Sr. Full-Stack Developer", imageSrc: rameez_img },
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className={`${styles.teamHeading}`}>The Brilliant Minds<br />Behind Our Success</h2>
          <TeamMemberRow teamDetail={TeamDetailOne} />
          <TeamMemberRow teamDetail={TeamDetailTwo} />
        </div>
      </div>
    </div>
  );
};

export default Team;
