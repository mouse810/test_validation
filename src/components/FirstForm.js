import React from 'react';
import { useFormik } from 'formik';

const initialValues = { name: '', email: '', channel: '' }
const onSubmit = values => { console.log('form data', values) }
const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) { errors.email = 'Invalid email address' }
  if (!values.channel) {
    errors.channel = 'Required'
  }
  return errors;
}
const FirstForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.values, 'formik.values');
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>
      <div>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div>
        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel} />
        {formik.errors.channel ? <div>{formik.errors.channel}</div> : null}
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};
export default FirstForm;