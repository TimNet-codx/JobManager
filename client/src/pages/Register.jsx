import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import { Logo, FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import customFetch from "../utils/customFetch";
//import SubmitBtn from "../components/SubmitBtn";
import { toast } from 'react-toastify';

export const action = async ({request}) => {
   const formData = await request.formData();
     console.log(formData);
   const data = Object.fromEntries(formData);

   try {
     await customFetch.post('/auth/register', data);
     toast.success('Registration successful');
     return redirect('/login');
   } catch (error) {
    toast.error(error?.response?.data?.msg);
     return error;
   }
};

const Register = () => {
    return (
      <Wrapper>
        <Form method='post' className='form'>
          <Logo />
          <h4>Register</h4>
          <FormRow type='text' name='name' />
          <FormRow type='text' name='lastName' labelText='last name' />
          <FormRow type='text' name='location' />
          <FormRow type='email' name='email' />
          <FormRow type='password' name='password' />
  
          {/* <button type='submit' className='btn btn-block'>
            submit
          </button> */}
          <SubmitBtn/>
          <p>
            Already a member?
            <Link to='/login' className='member-btn'>
              Login
            </Link>
          </p>
        </Form>
      </Wrapper>
    );
  };
  export default Register;