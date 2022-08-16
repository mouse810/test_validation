import './App.css';
// import FirstForm from './components/FirstForm';
// import RegistrationView from './components/RegistrationView'
import SignUpForm from './components/SignUpForm'
import {Routes, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className='App'>
      <h3> hello</h3>
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
