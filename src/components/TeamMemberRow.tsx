import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/TeamMemberRow.module.css";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  Designation: string;
  imageSrc: string;
}

interface TeamMemberRowProps {
  teamDetail: TeamMember[];
}

const TeamMemberRow: React.FC<TeamMemberRowProps> = ({ teamDetail }) => {
  const teamRowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (teamRowRef.current) {
        // Pin the teamRowRef
        ScrollTrigger.create({
          trigger: teamRowRef.current,
          start: "top top",
          end: "bottom 30%",
          pin: true,
          pinSpacing: true,
          scrub: true,
        });

        const images = teamRowRef.current.querySelectorAll("img");

        images.forEach((img) => {
          if (img.classList.contains(styles.imageBottomZero)) {
            gsap.to(img, {
              bottom: "0px",
              scrollTrigger: {
                trigger: teamRowRef.current,
                start: "top top",
                end: "bottom 50%",
                scrub: true,
              },
            });
          } else if (img.classList.contains(styles.imageTopZero)) {
            gsap.to(img, {
              bottom: "auto",
              scrollTrigger: {
                trigger: teamRowRef.current,
                start: "top top",
                end: "bottom 50%",
                scrub: true,
              },
            });
          }
        });
      }
    }, teamRowRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={`col-12 ${styles.teamRow}`} ref={teamRowRef}>
      <div className="row">
        {teamDetail.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className={`${styles.teamBox} position-relative`}>
              <img
                src={item.imageSrc ? item.imageSrc : "/src/assets/images/default.webp"}
                alt={`${item.name} - ${item.Designation}`}
                className={`${styles.teamImage} ${
                  index % 2 !== 0 ? styles.imageBottomZero : styles.imageTopZero
                } position-absolute`}
                loading="lazy"
              />
              <h4 className={`${styles.teamName} ${styles.teamDetail}`}>
                {index % 2 === 0 ? item.name : item.Designation}
              </h4>
              <p className={`${styles.teamDesignation} ${styles.teamDetail}`}>
                {index % 2 === 0 ? item.Designation : item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberRow;
