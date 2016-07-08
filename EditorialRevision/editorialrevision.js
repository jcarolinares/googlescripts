/*

Editorial revision for Google Docs

Created by Julián Caro Linares

jcarolinares@gmail.com

*/


function onOpen() {
  DocumentApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('Check editorial mistakes')
      .addItem('Editorial revision', 'revision')
      .addToUi();
}

function revision() {

    var flag=true;

    var ui = DocumentApp.getUi(); // Same variations.
    var doc=DocumentApp.getActiveDocument()


    var key_words = {
    car: ['car','automobile',0],
    take: ['take','pick',0],
    erase: ['erase','delete',0],
    boys: ['boys','boys and girls',0],
    };



  var body = doc.getBody();

     for (var position in key_words) {

       var foundElement = body.findText(key_words[position][0]);

       while (foundElement != null) {

        // Find the next match
        foundElement = body.findText(key_words[position][0], foundElement);

        key_words[position][2] =key_words[position][2] +1;
       }
    }


      for (var position in key_words) {


        if(key_words[position][2]>0){
          ui.alert('ERRORS FOUND: '+key_words[position][0]+"\nNº: "+key_words[position][2]+"\nCHANGE TO: "+key_words[position][1]);
        }
      }


  var result = ui.alert(
     'Revision done',
     'highlight mistakes?',
      ui.ButtonSet.YES_NO);

  // Process the user's response.
  if (result == ui.Button.YES) {
    // User clicked "Yes".
    ui.alert('Mistakes marked');

     for (var position in key_words) {

       var foundElement = body.findText(key_words[position][0]);

       while (foundElement != null) {
        // Get the text object from the element
        var foundText = foundElement.getElement().asText();

        // Where in the Element is the found text?
        var start = foundElement.getStartOffset();
        var end = foundElement.getEndOffsetInclusive();

        // Change the background color to yellow
        foundText.setBackgroundColor(start, end, "#FCFC00");

        // Find the next match
        foundElement = body.findText(key_words[position][0], foundElement);

    }

   }



  }
  else {
    // User clicked "No" or X in the title bar.
    ui.alert('END OF REVISION');
  }
}




function highlightText(findMe) {
    var body = DocumentApp.getActiveDocument().getBody();
    var foundElement = body.findText(findMe);

    while (foundElement != null) {
        // Get the text object from the element
        var foundText = foundElement.getElement().asText();

        // Where in the Element is the found text?
        var start = foundElement.getStartOffset();
        var end = foundElement.getEndOffsetInclusive();

        // Change the background color to yellow
        foundText.setBackgroundColor(start, end, "#FCFC00");

        // Find the next match
        foundElement = body.findText(findMe, foundElement);
    }
}
