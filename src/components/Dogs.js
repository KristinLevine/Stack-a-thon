import { onSnapshot, collection } from 'firebase/firestore';
import React from 'react';
import { useEffect, useState } from 'react'
import db from "../firebase"

const Dogs = () => {
  const [Puppies, setUsers] = useState([])

  useEffect(
    () =>
      onSnapshot(collection(db, "Puppies"), (snapshot) =>
        setUsers(snapshot.docs.map((doc) => doc.data()))
    ),
    []
  )

  return (
    <div className='row col-8 justify-content-center'>
        {Puppies.map((puppy) => (
        <div className='card product-card shadow-lg'>

        <div className='card-body'>

        <img className='.img-fluid productImg rounded card-img-top' src={puppy.Image}/>
        <p className='my-4 card-title product-name text-center font-weight-bold'> {puppy.Name} </p>
        <p className='my-4 card-text order text-center'>{puppy.Breed}</p>
        </div>
        </div>
          ))}
      </div>
  )
        }

        export default Dogs
