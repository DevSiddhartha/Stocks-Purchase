const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current)
{
    if (initial > current)
    {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        output.innerText = "Hey the loss is " + loss + " and the percentage is " + lossPercentage.toFixed(2);
    } else if (initial < current)
    {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        output.innerText = "Hey the profit is " + profit + " and the percentage is " + profitPercentage.toFixed(2);
    } else
    {
        output.innerText = "No pain no gain and no gain no pain :("
    }

}

function submitHandler()
{
    if (initialPrice.value === "" || stocksQuantity.value === "" || currentPrice.value === "")
    {
        output.innerText = "Please fill out all the fields!";
        return;
    }
    if (initialPrice.value < 0 || stocksQuantity.value < 0 || currentPrice.value < 0)
    {
        output.innerText = "Please fill out non negative values for every field";
        return;
    }
    if (initialPrice.value === '0' || stocksQuantity.value === '0' || currentPrice.value === '0')
    {
        output.innerText = "Please fill out non zero values for every field";
        return;
    }
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, curr);
}

submitBtn.addEventListener("click", submitHandler)
