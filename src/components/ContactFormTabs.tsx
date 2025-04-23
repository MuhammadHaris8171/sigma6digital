import { useState } from 'react';
import styles from '../styles/ContactFormTabs.module.css';
import { formServices } from './data';
import Swal from 'sweetalert2';
import { BsSendFill } from 'react-icons/bs';

interface ContactFormTabsProps {
  language: "en" | "ar";
}
interface FormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  services: string[];
  message?: string;
}

interface Errors {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  services?: string;
  projectType?: string;  
}

function ContactFormTabs({ language }: ContactFormTabsProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentTab, setCurrentTab] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [errors, setErrors] = useState<Errors & { services?: string; projectType?: string }>({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        services: '',
        projectType: '',
    });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: '',
    services: [],
    message: '',
  });

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName === 'Other' ? (language === "ar" ? "أخرى" : "Other") : serviceName);
    setCurrentTab((prevState) => (prevState === 1 ? 2 : 1));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData) => {
      const updatedServices = e.target.checked
        ? [...prevData.services, value]
        : prevData.services.filter((service) => service !== value);
      return { ...prevData, services: updatedServices };
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, projectType: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { name, companyName, email, phone, projectType, services, message } = formData;

  const newErrors: Errors = {
    name: !name ? 'Name is required' : '',
    companyName: !companyName ? 'Company Name is required' : '',
    email: !email ? 'Email is required' : '',
    phone: !phone ? 'Phone is required' : '',
  };

  if (services.length === 0) {
    newErrors.services = 'At least one service must be selected';
  } else {
    delete newErrors.services;
  }

  if (!projectType) {
    newErrors.projectType = 'Please select a project type (New or Upgrade)';
  } else {
    delete newErrors.projectType;
  }

  setErrors(newErrors);

  if (Object.values(newErrors).some((error) => error)) return;

  const data = {
    name,
    companyName,
    email,
    phone,
    projectType,
    services: services.join(', '),
    selectedService,
    message,
  };

  setIsSubmitting(true);
  try {
    await fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(data),
    });
    console.log("Sending this data:", data);

    await fetch("https://localhost/sendMail.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully!',
      icon: 'success',
    });
    setFormData({
      name: '',
      companyName: '',
      email: '',
      phone: '',
      projectType: '',
      services: [],
      message: '',
    });
    setSelectedService('');
    setCurrentTab(1);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to send your message. Please try again!',
    });
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`${styles.contactForm} position-relative ${
          currentTab === 2 ? styles.showSecond : ''
        }`}
      >
        <div className={`${styles.contactFomFirstTab}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className={`${styles.contactFormHeading} mb-2`}>
            {language === "ar" ? "اختر الخدمة المفضلة لديك" : "Select Your Preferred Service"}
            </h4>
            <p className={`${styles.contactPageIndexing} mb-2`}>
              <span>1</span> {language === "ar" ? "من 2" : "of 2"}
            </p>
          </div>
          <div className={`d-flex flex-wrap justify-content-center row-gap-5 column-gap-5 gap-sm-4 py-5 py-lg-4`}>
            {formServices.map((item, index) => (
              <div
                className={`${styles.contactServiceBox}`}
                key={index}
                onClick={() => handleServiceClick(item.heading[language as "en" | "ar"])}

              >
                <p className={`${styles.contactServiceName} mb-0`}>{item.heading[language]}</p>
              </div>
            ))}
            <div
              className={`${styles.contactServiceBox}`}
              onClick={() => handleServiceClick('Other')}
            >
              <p className={`${styles.contactServiceName} mb-0`}>{language === "ar" ? "أخرى" : "Other"}</p>
            </div>
          </div>
        </div>

        <div className={`${styles.contactFomSecondTab}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className={`${styles.contactFormHeading} mb-2`}>
              {selectedService || 'Sigma 6 Digital'}
            </h4>
            <p className={`${styles.contactPageIndexing} mb-2`}>
              <span>2</span> of 2
            </p>
          </div>
          <div className={`${styles.subServices} pt-4 ${formServices.some(item => item.heading[language] === selectedService) ? '' : 'd-none'}`}>
            <h5 className={`${styles.contactFormSubHeading}`}>{language === "ar" ? "اختر خدمتك" : "Choose Your Service"}</h5>
            <div className={`${styles.subServicesCheckBoxes} pt-3 pt-md-2 mb-4 mb-md-3`}>
                <div className=' d-flex flex-wrap row-gap-2 column-gap-4'>
                    {formServices
                        .filter(item => item.heading[language] === selectedService) 
                        .map((item, index) => (
                            item.service[language].map((subService, subIndex) => (
                                <div className={`${styles.subServiceCheckBox}`} key={`${index}-${subIndex}`}>
                                <label className="d-flex align-items-center">
                                    <input
                                    type="checkbox"
                                    value={subService}
                                    onChange={handleCheckboxChange}
                                    />
                                    <span>{subService}</span>
                                </label>
                                </div>
                            ))
                        ))
                    }
                    <div className={`${styles.subServiceCheckBox}`}>
                        <label className="d-flex align-items-center">
                            <input
                            type="checkbox"
                            value="other"
                            onChange={handleCheckboxChange}
                            />
                            <span>{language === "ar" ? "أخرى" : "Other"}</span>
                        </label>
                    </div>
                </div>
                <div className={`${styles.errorText}`}>
                    {errors.services && <p>{errors.services}</p>}
                </div>
            </div>


            <p className={`${styles.radioQuestionHeading} mb-0`}>
  {language === "ar" ? "هل هذا مشروع جديد أم ترقية لمشروع موجود؟" : "Is this a new project or an upgrade to an existing one?"}
</p>
<label className="d-flex align-items-center">
  <input type="radio" name="projectType" value="new" onChange={handleRadioChange} />
  <span>{language === "ar" ? "جديد" : "New"}</span>
</label>
<label className="d-flex align-items-center">
  <input type="radio" name="projectType" value="upgrade" onChange={handleRadioChange} />
  <span>{language === "ar" ? "ترقية" : "Upgrade"}</span>
</label>


              </div>
            </div>
            <div className={`${styles.errorText}`}>
                {errors.projectType && <p>{errors.projectType}</p>}
            </div>
          </div>

          <div className={`${styles.clientInformation} pt-4`}>
            <h5 className={`${styles.contactFormSubHeading}`}>{language === "en" 
            ? "Personal Information" : "معلومات شخصية"
          }</h5>
            <div
              className={`${styles.inputTypeBoxes} d-flex flex-wrap row-gap-2 column-gap-4 pt-2`}
            >
              <div className={`${styles.inputTypeBox} w-100`}>
                <div className={`${styles.inputBox}`}>
                    <div className={`d-flex ${errors.phone && "mb-1"}`}>
                        <label htmlFor="name" className={`${styles.inputLabel}`}>
                        {language === "ar" ? "الاسم" : "Name"}
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder={language === "ar" ? "الاسم" : "Name"}
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`${styles.inputElement}`}
                        />
                    </div>
                    {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                </div>
                <div className={`${styles.inputBox}`}>
                    <div className={`d-flex ${errors.phone && "mb-1"}`}>
                        <label htmlFor="companyName" className={`${styles.inputLabel}`}>
                        {language === "ar" ? "اسم الشركة" : "Company Name"}
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            placeholder={language === "ar" ? "اسم الشركة" : "Company Name"}
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className={`${styles.inputElement}`}
                        />
                    </div>
                    {errors.companyName && <p className={styles.errorText}>{errors.companyName}</p>}
                </div>
                <div className={`${styles.inputBox}`}>
                    <div className={`d-flex ${errors.phone && "mb-1"}`}>
                        <label htmlFor="email" className={`${styles.inputLabel}`}>
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={language === "ar" ? "البريد الإلكتروني" : "Email"}
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`${styles.inputElement}`}
                        />
                    </div>
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                </div>
                <div className={`${styles.inputBox}`}>
                    <div className={`d-flex ${errors.phone && "mb-1"}`}>
                        <label htmlFor="phone" className={`${styles.inputLabel}`}>
                        {language === "ar" ? "رقم الهاتف" : "Phone"}
                        </label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder={language === "ar" ? "رقم الهاتف" : "Phone"}
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`${styles.inputElement}`}
                        />
                    </div>
                    {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
                </div>
                <div className={`${styles.inputBox}`}>
                  <div className='d-flex'>
                    <label htmlFor="message" className={`${styles.inputLabel}`}>
                    {language === "ar" ? "الرسالة" : "Message"}
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      onChange={handleInputChange}
                      className={`${styles.inputElement}`}
                      placeholder={language === "ar" ? "الرسالة" : "Message"}
                      value={formData.message}
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 d-flex justify-content-end gap-2">
            <button
              className={`btn ${styles.formButton}`}
              type="button"
              onClick={() => setCurrentTab(1)}
            >
              {language === "ar" ? "خلف" : "Back"}
            </button>
            <button className={`btn ${styles.formButton}`} type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className={styles.spinner}></div>
              ) : (
                <>
                   {language === "ar" ? "إرسال الرسالة" : "Send a Message"} <BsSendFill className="ms-2" />
                </>
              )}
            </button>
          </div>
        
    </form>
  );
}

export default ContactFormTabs;
