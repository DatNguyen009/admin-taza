import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from './pages/Dashboard/Dashboard';
import UserProfile from './pages/UserProfile/UserProfile';
import UserManager from './pages/UserManager/UserManager';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HeaderLeft from './layout/HeaderLeft/HeaderLeft';
import Header from './layout/Header/Header';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='menu' style={{display: 'flex'}}>
            <div className='menu__left' style={{width: "20%",background: "#7386D5"}}>
                <HeaderLeft />
            </div>
            <div className='dashboard' style={{width: "80%"}}>
                <Header />
                <div>
                  <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/UserProfile" element={<UserProfile />}/>
                    <Route path="/UserManager" element={<UserManager />}/>
                    <Route path="/Login" element={<Login />}/>
                    <Route path="/Register" element={<Register />}/>
                  </Routes>
                </div>
            </div>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
