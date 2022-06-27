let caja=document.getElementById("ir-top");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})
window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 300) {
        caja.style.display="flex"
    } else {
        caja.style.display="none"
    }
})
let ingreseUnNumero = parseInt(prompt("Ingrese un numero entre 1 y 10, ingrese 5 para detener el ciclo"));
while (ingreseUnNumero != 5) {
    if (ingreseUnNumero >= 1 && ingreseUnNumero <= 10) {
        for (let i = 1; i <= ingreseUnNumero; i++) {
            console.log(i + " se repitio")
            if (ingreseUnNumero != 5) {
                alert("el numero ingresado es: " + ingreseUnNumero + " esta dentro del rango de numeros solicitados, el numero se repetira las veces que se indique");
                alert(i + " se repitio")
            }
        }
    } else {
        alert("solo se pueden ingresar numeros entre 1 y 10, para detener la ejecucion del ciclo ingrese 5");
    }
    ingreseUnNumero = parseInt(prompt("desea intentarlo nuevamente? Ingrese un numero entre 1 y 10, ingrese 5 para detener el ciclo"));
}
alert(ingreseUnNumero + " el numero ingresado es '5' , su ciclo se detuvo");