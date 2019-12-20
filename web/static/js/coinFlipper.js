// coinFlipper.js
// Helper functions for the coin flipping game

// Necessary evil to know coin's state between clicks
var oldResult = 1;

function getFlipResult()
{
    // Random outputs 0<x<1, scale up then floor to 0 or 1
    let result = Math.floor(Math.random()*2);
    return result;
}

function resultToString(result)
{
    // "Magic" strings... have to arbitrarily define this somewhere
    if (result != 0)
        return "Heads";
    return "Tails";
}

function flip(coin, resultDisplay)
{
    let result = getFlipResult();
    // Clone element to be reflowed/refreshed
    let newCoin = coin.cloneNode(true);

    if (result != oldResult)
    {
        // Flip 180
        newCoin.setAttribute("class", "coin animate-opposite");
    }
    else
    {
        // Flip 360
        newCoin.setAttribute("class", "coin animate-duplicate");
    }
    
    // Reflow element so animation runs again
    coin.parentNode.replaceChild(newCoin, coin);

    resultDisplay.textContent = resultToString(result);
    console.log("old: "+oldResult+" cur: "+result);
    oldResult = result;
}