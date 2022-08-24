import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import './LogIn-Form.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    const handleSubmit = (e) => {
        console.log(e, "hello");
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, e.email, e.password)
            .then((response) => {
                const uid = response.user;
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
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().required('Password is required'),
    })

    return (
        <div className='div login'>
            <h1 >User LogIn</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className='form'>
                    <div className='form-div'>
                        <div className='containers'>
                            <div className='label'>
                                <label htmlFor="email">E-mail</label>
                            </div>
                            <div className='containers-field'>
                                <Field className='form-control' text='email' id='email' name='email' /><br />
                                <small className='ErrorMess'> <ErrorMessage className='ErrorMess' name='email' /></small>
                            </div>
                        </div>
                        <div className='containers'>
                            <div className='label'>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className='containers-field'>
                                <Field className='form-control' text='password' id='password' name='password' /><br />
                                <span className='ErrorMess'> <ErrorMessage name='password' /></span>
                            </div>
                        </div>
                        <div className='containers btn'>
                            <button type='submit'>Log-In</button>
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