
const metodoPago = 'efectivo';

switch (metodoPago){
    case 'efectivo':
        console.log(`Pafas con ${efectivo}`);
        break;
    case 'cheque':
        console.log(`Pagas con cheque`);
        console.log('Talonario');
        break;
    default :
        console.log("No has seleccionado ningún metodo");
        break;
}