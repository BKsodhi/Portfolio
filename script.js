// Add your custom JavaScript code here
const form = document.querySelector('#contact form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Replace this with your actual form submission logic
  console.log('Form submitted:', { name, email, message });

  // Reset the form fields
  form.reset();
});
