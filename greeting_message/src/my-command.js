// import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

// export default function() {
//   sketch.UI.message("It's alive 🙌")
// }

const sketch = require('sketch')
const { randomEmoji } = require('./shared')

export default function onRun(context) {
  sketch.UI.message(`Hello Sketch ${randomEmoji()}`)
}
