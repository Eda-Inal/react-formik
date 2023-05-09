import {Form, Field, ErrorMessage, useFormik } from 'formik';



function App() {
  const {handleSubmit,handleChange,values} = useFormik({
    initialValues: {
      firstName: '',
        lastName: 'İNAL',
        email: 'edai@gmail.com',
        gender : "female",
        hobies : [],
        country : "türkiye"
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="App">
    <h1>Sign Up</h1>
   
     
       
          <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
      <input 
      name='firstName'
       onChange={handleChange}
       value={values.firstName} 
        /> <br /><br />

        <label htmlFor="lastName">Last Name</label>
        <input
         name='lastName' 
         onChange={handleChange} 
         value={values.lastName}
          />
       <br /> <br />

        <label htmlFor="email">Email</label>
        <input
         name='email' 
         onChange={handleChange} 
         value={values.email}
          />
        
        
        <br /><br />
      
        <span>Male</span>
        <input 
        type='radio' 
        name='gender' 
        value="male"  
        onChange={handleChange}
        checked = {values.gender ==="male"}
        
        />
        <span>Female</span>
        <input type='radio' 
        name='gender'
         value="female"  
         onChange={handleChange}
         checked = {values.gender ==="female"}
         /> <br /><br />

<div> <input type="checkbox" name="hobies" value="Football"  onChange={handleChange} />Football 

</div>
<div> <input type="checkbox" name="hobies"value="Cinema"  onChange={handleChange} />Cinema 

</div>
  <div><input type="checkbox" name="hobies"  value="Photography"  onChange={handleChange}/>Photography
  </div>
        <select name="country" onChange={handleChange} >
          <option value="tr">Turkey</option>
          <option value="en">England</option>
          <option value="usa">America</option>
        </select>
        
         
         
          <br /><br />
        <button type="submit">Submit</button>
        <br /><br />
        <code>
          {JSON.stringify(values)}
        </code>
      </form>
  
      
   
    </div>
  );
}

export default App;

