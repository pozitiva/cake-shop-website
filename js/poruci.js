function deleteSomething() {
  document.getElementById("imeprezime").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("adresa").value = "";
  document.getElementById("napomena").value = "";

  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((el) => (el.checked = false));
}

function getValue(name) {
  var checkboxes = document.getElementsByName(name);
  var result = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result.push(checkboxes[i].value);
    }
  }
  return result;
}

function clickButton(event) {
  event.preventDefault();
  let imePrezime = document.getElementById("imeprezime").value;
  let telefon = document.getElementById("telefon").value;
  let adresa = document.getElementById("adresa").value;
  let drzava = document.getElementById("drzava").value;
  let napomena = document.getElementById("napomena").value;
  let torte = getValue("Torte");
  let kafe = getValue("Kafe");
  if (imePrezime == "" || telefon == "" || adresa == "" || drzava == "") {
    alert("Niste popunili polja");
    return;
  }

  let podaci = {
    imePrezime,
    telefon,
    adresa,
    drzava,
    napomena,
    torte,
    kafe,
  };

  localStorage.setItem("podaci", podaci);

  fetch("http://localhost:3000/poruci", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(podaci),
  })
    .catch((error) => alert("Neuspesna narudzbina"))
    .then((response) => response.json())
    .then((response) => {
      console.log(JSON.stringify(response));
      alert("Vaša porudžbina je zabeležena!");
      deleteSomething();
    });
}

function show1() {
  document.getElementById("div1").style.display = "none";
}

function show2() {
  document.getElementById("div1").style.display = "block";
}

var date = new Date();
var current_date =
  date.getDate() +
  "-" +
  (date.getMonth() + 1) +
  "-" +
  date.getFullYear() +
  " " +
  date.getHours() +
  ":" +
  date.getMinutes() +
  ":" +
  date.getSeconds();
document.getElementById("txt").innerHTML = current_date;
