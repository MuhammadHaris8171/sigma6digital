import { useState } from 'react';
import { BsSendFill } from 'react-icons/bs';
import styles from '../styles/contactForm.module.css';
import Swal from 'sweetalert2'

function ContactForm(): JSX.Element {
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

  const formDataToSend = {
    ...formData,
    access_key: "9a0f304b-6277-4a03-8ca4-802ec2634759"
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formDataToSend)
    });

    const result = await res.json();
    if (result.success) {
      Swal.fire({
        title: "Good job!",
        text: "Your message has been sent successfully!",
        icon: "success"
      });

      await fetch("https://script.google.com/macros/s/AKfycbzCXrjZRsoNX7Lh-wayh7rh7ru5cZJIGXoRdO2PNeUwozhD0ZjLtFrqjOZTlmm_jaZamg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: 'no-cors',
        body: JSON.stringify(formData)
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!"
    });
    console.error("Error:", error);
  }
};


  return (
    <div className={styles.contactFormBox}>
      <form onSubmit={onSubmit} className={styles.contactForm}>
        <div className="container px-0 ps-lg-5 py-5 py-lg-0">
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
              <button type="submit" className={styles.contactFormSubmitBtn}>
                Send a Message <BsSendFill className='ms-2' />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
