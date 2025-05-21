class Formulario {

    constructor() {
        this.nome     = null;
        this.email    = null;
        this.fone     = null;
        this.mensagem = null;
        this.dt_cad   = null;
        this.idade    = null;
        this.tipo     = null;
    }    

    // método
    Enviar() {
        this.nome = document.getElementById('nome').value;
        this.email = document.getElementById('email').value;
        this.fone = document.getElementById('fone').value;
        this.idade = document.getElementById('idade').value;
        this.mensagem = document.getElementById('mensagem').value;
        this.dt_cad = document.getElementById('dt_cad').value;
        this.tipo = document.getElementById('tipo').value;

        // Verificar se o nome foi preenchido
        if(document.getElementById('nome').value == null){
            alert("O nome precisa ser preenchido");
        }

        // Verificar se o email foi preenchido
        if(document.getElementById('email').value == null){
            alert("O nome precisa ser preenchido");
        }

        // Verificar se o telefone foi preenchido
        if(document.getElementById('fone').value == null){
            alert("O nome precisa ser preenchido");
        }

        // Verificar se a mensagem foi preenchida
        if(document.getElementById('mensagem').value == null){
            alert("O campo mensagem precisa ser preenchido");
        }

        // Verificar se o telefone foi preenchido
        if(document.getElementById('data_cadastro').value == null){
            alert("O campo data de cadastro precisa ser preenchido");
        }

        // Montar a mensagem de aviso pra interagir com o usuário uma 
        // única vez

        alert('Os dados do formulário foram inseridos');
    }

}

formulario = new Formulario();
