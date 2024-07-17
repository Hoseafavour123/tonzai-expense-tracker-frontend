import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import signupSchema from '../schemas/SignupSchema';
import { registerUser } from '../store/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await registerUser(data);
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
        <title>Create your account - Tonzai Expense tracker</title>
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
              <label htmlFor="name">Names</label>
              <input type="text" id="name" {...register('name')} />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
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
                {loading ? 'Signing up...' : 'Signup'}
              </button>
            </div>
            <div>
              Already have an account? <a href="/signin">Login here</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
