import { Form, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import validations from './validations'

const FormWithFormik = () => {

    return (
        <Formik
            initialValues={{ name: "", email: "", message: "", campaigns: "0", weeklyOrMonthly: "" }}
            onSubmit={async (values, bag) => {
                await new Promise((r) => setTimeout(r, 500));
                console.log(values);
                console.log(bag);
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
                        <label htmlFor='campaigns'>Message</label>
                        <input name="campaigns" type="radio" value="0" onChange={handleChange} />Hayır
                        <input name="campaigns" type="radio" value="1" onChange={handleChange} />Evet
                        {errors.campaigns && touched.campaigns && errors.campaigns}
                    </div>
                    {values.campaigns === "1" && 
                    <div>
                        <label htmlFor='weeklyOrMonthly'>Weekly/Monthly</label>
                        <select name="weeklyOrMonthly" value={values.weeklyOrMonthly} onChange={handleChange}>
                            <option value="">Seçiniz</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>

                        {errors.weeklyOrMonthly && touched.weeklyOrMonthly && errors.weeklyOrMonthly}
                    </div>}

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