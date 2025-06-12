document.addEventListener('DOMContentLoaded', () => {
    const funFacts = [
        "Did you know the first computer programmer was Ada Lovelace?",
        "The word 'bug' in programming originated from a moth found in a relay of the Harvard Mark II computer.",
        "More than 70% of successful cyberattacks start on endpoint devices.",
        "The QWERTY keyboard layout was designed to slow down typists to prevent jams on early typewriters.",
        "The first computer virus was created in 1971 and was called the 'Creeper program'.",
        "The average person blinks about 15-20 times per minute, but this rate decreases to about 7 times per minute when using a computer."
    ];

    const funFactTextElement = document.getElementById('funFactText');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactTextElement.textContent = funFacts[randomIndex];
}); 