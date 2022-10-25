const usuarios = require('./database/users.json')
const listarIdadeMaior = () => usuarios.filter((usuario) => usuario.idade > 2)  

console.log(listarIdadeMaior())

