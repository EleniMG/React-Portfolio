import React, { useState } from 'react';

function Form() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    message: ''
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!formData.firstName || !formData.lastName) {
      alert('Fill out your first and last name please!');
    } else if (/(\w+)@(\w+)\.(\w+)/gi.test(formData.email) === false) {
      alert("Please enter a valid email address");
    } else {
      alert(`Hello ${formData.firstName} ${formData.lastName}, I'm grateful for you reaching out. However, your message has not been received. Nothing personal, it's just that this is a personal project... But feel free to reach out to me on LinkedIn! 😊`);
    }

    setFormData({
      firstName: '',
      lastName: '',
      emailAddress: '',
      message: ''
    });
  };

  return (
    <div>
      <p>
        Hello {formData.firstName} {formData.lastName}
      </p>
      <form className="form">
        <input
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
