import './App.css'
import { AloMundo } from './components/AloMundo'
import { Botao } from './components/Botao'

function App() {
  const handleClick = (event) => {
    alert(`clicou ${event.currentTarget.id}`); //evento do DOM
  };
  //Característica importante do tratamento de eventos do HTML: bubbling. O evento se propaga para os elementos pai na hierarquia (árvore) do DOM, e depois desce de novo. Por isso a div mãe do botão tb suporta eventos, e após o evento do botão acontecer, o evento dela acontece.
 
  return (
   <div id='divApp' onClick={handleClick}>
    <AloMundo nome="Gior" cor="red"/>
    <Botao/>
   </div>
  )
};

export default App
