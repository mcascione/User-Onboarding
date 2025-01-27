import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const initialDisabled = true;

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(initialDisabled);

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/users", formValues)
      .then(res => {
        console.log(res.data);
        setUsers([ res.data, ...users ])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]:value});
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className='App'>
      <Form 
        values={formValues}
        change={handleChange}
        errors={formErrors}
        submit={handleSubmit}
        disabled={disabled}
      />
      {/* {users.map(user => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))} */}
    </div>
  );
}

export default App;
