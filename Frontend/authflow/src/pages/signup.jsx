import '../styles/signup.css';

export function SignUpForm(){
    return(
        <div className = "signup-container">
            <div className="signup-text">Sign up to your account</div>
            
            <form onsubmit="">
                <label for="fname">Name</label><br></br>
                <input type="text" id="fname" name="fname" placeholder="Enter your name" className="input"/><br/><br/>

                <label for="useremail">Email</label><br></br>
                <input type="email" id="useremail" name="email" placeholder= "Enter your email" className="input"/><br/><br/>

                <label for="password">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder= "Enter password" className="input"/><br/><br/>

                <label for="confpass">Confirm password</label><br></br>
                <input type="password" id="confpass" name="confpass" placeholder = "Confirm password" className="input"/><br/><br/>
                
                <input type="submit" value="Sign Up" className="submit"/>
            </form>

            <div className="hvaccount">Already have an account? <a href="">Sign In</a></div>

        </div>
    ) 
}