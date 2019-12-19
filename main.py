from flask import Flask, render_template

app = Flask(__name__,
            static_url_path='', 
            static_folder='web/static',
            template_folder='web/templates')

@app.route("/")
def loadHomePage():
    cards = ["first", "second", "third", "fourth", "fifth"]
    return render_template("index.html", cards=cards)

if __name__ == "__main__":
    app.run()