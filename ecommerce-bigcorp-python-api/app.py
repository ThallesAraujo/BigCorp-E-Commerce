from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)

with open('clientes.json') as database:
    clientes = json.load(database)

@app.route("/ecommerce/v1/clientes", methods =['POST', 'PUT', 'GET'])
def cliente():
    
    if request.method == 'POST':
        cliente = request.get_json()
        cliente["id"] = len(clientes)
        clientes.append(cliente)
        saveClientes(clientes)

    if request.method == 'GET':
        with open('clientes.json') as database:
            clientes_retorno = json.load(database)
            return jsonify(clientes_retorno)

    if request.method == 'PUT':
        clientes[request.get_json()['id']] = request.get_json()
        print(clientes[request.get_json()['id']])
        saveClientes(clientes)

@app.route("/ecommerce/v1/clientes/<id>", methods =['GET', 'DELETE'])
def getCliente(id):
    
    if(id is None):
        return jsonify(clientes)

    if request.method == 'GET':
        with open ('clientes.json') as database:
            clientes = json.load(database)
            return clientes[int(id)]

    if request.method == 'DELETE':
        with open ('clientes.json') as database:
            clientes = json.load(database)
            clientes[int(id)]["status"] = "inativo"
            saveClientes(clientes)

@app.route("/ecommerce/v1/clientes/<id>/pedidos", methods =['GET'])
def getPedidosCliente(id):
    with open('pedidos.json') as database:
        data = json.load(database)
        pedidos = []
        pedidos = data['pedidos']
        if request.method == 'GET':
            return jsonify(pedidos[int(id)])

@app.route("/ecommerce/v1/pedidos", methods =['GET'])
def getPedidos():
    with open('pedidos.json') as database:
        data = json.load(database)
        pedidos = []
        pedidos = data['pedidos']
        if request.method == 'GET':
            return jsonify(pedidos)

@app.route("/ecommerce/v1/produtos", methods =['GET'])
def getProdutos():
    with open('produtos.json') as database:
        data = json.load(database)
        produtos = []
        produtos = data['produtos']
        if request.method == 'GET':
            return jsonify(produtos)


def saveClientes(clientes):
    with open('clientes.json', 'w') as database:
        json.dump(clientes, database)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
    #app.run()