import React from 'react'
import icon from '../../../assets/sampleicon.svg'
import styles from "./Nav.module.scss";


 export const NavItem = ({navLogo, navText}) =>{
    return(
        <div className={styles.NavItem}>
            <img src={navLogo} alt='nav-logo'/>
            <p>{navText}</p>

        </div>
    )
 }


const Nav = () => {
  return (
    <div className={styles.NavContainer}>
        <NavItem
        navLogo={icon}
        navText ="Home"
         />
         <NavItem
         navLogo={icon}
        navText ="Bookings"
         /><NavItem
         navLogo={icon}
         navText ="Clients"
          /><NavItem
          navLogo={icon}
          navText ="Services"
           /><NavItem
           navLogo={icon}
           navText ="Profile"
            />
    </div>
  )
}

export default Nav