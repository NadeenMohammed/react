import React from 'react';
import { Outlet } from 'react-router-dom';
import  Footer  from '../footer/Footer';
import { Navbar } from '../Navbar/Navbar';
// import  Navbar  from '../NavBar/NavBar';

const MainLayout = () => {
    return <>
      <Navbar></Navbar>
     <Outlet></Outlet>
    <Footer/>
    </>;
}



export default MainLayout;
