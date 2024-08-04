// Get all the buttons with class "btn_yes" and "btn_no"
let yesButtons = document.querySelectorAll(".btn_yes");
let noButtons = document.querySelectorAll(".btn_no");

// Add event listeners to each "Yes" button
yesButtons.forEach(button => {
    button.addEventListener("click", () => changer(button));
});

// Add event listeners to each "NO" button
noButtons.forEach(button => {
    button.addEventListener("mouseover", () => btn_move(button));
});

function changer(button) {
    if (button) {
        button.style.backgroundColor = 'green';
        button.textContent = "IK 😊";
        button.disabled = true;
        button.style.margin = "10px -70px";
        // Update the corresponding 'NO' button margin and style
        let noButton = button.nextElementSibling; // Assumes 'NO' button is next to 'YES'
        if (noButton && noButton.classList.contains("btn_no")) {
            noButton.style.margin = "10px 90px";
            noButton.textContent = "GOOD ";
            noButton.style.backgroundColor = "white";
        }
        alert("Correct choice yayyyyyy 🎉🎉🎉");
    }
}

let isRight = false;
let text = [
    "Sumna Soch lo 😔", "Snek 😔", "Yes kroooo 😡", "Kitna attitude Deekaho gi? 🤕",
    "Jao Jao snek", "Suman Shrm kro 🙂", "Ab Asa kro gi Snek 😶", "No is not an option 😒",
    "Gun Point pr yes kro", "Abhi bhi soch rhe ho? 😧", "Bas yes hi kro 🤩",
    "Attitude ki dukan 😂", "Yes bolo warna... 😈", "Mujhe pata tha tum na kroge 😤",
    "Himmat hai to yes kro! 😎", "Kya baat hai, itna sochna? 🤨", "No nahi chalega! 😒",
    "Ye to sirf ek option hai 😊", "Phir se na? Really? 🙄", "Maan jao, yes hi bolo 😋",
    "Sahi decision lo! 👍", "Kitna mushkil hai yes kehna? 😆", "Himmat kro, yes bolo! 💪",
    "Itna sochne ki kya baat hai? 🤔", "Aakhir kab tak na karoge? 😂", "Yes bolo aur khush raho 😇"
];
let i = 0;

function btn_move(button) {
    if (i >= text.length) {
        i = 0;
    }
    if (!isRight) {
        button.style.marginLeft = '10px'; // Move right
    } else {
        button.style.marginLeft = '350px'; // Move left (reset)
    }
    isRight = !isRight;
    button.textContent = text[i];
    i++;
    button.style.backgroundColor = 'red';
}
