import React from 'react'
import Nav from '../Navigation/Nav'
import styles from "./Sidebar.module.scss";
import logout from '../../../assets/Log Out.svg'

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
        <section className={styles.sidebarhead}>
            <header>
                <p>Business name</p>
            </header>
            <Nav/>
        </section>
        <main className={styles.sidebarMain}>
            <div>
                <div className={styles.logoutsec}>
                    <img src={logout} alt='logout icon'/>
                    <p>Log Out</p>
                </div>
                <section>
                    <div>
                    </div>
                    <div className={styles.sidebarusername}>
                        <p>Juliet Johnson<br></br>Role</p>
                    </div>
                </section>
            </div>
        </main>
    </div>
  )
}
export default Sidebar