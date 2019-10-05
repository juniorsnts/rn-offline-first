import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';
export const tron = Reactotron
    .configure({
        host: 'localhost'
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect() // let's connect!`

console.tron = tron;
tron.clear();