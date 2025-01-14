import React, { useState } from "react";

function AccessFormElements() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    subscription: false,
    preferences: [],
    message: "",
    country: "India",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    // Handle checkbox
    if (type === "checkbox") {
      setFormValues({ ...formValues, [name]: checked });
    }
    // Handle multiple selection for checkboxes or lists
    else if (type === "select-multiple") {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      );
      setFormValues({ ...formValues, [name]: selectedOptions });
    }
    // Handle radio buttons and other inputs
    else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted with Values:", formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formValues.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formValues.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <div>
        <label>
          Subscribe to Newsletter:
          <input
            type="checkbox"
            name="subscription"
            checked={formValues.subscription}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>Preferences:</label>
        <select
          name="preferences"
          value={formValues.preferences}
          onChange={handleChange}
          multiple
        >
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Country:</label>
        <select
          name="country"
          value={formValues.country}
          onChange={handleChange}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AccessFormElements;