import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../Shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { signIn } = useAuth();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onSubmit = (data) => {
        // Handle form submission logic here
        // console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success("User logged successfully")
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-400">
            <div className="w-full max-w-md py-4 px-8 bg-white rounded-md shadow-md ">
                <h2 className="mb-6 text-3xl font-bold text-primary text-center">Please Login!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full input input-bordered input-info  px-3 py-2 placeholder-gray-400 border  rounded-md focus:outline-none focus:ring-black focus:border-black"
                            placeholder='Type Your Email Here'
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                 
                       <label className="block mb-2 font-medium text-gray-800">
                            Password
                        </label>
                       
                     
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                placeholder='Type Your Password Here'
                                className="w-full px-3 input input-bordered input-info py-2 placeholder-gray-400 border  rounded-md focus:outline-none focus:ring-black focus:border-black"
                                {...register("password", { required: true })}
                            />
                            <button
                                type="button"
                                className="absolute top-2 right-2 text-gray-500 focus:outline-none"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? (
                                    <FaEyeSlash className="w-5 h-5" />
                                ) : (
                                    <FaEye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="mb-6">
  {/* <div className="flex items-start">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" className="w-4 h-4 border  rounded bg-gray-50 focus:ring-3 focus:ring-blue-300   dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="terms" className="ml-2 text-sm font-medium ">
      I agree with the <a href="" className="text-primary hover:underline ">terms and conditions</a>
    </label>
  </div> */}



<div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="">Remember me</label>
                          </div>
                      </div>
                      <a href="" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>



  
</div>



                    <div className="flex items-center justify-center mb-4">
                 
                        <button
                            type="submit"
                            className="btn btn-block btn-outline border-gray-300"
                        >
                            Login
                        </button>
                    </div>
                    <div className=" text-center mt-8">
                        <p className="text-sm  mb-4">
                            Don't have an account? <Link to={"/register"} className="font-medium text-primary">Register here</Link>
                        </p>
                    </div>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;