const pendientes = ["estudiar", "limpiaar", "trabajo", "hacer la cama"];

//el for in itera sobre objetos
for(let pendiente in pendientes){
    console.log(pendiente)
}

const auto = {modelo: "toyota", año: 2022, motor: "1.8"};

for(let propiedad in auto){
    console.log(`${auto[propiedad]}`);
}

for(let [llave, valor] in Object.entries(auto)){
    console.log(llave);
    console.log(valor);
}

