const input = document.querySelector('[id="name-input"]'); 
const nameLable = document.querySelector('[id="name-output"]'); 
input.addEventListener('input', onInputChange);
function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        nameLable.textContent = event.currentTarget.value;
    } else { nameLable.textContent = " Anonymous" };
    
}