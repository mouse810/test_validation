import './App.css';
// import RegistrationView from './components/RegistrationView'
import SignUpForm from './pages/Reg-Form'
import LoginForm from './pages/LogIn-Form';
import { Routes, Route } from 'react-router-dom'
import firebase from 'firebase/compat/app';
import {firebaseConfig} from "./Firebase/firebaseconfig"


firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className='App'>
      {/* <RegistrationView/> */}
      <Routes>
        <Route path='/' element={<SignUpForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  );
}
export default App;
