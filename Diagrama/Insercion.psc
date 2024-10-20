Algoritmo Ordenamiento
	Definir n Como Entero
	Escribir 'Ingrese la cantidad de elementos:'
	Leer n
	Dimensionar a(n)
	// Ingresar elementos en el arreglo
	Para i<-1 Hasta n Hacer
		Escribir 'Ingrese el elemento ', i, ':'
		Leer a[i]
	FinPara
	MostrarArreglo(a,n)
	OrdenarPorInsercion(a,n)
	MostrarArreglo(a,n)
FinAlgoritmo // Crear un arreglo 'a' con capacidad para 'n' elementos

// Función para realizar el ordenamiento por inserción
Función OrdenarPorInsercion(a,n)
	Para j<-2 Hasta n Hacer
		clave <- a[j] // Leer y almacenar 'n' elementos en el arreglo 'a'
		i <- j-1
		// Desplazar elementos mayores que la clave hacia adelante
		Mientras i>=1 Y a[i]>clave Hacer // Mostrar el arreglo antes de ordenar
			a[i+1]<-a[i] // Llamar a la función de ordenamiento
			i <- i-1 // Mostrar el arreglo después de ordenar
		FinMientras
		a[i+1]<-clave
	FinPara
FinFunción // Tomar el elemento actual 'a[j]' como clave a insertar

// Función para mostrar los elementos del arreglo
Función MostrarArreglo(a,n)
	Para i<-1 Hasta n-1 Hacer
		Escribir a[i], ', 'Sin Saltar // Desplazar elemento hacia adelante
	FinPara
	Escribir a[n]
FinFunción // Insertar la clave en la posición correcta
