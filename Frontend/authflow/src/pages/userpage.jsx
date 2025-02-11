import '../styles/userpage.css';
import pfp from "../assets/pfp.jpg";

export function UserDashboard(){
    return (
        <div className="userboard-container">
            <div className="board-name">Account Details</div>

            <div className='user-profile'>
                <img src={pfp}/>


                <form action="" method="POST">
                    <div className="user-information">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" defaultValue="Name"/>
                        <label htmlFor="email">Email</label>
                        <input id='email' type="text" defaultValue="Email"  />
                        <label htmlFor="pass">Password</label>
                        <input id='pass' type="password" defaultValue="*******" disabled/>
                        <label htmlFor="role">Role</label>
                        <input id="role" type="text" defaultValue="Role"  />
                        <button type='submit' className="submitbt">Update Profile</button>
                    </div>
                </form>
            </div>

        </div>
    );
}