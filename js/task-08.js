const loginForm = document.querySelector(".login-form");
loginForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
     const formElements = event.currentTarget.elements;
     const maile = formElements.email.value;
     const password = formElements.password.value;
     if ( maile === "" || password === "" ) {
      const massage = "Усі поля потрібно заповнити!";
       return alert(massage);    }
    console.log(`Emaile: ${maile}, Password: ${password}`);
    event.currentTarget.reset();
};
