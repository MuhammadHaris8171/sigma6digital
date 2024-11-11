import styles from '../styles/ContentBox.module.css'

interface ContentBoxProps {
  contentDirection: 'left' | 'right';
}

const ContentBox: React.FC<ContentBoxProps> = ({ contentDirection }) => {
  const isLeft = contentDirection === 'left';

  return (
    <div className={`${styles.contentBoxContainer}`}>
      <div className="container">
        <div className="row">
          {/* Conditionally apply classes to switch order */}
          <div className={`col-md-6 d-flex align-items-center ${isLeft ? '' : `order-md-2 ${styles.contentLast}`}`}>
            <div className={`${styles.ContentBox}`}>
              <h3 className={`${styles.contentBoxHeading}`}>
                Let’s Build Something Amazing Together!
              </h3>
              <p className={`${styles.contentBoxDescription} pt-2`}>
                We don’t just offer services—we’re here to bring your boldest ideas to life.
                Whether you’re dreaming of a stunning website, a game-changing app, or a data-driven
                AI solution, our team at Sigma 6 Digital is dedicated to creating results that truly make a
                difference. With us, it’s not just about ticking boxes; it’s about building digital experiences
                that fuel growth and make an impact. Ready to turn vision into reality? Let’s start building
                something great together.
              </p>
            </div>
          </div>
          <div className={`col-md-6 ${isLeft ? '' : `order-md-1 ${styles.imageFirst}`}`}>
            <div className={`${styles.contentBoxImageBox}`}>
              <img
                src="/src/assets/images/AI-Solutions.webp"
                alt="Sigma 6 Digital"
                className={`${styles.contentBoxImage}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBox
