import { useState } from 'react';
import { BsSendFill } from 'react-icons/bs';
import styles from '../styles/contactForm.module.css';
import Swal from 'sweetalert2'

function ContactForm(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: ''
    }));
  };

const onSubmit = async (event: React.FormEvent) => {
  event.preventDefault();

  const newErrors = {
    name: '',
    country: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  Object.keys(formData).forEach((field) => {
    if (!formData[field as keyof typeof formData]) {
      newErrors[field as keyof typeof newErrors] = 'This field is required.';
    }
  });

  if (Object.values(newErrors).some((error) => error)) {
    setErrors(newErrors);
    return;
  }

  setIsSubmitting(true);
  try {
    await fetch(
      import.meta.env.VITE_GOOGLE_SHEET_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(formData)
      }
    );

    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully!',
      icon: 'success'
    });

    setFormData({
      name: '',
      country: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setErrors({
      name: '',
      country: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to sent your message. Please try again!'
    });
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false); 
  }
};



  return (
    <div className={styles.contactFormBox}>
      <form onSubmit={onSubmit} className={styles.contactForm}>
        <div className="container px-0 py-5 py-lg-0">
          <div className="row">
            <div className="col-sm-6 mb-4">
              <label htmlFor="name" className={styles.contactFormLabel}>
                Name<span>*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${styles.contactFormInput} w-100`}
              />
              {errors.name && <p className={styles.errorText}>{errors.name}</p>}
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="country" className={styles.contactFormLabel}>
                Country<span>*</span>
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`${styles.contactFormInput} w-100`}
              />
              {errors.country && <p className={styles.errorText}>{errors.country}</p>}
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="email" className={styles.contactFormLabel}>
                Email<span>*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${styles.contactFormInput} w-100`}
              />
              {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="phone" className={styles.contactFormLabel}>
                Phone<span>*</span>
              </label>
              <input
                type="number"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`${styles.contactFormInput} w-100`}
              />
              {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
            </div>
            <div className="col-sm-12 mb-4">
              <label htmlFor="service" className={styles.contactFormLabel}>
                Select Service<span>*</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`${styles.contactFormInput} w-100`}
              >
                <option value="" className={styles.contactFormOption}>Select Service</option>
                <option value="web-development" className={styles.contactFormOption}>
                  Website Development
                </option>
                <option value="app-development" className={styles.contactFormOption}>
                  App Development
                </option>
                <option value="it-services" className={styles.contactFormOption}>
                  IT Services
                </option>
                <option value="ai-solutions" className={styles.contactFormOption}>
                  AI Solutions
                </option>
                <option value="maintenance-services" className={styles.contactFormOption}>
                  Maintenance Services
                </option>
                <option value="marketing-services" className={styles.contactFormOption}>
                  Marketing Services
                </option>
                <option value="designing-services" className={styles.contactFormOption}>
                  Designing Services
                </option>
                <option value="video-editing-and-animation-services" className={styles.contactFormOption}>
                   Video Editing and Animation Services
                </option>
                <option value="social-media-marketing" className={styles.contactFormOption}>
                  Social Media Management
                </option>
                <option value="digital-marketing" className={styles.contactFormOption}>
                  Digital marketing
                </option>
                <option value="other" className={styles.contactFormOption}>
                  Other
                </option>
              </select>
              {errors.service && <p className={styles.errorText}>{errors.service}</p>}
            </div>
            <div className="col-sm-12 mb-4">
              <label htmlFor="message" className={styles.contactFormLabel}>
                Message<span>*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={`${styles.contactFormInput} w-100`}
              ></textarea>
              {errors.message && <p className={styles.errorText}>{errors.message}</p>}
            </div>
            <div className="col-sm-12 mb-4">
              <button type="submit" className={styles.contactFormSubmitBtn} disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className={styles.spinner}></div> // Spinner element
                ) : (
                  <>
                    Send a Message <BsSendFill className="ms-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
