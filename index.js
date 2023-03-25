let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //Oculta el menu una vez que selecciona una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//fucncion que aplica las animaciones de los skills

function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("mongodb");
    habilidades[3].classList.add("react");
    habilidades[4].classList.add("compromiso");
    habilidades[5].classList.add("autodidacta");
    habilidades[6].classList.add("grupal");
    habilidades[7].classList.add("puntualidad");
  }
}

//Detecto el scrollin para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
function efecto() {}
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_qevz07j";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Enviado!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
  document.getElementById("form").reset();
});
