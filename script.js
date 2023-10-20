const colorInput = document.getElementById('colorInput');
const header = document.getElementById('color-header');
const footer = document.getElementById('color-footer');

colorInput.addEventListener('input', function () {
    const selectedColor = colorInput.value;
    header.style.backgroundColor = selectedColor;
    footer.style.backgroundColor= selectedColor;
});