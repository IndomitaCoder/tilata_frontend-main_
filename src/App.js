import logo from './logo.svg';
import './App.css';
import { Button } from '@material-tailwind/react';
import Layout from './components/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App flex w-full text-sm">
        {/* <ScrollToTop/> */}
        <Layout/>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard" replace />}/>
          <Route path='/dashboard' element={<Dashboard/>} />
          {/* <Route path='/register' element={<Register/>} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/category" element={<Category />}/>
          <Route path="/item" element={<Item />}/>
          <Route path="/orders" element={<Order />}/>
          <Route path="/setting" element={<Setting />}/>
          <Route path="/customers" element={<Customer />}/> */}
        </Routes>
      </div>
  );
}

export default App;
 