import React, { useState } from 'react'
import { Modal } from 'antd'
import Login from './login'
import Signup from './Signup'
import { Link } from 'react-router-dom'
// import Button from '../components/Button'
{/* <Button type='primary' variant='solid' onClick={() => setOpen(true)} size='large'><button className='text-[18px] font-semibold py-[24px]'>Login</button></Button> */}
{/* <Button text='Login' bgcolor='blue' paddingY='3' paddingX='8' textColor='white' textSize='2xl' className='mt-8' /> */}
{/* <section className="max-w-md overflow-hidden w-full" id="loginsection">
<div className="mx-auto flex flex-col items-center justify-center">
<div
className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
<h1
    className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    Login
</h1>
<form className="space-y-4 md:space-y-6" action="#">
    <div>
        <label htmlFor="loginEmail" className="block mb-2 text-sm font-medium text-gray-900">Your
            email</label>
        <input type="email" name="email" id="loginEmail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Email" required />
    </div>
    
    <div>
        <label htmlFor="loginPassword"
            className="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input type="password" name="password" id="loginPassword" placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required />
    </div>
    
    <button type="submit"
        className="cursor-pointer w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-base px-5 py-2.5 text-center"
        id="loginDetail">Create an account</button>
    <button disabled type="button"
        className="hidden w-full text-white bg-gray-500 font-medium rounded-lg text-base px-5 py-2.5 text-center"
        id="loadingLogin">
        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB" />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor" />
        </svg>
        Loading...
    </button>
    <p className="text-base font-light text-gray-500">
        Create an account? <a href="#" className="font-medium text-blue-500 hover:underline"
            id="signupPage">Signup here</a>
    </p>
</form>
</div>
</div>
</div>
</section>  */}

const Home = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false)
    const handleCancelLogin = () => {
        setOpenLogin(false);
    };
    const handleCancelSignup = () => {
        setOpenSignup(false)
    }
    return (
        <>
            <div className='flex flex-col justify-center items-center h-[100vh] bg-[#e1ebfb] p-2'>
                <h1 className='text-center text-5xl font-bold mb-4 text-[#1e3caf]'>Welcome To Our Plateform</h1>
                <p className='text-center text-xl text-[#7d8386]'>Experince the best service with our cutting-edge solution.</p>
                <div className='flex gap-8 sm:gap-12'>
                    <Link to='/login'><button className='cursor-pointer bg-blue-600 text-white py-3 px-8 rounded-lg text-2xl font-normal hover:bg-white hover:text-blue-600 mt-8 shadow-xl' onClick={() => setOpenLogin(true)}>Login</button></Link>
                    <Link to='/signup'><button className='cursor-pointer bg-white text-blue-600 py-3 px-8 rounded-lg text-2xl font-normal hover:bg-blue-600 hover:text-white mt-8 shadow-xl' onClick={() => setOpenSignup(true)}>Signup</button></Link>
                </div>
                {/* <Modal open={openLogin} onCancel={handleCancelLogin} footer={[]}>
                    <Login />
                </Modal>
                <Modal open={openSignup} onCancel={handleCancelSignup} footer={[]}>
                    <Signup />
                </Modal> */}
            </div>
        </>
    )
}

export default Home