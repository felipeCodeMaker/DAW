
//6. cambiar color de fondo del boton cuando haga click en script


const colorBtn = document.getElementById('colorBtn');
let colorIndex = 0;
const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];
colorBtn.addEventListener('click', function() {
colorBtn.style.backgroundColor = colors[colorIndex];
colorIndex = (colorIndex + 1) % colors.length;
});



//7. contador de clicks de un boton y mostrarlo en mi html
const clickBtn = document.getElementById('clickBtn');
const contador = document.getElementById('contador');
let count = 0;

clickBtn.addEventListener('click', function() {
    count++;
    contador.textContent = count;
});


//8. ocultar y ver contenido del botton y div

const toggleBtn = document.getElementById('toggleBtn');
const contenido = document.getElementById('contenido');
let visible = true;

toggleBtn.addEventListener('click', function() {
if (visible) {
    contenido.style.display = 'none';
    toggleBtn.textContent = 'Mostrar contenido';
} else {
    contenido.style.display = 'block';
    toggleBtn.textContent = 'Ocultar contenido';
}
visible = !visible;
});

//9. añadir elementos a lista mediante input buttom y ul

const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const lista = document.getElementById('lista');

addBtn.addEventListener('click', function() {
    const texto = itemInput.value.trim();
    if (texto) {
        const li = document.createElement('li');
        li.textContent = texto;
        lista.appendChild(li);
        itemInput.value = '';
        itemInput.focus();
    }
});

// También se puede añadir con Enter
itemInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

//10.mostrar posicion raton x y y


const posX = document.getElementById('posX');
const posY = document.getElementById('posY');

document.addEventListener('mousemove', function(e) {
    posX.textContent = e.clientX;
    posY.textContent = e.clientY;
});