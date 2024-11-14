import styles from '../styles/AboutFold.module.css'
function AboutFold({heading, description, points}:any) {
  return (
    <>
    <div className={`container`}>
        <div className="row">
          <div className="col-lg-9 col-xl-8">
            <h2 className={`${styles.aboutHeading}`}>{heading}</h2>
            <p className={`${styles.aboutDescription}`}>{description}</p>
          </div>
          <div className="col-12 pt-4">
            <div className="row">
              { points && points.map((item:any, index:number) => (
                  <div className="col-6 col-md-4" key={index}>
                    <div className={`${styles.aboutPoints}`}>
                      <h4 className={`${styles.aboutPointsHeading}`}>{item.heading}</h4>
                      <p className={`${styles.aboutPointDescription}`}>{item.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default AboutFold