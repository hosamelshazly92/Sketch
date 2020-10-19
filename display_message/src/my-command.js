import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  
  sketch.UI.getInputFromUser(
    "What's your name?",
    {
      initialValue: 'Type your name here....',
    },
    (err, value) => {
      if (err) {
        // most likely the user canceled the input
        return
      } else {
        // sketch.UI.message(`Welcome ${value}!`);
        sketch.UI.alert('Greeting Message', `Welcome ${value}!`);
      }
    }
  );

}
