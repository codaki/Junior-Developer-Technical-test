# Junior Developer Technical Test

## Overview
Este repositorio contiene soluciones al test técnico para la posición de **Junior Developer**. El test está dividido en dos secciones:

- **Sección 1**: Tres ejercicios algorítmicos  
- **Sección 2**: Aplicación de lista de tareas (Todo List) basada en consola

---

## Sección 1: Ejercicios Algorítmicos

### **Ejercicio 1: FizzBuzz**  
**Archivo**: `Ejercicio1.js`


- Se procesan los números del 1 al 100 con las salidas : `"Fizz"`, `"Buzz"` o `"FizzBuzz"`.
- Se prioriza la verificación de múltiplos de ambos 3 y 5 antes de las verificaciones individuales.

---

### **Ejercicio 2: Comprobador de Palíndromos**  
**Archivo**: `Ejercicio2.js`

- Se proporcionan dos implementaciones:
  1. Usando métodos incorporados de JavaScript (`split`, `reverse`, `join`)
  2. Usando un enfoque con bucles que compara caracteres desde ambos extremos
- Ambas soluciones manejan la unificación a mayúsculas/minúsculas y omiten espacios.

---

### **Ejercicio 3: Suma de Elementos Únicos**  
**Archivo**: `Ejercicio3.js`

- Se utiliza un set (mapa) para contar la frecuencias para de cada número.
- Devuelve la suma de los elementos que aparecen exactamente una vez en la lista.

---

## Sección 2: Aplicación de Lista de Tareas (Todo List)

**Archivo**: `todoApp.js`

- Implementación de una aplicación de lista de tareas basada en consola con las siguientes funcionalidades:
  - Agregar tareas
  - Ver todas las tareas
  - Marcar tareas como completadas
  - Eliminar tareas
- Se utiliza la interfaz `readline` de Node.js para la interacción con el usuario.


---

## Supuestos Realizados

- Todos los ejercicios se ejecutan en un entorno **Node.js**.
- La aplicación de tareas almacena los datos en memoria volatil.


- La aplicación se ejecuta hasta que el usuario la cierre explícitamente.

---

## Cómo Ejecutar

Cada archivo JavaScript puede ejecutarse utilizando **Node.js**:

```bash
cd .\Section_1\
node Ejercicio1.js
node Ejercicio2.js
node Ejercicio3.js
cd ..
cd .\Section_2\
node todoApp.js