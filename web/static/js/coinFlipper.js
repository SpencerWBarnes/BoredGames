// coinFlipper.js
// Helper functions for the coin flipping game

function getFlipResult()
{
    let result = Math.floor(Math.random()*2);
    return result;
}

function flip(coin, resultDisplay)
{
    let result = getFlipResult();
    let resultString = "";

    if (result != 0)
    {
        coin.setAttribute("class", "coin animate-heads");
        resultString = "Heads";
    }
    else
    {
        coin.setAttribute("class", "coin animate-tails");
        resultString = "Tails"; 
    }

    resultDisplay.textContent = resultString;
}