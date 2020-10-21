import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function onOpenDocument(context) {
  // context.actionContext.document.showMessage('Document Opened')
  sketch.UI.message("It's alive 🙌")
}
