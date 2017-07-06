import React from 'react';
import Radium from 'radium';
import { List, ListItem, Appear } from 'spectacle';

const StyledList = ({ textColor, items }) =>
  <List margin="0px" style={{ width: '100%', height: '75%' }}>
    <ListItem textColor={textColor} textSize="1.5em" padding="0 0 30px 0">
      {items[0]}
    </ListItem>
    {items.slice(1).map(item =>
      <Appear key={item}>
        <ListItem textColor={textColor} textSize="1.5em" padding="0 0 30px 0">
          {item}
        </ListItem>
      </Appear>,
    )}
  </List>;

export default Radium(StyledList);
