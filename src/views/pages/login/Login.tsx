import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import AuthService from 'services/Auth.Service';
import login from "redux/actions/authAction";

const Login = () => {
    const { handleSubmit, register } = useForm<ILoginData>();
    const dispatch = useDispatch();

    const handleLogin = (data: ILoginData) => {
        dispatch(login(data))
    }
    return (
        <div className='mx-auto container'>
            <div className='max-w-2xl rounded-lg bg-slate-300 p-5'>
                <form className='grid grid-cols-1 gap-4' onSubmit={handleSubmit(handleLogin)}>
                    <input type="email" placeholder='Email' {...register("email")} />
                    <input type="password" placeholder='Password' {...register("password")} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;