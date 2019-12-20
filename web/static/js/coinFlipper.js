// coinFlipper.js
// Helper functions for the coin flipping game

function getFlipResult()
{
    let result = Math.floor(Math.random()*2);
    return result;
}

function interpretResult(result)
{
    if (result != 0)
        return "Heads";
    return "Tails";
}

function flip(resultDisplay)
{
    resultDisplay.textContent = interpretResult(getFlipResult());
}