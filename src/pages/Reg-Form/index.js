import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import './Reg-Form.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const YupForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        // channel: '',
    }
    const handleSubmit = (e) => {
        console.log(e, "hello");
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, e.email, e.password)
            .then((response) => {
                const uid = response.user.uid;
                console.log(uid);


                alert("success")
                return response.user.uid
            })
            .catch((error) => {
               alert(error)
                // ..
            });
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
        // channel: Yup.string().required('Required')
    })
    return (
        <div className='div'>
            <h1 >Registration Form</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className='form'>
                    <div className='form-div'>
                        <div className='containers'>
                            <div className='label'> <label htmlFor='firstName'>First Name</label></div>
                            <div className='containers-field'>
                                <Field className='form-control' type='text' id='firstName' name='firstName' /><br />
                                <small className='ErrorMess'> <ErrorMessage className='ErrorMess' name='firstName' /></small>
                            </div>
                        </div>
                        <div className='containers'>
                            <div className='label'> <label htmlFor='lastName'>Last Name</label></div>
                            <div className='containers-field'>
                                <Field className='form-control' type='text' id='lastName' name='lastName' /><br />
                                <small className='ErrorMess'> <ErrorMessage className='ErrorMess' name='lastName' /></small>
                            </div>
                        </div>
                        <div className='containers'>
                            <div className='label'> <label htmlFor='email'>E-mail</label></div>
                            <div className='containers-field'>
                                <Field className='form-control' type='email' id='email' name='email' /><br />
                                <small className='ErrorMess'> <ErrorMessage className='ErrorMess' name='email' /></small>
                            </div>
                        </div>
                        <div className='containers'>
                            <div className='label'> <label htmlFor='password'>Password</label></div>
                            <div className='containers-field'>
                                <Field className='form-control' type='password' id='password' name='password' /><br />
                                <small className='ErrorMess'> <ErrorMessage name='password' /></small>

                            </div>
                        </div>
                        <div className='containers'>
                            <div className='label'><label htmlFor='confirmPassword'>Confirm Password</label></div>
                            <div className='containers-field'>
                                <Field className='form-control' type='password' id='confirmPassword' name='confirmPassword' /><br />
                                <small className='ErrorMess'><ErrorMessage className='ErrorMess' name='confirmPassword' /></small>
                            </div>
                        </div>
                        {/* <div className='containers'>
                              <div className='label'> 
                               <label htmlFor='channel'>channel</label></div> 
                            <div className='containers-field'>
                           <Field typ className='form-control'e='string' id='channel' name='channel' /><br />
                        <small className='ErrorMess'> <ErrorMessage className='ErrorMess' name='channel' /></small>
                        </div>
                        </div> */}

                        <div className='containers btn'>
                            <button type='submit'>SignUp</button>
                        </div>
                    </div>
                    <span className='form-input-login'>
                        Already have an account? Login <Link to='/login'><button>Login</button></Link>
                    </span>
                </Form>
            </Formik>
        </div >
    );
};

export default YupForm;
