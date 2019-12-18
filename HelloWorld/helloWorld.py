from flask import Flask, render_template

# Initialize app
app = Flask(__name__)

# Main route
@app.route("/")
def HelloWorld():
    return app.send_static_file("helloWorld.html")

if __name__ == "__main__":
    app.run()