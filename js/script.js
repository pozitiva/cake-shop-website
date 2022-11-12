function deleteSomething() {
  alert("Brisanje unosa...");
  document.getElementById("imeprezime").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("adresa").value = "";
  document.getElementById("napomena").value = "";
 
  document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
}

function Klik() {
if(
  document.getElementById("imeprezime").value != "" &
  document.getElementById("telefon").value != "" &
  document.getElementById("adresa").value != ""){
    if(confirm("Vaši ime:\n" + (document.getElementById('imeprezime').innerHTML = document.getElementById("imeprezime").value) + "\nVaš broj telefona:\n " + (document.getElementById('telefon').innerHTML = 
                    document.getElementById("telefon").value) + "\nVaša adresa:\n " + (document.getElementById('adresa').innerHTML = 
                    document.getElementById("adresa").value))){
    alert("Vaša porudžbina je zabeležena!");
    //return false;
} 
    else deleteSomething();
    
  }
  else alert("Niste popunili sva polja!");
  
}

