import React, {useState} from 'react';


function Contact() {
    const [form, setForm ] = useState({        
        userName: '',
        email: '',
        address: '',
        message: '',
    });
    
const handleInputChange = (e) => {
    const {name, value} = e.target;
  
  setForm({...form,[name]: value})

}
const handleFormSubmit = (e) => {
    console.log(form);
}

    return (
<div>
<form>
  <div className="form-group">
    <label for="nameInput">Name</label>
    <input 
    value={form.userName} 
    name="userName" 
    onChange={handleInputChange} 
    type="text" class="form-control" 
    id="nameInput" 
    placeholder="Enter your name"
    />
    <label for="emailInput">Email</label>
    <input 
     value={form.email}
     name="email"
     onChange={handleInputChange}
    type="email" 
    class="form-control" 
    id="emailInput" 
    placeholder="name@example.com"
    />
    <label for="addressInput">Address</label>
    <input 
    value={form.address}
    name="address"
    onChange={handleInputChange}
    type="text" 
    class="form-control" 
    id="addressInput" 
    placeholder="Enter your address"
    />
  </div>  
  <div class="form-group">
    <label for="messageTextarea">Add a Message</label>
    <textarea 
    value={form.message}
    name="message"
    onChange={handleInputChange}
    class="form-control" 
    id="messageTextarea" 
    rows="3"></textarea>
    <button 
  type="submit" 
  onClick={handleFormSubmit} 
  className="btn btn-primary"
  >Submit
</button>
  </div>    
</form>
           
      </div>
    )
}

export default Contact
