import React from 'react';

import {
  Appear,
  CodePane,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Link,
  Slide,
  Text,
} from 'spectacle';

import Header from './header';
import ContentWrapper from './content-wrapper';
import StyledSentence from './sentence';
import SocialProfiles from './social-profiles';
import Pie from './pie';
import StyledList from './list';
import LanguageList from './language-list';

import codeSamples from './code-samples';
import images from './images';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

preloader(images);

const colors = {
  primary: '#F3F4F4',
  secondary: '#2a292f',
  tertiary: '#2eacb3',
  quartenary: '#fec941',
  grey: '#848b95',
};

const theme = createTheme(colors, {
  primary: { name: 'Roboto', googleFont: true, styles: ['300'] },
  secondary: { name: 'Yanone Kaffeesatz', googleFont: true, styles: ['300'] },
  tertiary: 'Helvetica',
});

const slideProps = {
  align: 'flex-start flex-start',
  transition: ['fade'],
  bgColor: 'primary',
  maxWidth: '90%',
  maxHeight: '90%',
  padding: '0px',
  margin: '0px',
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        progress="none"
        controls={false}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          maxWidth="100%"
          maxHeight="100%"
          align="flex-start flex-start"
          transition={['fade']}
          bgImage={images.rotterdamBridge}
        >
          <ContentWrapper>
            <Text
              textColor="secondary"
              textFont="Yanone Kaffeesatz"
              textSize="2.2em"
              padding="0px"
              margin="0px"
              textAlign="left"
              lineHeight={1.1}
            >
              BREAKING DOWN BRIDGING
            </Text>
            <Text
              textColor="secondary"
              textFont="Yanone Kaffeesatz"
              textSize="2.2em"
              padding="0px"
              margin="0px"
              textAlign="left"
              lineHeight={1.1}
            >
              IN REACT NATIVE
            </Text>
            <Text
              textColor="grey"
              textFont="Yanone Kaffeesatz"
              textSize="1.2em"
              padding="0px"
              margin="0px"
              textAlign="left"
              lineHeight={1.4}
            >
              @PEGGYRAYZIS
            </Text>
          </ContentWrapper>
        </Slide>
        <Slide
          align="flex-end center"
          transition={['fade']}
          bgImage={images.peggy}
          maxWidth="90%"
          maxHeight="90%"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Text
                textColor="primary"
                textFont="Yanone Kaffeesatz"
                textSize="2.7em"
                margin="0px"
                lineHeight={1.2}
              >
                <p style={{ textShadow: '1px 1px 2px #2a292f', margin: '0px' }}>
                  @PEGGYRAYZIS
                </p>
              </Text>
              <Text
                textColor="primary"
                textFont="Yanone Kaffeesatz"
                textSize="1.5em"
                margin="0px"
                lineHeight={1.2}
              >
                <p style={{ textShadow: '1px 1px 2px #2a292f', margin: '0px' }}>
                  SOFTWARE ENGINEER
                </p>
              </Text>
              <Image src={images.mls} width="2.7em" margin="15px 0px 0px 0px" />
            </div>
          </div>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.helixBridge}
          bgDarken={0.6}
          maxWidth="90%"
          maxHeight="90%"
        >
          <Text
            textFont="Yanone Kaffeesatz"
            lineHeight={1.4}
            textColor="primary"
            textSize="2.4em"
          >
            <p style={{ textShadow: '1px 1px 2px #2a292f' }}>
              {`Bridging in React Native:`.toUpperCase()}
              <br />
              {`How you communicate between`.toUpperCase()}
              <br />
              {`JavaScript & native code`.toUpperCase()}
            </p>
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          maxHeight="90%"
          maxWidth="90%"
          padding="0px"
          margin="0px"
        >
          <Image width="88%" src={images.bridgeDiagram1} />
        </Slide>
        <Slide
          transition={['fade']}
          maxHeight="90%"
          maxWidth="90%"
          padding="0px"
          margin="0px"
        >
          <Image width="88%" src={images.bridgeDiagram2} />
        </Slide>
        <Slide
          align="flex-start center"
          transition={['fade']}
          bgColor="primary"
          maxWidth="90%"
        >
          <StyledSentence
            top="Bridging won't be part of your daily workflow"
            textSizeTop="3em"
            bottom="but it's useful to know how it works! 💡"
            textSizeBottom="1.3em"
          />
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header text="language breakdown for MLS prototype" />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div style={{ flex: 1 }}>
                <Pie showFullPie={false} />
              </div>
              <div style={{ flex: 1 }}>
                <Text margin="0px" textColor="secondary" textSize="2em">
                  JavaScript: 77%
                </Text>
              </div>
            </div>
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header text="language breakdown for MLS prototype" />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div style={{ flex: 1 }}>
                <Pie showFullPie />
              </div>
              <div style={{ flex: 1 }}>
                <Text margin="0px" textColor="secondary" textSize="2em">
                  What about<br />
                  the other 23%?
                </Text>
              </div>
            </div>
          </ContentWrapper>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.suspensionBridge}
          bgDarken={0.3}
          maxWidth="90%"
          maxHeight="90%"
        >
          <Text
            textFont="Yanone Kaffeesatz"
            lineHeight={1.4}
            textColor="primary"
            textSize="2.4em"
          >
            <p style={{ textShadow: '1px 1px 2px #2a292f' }}>
              {`If you're working with native code, you'll need to write a bridge!`.toUpperCase()}
            </p>
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header text="you will need a bridge if..." />
            <StyledList
              textColor={colors.tertiary}
              items={[
                'You need to integrate a third-party SDK',
                'High performance is crucial',
                `You're building a brownfield app`,
                'You need access to a platform API',
              ]}
            />
          </ContentWrapper>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.brooklynBridge}
          bgDarken={0.4}
          maxWidth="90%"
          maxHeight="90%"
        >
          <Text
            textFont="Yanone Kaffeesatz"
            lineHeight={1.4}
            textColor="primary"
            textSize="2.4em"
          >
            <p style={{ textShadow: '1px 1px 2px #2a292f' }}>
              {`Understanding React Native internals will help you learn bridging faster.`.toUpperCase()}
            </p>
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="demystifying react native internals"
              margin="1em 0em 1em 0em"
            />
            <Image src={images.threads} width="72%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="demystifying react native internals"
              margin="1em 0em 1em 0em"
            />
            <Link href="https://github.com/facebook/react-native/blob/master/Libraries/BatchedBridge/NativeModules.js#L20">
              <Text
                margin="0px"
                textColor="secondary"
                textSize="1.3em"
                lineHeight={1.4}
                padding="0px 0px 40px 0px"
              >
                JS knows about your native modules at runtime:
              </Text>
            </Link>
            <CodePane
              textSize=".75em"
              lang="jsx"
              padding="0px"
              source={codeSamples.nativeModuleConfig}
            />
            <Text
              margin="0px"
              textColor="secondary"
              textSize="1.3em"
              lineHeight={1.4}
              padding="40px 0px 40px 0px"
            >
              * Remember this for later 😀
            </Text>
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="demystifying react native internals"
              margin="1em 0em 1em 0em"
            />
            <Image src={images.rnArchitecture1} width="74%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="demystifying react native internals"
              margin="1em 0em 1em 0em"
            />
            <Image src={images.rnArchitecture2} width="74%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="demystifying react native internals"
              margin="1em 0em 1em 0em"
            />
            <Image src={images.rnArchitecture3} width="74%" />
          </ContentWrapper>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.congestion}
          bgDarken={0.65}
          maxWidth="90%"
          maxHeight="90%"
        >
          <Text
            textFont="Yanone Kaffeesatz"
            lineHeight={1.4}
            textColor="primary"
            textSize="2.4em"
          >
            <p style={{ textShadow: '1px 1px 2px #2a292f' }}>
              {`MessageQueue congestion will slow down your React Native app.`.toUpperCase()}
            </p>
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header text="how to prevent messagequeue congestion" />
            <StyledList
              textColor={colors.tertiary}
              items={[
                'Limit passes over the bridge',
                'Keep your data flat',
                `Write business logic in either native or JS`,
                'Debug with profiling tools & logging',
              ]}
            />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper>
            <Header text="inspecting the react native messagequeue" />
            <div
              style={{
                display: 'flex',
                marginTop: '20px',
                alignItems: 'flex-start',
                width: '100%',
              }}
            >
              <div style={{ flex: 1 }}>
                <CodePane
                  textSize="1em"
                  lang="jsx"
                  padding="0px"
                  source={codeSamples.bridgeMessage}
                />
              </div>
              <div style={{ flex: 1 }}>
                <Text margin="0px" textColor="tertiary" textSize="1.7em">
                  Every message passed<br />
                  over the bridge<br />
                  has this type signature!
                </Text>
              </div>
            </div>
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header
              text="inspecting the react native messagequeue"
              margin="1em 0em 1.5em 0em"
            />
            <Link href="https://github.com/facebook/react-native/blob/master/Libraries/BatchedBridge/MessageQueue.js">
              <Text margin="0px" textColor="secondary" textSize="1em">
                Log bridge messages with MessageQueue.spy() 🔎
              </Text>
            </Link>
            <div
              style={{
                display: 'flex',
                marginTop: '40px',
                alignItems: 'flex-start',
                width: '100%',
              }}
            >
              <div style={{ flex: 1 }}>
                <CodePane
                  textSize=".5em"
                  lang="javascript"
                  padding="0px"
                  source={codeSamples.bridgeLogs}
                />
              </div>
            </div>
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header text="inspecting the react native messagequeue" />
            <div
              style={{
                display: 'flex',
                marginTop: '40px',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div style={{ flex: 1 }}>
                <Image src={images.snoopy} width="70%" height="70%" />
              </div>
              <div style={{ flex: 1 }}>
                <Link href="https://github.com/jondot/rn-snoopy">
                  <Text margin="0px" textColor="tertiary" textSize="1.7em">
                    Treat your MessageQueue<br />
                    data as a stream<br />
                    with
                    {' '}
                    <span style={{ color: colors.secondary }}>
                      rn-snoopy
                    </span>
                  </Text>
                </Link>
              </div>
            </div>
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%', flex: 2 }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header
              text="inspecting the react native messagequeue"
              margin="1em 0em 1.5em 0em"
            />
            <Text
              margin="0px"
              textColor="secondary"
              textSize="1.3em"
              lineHeight={1.4}
              padding="0px 0px 40px 0px"
            >
              Filter messages based on module or method:
            </Text>
            <CodePane
              textSize=".6em"
              lang="jsx"
              padding="0px"
              source={codeSamples.snoopy1}
            />
            <Appear>
              <div>
                <Text
                  margin="0px"
                  textColor="secondary"
                  textSize="1.3em"
                  lineHeight={1.4}
                  padding="40px 0px 40px 0px"
                >
                  Trigger a yellow warning box by setting a threshold:
                </Text>
                <CodePane
                  textSize=".6em"
                  lang="jsx"
                  padding="0px"
                  source={codeSamples.snoopy2}
                />
              </div>
            </Appear>
          </ContentWrapper>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.bridgeJump}
          bgDarken={0.4}
          maxWidth="90%"
          maxHeight="90%"
        >
          <Text
            textFont="Yanone Kaffeesatz"
            lineHeight={1.4}
            textColor="primary"
            textSize="2.4em"
          >
            <p style={{ textShadow: '1px 1px 2px #2a292f' }}>
              HOW TO BUILD YOUR FIRST<br />REACT NATIVE BRIDGE
            </p>
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header text="choose your language" />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '100%',
              }}
            >
              <LanguageList
                platform="iOS"
                languages={['Objective-C', 'Swift']}
              />
              <LanguageList platform="Android" languages={['Java', 'Kotlin']} />
              <LanguageList platform="Windows" languages={['C#']} />
            </div>
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header text="kotlin is the future" />
            <StyledList
              textColor={colors.tertiary}
              items={[
                'Easy to setup & convert any Java file',
                'Runtime library is <1MB',
                `Works with react native link`,
                'First class support for iOS coming soon',
              ]}
            />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="native modules vs. ui components"
              margin="1em 0em 1.5em 0em"
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
              }}
            >
              <StyledList
                textColor={colors.tertiary}
                textSize="1.3em"
                appear={false}
                items={[
                  `Most of the time, you're choosing one or the other`,
                  `Occasionally, you'll need to integrate both (e.g. video player)`,
                  'Integrating both is complicated because of how threading works in RN',
                ]}
              />
              <div
                style={{
                  width: '60%',
                  padding: '0px 30px',
                  backgroundImage: `url(${images.nativeThreads})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </ContentWrapper>
        </Slide>
        <Slide
          align="flex-start center"
          transition={['fade']}
          bgColor="primary"
          maxWidth="90%"
        >
          <StyledSentence
            top="Native UI Component"
            textSizeTop="3em"
            bottom="iOS (Objective-C)"
            textSizeBottom="2em"
            appear={false}
          />
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header
              text="Subclass off the RCTViewManager"
              margin="1em 0em 1em 0em"
            />
            <CodePane
              textSize=".6em"
              lang="objc"
              padding="0px"
              source={codeSamples.iOSUiComponent1}
            />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header
              text="Import all your header files"
              margin="1em 0em 1em 0em"
            />
            <CodePane
              textSize=".6em"
              lang="objc"
              padding="0px"
              source={codeSamples.iOSUiComponent2}
            />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header
              text="Your ViewManager is a singleton that returns your View"
              margin="1em 0em 1em 0em"
            />
            <CodePane
              textSize=".5em"
              lang="objc"
              padding="0px"
              source={codeSamples.iOSUiComponent3}
            />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header
              text="expose your component's props & export constants"
              margin="1em 0em 1em 0em"
            />
            <CodePane
              textSize=".5em"
              lang="objc"
              padding="0px"
              source={codeSamples.iOSUiComponent3}
            />
          </ContentWrapper>
        </Slide>
        <Slide
          align="flex-start center"
          transition={['fade']}
          bgColor="primary"
          maxWidth="90%"
        >
          <StyledSentence
            top="Native UI Component"
            textSizeTop="3em"
            bottom="Android (Java)"
            textSizeBottom="2em"
            appear={false}
          />
        </Slide>
        <Slide
          align="flex-start center"
          transition={['fade']}
          bgColor="primary"
          maxWidth="90%"
        >
          <StyledSentence
            top="Native Module"
            textSizeTop="3em"
            bottom="iOS (Objective-C)"
            textSizeBottom="2em"
            appear={false}
          />
        </Slide>
        <Slide
          align="flex-start center"
          transition={['fade']}
          bgColor="primary"
          maxWidth="90%"
        >
          <StyledSentence
            top="Native Module"
            textSizeTop="3em"
            bottom="Android (Java)"
            textSizeBottom="2em"
            appear={false}
          />
        </Slide>
        <Slide
          align="flex-start center"
          transition={['fade']}
          bgColor="primary"
          maxWidth="90%"
        >
          <StyledSentence
            top="react-native-create-bridge"
            textSizeTop="2.2em"
            bottom="A CLI that generates bridge module templates with ease"
            textSizeBottom="1.1em"
          />
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header text="react-native-create-bridge" />
            <List style={{ width: '100%' }}>
              <ListItem
                textColor="tertiary"
                textSize="1.5em"
                padding="0 0 30px 0"
              >
                yarn global add react-native-create-bridge
              </ListItem>
              {[
                'Run create-bridge in the root of your project',
                `Follow the prompts`,
                'Next steps will depend upon the language',
              ].map(reason =>
                <Appear key={reason}>
                  <ListItem
                    textColor="tertiary"
                    textSize="1.5em"
                    padding="0 0 30px 0"
                  >
                    {reason}
                  </ListItem>
                </Appear>,
              )}
            </List>
          </ContentWrapper>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.highTrestleBridge}
          bgDarken={0.4}
          maxWidth="90%"
          maxHeight="90%"
        >
          <Text
            textSize="2.2em"
            textFont="Yanone Kaffeesatz"
            lineHeight={1.2}
            textColor="primary"
          >
            <p style={{ textShadow: '1px 1px 2px #2a292f', margin: '0px' }}>
              @PEGGYRAYZIS
            </p>
          </Text>
          <SocialProfiles
            twitter={images.twitterWhite}
            github={images.github}
            medium={images.medium}
          />
        </Slide>
      </Deck>
    );
  }
}

export { colors };
