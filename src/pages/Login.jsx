import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleUserLoginForm = e => {
        e.preventDefault()
    }
    return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleUserLoginForm} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>Don't have an account? <Link to={'/register'} className='text-blue-500'>Register now!</Link></p>
      </div>
    </div>
    );
};

export default Login;