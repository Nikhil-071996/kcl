import React, { useState } from "react";

import RegisterLogo from '../assets/images/header/KCL_Logo.svg'

import '../assets/styles/register.css'
import '../assets/styles/floatingForm.css'

const initialState = {
  playerFirstName: "",
  playerLastName: "",
  dob: "",
  phone: "",
  address: "",
  country: "",
  state: "",
  city: "",
  pincode: "",
  category: "",
  positionsPlayed: [],
  positionsTrying: [],
  guardianFirstName: "",
  guardianLastName: "",
  guardianEmail: "",
  guardianPhone: "",
  additionalInfo: "",
  permission: false,
  registrationFeeAgreement: false,
};

const RegistrationForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && (name === "permission" || name === "registrationFeeAgreement")) {
      setForm({ ...form, [name]: checked });
    } else if (type === "checkbox") {
      const groupName = e.target.getAttribute("data-group");
      setForm((prev) => {
        const values = prev[groupName];
        return {
          ...prev,
          [groupName]: checked
            ? [...values, value]
            : values.filter((v) => v !== value),
        };
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.playerFirstName.trim()) newErrors.playerFirstName = "Required";
    if (!form.playerLastName.trim()) newErrors.playerLastName = "Required";
    if (!form.dob) newErrors.dob = "Required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.country.trim()) newErrors.country = "Required";
    if (!form.state.trim()) newErrors.state = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.pincode.trim()) newErrors.pincode = "Required";
    if (!form.category) newErrors.category = "Select a category";
    if (!form.guardianFirstName.trim()) newErrors.guardianFirstName = "Required";
    if (!form.guardianLastName.trim()) newErrors.guardianLastName = "Required";
    if (!form.guardianEmail.trim()) newErrors.guardianEmail = "Required";
    if (!form.guardianPhone.trim()) newErrors.guardianPhone = "Required";
    if (!form.permission) newErrors.permission = "Must agree";
    if (!form.registrationFeeAgreement) newErrors.registrationFeeAgreement = "Must agree";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", form);
    }
  };

  const categories = ["Junior", "Senior", "Open"];
  const positions = ["Setter", "Blocker", "Universal", "Attacker", "Libero"];
  const tryOptions = [...positions, "Any/No Preference"];

  return (
    <div className="register">
      <div className="container">
        <div className="column-1 logo-content">
          {/* <img src={RegisterLogo} alt="RegisterLogo" /> */}
          <h1>REGISTRATION FORM</h1>
        </div>
        <div className="column-2 form-contents">
          <div className="floating-form-container">
            <form onSubmit={handleSubmit}>

              <div className="form-container">
                <div className="section-1">

                  <div className="input-container-floating-form wid-50">
                      <label>First Name *</label>
                      <input type="text" name="playerFirstName" value={form.playerFirstName} onChange={handleChange} />
                      {errors.playerFirstName && <span className="error">{errors.playerFirstName}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>Last Name *</label>
                      <input type="text" name="playerLastName" value={form.playerLastName} onChange={handleChange} />
                      {errors.playerLastName && <span className="error">{errors.playerLastName}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>Date of Birth *</label>
                      <input type="date" name="dob" value={form.dob} onChange={handleChange} />
                      {errors.dob && <span className="error">{errors.dob}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
                      {errors.phone && <span className="error">{errors.phone}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>Address *</label>
                      <input type="text" name="address" value={form.address} onChange={handleChange} />
                      {errors.address && <span className="error">{errors.address}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>Country *</label>
                      <input type="text" name="country" value={form.country} onChange={handleChange} />
                      {errors.country && <span className="error">{errors.country}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>State *</label>
                      <input type="text" name="state" value={form.state} onChange={handleChange} />
                      {errors.state && <span className="error">{errors.state}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>City *</label>
                      <input type="text" name="city" value={form.city} onChange={handleChange} />
                      {errors.city && <span className="error">{errors.city}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>Pin Code *</label>
                      <input type="text" name="pincode" value={form.pincode} onChange={handleChange} />
                      {errors.pincode && <span className="error">{errors.pincode}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>Category *</label>
                      <select name="category" value={form.category} onChange={handleChange}>
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      {errors.category && <span className="error">{errors.category}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50"></div>
                  <div className="input-container-floating-form wid-50"></div>

                  <div className="input-container-floating-form wid-50">
                      <label>Positions Previously Played</label>
                      <div className="checkbox-group">
                        {positions.map((pos) => (
                          <label key={pos}>
                            <input
                              type="checkbox"
                              data-group="positionsPlayed"
                              value={pos}
                              checked={form.positionsPlayed.includes(pos)}
                              onChange={handleChange}
                              style={{marginRight: '5px'}}
                            /> {pos}
                          </label>
                        ))}
                        <label>
                          <input
                            type="checkbox"
                            data-group="positionsPlayed"
                            value="N/A – New Player"
                            checked={form.positionsPlayed.includes("N/A – New Player")}
                            onChange={handleChange}
                            style={{marginRight: '5px'}}

                          />
                          N/A – New Player
                        </label>
                      </div>
                  </div>

                  <div className="input-container-floating-form wid-50">
                      <label>Positions Trying Out For</label>
                      <div className="checkbox-group">
                        {tryOptions.map((pos) => (
                          <label key={pos}>
                            <input
                              type="checkbox"
                              data-group="positionsTrying"
                              value={pos}
                              checked={form.positionsTrying.includes(pos)}
                              onChange={handleChange}
                            style={{marginRight: '5px'}}

                            />
                            {pos}
                          </label>
                        ))}
                      </div>
                  </div>

                </div>

                <div className="section-1">

                  <div className="input-container-floating-form wid-30">
                      <label>Parent/Guardian First Name  *</label>
                      <input type="text" name="guardianFirstName" value={form.guardianFirstName} onChange={handleChange} />
                      {errors.guardianFirstName && <span className="error">{errors.guardianFirstName}</span>}
                  </div>

                  <div className="input-container-floating-form wid-30">
                      <label>Parent/Guardian Last Name *</label>
                      <input type="text" name="guardianLastName" value={form.guardianLastName} onChange={handleChange} />
                      {errors.guardianLastName && <span className="error">{errors.guardianLastName}</span>}
                  </div>

                  <div className="input-container-floating-form wid-30">
                      <label>Parent/Guardian Email *</label>
                      <input type="email" name="guardianEmail" value={form.guardianEmail} onChange={handleChange} />
                      {errors.guardianEmail && <span className="error">{errors.guardianEmail}</span>}
                  </div>

                  <div className="input-container-floating-form wid-30">
                      <label>Parent/Guardian Phone *</label>
                      <input type="tel" name="guardianPhone" value={form.guardianPhone} onChange={handleChange} />
                      {errors.guardianPhone && <span className="error">{errors.guardianPhone}</span>}
                  </div>

                </div>

                {/* <div className="section-1"> */}

                  {/* <div className="input-container-floating-form wid-100">
                      <label>
                        <input type="checkbox" name="permission" checked={form.permission} onChange={handleChange} />
                        I agree and give my permission
                      </label>
                      {errors.permission && <span className="error">{errors.permission}</span>}
                      <textarea name="additionalInfo" className="react-quill" value={form.additionalInfo} placeholder="Additional information..." onChange={handleChange} />
                  </div>

                  <div className="input-container-floating-form wid-100">
                      <label>
                      <input type="checkbox" name="registrationFeeAgreement" checked={form.registrationFeeAgreement} onChange={handleChange} />
                      I agree to the following charge: Registration Fees Rs 500.00
                    </label>
                    {errors.registrationFeeAgreement && <span className="error">{errors.registrationFeeAgreement}</span>}
                  </div> */}

                {/* </div> */}

              </div>

              <div className="form-btn-container">

                  <button type='submit' onClick={handleSubmit}>Submit</button>
                  {/* <button type='reset' >Cancel</button> */}

              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default RegistrationForm;
