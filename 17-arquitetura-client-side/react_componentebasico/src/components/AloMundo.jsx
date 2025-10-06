export function AloMundo({nome, cor}) {
    const corTexto = cor || 'blue';
    return (
        <h1 style={{color: corTexto}}>Alô, {nome}!</h1>
    );
}
