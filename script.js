document.querySelector('.retu').addEventListener('click', e =>{
  e.preventDefault();
  
  if (document.querySelector('#teht_a').checked){
      document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked>Html toimi </li>' ;

}
 
  else{
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" >Html </li>' ;
}
 
  if (document.querySelector('#teht_b').checked){
      document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked>Css toimi </li>' ;
}
 
  else{
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" >Css </li>' ;
}
   
  if (document.querySelector('#teht_c').checked){
      document.querySelector('.boksit').children[2].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c" checked>JavaScript toimi </li>' ;
}
 
  else{
    document.querySelector('.boksit').children[2].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c" >JavaScript </li>' ;
}
 
  if (document.querySelector('#teht_d').checked){
      document.querySelector('.boksit').children[3].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d" checked>Ci/Cd toimi </li>' ;
}
 
  else{
    document.querySelector('.boksit').children[3].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d" >Ci/Cd </li>' ;
    }

});

document.querySelector('#lisaaNappi').addEventListener('click', e =>{
  e.preventDefault();
  console.log("joo");
  if (document.querySelector('#Nimi').value=='' || document.querySelector("#Tieto").value==''){
    document.querySelector('.Varoitus').innerHTML = 'Täytä kaikki kentät';
    setTimeout(() => document.querySelector('.Varoitus').innerHTML='', 3000);
  }
  else{
    document.querySelector('.Varoitus').innerHTML = document.querySelector('#Nimi').value + ": " + document.querySelector("#Tieto").value ;

  }



});

