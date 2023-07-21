import React from 'react';

const Button = ({ children, color, size, ...rest }) => {
  const buttonStyles = {
    backgroundColor: color,
    fontFamily: 'Inter',
    height: '48px',
    fontSize: size === 'small' ? '14px' : size === 'large' ? '20px' : '16px',
    padding: size === 'small' ? '0 auto' : size === 'large' ? '12px 24px' : '8px 16px',
    borderRadius: '8px',
    border: 'none',
    color: '#D9D9D9',
    cursor: 'pointer',
    width: '100%'
  };

  return (
    <button style={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
