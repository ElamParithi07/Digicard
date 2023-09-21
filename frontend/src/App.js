// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import RecordDash from './components/RecordDash';
import MedRecord from './components/MedRecords';
import Patient from './components/Patient';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/RecordDash' element={<RecordDash/>}></Route>
            <Route path='/MedRecord' element={<MedRecord/>}></Route>
            <Route path='/Patient' element={<Patient/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
