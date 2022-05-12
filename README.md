## Instructions to execute app

First execute the next command

```
npm install
```

Then execute this command

```
npm run dev
```

This command run the develop server

For the build to production use

```
npm run build
```

and then

```
npm start
```

In both cases, both for development and production the server is in [http://localhost:3000/](http://localhost:3000/)

Para el desarrollo de aplicación usé next js, ya que nos ayuda a escribir mejor código de react, además de que nos provee el renderizado del lado del servidor lo cual es muy útil para hacer validaciones de credenciales sin que el usuario se entere, además de que nos ayuda con la indexación y el SEO.
Además con la ayuda de typescript podemos tener un fuerte tipado de javascript, que aunque no es infalible, sí ayuda bastante a no cometer errores en los tipos.
Para el modelado de los componentes usé un poco de atomic design el cuál nos dice que empecemos desde los componentes más pequeños y construir más grandes.
Para el css usé sass ya que nos provee de mucha flexibilidad del lado del css.
Y por último hice first mobile, ya que lo primero que intentan servir los navegadores es la página para telefonos, por lo que es muy importante tener un buen diseño móvil.