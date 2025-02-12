import '../styles/signin.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { useRole } from '../RoleContext';

export function SignInForm(){
    const navigate = useNavigate();
    const { setRole } = useRole();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = async(e) =>{
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:3000/api/v1/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email, password}),
            });
    
            
            const data = await response.json();
            
            if(!response.ok){
                throw new Error(data.message || "Login Failed");
            }

            localStorage.setItem("token", data.token);

            if(!data.token) return null;

            //get the role from the token
            const getUser = await fetch("http://localhost:3000/api/v1/users", {
                method: "GET",
                headers: {"authorization" : `Bearer ${data.token}`}
            });

            const getData = await getUser.json();

            if(!getUser.ok){
                throw new Error(getData.message || "Authentication failed");
            }

            const role = getData.data.user.role;
            setRole(role);

            if(role === 'user'){
                navigate('/userdashboard');
            }else{
                navigate('/admindashboard');
            }

            setTimeout(() => {
                alert("Logged in successfully"); 
            }, 500);

        }catch(error){
            setError(error.message);
        }
    }

    return(
        <div className = "signin-container">
            <div className="signin-text">Sign in to your account</div>
            
            <form onSubmit={handleSignIn}>
                <label htmlFor="useremail">Email</label><br></br>
                <input type="email" id="useremail" name="email" placeholder= "Enter your email" className="input" onChange={(e)=> setEmail(e.target.value)}/><br/><br/>

                <label htmlFor="password">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder= "Enter password" className="input" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

                <input type="submit" value="Sign in" className="submit"/>
            </form>

            <div className="hvaccount">Don't have an account? <a href="/signup">Sign Up</a></div>

        </div>
    ) 
}