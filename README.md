# Code challenge para aspirantes full stack javascript TODO1

El objetivo del presente respositorio es para validar los conocimientos del aspirante mediante una prueba progresiva en cuanto dificultad se refiere.

# Importante
Por favor leer primero todas el documento antes de empezar la prueba, la prueba debe ser completada en el máximo de 2 días una ves iniciada.

Para empezar el ejercicio por favor hacer un clone del respositorio y generar una rama con el siguiente formarto todo1_nombre_apellido ej: todo1_santiago_sanchez.

La entrega del ejercicio resuelto debe ser comunicado a su reclutador o en su defecto al correo ssanchez@todo1.com con el enlace de la rama con el siguiente formato todo1_nombre_apellido.
## Objetivo general
El presente ejercicio tiene como objetivo ténico poner en práctica un CRUD (lectura, escritura, modificación y borrado) de datos, para lo cual se necesita resolver los siguientes enunciados:
### 1.-
El formulario 1 consta de 2 inputs (name, lastName) y un botón "Siguiente" el cual debería enviar al usuario al paso 2.
### 2.-
El formulario 2 consta de 3 inputs (email, phoneNumber, cc) y 2 botones uno "Anterior" el cual le debe permitir al usuario regresar al formulario en caso de querer modificar los valores ingresados en el formulario 1, el botón "Enviar" debe permitir al usuario insertar en la base de datos los datos del usuario asi generadon un registro nuevo, una ves con la confirmación del API del registro nuevo el formulario debe limpiarce y volver al paso 1, listo para el ingreso de un nuevo usuario.
### 3.-
Cuando un usuario nuevo es ingresado al consumir el API este se debe mostrar inmediatamente en la tabla en la parte derecha, no siendo válido forzar la recarga del navegador (window.location.reload).
### 4.-
En la tabla se debe añadir 2 botones a cada fila uno de edición el cual permitira al usuario cambiar cualquier propiedad nombre, email. telefono, etc..., el segudo botón de borrado debe eliminar el registro de la tabla, para ambos casos tanto en la edición y el borrado una ves obtenido la respuesta correcta del API los cambios se deben ver reflejados inmediatamente en la tabla, no siendo válido forzar la recarga del navegador (window.location.reload).
### 5.-
La tabla 
## Puntos a tomar encuenta
### 1.-
El ejercicio esta desarrolado con https://mui.com/, siendo este el framework UX usado por la empresa por tanto es importante que la resolución del test sea con el uso de este framework, el candidato tiene la potestad de usar otras librearias que ayuden a completar el ejercicio siendo librearías para vallidación de campos, peticiones a servidor, manejo de estados de la aplicación, etc... 
### 2.-
La edición del usuario esta sujeta a la experiencia que el cadidato le pueda dar siendo que se haga en el propio formulario o usando cualquier otra experiencia de usuario como puede ser un modal
### 3.-
Indicadores, al ser un desarrollo front end en todo momento se debe indicar al usaurio el estado de sus acciones es decir si se consume un API mostrar un loader para indicar que se esta haciendo algo, si es correcto la petición hacia el API mostrar una alerta indicando que la operación a sido satisfactoria, si en la petición el API a sufrido un error se debe indicar un alerta de error mucho mejor si se indica el error dado.
### 4.-
Validación de los campos de entrada del formularión se dara mucho valor buenas practicas de validación de datos, caracteres no válidos, espacios en blanco, campos que solo admitan números, validación del formato del correo, etc...
### 5.-
Se adjunta las colección de API para que el candidato pueda explorar el API de usuarios mediante https://www.postman.com/ aplicación que la pueden usar gratuitamente.

[Colección de APIS](https://www.google.com)
[Entorno de APIS](https://www.google.com)

### 6.-
Cualquier duda sobre el ejercicio, por favor remitirla a Santiago Sánchez ssanchez@todo1.com para su aclaramiento.

Muchas suerte!!!
