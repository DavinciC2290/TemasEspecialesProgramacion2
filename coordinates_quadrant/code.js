function filtrarCoordenadas(coordenadas) {
    const coordenadasFiltradas = [];

    for (let i = 0; i < coordenadas.length; i++) {
        let x = coordenadas[i][0];
        let y = coordenadas[i][1];

        if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
            coordenadasFiltradas.push([x, y]);
        }
    }

    return coordenadasFiltradas;
}

const coordenadasOriginales = [
    [2, 3],
    [-1, 5],
    [0, -2],
    [-3, -4],
    [4, 1]
];

const coordenadasFiltradas = filtrarCoordenadas(coordenadasOriginales);

console.log("Coordenadas originales:", coordenadasOriginales);
console.log("Coordenadas filtradas:", coordenadasFiltradas);
