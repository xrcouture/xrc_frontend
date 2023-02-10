import React from 'react'
import './contact.css'
import * as Yup from "yup";
import { Formik } from 'formik';

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
      <div className='row'>
        <div className='col-sm-6'>
          <div className='contact-form'>
            <h1 className='contact-title'>Contact Now</h1>
            <p className='contact-subtitle'>
            In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.
            </p>
            <div className='form-container'>
            <Formik
                  initialValues={{name:"", email: '', phone: '',message:"" }}
                  validationSchema={SignUpSchema}
                  // validate={values => {
                  //   const errors = {};
                  //   if (!values.email) {
                  //     errors.email = 'Required';
                  //   } else if (
                  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  //   ) {
                  //     errors.email = 'Invalid email address';
                  //   }
                  //   return errors;
                  // }}
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
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder="Name"
                      />
                      <p className='error text-danger'>{errors.name && touched.name && errors.name}</p>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                      />
                      <p className='error text-danger'>{errors.email && touched.email && errors.email}</p>
                      <input
                        type="phone"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        placeholder="Phone"
                      />
                      <p className='error text-danger'>{errors.phone && touched.phone && errors.phone}</p>
                      <input
                        type="text"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        placeholder="Message"
                      />
                      <p className='error text-danger'>{errors.message && touched.message && errors.message}</p>
                      <button type="submit" className='footer-subscribe-button' style={{fontFamily:"Clash Display Light"}} disabled={isSubmitting}>
                        Submit Form
                      </button>
                    </form>
                  )}
                </Formik>
            </div>
          </div>
        </div>
        <div className='col-sm-6'></div>
      </div>
    </div>
  )
}

export default Contact