from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import spacy

# Load SpaCy (the model loading can be omitted for now)
# nlp = spacy.load("en_core_web_sm")

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    message = data['message']

    # Echo the message
    response = f"Echo: {message}"

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
