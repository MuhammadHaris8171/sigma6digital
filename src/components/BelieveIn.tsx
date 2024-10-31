import styles from '../styles/BelieveIn.module.css'

function BelieveIn() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h2 className={`${styles.BelieveHeading}`}>What We Stand For and Believe In.</h2>
                </div>
                <div className="col-md-12">
                    <div className="row" style={{rowGap: '1.5em'}}>
                        <div className="col-4">
                            <div className={`${styles.believeBox}`}>
                                <h3 className={`${styles.believeBoxHeading} mb-0`}>Innovating for You</h3>
                                <p className={`${styles.believeBoxDescription} mb-0`}>We’re passionate about using the latest tech to create solutions that genuinely help businesses grow and succeed.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={`${styles.believeBox}`}>
                                <h3 className={`${styles.believeBoxHeading} mb-0`}>You Come First</h3>
                                <p className={`${styles.believeBoxDescription} mb-0`}>We see our clients as partners. Your needs guide us, and we’re here to listen, collaborate, and bring your ideas to life.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={`${styles.believeBox}`}>
                                <h3 className={`${styles.believeBoxHeading} mb-0`}>Quality, Always</h3>
                                <p className={`${styles.believeBoxDescription} mb-0`}>Whether it’s building a website, developing an app, offering IT support, or creating AI solutions, we never compromise on quality.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={`${styles.believeBox}`}>
                                <h3 className={`${styles.believeBoxHeading} mb-0`}>Honesty Matters</h3>
                                <p className={`${styles.believeBoxDescription} mb-0`}>We believe in clear, open communication. You’ll always know what’s happening and why, so there are no surprises.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={`${styles.believeBox}`}>
                                <h3 className={`${styles.believeBoxHeading} mb-0`}>Never Stop Learning</h3>
                                <p className={`${styles.believeBoxDescription} mb-0`}>Tech is always changing, and so are we. We keep learning so we can bring you solutions that are not just good for today but ready for tomorrow.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={`${styles.believeBox}`}>
                                <h3 className={`${styles.believeBoxHeading} mb-0`}>Helping You Grow</h3>
                                <p className={`${styles.believeBoxDescription} mb-0`}>We’re not just about fixing problems—we’re about creating opportunities. We want to help your business reach its next big milestone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BelieveIn