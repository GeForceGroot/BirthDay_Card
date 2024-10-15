// Set the person's name
const personName = "John";  // You can change the name here
document.getElementById("person-name").innerText = personName;

// Firework effect
const fireworkFrame = document.querySelector(".firework-frame");

function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.backgroundColor = getRandomColor();
    fireworkFrame.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 2000);
}

function getRandomColor() {
    const colors = ["#ff4b5c", "#ffbf69", "#ffc6ff", "#bde0fe", "#8ac926"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Continuously create fireworks
setInterval(createFirework, 500);
