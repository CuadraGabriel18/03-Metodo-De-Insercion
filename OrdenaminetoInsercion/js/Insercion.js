const enviarDatos = () => {
    // Obtener el valor del tamaño del arreglo desde el elemento con nombre 'txtNumero'
    const tamanioArreglo = document.getElementsByName('txtNumero')[0].value;

    // Definir la función arreglo
    function arreglo() {
        // Crear un arreglo vacío
        const A = [];

        // Llenar el arreglo con números ingresados por el usuario
        for (let i = 0; i < tamanioArreglo; i++) {
            const numero = parseInt(prompt('Ingresa un número:'));
            A.push(numero);
        }

        // Mostrar el arreglo sin ordenar en la consola
        console.log('Arreglo sin ordenar:', A);

        // Llamar a la función de ordenamiento por inserción
        ordenamientoInsercion(A);

        // Mostrar el arreglo ordenado en la consola
        console.log('Arreglo ordenado:', A);
    }

    // Definir la función de ordenamiento por inserción
    function ordenamientoInsercion(ar) {
        // Comenzamos desde el segundo elemento de nuestra array A
        for (let i = 1; i < ar.length; i++) {
            const valorActual = ar[i]; // Guardamos el valor actual que vamos a insertar
            let j = i - 1; // Inicializamos j en la posición justo antes del valor actual

            // Desplazar elementos mayores hacia la derecha
            while (j >= 0 && ar[j] < valorActual) {
                ar[j + 1] = ar[j]; // Movemos el elemento a la derecha
                j--; // Avanzamos hacia la izquierda en el arreglo
            }

            // Insertar el valor actual en su posición correcta
            ar[j + 1] = valorActual; // Colocamos el valor actual en la posición j + 1

        }
    }

    // Llamar a la función arreglo para comenzar el proceso
    arreglo();
}
