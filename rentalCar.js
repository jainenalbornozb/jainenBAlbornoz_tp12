function rentalCar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) {
  let costoPorDia;
  const costoSillaBebe = 1200;


if (tipoDeVehiculo === "compacto") {
  costoPorDia = 14000;
} else if (tipoDeVehiculo === "mediano") {
  costoPorDia = 17000;
} else if (tipoDeVehiculo === "camioneta") {
  costoPorDia = 28000;
} else {
  return "Tipo de vehículo no válido";
}

let total = costoPorDia * diasDeAlquiler;

if (sillaParaBebe) {
  total += costoSillaBebe * diasDeAlquiler;
}
return total;
}

function mostrarMensaje(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) {
    const total = rentalCar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe);
    const sillaMensaje = sillaParaBebe ? "con una silla para niños incluida" : "sin silla para niños";

    console.log(`Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado, considerando los ${diasDeAlquiler} días utilizados ${sillaMensaje}, el monto total a pagar es de $${total}.`);

}
/*
mostrarMensaje("compacto", 3, true);
mostrarMensaje("mediano", 5, false); 
mostrarMensaje("camioneta", 2, true);
*/