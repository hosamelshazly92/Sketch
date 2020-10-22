// import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

// export default function() {
//   sketch.UI.message("It's alive 🙌")
// }

const sketch = require('sketch')

export default function onRun(context) {
  sketch.UI.message(`Hello Sketch`)
}
