from flask import Flask, render_template

app = Flask(__name__,
            static_url_path='', 
            static_folder='web/static',
            template_folder='web/templates')

GAMES = ["first", "second", "third", "fourth", "fifth"]

@app.route("/")
def loadHomePage():
    return render_template("index.html", cards=GAMES)

if __name__ == "__main__":
    app.run()