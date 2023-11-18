import React,{useState} from "react";
import axios from "axios";
export default function Form(){
  const [formData,setFormData]=useState({
    firstname:"",
    secondname:"",
    email:"",
    // priority:"",
    // description:""
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 const handleSubmit=async (e)=>{
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5001/api/contacts', formData);
    console.log('User created:', response.data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};
    return(
      <form onSubmit={handleSubmit}>
      <ul className="form-style-1">
        <li>
          <label>
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="firstname"
            className="field-divided"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First"
          />
          <input
            type="text"
            name="secondname"
            value={formData.secondname}
            onChange={handleChange}
            className="field-divided"
            placeholder="Last"
          />
        </li>
        <li>
          <label>
            Email <span className="required">*</span>
          </label>
          <input type="text" value={formData.email} name="email" onChange={handleChange} className="field-long" />
        </li>
        {/* <li>
          <label>Priority</label>
          <select name="priority" onChange={handleChange} value={formData.priority} className="field-select">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </li>
        <li>
          <label>
            Description <span className="required">*</span>
          </label>
          <textarea
            name="description"
            id="field5"
            value={formData.description}
            onChange={handleChange}
            className="field-long field-textarea"
          />
        </li> */}
        <li>
          <button className="btn" type="submit">Submit </button>
        </li>
      </ul>
    </form>
    )
}