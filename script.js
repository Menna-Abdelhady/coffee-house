
function orderItem(item) {
    alert(`You have ordered a ${item}. Thank you!`);
  }
 
  
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
      alert(`Thank you, ${name}! We have received your message: "${message}"`);
    document.getElementById('contact-form').reset();
  });