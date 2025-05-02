from flask import Flask, request, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

HISTORY_FILE = 'history.json'

def load_history():
    try:
        with open(HISTORY_FILE, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return []

def save_history(history):
    with open(HISTORY_FILE, 'w') as f:
        json.dump(history, f)

@app.route('/history', methods=['GET'])
def get_history():
    return jsonify(load_history())

@app.route('/history', methods=['POST'])
def add_history():
    new_entry = request.json
    history = load_history()
    history.append(new_entry)
    save_history(history)
    return jsonify({"message": "Added"}), 200

if __name__ == '__main__':
    app.run(debug=True)