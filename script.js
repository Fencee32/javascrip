// console.log("Hello World!")
//let vezetekNev = "Kovács"
//let keresztNev = "Gábor"
//let szamlalo = 0
//console.log(vezetekNev + " " + keresztNev, szamlalo)

//if (vezetekNev === szamlalo) {
//  console.log("a vezetekNev egyenlő a szamlaloval")
//} else {
//  console.log("a vezetekNev NEM egyenlő a szamlaloval")
// }

function login() {
  console.log("Katt")
  let passwordField = document.querySelector("#pass")
  //   console.log(passwordField)
  if (passwordField.value == "nagytitok") {
    document.location = "titkosoldal.html"
  } else {
    passwordField.value = ""
  }
}
