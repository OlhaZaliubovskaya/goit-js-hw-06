const form = document.querySelector('form.login-form');

form.addEventListener('submit', sendingLoginForm);

function sendingLoginForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (email && password) {
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert('All fields should be filled!');
  }
}
