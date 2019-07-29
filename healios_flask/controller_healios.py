#!/usr/bin/env python3
from flask import Flask, render_template, request, jsonify
import time, requests, ast, sqlite3, json
from mapper import Database
from watson import watson_nlp
from flask_cors import CORS


connection = sqlite3.connect('healios.db', check_same_thread=False)
cursor = connection.cursor()


app = Flask('__name__')
cors = CORS(app)

@app.route('/watson_nlu', methods=['GET', 'POST'])
def watson_nlu():

    if request.method == 'POST':
        q1 = json.loads(request.data)
        print(q1)
        nlp_txt = q1["text"]
        nlp_q1 = ast.literal_eval(watson_nlp(nlp_txt))
        tm = time.time()
        
        
        q1_sent = nlp_q1['sentiment']['document']['score']
        q1_label = nlp_q1['sentiment']['document']['label']
        q1_sad = nlp_q1['emotion']['document']['emotion']['sadness']
        q1_joy = nlp_q1['emotion']['document']['emotion']['joy']
        q1_fear = nlp_q1['emotion']['document']['emotion']['fear']
        q1_dis = nlp_q1['emotion']['document']['emotion']['disgust']
        q1_ang = nlp_q1['emotion']['document']['emotion']['anger']

        
        with Database() as db:
          db.cursor.execute('INSERT INTO freeform (q1,tm) VALUES ("{}",{})'.format(nlp_txt,tm))
          db.cursor.execute('''INSERT INTO freescore (userid, q1_sent,q1_label,q1_sad, q1_joy, q1_fear, q1_dis, q1_ang, tm) 
                            VALUES (1,{},"{}",{},{},{},{},{},{}

                            )'''.format(q1_sent,q1_label,q1_sad, q1_joy, q1_fear, q1_dis, q1_ang, tm))
        return jsonify(nlp_q1)





if __name__ == '__main__':
    app.run(debug=True)

