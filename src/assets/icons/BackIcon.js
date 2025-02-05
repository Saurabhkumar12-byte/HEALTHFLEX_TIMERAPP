import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackIcon = ({ color = '#2C3E50', size = 24 }) => (
  <Svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <Path
      d="M15 18L9 12L15 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackIcon;