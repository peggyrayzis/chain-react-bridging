import React from 'react';
import { VictoryPie } from 'victory-pie';
import { colors } from './';

const Pie = ({ showFullPie }) =>
  <VictoryPie
    data={[{ x: 'JavaScript', y: 77 }, { x: 'Native', y: 23 }]}
    padAngle={2}
    height={240}
    width={300}
    padding={10}
    startAngle={140}
    innerRadius={3}
    cornerRadius={5}
    endAngle={360 + 140}
    labels={d => ''}
    style={{
      data: {
        fill: d =>
          d.x === 'JavaScript'
            ? colors.tertiary
            : showFullPie ? colors.quartenary : 'transparent',
        labels: { fill: 'transparent' },
      },
    }}
  />;

export default Pie;
