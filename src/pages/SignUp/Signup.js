import React, { useState } from 'react';
import SignupSlide1 from './SignupSlide1';
import SignupSlide2 from './SignupSlide2'
import SignupSlide3 from './SignupSlide3';
import SignupSlide4 from './SignupSlide4';

const Signup = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = (data) => {
        setCurrentPage(currentPage + 1);
        setFormData({ ...formData, ...data });
      };
    
      const handleReset = () => {
        setCurrentPage(1);
        setFormData({});
      };
    
      let currentPageComponent;
      switch (currentPage) {
        case 1:
          currentPageComponent = <SignupSlide1 onNext={handleNext} />;
          break;
        case 2:
          currentPageComponent = <SignupSlide2 onNext={handleNext} />;
          break;
        case 3:
          currentPageComponent = <SignupSlide3 onNext={handleNext} />;
          break;
        case 4:
          currentPageComponent = <SignupSlide4 onNext={handleNext} />;
          break;
        default:
          break;
      }
  return (
    <>
        {/* <SignupSlide1/> */}
        {currentPageComponent}
        {/* <SignupSlide2/> */}
    </>
  )
}

export default Signup