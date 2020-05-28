from flask import Flask, render_template

app = Flask(__name__,
            static_url_path='', 
            static_folder='../web/static',
            template_folder='../web/templates')

GAMES = ["helloWorld", "coinFlipper"]

@app.route("/")
def loadHomePage():
    return render_template("index.html", cards=GAMES)

@app.route("/<string:page_name>")
def loadPage(page_name):
    try:
        return render_template(page_name+".html")
    except:
        return render_template('404.html'), 404

if __name__ == "__main__":
    app.run()