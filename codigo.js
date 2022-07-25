
function pala(){
var pesquisa =  document.querySelector('#pal').value; // texto
var dd =  document.querySelector('#texto').innerHTML; // texto
var vas=  document.querySelector('#texto');

 
var res = dd.match(pesquisa)

  
   
document.querySelector('#texto2').innerHTML = dd.replace(`${res}`   , ` <mark>    ${res} </mark>`);
 vas.style.display = 'none';

if (res == null) {
  alert("não tem nada!!!")  
} else {
    alert("tem sim!!!")  
     
}





/*
 var pa =  document.querySelector('#pal').value;
  var n =    pa.charAt(0)
  var m =         pa.split(" ");


 document.querySelector('#ver').innerHTML = m[0];
 


*/

}


function ss(){
var kk =document.getElementById("ff").value;
alert(kk)
}












