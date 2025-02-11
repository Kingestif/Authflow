import '../styles/signin.css';

export function SignInForm(){
    return(
        <div className = "signin-container">
            <div className="signin-text">Sign in to your account</div>
            
            <form onsubmit="">
                <label for="useremail">Email</label><br></br>
                <input type="email" id="useremail" name="email" placeholder= "Enter your email" className="input"/><br/><br/>

                <label for="password">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder= "Enter password" className="input"/><br/><br/>

                <input type="submit" value="Sign in" className="submit"/>
            </form>

            <div className="hvaccount">Don't have an account? <a href="">Sign Up</a></div>

        </div>
    ) 
}