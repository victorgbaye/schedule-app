import React from 'react'
import styles from "./Signup.module.scss";
import Button from '../../components/UI/Button/Button'
import InputField from '../../components/UI/Input/Inputs'
const SignupSlide2 = ({onNext}) => {
    const handleNext = () => {
        onNext({  });
      }
  return (
    <>
        <main className={styles.SignUpContainer}>
            <header className={styles.SignupHeaderContainer}>
                <h1>LOGO</h1>
                <p className={styles.SignupHeaderText}>Just a few steps and you're set</p>
            </header>
            <section className={styles.SignupInputContainer}>
                <InputField
                type="email"
                label="Email address"
                placeholder="Type email here"

                />
                <InputField
                type="password"
                label="Password"
                placeholder="Type Password here"

                />
                <InputField
                type="password"
                label="Confirm password"
                placeholder="Type password here"

                />
                <InputField
                type="text"
                label="Mobile number"
                placeholder="e.g 0108938393"

                />
            </section>
             <Button
            color='#FFC857'
            size='small'
            onClick={handleNext}
            >
                Continue
             </Button>
        </main>
    </>
  )
}

export default SignupSlide2