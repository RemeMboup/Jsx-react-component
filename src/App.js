//import logo from './logo.svg';
//import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import Fullname from './Component/Profile/FullName'
import Address from './Component/Profile/Address' 
import './App.css'
console.log("ProfilePhoto")
function App() {
  return (
    <div className="App">
      <div>
        <ProfilePhoto />
        <Fullname />
        <Address />
      </div>
    </div>
    
    
  );
}

export default App;
