function voltar() {
    window.history.back();
}

function pesquisarProduto() {
    var termo = document.getElementById("termo").value.trim().toLowerCase();
    if (termo === "") return false;
    
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/pesquisar_produto");
    form.style.display = "none";
    
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "termo");
    input.setAttribute("value", termo);
    form.appendChild(input);
    
    document.body.appendChild(form);
    form.submit();
    return false;
}

function listarProdutos() {
    window.location.href = "/listar_produtos";
}

function alterarProduto() {
    var codigo = document.getElementById("codigoAlterar").value.trim();
    var novoNome = document.getElementById("novoNome").value.trim();
    var novoPreco = parseFloat(document.getElementById("novoPreco").value.trim());
    var novoEstoque = parseInt(document.getElementById("novoEstoque").value.trim());
    
    if (codigo === "" || novoNome === "" || isNaN(novoPreco) || isNaN(novoEstoque)) return false;
    
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/alterar_produto");
    form.style.display = "none";
    
    var codigoInput = document.createElement("input");
    codigoInput.setAttribute("type", "hidden");
    codigoInput.setAttribute("name", "codigo");
    codigoInput.setAttribute("value", codigo);
    form.appendChild(codigoInput);
    
    var novoNomeInput = document.createElement("input");
    novoNomeInput.setAttribute("type", "hidden");
    novoNomeInput.setAttribute("name", "novo_nome");
    novoNomeInput.setAttribute("value", novoNome);
    form.appendChild(novoNomeInput);
    
    var novoPrecoInput = document.createElement("input");
    novoPrecoInput.setAttribute("type", "hidden");
    novoPrecoInput.setAttribute("name", "novo_preco");
    novoPrecoInput.setAttribute("value", novoPreco);
    form.appendChild(novoPrecoInput);
    
    var novoEstoqueInput = document.createElement("input");
    novoEstoqueInput.setAttribute("type", "hidden");
    novoEstoqueInput.setAttribute("name", "novo_estoque");
    novoEstoqueInput.setAttribute("value", novoEstoque);
    form.appendChild(novoEstoqueInput);
    
    document.body.appendChild(form);
    form.submit();
    return false;
}

function removerProduto() {
    var codigo = document.getElementById("codigoRemover").value.trim();
    if (codigo === "") return false;
    
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/remover_produto");
    form.style.display = "none";
    
    var codigoInput = document.createElement("input");
    codigoInput.setAttribute("type", "hidden");
    codigoInput.setAttribute("name", "codigo");
    codigoInput.setAttribute("value", codigo);
    form.appendChild(codigoInput);
    
    document.body.appendChild(form);
    form.submit();
    return false;
}
