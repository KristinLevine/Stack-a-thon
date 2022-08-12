import { onSnapshot, collection } from 'firebase/firestore';
import React from 'react';
import { useEffect, useState } from 'react'
import db from "./firebase"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(
    () =>
      onSnapshot(collection(db, "Users"), (snapshot) =>
        setUsers(snapshot.docs.map((doc) => doc.data()))
    ),
    []
  )

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
