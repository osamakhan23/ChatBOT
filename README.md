# Flask and spaCy Chatbot

This project is a simple chatbot built with Flask and spaCy. It demonstrates basic natural language processing capabilities, such as text similarity, entity recognition, and sentence structure analysis.

## Installation

To set up the chatbot, follow these steps:

1. **Clone the Repository**
git clone https://github.com/osamakhan23/ChatBOT.git
cd [local repository]


2. **Create and Activate a Virtual Environment** (Recommended)
- Unix/macOS:
  ```
  python3 -m venv myvenv
  source venv/bin/activate
  ```
- Windows:
  ```
  python -m venv venv
  .\venv\Scripts\activate
  ```

3. **Install Dependencies**
pip install Flask spacy
pip install flask-cors


## Usage

To run the chatbot:

1. Start the Flask server:
python app.py


2. Open a web browser and navigate to `http://127.0.0.1:5000`.

3. Interact with the chatbot through the web interface.

## Customization

You can customize the chatbot by modifying the `app.py` file. This includes changing predefined responses, adjusting similarity thresholds, or adding new NLP features using spaCy.