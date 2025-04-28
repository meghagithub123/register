import { useState } from "react";
import './App.css';

function App(){
  const[formData, setformData] = useState({
    name: '',
    gender: '',
    age: '',
    fathername: '',
    mothername: '',
    city: '',
    state: '',
    country: '',
    college: '',
    semester: '',
    skills: ''
  });

  const handlechange = (e) => {
    setformData({...formData, [e.target.name]: e.target.value});
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div style={{ padding: '50px', maxWidth: '500px', margin: 'auto' }}>
      <h1>Student Registration Form</h1>
      <form onSubmit={handlesubmit}>

        <div>
          <label>Name:</label><br />
          <input name="name" value={formData.name} onChange={handlechange} />
        </div><br />

        <div>
          <label>Gender:</label><br />
          <select name="gender" value={formData.gender} onChange={handlechange}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div><br />

        <div>
          <label>Age:</label><br />
          <input type="number" name="age" value={formData.age} onChange={handlechange} />
        </div><br />

        <div>
          <label>Father Name:</label><br />
          <input name="fathername" value={formData.fathername} onChange={handlechange} />
        </div><br />

        <div>
          <label>Mother Name:</label><br />
          <input name="mothername" value={formData.mothername} onChange={handlechange} />
        </div><br />

        <div>
          <label>City:</label><br />
          <select name="city" value={formData.city} onChange={handlechange}>
            <option value="">Select</option>
            <option>Banglore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </select>
        </div><br />

        <div>
          <label>State:</label><br />
          <select name="state" value={formData.state} onChange={handlechange}>
            <option value="">Select</option>
            <option>Karnatake</option>
            <option>Maharastra</option>
            <option>Haryana</option>
            <option>Tamil Nadu</option>
            <option>West Bengal</option>
          </select>
        </div><br />

        <div>
          <label>Country:</label><br />
          <select name="country" value={formData.country} onChange={handlechange}>
            <option value="">Select</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Srilanka</option>
            <option>Australia</option>
          </select>
        </div><br />

        <div>
          <label>College:</label><br />
          <select name="college" value={formData.college} onChange={handlechange}>
            <option value="">Select</option>
            <option>IIT Delhi</option>
            <option>IIT Bombay</option>
            <option>NIT Trichy</option>
            <option>VIT Vellore</option>
            <option>NIT Surathkal</option>
          </select>
        </div><br />

        <div>
          <label>Semester:</label><br />
          <select name="semester" value={formData.semester} onChange={handlechange}>
            <option value="">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div><br />

        <div>
          <label>Skills:</label><br />
          <select name="skills" value={formData.skills} onChange={handlechange}>
            <option value="">Select</option>
            <option>C</option>
            <option>Python</option>
            <option>Java</option>
            <option>Front end</option>
            <option>Back end</option>
          </select>
        </div><br />

        <button type="submit">Submit</button> {/* Submit button added here */}
      </form>
    </div>
  );
}

export default App;
