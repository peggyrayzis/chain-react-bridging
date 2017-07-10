import React from 'react';
import Radium from 'radium';
import { Text } from 'spectacle';

const Header = ({ text, style = {}, margin = '1em 0em 1.8em 0em' }) =>
  <Text
    margin={margin}
    textSize="1.5em"
    textColor="grey"
    textFont="Yanone Kaffeesatz"
    style={style}
  >
    {text.toUpperCase()}
  </Text>;

export default Radium(Header);
