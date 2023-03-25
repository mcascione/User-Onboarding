import React, { useState } from 'react';
import './App.css';
import schema from './Validation/formSchema';
import * as yup from 'yup';
import Form from './Components/Form'

const initialFormValues = {
  first: '',
  last: '',
  email: '',
  password: '',
  tos: false
};

const initialFormErrors = {
  first: '',
  last: '',
  email: '',
  password: '',
  tos: ''
};

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]:value});
  }

  const onSubmit = () => {
    // setFormValues(
    // {
    // first:'',
    // last:'', 
    // email:'', 
    // password:'', 
    // tos: false
    // }
    // )
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  return (
    <div className='App'>
      <Form 
        values={formValues}
        change={onChange}
        submit={onSubmit}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
