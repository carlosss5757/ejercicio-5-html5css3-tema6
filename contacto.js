window.onload = function() {

    var nombreValidos = ["alex", "juan", "ana", "pedro"];

    // Validación nombre en tiempo real
    document.getElementById("nombre-contacto").onkeyup = function() {
        var nombre = this.value.toLowerCase();
        if (!nombreValidos.includes(nombre)) {
            this.setCustomValidity("El usuario introducido no existe");
        } else {
            this.setCustomValidity("");
        }
    };

    // Validación correo en tiempo real
    document.getElementById("correo-contacto").onkeyup = function() {
        var correo = this.value;
        if (!correo.endsWith(".es")) {
            this.setCustomValidity("Debes introducir una dirección de correo española (acabada en .es)");
        } else {
            this.setCustomValidity("");
        }
    };
};