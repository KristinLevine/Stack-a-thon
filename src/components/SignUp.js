import React from 'react';
import {auth} from '../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const SignUp = () => {

const signUp = e => {
  e.preventDefault()
const signupForm = document.getElementById("signup")

  const firstName = signupForm.firstName.value
  const lastName = signupForm.lastName.value
  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created', cred.user)
      signupForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
}

  return (
    <div className='py-3 my-4'>
      <h2 className='my-2 align-middle text-center'>Become a member today!</h2>
      <h3 className='my-2 align-middle text-center'>Sign Up</h3>
    <form className='my-3 justify-content-center text-center'id="signup" onSubmit={signUp} >
      <div className='form-group align-middle'>

      <label for="firstName">First Name:</label>
      <input type="firstName"name="firstName"/>

      <label className='my-2' for="lastName">Last Name:</label>
      <input type="lastName"name="lastName"/>

      <label className='my-2' for="email">Email:</label>
      <input type="email"name="email"/>

      <label className='my-2'  for="password">Password:</label>
      <input type="password" name="password"/>
      </div>
      <div className='form-group align-middle'>
      <button className='mx-2 btn btn-primary' type='submit'>
              Submit
            </button>
            </div>

    </form>

    </div>
  );
}

export default SignUp;
