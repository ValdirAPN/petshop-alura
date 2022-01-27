const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conectado no BD com sucesso')

        const app = customExpress()

        app.listen(3000, () => console.log('Server is running on port 3000'))

    }
})
