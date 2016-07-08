/*

Folders Tree creator for Google Drive

Created by Julián Caro Linares

jcarolinares@gmail.com

*/

var projectfolder=DriveApp.createFolder("AWESOME PROJECT"); //Project name
var folderkeyname="Proyecto";//Keyname for every subproject
var folders_number=12; //Number of subprojects


//Inside each list, the first element is the parent folder, next elements are the child folders inside every parent folder
var sublevel1=[
                 ["CONTENTS",
                          "MORTAL CONTENTS","INMORTAL CONTENTS"],
                 ["IMAGES",
                          "CATS_IMAGES","DEADLY_ROBOTS_IMAGES"],
                 "PROGRAMS AND DESIGNS",
                "ZOMBIE APOCALYPSE"];

function myFunction() {

  create_numbered_folder(folderkeyname,projectfolder,folders_number);

}


function subcreatetree(upmainfolder,sublevel1) {
  var sublevel1 = sublevel1;
  var upmainfolder = upmainfolder;

    //Making the sublevel1 folders
    for (var subindex = 0; subindex < sublevel1.length; subindex++) {

      if(typeof sublevel1[subindex]=="object"){
            var subsublevel=upmainfolder.createFolder(sublevel1[subindex][0]);
            //sublevel1[subindex].splice(0,1);
            var sub3level=sublevel1[subindex].slice(1,sublevel1[subindex].length);
            subcreatetree(subsublevel,sub3level);
      }
      else{
            upmainfolder.createFolder(sublevel1[subindex]);
        }

    }

}


function create_numbered_folder(folderkeyname,inte_mainfolder,folders_number) {
    //Creating folders and files tree
  for (var i = 1; i <= folders_number; i++) {

    //Puts a 0 before the
    if (i<10) {
       var mainfolder=inte_mainfolder.createFolder(folderkeyname +" 0"+i);
    }
    else{
       var mainfolder=inte_mainfolder.createFolder(folderkeyname+i);
    }

    subcreatetree(mainfolder,sublevel1);

}
}
