import React from 'react'
import styles from "./Signup.module.scss";
import Button from '../../components/UI/Button/Button'
import InputField from '../../components/UI/Input/Inputs'
const SignupSlide3 = ({onNext}) => {
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
                type="text"
                label="Brand name"
                placeholder="e.g annycakes, tundesalon"

                />
                <InputField
                type="text"
                label="Industry"
                placeholder="Select industry"

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

export default SignupSlide3