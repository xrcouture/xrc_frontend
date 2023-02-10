import React from 'react'
import './contact.css'
import * as Yup from "yup";
import { Formik } from 'formik';
// import hand1 from '../../assets/hand1.png'
// import hand2 from '../../assets/hand2.png'
// import hand3 from '../../assets/hand3.png'

function Contact() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(50, "Too Long!")
      .required("Name is required"),
  
    phone: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "Phone Number should be 10digit")
    .max(10, "Phone Number should be 10digit"),
    email: Yup.string().email().required("Email is required"),
    message: Yup.string()
  });
  return (
    <div className='contact'>
        <div className='bg-contact'></div>
      <div className='row contact-row'>
      <div className='col-sm-6 more-info-container p-4'>
        <h1 className='more-info-title'>For More Information - </h1>
        <div className='more-info-subtitle mt-4'>
          <p className='more-info-sub'><b>For partnerships : </b> <span style={{fontFamily:"Clash Display Light"}}> &nbsp;partnerships@xrcoture.com</span></p>
          <p className='more-info-sub'><b>For press enquires : </b><span style={{fontFamily:"Clash Display Light"}}> &nbsp;press@xrcoture.com</span></p>
          <p className='more-info-sub'><b>For general enquires :</b><span style={{fontFamily:"Clash Display Light"}}> &nbsp;general@xrcoture.com</span></p>
        </div>
      </div>
        <div className='col-sm-6 position-relative p-0 d-flex justify-content-center'>
          <div className='contact-form position-relative p-4'>
            <h1 className='contact-title'>Contact Now</h1>
            <p className='contact-subtitle'>
            In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.
            </p>
            
            <div className='form-container'>
            <Formik
                  initialValues={{name:"", email: '', phone: '',message:"" }}
                  validationSchema={SignUpSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} className="contact-fom">
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder="Name"
                      />
                      <p className='error text-danger contact-subtitle'>{errors.name && touched.name && errors.name}</p>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                      />
                      <p className='error text-danger contact-subtitle'>{errors.email && touched.email && errors.email}</p>
                      <input
                        type="phone"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        placeholder="Phone"
                      />
                      <p className='error text-danger contact-subtitle'>{errors.phone && touched.phone && errors.phone}</p>
                      <input
                        type="text"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        placeholder="Message"
                      />
                      <p className='error text-danger contact-subtitle'>{errors.message && touched.message && errors.message}</p>
                      <button type="submit" className='footer-subscribe-button' style={{fontFamily:"Clash Display Light"}} disabled={isSubmitting}>
                        Submit Form
                      </button>
                    </form>
                  )}
                </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact