function verifyAge() {

    const fechaNacimiento = document.getElementById("birthDate").value;

    
    const fechaNacimientoObj = new Date(fechaNacimiento);


    const fechaActual = new Date();

    
    const edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

    if (edad >= 18) {
        document.getElementById("result").textContent = "Eres mayor de edad en Colombia.";
        document.getElementById("result").style.color = "green";

    } else {
        document.getElementById("result").textContent = "Eres menor de edad en Colombia.";
        document.getElementById("result").style.color = "red";
    }
}
