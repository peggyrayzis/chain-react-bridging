import React from 'react';
import { Text } from 'spectacle';
import Radium from 'radium';

import StyledList from './list';

const LanguageList = ({ platform, languages }) =>
  <div
    style={{
      flex: 2,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 40px 0px 40px',
    }}
  >
    <Text
      margin="0px"
      textColor="secondary"
      textSize="1.8em"
      lineHeight={1.4}
      padding="0px 0px 40px 0px"
    >
      {platform}
    </Text>
    {languages.map(language =>
      <Text
        key={language}
        margin="0px"
        textColor="tertiary"
        textSize="1.5em"
        lineHeight={1.2}
        padding="0px 0px 40px 0px"
      >
        {language}
      </Text>,
    )}
  </div>;

export default Radium(LanguageList);
