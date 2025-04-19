import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import supabase from '../lib/Database'
import { Spin } from 'antd'

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false)
    const loginPageNavigate = useNavigate();
    // const inputRef = useRef(null);
    const submitButton = async (event) => {
        setLoading(true)
        event.preventDefault();
        try {
            const { data, error } = await supabase.auth.signUp(
                {
                    email: email,
                    password: password,
                    options: {
                        data: {
                            first_name: username,
                        }
                    }
                }
            )
            if (data.user !== null) {
                console.log(data)
                try {
                    const { data: usersTableData, error: UsersError } = await supabase
                        .from('users')
                        .insert({ Email: data.user.email, UID: data.user.id, Username: data.user.user_metadata.first_name })
                        .select()
                    if (usersTableData) {
                        console.log(usersTableData);
                        // inputRef.current.value = ''
                        setTimeout(() => {
                            loginPageNavigate('/login');
                            setLoading(false)
                            
                        }, 1000);

                    }
                } catch (error) {
                    console.log(`error during insert data in user table ${error.message}`)
                }
            }
        } catch (error) {
            console.log(`Error is ${error.message}`)
        }
    }

    return (

        <section>
            <Spin spinning={loading}>
                <div className="w-full h-screen bg-[#e1ebfb]">
                    <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 max-w-md overflow-hidden w-full rounded-2xl shadow-xl">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
                            <div className="p-6 space-y-4 md:space-y-6 sm:py-5 sm:px-8">
                                <h1
                                    className="mt-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create an account
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={submitButton}>
                                    <div>
                                        <label htmlFor="signupEmail" className="block mb-2 text-sm font-medium text-gray-900">Your
                                            email</label>
                                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                            placeholder="Email" required />
                                    </div>
                                    <div>
                                        <label htmlFor="signupUsername"
                                            className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                        <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                            required />
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="signupPassword"
                                            className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <input type="password" name="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                            required />
                                    </div>
                                    <div className="flex items-start mt-0">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" ref={inputRef} checked={checked} onChange={() => setChecked(!checked)}
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                                required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a
                                                className="font-medium text-blue-500 hover:underline" href="#">Terms and
                                                Conditions</a></label>
                                        </div>
                                    </div>
                                    <button type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-base px-5 py-2.5 text-center">Create an account</button>
                                    <p className="text-base font-light text-gray-500">
                                        Already have an account? <Link to='/login' className="font-medium text-blue-500 hover:underline"
                                            >Login here</Link>
                                    </p>
                                    <Link to='/home'><div className="w-full text-center"><button
                                        className="cursor-pointer w-9/12 text-blue-600 bg-white rounded-lg text-base px-5 py-1">Back to Home</button></div></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
        </section>

    )
}

export default Signup