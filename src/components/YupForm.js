import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const YupForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        channel: '',
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
        channel: Yup.string().required('Required')
    })
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values => { console.log('form data', values) }}>
            <Form>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <Field type='text' id='firstName' name='firstName' />
                    <ErrorMessage name='firstName' />
                </div><div>
                    <label htmlFor='lastName'>Last Name</label>
                    <Field type='text' id='lastName' name='lastName' />
                    <ErrorMessage name='lastName' />
                </div>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <Field type='password' id='password' name='password' />
                    <ErrorMessage name='password' />
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <Field type='password' id='confirmPassword' name='confirmPassword' />
                    <ErrorMessage name='confirmPassword' />
                </div> <div>
                    <label htmlFor='channel'>channel</label>
                    <Field type='string' id='channel' name='channel' />
                    <ErrorMessage name='channel' />
                </div>

                <div>
                    <button type='submit'>SignUp</button>
                </div>
                <span className='form-input-login'>
                    Already have an account? Login <a href='#'>here</a>
                </span>

            </Form>
        </Formik>
    );
};

export default YupForm;
