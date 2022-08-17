import { onSnapshot, collection } from 'firebase/firestore';
import React from 'react';
import { useEffect, useState } from 'react'
import db from "./firebase"
import SignUp from './components/SignUp';
import Header from './components/header';
import Dogs from './components/Dogs';

const App = () => {

  return (
    <div>
      <Header />
      <Dogs />
    </div>
  );
};

export default App;
