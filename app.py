from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/multiply', methods=['POST'])
def multiply():
    data = request.json

    result = data['a'] * data['b']
    print(result)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(port=5001)
