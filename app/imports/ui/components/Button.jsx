import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
// eslint-disable-next-line react/prop-types
  children, // eslint-disable-next-line react/prop-types
  type, // eslint-disable-next-line react/prop-types
  onClick, // eslint-disable-next-line react/prop-types
  buttonStyle, // eslint-disable-next-line react/prop-types
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/signin" className="btn-mobile">
      <Button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    </Link>
  );
};

export default Button;
