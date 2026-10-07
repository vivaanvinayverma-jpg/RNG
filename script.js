function runRNG()    {
    function bankersRound(num) {
        const f = Math.floor(num);
        const sub = num - f;

        if (sub !== 0.5) {
            return Math.round(num);
        }

        return (f % 2 === 0) ? f : f + 1;
    }

    const minDollar = 1;
    const maxDollar = 100000;
    const rawDollar = (Math.random) * (maxDollar - minDollar) + minDollar;

    const fairRoundedDollar = bankersRound(rawDollar);

    document.getElementById("interface").innerText = `+$${fairRoundedDollar}.00`;
}