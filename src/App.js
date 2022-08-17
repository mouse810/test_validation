import './App.css';
// import FirstForm from './components/FirstForm';
// import RegistrationView from './components/RegistrationView'
import SignUpForm from './pages/Reg-Form'
import LoginForm from './pages/LogIn-Form';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      {/* <FirstForm /> */}
      {/* <RegistrationView/> */}
      <Routes>
        <Route path='/' element={<SignUpForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  );
}
export default App;
