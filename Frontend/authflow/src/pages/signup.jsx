import '../styles/signup.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUpForm(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("https://authflow-backend-l73i.onrender.com/api/v1/users/signup", { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, passwordConfirm }),
            });

            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || "Signup Failed");
            }

            localStorage.setItem("token", data.token);
            navigate('/userdashboard');
            setTimeout(() => {
                alert("Signed up successfully"); 
            }, 500);

        }catch(error){
            setError(error.message)
        }
    }

    return(
        <div className = "signup-container">
            <div className="signup-text">Sign up to your account</div>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Name</label><br></br>
                <input type="text" id="fname" name="fname" placeholder="Enter your name" className="input" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>

                <label htmlFor="useremail">Email</label><br></br>
                <input type="email" id="useremail" name="email" placeholder= "Enter your email" className="input" value={email} onChange={(e)=> setEmail(e.target.value)}/><br/><br/>

                <label htmlFor="password">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder= "Enter password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

                <label htmlFor="confpass">Confirm password</label><br></br>
                <input type="password" id="confpass" name="confpass" placeholder = "Confirm password" className="input" value={passwordConfirm} onChange= {(e)=>setPasswordConfirm(e.target.value)}/><br/><br/>
                
                <input type="submit" value="Sign Up" className="submit" />
            </form>

            <div className="hvaccount">Already have an account? <a href="/">Sign In</a></div>

        </div>
    ) 
}