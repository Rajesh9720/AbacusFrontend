import React from 'react';
import { emailValidator, passwordValidator } from './Valid';
import {useHistory} from "react-router-dom";

import "./Login.css";


const Login = () => {
	const history = useHistory()



  
	const [input, setInput] = React.useState({ email: '', password: '' });
	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

  
	const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

 

	const formSubmitter = e => {		
		setsuccessMessage('');
		if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(input.password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);

		if(input.email !== 'Admin12@gmail.com' || input.password !== 'Admin12@') return seterrorMessage('Invalid email or password');

		history.push('/useraction')
		localStorage.setItem('auth', true)
	};

  
	return (
		
      <form className= "form1"onSubmit={formSubmitter}>
      <div className='lion'>
        <h1 className='rj1'>Login</h1><br/>
        {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
        {successMessage.length > 0 && (
        <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
        )}
        <div data-validate="email is required">
        <h3>Enter UserName</h3>
        <input className="input100" type="text" name="email" placeholder="Type your username" onChange={handleChange}/>
        <span className="focus-input100" data-symbol="" />
        </div>
        <div data-validate="Password is required">
        <h3>Enter Password</h3>
        <input className="input100"	type="password" name="password"	placeholder="Type your password"	onChange={handleChange}/>								
        <span className="focus-input100" data-symbol="" />
        </div><br/>        
        <button  className="login100-form-btn">Login</button>
      </div>
      </form>
   
	);
};

export default Login;