import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const TimeIcon = ({ size = 24, color = '#6C63FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
      fill={color}
    />
  </Svg>
);

export const TimerIcon = ({ size = 24, color = '#6C63FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 1H9V3H15V1ZM11 14H13V8H11V14ZM19.03 7.39L20.45 5.97C20.02 5.46 19.55 4.98 19.04 4.56L17.62 5.98C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13C3 17.97 7.02 22 12 22C16.98 22 21 17.97 21 13C21 10.88 20.26 8.93 19.03 7.39ZM12 20C8.13 20 5 16.87 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13C19 16.87 15.87 20 12 20Z"
      fill={color}
    />
  </Svg>
);

export const FitnessIcon = ({ size = 24, color = '#6C63FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z"
      fill={color}
    />
  </Svg>
);

export const BookIcon = ({ size = 24, color = '#6C63FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z"
      fill={color}
    />
  </Svg>
);

export const CafeIcon = ({ size = 24, color = '#6C63FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 3H4V10C4 12.21 5.79 14 8 14H14C16.21 14 18 12.21 18 10V5H20C21.1 5 22 4.1 22 3C22 1.9 21.1 1 20 1ZM18 10C18 11.1 17.1 12 16 12H8C6.9 12 6 11.1 6 10V5H18V10ZM4 16H20V19C20 20.1 19.1 21 18 21H6C4.9 21 4 20.1 4 19V16Z"
      fill={color}
    />
  </Svg>
);

export const BulbIcon = ({ size = 24, color = '#6C63FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2ZM14 13.7V16H10V13.7C8.48 12.63 7 11.53 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.53 15.52 12.63 14 13.7Z"
      fill={color}
    />
  </Svg>
);

export const AddCircleIcon = ({ size = 24, color = '#FFFFFF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
      fill={color}
    />
  </Svg>
);

export const SearchIcon = ({ size = 24, color = '#6C63FF' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.7 14.3C14.52 15.49 12.91 16 11 16C7.69 16 5 13.31 5 10C5 6.69 7.69 4 11 4C14.31 4 17 6.69 17 10C17 11.91 16.49 13.52 15.3 14.7L20 19.4L18.6 20.8L15.7 14.3ZM11 14C13.21 14 15 12.21 15 10C15 7.79 13.21 6 11 6C8.79 6 7 7.79 7 10C7 12.21 8.79 14 11 14Z"
        fill={color}
      />
    </Svg>
  );

  
  export const HeartIcon = ({ size = 24, color = '#6C63FF' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 11.72 5.09C12.53 3.81 14.2 3 15.94 3C19.02 3 21.44 5.42 21.44 8.5C21.44 12.28 18.04 15.36 12 20.04L12 21.35Z"
        fill={color}
      />
    </Svg>
  );

  
  export const StarIcon = ({ size = 24, color = '#6C63FF' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
        fill={color}
      />
    </Svg>
  );

  
  export const HomeIcon = ({ size = 24, color = '#6C63FF' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 3L4 9V20H9V14H15V20H20V9L12 3Z"
        fill={color}
      />
    </Svg>
  );

  
  export const NotificationIcon = ({ size = 24, color = '#6C63FF' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V10C18 6.69 16.27 4.09 14 3.13V2C14 1.45 13.55 1 13 1C12.45 1 12 1.45 12 2V3.13C9.73 4.09 8 6.69 8 10V16L6 18V19H18V18L16 16H18Z"
        fill={color}
      />
    </Svg>
  );
  

  export const MeditationIcon = ({ size = 24, color = '#6C63FF' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C10.48 2 9.13 3.12 9.03 4.72C6.96 5.51 5.4 7.98 5.4 10.45C5.4 12.73 6.96 14.92 9.03 15.72C9.13 17.32 10.48 18.44 12 18.44C13.52 18.44 14.87 17.32 14.97 15.72C17.04 14.92 18.6 12.73 18.6 10.45C18.6 7.98 17.04 5.51 14.97 4.72C14.87 3.12 13.52 2 12 2ZM12 16.44C11.02 16.44 10.14 15.95 9.87 15.08C9.52 13.83 10.68 12.64 12 12.64C13.32 12.64 14.48 13.83 14.13 15.08C13.86 15.95 13.02 16.44 12 16.44ZM12 4.44C10.79 4.44 9.77 5.6 9.54 6.92C9.44 7.33 9.02 7.56 8.61 7.46C8.2 7.36 7.97 6.94 8.07 6.53C8.27 5.16 9.48 4.44 12 4.44C14.52 4.44 15.73 5.16 15.93 6.53C16.03 6.94 15.8 7.36 15.39 7.46C14.98 7.56 14.56 7.33 14.46 6.92C14.23 5.6 13.21 4.44 12 4.44Z"
        fill={color}
      />
    </Svg>
  );

  
  export const SleepIcon = ({ size = 24, color = '#6C63FF' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13.5 11H16L12 6L8 11H10.5V17H13.5V11Z"
        fill={color}
      />
    </Svg>
  );

  
  export const PomodoroIcon = ({ size = 24, color = '#6C63FF' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C10.34 16 9 14.66 9 13H15C15 14.66 13.66 16 12 16ZM11 9H13V12H11V9Z"
        fill={color}
      />
    </Svg>
  );
  