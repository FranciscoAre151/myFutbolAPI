# myFutbolAPI
API sobre agregar, actualizar y consultar partidos de futbol.

# Requerimientos
Se necesita instalar NodeJs (18.16.0)  y NPM (9.5.1).  
Ademas, se requieren instalar las dependencias con el siguiente comando desde la consola:

```
npm install
```

# Primer paso
Ejecutar el siguiente comando desde la consola:
```
npm run build
```
Luego,
```
node lib/index.js
```
Esta API corre localmente en el puerto 9000.

# Uso

* Existen distintas rutas para la creacion , actualizacion y consultas de partidos.
* Existen rutas para el registro y el login de usuarios. 
* Los usuarios cuentan con roles y el rol que tiene privilegios es el rol 'admin' que permite actualizar los partidos.
* Algunas rutas:
  - Ruta para consultar los partidos `/api/partidos/`
  - Ruta para insertar partido `/api/partidos/insertar`
  - Ruta para consultar partidos de un determinado equipo `/api/partidos/equipo/{nombre del equipo}`
  - Ruta para registrar usuario `/api/user/register`
  - Ruta para login del usuario `/api/user/login`
  - Ruta para actualizar partido `/api/update/{id del partido}`

# Test
Existen 3 test para testear el correcto funcionamiento de la API.
Pueden ejecutar los test con el siguiente comando:
```
npm run test
```
Se puede modificar que test utilizar modificando el package.json
