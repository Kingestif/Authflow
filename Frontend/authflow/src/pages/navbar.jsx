import '../styles/navbar.css'

export function NavBar(){
    return (
        <div className="header">
            <div id="logo" className="headerLogo">Logo</div>
            
            <div className="lastones">
                <span>Person</span>
                <a href="/" className="logout">Logout</a>
            </div>
        </div>
    );
}