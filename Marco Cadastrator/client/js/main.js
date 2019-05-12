$(function(){

    apagarCampos();
    incluir();

})

function apagarCampos(){

    $('#botao-apagar-campos').click(() => {
        $('#formulario-de-cadastro').trigger("reset");
    })

}

function incluir(){

    $('#botao-incluir').click(function(){
        
        event.preventDefault();

        console.log(dadosDoCadastro.nome);

    });

}

var dadosDoCadastro = {

    nome: $('#nome').text(),
    email: $('#email').text(), 
    tipo: $('#tipo-de-contato').change(() => {var opcaoDeContatoSelecionada = $('#tipo-de-contato option:selected').text();}),
    empresa: $('#empresa').change(() => {var opcaoDeEmpresaSelecionada = $('#empresa option:selected').text();}),
    cargo: $('#cargo').text(),
    telefone01: $('#telefone01').text(),
    telefone02: $('#telefone02').text(),
    celular01: $('#celular01').text(),
    celular02: $('#celular02').text(),
    pais: $('#pais').change(() => {var opcaoDePaisSelecionada = $('#pais option:selected').text();}),
    estado: $('#estado').change(() => {var opcaoDeEstadoSelecionada = $('#estado option:selected').text();}),
    cidade: $('#cidade').text(),
    endereco: $('#endereco').text(),
    bairro: $('#bairro').text(),
    cep: $('#cep').text()

};
