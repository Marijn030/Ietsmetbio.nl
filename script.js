document.addEventListener("DOMContentLoaded", () => {
    const proverbs = [
        "Darbs dara darītāju.", 
        "Kas sēj vēju, pļauj vētru.", 
        "Taisnība vienmēr uzvar.", 
        "Gudrs neprasa, muļķis neatbild.", 
        "Nav kauns nezināt, kauns ir nemācīties."
    ];

    let shuffledProverbs = [...proverbs]; // Copy array for shuffling
    let index = 0;

    const button = document.getElementById("proverb-btn");
    const proverbDisplay = document.getElementById("proverb");

    if (!button || !proverbDisplay) {
        console.error("Button or proverb display element not found.");
        return;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    button.addEventListener("click", () => {
        if (index === 0) {
            shuffleArray(shuffledProverbs);
        }

        proverbDisplay.innerText = shuffledProverbs[index];
        index++;

        if (index >= shuffledProverbs.length) {
            index = 0; // Reset after all have been shown
        }
    });
});
