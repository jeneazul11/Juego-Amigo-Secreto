/*Variables globales*/
let miListaAmigos= [];
let posicionSorteado=0;


/*Función agregar amigo: recoge el input desde la etiqueta ID=amigo y valida si está vacio alerta por un nombre válido,
si el nombre es correcto agrega el nombre a miListaAmigos y ejecuta la función para agregar a lista HTML. además limpia 
el campo del input.*/
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    
    
    if(nombreAmigo===''){
        alert('Por favor ingrese un nombre válido');
    }else{
        miListaAmigos.push(nombreAmigo);
        listaAmigosHTML(nombreAmigo);
    }
    document.getElementById('amigo').value='';
}
/*Función que agrega el nombre ingresado en lista HTML*/
function listaAmigosHTML(amigo){
    let nuevoLi=document.createElement('li');
    nuevoLi.textContent= amigo;
    let miLista = document.getElementById('listaAmigos');
    miLista.appendChild(nuevoLi);
}
/*Función que  genera un número aleatorio para el largo de la lista de amigos ingresados. muestra el nombre ubicado en
posición de lista del número generado y elimina el elemento sorteado de la lista. En caso de no haber elementos alerta
que no quedan amigos*/
function sortearAmigo(){
    let largoLista = miListaAmigos.length;
    const listaResultado=document.getElementById('resultado');
    listaResultado.innerHTML='';
    if (largoLista >0){
        posicionSorteado = parseInt(Math.floor(Math.random()*largoLista));
        listaResultadoHTML(miListaAmigos[posicionSorteado]);
        miListaAmigos.splice(posicionSorteado,1);
        const listaAmigos=document.getElementById('listaAmigos');
        listaAmigos.innerHTML='';
    }else{
        alert('No hay amigos por sortear');
    }
}
/*Función que modifica elemento HTML*/
function listaResultadoHTML(amigo){
    let nuevoLi=document.createElement('li');
    nuevoLi.textContent= (`El amigo secreto sorteado es: ${amigo}`);
    let miLista = document.getElementById('resultado');
    miLista.appendChild(nuevoLi);
}