import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';

function App() {

  return (
    <Router>
      <div>
      <ToastContainer />
        <Routes>
          <Route exact path="/"Component={LoginPage}/>
          <Route exact path="/sign_up"Component={SignUpPage}/>
          <Route exact path="/home"Component={MainPage}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
