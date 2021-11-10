const ladoA = 5
const base = 3

function altura(lado, base) {
    const lado1 = lado;
    const base1 = base;
    const ladoCuadrado = lado1 * lado1;
    const baseCuadrado = base1 * base1;
    const baseCuadrado2 = baseCuadrado * baseCuadrado
    const resultado = Math.sqrt(ladoCuadrado - baseCuadrado2);
    const alturaT = resultado
    return alturaT
}