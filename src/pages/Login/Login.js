import React from 'react'
import styles from "./Login.module.scss";
import Button from '../../components/UI/Button/Button'
import InputField from '../../components/UI/Input/Inputs'

const Login = () => {
  return (
    <main className={styles.LoginContainer}> 
    <header className={styles.LoginHeaderContainer}>
        <h1>LOGO</h1>
        <p className={styles.LoginHeaderText}>Welcome back!</p>
    </header>
    <section className={styles.LoginInputContainer}>
        <InputField
        type="text"
        label="Email address"
        placeholder="Type email here"

        />
        <InputField
        type="text"
        label="Password"
        placeholder="Type password here"

        />
    </section>
        <Button
        color='#7C2C89'
        size='small'
        >
            Continue
        </Button>

    </main>
  )
}

export default Login