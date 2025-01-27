// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//declarando variables
let participantes = []
let amigo = "";

function agregarAmigo(){
    amigo = document.getElementById('amigo').value;
    console.log(amigo);

    //si el campo no esta vacio
    if(amigo!=''){
        //agrega a participantes
        participantes.push(amigo);
        console.log(participantes);
        //limpia el textBox
        document.getElementById('amigo').value='';
        //añade a la ul
        agregaLista();

    }else{
        alert('Ingrese un nombre');
    }
    return;
}

//agrega los campos a la lista
function agregaLista(){
    //capturamos la ul
    let lista = document.getElementById('listaAmigos');
    //limpiamos la ul antes de iterar
    lista.innerHTML='';
    //se itera teniendo en cuenta la cantidad de participantes
    for(let i=0;i<participantes.length;i++){
        //crea la li
        const segmentoLista=document.createElement('li');
        //agrega al participante a la li
        segmentoLista.textContent=participantes[i];
        //se agrega al final de la lista
        lista.appendChild(segmentoLista);
    }
    return;
}


