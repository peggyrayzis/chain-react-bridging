import React from 'react';
import Radium from 'radium';
import { Text, Appear } from 'spectacle';

const StyledSentence = ({
  top = `Hi! 🙋 I'm Peggy.`,
  bottom,
  textSizeTop = '2.8em',
  textSizeBottom = '1.8em',
  appear = true,
}) =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}
  >
    <Text
      textColor="tertiary"
      margin="0px"
      textAlign="left"
      textFont="Yanone Kaffeesatz"
      textSize={textSizeTop}
      lineHeight={1.3}
    >
      {top.toUpperCase()}
    </Text>
    {appear
      ? <Appear>
          <Text
            textColor="secondary"
            margin="0px"
            textAlign="left"
            textFont="Yanone Kaffeesatz"
            textSize={textSizeBottom}
            lineHeight={1.6}
          >
            {bottom.toUpperCase()}
          </Text>
        </Appear>
      : <Text
          textColor="secondary"
          margin="0px"
          textAlign="left"
          textFont="Yanone Kaffeesatz"
          textSize={textSizeBottom}
          lineHeight={1.6}
        >
          {bottom.toUpperCase()}
        </Text>}

  </div>;

export default Radium(StyledSentence);
