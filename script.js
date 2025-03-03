function showProverb() {
    const proverbs = [
        "Darbs dara darītāju.", // Work makes the worker.
        "Kas sēj vēju, pļauj vētru.", // Who sows the wind, reaps the storm.
        "Taisnība vienmēr uzvar.", // Justice always wins.
    ];
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById("proverb").innerText = proverbs[randomIndex];
}
