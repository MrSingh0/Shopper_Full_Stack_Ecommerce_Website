import React, { useState } from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () =>{

    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    })

    const changeHandler = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const login = async () => {
        console.log("Login Function Is called", formData);
        try {
            const responseData = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then(response => response.json());
    
            if (!responseData.success) {
                throw new Error('Login failed: Wrong password/email');
            }
    
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        } catch (error) {
            alert(error.message);
        }
    };
    

    const signup = async () => {
        console.log("Signup Function Executed", formData);
        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Failed to signup');
            }
    
            const responseData = await response.json();
    
            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/");
            }
        } catch (error) {
            alert(`Signup failed: username already exists`);
        }
    };
    

    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
                    <input name="password" value={formData.password} onChange={(changeHandler)} type="password" placeholder="Password"/>
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Sign Up"? 
                    <p className="loginsingup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>
                    :<p className="loginsingup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Create Here</span></p>
                }
                
                <div className="loginsignup-agree">
                    <input type="checkbox" name=""  id=""/>
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup