import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const ChatReportIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="2" width="14" height="18" rx="2" ry="2" fill="#E6F0FB" stroke="#4A90E2" strokeWidth="1.5" />
    <Path d="M6 6H13" stroke="#4A90E2" strokeWidth="1.2" strokeLinecap="round" />
    <Path d="M6 9H13" stroke="#4A90E2" strokeWidth="1.2" strokeLinecap="round" />
    <Path d="M6 12H10" stroke="#4A90E2" strokeWidth="1.2" strokeLinecap="round" />
    <Path d="M16 14C18.2 14 20 15.79 20 18C20 18.78 19.79 19.51 19.43 20.13C19.35 20.28 19.36 20.46 19.47 20.6L20 21.25C20.22 21.52 19.91 21.91 19.6 21.75L18.6 21.2C18.41 21.1 18.18 21.09 18 21.18C17.39 21.5 16.71 21.7 16 21.7C13.79 21.7 12 19.91 12 17.7C12 15.49 13.79 14 16 14Z" fill="#4A90E2" />
    <Path d="M15 17.8L16.2 19.1L18.5 16.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ChatReportIcon;
