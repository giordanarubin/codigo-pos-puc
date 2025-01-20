var novoMapa = new Map();

class HistoryMap {

}

//acessos a um site:
novoMapa.set('11/11/2011 - 23:30 - URL', {title: 'Titulo do site', url: 'url sozinha'});
// novoMapa.set('11/11/2011 - 23:30 - URL', {});
// novoMapa.set('11/11/2011 - 23:30 - URL', {});
// novoMapa.set('11/11/2011 - 23:30 - URL', {});
novoMapa.set('11/11/2011 - 23:31 - URL', {});

var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');
console.log(resultado); //pega o ultimo, se tiver varios no mesmo horario por ex, evitando "spam"
//o map sobrescreve o ultimo item, evitando duplicação