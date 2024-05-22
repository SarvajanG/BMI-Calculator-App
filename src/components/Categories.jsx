import React from 'react'

export default function Categories() {
    const categories = ["Underweight: <18.5", "Normal weight: 18.5-24.9", "Overweight: 25-29.9", "Obese: >30"];
  return (
    <div className='categories'>
        <h2>BMI Categories</h2>
        <ul>
            {categories.map((item,index) => {
                return (
                <li key={index}>{item}</li>
                );
            })}
        </ul>
    </div>
  )
}
