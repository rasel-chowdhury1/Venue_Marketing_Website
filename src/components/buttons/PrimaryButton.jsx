import React from 'react';
import { PRIMARY_COLOR } from '../../constants/colors';


const PrimaryButton = ({ children, className = '', ...props }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      className={`px-6 py-3 rounded-xl font-semibold ${className}`}
      style={{ backgroundColor: hover ? '#054546' : 'white', color: PRIMARY_COLOR }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >{children}</button>
  );
};

export default PrimaryButton;
