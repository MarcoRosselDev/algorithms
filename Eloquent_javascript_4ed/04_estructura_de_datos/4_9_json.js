// json no acepta comentarios, funciones ni nada computable
// solo tipos de datos y los nombres de las propiedades deven ir en comillas dobles
const json = {
  "user_name": "marco",
  "age": 32,
  "my_array": [1, 2, 52112, 49]
}

// para compartir atraves de la red devemos serializar el json
// para converirlo a string plano
const txt = JSON.stringify(json)
console.log(typeof txt); // string

const to_json = JSON.parse(txt)
console.log(typeof to_json); // object

/* por que serializar antes de enviar por la web?
por que los datos estan almacenados en memoria y estos tienen direcciones que se apuntan entre ellos y no podemos compartir esa informacion por que no es practico ni util, por eso lo convertimos a texto plano, para que una vez en la pc de destino se conviertan en datos ocupables y gestionados por la nueva pc.

basicamente las dos pc's tienen distintos entornos y maneras de gestionar las variables y tipos de datos, por lo que no requieren la informacion de direccion de memoria de mi disco duro o ram.
*/
