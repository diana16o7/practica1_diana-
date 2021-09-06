function getIMC(){
  var peso=parsefloat(document.getElementById('peso´).value);
  var altura=parsefloat(document.getElementById('altura').value);
var imc=peso/(altura*altura);
  documentgetElementById("imc")innerHTML=imc;
