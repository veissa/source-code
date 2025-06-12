from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Serve static files from the root directory
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

# Serve index.html for the root URL
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=os.environ.get('PORT', 5000)) 