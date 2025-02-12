import {SignUpForm} from './pages/signup';
import {SignInForm} from './pages/signin';
import {NavBar} from './pages/navbar';
import {UserDashboard} from './pages/userpage';
import {AdminDashboard} from './pages/adminpage';
import './styles/app.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {RoleProvider} from './RoleContext';

function App(){
  return(
    <RoleProvider>
      <Router>
        <div className="app-container">
          <NavBar />
          <div className="body">
            <Routes>
              <Route path="/" element={<SignInForm/>}></Route>
              <Route path="/signup" element={<SignUpForm/>}></Route>
              <Route path="/userdashboard" element={<UserDashboard/>}></Route>
              <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </RoleProvider>
  );
}

export default App;