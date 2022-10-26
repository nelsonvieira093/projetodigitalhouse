let usuarios = require('./database/users.json')

function adicionarNovaInformacao() {
    

   usuarios = usuarios.map((usuario) => (
        {...usuario, ativo: true}
    ))

  return usuarios
 }

 adicionarNovaInformacao()
 console.log(usuarios)