// Click on the "clock button" to reprogram when and how the reminder is sended to the editors

function myFunction() {

      var doc=SpreadsheetApp.getActive();

  Logger.log("doc: "+doc);


  //var email_list= ["example@gmail.com","example2@gmail.com","example3@gmail.com"];

  //Taking all the emails users that can edit the Spreadsheet
  var editors=doc.getEditors();

  Logger.log("editors: "+editors);

  //Subject of the email
  var subject="RECORDATORIO AUTOMÁTICO: Rellenar documento de horas de dedicación";

  //Body of the email
  var body_email ="Please reminder to fill the data of today. \n\n Have a nice day!";

  //Sending email
  GmailApp.sendEmail(editors, subject, body_email);

}
