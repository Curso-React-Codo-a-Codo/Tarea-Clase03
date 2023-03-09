let MyDom = document
let MyApp = document.getElementById("MyApp")
const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
	const nombre = prompt('¿Cuál es tu nombre?');
    if (nombre == null || nombre == "" )
    {
        MyApp.innerHTML = "Dejaste el Promt Vacio o lo Cancelaste";
    } else {
        MyApp.innerHTML = "Hola! "+ nombre;
    }
	    
});