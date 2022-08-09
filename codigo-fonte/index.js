//Importando O Express para o Projeto
const Express= require("express");

//Inicializando o Express  no Projeto Node.js
//New é uma instancia que indica uma nova aplicação, podendo trabalhar com mais de uma aplicação

const Aplicativo = new Express();

//Disponibilizo recurso (Endpoint) via http.
//A ordem dos parametros de Requisiçao e resposta importa
 Aplicativo.get("/", (RequisicaoCliente, RespostaServidor) =>{
    RespostaServidor.send("Hello Word!")
})
//Configuração da porta de acesso aos recursos do Express via http.
//ultima linha de codigo
Aplicativo.listen(1234, () => {console.log("Servidor Rodando!!!")
})

