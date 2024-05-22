import React, {useState} from 'react'

export default function Calculator() {
    const [bmi, setBmi] = useState(0);
    const [system, setSystem] = useState('metric');

    function calculateBmi() {
        let height = NaN;
        let weight = NaN;
        if (system==='imperial') {
            const heightFeet = parseFloat(document.getElementById('height-feet').value);
            const heightInches = parseFloat(document.getElementById('height-inches').value);
            height = heightFeet * 0.3048 + heightInches * 0.0254;
            weight = parseFloat(document.getElementById('weight').value / 2.20462);
        } else {
            height = parseFloat(document.getElementById('height').value) / 100;
            weight = parseFloat(document.getElementById('weight').value);
        }
        
        if (height && weight) {
            const calculatedBmi = weight / (height * height);
            setBmi(calculatedBmi);
        } else {
            alert("Please enter a numerical value for both your weight and your height");
        }
    }

    function handleChange(event) {
        setSystem(event.target.value);
    }

    return (
    <div className='calculator'>
        <select id='system' onChange={handleChange}>
            <option value='metric'>Metric</option>
            <option value='imperial'>Imperial</option>
        </select>
        {system==='metric' 
        ? <label>Height: <input id='height' placeholder='Enter your height' autoComplete='off'></input> cm</label> 
        : <label>Height: <input id='height-feet' placeholder='Enter your height' autoComplete='off'></input> ft <input id='height-inches' placeholder='Enter your height' autoComplete='off'></input> in</label>}
        
        
        
        <label>Weight: <input id='weight' placeholder='Enter your weight' autoComplete='off'></input> {system === 'metric' ? 'kg' : 'lbs'} </label>
        <button onClick={calculateBmi}>Calculate!</button>
        <p>Your BMI is: {Math.round(bmi * 10) / 10}</p>
    </div>
)
}
