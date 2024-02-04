import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white mx-auto rounded shadow-md w-full sm:w-96'>
                <h1 className='text-3xl font-bold mb-4 text-center'>Login</h1>
                <form action="" className='space-y-4'>
                    <div className='mb-4'>
                        <input
                            required
                            type="text"
                            placeholder='Username'
                            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='mb-4'>
                        <input
                            required
                            type="password"
                            placeholder='Password'
                            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <button
                        className='w-full bg-red-600 py-2 rounded text-white hover:bg-black transition duration-500'
                    >
                        Login
                    </button>
                </form>
                <p className='text-red-500 mt-2 text-center'>Oops! There was an error.</p>
                <div className='mt-4 text-center'>
                    <span>Don't have an account? <Link to='/register' className='text-blue-500'>Register</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Login;