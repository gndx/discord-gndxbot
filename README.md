# discord-gndxbot

Este es un Bot de Discord de la comunidad de GNDX.

Ejecuta `npm install` para instalar los módulos necesarios.

Luego `npm run dev` para correr el proyecto en modo de desarrollo o `npm start` para modo producción.

## Command Handler Template

El **Command Handler** ayuda a separar todos los comandos de nuestro Bot en diferentes archivos.

Cada vez que queramos agregar un nuevo comando lo debemos de hacer dentro de la carpeta `/src/commands/`, creamos una archivo `nombre_del_comando.js` y ahí agregamos un objeto con las características de nuestro comando.

_Ademas con un Command Handler podemos crear un comando de ayuda._

```js
const command_name = {
  name: "",
  description: "",
  run: (msg, args) => {
    // Code...
  },
};

module.exports = reglas;
```
