const sketch = require('sketch')
const { randomEmoji } = require('./shared')

export default function onRun(context) {
  sketch.UI.message(`Hello Sketch ${randomEmoji()}`)
}
