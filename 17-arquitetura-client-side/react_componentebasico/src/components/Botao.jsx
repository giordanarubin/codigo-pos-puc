export function Botao() {
    function handleClick(event) {
        alert(`Clicou o botão ${event.currentTarget.id}`);
    }
    
    return (
        <button id="botaoClicavel" onClick={handleClick}>Clique Aqui</button>
    );
} //função recursiva?
