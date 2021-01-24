
var myField = document.activeElement;
var myValue = "# Hello World";

if (myField.selectionStart || myField.selectionStart == '0') {
  var startPos = myField.selectionStart;
  var endPos = myField.selectionEnd;
  myField.value = myField.value.substring(0, startPos)
      + myValue
      + myField.value.substring(endPos, myField.value.length);
} else {
  myField.value += myValue;
}
alert(myField.id);