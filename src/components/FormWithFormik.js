import { Form, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import validations from './validations'

const FormWithFormik = () => {

    return (
        <Formik
            initialValues={{ name: "", email: "", message: "" }}
            onSubmit={(values) => {
                console.log(values);
            }}
            validationSchema={validations}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input id='name' type='text' value={values.name}
                            onChange={handleChange} onBlur={handleBlur}></input>
                        {errors.name && touched.name && errors.name}
                    </div>
                    <div>
                        <label htmlFor='email'>E-Mail</label>
                        <input id='email' type='text'
                            value={values.email}
                            onChange={handleChange} onBlur={handleBlur}></input>
                        {errors.email && touched.email && errors.email}
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message'
                            value={values.message}
                            onChange={handleChange} onBlur={handleBlur}></textarea>
                        {errors.message && touched.message && errors.message}
                    </div>
                    <div>
                        <button type='submit' disabled={isSubmitting}>Submit</button>
                    </div>
                </form>
            )
            }

        </Formik >

    )
}

export default FormWithFormik