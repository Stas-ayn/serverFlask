from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
db = SQLAlchemy(app)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(50))
    task_1 = db.Column(db.Text)
    task_2 = db.Column(db.Text)
    task_3 = db.Column(db.Text)


@app.route('/index')
@app.route('/', methods=['POST', 'GET'])
def index():
    
    if request.method == 'POST':
        day = request.form['day']
        task_1 = request.form['task_1']
        task_2 = request.form['task_2']
        task_3 = request.form['task_3']

        post = Post(day=day, task_1=task_1, task_2=task_2, task_3=task_3)

        try:
            db.session.add(post)
            db.session.commit()
            return redirect('/')
        except:
            return "Произошла ошибка"
        
    else:
        post = Post.query.all()
        print(len(post))
        print(Post.query.all())
        return render_template('mainpage.html', post=post)


@app.route('/about')
def about():
    return 'О нас'

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
