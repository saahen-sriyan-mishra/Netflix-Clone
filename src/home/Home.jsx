import React from 'react'
import "./home.scss"
import "./home.scss"
import { AcUnit } from '@material-ui/icons';
import pfp from '../Assets/pfp.png'; 
import Navbar from '../Components/navbar/Navbar';
import Featured from '../Components/featured/Featured';
import List from '../Components/list/List';

const Home = () => {
  return (
    <div className = 'home'>

        {/** Works only after importing of "yarn add @material-ui/icons material-ui/core" in bash */}
        <Navbar/>


        
        <Featured/>
        {/* Type of featured.jsx is set here so it shows */}

        {/* <Featured type = 'movie'/> */}
        {/*<Featured type = 'ANYRTHING_ELSE'/>*/}


        <List/>
        <List/>
        <List/>
        <List/>


         </div>
  );
};

export default Home;
