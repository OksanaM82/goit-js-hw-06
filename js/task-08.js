const loginForm = document.querySelector(".login-form");
loginForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const maile = formElements.email.value;
    const password = formElements.password.value;
    const formData = { maile, password };
    if (maile === "" || password === "") {
        const massage = "Усі поля потрібно заповнити!";
        return alert(massage);
    }
console.log(formData);
    event.currentTarget.reset();
    
};
