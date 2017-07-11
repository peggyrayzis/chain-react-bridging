import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableHeader,
  TableItem,
  TableHeaderItem,
  Text as SpectacleText,
  Link,
} from 'spectacle';
import Radium from 'radium';
import { colors } from './';

const Text = ({ children, textColor = 'secondary', textSize = '.5em' }) =>
  <SpectacleText textSize={textSize} textColor={textColor}>
    {children}
  </SpectacleText>;

const ComparisonTable = () =>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderItem />
        {[
          'UI components',
          'Native modules',
          'Works in an existing RN project',
          'Works for a new OSS library',
          'Swift & Kotlin',
          'Windows',
        ].map(header =>
          <TableHeaderItem
            style={{
              borderBottom: `1px solid ${colors.grey}`,
              borderLeft: `1px solid ${colors.grey}`,
              borderRight: `1px solid ${colors.grey}`,
              borderTop: 'transparent',
              width: '2.7em',
              fontWeight: 'normal',
            }}
            key={header}
          >
            <Text>{header}</Text>
          </TableHeaderItem>,
        )}
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableItem
          padding="1em 0em 1em 0em"
          style={{
            borderBottom: `1px solid ${colors.grey}`,
            borderTop: `1px solid ${colors.grey}`,
            width: '3em',
          }}
        >
          <Link href="https://github.com/peggyrayzis/react-native-create-bridge">
            <Text textColor="tertiary">
              react-native-create-bridge
            </Text>
          </Link>
        </TableItem>
        {['✅', '✅', '✅', '✅', '✅'].map((check, i) =>
          <TableItem
            key={i}
            style={{ border: `1px solid ${colors.grey}`, width: '2em' }}
          >
            <Text textSize="1em">{check}</Text>
          </TableItem>,
        )}
        <TableItem style={{ border: `1px solid ${colors.grey}` }} />
      </TableRow>
      <TableRow>
        <TableItem
          padding="1em 0em 1em 0em"
          style={{
            borderTop: `1px solid ${colors.grey}`,
            borderRight: `1px solid ${colors.grey}`,
            borderBottom: 'transparent',
            width: '3em',
          }}
        >
          <Link href="https://github.com/frostney/react-native-create-library">
            <Text textColor="tertiary">
              react-native-create-library
            </Text>
          </Link>
        </TableItem>
        <TableItem style={styles.item} />
        <TableItem style={styles.item}>
          <Text textSize="1em">✅</Text>
        </TableItem>
        <TableItem style={styles.item} />
        <TableItem style={styles.item}>
          <Text textSize="1em">✅</Text>
        </TableItem>
        <TableItem style={styles.item} />
        <TableItem style={styles.item}>
          <Text textSize="1em">✅</Text>
        </TableItem>
      </TableRow>
    </TableBody>
  </Table>;

const styles = {
  item: {
    borderTop: `1px solid #848b95`,
    borderLeft: `1px solid #848b95`,
    borderRight: `1px solid #848b95`,
    borderBottom: 'transparent',
    width: '2em',
  },
};

export default Radium(ComparisonTable);
