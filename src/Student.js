import React from 'react';
import './student.css';

function Student() {
  const student_cart = {
    product_name: 'pencil',
    product_image:
      'https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  };
  return (
    <>
      <h1>Student logged In</h1>
      <span>Items in Student Cart</span>
      <img src={student_cart['product_image']} style={{ width: '300px' }} />
    </>
  );
}

export default Student;
