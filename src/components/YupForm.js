import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const YupForm = () => {
    const initialValues = {
        name: '',
        email: '',
        channel: '',
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email').required('Required'),
        channel: Yup.string().required('Required')
    })
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values => { console.log('form data', values) }}>
            <Form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name' />
                </div>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email' />
                </div>
                <div>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name='channel' />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>

            </Form>
        </Formik>
    );
};

export default YupForm;
