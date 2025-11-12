import React from 'react';
import { PRIMARY_COLOR, ACCENT_COLOR } from '../../constants/colors';

const AccentLink = ({ children, className = '', ...props }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <a
      className={`px-6 py-3 border text-lg font-semibold rounded-xl transition duration-300 ${className}`}
      style={{
        borderColor: PRIMARY_COLOR,
        color: PRIMARY_COLOR,
        backgroundColor: isHovered ? ACCENT_COLOR : 'transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </a>
  );
};

export default AccentLink;
