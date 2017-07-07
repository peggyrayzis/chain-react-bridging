import React from 'react';
import Radium from 'radium';
import { List, ListItem, Appear } from 'spectacle';

const StyledList = ({
  textColor,
  textSize = '1.5em',
  items,
  appear = true,
  style,
}) =>
  <List margin="0px" style={{ width: '100%', height: '75%', ...style }}>
    <ListItem textColor={textColor} textSize={textSize} padding="0 0 30px 0">
      {items[0]}
    </ListItem>
    {items.slice(1).map(
      item =>
        appear
          ? <Appear key={item}>
              <ListItem
                textColor={textColor}
                textSize={textSize}
                padding="0 0 30px 0"
              >
                {item}
              </ListItem>
            </Appear>
          : <ListItem
              key={item}
              textColor={textColor}
              textSize={textSize}
              padding="0 0 30px 0"
            >
              {item}
            </ListItem>,
    )}
  </List>;

export default Radium(StyledList);
