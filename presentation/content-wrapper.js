import React from 'react';
import Radium from 'radium';

const ContentWrapper = ({ children, styles }) =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      height: '100%',
      ...styles,
    }}
  >
    {children}
  </div>;

export default Radium(ContentWrapper);
