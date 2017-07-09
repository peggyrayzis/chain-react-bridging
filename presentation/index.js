import React from 'react';

import {
  Appear,
  CodePane,
  Deck,
  Image,
  Heading,
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
import notes from './notes';

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
          notes={notes.intro}
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
          notes={notes.intro2}
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
          notes={notes.bridging}
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
          notes={notes.js}
        >
          <Image width="88%" src={images.bridgeDiagram1} />
        </Slide>
        <Slide
          transition={['fade']}
          maxHeight="90%"
          maxWidth="90%"
          padding="0px"
          margin="0px"
          notes={notes.js2}
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
            appear={false}
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
              textSize=".8em"
              lang="jsx"
              padding="0px"
              source={codeSamples.nativeModuleConfig}
            />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="all interaction originates in native"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.rnArchitecture1} width="62%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="all communication passes through the bridge"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.rnArchitecture2} width="62%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="all communication passes through messagequeue.js"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.rnArchitecture3} width="62%" />
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
              HOW TO BRIDGE<br />NATIVE MODULES & UI COMPONENTS
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
            <Header text="kotlin is 🔥🔥🔥" />
            <StyledList
              textColor={colors.tertiary}
              items={[
                'Easy to setup & convert any Java file',
                'Runtime library is <1MB',
                `Works with react native link (PR merged)`,
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
                textSize="1.5em"
                appear={false}
                items={[
                  `Most of the time, you're choosing one or the other`,
                  `Occasionally, you'll need to integrate both (e.g. video player)`,
                  'Integrating both is complicated because of how threading works in RN',
                ]}
              />
              <div
                style={{
                  width: '40%',
                  padding: '0px 30px',
                  backgroundImage: `url(${images.nativeThreads})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right',
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
            top="Native UI Components"
            textSizeTop="3em"
            bottom="Cross-Platform Concepts"
            textSizeBottom="2em"
            appear={false}
          />
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="viewmanager is a factory for views"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.uiComponent1} width="73%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="react tells viewmanager to construct the view"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.uiComponent2} width="73%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="a reference to the view is stored on the bridge"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.uiComponent3} width="73%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="render your native component to display the ui ✨"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.uiComponent4} width="73%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header text="recap: ui components" />
            <StyledList
              textColor={colors.tertiary}
              items={[
                'Only one instance of the ViewManager is created per bridge',
                'ViewManager: Declares constants, sets props, and creates the view',
                `View: Hook up lifecycle events & render children (subviews)`,
              ]}
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
            top="Native Modules"
            textSizeTop="3em"
            bottom="Cross-Platform Concepts"
            textSizeBottom="2em"
            appear={false}
          />
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="all native modules are globally registered"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.module1} width="90%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="when we invoke a method, we send a message to the queue"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.module2} width="90%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header
              text="native executes the call ✨"
              margin="1em 0em .6em 0em"
            />
            <Image src={images.module3} width="90%" />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps} style={{ height: '100%' }}>
          <ContentWrapper styles={{ justifyContent: 'space-around' }}>
            <Header text="recap: native modules" />
            <StyledList
              textColor={colors.tertiary}
              items={[
                'Only one instance of the module is created per bridge',
                'N-->JS: Callbacks, promises, or emitting events',
                'JS-->N: Method calls',
                `Accessing constants is synchronous`,
              ]}
            />
          </ContentWrapper>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.brokenBridge}
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
              BRIDGING IS ERROR PRONE<br />& TIME CONSUMING 😭
            </p>
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header text="bridging pain points" />
            <StyledList
              textColor={colors.tertiary}
              items={[
                'Context switching between languages & files',
                'So. Much. Boilerplate. 😣',
                `Instructions are piecemeal`,
              ]}
            />
          </ContentWrapper>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.suspensionBridge}
          bgDarken={0.3}
          maxWidth="90%"
          maxHeight="90%"
        >
          <Link href="https://github.com/peggyrayzis/react-native-create-bridge">
            <Text
              textFont="Yanone Kaffeesatz"
              lineHeight={1.4}
              textColor="primary"
              textSize="2.4em"
            >
              <p style={{ textShadow: '1px 1px 2px #2a292f' }}>
                REACT-NATIVE-CREATE-BRIDGE:<br />
                A CLI THAT GENERATES BRIDGE TEMPLATES WITH EASE 🎉
              </p>
            </Text>
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header text="choose a language & bridge module type" />
            <Image
              src={images.rncb}
              height="12em"
              style={{ borderRadius: '6px' }}
            />
          </ContentWrapper>
        </Slide>
        <Slide {...slideProps}>
          <ContentWrapper>
            <Header margin="1em 0em 1.2em 0em" text="no more boilerplate 🎉" />
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Image
                src={images.rncbSample}
                height="14em"
                margin="0em .5em 0em 0em"
                style={{ borderRadius: '6px' }}
              />
              <Image
                src={images.rncbSample2}
                height="14em"
                margin="0em 0em 0em .5em"
                style={{ borderRadius: '6px' }}
              />
            </div>
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
