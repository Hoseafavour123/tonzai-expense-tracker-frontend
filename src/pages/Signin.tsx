import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import loginSchema from '../schemas/LoginSchema';
import { signinUser } from '../store/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await signinUser(data);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign into your account - Tonzai Expense tracker</title>
      </Helmet>
      <ToastContainer />
      <div className="sign-up">
        <Header />
        <div className="signup-container">
          <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
            <div className="title">
              <h1>Create your account</h1>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" {...register('email')} />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" {...register('password')} />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>
            <div className="button">
              <button type="submit" disabled={loading}>
                {loading ? 'Signing in...' : 'Signin'}
              </button>
            </div>
            <div className="">
              Don't have account?
              <a href="/signup"> Signup here</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
