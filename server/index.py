# flask API

from crypt import methods
from flask import Flask, request
from flask_cors import CORS
import pickle
import numpy as np
app = Flask('__name__')
CORS(app)


model=pickle.load(open('/home/saber/Bureau/Simplon/Saber Cherifi/Sem 11/siteweb/server/model.pkl','rb'))

@app.route('/',methods=['GET'])
def home():
    return "hey"


@app.route('/predict',methods=["POST"])
def predict():
    a = request.get_json(force=True)
    return a['bedrooms']
    

if(__name__=='__main__'):
    app.run(debug=True,port=8000)

