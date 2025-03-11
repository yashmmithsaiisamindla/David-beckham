document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (name && message) {
    alert('Thank you for your message, ' + name + '!');
    document.getElementById('contactForm').reset();
  } else {
    alert('Please fill out all fields!');
  }
});
