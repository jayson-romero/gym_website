import React from 'react';
import './App.css'
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import  Home  from './pages/Home';
import  ExerciseDetails  from './pages/ExerciseDetails';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import styles from './style'


function App() {


  return (
    <Box className={`${styles.paddingX} App`}>
        <Navbar className={`${styles.padding} ${styles.boxWidth}`}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
        </Routes>
        <Footer/>
    </Box>

  )
}

export default App
