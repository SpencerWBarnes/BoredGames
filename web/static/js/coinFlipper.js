// coinFlipper.js
// Helper functions for the coin flipping game

// Necessary evil to know coin's state between clicks
// Default is last div created, in this case Tails
var oldResult = 0;

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
        // Flip 540
        newCoin.classList.remove("animate-duplicate");
        newCoin.classList.add("animate-opposite");
    }
    else
    {
        // Flip 360
        newCoin.classList.remove("animate-opposite");
        newCoin.classList.add("animate-duplicate");
    }

    // The animations are hard set to start and end on certain faces
    // Our choices:
    //      1) Create an animation from each face to each face (4 total)
    //      2) Make it blur so no one knows
    //      3) Dynamically flip which face is on top
    
    // Here is choice 3
    let heads = newCoin.children[0];
    let tails = newCoin.children[1];
    if (result != 0)
    {
        // Heads is top
        heads.style.transform = "";
        tails.style.transform = "rotateY(-180deg)";
    }
    else
    {
        // Tails is top
        tails.style.transform = "";
        heads.style.transform = "rotateY(-180deg)";
    }
    
    // Reflow element so animation runs again
    coin.parentNode.replaceChild(newCoin, coin);

    resultDisplay.textContent = resultToString(result);
    console.log("old: "+oldResult+" cur: "+result);
    oldResult = result;
}