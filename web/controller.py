#!/usr/bin/env python3
from flask import Flask, render_template, request, url_for, Markup
import time
import requests
import ast
app = Flask('__name__')


@app.route('/')
def frontpage():
    return render_template('index.html')


# @app.route('/patient', methods=['GET', 'POST'])
# def patient():
#     if request.method == 'GET':
#         return render_template('patient.html')
#     else:
#         # message = request.form['message']
#         # return render_template('patient.html',
#         #                        message=message)
#         pass


@app.route('/patient', methods=['GET', 'POST'])
def patient():
    if request.method == 'GET':

        r = requests.get("https://helios-6e337.firebaseio.com/messages.json")
        chat_raw = r.text
        chat_json = ast.literal_eval(chat_raw)
        bb = []
        dd = []
        chat_user_id = []
        chat_messages = []
        chat_package = []

        for ab in chat_json:
            bb.append(ab)
        for cc in bb:
            dd.append(chat_json[cc])
        for i in range(0, len(dd)):
            chat_messages.append(dd[i]['text'])
        for ii in range(0, len(dd)):
            chat_user_id.append(dd[ii]['user']['_id'])

        for iii in range(0, len(chat_user_id)):
            if chat_user_id[iii] == 'ZdKdGF0KpacfEFiLqj3UxVwkYYD3':
                chat_package.append(Markup('''
                        <div class="direct-chat-msg right">
                                  <div class="direct-chat-info clearfix">
                                    <span class="direct-chat-name pull-right">John Doe</span>
                                    <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                                  </div>
                                  <!-- /.direct-chat-info -->
                                  <div class="direct-chat-text">
                                    {}
                                  </div>
                                  <!-- /.direct-chat-text -->
                                </div>'''
                                           ).format(chat_messages[iii]))
            else:
                chat_package.append(Markup('''
                        <div class="direct-chat-msg">
                                <div class="direct-chat-info clearfix">
                                  <span class="direct-chat-name pull-left">Reanu Keeves</span>
                                  <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                                </div>
                                <!-- /.direct-chat-info -->
                                <div class="direct-chat-text">
                                  {}
                                </div>
                                <!-- /.direct-chat-text -->
                              </div>
                        ''').format(chat_messages[iii]))

        return render_template('patient.html', chat_package=chat_package)
    else:
        chat_post = request.form['message']
        print(chat_post)
        a = time.time()
        b = a * 1000
        c = b//1
        tm = int(c)

        payload = {"createdAt": tm, "text": chat_post, "user": {
            "_id": "ZdKdGF0KpacfEFiLqj3UxVwkYYD3", "name": "John Doe"}}
        r = requests.put(
            "https://helios-6e337.firebaseio.com/messages.json", data=payload)

        r = requests.get("https://helios-6e337.firebaseio.com/messages.json")
        chat_raw = r.text
        chat_json = ast.literal_eval(chat_raw)
        bb = []
        dd = []
        chat_user_id = []
        chat_messages = []
        chat_package = []

        for ab in chat_json:
            bb.append(ab)
        for cc in bb:
            dd.append(chat_json[cc])
        for i in range(0, len(dd)):
            chat_messages.append(dd[i]['text'])
        for ii in range(0, len(dd)):
            chat_user_id.append(dd[ii]['user']['_id'])

        for iii in range(0, len(chat_user_id)):
            if chat_user_id[iii] == 'ZdKdGF0KpacfEFiLqj3UxVwkYYD3':
                chat_package.append(Markup('''
                        <div class="direct-chat-msg right">
                                  <div class="direct-chat-info clearfix">
                                    <span class="direct-chat-name pull-right">John Doe</span>
                                    <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                                  </div>
                                  <!-- /.direct-chat-info -->
                                  <div class="direct-chat-text">
                                    {}
                                  </div>
                                  <!-- /.direct-chat-text -->
                                </div>'''
                                           ).format(chat_messages[iii]))
            else:
                chat_package.append(Markup('''
                        <div class="direct-chat-msg">
                                <div class="direct-chat-info clearfix">
                                  <span class="direct-chat-name pull-left">Reanu Keeves</span>
                                  <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                                </div>
                                <!-- /.direct-chat-info -->
                                <div class="direct-chat-text">
                                  {}
                                </div>
                                <!-- /.direct-chat-text -->
                              </div>
                        ''').format(chat_messages[iii]))

        return render_template('patient.html', chat_package=chat_package)


@app.route('/cases')
def table():
    return render_template('cases.html')


@app.route('/chat')
def chat():
    return render_template('widgets.html')


@app.route('/calendar')
def test():
    return render_template('calendar.html')


if __name__ == '__main__':
    app.run(debug=True)
