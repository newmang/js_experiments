// Random JS Experiments
// by Elijah Newman-Gomez
// 1/15/2013
 
// Sets the location of the document as the VALUE of a DOM element with ID "StatusBox".
// Does not handle errors if the element does not exist.

 function GetLocation()
{
  OutputElem = document.getElementById("StatusBox");
  OutputElem.value = window.location;
}


function GetLocationSafe()
{
 OutputElem = document.getElementById("StatusBoxSafe");
 if( OutputElem )
   OutputElem.value = window.location;
 else
   alert("ERROR: DOM element not found!");
}