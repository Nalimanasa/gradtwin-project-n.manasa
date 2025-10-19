import React from 'react';
import {useState} from 'react';
import './register.css'
import axios from "axios";



function Userlogin(props){
    const[form,setForm]=useState({
        username:'',
        password:''
    })
    
    // 
    const handlelogin = async (e) => {
    e.preventDefault();
     try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/userlogin/",
      {
        username: form.username,
        password: form.password
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (res.status === 200) {
      alert("Login successful! Welcome ");

      // ✅ Notify parent component that user is authenticated
      props.onLoginSuccess();

      // ✅ Navigate to production page
      props.onNavigate("project");
    }
  } catch (err) {
    console.error(err.response?.data || err.message);
    alert(
      "Login failed: " +
        (err.response?.data?.message || "Invalid username or password")
    );
  }
};
    return(
        <main className='user'> 
         <div>
        <center>
                <h1 style={{color:"red",backgroundColor:"whitesmoke"}}>LOGIN PAGE</h1>
                <form onSubmit={handlelogin}>
         <table>
            <tbody>
            <tr>
                    <td> <label>USERNAME</label></td>
                    <td><input type="text" placeholder="enter your username"
                     value={form.username} 
                      onChange={e => setForm({...form, username: e.target.value })}/></td>
            </tr>
        <tr>
                    <td><label>password</label></td>
                    <td><input  type="password"  placeholder="enter your password"  value={form.password} onChange={e => setForm({ ...form ,password: e.target.value })}/></td>
        </tr>    
        </tbody>  
        </table>
        <div style={{textAlign:'center',marginTop:'10px'}}>
                    <button type='submit'>login</button>
        </div>

        </form>
        </center>
        </div>
        </main>
    )
}


export default Userlogin;