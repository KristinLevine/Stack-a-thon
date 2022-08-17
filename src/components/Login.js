// import React from 'react';
// import {auth} from '../firebase'
// import {signInWithEmailAndPassword, signOut} from 'firebase/auth'

// const Login = () => {
// // logging in and out
// const logOut = () => {
//   signOut(auth)
//     .then(() => {
//       console.log('user signed out')
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
// }

// const login = (e) => {
//   e.preventDefault()
//   const loginForm = document.getElementById("login")

//   const email = loginForm.email.value
//   const password = loginForm.password.value

//   signInWithEmailAndPassword(auth, email, password)
//     .then(cred => {
//       console.log('user logged in:', cred.user)
//       loginForm.reset()
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
// }

// return (
//   <div className='py-3 my-5'>
//       <h2 className='align-middle text-center'>Already a member? Log In!</h2>
//       <form
//         className='my-4 justify-content-center form-inline py-5'
//         onSubmit={login}
//       >
//         <div className='form-group'>
//           <label className='mx-2' htmlFor='email'>
//             Email
//           </label>
//           <input name='email' type='text' />
//           <label className='mx-2' htmlFor='password'>
//             Password
//           </label>
//           <input name='password' type='password' />
//           <div>
//             <button className='btn btn-primary' type='submit'>
//               Submit
//             </button>
//           </div>
//           {error && error.response && (
//             <div>Please fill out all fields before submitting!</div>
//           )}
//         </div>
//       </form>
//     </div>
// )
// }

// export default Login;
