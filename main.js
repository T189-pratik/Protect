function sendMessage(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let problem = document.getElementById("problem").value;

  let phone = "7219671826";
  let msg = `Hello Protect IT Solution,%0AName: ${name}%0AProblem: ${problem}`;

  window.open(`https://wa.me/91${phone}?text=${msg}`, "_blank");
}
