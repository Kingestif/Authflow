import '../styles/adminpage.css';
import {useState, useEffect} from 'react';

export function AdminDashboard(){
    const [userlist, setUserlist] = useState([]);
    const [error, setError] = useState("");

    

    const userFetch = async() =>{
        try{
            
            const token = localStorage.getItem("token");
            if(!token) return null;
            
            const response = await fetch("http://localhost:3000/api/v1/admin/users", {
                method: "GET",
                headers: {"authorization" : `Bearer ${token}`}
            });
            
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || "Authentication Failed");
            }

            setUserlist(data.data.user);

        }catch(error){
            setError(error.message);
        }
    }

    useEffect(() => {       //updates our list 1st time opening the component
        userFetch();
    }, []);

    return(
        <div className="ListAll">

            <div className= "horizontal">
                <div className="listText"> List of All Users</div>
                <button onClick={userFetch}>Fetch Users</button>
            </div>

            <div className="vertical">
                <ol>
                    {userlist.map((user) => (
                        <li className="user" key={user._id}>{user.name} - {user.email}</li> 
                    ))}
                </ol>
            </div>
        </div>
    )
}