import React from 'react';

const Form = (props) => {

    const { change, submit, errors } = props;
    const { first, last, email, password, tos } = props.values;

    const onChange = (e) =>  {
        const {name, value, checked, type} = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
 
    return (
    <div>
        <h1>Sign Up</h1>
        <p>{errors.first}</p>
        <p>{errors.last}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.tos}</p>
        <form onSubmit={onSubmit}> 
            <label> First Name
                <input
                    name="first"
                    type="text"
                    value={first}
                    placeholder="first name"
                    onChange={onChange}
                />
            </label>
            <label> Last Name
                <input
                    name="last"
                    type="text"
                    value={last}
                    placeholder="last name"
                    onChange={onChange}
                />
            </label>
            <label> Enter Your Email
                <input
                    name="email"
                    type="email"
                    value={email}
                    placeholder="enter your email"
                    onChange={onChange}
                />
            </label>
            <label> Create a Password
                <input
                    name="password"
                    type="password"    
                    value={password}
                    placeholder="create a password" 
                    onChange={onChange}
                />
            </label>
            <label> Agree to the Terms of Service
                <input 
                    name="tos"
                    type="checkbox"
                    checked={tos}
                    onChange={onChange}
                />
            </label>
            <input type='submit' value='Create Your Account'/>
        </form>
     </div>
    )
};

export default Form;