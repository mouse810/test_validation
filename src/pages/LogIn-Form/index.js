import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import './LogIn-Form.css'
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
        <div className='div login'>
            <h1 >User LogIn</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values => { console.log('form data', values) }}>
                <Form className='form'>
                    <div className='form-div'>
                        <div className='containers'>
                            <div className='label'>
                                <label htmlFor="email">E-mail</label>
                            </div>
                            <div className='containers-field'>
                                <Field className='form-control' text='email' id='email' name='email' /><br />
                                <ErrorMessage name='email' /></div>
                        </div>
                        <div className='containers'>
                            <div className='label'>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className='containers-field'>
                                <Field className='form-control' text='password' id='password' name='password' /><br />
                                <ErrorMessage name='password' />
                            </div>
                        </div>
                        <div className='containers btn'>
                            <button  type='submit'>Log-In</button>
                        </div>
                    </div>
                    <span className='form-input-login'>
                        If you don,t have an account ? SignUp <Link to='/'><button >Sign-Up</button></Link>
                    </span>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm;