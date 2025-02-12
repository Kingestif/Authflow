import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom';
import {useRole} from '../RoleContext';

export function NavBar(){
    const navigate = useNavigate();
    const {role} = useRole();

    
    const handleLogout = async() =>{
        localStorage.removeItem("token");
        navigate('/');

        setTimeout(() => {
            alert("Logged out successfully"); 
        }, 500);
    }

    return (
        <div className="header">
            <div id="logo" className="headerLogo">Logo</div>
            
            <div className="lastones">
                <span>{role? role+" ▼" : "Person "+"▼"}</span>
                <a href="" className="logout" onClick={handleLogout}>Logout</a>
            </div>
        </div>
    );
}