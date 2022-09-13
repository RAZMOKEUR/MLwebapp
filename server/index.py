# flask API

import json
from crypt import methods
from flask import Flask, request
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd
app = Flask('__name__')
CORS(app)


model=pickle.load(open('/home/saber/Bureau/Simplon/Saber Cherifi/Sem 11/siteweb/server/model.pkl','rb'))

@app.route('/',methods=['GET'])
def home():
    return 'hey'


@app.route('/predict',methods=["POST"])
def predict():
    data = request.get_json(force=True)
    print(data)
    data = json.dumps(data)
    data = json.loads(data)
    df = pd.json_normalize(data)
    df = df.astype(float)
    prediction = model.predict(df)
    return list(prediction)
    

if(__name__=='__main__'):
    app.run(debug=True,port=8000)

