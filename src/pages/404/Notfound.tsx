import styles from './Notfound.module.css'
import notfoundImage from "../../assets/images/404img.webp"
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <>
    <section className={`${styles.notFoundPage}`}>
        <div className="container">
            <div className="row">
                <div className="col-6 m-auto d-flex flex-column align-items-center gap-3">
                    <img src={notfoundImage} alt="Sigma 6 Digital" className={`${styles.notFoundImg}`} />
                    <h3 className={`${styles.notFoundHeading} text-center`}>Page Not Found</h3>
                    <p className={`${styles.notFoundDescription} text-center`}>Oops! The page you're looking for doesn't exist. It may have been moved, deleted, or the URL might be incorrect. Let's get you back on track! Head to our homepage or explore our latest content.</p>
                    <Link to="/" className={`text-decoration-none`}><button className={`${styles.notFoundBtn} btn`}>Home Page</button></Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Notfound