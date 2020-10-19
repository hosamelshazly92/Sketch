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
        sketch.UI.message(`Sorry nothing to display, no input was given`);
      } else {
        // sketch.UI.message(`Welcome ${value}!`);
        // sketch.UI.alert('Greeting Message', `Welcome ${value}!`);
        let arr = value.split(" ");
        let newArr = arr.map(myFunction);
        function myFunction(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        let newName = newArr.join(" ");
        sketch.UI.alert('Greeting Message', `Welcome ${newName}!`); 
      }
    }
  );
}
