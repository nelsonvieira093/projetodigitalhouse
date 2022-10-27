let bancoDeDados = require('./database/users.json')

// Filtrar usuários maiores de 18

const listarUsuariosMaioresDeIdade = () => {
    const lista = bancoDeDados.filter((usuario) => usuario.idade > 18 )

    return lista
}

// Adicionar informação de ativo: true para usuários

function adicionarNovaInformacao() {
    

   bancoDeDados = bancoDeDados.map((usuario) => (
        {...usuario, ativo: true}
    ))

  return bancoDeDados
 }

// Adicionar novo usuário

const adicionarUsuario = () => {
    
    if (!usuario) {
        
        console.log()
    }
}
