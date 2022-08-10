import React from 'react';
import { useFormik } from 'formik';

const initialValues={
  name: 'Mouse',
  email: ' ',
  channel: ' ',
}
const set=[]

const onSubmit= (values) => {
  console.log('form data', values);
}

const validate=values => {
  let errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.channel) {
    errors.channel = 'Required'
  }
  return errors;
}


const FirstForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit ,
    validate
  });
  // console.log(formik.values, 'formik.values');
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
        </div>
        <div>
          <label htmlFor='email'>E-mail</label>
          <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
        </div>
        <div>
          <label htmlFor='channel'>Channel</label>
          <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FirstForm;
