// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//declarando variables
let participantes = []
let amigo = "";
let numero = 0;

function agregarAmigo(){
    amigo = document.getElementById('amigo').value;
    console.log(amigo);

    //si el campo no esta vacio
    if(amigo!=''){
        //agrega a participantes
        participantes.push(amigo);
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

//sortear participantes
function sortearAmigo(){
    //si la lista tiene más de un participante
    if(parseInt(participantes.length)>1){
        //obtiene la cantidad de participantes
        let cantidad = participantes.length;
        numero = Math.floor(Math.random()*cantidad);
        //captura la ul de participantes y lo limpia
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML='';
        //captura la ul de resultado
        let resultado = document.getElementById('resultado');
        //muestra el participante escogido
        resultado.innerHTML=`El amigo secreto sorteado es: ${participantes[numero]}`;
    }else{
        //si no hay nombres en la lista o solo un participante, muestra el mensaje
        alert(`agregue ${(participantes.length == 1) ? 'más' : ''} nombres para el sorteo!!`);
    }
    
}


