const bridgeMessage = `type BridgeData = {
  type: number,
  module: ?string,
  method: string | number,
  args: any
}`;

const bridgeLogs = `{"type":"N->JS","module":"RCTEventEmitter","method":"receiveTouches","args":["topTouchStart",[{"identifier":0,"locationY":48.96428680419922,"locationX":136.65792846679688,"pageY":295.8214416503906,"timestamp":2963868,"target":383,"pageX":147.22935485839844}],[0]]}
{"type":"JS->N","module":"UIManager","method":"measure","args":[382,27]}
{"type":"JS->N","module":"UIManager","method":"setJSResponder","args":[382,false]}
{"type":"N->JS","module":null,"method":"<callback for UIManager.measure>","args":[0,0,390.8571472167969,136.85714721679688,10.285714149475098,246.85714721679688]}
{"type":"N->JS","module":"RCTEventEmitter","method":"receiveTouches","args":["topTouchEnd",[{"identifier":0,"locationY":48.96428680419922,"locationX":136.65792846679688,"pageY":295.8214416503906,"timestamp":2963985,"target":383,"pageX":147.22935485839844}],[0]]}
{"type":"JS->N","module":"UIManager","method":"clearJSResponder","args":[]}
{"type":"JS->N","module":"UIManager","method":"createView","args":[659,"RCTView",1,{"flex":1}]}
{"type":"JS->N","module":"UIManager","method":"createView","args":[662,"VideoPlayer",1,{"playerData":{"embedCode":"NudG1zYjE6uWp6njkobaTheSRi_LoH6w","partnerCode":"V3dTcxOgz_2CW8ZIY8iy58lLBNvQ","playerBrandingId":"2d940881487848159b3b99a3ae8125b9","domain":"http://www.mlssoccer.com"},"backgroundColor":-16777216,"bottom":0,"left":0,"position":"absolute","right":0,"top":0}]}
{"type":"JS->N","module":"UIManager","method":"manageChildren","args":[4,null,null,[659],[0],[0]]}
{"type":"N->JS","module":"RCTEventEmitter","method":"receiveEvent","args":[677,"topLayout",{"target":677,"layout":{"height":2,"width":160.85714721679688,"y":19.14285659790039,"x":0}}]}
{"type":"JS->N","module":"UIManager","method":"updateView","args":[678,"RCTView",{"width":5,"marginTop":-2,"opacity":null}]}
{"type":"JS->N","module":"VideoPlayer","method":"play","args":[]}
{"type":"N->JS","module":"RCTDeviceEventEmitter","method":"emit","args":["VideoPlayer:Playing",null]}
{"type":"N->JS","module":"RCTDeviceEventEmitter","method":"emit","args":["VideoPlayer:Time",{"time":0}]}
{"type":"N->JS","module":"RCTDeviceEventEmitter","method":"emit","args":["VideoPlayer:Time",{"time":1}]}
`;

const snoopy1 = `import filter from 'rn-snoopy/stream/filter';

filter({ module: 'RCTEventEmitter' }, true)(events).subscribe();
`;

const snoopy2 = `import bars from 'rn-snoopy/stream/bars';
import filter from 'rn-snoopy/stream/filter';

bars(({ args }) => JSON.stringify(args).length, 20, true)(
  filter({ method: 'createView' }, true)(events),
).subscribe();
`;

export default { bridgeMessage, bridgeLogs, snoopy1, snoopy2 };
