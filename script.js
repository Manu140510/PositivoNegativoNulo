function verificarNumero() {
    const numero = parseFloat(document.querySelector("#numero").value);
    let resultado = "";
    if (numero > 0) {
        resultado = "Positivo";
    } else if (numero < 0) {
        resultado = "Negativo";
    } else {
        resultado = "Nulo";
    }
    document.querySelector("#resultado").innerText = resultado;
    }
