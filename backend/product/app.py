from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS
app = Flask(__name__)
CORS(app) 
# Configuración de la conexión a MongoDB
mongo_uri = "mongodb+srv://systemR2:8DRKGWP16bRvNRzM@cluster0.gta3o43.mongodb.net/"
mongo_client = MongoClient(mongo_uri)
db = mongo_client["R2"]
collection = db["products"]

@app.route('/products', methods=['GET'])
def get_products():
    products = []
    for product in collection.find():
        products.append({
            "id": str(product["_id"]),
            "nombre": product["nombre"]
            # Agrega más campos según tu esquema de datos
        })
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
