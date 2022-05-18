// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  let gato = { //creamos el objeto con las keys y los values que nos pedian.
    nombre: nombre, //le asignamos la key: nombre, y al value le asignamos el valor que recibe por parametro desde la función.
    edad: edad, //""                      ""                          ""                        ""                      ""
    meow: () => { //key meow: que contiene una funcion que retorna el valor "meow"
      return "Meow!"
    }
  }
  return gato //devolvemos el objeto.
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null; //Le agregamos una key al objeto con value null
  return objeto // Retornamos el objeto
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]() //Invocamos la funcion que contiene la key metodo dentro del objeto.
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  let resultado = objetoMisterioso.numeroMisterioso * 5 //declaramos una variable resultado a la que le dimos el value: de un objeto al que llamamos por el parametro de la funcion. Este objeto contiene una key que se llama numeroMisterioso que a su vez tiene un value x, y multiplicamos ese value por 5.
  return resultado

}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad] // Usamos delete para borrar la key "unaPropiedad" que recibimos por parametro de la función
  return objeto //retornamos el objeto
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  let objeto = {  // creamos un objeto el cual recibe los values de las keys(nombre, email y password) a travez del parametro de la función.
    nombre: nombre,
    email: email,
    password: password,
  }
  return objeto 

}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if(usuario.email){ //Preguntamos si el usuario tiene un value definido para la key email.
    return true //si tiene el value definido retorna true, sino false.
  }  
  return false
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto[propiedad]){ //preguntamos si dentro del objeto existe una key llamada propiedad que tenga el value "propiedad"(string)
    return true
  }
  return false
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  // usuario["password"] == password


  if(usuario["password"] == password){ // preguntamos si la password recibida por parametro es igual al value de la key password
    return true
  }
  return false
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword; // entramos a la keyn password del objeto con dot notation, donde reemplazamos el value de la key por el value recibido por parametro "nuevaPassword"
  return usuario
  

}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo) //con dot notation entramos a la key amigos(que es un array) del objeto, y con push agregamos al final al array la propiedad "nuevoAmigo"
  return usuario
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (let index = 0; index < usuarios.length; index++) {//Usamos for para recorrer el array usuarios, empezando desde el indice 0(princpio del array), y que lo recorra hasta el final.
    usuarios[index].esPremium = true //En cada vuelta del loop le agregamos el value true a la key esPremium de cada objeto dentro del array.
  }
  return usuarios
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
var suma = 0 // declaramos una variable con el value 0. Esta va a ser la variable acumuladora
for (var i = 0; i < usuario.posts.length; i++) { //Con for recorrimos el array que es el value de la key "posts".
  suma = suma + usuario.posts[i].likes; // Sumamos el value de la key "likes" de cada objeto dentro del array que se encuentra dentro del objeto "Usuario", que se encuentra en cada objeto. Usamos suma para almacenar ese valor en cada iteracion. 

}
return suma
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
producto.calcularPrecioDescuento = function () {//agregamos al objeto una key llanada calcularPrecioDescuento, que contiene una funcion que retorna el precio menos el precio x el porcentaje de descuento.
    return this.precio - ( this.precio * this.porcentajeDeDescuento );
  };
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
