const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
    const totalCoins = [];
    for (let i =0 ; i < coins.length; i++){
        const thisNum = Math.floor(money / coins[i]);
        for(let j =0 ; j < thisNum; j++){
            totalCoins.push(coins[i]);
        }
        money -= thisNum * coins[i];
    }
    return totalCoins;
}
    