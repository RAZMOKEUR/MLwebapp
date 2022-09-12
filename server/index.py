# flask API

from flask import Flask, request
from flask_cors import CORS
import pickle
import numpy as np

app = Flask('__name__')
CORS(app)


model=pickle.load(open('/home/saber/Bureau/Simplon/Saber Cherifi/Sem 11/siteweb/server/model.pkl','rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=["POST"])
def predict():
    a = request.form.get("bedrooms")
    return a

if(__name__=='__main__'):
    app.run(debug=True,port=8000)

