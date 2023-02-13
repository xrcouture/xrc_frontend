import React, { useState } from 'react'
import './contact.css'
import * as Yup from "yup";
import { Formik } from 'formik';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
// import hand1 from '../../assets/hand1.png'
// import hand2 from '../../assets/hand2.png'
// import hand3 from '../../assets/hand3.png'

function Contact() {
  const [success,setSuccess] = useState("")
  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(50, "Too Long!")
      .required("Name is required"),
  
    // phone: Yup.string()
    // .required("Phone number is required")
    // .matches(phoneRegExp, 'Phone number is not valid')
    // .min(10, "Phone Number should be 10digit")
    // .max(10, "Phone Number should be 10digit"),
    email: Yup.string().email().required("Email is required"),
    message: Yup.string()
    .min(1)
    .max(500, "Too Long!")
    .required("Message is required")
  });
  return (
    <div className='contact'>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        />
        <div className='bg-contact'></div>
      <div className='row contact-row'>
      <div className='col-sm-6 more-info-container p-4'>
        <h1 className='more-info-title'>For More Information </h1>
        <div className='more-info-subtitle mt-4'>
          <p className='more-info-sub'><b>Partnerships : </b> <a href='mailto:hello@xrcouture.com' className='text-white text-decoration-none'  style={{fontFamily:"Clash Display Light"}}> &nbsp;partnerships@xrcouture.com</a></p>
          <p className='more-info-sub'><b>Press Enquires : </b><a href='mailto:hello@xrcouture.com' className='text-white text-decoration-none' style={{fontFamily:"Clash Display Light"}}> &nbsp;press@xrcouture.com</a></p>
          <p className='more-info-sub'><b>General Enquires :</b><a href='mailto:hello@xrcouture.com' className='text-white text-decoration-none' style={{fontFamily:"Clash Display Light"}}> &nbsp;hello@xrcouture.com</a></p>
        </div>
      </div>
        <div className='col-sm-6 position-relative p-0 d-flex justify-content-center'>
          <div className='contact-form position-relative p-5'>
            <h1 className='contact-title'>GET IN TOUCH</h1>
            {/* <p className='contact-subtitle'>
            In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.
            </p> */}
            
            <div className='form-container'>
            <Formik
                  initialValues={{name:"", email: '', phone: '',message:"" }}
                  validationSchema={SignUpSchema}
                  onSubmit={async(values, { setSubmitting }) => {
                  console.log(values)
                    await axios.post("http://localhost:5000/user/contact",values,{headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
              }})
                    .then((response) => {
                            setSuccess("Form submitted successfully")
                          })
                    .catch(err => setSuccess("Form submission failed, Try again!"))
                    setSubmitting(false);
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
                        placeholder="Name*"
                      />
                      <p className='error text-danger contact-subtitle'>{errors.name && touched.name && errors.name}</p>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email*"
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
                      <textarea
                        type="text"
                        cols={5}
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        placeholder="Message*"
                        style={{height:"100px"}}
                      />
                      <p className='error text-danger contact-subtitle'>{errors.message && touched.message && errors.message}</p>
                      <div className='d-flex align-items-center'>
                      <button type="submit" className='footer-subscribe-button' disabled={isSubmitting}>
                        Submit Form
                      </button>
                      {success == "Form submitted successfully" ? <div className='status text-success'>{success}</div> : <div className='status text-danger'>{success}</div>}
                      </div>
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