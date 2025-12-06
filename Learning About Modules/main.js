console.log('learning modules...')

import { sum , sub } from './calc.js';
import { default as sayMyName } from './whoami.js'

console.log(sum(2,3));
console.log(sayMyName())