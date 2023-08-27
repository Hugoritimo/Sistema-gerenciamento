from flask import Flask, render_template, request, redirect

app = Flask(__name__)

produtos = []


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/cadastrar_produto", methods=["POST"])
def cadastrar_produto():
    codigo = request.form["codigo"]
    nome = request.form["nome"]
    preco = float(request.form["preco"])
    estoque = int(request.form["estoque"])

    produto = {"codigo": codigo, "nome": nome, "preco": preco, "estoque": estoque}

    produtos.append(produto)
    return redirect("/listar_produtos")


@app.route("/listar_produtos")
def listar_produtos():
    return render_template("listar_produtos.html", produtos=produtos)


@app.route('/pesquisar_produto', methods=['GET', 'POST'])
def pesquisar_produto():
    if request.method == 'POST':
        termo = request.form['termo'].lower()

        encontrados = []
        for produto in produtos:
            if termo in produto["nome"].lower() or termo == produto["codigo"]:
                encontrados.append(produto)

        return render_template('pesquisar_produto.html', encontrados=encontrados)

    return render_template('pesquisar_produto.html', encontrados=[])

@app.route("/alterar_produto", methods=["POST"])
def alterar_produto():
    codigo = request.form["codigo"]

    for produto in produtos:
        if produto["codigo"] == codigo:
            novo_nome = request.form["novo_nome"]
            novo_preco = float(request.form["novo_preco"])
            novo_estoque = int(request.form["novo_estoque"])

            produto["nome"] = novo_nome
            produto["preco"] = novo_preco
            produto["estoque"] = novo_estoque

            return redirect("/listar_produtos")

    return "Produto não encontrado."


@app.route("/remover_produto", methods=["POST"])
def remover_produto():
    codigo = request.form["codigo"]

    for produto in produtos:
        if produto["codigo"] == codigo:
            produtos.remove(produto)
            return redirect("/listar_produtos")

    return "Produto não encontrado."


if __name__ == "__main__":
    app.run(debug=True)
