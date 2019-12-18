from flask import Flask, render_template

# Initialize app
app = Flask(__name__)

# Main route
@app.route("/")
def HelloWorld():
    # Grab file from static folder
    return app.send_static_file("helloWorld.html")

# Run app
if __name__ == "__main__":
    app.run()