document.addEventListener("DOMContentLoaded", () => {
    const proverbs = [
        "Darbs dara darītāju.", 
        "Kas sēj vēju, pļauj vētru.", 
        "Taisnība vienmēr uzvar.", 
        "Gudrs neprasa, muļķis neatbild.", 
        "Nav kauns nezināt, kauns ir nemācīties."
    ];

    let lastIndex = -1;
    const button = document.getElementById("proverb-btn");
    const proverbDisplay = document.getElementById("proverb");

    if (!button || !proverbDisplay) {
        console.error("Button or proverb display element not found.");
        return;
    }

    button.addEventListener("click", () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * proverbs.length);
        } while (newIndex === lastIndex);

        lastIndex = newIndex;
        proverbDisplay.innerText = proverbs[newIndex];
    });
});
