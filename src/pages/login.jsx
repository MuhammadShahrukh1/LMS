import { Link } from "react-router-dom"
import { useState } from 'react'
import supabase from '../lib/Database'
import { Spin } from 'antd'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dashboardPageNavigate = useNavigate();
    let currentUserID;
    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            if (data) {
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    console.log(user.user_metadata)
                    currentUserID = user.id;
                    localStorage.setItem('currentUserId', JSON.stringify(currentUserID));
                    try {
                        const { data: fetchusersDEtail, error: ErrorInFetchingData } = await supabase
                            .from('users')
                            .select()
                            .eq('UID', currentUserID)
                        if(fetchusersDEtail){
                            // console.log(fetchusersDEtail)
                            let currentUser = {
                                email : fetchusersDEtail[0].Email,
                                username : fetchusersDEtail[0].Username
                            }
                            localStorage.setItem('currentUser', JSON.stringify(currentUser));
                            console.log(currentUser)
                            setTimeout(() => {
                                dashboardPageNavigate('/dashboard');
                                setLoading(false)
                                
                            }, 1000);
                        }
                    } catch (error) {
                        console.log(`error in fetching data from User table from Supabase ${error.message}`)
                    }
                }
            }
            if (error) throw error.message
        } catch (error) {
            console.log(`error in fetching data from supabase user table ${error.message}`)
        }
    }

    // className="rounded-xl shadow-xl shadow-sky-950 absolute top-[200%] start-[50%] translate-[-50%] max-w-md overflow-hidden w-full"

    return (
        <>
            <Spin spinning={loading}>
                <div className="w-full h-screen bg-[#e1ebfb]">
                    <section className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 max-w-md overflow-hidden w-full rounded-2xl shadow-xl" id="loginsection">
                        <div className="mx-auto flex flex-col items-center justify-center">
                            <div
                                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1
                                        className="text-center text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-3xl dark:text-white">
                                        Login
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
                                        <div>
                                            <label htmlFor="loginEmail" className="block mb-2 text-sm font-medium text-gray-900">Your
                                                email</label>
                                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                placeholder="Email" required />
                                        </div>

                                        <div>
                                            <label htmlFor="loginPassword"
                                                className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                required />
                                        </div>

                                        <button type="submit"
                                            className="cursor-pointer w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-base px-5 py-2.5 text-center">Login</button>
                                        <p className="text-base font-light text-gray-500">
                                            Create an account? <Link to='/signup' className="font-medium text-blue-500 hover:underline"
                                                id="signupPage">Signup here</Link>
                                        </p>
                                        <Link to='/home'><div className="w-full text-center"><button
                                            className="cursor-pointer w-9/12 text-blue-600 bg-white rounded-lg text-base px-5 py-1">Back to Home</button></div></Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </Spin>

        </>
    )
}

export default Login