document.addEventListener("DOMContentLoaded", () => {
    const proverbs = [
        "Darbs dara darītāju.", // Work makes the worker.
        "Kas sēj vēju, pļauj vētru.", // Who sows the wind, reaps the storm.
        "Taisnība vienmēr uzvar.", // Justice always wins.
        "Gudrs neprasa, muļķis neatbild.", // A wise man doesn’t ask, a fool doesn’t answer.
        "Nav kauns nezināt, kauns ir nemācīties." // It’s not shameful to not know, it’s shameful to not learn.
    ];

    let lastIndex = -1;
    const button = document.getElementById("proverb-btn");
    const proverbDisplay = document.getElementById("proverb");

    if (button && proverbDisplay) {
        button.addEventListener("click", () => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * proverbs.length);
            } while (newIndex === lastIndex);
            
            lastIndex = newIndex;
            proverbDisplay.innerText = proverbs[newIndex];
        });
    } else {
        console.error("Button or proverb display element not found.");
    }
});
