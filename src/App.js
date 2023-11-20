import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { Outlet, Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import KartPage from './pages/KartPage';

function App() {
  
  const Layout = () => {
    return (
      <div>
        <Nav />
        <Outlet />
      </div>
    )
  }

  return (
    <div className='app'>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <MainPage /> } />
            <Route path='/details' element={ <DetailPage /> } />
            <Route path='/kart' element={ <KartPage /> } />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
