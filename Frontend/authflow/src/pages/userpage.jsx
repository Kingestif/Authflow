import '../styles/userpage.css';
import pfp from "../assets/pfp.jpg";
import {useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import {useNavigate} from 'react-router-dom';

export function UserDashboard(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    const fetchUserData = async(e) =>{
        try{
            const token = localStorage.getItem("token");
            if(!token) return null;
            
            const response = await fetch(`https://authflow-backend-l73i.onrender.com/api/v1/users`, {
                method: "GET",
                headers: {"authorization" : `Bearer ${token}`},
            });

            const getData = await response.json();

            if(!response.ok){
                throw new Error(getData.message || "Failed to fetch user data");
            }

            setName(getData.data.user.name);
            setEmail(getData.data.user.email);
            setRole(getData.data.user.role);

        }catch(error){
            setError(error.message);
        }

    }

    const handleUpdate = async(e)=>{
        e.preventDefault();

        try{
            const token = localStorage.getItem("token");
            if(!token) return null;

            const decoded = jwtDecode(token); 
            const id = decoded._id; 

            const response = await fetch(`https://authflow-backend-l73i.onrender.com/api/v1/users`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email, role}),
            });

            const getData = await response.json();
            if(!response.ok){
                throw new Error(getData.message || "Update failed");
            }

            setName(getData.data.user.name);
            setEmail(getData.data.user.email);
            setRole(getData.data.user.role);

            setTimeout(() => {
                alert("Profile Updated Successfully"); 
            }, 500);

        }catch(error){
            setError(error.message);
        }

    }

    useEffect(() => {       //updates our variables upon rendering firsttime
        fetchUserData();
    }, []);



    return (
        <div className="userboard-container">
            <div className="board-name">Account Details</div>

            <div className='user-profile'>
                <img src={pfp}/>


                <form onSubmit={handleUpdate}>
                    <div className="user-information">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                        <label htmlFor="email">Email</label>
                        <input id='email' type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <label htmlFor="pass">Password</label>
                        <input id='pass' type="password" defaultValue="*******" disabled />
                        <label htmlFor="role">Role</label>
                        <input id="role" type="text" defaultValue={role} disabled onChange={(e)=> setRole(e.target.value)} />
                        <button type='submit' className="submitbt">Update Profile</button>
                    </div>
                </form>
            </div>

        </div>
    );
}