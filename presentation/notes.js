const notes = {
  intro: `
  What’s up Chain React?! I am super excited to be kicking off day 2 with you all.
  i also wanted to thank you all for waking up early with me today. i know it's tough, especially when you've been hitting the karaoke a little too hard or enjoying all the finest craft cider portland has to offer.
  <br/>
  Today, we’re going to talk about bridging in React Native.
  This is a pretty heavy topic so I hope you all have had your coffee this morning
  i know i have.
  `,
  intro2: `
  First I’d like to introduce myself, my name is Peggy Rayzis.
  I’m a software engineer at Major League Soccer on the UI team.
  I write a lot of React Native code for our greenfield React Native app & our realtime match experience on the web powered by universal components
  <br/>
  I also really love bridges, both of the React Native & real life variety. You'll see some cool bridges in my slides today!
  `,
  bridging: `
  Alright, now that we got all that out of the way, let’s start breaking down bridging.
  I’m going to use bridging as a verb a lot this morning - what I mean by that is how we communicate between JS code & native code in React Native.
  `,
  js: `
  How many of you would consider yourself mostly a JS developer? I consider myself one.
  I think anytime we start venturing into native code coming from a JS background, it kind of feels like this. it feels really scary & the learning curve feels really steep.
  This is actually a real bridge in Japan by the way. i'm from new york, i dont really drive that much so the thought of this is super terrifying.
  `,
  js2: `
  Today, we’re going to make bridging feel more like this.
  Don’t get me wrong, it’s still pretty scary. You’re dealing with unfamiliar languages & concepts.
  But, once you learn a little bit about the mechanics and some tools to make it easier, you’ll start to see it from a new perspective.
  `,
  bridging2: `
  Luckily, you won’t have to reach for bridging too often.
  That’s why awesome tools like create react native app & Expo exist -- for most simple applications, you don’t need to write native code.
  Even for most complex applications, you won’t have to write native code too often.
  But it is useful to know how in case you have to.
  `,
  languageBreakdown: `
  Just to put it in perspective, here’s a language breakdown of our React Native prototype we built at the end of last year.
  This is for a greenfield app, so if you’re brownfield your stats might look a lot different.
  For us, the vast majority of our app, 77%, was written in Javascript.
  `,
  languageBreakdown2: `
  The other 23% was native UI components & modules, about evenly distributed between Obj-C, Swift, & Java.
  This is where bridging comes into play - in order for your native code to talk to Javascript, you will need to write a bridge.
  `,
  bridgingScenarios: `
  Although bridging shouldn't be the first solution you reach for, there are some situations where writing a bridge is necessary:
  <br />
  - You need to integrate a 3rd party SDK. At Major League Soccer, we have a video platform that didn’t have a React Native SDK. So, we had to bridge the iOS & Android SDKs ourselves.
  <br />
  - If you are doing any kind of video compression or image filtering where performance is really important, move it to native & write a bridge module
  <br />
  - If you are building a brownfield application and reusing native UI components, you probably will be bridging quite a bit
  <br />
  - Also, if you need access to platform APIs, something like the camera or gyroscope, you will need to use an open source library or write a bridge yourself
  `,
  rnInternals: `
  I firmly believe that the key to understanding bridging is cracking into React Native internals.
  Too often, we treat abstractions as a black box and don't try to see what's underneath the surface. Show of hands - who knows what the message queue is in React Native?
  Today, I'm going to demystify some of the magic behind the RN bridge in hopes that it will help you understand bridging faster.
  `,
  rnInternals2: `
  Here's a basic cross-platform overview of the threading structure in React Native.
  On the native side, we have the main thread which is responsible for UI.
  We have the shadow queue, which is responsible for layout calculations.
  Another important thing to note is that each native module has its own thread, or in the case of Android, they share a thread pool.
  <br />
  We also have a JavaScript thread. The way these two sides communicate is through the bridge.
  `,
  rnInternals3: `
  the JS thread actually knows about all of your native modules at runtime.
  they're injected into the JS context of the VM as a global variable.
  don't worry if this sounds confusing, it will become a lot more clear later.
  just try to remember that there is a JSON representation of each native module that looks like this to the bridge
  `,
  rnInternals4: `
  now we're going to dive a little deeper into the mechanics of the bridge.
  when you interact with a react native app, all touch events start on the native side.
  information about the touch event passes through the bridge where the javascript side reacts to the information.
  `,
  rnInternals5: `
  in fact, all communication passes through the bridge! this includes everything from creating views, to interacting with native modules, rerendering a component, and more!
  this is why it's really important to understand what's going on.
  all communication across the bridge is asynchronous, which is why you have to communicate via method calls & callbacks
  another thing to note is that all messages must be serialized
  updates are also batched to improve performance.
  this communication channel is pretty similar to a client and a server.
  `,
  rnInternals6: `
  All of these messages are handled by what's called the messagequeue, which has a native part & a corresponding JS part
  The JS part is really what we care about when it comes to performance.
  if everything is getting passed through this message queue on the JS side, we need to make sure that it isn't congested
  `,
  mq: `
  if it is congested, the JS thread is blocked & we enter this weird situation where we can scroll through the UI but JS doesn't register our touch events
  if you're experiencing performance issues in RN, i'd venture to say that it's probably related to the message queue
  so how do we prevent this from happening?
  `,
  mq2: `
  one of the best ways is limiting passes over the bridge. this is what the react native team recently did with useNativeDriver for animations
  you send the config over to native the first time so you don't have to keep passing information across the bridge.
  <br />
  keep your data flat. try to avoid nested objects & arrays, you will just have use conversion methods to use the data in native.
  keep your data lightweight, don't try to send images as base64 encoded strings over the messagequeue.
  <br />
  write your business logic on one side. if you're unfamiliar w/ native languages it might be easiest to keep your native modules thin
  <br />
  gain visibility into what's going on w/ the bridge through logging & profiling tools
  `,
  mq3: `
  i'm going to show you some tools to make debugging the messagequeue easier!
  here's what a message looks like. every message sent over the bridge has this type signature.
  `,
  mq4: `
  the messagequeue also has a spy function that you can hook into to console.log the messages passing through
  here's an example of what this looks like in our prototype at MLS. here, a user is tapping on a video, which renders a video view & plays the video.
  you can see here that the touch event starts with native!
  this spy feature is pretty chatty though. this is hard to read and doesn't tell us much about what's going on. we need a better way to isolate the specific messages we're trying to debug
  `,
  mq5: `
  that tool is rn-snoopy! dotan nahum created it and did an amazing job. it treats the message queue data as a stream so you can filter out the noise & focus on what's important
  `,
  mq6: `
  you can filter based on module or method. another cool thing you can do is trigger a yellow box warning in react native if messages cross a certain threshold.
  so here we're showing a warning if we're passing too many arguments to createView
  `,
  bridgeHowTo: `
  ok, now that we know more about what's going on behind the scenes, we're going to jump into how we bridge native modules & ui components.
  `,
  language: `
  first you're going to choose your language. if you're building an open source library, i recommend sticking with obj-c & java as they're the most widely supported. you can also choose swift & kotlin.
  i like these two languages because they most closely remember flow typed javascript so i feel a bit more in my comfort zone.
  `,
  kotlin: `
  i do want to digress for a moment to talk about kotlin because i think it deserves some attention on the big stage.
  i'm betting big on kotlin. recently, first class language support was added to android.
  it's super easy to set up & convert any java file to kotlin instantly.
  <br/>
  runtime lib is <1MB so it won't add a significant amount to your bundle size, unlike swift which adds anywhere from 3-7 MB.
  <br/>
  unlike swift, it works with react native link! well not yet exactly, the PR was recently merged but this should be landing very soon.
  anyone who has ever set up native navigation by airbnb knows how rough it is to not have react native link support so this is huge.
  <br/>
  and first class support to iOS is coming soon! so while we won't be able to share native modules completely bc of differences across platforms, we'll be able to reuse business logic
  `,
  uiVsModule: `
  this was something that confused me when i first started doing bridging tutorials. you will have to choose whether you want to build a native module, or a ui component
  <br />
  most of the time, you're choosing one or the other. a native module does not render any UI!
  <br />
  occasionally you'll need to integrate both but this becomes complicated because of how threading works in react native
  `,
  uiIntro: `
  first we're going to learn about bridging ui components
  in a previous version of this talk, i had a lot of native code samples but it felt a little aggressive for a 9am talk slot.
  instead i'm going to teach you some high level concepts that can be applied across platforms and show you a tool to make writing bridge modules a lot easier.
  `,
  uiComponent1: `
  whether you're building for iOS or android, you will have to construct a view manager.
  the view manager orchestrates the interaction between javascript & the view.
  it's a factory that creates your view and only one instance is created per bridge
  <br/>
  remember how i told you that the bridge knows about all native modules at runtime? well the viewmanager is like a special kind of native module. the bridge has a reference to it.
  it has information about the component name and any constants
  `,
  uiComponent2: `
  on the javascript side, we call requirenativecomponent to tell the viewmanager to construct the view. requirenativecomponent also checks the component's interface via proptypes to make sure we aren't passing in any incorrect types
  `,
  uiComponent3: `
  the viewmanager creates the view and a reference to the view instance is stored on the bridge
  `,
  uiComponent4: `
  in our react component, we render our native view to display the ui
  `,
  uiComponentRecap: `
  alright that was a lot of information so let's recap. here's what's most important to keep in mind when you're bridging a ui component:
  only 1 instance of the view manager is created per bridge. the view manager is a factory that creates a view
  <br />
  the view manager is where you declare your constants and any props that your component will use. this includes event handlers. the manager acts as a delegate for all of its view instances
  <br />
  just like in react, our view is where we hookup lifecycle events like layoutSubviews and also render any children
  `,
  nativeModulesIntro: `native modules are a little bit easier than ui components because they just export methods & constants`,
  module1: `like we learned earlier, all native modules are global variables at runtime. they're represented by the json above and include any methods & constants defined on the module`,
  module2: `
  when we invoke a method on our module from javascript, we send a message to the queue with the method name and any arguments
  `,
  module3: `
  the native side calls the method directly. if there is any information to pass back to javascript, the method can do so either through a callback or an eventemitter
  `,
  moduleRecap: `
  alright lets quickly recap! only one instance of the module is created per bridge. this instance is initialized at runtime,
  if you want to communicate data from native to js, you can do so with callbacks, promises, or emitting events.
  if you want to communicate data from js to native, you call methods on the native module and pass in arguments.
  since JS already knows about the modules constants, accessing them is synchronous.
  `,
  rncb1: `
  after experiencing all of these pain points firsthand, i wanted to find a better way.
  i also wanted to create a tool to make bridging seem a lot less daunting for javascript developers. so i created react-native-create-bridge, a cli tool that generates bridge templates for native modules & ui components in the language of your choice.
  `,
  rncb2: `
  the cli is really easy to use. you'll globally install it from npm and run create-bridge in the root of your project.
  from there, the prompts will walk you through a series of questions.
  you'll specify your module name, which type of bridge you want to create, and which languages you want to support
  before you know it, you'll have customized bridge templates that look like this.
  `,
  rncb3: `
  another thing i want to point out is that I include links to the docs so you can read more in depth if you're interested.
  this was to make it as simple as possible for JS devs to get started with bridging, but i plan on adding a config option to remove the comments soon for more experienced users
  `,
  rncb4: `
  react native create bridge isn't the only tool like this out there. i also would like to recommend the awesome work of johannes stein with react-native-create-library.
  there are a few key differences with our tools, however.
  create-library is only intended to scaffold open source libraries. it does not generate templates for ui components.
  while create-bridge was originally intended to be used in existing react native projects, it also works for scaffolding open source libraries.
  the shoutem team actually used it for their shopify bridge module and had a great experience that they wrote a blog post about
  <br/>
  we also differ a bit in the languages we support. create-library is a great choice if you need to support windows. create-bridge supports swift & kotlin.
  <br/>
  if there are features that are important to you when bridging, please get in touch! i'd love to hear from you all how you're using create-bridge. i want it to be a one stop shop for bridging, so your feedback is really impt to the success of the project.
  `,
  closing: `that was a lot of information but i want to leave you with one more thing. i think sometimes when we start venturing into unfamiliar territory, we need a little bit of a confidence booster.
  don't be afraid to get your hands dirty with native code. you got this!`,
};

export default notes;
