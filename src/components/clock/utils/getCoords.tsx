
export const getCoords = (size: number, numeros: boolean, externo: boolean, numeroDeNumeros: number): { numero: string, x: number, y: number }[] => {
    const distance = externo ? 30 : 10;
    const radio = ((size) / 2) - distance; // Cambia esto según el radio de tu círculo
    // Array para almacenar los números con coordenadas
    const numerosConCoordenadas = [];
    // Calcula el ángulo entre cada número
    const angulo = (2 * Math.PI) / numeroDeNumeros; // Ángulo en radianes entre cada número

    for (let i = 0; i < numeroDeNumeros; i++) {
        // Calcula el ángulo actual para el número i
        const anguloActual = ((i + 1) * angulo) - (Math.PI / 2); // Resta π/2 y ajusta para que el número 12 esté arriba
        const x = radio * Math.cos(anguloActual);
        const y = radio * Math.sin(anguloActual);

        // Calcula las coordenadas ajustadas (x, y)
        const xAjustado = x + (distance - 5); // Añade el desplazamiento y ajusta el radio
        const yAjustado = y + (distance - 5); // Añade el desplazamiento y ajusta el radio

        // Agrega el número con sus coordenadas al array
        numerosConCoordenadas.push({
            numero: numeros ? (i + 1).toString() : '•',
            x: xAjustado + radio, // Añade el radio para centrar el número
            y: yAjustado + radio, // Añade el radio para centrar el número
        });
    }

    return numerosConCoordenadas;
}