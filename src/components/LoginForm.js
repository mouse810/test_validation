import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().required('Password is required'),
    })

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values => { console.log('form data', values) }}>
            <Form>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <Field text='email' id='email' name='email' />
                    <ErrorMessage name='email' />
                </div><div>
                    <label htmlFor="password">Password</label>
                    <Field text='password' id='password' name='password' />
                    <ErrorMessage name='password' />
                </div>
                <div>
                    <button type='submit'>Log-In</button>
                </div>
                
            </Form>
        </Formik>
    )
}

export default LoginForm;