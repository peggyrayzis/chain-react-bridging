import React from 'react';
import { Link, Image } from 'spectacle';
import Radium from 'radium';

const SocialProfiles = ({ twitter, github, medium }) =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <Link href="https://github.com/peggyrayzis">
      <Image style={{ margin: '30px' }} src={github} width="2.4em" />
    </Link>
    <Link href="https://twitter.com/peggyrayzis">
      <Image style={{ margin: '30px' }} src={twitter} width="2.4em" />
    </Link>
    <Link href="https://medium.com/@peggyrayzis">
      <Image style={{ margin: '30px' }} src={medium} width="2.4em" />
    </Link>
  </div>;

export default Radium(SocialProfiles);
