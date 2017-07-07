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
      textSize="1.5em"
      lineHeight={1.4}
      padding="0px 0px 40px 0px"
    >
      {platform}
    </Text>
    <StyledList
      textSize="1.3em"
      textColor="tertiary"
      appear={false}
      items={languages}
    />
  </div>;

export default Radium(LanguageList);
