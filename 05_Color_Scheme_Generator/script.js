const colorPicker = document.getElementById("colorPicker");
const schemeMode = document.getElementById("schemeMode");
const generateBtn = document.getElementById("generateBtn");
const palette = document.getElementById("palette");

generateBtn.addEventListener("click", getColors);

function getColors() {
    const hex = colorPicker.value.replace("#", "");
    const mode = schemeMode.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            renderPalette(data.colors);
        })
        .catch(err => {
            console.error(err);
        });
}

function renderPalette(colors) {
    palette.innerHTML = "";

    colors.forEach(color => {
        const colorBlock = document.createElement("div");
        colorBlock.classList.add("color-block");

        colorBlock.innerHTML = `
            <div class="color" style="background:${color.hex.value}"></div>
            <div class="hex">${color.hex.value}</div>
        `;

        colorBlock.addEventListener("click", () => {
            copyHex(color.hex.value);
        });

        palette.appendChild(colorBlock);
    });
}

function copyHex(hex) {
    navigator.clipboard.writeText(hex);

    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = `${hex} copied!`;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 1500);
}

getColors();