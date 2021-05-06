from flask import Flask, render_template
from flask import jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
cors = CORS(app)

rajendranagarModel = pickle.load(open('rajendranagar.pkl', 'rb'))
raipurModel = pickle.load(open('raipur.pkl', 'rb'))
maruthuModel = pickle.load(open('maruthu.pkl', 'rb'))

@app.route('/rajendranagar', methods = ['POST'])
def rajendranagar():  
    arr = np.array(rajendranagarModel).tolist()
    result = []
    for x in arr:
        if int(x[0])>0:
            result.append(x[0])
        else:
            result.append(0)
    return jsonify(result)

@app.route('/raipur',methods = ['POST'])
def raipur():  
    arr = np.array(raipurModel).tolist()
    result = []
    for x in arr:
        if int(x[0])>0:
            result.append(x[0])
        else:
            result.append(0)
    return jsonify(result)

@app.route('/maruthu', methods = ['POST'])
def maruthu():  
    arr = np.array(maruthuModel).tolist()
    result = []
    for x in arr:
        if int(x[0])>0:
            result.append(x[0])
        else:
            result.append(0)
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)