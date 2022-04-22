import React from 'react';
import './style.css';
import Button from './Button';
import Student from './Student';
import Teacher from './Teacher';

export default function App() {
  const user = {
    name: 'prashant',
    image:
      'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  };

  // set default to false i.e teacher is logged in
  let isStudentLoggedIn = true;

  return (
    <div>
      <h1 className="header"> Welcome To my App</h1>

      {/* if true show student, else show teacher */}
      {isStudentLoggedIn ? <Student /> : <Teacher />}

      <img
        src={user.image}
        style={{ width: '40%', display: 'block', marginBottom: '20px' }}
      />

      <Button />
    </div>
  );
}
