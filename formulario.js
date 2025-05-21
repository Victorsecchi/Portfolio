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
        // Obter valores dos campos
        this.nome = document.getElementById('nome').value;
        this.email = document.getElementById('email').value;
        this.fone = document.getElementById('fone').value;
        this.idade = document.getElementById('idade').value;
        this.mensagem = document.getElementById('mensagem').value;
        this.dt_cad = document.getElementById('data_cadastro').value;
        
        // Obter valor do radio selecionado
        const radioSelecionado = document.querySelector('input[name="tipo_contato"]:checked');
        this.tipo = radioSelecionado ? radioSelecionado.value : null;

        // Montar a mensagem de aviso pra interagir com o usuário uma única vez
        let camposFaltantes = [];
        
        if(!this.nome || this.nome.trim() === '') camposFaltantes.push("Nome");
        if(!this.email || this.email.trim() === '') camposFaltantes.push("Email");
        if(!this.fone || this.fone.trim() === '') camposFaltantes.push("Telefone");
        if(!this.mensagem || this.mensagem.trim() === '') camposFaltantes.push("Mensagem");
        if(!this.dt_cad) camposFaltantes.push("Data de cadastro");
        if(!this.tipo) camposFaltantes.push("Tipo de contato");
        
        if(camposFaltantes.length > 0) {
            alert(`Os seguintes campos precisam ser preenchidos: ${camposFaltantes.join(', ')}`);
            return false;
        }

        // Se chegou aqui, todos os campos foram preenchidos
        this.adicionarNaTabela();
        alert('Os dados do formulário foram inseridos na tabela');
        return false; // Impede o envio do formulário para manter os dados na página
    }
    
    adicionarNaTabela() {
        const tbody = document.querySelector('.grid tbody');
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${this.nome}</td>
            <td>${this.email}</td>
            <td>${this.fone}</td>
            <td>${this.idade}</td>
            <td>${this.mensagem}</td>
            <td>${this.dt_cad}</td>
            <td>${this.tipo}</td>
            <td>
                <button onclick="formulario.editar(this)" class="botao">Editar</button>
                <button onclick="formulario.deletar(this)" class="botao">Deletar</button>
            </td>
        `;
        
        tbody.appendChild(tr);
    }
    
    editar(botao) {
        const linha = botao.closest('tr');
        const celulas = linha.cells;
        
        document.getElementById('nome').value = celulas[0].textContent;
        document.getElementById('email').value = celulas[1].textContent;
        document.getElementById('fone').value = celulas[2].textContent;
        document.getElementById('idade').value = celulas[3].textContent;
        document.getElementById('mensagem').value = celulas[4].textContent;
        document.getElementById('data_cadastro').value = celulas[5].textContent;
        
        // Selecionar o radio button correto
        const tipoContato = celulas[6].textContent;
        document.querySelector(`input[name="tipo_contato"][value="${tipoContato}"]`).checked = true;
        
        // Remover a linha da tabela
        linha.remove();
    }
    
    deletar(botao) {
        if(confirm('Tem certeza que deseja excluir este registro?')) {
            const linha = botao.closest('tr');
            linha.remove();
        }
    }
}

// Criar a instância global do formulário
const formulario = new Formulario();

// Garantir que o script só execute após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado");
    
    // Verificar se o script está sendo carregado mais de uma vez
    if (window._formularioLoaded) {
        console.warn("Formulário JS já foi carregado anteriormente!");
        return;
    }
    window._formularioLoaded = true;
    
    // Não adicionar event listeners adicionais
    const form = document.querySelector('.formulario');
    if (form) {
        console.log("Formulário encontrado");
        // NÃO adicione nenhum event listener aqui
    } else {
        console.error("Formulário não encontrado no DOM");
    }
});
