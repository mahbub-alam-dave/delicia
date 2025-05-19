import React from 'react';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const handleUserRegisterForm =  e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const {email, password} = Object.fromEntries(formData.entries())
    }
    return (

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleUserRegisterForm} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="Name" />
          <label className="label">Photo Url</label>
          <input type="text" className="input" name='photo' placeholder="Photo Url" />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>Already have an account? <Link to={'/login'} className='text-blue-500'>Login here!</Link></p>
        <div className='flex gap-2 items-center'>
            <p>Login with </p>
            <FcGoogle />
        </div>
      </div>
    </div>
    );
};

export default Register;