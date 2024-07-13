import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import signupSchema from '../schemas/SignupSchema';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., call an API)
  };

  return (
    <>
      <Helmet>
        <title>Create your account - Tonzai Expense tracker</title>
      </Helmet>
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
              <button type="submit">Signup</button>
            </div>
            <div className="">
              Already have account?
              <a href="/signin">Login here</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
