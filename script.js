document.querySelector('#retu').addEventListener('click', e =>{
  e.preventDefault();
  console.log('toimiko')




  if (document.querySelector('#teht_a').checked){
      document.querySelector('.boksit').children[0].innerHTML = '<li class="sisälto"><input type="checkbox" id="teht_a" checked>toimi</li>' ;

}
 

  else{
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisälto"><input type="checkbox" id="teht_a" >toimiko</li>' ;
}
  if (document.querySelector('#teht_b').checked){
      document.querySelector('.boksit').children[1].innerHTML = '<li class="sisälto"><input type="checkbox" id="teht_b" checked>toimi</li>' ;

}
 

  else{
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisälto"><input type="checkbox" id="teht_b" >toimiko</li>' ;
}
  if (document.querySelector('#teht_c').checked){
      document.querySelector('.boksit').children[2].innerHTML = '<li class="sisälto"><input type="checkbox" id="teht_c" checked>toimi</li>' ;

}
 

  else{
    document.querySelector('.boksit').children[2].innerHTML = '<li class="sisälto"><input type="checkbox" id="teht_c" >toimiko</li>' ;
}
  if (document.querySelector('#teht_d').checked){
      document.querySelector('.boksit').children[3].innerHTML = '<li class="sisälto"><input type="checkbox" id="teht_d" checked>toimi</li>' ;

}
 

  else{
    document.querySelector('.boksit').children[3].innerHTML = '<li class="sisälto"><input type="checkbox" id="teht_d" >toimiko</li>' ;
    }

});

