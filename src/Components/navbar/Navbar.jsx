import React, { useState } from 'react'
import "./Navbar.scss"
import logo from '../../Assets/logo.png'; 
import pfp from '../../Assets/pfp.png'; 
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
const Navbar = () => {

  //setting function to toggle scroll
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = ()  =>
  {
    if (window.scrollY == 0)
    {
      setIsScrolled(false)
    }

    else
    {
      setIsScrolled(true)
    }
  return () => {window.onscroll == null;}
  
  }


    console.log(isScrolled);


    let navbarClass = 'navbar'
    if (isScrolled == true)
      navbarClass = 'navbar black'


  return (
    <div className={navbarClass}>
        <div className="container">
            <div className="left">

            <img
            src = {logo}
            alt ="NETFLIX_LOGO"
            />

            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
            </div>
            


            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src={pfp} alt="Profile_Photo" />



                <div className="profile">
                <ArrowDropDown className="icon"/>

                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>


                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
