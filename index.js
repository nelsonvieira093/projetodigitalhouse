const usuarios = require('./database/users.json')
const listarIdadeMaior = () => usuarios.filter((usuario) => usuario.idade > 18)  

console.log(listarIdadeMaior())

